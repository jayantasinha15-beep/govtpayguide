import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const revalidate = 60;

export const metadata = {
  title: "Latest Government Jobs 2026 | GovtPayIndia",
  description:
    "Find the latest government recruitment notifications, salary guides, eligibility details, important dates and official links.",
  alternates: {
    canonical: "https://www.govtpayindia.com/government-jobs",
  },
};

type JobArticle = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  status: string | null;
  published_at: string | null;
};

async function getJobArticles(): Promise<JobArticle[]> {
  const { data, error } = await supabase
    .from("articles")
    .select(
      "id, title, slug, description, category, status, published_at"
    )
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

function ArticleGrid({
  articles,
  emptyMessage,
}: {
  articles: JobArticle[];
  emptyMessage: string;
}) {
  if (articles.length === 0) {
    return (
      <div className="empty-jobs">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="jobs-grid">
      {articles.map((article) => (
        <article className="job-card" key={article.id}>
          <span className="job-category">
            {article.status || "Government Jobs"}
          </span>

          <h3>
            <Link href={`/updates/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          <p>
            {article.description ||
              "Read the latest government job information and official updates."}
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
  );
}

export default async function GovernmentJobsPage() {
  const articles = await getJobArticles();

  const recruitmentArticles = articles.filter(
    (article) =>
      article.status === "Recruitment Notification"
  );

  const guideArticles = articles.filter(
    (article) => article.status === "Guide"
  );

  return (
    <main className="jobs-page">
      <section className="jobs-hero">
        <div className="jobs-container">
          <span className="jobs-label">
            GOVERNMENT JOB UPDATES
          </span>

          <h1>Latest Government Jobs 2026</h1>

          <p>
            Explore verified government recruitment notifications,
            eligibility details, important dates, salary information
            and career guides.
          </p>
        </div>
      </section>

      <section className="jobs-content">
        <div className="jobs-container">
          <div className="section-heading">
            <div>
              <p className="section-label">
                LATEST VACANCIES
              </p>

              <h2>Recruitment Notifications</h2>
            </div>
          </div>

          <ArticleGrid
            articles={recruitmentArticles}
            emptyMessage="No recruitment notifications have been published yet."
          />

          <div
            className="section-heading"
            style={{ marginTop: "60px" }}
          >
            <div>
              <p className="section-label">
                SALARY & CAREER
              </p>

              <h2>Government Job Guides</h2>
            </div>
          </div>

          <ArticleGrid
            articles={guideArticles}
            emptyMessage="No government job guides have been published yet."
          />

          <div className="jobs-disclaimer">
            <h2>Important Notice</h2>

            <p>
              GovtPayIndia is not affiliated with any Government
              department or recruitment agency. Candidates should
              always verify vacancies, eligibility, dates and
              application details from the official notification
              before applying.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}