import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government Salary, DA & Pay Commission Updates",
  description:
    "Latest government salary, DA, Pay Commission, pension and pay revision updates for Central Government and State Government employees.",
  alternates: {
    canonical: "/updates",
  },
};

const updates = [
  {
    category: "West Bengal",
    status: "Analysis",
    title:
      "West Bengal 7th Pay Commission Fitment Factor: What Could It Be?",
    description:
      "Understand possible fitment-factor scenarios and how different factors could affect revised Basic Pay. No final fitment factor has been officially announced.",
    date: "September 2026",
    href: "/updates/west-bengal-7th-pay-commission-fitment-factor",
  },
  {
    category: "West Bengal",
    status: "Official Update",
    title: "West Bengal 7th State Pay Commission: Latest Updates",
    description:
      "Track official resolutions, Terms of Reference, memorandum submissions and other developments related to the 7th State Pay Commission.",
    date: "September 2026",
    href: "/state-government/west-bengal/pay-commission",
  },
  {
    category: "West Bengal",
    status: "DA Update",
    title: "West Bengal Government DA Latest Update",
    description:
      "Check the latest West Bengal Dearness Allowance rate, effective date and official Finance Department orders.",
    date: "September 2026",
    href: "/state-government/west-bengal/da",
  },
  {
    category: "Bihar",
    status: "DA Update",
    title: "Bihar Government DA Latest Update",
    description:
      "Latest Bihar Government Dearness Allowance information, revised rates, effective dates and official Finance Department references.",
    date: "September 2026",
    href: "/state-government/bihar/da",
  },
];

export default function UpdatesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="updates-page-hero">
        <div className="container">
          <span className="page-badge">GovtPayGuide Updates</span>

          <h1>Government Salary & Pay Updates</h1>

          <p>
            Follow important developments in Dearness Allowance, Pay
            Commissions, salary revision, pay matrix, pension and government
            employee benefits.
          </p>
        </div>
      </section>

      <div className="container updates-page-container">
        {/* INTRO */}
        <section className="updates-page-intro">
          <div>
            <span className="updates-section-label">Latest Updates</span>
            <h2>Salary, DA & Pay Commission News</h2>
          </div>

          <p>
            We separate official announcements from analysis and expected
            scenarios so that unconfirmed estimates are not presented as
            Government decisions.
          </p>
        </section>

        {/* UPDATE CARDS */}
        <section className="updates-list-grid">
          {updates.map((item) => (
            <article className="updates-news-card" key={item.href}>
              <div className="updates-card-meta">
                <span className="updates-category">{item.category}</span>
                <span className="updates-status">{item.status}</span>
              </div>

              <h2>
                <Link href={item.href}>{item.title}</Link>
              </h2>

              <p>{item.description}</p>

              <div className="updates-card-footer">
                <span>{item.date}</span>

                <Link href={item.href}>
                  Read Update →
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* INFORMATION BOX */}
        <section className="updates-info-box">
          <div>
            <span className="updates-section-label">
              How We Label Updates
            </span>

            <h2>Official Information vs Analysis</h2>
          </div>

          <div className="updates-label-grid">
            <div>
              <strong>Official Update</strong>
              <p>
                Information supported by Government resolutions,
                notifications, orders or official portals.
              </p>
            </div>

            <div>
              <strong>Analysis</strong>
              <p>
                Explanations, calculations and scenarios based on available
                information. These should not be treated as official
                Government decisions.
              </p>
            </div>

            <div>
              <strong>Expected / Scenario</strong>
              <p>
                Illustrative possibilities used to understand potential
                salary impact. These are not confirmed recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> GovtPayGuide is an independent
          informational website and is not affiliated with any Government
          department or Pay Commission. Always verify important salary, DA,
          pension and pay revision information from official Government
          notifications.
        </div>
      </div>
    </main>
  );
}