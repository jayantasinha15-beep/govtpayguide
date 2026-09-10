import Link from "next/link";
import { updates } from "@/data/updates";

export default function Home() {
  const latestUpdates = [...updates]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime()
    )
    .slice(0, 3);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow">
            Government Salary & Pay Updates
          </span>

          <h1>
            DA, Pay Commission & Government Salary Information in One Place
          </h1>

          <p>
            Check latest DA updates, understand Pay Commission rules,
            calculate salary, explore pay matrix levels, pension information
            and more.
          </p>

          <div className="hero-actions">
            <Link href="/salary-calculator" className="btn primary">
              Calculate Salary
            </Link>

            <Link href="/da" className="btn secondary">
              Latest DA Updates
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="quick-links container">
        <Link href="/da" className="feature-card">
          <div className="icon">%</div>

          <h2>DA Updates</h2>

          <p>
            Latest Dearness Allowance rates, revisions, effective dates and
            previous DA history.
          </p>

          <span>View DA Updates →</span>
        </Link>

        <Link href="/pay-commission" className="feature-card">
          <div className="icon">₹</div>

          <h2>Pay Commission</h2>

          <p>
            Understand Pay Commission recommendations, fitment factors and
            salary revisions.
          </p>

          <span>Explore Pay Commission →</span>
        </Link>

        <Link href="/salary-calculator" className="feature-card">
          <div className="icon">🧮</div>

          <h2>Salary Calculator</h2>

          <p>
            Calculate Basic Pay, DA, HRA, allowances, gross salary and
            estimated take-home pay.
          </p>

          <span>Calculate Salary →</span>
        </Link>

        <Link href="/pay-matrix" className="feature-card">
          <div className="icon">▦</div>

          <h2>Pay Matrix</h2>

          <p>
            Browse government pay levels and understand how salary progresses
            through the pay matrix.
          </p>

          <span>View Pay Matrix →</span>
        </Link>
      </section>

      {/* LATEST NEWS */}
      <section className="latest-updates-section">
        <div className="container">
          <div className="latest-updates-header">
            <div>
              <span className="section-label">
                Latest News
              </span>

              <h2>Government Salary & Pay Updates</h2>

              <p>
                Latest DA, Pay Commission, salary and pension updates for
                Central and State Government employees.
              </p>
            </div>

            <Link
              href="/updates"
              className="view-all-updates"
            >
              View All Updates →
            </Link>
          </div>

          <div className="latest-news-grid">
            {latestUpdates.map((item) => (
              <article
                className="latest-news-card"
                key={item.slug}
              >
                <div className="latest-news-meta">
                  <span className="latest-news-category">
                    {item.category}
                  </span>

                  {item.featured && (
                    <span className="latest-news-badge">
                      Latest
                    </span>
                  )}
                </div>

                <Link
                  href={item.href}
                  className="latest-news-title"
                >
                  <h3>{item.title}</h3>
                </Link>

                <p>{item.description}</p>

                <div className="latest-news-footer">
                  <span className="latest-news-date">
                    {new Date(
                      item.publishedAt
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
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
        </div>
      </section>

      {/* CALCULATORS */}
      <section className="tools-section container">
        <div className="section-heading">
          <div>
            <span className="section-label">
              Free Tools
            </span>

            <h2>Government Salary Calculators</h2>
          </div>

          <Link href="/calculators">
            View All Calculators →
          </Link>
        </div>

        <div className="tools-grid">
          <Link
            href="/salary-calculator"
            className="tool-card"
          >
            <h3>Salary Calculator</h3>

            <p>
              Estimate gross and take-home government salary.
            </p>
          </Link>

          <Link
            href="/da-calculator"
            className="tool-card"
          >
            <h3>DA Calculator</h3>

            <p>
              Calculate Dearness Allowance based on your Basic Pay.
            </p>
          </Link>

          <Link
            href="/hra-calculator"
            className="tool-card"
          >
            <h3>HRA Calculator</h3>

            <p>
              Estimate House Rent Allowance based on Basic Pay.
            </p>
          </Link>

          <Link
            href="/arrears-calculator"
            className="tool-card"
          >
            <h3>DA Arrears Calculator</h3>

            <p>
              Estimate arrears after a Dearness Allowance revision.
            </p>
          </Link>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="disclaimer-box container">
        <strong>Important:</strong> GovtPayGuide is an independent
        informational website and is not affiliated with the Government of
        India or any State Government. Always verify important salary, DA,
        pension and Pay Commission information from official Government
        notifications.
      </section>
    </main>
  );
}