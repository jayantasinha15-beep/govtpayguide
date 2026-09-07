import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government Salary Calculators",
  description:
    "Free government salary calculators for Basic Pay, DA, HRA, arrears, pension and other salary calculations.",
alternates: {
    canonical: "/calculators",
  },
};

const calculators = [
  {
    title: "Government Salary Calculator",
    description:
      "Estimate Basic Pay, DA, HRA, allowances, Gross Salary and Take-Home Salary.",
    href: "/salary-calculator",
    tag: "Salary",
  },
  {
    title: "DA Calculator",
    description:
      "Calculate Dearness Allowance from Basic Pay and the applicable DA percentage.",
    href: "/da-calculator",
    tag: "DA",
  },
  {
    title: "HRA Calculator",
    description:
      "Estimate House Rent Allowance using Basic Pay and the applicable HRA rate.",
    href: "/hra-calculator",
    tag: "HRA",
  },
  {
    title: "DA Arrears Calculator",
    description:
      "Estimate arrears resulting from a revision in Dearness Allowance.",
    href: "/arrears-calculator",
    tag: "Arrears",
  },
];

export default function CalculatorsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="page-badge">Free Tools</span>

          <h1>Government Salary Calculators</h1>

          <p>
            Free tools for salary, Dearness Allowance, HRA, arrears and other
            government employee calculations.
          </p>
        </div>
      </section>

      <div className="container calculators-hub">
        <section>
          <span className="section-kicker">Salary Tools</span>

          <h2>Choose a Calculator</h2>

          <div className="calculators-hub-grid">
            {calculators.map((calculator) => (
              <Link
                key={calculator.href}
                href={calculator.href}
                className="calculator-hub-card"
              >
                <span className="calculator-hub-tag">
                  {calculator.tag}
                </span>

                <h3>{calculator.title}</h3>

                <p>{calculator.description}</p>

                <strong>Open Calculator →</strong>
              </Link>
            ))}
          </div>
        </section>

        <section className="calculator-type-section">
          <span className="section-kicker">Government Type</span>

          <h2>Central & State Government Tools</h2>

          <div className="calculator-type-grid">
            <Link
              href="/central-government"
              className="calculator-type-card"
            >
              <span>Central Government</span>

              <h3>Central Government Salary Tools</h3>

              <p>
                Pay Matrix, DA, HRA, salary and Pay Commission-related
                resources for Central Government employees.
              </p>

              <strong>Central Govt →</strong>
            </Link>

            <Link
              href="/state-government"
              className="calculator-type-card"
            >
              <span>State Government</span>

              <h3>State Government Salary Tools</h3>

              <p>
                Find salary and allowance information according to individual
                State Government rules.
              </p>

              <strong>Choose State →</strong>
            </Link>
          </div>
        </section>

        <div className="calculator-disclaimer">
          <strong>Important:</strong> Government salary rules differ between
          Central and State Governments. Always use the calculator and rates
          applicable to your department, state and relevant government order.
        </div>
      </div>
    </main>
  );
}