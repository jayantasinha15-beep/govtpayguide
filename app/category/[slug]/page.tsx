import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Article = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  status: string;
  featured_image: string | null;
  published_at: string | null;
};

const categories: Record<
  string,
  {
    name: string;
    description: string;
  }
> = {
  "central-government": {
    name: "Central Government",
    description:
      "Latest Central Government employee salary, DA, Pay Commission, pension and allowance updates.",
  },

  "west-bengal": {
    name: "West Bengal",
    description:
      "Latest West Bengal Government employee DA, salary, Pay Commission and pension updates.",
  },

  bihar: {
    name: "Bihar",
    description:
      "Latest Bihar Government employee DA, salary, Pay Commission and pension updates.",
  },

  assam: {
    name: "Assam",
    description:
      "Latest Assam Government employee salary, DA, pension and Pay Commission updates.",
  },

  punjab: {
    name: "Punjab",
    description:
      "Latest Punjab Government employee salary, DA, pension and Pay Commission updates.",
  },

  tripura: {
    name: "Tripura",
    description:
      "Latest Tripura Government employee DA, salary, pension and Pay Commission updates.",
  },

  "andhra-pradesh": {
    name: "Andhra Pradesh",
    description:
      "Latest Andhra Pradesh Government employee salary, DA, pension and Pay Revision updates.",
  },

  "pay-commission": {
    name: "Pay Commission",
    description:
      "Latest Pay Commission news, fitment factor, pay matrix and salary revision updates.",
  },

  pension: {
    name: "Pension",
    description:
      "Latest Government pension, Dearness Relief and retirement benefit updates.",
  },

  da: {
    name: "DA",
    description:
      "Latest Dearness Allowance and Dearness Relief updates for Government employees and pensioners.",
  },
};

function getSupabase() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const supabaseKey =
    process.env
      .NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  return createClient(
    supabaseUrl,
    supabaseKey
  );
}

async function getArticles(
  categoryName: string
): Promise<Article[]> {
  const supabase =
    getSupabase();

  if (!supabase) {
    return [];
  }

  const { data, error } =
    await supabase
      .from("articles")
      .select(`
        id,
        title,
        slug,
        description,
        category,
        status,
        featured_image,
        published_at
      `)
      .eq("published", true)
      .eq("category", categoryName)
      .order(
        "published_at",
        {
          ascending: false,
        }
      );

  if (error) {
    console.error(
      "Category article error:",
      error
    );

    return [];
  }

  return data ?? [];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } =
    await params;

  const category =
    categories[slug];

  if (!category) {
    return {
      title:
        "Category Not Found",
    };
  }

  return {
    title: `${category.name} Updates`,

    description:
      category.description,

    alternates: {
      canonical:
        `/category/${slug}`,
    },

    openGraph: {
      title: `${category.name} Updates`,
      description:
        category.description,
      type: "website",
    },
  };
}

export default async function CategoryPage({
  params,
}: PageProps) {
  const { slug } =
    await params;

  const category =
    categories[slug];

  if (!category) {
    notFound();
  }

  const articles =
    await getArticles(
      category.name
    );

  return (
    <main>
      {/* CATEGORY HERO */}

      <section className="state-hero">
        <div className="container">
          <span className="page-badge">
            Article Category
          </span>

          <h1>
            {category.name} Updates
          </h1>

          <p>
            {category.description}
          </p>
        </div>
      </section>

      {/* ARTICLES */}

      <section className="category-articles-section">
        <div className="container">
          <div className="category-section-header">
            <div>
              <h2>
                Latest Articles
              </h2>

              <p>
                Latest published updates in{" "}
                {category.name}.
              </p>
            </div>

            <span className="category-count">
              {articles.length}{" "}
              {articles.length === 1
                ? "Article"
                : "Articles"}
            </span>
          </div>

          {articles.length === 0 ? (
            <div className="category-empty">
              <h3>
                No articles published yet
              </h3>

              <p>
                New {category.name} updates
                will appear here after they
                are published.
              </p>

              <Link
                href="/updates"
                className="category-back-link"
              >
                View All Updates
              </Link>
            </div>
          ) : (
            <div className="category-article-grid">
              {articles.map(
                (article) => {
                  const formattedDate =
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

                  return (
                    <article
                      key={article.id}
                      className="category-article-card"
                    >
                      {article.featured_image && (
                        <Link
                          href={`/updates/${article.slug}`}
                          className="category-card-image"
                        >
                          <img
                            src={
                              article.featured_image
                            }
                            alt={
                              article.title
                            }
                          />
                        </Link>
                      )}

                      <div className="category-card-content">
                        <div className="category-card-meta">
                          <span>
                            {
                              article.category
                            }
                          </span>

                          <span>
                            {
                              article.status
                            }
                          </span>
                        </div>

                        <h2>
                          <Link
                            href={`/updates/${article.slug}`}
                          >
                            {
                              article.title
                            }
                          </Link>
                        </h2>

                        <p>
                          {
                            article.description
                          }
                        </p>

                        <div className="category-card-footer">
                          {formattedDate && (
                            <time>
                              {
                                formattedDate
                              }
                            </time>
                          )}

                          <Link
                            href={`/updates/${article.slug}`}
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                }
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}