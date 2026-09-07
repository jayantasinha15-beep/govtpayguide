import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <span className="eyebrow">Government Salary & Pay Updates</span>

          <h1>
            DA, Pay Commission & Government Salary Information in One Place
          </h1>

          <p>
            Check latest DA updates, understand Pay Commission rules, calculate
            salary, explore pay matrix levels, pension information and more.
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
            Calculate Basic Pay, DA, HRA, allowances, gross salary and estimated
            take-home pay.
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

      <section className="updates-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">Latest Information</span>
              <h2>Government Salary Updates</h2>
            </div>

            <Link href="/guides">View all guides →</Link>
          </div>

          <div className="updates-grid">
            <article className="update-card">
              <span className="category">DA</span>
              <h3>Latest Dearness Allowance Update</h3>
              <p>
                Follow official DA revisions, effective dates and understand how
                a DA increase affects monthly salary.
              </p>
              <Link href="/da">Read More →</Link>
            </article>

            <article className="update-card">
              <span className="category">PAY COMMISSION</span>
              <h3>Understanding the Pay Commission</h3>
              <p>
                Learn how pay commissions affect basic pay, allowances, pension
                and the overall salary structure.
              </p>
              <Link href="/pay-commission">Read More →</Link>
            </article>

            <article className="update-card">
              <span className="category">GUIDE</span>
              <h3>How Government Salary Is Calculated</h3>
              <p>
                Understand Basic Pay, DA, HRA, TA, deductions and how they
                combine to form gross and net salary.
              </p>
              <Link href="/guides">Read More →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="tools-section container">
        <div className="section-heading">
          <div>
            <span className="section-label">Free Tools</span>
            <h2>Government Salary Calculators</h2>
          </div>
        </div>

        <div className="tools-grid">
          <Link href="/salary-calculator" className="tool-card">
            <h3>Salary Calculator</h3>
            <p>Estimate gross and take-home government salary.</p>
          </Link>

          <Link href="/da-calculator" className="tool-card">
            <h3>DA Calculator</h3>
            <p>Calculate DA amount based on your Basic Pay.</p>
          </Link>

          <Link href="/hra-calculator" className="tool-card">
            <h3>HRA Calculator</h3>
            <p>Estimate House Rent Allowance based on Basic Pay.</p>
          </Link>

          <Link href="/arrears-calculator" className="tool-card">
            <h3>DA Arrears Calculator</h3>
            <p>Estimate arrears after a DA revision.</p>
          </Link>
        </div>
      </section>

      <section className="disclaimer-box container">
        <strong>Important:</strong> GovtPayGuide is an independent informational
        website and is not affiliated with the Government of India or any state
        government. Always verify important information from official
        government notifications.
      </section>
    </main>
  );
}