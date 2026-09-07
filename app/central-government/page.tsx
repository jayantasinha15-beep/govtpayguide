import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Central Government Salary, DA & Pay Commission",
  description:
    "Central Government employee salary, DA, Pay Commission, Pay Matrix, allowances, pension and salary calculator information.",
    alternates: {
    canonical: "/central-government",
  },
};

export default function CentralGovernmentPage() {
  return (
    <main>
      <section className="central-hero">
        <div className="container">
          <span className="page-badge">Central Government</span>

          <h1>Central Government Salary & Pay Guide</h1>

          <p>
            Explore Dearness Allowance, Pay Commission, Pay Matrix, salary,
            allowances, pension and calculators for Central Government
            employees.
          </p>

          <div className="central-hero-actions">
            <Link href="/da" className="content-button">
              View DA Information
            </Link>

            <Link href="/salary-calculator" className="secondary-button">
              Salary Calculator
            </Link>
          </div>
        </div>
      </section>

      <div className="container central-page">
        <section className="central-quick-grid">
          <Link href="/da" className="central-feature-card">
            <span className="central-card-label">DA</span>

            <h2>Dearness Allowance</h2>

            <p>
              Central Government DA rates, revisions, effective dates,
              calculation guides and related updates.
            </p>

            <strong>View DA →</strong>
          </Link>

          <Link href="/pay-commission" className="central-feature-card">
            <span className="central-card-label">Pay Commission</span>

            <h2>Pay Commission</h2>

            <p>
              Information about the 7th Pay Commission, Pay Matrix, fitment
              factor and verified developments related to future pay revision.
            </p>

            <strong>View Pay Commission →</strong>
          </Link>

          <Link href="/pay-matrix" className="central-feature-card">
            <span className="central-card-label">Pay Matrix</span>

            <h2>7th CPC Pay Matrix</h2>

            <p>
              Explore Central Government Pay Levels, starting Basic Pay and
              Pay Matrix-related salary information.
            </p>

            <strong>View Pay Matrix →</strong>
          </Link>

          <Link href="/salary-calculator" className="central-feature-card">
            <span className="central-card-label">Calculator</span>

            <h2>Salary Calculator</h2>

            <p>
              Estimate Basic Pay, DA, HRA, allowances, Gross Salary and
              Take-Home Salary.
            </p>

            <strong>Calculate Salary →</strong>
          </Link>

          <Link href="/hra-calculator" className="central-feature-card">
            <span className="central-card-label">HRA</span>

            <h2>HRA Calculator</h2>

            <p>
              Calculate estimated House Rent Allowance based on Basic Pay and
              the applicable HRA rate.
            </p>

            <strong>Calculate HRA →</strong>
          </Link>

          <Link href="/arrears-calculator" className="central-feature-card">
            <span className="central-card-label">Arrears</span>

            <h2>DA Arrears Calculator</h2>

            <p>
              Estimate arrears resulting from a change in Dearness Allowance
              rate.
            </p>

            <strong>Calculate Arrears →</strong>
          </Link>
        </section>

        <section className="article-section">
          <span className="section-kicker">Central Government</span>

          <h2>Salary Structure</h2>

          <div className="central-salary-flow">
            <div>
              <span>01</span>
              <h3>Basic Pay</h3>
              <p>Basic Pay according to the applicable Pay Matrix cell.</p>
            </div>

            <div>
              <span>02</span>
              <h3>DA</h3>
              <p>
                Dearness Allowance calculated according to the applicable
                notified rate.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Allowances</h3>
              <p>
                HRA, Transport Allowance and other applicable allowances.
              </p>
            </div>

            <div>
              <span>04</span>
              <h3>Deductions</h3>
              <p>
                Applicable deductions such as NPS, tax and other recoveries.
              </p>
            </div>
          </div>
        </section>

        <section className="official-source-box">
          <span>Official Information</span>

          <h2>Government Orders Take Priority</h2>

          <p>
            Salary, DA, allowances and pension rules may change. GovtPayGuide
            aims to reference applicable official notifications and government
            orders. Always verify important decisions against the latest
            official document.
          </p>
        </section>

        <section className="article-section">
          <span className="section-kicker">Popular Tools</span>

          <h2>Central Government Salary Calculators</h2>

          <div className="tools-link-grid">
            <Link href="/salary-calculator">
              Salary Calculator
            </Link>

            <Link href="/da-calculator">
              DA Calculator
            </Link>

            <Link href="/hra-calculator">
              HRA Calculator
            </Link>

            <Link href="/arrears-calculator">
              DA Arrears Calculator
            </Link>
          </div>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> GovtPayGuide is an independent
          informational website and is not affiliated with the Government of
          India. Information and calculator results should be verified using
          applicable official government orders.
        </div>
      </div>
    </main>
  );
}