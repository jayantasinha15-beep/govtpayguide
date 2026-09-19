import Link from "next/link";
import { supabase } from "@/lib/supabase";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = {
  title: "Latest Government Jobs 2026 | GovtPayIndia",
  description:
    "Find the latest Central and State Government job updates, salary details, eligibility, important dates and official notification links.",
  alternates: {
    canonical: "https://govtpayindia.com/government-jobs",
  },
};

type JobArticle = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  published_at: string | null;
};

async function getJobArticles(): Promise<JobArticle[]> {
  const { data, error } = await supabase
    .from("articles")
    .select("id, title, slug, description, category, published_at")
    .eq("published", true)
    .eq("category", "Government Jobs")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Government jobs fetch error:", error.message);
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

export default async function GovernmentJobsPage() {
  const articles = await getJobArticles();

  return (
    <main className="jobs-page">
      <section className="jobs-hero">
        <div className="jobs-container">
          <span className="jobs-label">GOVERNMENT JOB UPDATES</span>

          <h1>Latest Government Jobs 2026</h1>

          <p>
            Explore verified Central and State Government job updates,
            eligibility, salary details, important dates and official
            notification links.
          </p>
        </div>
      </section>

      <section className="jobs-content">
        <div className="jobs-container">
          <div className="section-heading">
            <div>
              <p className="section-label">LATEST UPDATES</p>
              <h2>Government Job Articles</h2>
            </div>

            <Link href="/updates">View All Updates →</Link>
          </div>

          {articles.length > 0 ? (
            <div className="jobs-grid">
              {articles.map((article) => (
                <article className="job-card" key={article.id}>
                  <span className="job-category">
                    {article.category || "Government Jobs"}
                  </span>

                  <h3>
                    <Link href={`/updates/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p>
                    {article.description ||
                      "Read the latest government job details, eligibility, salary and official updates."}
                  </p>

                  <div className="job-card-footer">
                    <time>{formatDate(article.published_at)}</time>

                    <Link href={`/updates/${article.slug}`}>
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-jobs">
              <h3>Government job updates are coming soon</h3>
              <p>
                New recruitment, eligibility and salary articles will be
                published here.
              </p>
            </div>
          )}

          <div className="jobs-disclaimer">
            <h2>Important Notice</h2>

            <p>
              GovtPayIndia is not affiliated with any government department or
              recruitment agency. Candidates should always verify application
              dates, eligibility and recruitment details from the official
              notification before applying.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}