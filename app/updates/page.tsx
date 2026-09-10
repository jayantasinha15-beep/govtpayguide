import type { Metadata } from "next";
import Link from "next/link";
import { updates } from "@/data/updates";

export const metadata: Metadata = {
  title: "Latest Government Salary, DA & Pay Commission Updates",
  description:
    "Read the latest Government salary, Dearness Allowance, Pay Commission, pension and State Government employee updates.",
  alternates: {
    canonical: "/updates",
  },
};

export default function UpdatesPage() {
  const sortedUpdates = [...updates].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  );

  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Latest Updates</span>

          <h1>Government Salary & Pay Updates</h1>

          <p>
            Read the latest DA, Pay Commission, salary, pension and State
            Government employee updates in one place.
          </p>
        </div>
      </section>

      <div className="container state-page-content">
        <section className="updates-page-section">
          <div className="updates-page-header">
            <div>
              <span className="section-label">Latest News</span>
              <h2>Recent Government Employee Updates</h2>
              <p>
                Browse recently published updates related to government pay,
                allowances, pension and Pay Commission developments.
              </p>
            </div>
          </div>

          <div className="updates-page-grid">
            {sortedUpdates.map((item) => (
              <article className="updates-page-card" key={item.slug}>
                <div className="updates-page-meta">
                  <span className="updates-page-category">
                    {item.category}
                  </span>

                  <span
                    className={`updates-page-status ${
                      item.status === "Analysis"
                        ? "analysis"
                        : item.status === "DA Update"
                        ? "da"
                        : "official"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <Link
                  href={item.href}
                  className="updates-page-title"
                >
                  <h2>{item.title}</h2>
                </Link>

                <p>{item.description}</p>

                <div className="updates-page-footer">
                  <span>
                    {new Date(item.publishedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>

                  <Link href={item.href}>
                    {item.status === "Analysis"
                      ? "Read Analysis →"
                      : "Read Full Update →"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> GovtPayGuide is an independent
          informational website and is not affiliated with the Government of
          India or any State Government. Always verify important salary,
          pension, DA and Pay Commission information from official Government
          notifications.
        </div>
      </div>
    </main>
  );
}