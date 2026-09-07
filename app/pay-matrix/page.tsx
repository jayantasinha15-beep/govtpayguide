import type { Metadata } from "next";
import Link from "next/link";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
export const metadata: Metadata = {
  title: "7th Pay Commission Pay Matrix Levels & Basic Pay",
  description:
    "Explore 7th Pay Commission Pay Matrix levels, minimum basic pay, pay level structure and salary-related information.",
alternates: {
  canonical: "/pay-matrix",
},
};

const payLevels = [
  { level: "Level 1", basic: "₹18,000" },
  { level: "Level 2", basic: "₹19,900" },
  { level: "Level 3", basic: "₹21,700" },
  { level: "Level 4", basic: "₹25,500" },
  { level: "Level 5", basic: "₹29,200" },
  { level: "Level 6", basic: "₹35,400" },
  { level: "Level 7", basic: "₹44,900" },
  { level: "Level 8", basic: "₹47,600" },
  { level: "Level 9", basic: "₹53,100" },
  { level: "Level 10", basic: "₹56,100" },
  { level: "Level 11", basic: "₹67,700" },
  { level: "Level 12", basic: "₹78,800" },
  { level: "Level 13", basic: "₹1,23,100" },
  { level: "Level 13A", basic: "₹1,31,100" },
  { level: "Level 14", basic: "₹1,44,200" },
  { level: "Level 15", basic: "₹1,82,200" },
  { level: "Level 16", basic: "₹2,05,400" },
  { level: "Level 17", basic: "₹2,25,000" },
  { level: "Level 18", basic: "₹2,50,000" },
];

