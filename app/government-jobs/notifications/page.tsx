import Link from "next/link";
import { supabase } from "@/lib/supabase";

export const revalidate = 60;

export const metadata = {
  title: "Latest Government Job Notifications 2026 | GovtPayIndia",
  description:
    "Find the latest Central and State Government recruitment notifications, vacancies, eligibility, application dates and official links.",
  alternates: {
    canonical:
      "https://www.govtpayindia.com/government-jobs/notifications",
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

async function getNotifications(): Promise<JobArticle[]> {
  const { data, error } = await supabase
    .from("articles")
    .select(
      "id, title, slug, description, status, published_at"
    )
    .eq("published", true)
    .eq("category", "Government Jobs")
    .eq("status", "Recruitment Notification")
    .order("published_at", { ascending: false });

  if (error) {
    console.error(
      "Recruitment notifications fetch error:",
      error.message
    );

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

export default async function RecruitmentNotificationsPage() {
  const articles = await getNotifications();

  return (
    <main className="jobs-page">
      <section className="jobs-hero">
        <div className="jobs-container">
          <span className="jobs-label">
            LATEST VACANCIES
          </span>

          <h1>Government Recruitment Notifications</h1>

          <p>
            Find the latest verified Central and State Government
            vacancies, eligibility criteria, application dates and
            official notification links.
          </p>
        </div>
      </section>

      <section className="jobs-content">
        <div className="jobs-container">
          <div className="section-heading">
            <div>
              <p className="section-label">
                RECRUITMENT UPDATES
              </p>

              <h2>Latest Notifications</h2>
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
                    Recruitment Notification
                  </span>

                  <h3>
                    <Link href={`/updates/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p>
                    {article.description ||
                      "Check vacancy, eligibility and application details."}
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
              <h3>No recruitment notifications found</h3>

              <p>
                New Government recruitment notifications will
                appear here after publication.
              </p>
            </div>
          )}

          <div className="jobs-disclaimer">
            <h2>Important Notice</h2>

            <p>
              Always confirm vacancies, eligibility, deadlines and
              application details from the official recruitment
              notification before applying.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}