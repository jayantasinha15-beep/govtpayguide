import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assam Pay Matrix & Revised Pay Structure 2017",
  description:
    "Assam Government revised pay bands, grade pay and pay structure under the Assam Services (Revision of Pay) Rules, 2017.",
  alternates: {
    canonical: "/state-government/assam/pay-matrix",
  },
};

const payStructure = [
  {
    oldPayBand: "₹4,560 – ₹15,000",
    oldGradePay: "₹1,500",
    revisedPayBand: "₹12,000 – ₹37,500",
    revisedGradePay: "₹3,900",
  },
  {
    oldPayBand: "₹4,560 – ₹15,000",
    oldGradePay: "₹1,600",
    revisedPayBand: "₹12,000 – ₹37,500",
    revisedGradePay: "₹3,900",
  },
  {
    oldPayBand: "₹4,560 – ₹15,000",
    oldGradePay: "₹1,800",
    revisedPayBand: "₹12,000 – ₹37,500",
    revisedGradePay: "₹4,400",
  },

  {
    oldPayBand: "₹5,200 – ₹20,200",
    oldGradePay: "₹2,000",
    revisedPayBand: "₹14,000 – ₹49,000",
    revisedGradePay: "₹5,000",
  },
  {
    oldPayBand: "₹5,200 – ₹20,200",
    oldGradePay: "₹2,100",
    revisedPayBand: "₹14,000 – ₹49,000",
    revisedGradePay: "₹5,000",
  },
  {
    oldPayBand: "₹5,200 – ₹20,200",
    oldGradePay: "₹2,200",
    revisedPayBand: "₹14,000 – ₹49,000",
    revisedGradePay: "₹5,600",
  },
  {
    oldPayBand: "₹5,200 – ₹20,200",
    oldGradePay: "₹2,400",
    revisedPayBand: "₹14,000 – ₹49,000",
    revisedGradePay: "₹6,200",
  },
  {
    oldPayBand: "₹5,200 – ₹20,200",
    oldGradePay: "₹2,500",
    revisedPayBand: "₹14,000 – ₹49,000",
    revisedGradePay: "₹6,200",
  },
  {
    oldPayBand: "₹5,200 – ₹20,200",
    oldGradePay: "₹2,700",
    revisedPayBand: "₹14,000 – ₹49,000",
    revisedGradePay: "₹6,800",
  },
  {
    oldPayBand: "₹5,200 – ₹20,200",
    oldGradePay: "₹2,900",
    revisedPayBand: "₹14,000 – ₹49,000",
    revisedGradePay: "₹7,400",
  },
  {
    oldPayBand: "₹5,200 – ₹20,200",
    oldGradePay: "₹3,000",
    revisedPayBand: "₹14,000 – ₹49,000",
    revisedGradePay: "₹7,400",
  },
  {
    oldPayBand: "₹5,200 – ₹20,200",
    oldGradePay: "₹3,100",
    revisedPayBand: "₹14,000 – ₹49,000",
    revisedGradePay: "₹8,000",
  },
  {
    oldPayBand: "₹5,200 – ₹20,200",
    oldGradePay: "₹3,300",
    revisedPayBand: "₹14,000 – ₹49,000",
    revisedGradePay: "₹8,700",
  },

  {
    oldPayBand: "₹8,000 – ₹35,000",
    oldGradePay: "₹4,200",
    revisedPayBand: "₹22,000 – ₹87,000",
    revisedGradePay: "₹9,100",
  },
  {
    oldPayBand: "₹8,000 – ₹35,000",
    oldGradePay: "₹4,300",
    revisedPayBand: "₹22,000 – ₹87,000",
    revisedGradePay: "₹9,100",
  },
  {
    oldPayBand: "₹8,000 – ₹35,000",
    oldGradePay: "₹4,500",
    revisedPayBand: "₹22,000 – ₹87,000",
    revisedGradePay: "₹9,700",
  },
  {
    oldPayBand: "₹8,000 – ₹35,000",
    oldGradePay: "₹4,600",
    revisedPayBand: "₹22,000 – ₹87,000",
    revisedGradePay: "₹10,300",
  },
  {
    oldPayBand: "₹8,000 – ₹35,000",
    oldGradePay: "₹4,700",
    revisedPayBand: "₹22,000 – ₹87,000",
    revisedGradePay: "₹10,900",
  },
  {
    oldPayBand: "₹8,000 – ₹35,000",
    oldGradePay: "₹4,900",
    revisedPayBand: "₹22,000 – ₹87,000",
    revisedGradePay: "₹11,500",
  },
  {
    oldPayBand: "₹8,000 – ₹35,000",
    oldGradePay: "₹5,100",
    revisedPayBand: "₹22,000 – ₹87,000",
    revisedGradePay: "₹11,500",
  },

  {
    oldPayBand: "₹12,000 – ₹40,000",
    oldGradePay: "₹5,400",
    revisedPayBand: "₹30,000 – ₹1,10,000",
    revisedGradePay: "₹12,700",
  },
  {
    oldPayBand: "₹12,000 – ₹40,000",
    oldGradePay: "₹5,900",
    revisedPayBand: "₹30,000 – ₹1,10,000",
    revisedGradePay: "₹13,300",
  },
  {
    oldPayBand: "₹12,000 – ₹40,000",
    oldGradePay: "₹6,100",
    revisedPayBand: "₹30,000 – ₹1,10,000",
    revisedGradePay: "₹13,900",
  },
  {
    oldPayBand: "₹12,000 – ₹40,000",
    oldGradePay: "₹6,300",
    revisedPayBand: "₹30,000 – ₹1,10,000",
    revisedGradePay: "₹14,500",
  },
  {
    oldPayBand: "₹12,000 – ₹40,000",
    oldGradePay: "₹6,400",
    revisedPayBand: "₹30,000 – ₹1,10,000",
    revisedGradePay: "₹15,100",
  },
  {
    oldPayBand: "₹12,000 – ₹40,000",
    oldGradePay: "₹6,600",
    revisedPayBand: "₹30,000 – ₹1,10,000",
    revisedGradePay: "₹15,700",
  },
  {
    oldPayBand: "₹12,000 – ₹40,000",
    oldGradePay: "₹7,200",
    revisedPayBand: "₹30,000 – ₹1,10,000",
    revisedGradePay: "₹16,300",
  },
  {
    oldPayBand: "₹12,000 – ₹40,000",
    oldGradePay: "₹7,400",
    revisedPayBand: "₹30,000 – ₹1,10,000",
    revisedGradePay: "₹16,900",
  },
  {
    oldPayBand: "₹12,000 – ₹40,000",
    oldGradePay: "₹7,600",
    revisedPayBand: "₹30,000 – ₹1,10,000",
    revisedGradePay: "₹17,500",
  },

  {
    oldPayBand: "₹26,000 – ₹45,000",
    oldGradePay: "₹8,700",
    revisedPayBand: "₹65,000 – ₹1,12,000",
    revisedGradePay: "₹18,500",
  },
];
export default function AssamPayMatrixPage() {
  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Assam Government</span>

          <h1>Assam Pay Matrix & Revised Pay Structure</h1>

          <p>
            Explore the revised Pay Bands and Grade Pay structure introduced
            under the Assam Services (Revision of Pay) Rules, 2017.
          </p>

          <div className="hero-actions">
            <Link
              href="/state-government/assam/salary-calculator"
              className="btn primary"
            >
              Calculate Salary
            </Link>

            <Link
              href="/state-government/assam/pay-commission"
              className="btn secondary"
            >
              Pay Commission Guide
            </Link>
          </div>
        </div>
      </section>

      <div className="container state-page-content">
        <section className="state-update-box">
          <span className="section-label">Pay Structure</span>

          <h2>Assam ROP 2017 Pay Structure</h2>

          <p>
            Assam&apos;s revised pay system under ROP 2017 uses
            <strong> five running Pay Bands</strong> together with
            <strong> 24 corresponding Grade Pays</strong>.
          </p>

          <p>
            Unlike the Central Government&apos;s numbered Pay Matrix levels,
            Assam&apos;s ROP 2017 structure is primarily expressed through
            revised Pay Bands and Grade Pay.
          </p>
        </section>

        <section className="article-section">
          <span className="section-label">Official Table</span>

          <h2>Assam Revised Pay Band & Grade Pay</h2>

          <p>
            The following mapping is based on Table 1 of the Assam Services
            (Revision of Pay) Rules, 2017.
          </p>

          <div className="article-table-wrapper">
            <table className="article-table">
              <thead>
                <tr>
                  <th>Old Pay Band</th>
                  <th>Old Grade Pay</th>
                  <th>Revised Pay Band</th>
                  <th>Revised Grade Pay</th>
                </tr>
              </thead>

              <tbody>
                {payStructure.map((item, index) => (
                  <tr key={index}>
                    <td>{item.oldPayBand}</td>
                    <td>{item.oldGradePay}</td>
                    <td>
                      <strong>{item.revisedPayBand}</strong>
                    </td>
                    <td>{item.revisedGradePay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Highest Pay</span>

          <h2>Fixed Pay under ROP 2017</h2>

          <p>
            The official ROP 2017 table also provides a fixed revised pay of
            <strong> ₹1,30,000</strong> for the corresponding fixed
            pre-revised pay of ₹55,000.
          </p>

          <div className="article-table-wrapper">
            <table className="article-table">
              <tbody>
                <tr>
                  <th>Pre-Revised Pay</th>
                  <td>Fixed ₹55,000</td>
                </tr>

                <tr>
                  <th>Revised Pay</th>
                  <td>
                    <strong>Fixed ₹1,30,000</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Basic Pay</span>

          <h2>What is Basic Pay in Assam ROP 2017?</h2>

          <p>
            Under the ROP 2017 framework, Basic Pay consists of:
          </p>

          <div className="article-formula">
            Basic Pay = Pay in Pay Band + Grade Pay
          </div>

          <p>
            Therefore, Grade Pay is an important part of determining an
            employee&apos;s Basic Pay under this structure.
          </p>
        </section>

        <section className="article-section">
          <span className="section-label">Minimum & Maximum</span>

          <h2>Minimum and Maximum Basic Pay</h2>

          <p>
            The ROP 2017 notification states that the minimum Basic Pay under
            the revised structure is <strong>₹15,900</strong>.
          </p>

          <p>
            The maximum specified fixed Basic Pay is
            <strong> ₹1,30,000</strong> for the post of Commissioner &
            Secretary.
          </p>
        </section>

        <section className="article-section">
          <span className="section-label">Pay Fixation</span>

          <h2>How is an employee&apos;s revised pay fixed?</h2>

          <p>
            An employee&apos;s revised pay is not determined merely by
            selecting the minimum of a revised Pay Band.
          </p>

          <p>
            The Assam ROP 2017 provides detailed stage-wise fixation tables in
            Appendix I. The applicable fixation depends on the employee&apos;s
            existing pay, old pay band, grade pay and relevant service
            conditions.
          </p>

          <div className="article-warning">
            <strong>Important:</strong> Do not use this summary table alone to
            determine an employee&apos;s exact revised Basic Pay. Individual
            pay fixation should be checked against the official fixation table
            and departmental pay fixation order.
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Salary</span>

          <h2>How does Pay Band and Grade Pay affect salary?</h2>

          <p>
            Once Basic Pay is established under the applicable rules, other
            salary components may be calculated according to the relevant
            Government orders.
          </p>

          <div className="article-table-wrapper">
            <table className="article-table">
              <tbody>
                <tr>
                  <th>Basic Pay</th>
                  <td>Pay in Pay Band + Grade Pay</td>
                </tr>

                <tr>
                  <th>DA</th>
                  <td>Calculated at the applicable DA rate</td>
                </tr>

                <tr>
                  <th>HRA</th>
                  <td>Depends on applicable Government rules</td>
                </tr>

                <tr>
                  <th>Other Allowances</th>
                  <td>Depend on post and eligibility</td>
                </tr>

                <tr>
                  <th>Gross Salary</th>
                  <td>Basic Pay + eligible allowances</td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link
            href="/state-government/assam/salary-calculator"
            className="primary-content-button"
          >
            Open Assam Salary Calculator →
          </Link>
        </section>

        <section className="article-section">
          <span className="section-label">Official Source</span>

          <h2>Assam ROP 2017 Official Notification</h2>

          <p>
            The revised structure shown on this page is based on the Assam
            Services (Revision of Pay) Rules, 2017 published by the Finance
            Department, Government of Assam.
          </p>

          <div className="article-source-links">
            <a
              href="https://finance.assam.gov.in/sites/default/files/ROP%202017.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Official ROP 2017 →
            </a>

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

          <h2>Related Assam Pay Information</h2>

          <div className="article-related-links">
            <Link href="/state-government/assam/pay-commission">
              Assam Pay Commission →
            </Link>

            <Link href="/state-government/assam/da">
              Assam DA Latest Update →
            </Link>

            <Link href="/state-government/assam/salary-calculator">
              Assam Salary Calculator →
            </Link>

            <Link href="/state-government/assam">
              Assam Government Salary Hub →
            </Link>
          </div>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> GovtPayGuide is an independent
          informational website and is not affiliated with the Government of
          Assam. This page summarizes the ROP 2017 pay structure for
          informational purposes. Exact pay fixation depends on the applicable
          post, service rules, fixation table and Government orders.
        </div>
      </div>
    </main>
  );
}