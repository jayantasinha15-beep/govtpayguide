import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bihar Pay Commission | 7th Pay Revision & Latest Updates",
  description:
    "Bihar Government Pay Commission guide covering the 7th pay revision, revised pay structure, pay matrix and latest official pay revision information.",
  alternates: {
    canonical: "/state-government/bihar/pay-commission",
  },
};

export default function BiharPayCommissionPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bihar-pay-hero">
        <div className="container">
          <span className="page-badge">Bihar Government Pay Revision</span>

          <h1>Bihar Pay Commission & Pay Revision Guide</h1>

          <p>
            Understand Bihar Government&apos;s revised pay structure, the
            State Pay Commission process, Pay Matrix system and how Central Pay
            Commission recommendations relate to Bihar Government employees.
          </p>
        </div>
      </section>

      <div className="container bihar-pay-page">
        <div className="bihar-pay-layout">
          <div className="bihar-pay-main">

            {/* CURRENT FRAMEWORK */}
            <section className="bihar-pay-highlight">
              <div>
                <span className="section-kicker">Current Pay Framework</span>

                <h2>Level-Based Revised Pay Structure</h2>

                <p>
                  Bihar Government adopted a level-based revised pay structure
                  after considering the recommendations of the Pay Commission
                  constituted in December 2016.
                </p>
              </div>

              <div className="bihar-pay-date-card">
                <span>Revision Effective From</span>
                <strong>01 Jan 2016</strong>
              </div>
            </section>

            {/* BACKGROUND */}
            <section className="article-section">
              <span className="section-kicker">Background</span>

              <h2>Bihar Government Pay Commission</h2>

              <p>
                After the Seventh Central Pay Commission revised the pay
                structure of Central Government employees, Bihar Government
                constituted its own Pay Commission to recommend a revised pay
                structure for State Government employees.
              </p>

              <p>
                The Bihar Pay Commission was constituted through Finance
                Department Resolution No. 9701 dated 22 December 2016.
              </p>

              <p>
                The Commission submitted its report on 15 May 2017. Bihar
                Government subsequently accepted a level-based revised pay
                structure in May 2017.
              </p>
            </section>

            {/* TIMELINE */}
            <section className="article-section">
              <span className="section-kicker">Timeline</span>

              <h2>Bihar 7th Pay Revision Timeline</h2>

              <div className="bihar-pay-timeline">
                <div>
                  <span>01</span>

                  <div>
                    <strong>1 January 2016</strong>
                    <h3>Revision Effective Date</h3>

                    <p>
                      The revised Bihar Government pay structure was given
                      effect from 1 January 2016.
                    </p>
                  </div>
                </div>

                <div>
                  <span>02</span>

                  <div>
                    <strong>22 December 2016</strong>
                    <h3>Pay Commission Constituted</h3>

                    <p>
                      Bihar Finance Department constituted a Pay Commission
                      through Resolution No. 9701.
                    </p>
                  </div>
                </div>

                <div>
                  <span>03</span>

                  <div>
                    <strong>15 May 2017</strong>
                    <h3>Commission Report Submitted</h3>

                    <p>
                      The Pay Commission submitted its report relating to pay
                      scales and other benefits for State Government employees.
                    </p>
                  </div>
                </div>

                <div>
                  <span>04</span>

                  <div>
                    <strong>24 May 2017</strong>
                    <h3>Revised Structure Accepted</h3>

                    <p>
                      Bihar Government accepted the level-based revised pay
                      structure and Pay Matrix framework.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* PAY MATRIX */}
            <section className="article-section">
              <span className="section-kicker">Pay Structure</span>

              <h2>From Pay Band & Grade Pay to Pay Levels</h2>

              <p>
                Under the revised structure, the earlier Pay Band and Grade Pay
                system was mapped into a level-based Pay Matrix.
              </p>

              <div className="bihar-pay-flow">
                <div>
                  <span>Earlier System</span>
                  <strong>Pay Band + Grade Pay</strong>
                </div>

                <div className="bihar-pay-flow-arrow">→</div>

                <div>
                  <span>Revised System</span>
                  <strong>Pay Level + Pay Matrix Cell</strong>
                </div>
              </div>

              <p>
                The employee&apos;s applicable level depends on the post,
                earlier pay structure and the relevant Bihar Government
                revision rules.
              </p>

              <Link
                href="/state-government/bihar/pay-matrix"
                className="content-button"
              >
                View Bihar Pay Matrix
              </Link>
            </section>

            {/* PAY FIXATION */}
            <section className="article-section">
              <span className="section-kicker">Salary Revision</span>

              <h2>How Revised Pay is Determined</h2>

              <p>
                Pay revision is not simply a change in DA percentage. Revised
                Basic Pay is fixed according to the applicable pay revision
                rules, corresponding pay level and Pay Matrix.
              </p>

              <div className="bihar-pay-feature-grid">
                <div>
                  <span>01</span>
                  <h3>Existing Pay</h3>
                  <p>
                    The employee&apos;s applicable pre-revised pay is
                    identified.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <h3>Applicable Level</h3>
                  <p>
                    The corresponding revised pay level is determined under
                    Government rules.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <h3>Pay Matrix Cell</h3>
                  <p>
                    Revised Basic Pay is placed at the applicable cell of the
                    Pay Matrix.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <h3>Allowances</h3>
                  <p>
                    DA, HRA and other eligible allowances are added separately
                    according to applicable orders.
                  </p>
                </div>
              </div>
            </section>

            {/* CENTRAL VS BIHAR */}
            <section className="bihar-pay-warning">
              <span className="section-kicker">Important Difference</span>

              <h2>Central Pay Commission ≠ Automatic Bihar Pay Revision</h2>

              <p>
                Recommendations of a Central Pay Commission apply directly to
                Central Government employees only after Government of India
                implementation.
              </p>

              <p>
                Bihar Government must separately decide how a new pay structure
                will apply to its State Government employees.
              </p>

              <p>
                Therefore, Central Government fitment factors, implementation
                dates or proposed future Pay Matrix values should not be
                automatically used for Bihar employees.
              </p>
            </section>

            {/* FUTURE PAY REVISION */}
            <section className="article-section">
              <span className="section-kicker">Future Updates</span>

              <h2>What About the Next Bihar Pay Revision?</h2>

              <p>
                GovtPayGuide will treat a future Bihar pay revision as confirmed
                only when Bihar Government issues an official resolution,
                notification, Pay Commission report or implementation order.
              </p>

              <div className="bihar-pay-status-box">
                <strong>No Assumed Fitment Factor</strong>

                <p>
                  Media estimates or Central Government projections should not
                  be presented as Bihar&apos;s final fitment factor, revised
                  Basic Pay or implementation date unless Bihar Government
                  officially approves them.
                </p>
              </div>
            </section>

            {/* STATE FINANCE COMMISSION WARNING */}
            <section className="article-section">
              <span className="section-kicker">Do Not Confuse</span>

              <h2>Pay Commission vs State Finance Commission</h2>

              <div className="bihar-commission-compare">
                <div>
                  <h3>Employee Pay Commission</h3>

                  <p>
                    Deals with Government employee pay structure, salary
                    revision and related benefits.
                  </p>
                </div>

                <div>
                  <h3>State Finance Commission</h3>

                  <p>
                    Reviews financial matters relating to Panchayats and Urban
                    Local Bodies. It is not the employee salary Pay Commission.
                  </p>
                </div>
              </div>
            </section>

            {/* OFFICIAL SOURCE */}
            <section className="bihar-pay-official">
              <div>
                <span className="section-kicker">Official Source</span>

                <h2>Bihar Finance Department</h2>

                <p>
                  Pay revision orders, Pay Commission reports, salary rules and
                  related Government resolutions should always be verified from
                  Bihar Finance Department publications.
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
                <h3>
                  When did Bihar&apos;s revised 7th pay structure become
                  effective?
                </h3>

                <p>
                  The revised pay structure was given effect from 1 January
                  2016.
                </p>
              </div>

              <div className="faq-item">
                <h3>When was the Bihar Pay Commission constituted?</h3>

                <p>
                  Bihar Finance Department constituted the Pay Commission
                  through Resolution No. 9701 dated 22 December 2016.
                </p>
              </div>

              <div className="faq-item">
                <h3>When did the Commission submit its report?</h3>

                <p>The report was submitted on 15 May 2017.</p>
              </div>

              <div className="faq-item">
                <h3>
                  Does Central Government&apos;s next Pay Commission
                  automatically apply to Bihar?
                </h3>

                <p>
                  No. Bihar Government must issue its own decision or
                  implementation order for State Government employees.
                </p>
              </div>

              <div className="faq-item">
                <h3>
                  Is Bihar&apos;s State Finance Commission the same as the Pay
                  Commission?
                </h3>

                <p>
                  No. The State Finance Commission deals primarily with local
                  government finances and should not be confused with an
                  employee Pay Commission.
                </p>
              </div>
            </section>

            {/* DISCLAIMER */}
            <div className="calculator-disclaimer">
              <strong>Disclaimer:</strong> GovtPayGuide is an independent
              informational website and is not affiliated with the Government
              of Bihar. Pay fixation, salary revision, allowances and employee
              entitlement are governed by official Bihar Government
              resolutions, rules and departmental records.
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="bihar-pay-sidebar">
            <div className="sidebar-card">
              <h3>Bihar Pay Guide</h3>

              <Link href="/state-government/bihar">
                Bihar Government
              </Link>

              <Link href="/state-government/bihar/da">
                Bihar DA
              </Link>

              <Link href="/state-government/bihar/pay-matrix">
                Pay Matrix
              </Link>

              <Link href="/state-government/bihar/salary-calculator">
                Salary Calculator
              </Link>
            </div>

            <div className="sidebar-card">
              <h3>Key Dates</h3>

              <p>
                <strong>Effective:</strong>
                <br />
                01 January 2016
              </p>

              <p>
                <strong>Commission:</strong>
                <br />
                22 December 2016
              </p>

              <p>
                <strong>Report:</strong>
                <br />
                15 May 2017
              </p>

              <p>
                <strong>Revision:</strong>
                <br />
                24 May 2017
              </p>
            </div>

            <div className="sidebar-warning">
              <strong>Verify future revisions</strong>

              <p>
                Do not use unofficial future fitment factors or Pay Matrix
                projections as confirmed Bihar Government rates.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}