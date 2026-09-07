import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bihar Pay Matrix | Pay Level & Basic Pay Table",
  description:
    "Bihar Government Pay Matrix guide with pay levels, old Grade Pay mapping, starting Basic Pay and revised salary structure.",
  alternates: {
    canonical: "/state-government/bihar/pay-matrix",
  },
};

const payLevels = [
  { level: "1", gradePay: "₹1,800", minimum: "₹18,000" },
  { level: "2", gradePay: "₹1,900", minimum: "₹19,900" },
  { level: "3", gradePay: "₹2,000", minimum: "₹21,700" },
  { level: "4", gradePay: "₹2,400", minimum: "₹25,500" },
  { level: "5", gradePay: "₹2,800", minimum: "₹29,200" },
  { level: "6", gradePay: "₹4,200", minimum: "₹35,400" },
  { level: "7", gradePay: "₹4,600", minimum: "₹44,900" },
  { level: "8", gradePay: "₹4,800", minimum: "₹47,600" },
  { level: "9", gradePay: "₹5,400", minimum: "₹53,100" },
  { level: "11", gradePay: "₹6,600", minimum: "₹67,700" },
  { level: "12", gradePay: "₹7,600", minimum: "₹78,800" },
  { level: "13", gradePay: "₹8,700", minimum: "₹1,23,100" },
  { level: "13A", gradePay: "₹8,900", minimum: "₹1,31,100" },
  { level: "14", gradePay: "₹10,000", minimum: "₹1,44,200" },
];

