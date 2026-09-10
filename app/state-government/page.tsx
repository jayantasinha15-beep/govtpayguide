import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "State Government Salary, DA & Pay Commission",
  description:
    "Explore State Government salary, DA, pay commission, pay structure, pension and salary calculators for West Bengal, Bihar, Assam and other Indian states.",
  alternates: {
    canonical: "/state-government",
  },
};

const states = [
  {
    name: "West Bengal",
    description:
      "West Bengal Government salary, DA updates, pay structure, 7th State Pay Commission, pension and employee calculators.",
    href: "/state-government/west-bengal",
    links: [
      {
        label: "DA Updates",
        href: "/state-government/west-bengal/da",
      },
      {
        label: "Pay Commission",
        href: "/state-government/west-bengal/pay-commission",
      },
      {
        label: "Pay Matrix",
        href: "/state-government/west-bengal/pay-matrix",
      },
      {
        label: "Salary Calculator",
        href: "/state-government/west-bengal/salary-calculator",
      },
    ],
  },
  {
    name: "Bihar",
    description:
      "Bihar Government salary, Dearness Allowance, pay structure, pension information and useful salary calculators.",
    href: "/state-government/bihar",
    links: [
      {
        label: "DA Updates",
        href: "/state-government/bihar/da",
      },
      {
        label: "Pay Commission",
        href: "/state-government/bihar/pay-commission",
      },
      {
        label: "Pay Matrix",
        href: "/state-government/bihar/pay-matrix",
      },
      {
        label: "Salary Calculator",
        href: "/state-government/bihar/salary-calculator",
      },
    ],
  },
  {
    name: "Assam",
    description:
      "Assam Government salary, DA and DR updates, ROP 2017 pay structure, pension information and employee calculators.",
    href: "/state-government/assam",
    links: [
      {
        label: "DA Updates",
        href: "/state-government/assam/da",
      },
      {
        label: "Pay Commission",
        href: "/state-government/assam/pay-commission",
      },
      {
        label: "Pay Structure",
        href: "/state-government/assam/pay-matrix",
      },
      {
        label: "Salary Calculator",
        href: "/state-government/assam/salary-calculator",
      },
    ],
  },
];

export default function StateGovernmentPage() {
  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">State Government</span>

          <h1>State Government Salary & Pay Information</h1>

          <p>
            Explore salary structures, Dearness Allowance, Pay Commission
            information, pension guides and calculators for State Government
            employees across India.
          </p>
        </div>
      </section>

      <div className="container state-page-content">
        <section className="article-section">
          <span className="section-label">Browse by State</span>

          <h2>State Government Pay Guides</h2>

          <p>
            Select a state to find salary information, DA updates, pay
            structure, pension resources and calculators.
          </p>

          <div className="state-resource-grid">
            {states.map((state) => (
              <article className="state-resource-card" key={state.name}>
                <span className="state-resource-label">
                  State Government
                </span>

                <h3>{state.name}</h3>

                <p>{state.description}</p>

                <div className="state-card-mini-links">
                  {state.links.map((link) => (
                    <Link href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>

                <Link href={state.href} className="state-card-link">
                  Explore {state.name} →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Resources</span>

          <h2>What You Can Find</h2>

          <div className="state-info-section">
            <div className="state-info-box">
              <h3>Dearness Allowance</h3>
              <p>
                Track state-specific DA and DR rates, effective dates and
                Government orders.
              </p>
            </div>

            <div className="state-info-box">
              <h3>Pay Commission</h3>
              <p>
                Understand State Pay Commission recommendations, revised pay
                rules and implementation developments.
              </p>
            </div>

            <div className="state-info-box">
              <h3>Pay Structure</h3>
              <p>
                Explore applicable pay bands, grade pay, pay levels or revised
                salary structures for each state.
              </p>
            </div>

            <div className="state-info-box">
              <h3>Salary Calculators</h3>
              <p>
                Estimate Basic Pay, DA, allowances, gross salary, arrears and
                take-home salary.
              </p>
            </div>

            <div className="state-info-box">
              <h3>Pension</h3>
              <p>
                Find pension, family pension and Dearness Relief information
                with useful pension calculators.
              </p>
            </div>

            <div className="state-info-box">
              <h3>Official Sources</h3>
              <p>
                Important salary and allowance information should always be
                verified against the relevant State Government notification.
              </p>
            </div>
          </div>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> GovtPayGuide is an independent
          informational website and is not affiliated with any State
          Government or Government of India. Salary, DA, pension and other
          service benefits depend on applicable Government rules and official
          orders.
        </div>
      </div>
    </main>
  );
}