export default function PayMatrixPage() {
  return (
    <main>
      <ArticleJsonLd
  title="Central Government Pay Matrix Guide"
  description="Understand Pay Matrix levels, cells, Basic Pay progression and salary structure."
  url="/pay-matrix"
/>

<BreadcrumbJsonLd
  items={[
    { name: "Home", path: "/" },
    { name: "Pay Matrix", path: "/pay-matrix" },
  ]}
/>
      <section className="page-hero">
        <div className="container">
          <span className="page-badge">7th Pay Commission</span>

          <h1>Pay Matrix Levels & Basic Pay</h1>

          <p>
            Explore Pay Matrix levels and the minimum Basic Pay associated with
            each level under the 7th Central Pay Commission pay structure.
          </p>
        </div>
      </section>

      <div className="container content-layout">
        <div className="main-content">

          <section className="article-section">
            <h2>7th CPC Pay Matrix</h2>

            <p>
              The Pay Matrix provides a structured system for Basic Pay under
              the 7th Central Pay Commission. Employees are placed in an
              applicable Pay Level according to their post and service rules.
            </p>

            <p>
              The amount shown below is the minimum Basic Pay for each listed
              level. Actual Basic Pay can be higher depending on the
              employee&apos;s current cell within that level.
            </p>
          </section>

          <section className="pay-matrix-section">
            <div className="matrix-heading">
              <div>
                <span>REFERENCE TABLE</span>
                <h2>Pay Level Starting Basic Pay</h2>
              </div>

              <span className="matrix-count">
                {payLevels.length} Levels
              </span>
            </div>

            <div className="table-wrap">
              <table className="pay-matrix-table">
                <thead>
                  <tr>
                    <th>Pay Level</th>
                    <th>Minimum Basic Pay</th>
                    <th>Salary Calculator</th>
                  </tr>
                </thead>

                <tbody>
                  {payLevels.map((item) => (
                    <tr key={item.level}>
                      <td>
                        <strong>{item.level}</strong>
                      </td>

                      <td className="basic-pay">
                        {item.basic}
                      </td>

                      <td>
                        <Link href="/salary-calculator">
                          Calculate Salary →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="source-note">
              Figures shown are minimum Basic Pay references for the respective
              Pay Matrix levels. Always refer to applicable government rules for
              individual pay fixation.
            </p>
          </section>

          <section className="article-section">
            <h2>How Does the Pay Matrix Work?</h2>

            <p>
              The Pay Matrix contains Pay Levels vertically and salary cells
              within each level. An employee&apos;s Basic Pay is represented by
              a cell in the applicable level.
            </p>

            <div className="matrix-explain-grid">
              <div>
                <span>1</span>
                <h3>Pay Level</h3>
                <p>
                  Your post or applicable service rules determine the Pay Level.
                </p>
              </div>

              <div>
                <span>2</span>
                <h3>Basic Pay Cell</h3>
                <p>
                  Your current Basic Pay corresponds to a cell within that
                  level.
                </p>
              </div>

              <div>
                <span>3</span>
                <h3>Increment</h3>
                <p>
                  Eligible increments generally move Basic Pay to the next
                  applicable cell.
                </p>
              </div>
            </div>
          </section>

          <section className="article-section">
            <h2>Example: Level 6</h2>

            <div className="level-example">
              <div>
                <span>Pay Level</span>
                <strong>Level 6</strong>
              </div>

              <div>
                <span>Starting Basic Pay</span>
                <strong>₹35,400</strong>
              </div>
            </div>

            <p>
              An employee entering Level 6 at its minimum may have a Basic Pay
              of ₹35,400. DA, HRA, TA and other applicable components are then
              calculated separately according to the relevant rules.
            </p>

            <Link href="/salary-calculator" className="content-button">
              Calculate Level 6 Salary →
            </Link>
          </section>

          <section className="article-section">
            <h2>Basic Pay vs Gross Salary</h2>

            <p>
              The Pay Matrix shows Basic Pay, not total monthly salary. Gross
              salary can include several additional components.
            </p>

            <div className="salary-components">
              <div>Basic Pay</div>
              <span>+</span>
              <div>DA</div>
              <span>+</span>
              <div>HRA</div>
              <span>+</span>
              <div>TA</div>
              <span>=</span>
              <div className="total">Gross Salary*</div>
            </div>

            <p className="source-note">
              *Simplified illustration. Other allowances and deductions may
              apply.
            </p>
          </section>

          <section className="article-section">
            <h2>Useful Calculators</h2>

            <div className="tools-link-grid">
              <Link href="/salary-calculator">
                <strong>Salary Calculator</strong>
                <span>Calculate estimated salary →</span>
              </Link>

              <Link href="/da-calculator">
                <strong>DA Calculator</strong>
                <span>Calculate DA from Basic Pay →</span>
              </Link>

              <Link href="/hra-calculator">
                <strong>HRA Calculator</strong>
                <span>Calculate HRA →</span>
              </Link>

              <Link href="/arrears-calculator">
                <strong>Arrears Calculator</strong>
                <span>Estimate DA arrears →</span>
              </Link>
            </div>
          </section>

          <section className="article-section">
            <h2>Frequently Asked Questions</h2>

            <div className="faq-item">
              <h3>Is Pay Matrix amount the full salary?</h3>
              <p>
                No. Pay Matrix figures represent Basic Pay. Allowances and
                deductions are calculated separately.
              </p>
            </div>

            <div className="faq-item">
              <h3>What is the minimum Basic Pay in Level 1?</h3>
              <p>
                The minimum Basic Pay shown for Level 1 is ₹18,000.
              </p>
            </div>

            <div className="faq-item">
              <h3>What is the Basic Pay for Level 6?</h3>
              <p>
                Level 6 begins at ₹35,400. An employee may have a higher Basic
                Pay depending on the applicable cell.
              </p>
            </div>

            <div className="faq-item">
              <h3>What is Level 18 Basic Pay?</h3>
              <p>
                Level 18 is shown at ₹2,50,000 in the Pay Matrix structure.
              </p>
            </div>
          </section>
        </div>

        <aside className="sidebar">
          <div className="sidebar-card">
            <h3>Pay Commission</h3>

            <Link href="/pay-commission">
              Pay Commission Guide →
            </Link>

            <Link href="/salary-calculator">
              Salary Calculator →
            </Link>

            <Link href="/da">
              DA Updates →
            </Link>

            <Link href="/pension">
              Pension Guide →
            </Link>
          </div>

          <div className="sidebar-card">
            <h3>Calculators</h3>

            <Link href="/da-calculator">
              DA Calculator →
            </Link>

            <Link href="/hra-calculator">
              HRA Calculator →
            </Link>

            <Link href="/arrears-calculator">
              DA Arrears Calculator →
            </Link>
          </div>

          <div className="sidebar-warning">
            <strong>Important</strong>

            <p>
              Pay fixation can vary based on service rules, promotion, MACP and
              other applicable government orders.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}