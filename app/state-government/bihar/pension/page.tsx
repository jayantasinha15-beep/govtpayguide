import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bihar Pension, Family Pension & DR Guide",
  description:
    "Bihar Government pension, family pension, Dearness Relief, pension revision, arrears and retirement benefit information.",
  alternates: {
    canonical: "/state-government/bihar/pension",
  },
};

export default function BiharPensionPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bihar-pension-hero">
        <div className="container">
          <span className="page-badge">Bihar Government Pension</span>

          <h1>Bihar Pension, Family Pension & Dearness Relief Guide</h1>

          <p>
            Understand Bihar Government pension, family pension, Dearness
            Relief, pension revision, arrears and important retirement benefit
            information.
          </p>
        </div>
      </section>

      <div className="container bihar-pension-page">
        <div className="bihar-pension-layout">
          <div className="bihar-pension-main">
            {/* LATEST DR */}
            <section className="bihar-pension-highlight">
              <div>
                <span className="section-kicker">Latest Official DR</span>

                <h2>60% Dearness Relief from 1 January 2026</h2>

                <p>
                  Bihar Government approved Dearness Relief at 60% for eligible
                  pensioners and family pensioners under the Seventh Centrally
                  Revised Pay Structure, effective from 1 January 2026.
                </p>
              </div>

              <div className="bihar-pension-rate-card">
                <span>DR Rate</span>
                <strong>60%</strong>
                <p>Effective from 01 January 2026</p>
              </div>
            </section>

            {/* PENSION BASICS */}
            <section className="article-section">
              <span className="section-kicker">Pension Basics</span>

              <h2>What is Bihar Government Pension?</h2>

              <p>
                Pension is a retirement benefit payable to eligible Government
                employees according to the applicable pension rules, service
                conditions and Government orders.
              </p>

              <p>
                The amount payable can depend on qualifying service, pensionable
                pay, retirement category and the pension rules applicable to the
                employee.
              </p>
            </section>

            {/* DR */}
            <section className="article-section">
              <span className="section-kicker">Dearness Relief</span>

              <h2>What is Dearness Relief?</h2>

              <p>
                Dearness Relief, commonly called DR, is an inflation-related
                relief payable to eligible pensioners and family pensioners.
              </p>

              <div className="formula-box">
                Monthly DR = Eligible Basic Pension × DR Rate ÷ 100
              </div>

              <div className="example-box">
                <p>
                  Example Basic Pension: <strong>₹25,000</strong>
                </p>

                <p>
                  DR Rate: <strong>60%</strong>
                </p>

                <p>
                  Monthly DR: <strong>₹15,000</strong>
                </p>

                <p>
                  Basic Pension + DR: <strong>₹40,000</strong>
                </p>
              </div>

              <p className="source-note">
                This is only a simplified illustration. Actual pension and DR
                entitlement must be checked from the applicable pension order
                and PPO.
              </p>
            </section>

            {/* DR UPDATE */}
            <section className="article-section">
              <span className="section-kicker">2026 Revision</span>

              <h2>Bihar Pension DR Revision</h2>

              <div className="bihar-pension-dr-change">
                <div>
                  <span>Previous DR</span>
                  <strong>58%</strong>
                </div>

                <div className="bihar-pension-arrow">→</div>

                <div>
                  <span>Revised DR</span>
                  <strong>60%</strong>
                </div>
              </div>

              <p>
                The Bihar Finance Department publication dated 14 May 2026
                records the revision from 58% to 60% for pensioners and family
                pensioners covered by the Seventh Centrally Revised Pay
                Structure, with effect from 1 January 2026.
              </p>
            </section>

            {/* OTHER STRUCTURES */}
            <section className="article-section">
              <span className="section-kicker">Older Pay Structures</span>

              <h2>DR Under Older Pay Structures</h2>

              <div className="bihar-pension-table-wrap">
                <table className="bihar-pension-table">
                  <thead>
                    <tr>
                      <th>Pay Structure</th>
                      <th>Previous DR</th>
                      <th>Revised DR</th>
                      <th>Effective Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>7th Revised Structure</td>
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
                Pensioners should confirm which pension/pay structure applies
                to their PPO before using any DR rate.
              </p>
            </section>

            {/* FAMILY PENSION */}
            <section className="article-section">
              <span className="section-kicker">Family Pension</span>

              <h2>What is Family Pension?</h2>

              <p>
                Family pension may be payable to an eligible family member after
                the death of a Government employee or pensioner, subject to the
                applicable Bihar Pension Rules and Government instructions.
              </p>

              <p>
                Eligibility, rate and duration can vary according to the
                category of beneficiary and applicable rules.
              </p>
            </section>

            {/* PPO */}
            <section className="article-section">
              <span className="section-kicker">Pension Records</span>

              <h2>Why the PPO is Important</h2>

              <p>
                The Pension Payment Order, or PPO, is an important record for
                pension payment. It contains information used by the pension
                disbursing authority to process pension payments.
              </p>

              <div className="bihar-pension-info-grid">
                <div>
                  <span>01</span>
                  <h3>Basic Pension</h3>
                  <p>
                    Check the sanctioned pension amount shown in the pension
                    records.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <h3>Family Pension</h3>
                  <p>
                    Family pension entitlement should be verified from the
                    sanctioned order and applicable rules.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <h3>DR</h3>
                  <p>
                    Apply the Dearness Relief rate applicable to the relevant
                    pension structure and period.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <h3>Arrears</h3>
                  <p>
                    Revision arrears may depend on Government orders and the
                    effective date.
                  </p>
                </div>
              </div>
            </section>

            {/* ARREARS */}
            <section className="article-section">
              <span className="section-kicker">Arrears</span>

              <h2>How DR Arrears Can Arise</h2>

              <p>
                When a revised DR rate is made effective from an earlier date,
                the difference between the old and revised DR may become payable
                for the applicable period, subject to Government payment
                instructions.
              </p>

              <div className="formula-box">
                DR Arrears = Monthly DR Difference × Applicable Months
              </div>

              <p>
                If Basic Pension changed during the arrears period, calculations
                may need to be split into separate periods.
              </p>

              <Link
                href="/state-government/bihar/pension-calculator"
                className="content-button"
              >
                Open Bihar Pension Calculator
              </Link>
            </section>

            {/* RETIREMENT BENEFITS */}
            <section className="article-section">
              <span className="section-kicker">Retirement Benefits</span>

              <h2>Pension is Only One Retirement Benefit</h2>

              <p>
                Depending on the employee and applicable rules, retirement
                benefits may also involve gratuity, provident fund or pension
                scheme benefits, commutation and other sanctioned retirement
                dues.
              </p>

              <p>
                Bihar Pension Rules and departmental instructions should be
                checked for the benefit applicable to a particular employee.
              </p>
            </section>

            {/* NPS NOTE */}
            <section className="bihar-pension-warning">
              <span className="section-kicker">Important</span>

              <h2>Not Every Employee is Covered by the Same Pension System</h2>

              <p>
                Bihar Finance Department maintains separate pension-related
                information, including material concerning the New Pension
                System / National Pension System.
              </p>

              <p>
                Do not assume that old pension rules automatically apply to
                every Bihar Government employee. The applicable pension system
                depends on the employee&apos;s service and Government rules.
              </p>
            </section>

            {/* OFFICIAL */}
            <section className="bihar-pension-official">
              <div>
                <span className="section-kicker">Official Source</span>

                <h2>Bihar Finance Department Pension Resources</h2>

                <p>
                  Pensioners should verify pension rules, DR revisions,
                  Government orders and pension scheme information from the
                  Bihar Finance Department and their pension records.
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
                <h3>What is Bihar pension DR in 2026?</h3>

                <p>
                  For eligible pensioners under the Seventh Centrally Revised
                  Pay Structure, the officially notified DR rate is 60% from
                  1 January 2026.
                </p>
              </div>

              <div className="faq-item">
                <h3>What was the previous DR rate?</h3>

                <p>
                  The previous rate under that structure was 58%.
                </p>
              </div>

              <div className="faq-item">
                <h3>Is DR calculated on Basic Pension?</h3>

                <p>
                  A simplified DR calculation applies the applicable DR
                  percentage to eligible Basic Pension.
                </p>
              </div>

              <div className="faq-item">
                <h3>Is family pension eligible for DR?</h3>

                <p>
                  Eligible family pensioners may receive DR according to the
                  applicable Bihar Government order and pension rules.
                </p>
              </div>

              <div className="faq-item">
                <h3>Is every Bihar employee covered by the same pension rules?</h3>

                <p>
                  No. The applicable pension system depends on service
                  conditions, appointment and Government rules.
                </p>
              </div>
            </section>

            <div className="calculator-disclaimer">
              <strong>Disclaimer:</strong> GovtPayGuide is an independent
              informational website and is not affiliated with the Government
              of Bihar. Pension, family pension, DR, gratuity and other
              retirement benefits are governed by official rules, Government
              orders, PPOs and departmental records.
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="bihar-pension-sidebar">
            <div className="sidebar-card">
              <h3>Bihar Pension</h3>

              <Link href="/state-government/bihar">
                Bihar Government
              </Link>

              <Link href="/state-government/bihar/da">
                Bihar DA
              </Link>

              <Link href="/state-government/bihar/pay-commission">
                Pay Commission
              </Link>

              <Link href="/state-government/bihar/pension-calculator">
                Pension Calculator
              </Link>
            </div>

            <div className="sidebar-card">
              <h3>Latest DR</h3>

              <p>
                <strong>60%</strong>
              </p>

              <p>Effective from 1 January 2026.</p>
            </div>

            <div className="sidebar-warning">
              <strong>Check your PPO</strong>

              <p>
                Pension amount and eligibility should be verified from the
                official PPO and Government orders.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}