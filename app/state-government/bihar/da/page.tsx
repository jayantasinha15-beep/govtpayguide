import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bihar DA 2026 | Dearness Allowance Rate & Latest Update",
  description:
    "Latest Bihar Government DA rate, Dearness Allowance calculation, effective date and Finance Department update for State Government employees and pensioners.",
  alternates: {
    canonical: "/state-government/bihar/da",
  },
};

export default function BiharDAPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bihar-da-hero">
        <div className="container">
          <span className="page-badge">Bihar Government DA</span>

          <h1>Bihar Dearness Allowance (DA) 2026</h1>

          <p>
            Check the latest Bihar Government Dearness Allowance rate,
            effective date, DA calculation method and official Finance
            Department information.
          </p>
        </div>
      </section>

      <div className="container bihar-da-page">
        <div className="bihar-da-layout">
          <div className="bihar-da-main">
            {/* CURRENT RATE */}
            <section className="bihar-da-current">
              <div>
                <span className="section-kicker">Latest Official Rate</span>
                <h2>60% DA from 1 January 2026</h2>

                <p>
                  Bihar Government revised Dearness Allowance for eligible
                  employees under the Seventh Centrally Revised Pay Structure
                  from 58% to 60%, effective from 1 January 2026.
                </p>
              </div>

              <div className="bihar-da-rate-card">
                <span>DA Rate</span>
                <strong>60%</strong>
                <p>Effective from 01 January 2026</p>
              </div>
            </section>

            {/* WHAT IS DA */}
            <section className="article-section">
              <span className="section-kicker">DA Basics</span>

              <h2>What is Dearness Allowance?</h2>

              <p>
                Dearness Allowance, commonly called DA, is an inflation-related
                allowance paid to eligible Government employees in addition to
                Basic Pay.
              </p>

              <p>
                The applicable Bihar DA rate depends on the pay structure and
                Government order applicable to the employee.
              </p>
            </section>

            {/* FORMULA */}
            <section className="article-section">
              <span className="section-kicker">Calculation</span>

              <h2>How Bihar DA is Calculated</h2>

              <div className="formula-box">
                Monthly DA = Basic Pay × DA Rate ÷ 100
              </div>

              <div className="example-box">
                <p>
                  Example Basic Pay: <strong>₹40,000</strong>
                </p>

                <p>
                  DA Rate: <strong>60%</strong>
                </p>

                <p>
                  Monthly DA: <strong>₹24,000</strong>
                </p>

                <p>
                  Basic + DA: <strong>₹64,000</strong>
                </p>
              </div>

              <p className="source-note">
                This is a simplified example. Actual salary can include HRA,
                transport allowance, medical allowance, deductions and other
                applicable components.
              </p>

              <Link
                href="/state-government/bihar/da-calculator"
                className="content-button"
              >
                Open Bihar DA Calculator
              </Link>
            </section>

            {/* OFFICIAL UPDATE */}
            <section className="article-section">
              <span className="section-kicker">Official Update</span>

              <h2>Bihar DA Revision from January 2026</h2>

              <div className="bihar-da-update-box">
                <div>
                  <span>Previous Rate</span>
                  <strong>58%</strong>
                </div>

                <div className="bihar-da-arrow">→</div>

                <div>
                  <span>Revised Rate</span>
                  <strong>60%</strong>
                </div>
              </div>

              <p>
                The Bihar Government approved the revision for Government
                employees, pensioners and family pensioners covered under the
                Seventh Centrally Revised Pay Structure.
              </p>

              <p>
                The revised rate takes effect from 1 January 2026.
              </p>
            </section>

            {/* OTHER PAY STRUCTURES */}
            <section className="article-section">
              <span className="section-kicker">Other Pay Structures</span>

              <h2>DA Rates Under Older Pay Structures</h2>

              <p>
                Bihar Government also revised Dearness Allowance / Dearness
                Relief for employees and pensioners under older pay structures.
              </p>

              <div className="bihar-da-table-wrap">
                <table className="bihar-da-table">
                  <thead>
                    <tr>
                      <th>Pay Structure</th>
                      <th>Previous Rate</th>
                      <th>Revised Rate</th>
                      <th>Effective Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>7th Pay Structure</td>
                      <td>58%</td>
                      <td>60%</td>
                      <td>01 Jan 2026</td>
                    </tr>

                    <tr>
                      <td>6th Pay Structure</td>
                      <td>257%</td>
                      <td>262%</td>
                      <td>01 Jan 2026</td>
                    </tr>

                    <tr>
                      <td>5th Pay Structure</td>
                      <td>474%</td>
                      <td>483%</td>
                      <td>01 Jan 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="source-note">
                Employees should confirm which pay structure applies to them
                before using any DA rate.
              </p>
            </section>

            {/* DA VS DR */}
            <section className="article-section">
              <span className="section-kicker">Employees & Pensioners</span>

              <h2>Difference Between DA and DR</h2>

              <div className="bihar-da-dr-grid">
                <div>
                  <span>Serving Employees</span>
                  <h3>Dearness Allowance (DA)</h3>
                  <p>
                    DA is generally payable on eligible Basic Pay to serving
                    Government employees.
                  </p>
                </div>

                <div>
                  <span>Pensioners</span>
                  <h3>Dearness Relief (DR)</h3>
                  <p>
                    DR is the corresponding inflation relief payable to eligible
                    pensioners and family pensioners.
                  </p>
                </div>
              </div>
            </section>

            {/* IMPORTANT */}
            <section className="bihar-da-warning">
              <span className="section-kicker">Important</span>

              <h2>Bihar DA is a State Government Decision</h2>

              <p>
                Central Government DA revisions should not automatically be
                treated as applicable to Bihar Government employees.
              </p>

              <p>
                Bihar Government issues its own approval and Finance Department
                orders for State Government employees and pensioners.
              </p>
            </section>

            {/* OFFICIAL SOURCE */}
            <section className="bihar-da-official">
              <div>
                <span className="section-kicker">Official Source</span>

                <h2>Bihar Finance Department</h2>

                <p>
                  Always verify the applicable DA rate, effective date and
                  eligibility from the latest Bihar Finance Department order.
                </p>
              </div>

              <a
                href="https://state.bihar.gov.in/finance/"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-content-button"
              >
                Visit Finance Department ↗
              </a>
            </section>

            {/* FAQ */}
            <section className="article-section">
              <h2>Frequently Asked Questions</h2>

              <div className="faq-item">
                <h3>What is the Bihar Government DA rate in 2026?</h3>

                <p>
                  For eligible employees under the Seventh Centrally Revised
                  Pay Structure, the DA rate is 60% with effect from 1 January
                  2026.
                </p>
              </div>

              <div className="faq-item">
                <h3>What was the previous Bihar DA rate?</h3>

                <p>
                  The previous rate for the Seventh Centrally Revised Pay
                  Structure was 58%.
                </p>
              </div>

              <div className="faq-item">
                <h3>Is Bihar DA the same as Central Government DA?</h3>

                <p>
                  Not automatically. Bihar Government employees are governed by
                  Bihar Government decisions and applicable Finance Department
                  orders.
                </p>
              </div>

              <div className="faq-item">
                <h3>Is DA calculated on Basic Pay?</h3>

                <p>
                  A simplified DA calculation uses eligible Basic Pay multiplied
                  by the applicable DA percentage.
                </p>
              </div>
            </section>

            {/* DISCLAIMER */}
            <div className="calculator-disclaimer">
              <strong>Disclaimer:</strong> GovtPayGuide is an independent
              informational website and is not affiliated with the Government
              of Bihar. DA, DR, salary and arrears entitlement are governed by
              official Government orders, service rules and departmental
              records.
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="bihar-da-sidebar">
            <div className="sidebar-card">
              <h3>Bihar Government</h3>

              <Link href="/state-government/bihar">Bihar Guide</Link>

              <Link href="/state-government/bihar/pay-commission">
                Pay Commission
              </Link>

              <Link href="/state-government/bihar/pay-matrix">
                Pay Matrix
              </Link>

              <Link href="/state-government/bihar/salary-calculator">
                Salary Calculator
              </Link>
            </div>

            <div className="sidebar-card">
              <h3>DA Tools</h3>

              <Link href="/state-government/bihar/da-calculator">
                DA Calculator
              </Link>

              <Link href="/state-government/bihar/arrears-calculator">
                DA Arrears Calculator
              </Link>
            </div>

            <div className="sidebar-warning">
              <strong>Latest verified update</strong>

              <p>
                60% DA for the Seventh Centrally Revised Pay Structure,
                effective from 1 January 2026.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}