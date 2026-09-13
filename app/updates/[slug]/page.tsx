import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
export const revalidate = 300;
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
  updated_at: string;
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

async function getArticle(
  slug: string
): Promise<Article | null> {
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
}

/* =========================================
   INLINE BOLD TEXT
========================================= */

function renderInlineText(text: string) {
  // Detect **bold** text and URLs
  const parts = text.split(
    /(\*\*.*?\*\*|https?:\/\/[^\s]+)/g
  );

  return parts.map((part, index) => {
    // Bold text
    if (
      part.startsWith("**") &&
      part.endsWith("**")
    ) {
      return (
        <strong key={index}>
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Clickable URL
    if (
      part.startsWith("http://") ||
      part.startsWith("https://")
    ) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="article-external-link"
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

/* =========================================
   CONTENT PARSER
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

  for (const line of contentLines) {
    /* Empty line */

    if (!line) {
      flushLists();
      continue;
    }

    /* H3 */

    if (line.startsWith("### ")) {
      flushLists();

      contentBlocks.push({
        type: "h3",
        text: line.replace(
          /^###\s+/,
          ""
        ),
      });

      continue;
    }

    /* H2 */

    if (line.startsWith("## ")) {
      flushLists();

      contentBlocks.push({
        type: "h2",
        text: line.replace(
          /^##\s+/,
          ""
        ),
      });

      continue;
    }

    /* Bullet List */

    if (line.startsWith("- ")) {
      if (orderedListItems.length > 0) {
        flushLists();
      }

      listItems.push(
        line.replace(/^-\s+/, "")
      );

      continue;
    }

    /* Numbered List */

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

      continue;
    }

    /* Normal Paragraph */

    flushLists();

    contentBlocks.push({
      type: "paragraph",
      text: line,
    });
  }

  flushLists();

  return contentBlocks;
}

/* =========================================
   SEO METADATA
========================================= */

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article =
    await getArticle(slug);

  if (!article) {
    return {
      title:
        "Article Not Found | GovtPayGuide",
    };
  }

  const title =
    article.meta_title ||
    article.title;

  const description =
    article.meta_description ||
    article.description;

  return {
    title: `${title} | GovtPayGuide`,

    description,

    keywords: article.keywords
      ? article.keywords
          .split(",")
          .map((keyword) =>
            keyword.trim()
          )
      : undefined,

    alternates: {
      canonical: `/updates/${article.slug}`,
    },

    openGraph: {
      title,
      description,
      type: "article",

      publishedTime:
        article.published_at ||
        undefined,

      modifiedTime:
        article.updated_at ||
        undefined,

      images: article.featured_image
        ? [
            {
              url: article.featured_image,
              alt: article.title,
            },
          ]
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

  const contentBlocks =
    parseContent(article.content);

  return (
    <main>
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
          </div>

          {/* FEATURED IMAGE */}

          {article.featured_image && (
            <div className="public-article-image">
              <img
                src={
                  article.featured_image
                }
                alt={article.title}
              />
            </div>
          )}

          {/* ARTICLE BODY */}

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