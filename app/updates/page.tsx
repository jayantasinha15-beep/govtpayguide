import type { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Government Salary, DA & Pay Commission Updates",
  description:
    "Latest government salary, DA, Pay Commission, pension and pay revision updates for Central Government and State Government employees.",
  alternates: {
    canonical: "/updates",
  },
};

type Article = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  status: string;
  published_at: string | null;
};

function formatDate(date: string | null) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default async function UpdatesPage() {
  const { data: articles, error } = await supabase
    .from("articles")
    .select(
      `
        id,
        title,
        slug,
        description,
        category,
        status,
        published_at
      `
    )
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Error loading articles:", error);
  }

  const updates: Article[] = articles || [];

  return (
    <main>
      <section className="updates-page-hero">
        <div className="container">
          <span className="page-badge">GovtPayGuide Updates</span>

          <h1>Government Salary & Pay Updates</h1>

          <p>
            Follow important developments in Dearness Allowance, Pay
            Commissions, salary revision, pay matrix, pension and government
            employee benefits.
          </p>
        </div>
      </section>

      <div className="container updates-page-container">
        <section className="updates-page-intro">
          <div>
            <span className="updates-section-label">
              Latest Updates
            </span>

            <h2>Salary, DA & Pay Commission News</h2>
          </div>

          <p>
            Official Government updates, salary information, DA revisions,
            Pay Commission developments and analysis.
          </p>
        </section>

        {updates.length > 0 ? (
          <section className="updates-list-grid">
            {updates.map((article) => (
              <article
                className="updates-news-card"
                key={article.id}
              >
                <div className="updates-card-meta">
                  <span className="updates-category">
                    {article.category}
                  </span>

                  <span className="updates-status">
                    {article.status}
                  </span>
                </div>

                <h2>
                  <Link href={`/updates/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p>{article.description}</p>

                <div className="updates-card-footer">
                  {article.published_at && (
                    <span>
                      Published:{" "}
                      {formatDate(article.published_at)}
                    </span>
                  )}

                  <Link href={`/updates/${article.slug}`}>
                    {article.status === "Analysis"
                      ? "Read Analysis →"
                      : "Read Update →"}
                  </Link>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <div className="updates-info-box">
            <h2>No published updates yet</h2>

            <p>
              Published articles will appear here automatically.
            </p>
          </div>
        )}

        <section className="updates-info-box">
          <div>
            <span className="updates-section-label">
              How We Label Updates
            </span>

            <h2>Official Information vs Analysis</h2>
          </div>

          <div className="updates-label-grid">
            <div>
              <strong>Official Update</strong>

              <p>
                Information supported by Government resolutions,
                notifications, orders or official portals.
              </p>
            </div>

            <div>
              <strong>Analysis</strong>

              <p>
                Explanations, calculations and scenarios based on
                available information. These are not Government
                decisions.
              </p>
            </div>

            <div>
              <strong>DA Update</strong>

              <p>
                Updates related to Dearness Allowance rates,
                revisions and effective dates.
              </p>
            </div>
          </div>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> GovtPayGuide is an independent
          informational website and is not affiliated with any
          Government department or Pay Commission. Always verify
          important information from official Government
          notifications.
        </div>
      </div>
    </main>
  );
}