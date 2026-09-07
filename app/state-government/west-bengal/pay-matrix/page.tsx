import type { Metadata } from "next";
import Link from "next/link";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "West Bengal ROPA 2019 Pay Matrix Levels & Basic Pay",
  description:
    "West Bengal ROPA 2019 Pay Matrix levels, minimum Basic Pay, old Grade Pay mapping, special pay levels and official ROPA 2019 PDF download.",
alternates: {
  canonical: "/state-government/west-bengal/pay-matrix",
},
};

const mainLevels = [
  { level: "Level 1", gradePay: "₹1,700", basic: "₹17,000" },
  { level: "Level 2", gradePay: "₹1,800", basic: "₹17,600" },
  { level: "Level 3", gradePay: "₹1,900", basic: "₹18,800" },
  { level: "Level 4", gradePay: "₹2,100", basic: "₹19,700" },
  { level: "Level 5", gradePay: "₹2,300", basic: "₹21,000" },
  { level: "Level 6", gradePay: "₹2,600", basic: "₹22,700" },
  { level: "Level 7", gradePay: "₹2,900", basic: "₹24,700" },
  { level: "Level 8", gradePay: "₹3,200", basic: "₹27,000" },
  { level: "Level 9", gradePay: "₹3,600", basic: "₹28,900" },
  { level: "Level 10", gradePay: "₹3,900", basic: "₹32,100" },
  { level: "Level 11", gradePay: "₹4,100", basic: "₹33,400" },
  { level: "Level 12", gradePay: "₹4,400", basic: "₹35,800" },
  { level: "Level 13", gradePay: "₹4,600", basic: "₹37,100" },
  { level: "Level 14", gradePay: "₹4,700", basic: "₹39,900" },
  { level: "Level 15", gradePay: "₹4,800", basic: "₹42,600" },
  { level: "Level 16", gradePay: "₹5,400", basic: "₹56,100" },
  { level: "Level 17", gradePay: "₹6,600", basic: "₹67,300" },
  { level: "Level 18", gradePay: "₹7,000", basic: "₹68,400" },
  { level: "Level 19", gradePay: "₹7,600", basic: "₹95,100" },
  { level: "Level 20", gradePay: "₹8,000", basic: "₹96,100" },
  { level: "Level 21", gradePay: "₹8,700", basic: "₹1,23,100" },
  { level: "Level 22", gradePay: "₹8,900", basic: "₹1,23,600" },
  { level: "Level 23", gradePay: "₹9,500", basic: "₹1,25,200" },
  { level: "Level 24", gradePay: "₹10,000", basic: "₹1,28,900" },
];

const specialLevels = [
  { level: "Level 6A", gradePay: "₹2,680", basic: "₹23,800" },
  { level: "Level 9A", gradePay: "₹3,650", basic: "₹31,800" },
  { level: "Level 10A", gradePay: "₹3,950", basic: "₹33,000" },
  { level: "Level 10B", gradePay: "₹3,960", basic: "₹34,500" },
  { level: "Level 10C", gradePay: "₹4,220", basic: "₹41,800" },
  { level: "Level 12A", gradePay: "₹4,580", basic: "₹39,500" },
  { level: "Level 12B", gradePay: "₹4,780", basic: "₹44,800" },
  { level: "Level 15A", gradePay: "₹5,040", basic: "₹52,200" },
  { level: "Level 16A", gradePay: "₹5,640", basic: "₹60,300" },
  { level: "Level 19A", gradePay: "₹7,740", basic: "₹95,400" },
];

