import { unstable_cache } from "next/cache";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export const revalidate = 60;

/* =========================================
   TYPES
========================================= */

type Article = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  status: string;
  content: string;
  meta_title: string | null;
  meta_description: string | null;
  keywords: string | null;
  featured_image: string | null;
  published: boolean;
  published_at: string | null;
  updated_at: string | null;
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ContentBlock =
  | {
      type: "h2";
      text: string;
    }
  | {
      type: "h3";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "ordered-list";
      items: string[];
    }
  | {
      type: "table";
      headers: string[];
      rows: string[][];
    };

/* =========================================
   SUPABASE
========================================= */

function getSupabase() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase environment variables are missing."
    );
  }

  return createClient(
    supabaseUrl,
    supabaseKey
  );
}

/* =========================================
   GET ARTICLE
========================================= */

const getArticle = unstable_cache(
  async (
    slug: string
  ): Promise<Article | null> => {
    const supabase = getSupabase();

    const { data, error } = await supabase
      .from("articles")
      .select(`
        id,
        title,
        slug,
        description,
        category,
        status,
        content,
        meta_title,
        meta_description,
        keywords,
        featured_image,
        published,
        published_at,
        updated_at
      `)
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle<Article>();

    if (error) {
      console.error(
        "Failed to load article:",
        error
      );

      return null;
    }

    return data;
  },
  ["published-article"],
  {
    revalidate: 60,
  }
);

/* =========================================
   INLINE TEXT
   Supports **bold** and URLs
========================================= */

function renderInlineText(text: string) {
  const parts = text.split(
    /(\[[^\]]+\]\(https?:\/\/[^)\s]+\)|\*\*.*?\*\*|https?:\/\/[^\s<]+)/g
  );

  const externalLink = (
    url: string,
    label: string,
    key: number
  ) => (
    <a
      key={key}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="article-external-link"
    >
      {label}
    </a>
  );

  return parts.map((part, index) => {
    /* Markdown link: [Text](https://example.com) */

    const markdownLink = part.match(
      /^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/
    );

    if (markdownLink) {
      return externalLink(
        markdownLink[2],
        markdownLink[1],
        index
      );
    }

    /* Bold text or bold URL */

    if (
      part.startsWith("**") &&
      part.endsWith("**")
    ) {
      const boldContent = part.slice(2, -2);

      if (
        boldContent.startsWith("http://") ||
        boldContent.startsWith("https://")
      ) {
        return (
          <strong key={index}>
            <a
              href={boldContent}
              target="_blank"
              rel="noopener noreferrer"
              className="article-external-link"
            >
              {boldContent}
            </a>
          </strong>
        );
      }

      return (
        <strong key={index}>
          {boldContent}
        </strong>
      );
    }

    /* Plain URL */

    if (
      part.startsWith("http://") ||
      part.startsWith("https://")
    ) {
      return externalLink(part, part, index);
    }

    return part;
  });
}

/* =========================================
   CONTENT PARSER
   Supports:
   ## H2
   ### H3
   - Bullet lists
   1. Numbered lists
   Markdown tables
   **Bold**
   URLs
========================================= */

