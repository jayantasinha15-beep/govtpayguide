import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const revalidate = 60;

export const metadata = {
  title: "Government Job Salary & Career Guides | GovtPayIndia",
  description:
    "Explore government job salary, pay level, allowances, selection process, benefits and career-growth guides.",
  alternates: {
    canonical:
      "https://www.govtpayindia.com/government-jobs/guides",
  },
};

type JobArticle = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  status: string | null;
  published_at: string | null;
};

async function getJobGuides(): Promise<JobArticle[]> {
  const { data, error } = await supabase
    .from("articles")
    .select(
      "id, title, slug, description, status, published_at"
    )
    .eq("published", true)
    .eq("category", "Government Jobs")
    .eq("status", "Guide")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Government job guides fetch error:", error.message);
    return [];
  }

  return data ?? [];
}

function formatDate(date: string | null) {
  if (!date) return "Recently updated";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default async function GovernmentJobGuidesPage() {
  const articles = await getJobGuides();

  return (
    <main className="jobs-page">
      <section className="jobs-hero">
        <div className="jobs-container">
          <span className="jobs-label">
            SALARY & CAREER
          </span>

          <h1>Government Job Guides</h1>

          <p>
            Understand Government job salaries, pay levels,
            allowances, selection processes, benefits and career
            progression.
          </p>
        </div>
      </section>

      <section className="jobs-content">
        <div className="jobs-container">
          <div className="section-heading">
            <div>
              <p className="section-label">
                LATEST GUIDES
              </p>

              <h2>Salary and Career Guides</h2>
            </div>

            <Link href="/government-jobs">
              All Government Jobs →
            </Link>
          </div>

          {articles.length > 0 ? (
            <div className="jobs-grid">
              {articles.map((article) => (
                <article className="job-card" key={article.id}>
                  <span className="job-category">
                    Government Job Guide
                  </span>

                  <h3>
                    <Link href={`/updates/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p>
                    {article.description ||
                      "Read salary, pay level and career details."}
                  </p>

                  <div className="job-card-footer">
                    <time>
                      {formatDate(article.published_at)}
                    </time>

                    <Link href={`/updates/${article.slug}`}>
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-jobs">
              <h3>No Government job guides found</h3>

              <p>
                New salary and career guides will appear here
                after publication.
              </p>
            </div>
          )}

          <div className="jobs-disclaimer">
            <h2>Important Notice</h2>

            <p>
              Salary, allowances and service conditions can change
              through official Government orders. Verify important
              information from the relevant authority.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}