export default function WestBengalPayMatrixPage() {
  return (
    <main>
      <ArticleJsonLd
  title="West Bengal Pay Matrix Guide"
  description="West Bengal Government Pay Matrix, Grade Pay mapping and Basic Pay progression."
  url="/state-government/west-bengal/pay-matrix"
/>

<BreadcrumbJsonLd
  items={[
    { name: "Home", path: "/" },
    { name: "West Bengal", path: "/state-government/west-bengal" },
    { name: "Pay Matrix", path: "/state-government/west-bengal/pay-matrix" },
  ]}
/>
      {/* HERO */}
      <section className="wb-matrix-hero">
        <div className="container">
          <span className="page-badge">ROPA 2019</span>

          <h1>West Bengal Pay Matrix</h1>

          <p>
            Explore West Bengal ROPA 2019 Pay Matrix levels, minimum Basic Pay,
            corresponding old Grade Pay and special Pay Levels.
          </p>
        </div>
      </section>

      <div className="container wb-matrix-page">

        {/* INTRODUCTION */}
        <section className="article-section">
          <span className="section-kicker">ROPA 2019</span>

          <h2>West Bengal Pay Matrix Levels</h2>

          <p>
            Under ROPA 2019, Basic Pay is drawn from the applicable cell of the
            employee&apos;s Pay Level. The matrix replaced the earlier Pay Band
            and Grade Pay-based salary structure.
          </p>

          {/* SUMMARY CARDS */}
          <div className="matrix-info-banner">
            <div>
              <span>Main Levels</span>
              <strong>Level 1 – Level 24</strong>
            </div>

            <div>
              <span>Additional Levels</span>
              <strong>Special A/B/C Levels</strong>
            </div>

            <div>
              <span>Framework</span>
              <strong>ROPA 2019</strong>
            </div>
          </div>
        </section>

        {/* ROPA DOWNLOAD */}
        <section className="ropa-download-box">
          <div className="ropa-download-content">
            <span className="ropa-download-label">
              Official Document
            </span>

            <h2>West Bengal ROPA 2019 PDF</h2>

            <p>
              Download the official West Bengal Services (Revision of Pay and
              Allowance) Rules, 2019 published by the Finance Department,
              Government of West Bengal.
            </p>

            <div className="ropa-document-info">
              <span>Notification No. 5562-F</span>
              <span>25 September 2019</span>
              <span>Finance Department</span>
            </div>
          </div>

          <a
            href="https://finance.wb.gov.in/writereaddata/ROPA-2019.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ropa-download-button"
          >
            Download ROPA 2019 PDF ↓
          </a>
        </section>

        {/* MAIN PAY LEVEL TABLE */}
        <section className="article-section">
          <span className="section-kicker">Pay Matrix</span>

          <h2>Main Pay Levels</h2>

          <p>
            The following table shows the main Pay Levels, corresponding old
            Grade Pay and first cell or minimum Basic Pay under ROPA 2019.
          </p>

          <div className="table-wrap">
            <table className="wb-matrix-table">
              <thead>
                <tr>
                  <th>Pay Level</th>
                  <th>Old Grade Pay</th>
                  <th>First Cell / Minimum Basic</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {mainLevels.map((item) => (
                  <tr key={item.level}>
                    <td>
                      <strong>{item.level}</strong>
                    </td>

                    <td>{item.gradePay}</td>

                    <td>
                      <strong>{item.basic}</strong>
                    </td>

                    <td>
                      <Link
                        href="/state-government/west-bengal/salary-calculator"
                        className="matrix-calc-link"
                      >
                        Calculate Salary
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SPECIAL LEVELS */}
        <section className="article-section">
          <span className="section-kicker">Special Levels</span>

          <h2>Additional ROPA Pay Levels</h2>

          <p>
            ROPA 2019 also contains additional Pay Levels associated with
            specific Grade Pay and pay structures.
          </p>

          <div className="special-level-grid">
            {specialLevels.map((item) => (
              <div key={item.level} className="special-level-card">
                <span>{item.level}</span>

                <strong>{item.basic}</strong>

                <p>First Cell Basic Pay</p>

                <small>
                  Old Grade Pay: {item.gradePay}
                </small>
              </div>
            ))}
          </div>
        </section>

        {/* HOW MATRIX WORKS */}
        <section className="article-section">
          <span className="section-kicker">How It Works</span>

          <h2>How Pay Progresses in the Matrix</h2>

          <div className="matrix-step-grid">
            <div>
              <span>1</span>

              <h3>Select Pay Level</h3>

              <p>
                The applicable Pay Level depends on the employee&apos;s post,
                previous pay structure and applicable service rules.
              </p>
            </div>

            <div>
              <span>2</span>

              <h3>Find Current Cell</h3>

              <p>
                Current Basic Pay is determined from the applicable cell within
                the employee&apos;s Pay Level.
              </p>
            </div>

            <div>
              <span>3</span>

              <h3>Annual Increment</h3>

              <p>
                Subject to applicable rules, progression generally moves to the
                immediate next higher vertical cell in the same Pay Level.
              </p>
            </div>
          </div>
        </section>

        {/* EXAMPLE */}
        <section className="article-section">
          <h2>Pay Matrix Example</h2>

          <div className="level-example">
            <span>Example Pay Level</span>

            <h3>Level 6</h3>

            <p>
              First Cell Basic Pay:
              <strong> ₹22,700</strong>
            </p>

            <p>
              An employee&apos;s actual Basic Pay does not necessarily remain
              at the first cell. It depends on the applicable matrix cell after
              pay fixation and increments.
            </p>
          </div>
        </section>

        {/* SALARY STRUCTURE */}
        <section className="article-section">
          <span className="section-kicker">Salary</span>

          <h2>From Pay Matrix to Salary</h2>

          <p>
            The Pay Matrix determines Basic Pay. Eligible allowances and
            deductions are then applied separately to determine gross and
            take-home salary.
          </p>

          <div className="salary-components">
            <div>
              <span>Matrix Basic Pay</span>
            </div>

            <strong>+</strong>

            <div>
              <span>DA</span>
            </div>

            <strong>+</strong>

            <div>
              <span>HRA</span>
            </div>

            <strong>+</strong>

            <div>
              <span>Other Allowances</span>
            </div>

            <strong>=</strong>

            <div>
              <span>Gross Salary</span>
            </div>
          </div>

          <Link
            href="/state-government/west-bengal/salary-calculator"
            className="content-button"
          >
            Open WB Salary Calculator
          </Link>
        </section>

        {/* OFFICIAL SOURCE */}
        <section className="official-source-box">
          <span>Official Source</span>

          <h2>ROPA 2019 Pay Matrix</h2>

          <p>
            The information on this page is based on the West Bengal Services
            (Revision of Pay and Allowance) Rules, 2019. Employee-specific pay
            fixation should always be verified using applicable government
            orders and official service records.
          </p>

          <a
            href="https://finance.wb.gov.in/writereaddata/ROPA-2019.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            View Official ROPA 2019 Document →
          </a>
        </section>

        {/* FAQ */}
        <section className="article-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <h3>What is the West Bengal Pay Matrix?</h3>

            <p>
              It is the revised Basic Pay structure introduced under ROPA 2019
              for eligible West Bengal Government employees.
            </p>
          </div>

          <div className="faq-item">
            <h3>Does the Pay Matrix show gross salary?</h3>

            <p>
              No. The Pay Matrix primarily determines Basic Pay. DA, HRA,
              other allowances and deductions are calculated separately.
            </p>
          </div>

          <div className="faq-item">
            <h3>
              Is the West Bengal Pay Matrix the same as the Central Government
              Pay Matrix?
            </h3>

            <p>
              No. West Bengal ROPA and Central Government Pay Commission rules
              are separate pay frameworks.
            </p>
          </div>

          <div className="faq-item">
            <h3>Where can I download ROPA 2019?</h3>

            <p>
              The official ROPA 2019 PDF can be downloaded from the West
              Bengal Finance Department using the download button provided on
              this page.
            </p>
          </div>
        </section>

        {/* DISCLAIMER */}
        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> GovtPayGuide is an independent
          informational website and is not affiliated with the Government of
          West Bengal. Official Finance Department notifications, rules,
          orders and employee service records take precedence over information
          displayed on this website.
        </div>
      </div>
    </main>
  );
}