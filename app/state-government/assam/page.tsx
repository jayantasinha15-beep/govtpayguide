import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assam Government Salary, DA, Pay Matrix & Pension",
  description:
    "Assam Government employee salary information, DA updates, pay structure, Pay Commission, pension and salary calculators.",
  alternates: {
    canonical: "/state-government/assam",
  },
};

const mainResources = [
  {
    title: "Assam DA Updates",
    description:
      "Check the latest Dearness Allowance rates, effective dates and official Assam Government Finance Department orders.",
    href: "/state-government/assam/da",
    label: "DA",
  },
  {
    title: "Assam Pay Commission",
    description:
      "Understand the Assam Pay Commission recommendations and the Assam Services (Revision of Pay) Rules, 2017.",
    href: "/state-government/assam/pay-commission",
    label: "Pay",
  },
  {
    title: "Assam Pay Matrix",
    description:
      "Explore Assam Government pay bands, grade pay and revised pay structure under the applicable pay rules.",
    href: "/state-government/assam/pay-matrix",
    label: "Matrix",
  },
  {
    title: "Assam Pension",
    description:
      "Learn about pension, family pension, Dearness Relief and retirement-related information for Assam Government employees.",
    href: "/state-government/assam/pension",
    label: "Pension",
  },
];

const calculators = [
  {
    title: "Assam Salary Calculator",
    description:
      "Estimate Basic Pay, DA and gross salary for Assam Government employees.",
    href: "/state-government/assam/salary-calculator",
  },
  {
    title: "Assam DA Calculator",
    description:
      "Calculate Dearness Allowance based on Basic Pay and applicable DA rate.",
    href: "/state-government/assam/da-calculator",
  },
  {
    title: "Assam DA Arrears Calculator",
    description:
      "Estimate DA arrears between old and revised Dearness Allowance rates.",
    href: "/state-government/assam/arrears-calculator",
  },
  {
    title: "Assam Pension Calculator",
    description:
      "Estimate pension and related retirement benefits using applicable inputs.",
    href: "/state-government/assam/pension-calculator",
  },
];

export default function AssamGovernmentPage() {
  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Assam Government</span>

          <h1>Assam Government Salary, DA & Pay Information</h1>

          <p>
            Find Assam Government employee salary information, Dearness
            Allowance updates, pay structure, Pay Commission information,
            pension resources and useful calculators in one place.
          </p>

          <div className="hero-actions">
            <Link
              href="/state-government/assam/salary-calculator"
              className="btn primary"
            >
              Calculate Salary
            </Link>

            <Link
              href="/state-government/assam/da"
              className="btn secondary"
            >
              Latest DA Update
            </Link>
          </div>
        </div>
      </section>

      <section className="container state-page-content">
        <div className="section-heading">
          <div>
            <span className="section-label">Assam Government</span>
            <h2>Salary & Pay Resources</h2>
          </div>
        </div>

        <div className="state-resource-grid">
          {mainResources.map((item) => (
            <Link
              href={item.href}
              className="state-resource-card"
              key={item.title}
            >
              <span className="state-resource-label">{item.label}</span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span className="state-card-link">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="state-info-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-label">Pay Structure</span>
              <h2>Assam Services (Revision of Pay) Rules, 2017</h2>
            </div>
          </div>

          <div className="state-info-box">
            <p>
              The Assam Government revised the pay structure of eligible State
              Government employees through the Assam Services (Revision of
              Pay) Rules, 2017.
            </p>

            <p>
              The rules are deemed to have come into force from
              <strong> 1 April 2016</strong>.
            </p>

            <p>
              Pay fixation, revised pay structure and related service matters
              should always be verified from the applicable Government
              notification and departmental orders.
            </p>

            <a
              href="https://finance.assam.gov.in/sites/default/files/RoP_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-content-button"
            >
              View Official ROP Rules →
            </a>
          </div>
        </div>
      </section>

      <section className="container state-page-content">
        <div className="section-heading">
          <div>
            <span className="section-label">Free Tools</span>
            <h2>Assam Government Calculators</h2>
          </div>
        </div>

        <div className="tools-grid">
          {calculators.map((item) => (
            <Link href={item.href} className="tool-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="state-update-box">
          <span className="section-label">DA Status</span>

          <h2>Latest Assam Dearness Allowance Information</h2>

          <p>
            The Assam Finance Department&apos;s official Office Memorandum
            listing includes an Executive Order for enhanced Dearness
            Allowance at <strong>58%</strong> with effect from
            <strong> 1 July 2025</strong>.
          </p>

          <p>
            We will use official Finance Department orders when updating the
            Assam DA section and will avoid presenting an unverified rate as
            current.
          </p>

          <Link
            href="/state-government/assam/da"
            className="primary-content-button"
          >
            View Assam DA Updates →
          </Link>
        </div>
      </section>

      <section className="container">
        <div className="official-source-box">
          <span className="section-label">Official Source</span>

          <h2>Assam Finance Department</h2>

          <p>
            Official pay, DA, pension and financial service rules for Assam
            Government employees are published by the Finance Department,
            Government of Assam.
          </p>

          <a
            href="https://finance.assam.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Assam Finance Department →
          </a>
        </div>
      </section>

      <section className="disclaimer-box container">
        <strong>Disclaimer:</strong> GovtPayGuide is an independent
        informational website and is not affiliated with the Government of
        Assam. Always verify salary, DA, pay revision, pension and service
        information from official Government notifications and Finance
        Department orders.
      </section>
    </main>
  );
}