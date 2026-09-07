import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "West Bengal Government Salary, DA, ROPA & Pension Guide",
  description:
    "West Bengal Government salary, DA, ROPA 2019 pay structure, pay matrix, pension, Dearness Relief and calculators in one place.",
   alternates: {
    canonical: "/state-government/west-bengal",
  }, 
};

const mainResources = [
  {
    title: "West Bengal DA",
    description:
      "Latest Dearness Allowance information, effective dates, official orders and DA guidance.",
    href: "/state-government/west-bengal/da",
    label: "DA Updates",
  },
  {
    title: "ROPA 2019 Pay Structure",
    description:
      "Understand West Bengal ROPA 2019, pay fixation, pay levels, increments and salary structure.",
    href: "/state-government/west-bengal/pay-structure",
    label: "Pay Structure",
  },
  {
    title: "West Bengal Pay Matrix",
    description:
      "Browse ROPA 2019 pay levels, first-cell Basic Pay and special Schedule-II levels.",
    href: "/state-government/west-bengal/pay-matrix",
    label: "Pay Matrix",
  },
  {
    title: "Pension & Dearness Relief",
    description:
      "Pension, family pension, DR, commutation, pension revision and arrears information.",
    href: "/state-government/west-bengal/pension",
    label: "Pension",
  },
];

const calculators = [
  {
    title: "Salary Calculator",
    description:
      "Estimate Basic Pay, DA, HRA, allowances, gross salary and monthly take-home.",
    href: "/state-government/west-bengal/salary-calculator",
  },
  {
    title: "DA Calculator",
    description:
      "Calculate monthly and annual Dearness Allowance using Basic Pay and DA rate.",
    href: "/state-government/west-bengal/da-calculator",
  },
  {
    title: "DA Arrears Calculator",
    description:
      "Estimate the difference between old and revised DA rates for a selected period.",
    href: "/state-government/west-bengal/arrears-calculator",
  },
  {
    title: "Pension Calculator",
    description:
      "Estimate pension using Basic Pension, DR, commutation adjustments and deductions.",
    href: "/state-government/west-bengal/pension-calculator",
  },
];

