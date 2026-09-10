import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assam Government DA Latest Update 2026",
  description:
    "Assam Government Dearness Allowance latest update, current DA rate, effective date, official Finance Department orders and DA calculation information.",
  alternates: {
    canonical: "/state-government/assam/da",
  },
};

export default function AssamDAPage() {
  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Assam Government</span>

          <h1>Assam Government DA Latest Update</h1>

          <p>
            Check the latest Dearness Allowance information for Assam
            Government employees, including the notified DA rate, effective
            date and official Finance Department references.
          </p>

          <div className="hero-actions">
            <Link
              href="/state-government/assam/da-calculator"
              className="btn primary"
            >
              Calculate DA
            </Link>

            <Link
              href="/state-government/assam/arrears-calculator"
              className="btn secondary"
            >
              Calculate DA Arrears
            </Link>
          </div>
        </div>
      </section>

      <div className="container state-page-content">
        <section className="state-update-box">
          <span className="section-label">Latest Verified Rate</span>

          <h2>Assam Government DA Rate</h2>

          <p>
            The Assam Finance Department has issued an Executive Order for
            Dearness Allowance at <strong>58%</strong> with effect from
            <strong> 1 July 2025</strong>.
          </p>

          <p>
            This is the latest rate that should be used on GovtPayGuide unless
            a newer official Finance Department order is verified.
          </p>
        </section>

        <section className="article-section">
          <span className="section-label">DA Details</span>

          <h2>Assam DA at a Glance</h2>

          <div className="article-table-wrapper">
            <table className="article-table">
              <tbody>
                <tr>
                  <th>DA Rate</th>
                  <td>58%</td>
                </tr>

                <tr>
                  <th>Effective From</th>
                  <td>1 July 2025</td>
                </tr>

                <tr>
                  <th>Authority</th>
                  <td>Finance Department, Government of Assam</td>
                </tr>

                <tr>
                  <th>Pay Framework</th>
                  <td>Assam Services (Revision of Pay) Rules, 2017</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Calculation</span>

          <h2>How to Calculate Assam DA</h2>

          <p>The basic DA calculation formula is:</p>

          <div className="article-formula">
            DA = Basic Pay × DA Rate ÷ 100
          </div>

          <p>
            For example, if an employee&apos;s eligible Basic Pay is ₹30,000
            and the applicable DA rate is 58%:
          </p>

          <div className="article-table-wrapper">
            <table className="article-table">
              <tbody>
                <tr>
                  <th>Basic Pay</th>
                  <td>₹30,000</td>
                </tr>

                <tr>
                  <th>DA Rate</th>
                  <td>58%</td>
                </tr>

                <tr>
                  <th>DA Amount</th>
                  <td>₹17,400</td>
                </tr>

                <tr>
                  <th>Basic + DA</th>
                  <td>₹47,400</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Actual gross salary can be different because HRA, other
            allowances, deductions and applicable service rules may also
            apply.
          </p>

          <Link
            href="/state-government/assam/da-calculator"
            className="primary-content-button"
          >
            Open Assam DA Calculator →
          </Link>
        </section>

        <section className="article-section">
          <span className="section-label">Employees</span>

          <h2>Who may be covered?</h2>

          <p>
            Dearness Allowance orders issued by the Assam Finance Department
            generally apply to eligible State Government employees subject to
            the conditions and categories stated in the relevant Government
            order.
          </p>

          <p>
            Employees should verify their own eligibility from the applicable
            Finance Department order or departmental clarification.
          </p>
        </section>

        <section className="article-section">
          <span className="section-label">Pensioners</span>

          <h2>Dearness Relief for Pensioners</h2>

          <p>
            Pensioners and family pensioners may receive Dearness Relief under
            separate or corresponding Government orders.
          </p>

          <p>
            The applicable DR rate and effective date should always be checked
            from the official Assam Finance Department notification before
            making pension calculations.
          </p>

          <Link
            href="/state-government/assam/pension"
            className="primary-content-button"
          >
            View Assam Pension Information →
          </Link>
        </section>

        <section className="article-section">
          <span className="section-label">Pay Rules</span>

          <h2>Assam Revision of Pay Rules</h2>

          <p>
            Assam Government employee pay is governed by the applicable Assam
            Services (Revision of Pay) Rules, 2017 and subsequent Government
            orders and amendments.
          </p>

          <p>
            The revised pay rules are deemed to have come into force from
            1 April 2016.
          </p>

          <Link
            href="/state-government/assam/pay-commission"
            className="primary-content-button"
          >
            View Assam Pay Commission Guide →
          </Link>
        </section>

        <section className="article-section">
          <span className="section-label">Official Source</span>

          <h2>Where to Verify Assam DA Orders</h2>

          <p>
            For authoritative DA information, always check the official Assam
            Finance Department website and its notifications or Office
            Memoranda.
          </p>

          <div className="article-source-links">
            <a
              href="https://finance.assam.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Assam Finance Department →
            </a>
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Related</span>

          <h2>Related Assam Government Information</h2>

          <div className="article-related-links">
            <Link href="/state-government/assam">
              Assam Government Salary Hub →
            </Link>

            <Link href="/state-government/assam/pay-matrix">
              Assam Pay Matrix →
            </Link>

            <Link href="/state-government/assam/salary-calculator">
              Assam Salary Calculator →
            </Link>

            <Link href="/state-government/assam/arrears-calculator">
              Assam DA Arrears Calculator →
            </Link>
          </div>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> GovtPayGuide is an independent
          informational website and is not affiliated with the Government of
          Assam. DA rates, eligibility and effective dates should always be
          verified from official Finance Department orders before making
          financial decisions.
        </div>
      </div>
    </main>
  );
}