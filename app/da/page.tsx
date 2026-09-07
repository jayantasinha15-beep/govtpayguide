import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dearness Allowance (DA) Updates & Rates",
  description:
    "Check Dearness Allowance updates, DA rates, calculation method, effective dates and DA information for government employees.",
alternates: {
  canonical: "/da",
},
};

export default function DAPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="page-badge">Dearness Allowance</span>

          <h1>DA Updates & Dearness Allowance Guide</h1>

          <p>
            Track Dearness Allowance revisions, understand how DA is calculated
            and see how a change in DA can affect government employee salary.
          </p>
        </div>
      </section>

      <div className="container content-layout">
        <div className="main-content">

          <section className="info-card">
            <span className="info-label">LATEST DA</span>

            <h2>Current Dearness Allowance Rate</h2>

            <p className="muted">
              The current DA rate will be updated here based on the latest
              applicable official government notification.
            </p>

            <div className="da-highlight">
              <div>
                <span>DA Rate</span>
                <strong>Official Update</strong>
              </div>

              <div>
                <span>Applicable From</span>
                <strong>As notified</strong>
              </div>
            </div>

            <p className="source-note">
              Always verify the applicable rate and effective date from the
              relevant official government order or notification.
            </p>
          </section>

          <section className="article-section">
            <h2>What is Dearness Allowance (DA)?</h2>

            <p>
              Dearness Allowance, commonly known as DA, is an allowance paid to
              eligible government employees and pensioners to help compensate
              for the impact of inflation on the cost of living.
            </p>

            <p>
              DA is generally calculated as a percentage of Basic Pay. When the
              applicable DA percentage changes, the DA component of salary also
              changes.
            </p>
          </section>

          <section className="article-section">
            <h2>How is DA Calculated?</h2>

            <p>The basic calculation is:</p>

            <div className="formula-box">
              DA Amount = Basic Pay × DA Rate ÷ 100
            </div>

            <h3>Example</h3>

            <p>
              Suppose an employee has a Basic Pay of ₹40,000 and the applicable
              DA rate is 50%.
            </p>

            <div className="example-box">
              ₹40,000 × 50 ÷ 100 = <strong>₹20,000 DA</strong>
            </div>

            <p>
              In this example, Basic Pay plus DA would be ₹60,000 before adding
              other applicable allowances and deductions.
            </p>
          </section>

          <section className="article-section">
            <h2>DA Revision</h2>

            <p>
              DA rates may be revised periodically. The effective date,
              applicable employee category and revised percentage depend on the
              relevant government notification.
            </p>

            <p>
              Central Government and State Government employees should check
              the notification applicable specifically to them, because rates
              and implementation dates may differ.
            </p>
          </section>

          <section className="article-section">
            <h2>DA Rate History</h2>

            <div className="table-wrap">
              <table className="da-table">
                <thead>
                  <tr>
                    <th>Effective Period</th>
                    <th>DA Rate</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Latest Period</td>
                    <td>To be updated</td>
                    <td>Official notification</td>
                  </tr>

                  <tr>
                    <td>Previous Period</td>
                    <td>To be added</td>
                    <td>Historical</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="source-note">
              We will populate this table with verified historical DA rates and
              their effective dates.
            </p>
          </section>

          <section className="article-section">
            <h2>Calculate Your DA</h2>

            <p>
              Enter your Basic Pay and applicable DA percentage in our
              calculator to estimate your monthly Dearness Allowance.
            </p>

            <Link href="/da-calculator" className="content-button">
              Open DA Calculator →
            </Link>
          </section>

          <section className="article-section">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-item">
              <h3>Is DA calculated on Basic Pay?</h3>
              <p>
                DA is generally calculated as a percentage of the applicable
                Basic Pay, subject to the rules governing the employee.
              </p>
            </div>

            <div className="faq-item">
              <h3>Are Central and State Government DA rates always the same?</h3>
              <p>
                No. State governments may issue their own DA orders, rates and
                implementation dates.
              </p>
            </div>

            <div className="faq-item">
              <h3>Does an increase in DA increase salary?</h3>
              <p>
                If the DA percentage applicable to an employee increases, the
                DA component generally increases accordingly.
              </p>
            </div>
          </section>

        </div>

        <aside className="sidebar">
          <div className="sidebar-card">
            <h3>Salary Tools</h3>

            <Link href="/da-calculator">DA Calculator →</Link>
            <Link href="/salary-calculator">Salary Calculator →</Link>
            <Link href="/hra-calculator">HRA Calculator →</Link>
            <Link href="/arrears-calculator">DA Arrears Calculator →</Link>
          </div>

          <div className="sidebar-card">
            <h3>Pay Commission</h3>

            <p>
              Learn about Pay Matrix levels, fitment factor and government
              salary revisions.
            </p>

            <Link href="/pay-commission">Explore Pay Commission →</Link>
          </div>

          <div className="sidebar-warning">
            <strong>Disclaimer</strong>

            <p>
              GovtPayGuide is not affiliated with any government department.
              Verify important information from official notifications.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}