export default function BiharPayMatrixPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bihar-matrix-hero">
        <div className="container">
          <span className="page-badge">Bihar Government Pay Matrix</span>

          <h1>Bihar Pay Matrix & Pay Level Guide</h1>

          <p>
            Understand Bihar Government Pay Matrix levels, old Grade Pay
            mapping, starting Basic Pay and salary progression under the revised
            pay structure.
          </p>
        </div>
      </section>

      <div className="container bihar-matrix-page">
        <div className="bihar-matrix-layout">
          <div className="bihar-matrix-main">

            {/* OVERVIEW */}
            <section className="bihar-matrix-highlight">
              <div>
                <span className="section-kicker">Revised Pay Structure</span>

                <h2>Pay Level + Pay Matrix Cell</h2>

                <p>
                  Bihar Government&apos;s revised pay structure replaced the
                  earlier Pay Band and Grade Pay system with a level-based Pay
                  Matrix framework.
                </p>
              </div>

              <div className="bihar-matrix-badge">
                <span>Effective Framework</span>
                <strong>01 Jan 2016</strong>
              </div>
            </section>

            {/* WHAT IS MATRIX */}
            <section className="article-section">
              <span className="section-kicker">Basics</span>

              <h2>What is the Bihar Pay Matrix?</h2>

              <p>
                A Pay Matrix is a structured table used to determine Basic Pay
                according to the employee&apos;s pay level and applicable cell.
              </p>

              <p>
                Each level corresponds broadly to an earlier Grade Pay and
                contains a sequence of Basic Pay cells used for pay fixation and
                progression.
              </p>
            </section>

            {/* LEVEL TABLE */}
            <section className="article-section">
              <span className="section-kicker">Pay Levels</span>

              <h2>Bihar Pay Matrix Minimum Basic Pay</h2>

              <p>
                The following table shows the commonly published Bihar pay-level
                mapping and the first Basic Pay value of each level.
              </p>

              <div className="bihar-matrix-table-wrap">
                <table className="bihar-matrix-table">
                  <thead>
                    <tr>
                      <th>Pay Level</th>
                      <th>Earlier Grade Pay</th>
                      <th>Starting Basic Pay</th>
                    </tr>
                  </thead>

                  <tbody>
                    {payLevels.map((item) => (
                      <tr key={item.level}>
                        <td>
                          <strong>Level {item.level}</strong>
                        </td>

                        <td>{item.gradePay}</td>

                        <td>
                          <strong>{item.minimum}</strong>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="source-note">
                The first value is the starting cell of the respective level.
                Actual Basic Pay can be a higher cell depending on pay fixation,
                increment history, promotion and service conditions.
              </p>
            </section>

            {/* MAPPING */}
            <section className="article-section">
              <span className="section-kicker">Old vs Revised</span>

              <h2>Grade Pay to Pay Level Mapping</h2>

              <div className="bihar-matrix-cards">
                <div>
                  <span>Grade Pay ₹1,800</span>
                  <strong>Level 1</strong>
                  <p>Starting Basic Pay ₹18,000</p>
                </div>

                <div>
                  <span>Grade Pay ₹2,400</span>
                  <strong>Level 4</strong>
                  <p>Starting Basic Pay ₹25,500</p>
                </div>

                <div>
                  <span>Grade Pay ₹4,200</span>
                  <strong>Level 6</strong>
                  <p>Starting Basic Pay ₹35,400</p>
                </div>

                <div>
                  <span>Grade Pay ₹4,600</span>
                  <strong>Level 7</strong>
                  <p>Starting Basic Pay ₹44,900</p>
                </div>

                <div>
                  <span>Grade Pay ₹5,400</span>
                  <strong>Level 9</strong>
                  <p>Starting Basic Pay ₹53,100</p>
                </div>

                <div>
                  <span>Grade Pay ₹10,000</span>
                  <strong>Level 14</strong>
                  <p>Starting Basic Pay ₹1,44,200</p>
                </div>
              </div>
            </section>

            {/* INCREMENT */}
            <section className="article-section">
              <span className="section-kicker">Progression</span>

              <h2>How Pay Progresses Within a Level</h2>

              <p>
                A Pay Matrix level contains multiple cells. An employee&apos;s
                Basic Pay can move to a higher cell according to the applicable
                increment, promotion and pay-fixation rules.
              </p>

              <div className="bihar-matrix-example">
                <span>Simple Illustration</span>

                <div className="bihar-matrix-example-flow">
                  <div>
                    <small>Pay Level</small>
                    <strong>Level 1</strong>
                  </div>

                  <div>→</div>

                  <div>
                    <small>Starting Cell</small>
                    <strong>₹18,000</strong>
                  </div>

                  <div>→</div>

                  <div>
                    <small>Next Matrix Cell</small>
                    <strong>₹18,500</strong>
                  </div>
                </div>

                <p>
                  This illustrates matrix progression only. Actual increment
                  eligibility and date depend on applicable Bihar Government
                  service rules.
                </p>
              </div>
            </section>

            {/* BASIC + DA */}
            <section className="article-section">
              <span className="section-kicker">Salary</span>

              <h2>Pay Matrix Basic Pay and DA</h2>

              <p>
                The Pay Matrix determines Basic Pay. Dearness Allowance is then
                calculated separately using the applicable Bihar Government DA
                rate.
              </p>

              <div className="formula-box">
                DA = Eligible Basic Pay × Applicable DA Rate ÷ 100
              </div>

              <p>
                For example, if an employee&apos;s Basic Pay is ₹35,400, the
                applicable DA is calculated on that eligible Basic Pay according
                to the Finance Department order for the relevant period.
              </p>

              <div className="bihar-matrix-actions">
                <Link
                  href="/state-government/bihar/da"
                  className="content-button"
                >
                  Bihar DA Update
                </Link>

                <Link
                  href="/state-government/bihar/salary-calculator"
                  className="secondary-content-button"
                >
                  Salary Calculator
                </Link>
              </div>
            </section>

            {/* LEVEL 10 NOTE */}
            <section className="bihar-matrix-note">
              <span className="section-kicker">Important Note</span>

              <h2>Why is Level 10 Not Shown?</h2>

              <p>
                In the Bihar Pay Matrix mapping used for the State revised pay
                structure, the listed sequence moves from Level 9 to Level 11
                for the corresponding Grade Pay mappings.
              </p>

              <p>
                Therefore, a Central Government Pay Matrix table should not be
                copied blindly and treated as Bihar&apos;s State Pay Matrix.
              </p>
            </section>

            {/* CENTRAL VS BIHAR */}
            <section className="article-section">
              <span className="section-kicker">Central vs State</span>

              <h2>Bihar Pay Matrix vs Central Pay Matrix</h2>

              <p>
                The two structures may contain many similar values because
                Bihar&apos;s revision was developed in the context of the
                Seventh Central Pay Commission.
              </p>

              <p>
                However, Bihar Government pay fixation and employee entitlement
                are governed by Bihar&apos;s own resolutions and service rules.
              </p>
            </section>

            {/* OFFICIAL SOURCE */}
            <section className="bihar-matrix-official">
              <div>
                <span className="section-kicker">Official Verification</span>

                <h2>Check Bihar Finance Department Orders</h2>

                <p>
                  Employees should verify their sanctioned pay level, pay
                  fixation and Basic Pay from official service records and
                  Bihar Finance Department notifications.
                </p>
              </div>

              <a
                href="https://state.bihar.gov.in/finance/"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-content-button"
              >
                Bihar Finance Department ↗
              </a>
            </section>

            {/* FAQ */}
            <section className="article-section">
              <h2>Frequently Asked Questions</h2>

              <div className="faq-item">
                <h3>What is Bihar Pay Matrix Level 1 starting pay?</h3>
                <p>The starting Basic Pay for Level 1 is ₹18,000.</p>
              </div>

              <div className="faq-item">
                <h3>What is Bihar Pay Matrix Level 6 starting pay?</h3>
                <p>The starting Basic Pay for Level 6 is ₹35,400.</p>
              </div>

              <div className="faq-item">
                <h3>What is Level 7 starting Basic Pay?</h3>
                <p>Level 7 starts at ₹44,900.</p>
              </div>

              <div className="faq-item">
                <h3>What is Level 14 starting Basic Pay?</h3>
                <p>Level 14 starts at ₹1,44,200.</p>
              </div>

              <div className="faq-item">
                <h3>Is the first Pay Matrix value my exact salary?</h3>

                <p>
                  No. It is the first Basic Pay cell of that level. Actual Basic
                  Pay depends on the employee&apos;s current matrix cell,
                  fixation, increment and promotion history.
                </p>
              </div>
            </section>

            <div className="calculator-disclaimer">
              <strong>Disclaimer:</strong> GovtPayGuide is an independent
              informational website and is not affiliated with the Government
              of Bihar. Pay level, Basic Pay, fixation and salary entitlement
              must be confirmed from official Government orders and individual
              service records.
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="bihar-matrix-sidebar">
            <div className="sidebar-card">
              <h3>Bihar Pay Resources</h3>

              <Link href="/state-government/bihar">
                Bihar Government
              </Link>

              <Link href="/state-government/bihar/pay-commission">
                Pay Commission
              </Link>

              <Link href="/state-government/bihar/da">
                Bihar DA
              </Link>

              <Link href="/state-government/bihar/salary-calculator">
                Salary Calculator
              </Link>
            </div>

            <div className="sidebar-card">
              <h3>Popular Levels</h3>

              <p>Level 1 — ₹18,000</p>
              <p>Level 4 — ₹25,500</p>
              <p>Level 6 — ₹35,400</p>
              <p>Level 7 — ₹44,900</p>
              <p>Level 9 — ₹53,100</p>
            </div>

            <div className="sidebar-warning">
              <strong>Check your service record</strong>

              <p>
                Your current Basic Pay may be above the first cell shown in
                this table.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}