export default function WestBengalPage() {
  return (
    <main className="wb-hub-page">
      {/* HERO */}
      <section className="wb-hub-hero">
        <div className="container">
          <span className="page-badge">West Bengal Government</span>

          <h1>West Bengal Salary, DA, ROPA & Pension Guide</h1>

          <p>
            Explore West Bengal Government pay structure, Dearness Allowance,
            ROPA 2019 Pay Matrix, pension information and useful salary
            calculators.
          </p>

          <div className="wb-hub-hero-actions">
            <Link
              href="/state-government/west-bengal/salary-calculator"
              className="content-button"
            >
              Calculate Salary
            </Link>

            <Link
              href="/state-government/west-bengal/da"
              className="secondary-content-button"
            >
              View DA Updates
            </Link>
          </div>
        </div>
      </section>

      <div className="container wb-hub-container">
        {/* QUICK ACCESS */}
        <section className="wb-hub-section">
          <div className="wb-hub-section-heading">
            <span>West Bengal Resources</span>
            <h2>Salary & Service Information</h2>
            <p>
              Start with the main West Bengal Government salary and pension
              resources.
            </p>
          </div>

          <div className="wb-hub-resource-grid">
            {mainResources.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="wb-hub-resource-card"
              >
                <span className="wb-hub-card-label">{item.label}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <strong>Explore →</strong>
              </Link>
            ))}
          </div>
        </section>

        {/* CALCULATORS */}
        <section className="wb-hub-section">
          <div className="wb-hub-section-heading">
            <span>Free Tools</span>
            <h2>West Bengal Government Calculators</h2>
            <p>
              Use these tools for quick salary, DA, arrears and pension
              estimates.
            </p>
          </div>

          <div className="wb-hub-calculator-grid">
            {calculators.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="wb-hub-calculator-card"
              >
                <div className="wb-hub-tool-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span>Open Calculator →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* SALARY STRUCTURE */}
        <section className="wb-hub-section">
          <div className="wb-hub-section-heading">
            <span>Salary Structure</span>
            <h2>How West Bengal Government Salary is Structured</h2>
          </div>

          <div className="wb-hub-salary-flow">
            <div>
              <span>01</span>
              <h3>Basic Pay</h3>
              <p>
                Basic Pay is determined by the applicable ROPA Pay Matrix level
                and cell.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Dearness Allowance</h3>
              <p>
                DA is added according to applicable West Bengal Finance
                Department orders.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Allowances</h3>
              <p>
                HRA, medical or other allowances can apply depending on the
                employee and service rules.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Deductions</h3>
              <p>
                Pension contribution, tax, recoveries and other deductions may
                reduce take-home salary.
              </p>
            </div>
          </div>
        </section>

        {/* ROPA */}
        <section className="wb-hub-ropa-box">
          <div className="wb-hub-ropa-content">
            <span className="wb-hub-card-label">Official Pay Rules</span>

            <h2>West Bengal ROPA 2019</h2>

            <p>
              West Bengal Services (Revision of Pay and Allowance) Rules, 2019
              introduced the revised Pay Matrix framework for covered State
              Government employees.
            </p>

            <div className="wb-hub-ropa-actions">
              <Link
                href="/state-government/west-bengal/pay-structure"
                className="content-button"
              >
                Read ROPA Guide
              </Link>

              <a
                href="https://finance.wb.gov.in/writereaddata/ROPA-2019.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-content-button"
              >
                Official ROPA PDF ↗
              </a>
            </div>
          </div>

          <div className="wb-hub-ropa-stat">
            <span>ROPA 2019</span>
            <strong>Pay Matrix</strong>
            <small>West Bengal State Government</small>
          </div>
        </section>

        {/* DA / PENSION */}
        <section className="wb-hub-two-column">
          <div className="wb-hub-info-panel">
            <span className="wb-hub-card-label">For Employees</span>

            <h2>Dearness Allowance</h2>

            <p>
              West Bengal DA is governed by State Government orders and should
              not be confused with Central Government DA rates.
            </p>

            <div className="wb-hub-panel-links">
              <Link href="/state-government/west-bengal/da">
                DA Information →
              </Link>

              <Link href="/state-government/west-bengal/da-calculator">
                DA Calculator →
              </Link>

              <Link href="/state-government/west-bengal/arrears-calculator">
                Arrears Calculator →
              </Link>
            </div>
          </div>

          <div className="wb-hub-info-panel">
            <span className="wb-hub-card-label">For Pensioners</span>

            <h2>Pension & Dearness Relief</h2>

            <p>
              Pensioners and eligible family pensioners may receive Dearness
              Relief according to applicable West Bengal Government orders.
            </p>

            <div className="wb-hub-panel-links">
              <Link href="/state-government/west-bengal/pension">
                Pension Guide →
              </Link>

              <Link href="/state-government/west-bengal/pension-calculator">
                Pension Calculator →
              </Link>
            </div>
          </div>
        </section>

        {/* OFFICIAL SOURCES */}
        <section className="wb-hub-official">
          <div>
            <span className="wb-hub-card-label">Important</span>

            <h2>Always Verify Official Government Orders</h2>

            <p>
              Salary, DA, DR, pension, allowances and pay revision rules can
              change through official notifications, memoranda and government
              orders.
            </p>
          </div>

          <a
            href="https://finance.wb.gov.in/Fin_New/Pages/Publication.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-content-button"
          >
            West Bengal Finance Department ↗
          </a>
        </section>

        {/* EXPLORE OTHER GOVERNMENTS */}
        <section className="wb-hub-section">
          <div className="wb-hub-section-heading">
            <span>Explore More</span>
            <h2>Other Government Salary Resources</h2>
          </div>

          <div className="wb-hub-bottom-links">
            <Link href="/central-government">
              <span>Central Government</span>
              <strong>Salary, DA & Pay Commission →</strong>
            </Link>

            <Link href="/state-government">
              <span>All States</span>
              <strong>State Government Salary Guides →</strong>
            </Link>

            <Link href="/calculators">
              <span>Calculators</span>
              <strong>Browse All Salary Tools →</strong>
            </Link>
          </div>
        </section>

        {/* DISCLAIMER */}
        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> GovtPayGuide is an independent
          informational website and is not affiliated with the Government of
          West Bengal or any government department. Information and calculator
          results are for general guidance only. Always verify official
          notifications, service records, PPO and departmental orders.
        </div>
      </div>
    </main>
  );
}