function parseContent(
  content: string
): ContentBlock[] {
  const contentLines = content
    .split("\n")
    .map((line) => line.trim());

  const contentBlocks: ContentBlock[] = [];

  let listItems: string[] = [];
  let orderedListItems: string[] = [];

  /* Flush Lists */

  const flushLists = () => {
    if (listItems.length > 0) {
      contentBlocks.push({
        type: "list",
        items: [...listItems],
      });

      listItems = [];
    }

    if (orderedListItems.length > 0) {
      contentBlocks.push({
        type: "ordered-list",
        items: [...orderedListItems],
      });

      orderedListItems = [];
    }
  };

  /* Parse Table Row */

  const parseTableRow = (
    line: string
  ): string[] => {
    return line
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((cell) => cell.trim());
  };

  /* Detect Markdown Table Separator */

  const isTableSeparator = (
    line: string
  ): boolean => {
    if (!line.includes("|")) {
      return false;
    }

    const cells =
      parseTableRow(line);

    return (
      cells.length > 0 &&
      cells.every((cell) =>
        /^:?-{3,}:?$/.test(cell)
      )
    );
  };

  let i = 0;

  while (i < contentLines.length) {
    const line = contentLines[i];

    /* =====================================
       EMPTY LINE
    ===================================== */

    if (!line) {
      flushLists();
      i++;
      continue;
    }

    /* =====================================
       MARKDOWN TABLE
    ===================================== */

    if (
      line.includes("|") &&
      i + 1 < contentLines.length &&
      isTableSeparator(
        contentLines[i + 1]
      )
    ) {
      flushLists();

      const headers =
        parseTableRow(line);

      const rows: string[][] = [];

      i += 2;

      while (
        i < contentLines.length &&
        contentLines[i] &&
        contentLines[i].includes("|")
      ) {
        rows.push(
          parseTableRow(
            contentLines[i]
          )
        );

        i++;
      }

      contentBlocks.push({
        type: "table",
        headers,
        rows,
      });

      continue;
    }
    /* Ignore H1 inside article content.
   The page already displays article.title as H1. */

if (line.startsWith("# ")) {
  flushLists();
  i++;
  continue;
}

    /* =====================================
       H3
    ===================================== */

    if (line.startsWith("### ")) {
      flushLists();

      contentBlocks.push({
        type: "h3",
        text: line.replace(
          /^###\s+/,
          ""
        ),
      });

      i++;
      continue;
    }

    /* =====================================
       H2
    ===================================== */

    if (line.startsWith("## ")) {
      flushLists();

      contentBlocks.push({
        type: "h2",
        text: line.replace(
          /^##\s+/,
          ""
        ),
      });

      i++;
      continue;
    }

    /* =====================================
       BULLET LIST
    ===================================== */

    if (line.startsWith("- ")) {
      if (
        orderedListItems.length > 0
      ) {
        flushLists();
      }

      listItems.push(
        line.replace(
          /^-\s+/,
          ""
        )
      );

      i++;
      continue;
    }

    /* =====================================
       NUMBERED LIST
    ===================================== */

    if (/^\d+\.\s+/.test(line)) {
      if (listItems.length > 0) {
        flushLists();
      }

      orderedListItems.push(
        line.replace(
          /^\d+\.\s+/,
          ""
        )
      );

      i++;
      continue;
    }

    /* =====================================
       NORMAL PARAGRAPH
    ===================================== */

    flushLists();

    contentBlocks.push({
      type: "paragraph",
      text: line,
    });

    i++;
  }

  flushLists();

  return contentBlocks;
}
function cleanMetaTitle(value: string) {
  return value
    .replace(
      /(\s*\|\s*GovtPayGuide)+\s*$/gi,
      ""
    )
    .trim();
}
/* =========================================
   SEO METADATA
========================================= */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = await getArticle(slug);

  if (!article) {
    return {
      title: "Article Not Found",

      description:
        "The requested article could not be found.",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = cleanMetaTitle(
  article.meta_title?.trim() ||
    article.title
);

  const description =
    article.meta_description?.trim() ||
    article.description;

  const articleUrl =
    `/updates/${article.slug}`;

  const images = article.featured_image
    ? [
        {
          url: article.featured_image,
          width: 1200,
          height: 675,
          alt: article.title,
        },
      ]
    : undefined;

  return {
    /*
      Root layout-এর template নিজে থেকেই
      শেষে "| GovtPayGuide" যোগ করবে।
    */
    title,

    description,

    authors: [
      {
        name: "Jayanta Singha",
        url: "https://www.govtpayindia.com/author/jayanta-singha",
      },
    ],

    creator: "Jayanta Singha",
    publisher: "GovtPayGuide",

    keywords: article.keywords
      ? article.keywords
          .split(",")
          .map((keyword) => keyword.trim())
          .filter(Boolean)
      : undefined,

    alternates: {
      canonical: articleUrl,
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    openGraph: {
      title,
      description,
      url: articleUrl,
      siteName: "GovtPayGuide",
      type: "article",
      locale: "en_IN",

      publishedTime:
        article.published_at || undefined,

      modifiedTime:
        article.updated_at || undefined,

      authors: [
        "https://www.govtpayindia.com/author/jayanta-singha",
      ],

      images,
    },

    twitter: {
      card: article.featured_image
        ? "summary_large_image"
        : "summary",

      title,
      description,

      images: article.featured_image
        ? [article.featured_image]
        : undefined,
    },
  };
}
/* =========================================
   ARTICLE PAGE
========================================= */

export default async function ArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const article =
    await getArticle(slug);

  if (!article) {
    notFound();
  }

  const publishedDate =
    article.published_at
      ? new Date(
          article.published_at
        ).toLocaleDateString(
          "en-IN",
          {
            day: "numeric",
            month: "long",
            year: "numeric",
          }
        )
      : "";
      const wasUpdated =
  Boolean(
    article.updated_at &&
      article.published_at &&
      new Date(article.updated_at).getTime() >
        new Date(article.published_at).getTime() +
          60000
  );

const updatedDate =
  wasUpdated && article.updated_at
    ? new Date(
        article.updated_at
      ).toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )
    : "";

  const contentBlocks =
    parseContent(article.content);

  const articleUrl =
    `https://www.govtpayindia.com/updates/${article.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: article.title,
    description: article.description,

    image: article.featured_image
      ? [article.featured_image]
      : undefined,

    datePublished:
      article.published_at || undefined,

    dateModified:
      article.updated_at ||
      article.published_at ||
      undefined,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },

    author: {
      "@type": "Person",
      name: "Jayanta Singha",
      url: "https://www.govtpayindia.com/author/jayanta-singha",
      jobTitle: "Author and Web Developer",
    },

    publisher: {
      "@type": "Organization",
      name: "GovtPayGuide",
      url: "https://www.govtpayindia.com",

      logo: {
        "@type": "ImageObject",
        url: "https://www.govtpayindia.com/icon.png",
      },
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* =====================================
          ARTICLE HERO
      ====================================== */}

      <section className="state-hero">
        <div className="container">
          <span className="page-badge">
            {article.category}
          </span>

          <h1>
            {article.title}
          </h1>

          <p>
            {article.description}
          </p>
        </div>
      </section>

      {/* =====================================
          ARTICLE CONTENT
      ====================================== */}

      <div className="container article-public-page">
        <article className="public-article-card">

          {/* META */}

          <div className="public-article-meta">
            <span>
              {article.status}
            </span>

            {publishedDate && (
  <span>
    Published {publishedDate}
  </span>
)}

{updatedDate && (
  <span>
    Updated {updatedDate}
  </span>
)}

            <span>
              Written by{" "}
              <Link
                href="/author/jayanta-singha"
                className="article-author-link"
              >
                Jayanta Singha
              </Link>
            </span>
          </div>

          {/* FEATURED IMAGE */}

          {article.featured_image && (
            <div className="public-article-image">
              <Image
  src={article.featured_image}
  alt={article.title}
  width={1200}
  height={675}
  sizes="(max-width: 768px) 100vw, 1200px"
  priority={false}
  unoptimized
  style={{
    width: "100%",
    height: "auto",
  }}
/>
            </div>
          )}

          {/* =====================================
              ARTICLE BODY
          ====================================== */}

          <div className="public-article-content">
            {contentBlocks.map(
              (block, index) => {

                /* H2 */

                if (
                  block.type === "h2"
                ) {
                  return (
                    <h2 key={index}>
                      {renderInlineText(
                        block.text
                      )}
                    </h2>
                  );
                }

                /* H3 */

                if (
                  block.type === "h3"
                ) {
                  return (
                    <h3 key={index}>
                      {renderInlineText(
                        block.text
                      )}
                    </h3>
                  );
                }

                /* BULLET LIST */

                if (
                  block.type === "list"
                ) {
                  return (
                    <ul key={index}>
                      {block.items.map(
                        (
                          item,
                          itemIndex
                        ) => (
                          <li
                            key={
                              itemIndex
                            }
                          >
                            {renderInlineText(
                              item
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  );
                }

                /* NUMBERED LIST */

                if (
                  block.type ===
                  "ordered-list"
                ) {
                  return (
                    <ol key={index}>
                      {block.items.map(
                        (
                          item,
                          itemIndex
                        ) => (
                          <li
                            key={
                              itemIndex
                            }
                          >
                            {renderInlineText(
                              item
                            )}
                          </li>
                        )
                      )}
                    </ol>
                  );
                }

                /* =================================
                   TABLE
                ================================= */

                if (
                  block.type === "table"
                ) {
                  return (
                    <div
                      className="article-table-wrapper"
                      key={index}
                    >
                      <table className="article-table">
                        <thead>
                          <tr>
                            {block.headers.map(
                              (
                                header,
                                headerIndex
                              ) => (
                                <th
                                  key={
                                    headerIndex
                                  }
                                >
                                  {renderInlineText(
                                    header
                                  )}
                                </th>
                              )
                            )}
                          </tr>
                        </thead>

                        <tbody>
                          {block.rows.map(
                            (
                              row,
                              rowIndex
                            ) => (
                              <tr
                                key={
                                  rowIndex
                                }
                              >
                                {block.headers.map(
                                  (
                                    _,
                                    cellIndex
                                  ) => (
                                    <td
                                      key={
                                        cellIndex
                                      }
                                    >
                                      {renderInlineText(
                                        row[
                                          cellIndex
                                        ] || ""
                                      )}
                                    </td>
                                  )
                                )}
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  );
                }

                /* PARAGRAPH */

                return (
                  <p key={index}>
                    {renderInlineText(
                      block.text
                    )}
                  </p>
                );
              }
            )}
          </div>

          {/* =====================================
              DISCLAIMER
          ====================================== */}

          <div className="article-disclaimer">
            <strong>
              Disclaimer:
            </strong>{" "}
            GovtPayGuide is an independent
            informational website and is not
            affiliated with any Government
            department. Readers should verify
            important orders, rates and
            notifications from the relevant
            official Government source.
          </div>
        </article>
      </div>
    </main>
  );
}
