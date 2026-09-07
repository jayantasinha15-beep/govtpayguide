import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bihar Government Salary, DA & Pay Commission Guide",
  description:
    "Bihar Government salary, Dearness Allowance, pay revision, pay matrix, pension and salary calculator information for State Government employees.",
  alternates: {
    canonical: "/state-government/bihar",
  },
};

export default function BiharGovernmentPage() {
  return (
    <main>
      {/* HERO */}
      <section className="bihar-hero">
        <div className="container">
          <span className="page-badge">Bihar Government</span>

          <h1>Bihar Salary, DA & Pay Commission Guide</h1>

          <p>
            Explore Bihar Government employee salary structure, Dearness
            Allowance, pay revision, pay matrix, pension information and useful
            calculators in one place.
          </p>

          <div className="bihar-hero-actions">
            <Link
              href="/state-government/bihar/da"
              className="primary-content-button"
            >
              Bihar DA Updates
            </Link>

            <Link
              href="/state-government/bihar/salary-calculator"
              className="secondary-content-button"
            >
              Salary Calculator
            </Link>
          </div>
        </div>
      </section>

      <div className="container bihar-hub-page">
        {/* QUICK LINKS */}
        <section className="bihar-hub-section">
          <div className="section-heading">
            <span className="section-kicker">Bihar Government Pay</span>

            <h2>Salary & Pay Resources</h2>

            <p>
              Bihar Government employees are governed by State Government pay
              revision rules, Finance Department orders and applicable service
              conditions.
            </p>
          </div>

          <div className="bihar-resource-grid">
            <Link
              href="/state-government/bihar/da"
              className="bihar-resource-card"
            >
              <span>DA</span>

              <h3>Bihar Dearness Allowance</h3>

              <p>
                Check Bihar Government DA revisions, effective dates and
                official Finance Department orders.
              </p>

              <strong>View DA Guide →</strong>
            </Link>

            <Link
              href="/state-government/bihar/pay-commission"
              className="bihar-resource-card"
            >
              <span>Pay Revision</span>

              <h3>Bihar Pay Commission</h3>

              <p>
                Understand Bihar Government pay revision, adopted pay
                structures and related State Government decisions.
              </p>

              <strong>View Pay Commission →</strong>
            </Link>

            <Link
              href="/state-government/bihar/pay-matrix"
              className="bihar-resource-card"
            >
              <span>Pay Matrix</span>

              <h3>Bihar Pay Matrix</h3>

              <p>
                Explore pay levels, Basic Pay structure and progression under
                the applicable Bihar Government pay rules.
              </p>

              <strong>View Pay Matrix →</strong>
            </Link>

            <Link
              href="/state-government/bihar/pension"
              className="bihar-resource-card"
            >
              <span>Pension</span>

              <h3>Bihar Pension & DR</h3>

              <p>
                Learn about pension, family pension, Dearness Relief and
                applicable retirement benefits.
              </p>

              <strong>View Pension Guide →</strong>
            </Link>
          </div>
        </section>

        {/* SALARY STRUCTURE */}
        <section className="bihar-hub-section">
          <div className="section-heading">
            <span className="section-kicker">Salary Basics</span>

            <h2>Bihar Government Salary Structure</h2>
          </div>

          <div className="bihar-salary-flow">
            <div>
              <span>01</span>

              <h3>Basic Pay</h3>

              <p>
                Basic Pay is determined according to the applicable pay level,
                post and revised pay structure.
              </p>
            </div>

            <div>
              <span>02</span>

              <h3>Dearness Allowance</h3>

              <p>
                DA is added according to Bihar Government Finance Department
                orders applicable for the relevant period.
              </p>
            </div>

            <div>
              <span>03</span>

              <h3>Allowances</h3>

              <p>
                HRA, transport allowance, medical allowance or other benefits
                may apply depending on rules and eligibility.
              </p>
            </div>

            <div>
              <span>04</span>

              <h3>Deductions</h3>

              <p>
                Pension contribution, tax, recoveries and other deductions can
                affect final take-home salary.
              </p>
            </div>
          </div>
        </section>

        {/* CALCULATORS */}
        <section className="bihar-hub-section">
          <div className="section-heading">
            <span className="section-kicker">Free Tools</span>

            <h2>Bihar Government Calculators</h2>

            <p>
              Use these calculators to estimate salary, DA, arrears and pension
              for Bihar Government employees.
            </p>
          </div>

          <div className="bihar-calculator-grid">
            {/* SALARY CALCULATOR */}
            <Link
              href="/state-government/bihar/salary-calculator"
              className="bihar-calculator-card"
            >
              <h3>Salary Calculator</h3>

              <p>
                Estimate Basic Pay, DA, HRA, allowances, deductions and
                take-home salary.
              </p>

              <strong>Calculate Salary →</strong>
            </Link>

            {/* DA CALCULATOR */}
            <Link
              href="/state-government/bihar/da-calculator"
              className="bihar-calculator-card"
            >
              <h3>DA Calculator</h3>

              <p>
                Calculate Dearness Allowance using Basic Pay and applicable DA
                percentage.
              </p>

              <strong>Calculate DA →</strong>
            </Link>

            {/* DA ARREARS CALCULATOR */}
            <Link
              href="/state-government/bihar/arrears-calculator"
              className="bihar-calculator-card"
            >
              <h3>DA Arrears Calculator</h3>

              <p>
                Calculate the difference between old and revised DA rates over
                an eligible number of months.
              </p>

              <strong>Calculate DA Arrears →</strong>
            </Link>

            {/* FULL SALARY ARREARS CALCULATOR */}
            <Link
              href="/state-government/bihar/salary-arrears-calculator"
              className="bihar-calculator-card"
            >
              <h3>Salary Arrears Calculator</h3>

              <p>
                Calculate month-wise Basic Pay, DA and HRA arrears with
                increment, rate changes and previously received arrears.
              </p>

              <strong>Calculate Salary Arrears →</strong>
            </Link>

            {/* PENSION CALCULATOR */}
            <Link
              href="/state-government/bihar/pension-calculator"
              className="bihar-calculator-card"
            >
              <h3>Pension Calculator</h3>

              <p>
                Estimate pension and Dearness Relief using applicable rates.
              </p>

              <strong>Calculate Pension →</strong>
            </Link>
          </div>
        </section>

        {/* ARREARS EXPLANATION */}
        <section className="bihar-hub-section">
          <div className="section-heading">
            <span className="section-kicker">Arrear Tools</span>

            <h2>DA Arrears vs Salary Arrears</h2>

            <p>
              Choose the appropriate calculator depending on the type of arrear
              you need to estimate.
            </p>
          </div>

          <div className="bihar-resource-grid">
            <Link
              href="/state-government/bihar/arrears-calculator"
              className="bihar-resource-card"
            >
              <span>DA Only</span>

              <h3>DA Arrears Calculator</h3>

              <p>
                Use this calculator when you only need to calculate the
                difference between old and revised Dearness Allowance rates.
              </p>

              <strong>Open DA Arrears Calculator →</strong>
            </Link>

            <Link
              href="/state-government/bihar/salary-arrears-calculator"
              className="bihar-resource-card"
            >
              <span>Basic + DA + HRA</span>

              <h3>Salary Arrears Calculator</h3>

              <p>
                Use this advanced calculator for month-wise Basic Pay
                difference, DA arrears, HRA arrears, increment changes and
                amounts already received.
              </p>

              <strong>Open Salary Arrears Calculator →</strong>
            </Link>
          </div>
        </section>

        {/* CENTRAL VS STATE */}
        <section className="bihar-warning-section">
          <div>
            <span className="section-kicker">Important Difference</span>

            <h2>
              Central Government Rules Do Not Automatically Apply to Bihar
            </h2>

            <p>
              Central Government DA rates, Pay Commission recommendations, HRA
              rules and pay matrix values should not automatically be treated
              as Bihar Government rules.
            </p>

            <p>
              Bihar Government employees should follow Bihar Finance Department
              resolutions, notifications and other applicable State Government
              orders.
            </p>
          </div>
        </section>

        {/* OFFICIAL SOURCES */}
        <section className="bihar-official-section">
          <div>
            <span className="section-kicker">Official Verification</span>

            <h2>Always Verify Bihar Government Orders</h2>

            <p>
              Salary, DA, pension and pay revision rules can change through
              official notifications. GovtPayGuide summarizes information for
              easier understanding, but the official Government order remains
              authoritative.
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

        {/* NAVIGATION */}
        <section className="bihar-bottom-links">
          <Link href="/state-government">← All States</Link>

          <Link href="/central-government">
            Central Government Guide
          </Link>

          <Link href="/calculators">
            All Calculators →
          </Link>
        </section>

        {/* DISCLAIMER */}
        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> GovtPayGuide is an independent
          informational website and is not affiliated with the Government of
          Bihar. Salary, DA, pension, pay revision and allowance entitlement are
          governed by official Bihar Government orders, service rules and
          departmental records.
        </div>
      </div>
    </main>
  );
}