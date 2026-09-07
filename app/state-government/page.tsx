import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "State Government Salary, DA & Pay Information",
  description:
    "Explore state-wise government salary, DA, pay structure, pension and calculator resources across India.",
    alternates: {
    canonical: "/state-government",
  },
};

const states = [
  {
    name: "West Bengal",
    slug: "west-bengal",
    description:
      "West Bengal Government salary, DA, ROPA pay structure, pension and calculators.",
  },
  {
    name: "Assam",
    slug: "assam",
    description:
      "Assam Government salary, DA, pay structure and employee information.",
  },
  {
    name: "Bihar",
    slug: "bihar",
    description:
      "Bihar Government salary, DA, pay matrix and pension information.",
  },
  {
    name: "Odisha",
    slug: "odisha",
    description:
      "Odisha Government salary, DA, allowances and pay-related information.",
  },
  {
    name: "Jharkhand",
    slug: "jharkhand",
    description:
      "Jharkhand Government salary, DA and pay structure resources.",
  },
  {
    name: "Sikkim",
    slug: "sikkim",
    description:
      "Sikkim Government employee salary and allowance information.",
  },
  {
    name: "Maharashtra",
    slug: "maharashtra",
    description:
      "Maharashtra Government salary, DA and pension-related resources.",
  },
  {
    name: "Rajasthan",
    slug: "rajasthan",
    description:
      "Rajasthan Government employee salary, DA and pay structure information.",
  },
];

export default function StateGovernmentPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="page-badge">State Government</span>

          <h1>State Government Salary & DA Information</h1>

          <p>
            Explore salary, Dearness Allowance, pay structure, pension and
            calculators for government employees across Indian states.
          </p>
        </div>
      </section>

      <div className="container state-page">
        <section className="article-section">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">Browse by State</span>
              <h2>Government Salary Information by State</h2>
            </div>
          </div>

          <div className="state-grid">
            {states.map((state) => (
              <Link
                href={`/state-government/${state.slug}`}
                key={state.slug}
                className="state-card"
              >
                <div className="state-card-icon">
                  {state.name.charAt(0)}
                </div>

                <div>
                  <h3>{state.name}</h3>
                  <p>{state.description}</p>
                  <span>View State Guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="state-info-box">
          <h2>Why State-Wise Salary Information Matters</h2>

          <p>
            Salary rules, Dearness Allowance, pay revision systems, allowances
            and pension provisions can differ between the Central Government
            and individual State Governments.
          </p>

          <p>
            GovtPayGuide keeps state-specific information separate so that
            employees can refer to the rules and notifications applicable to
            their own state.
          </p>
        </section>
      </div>
    </main>
  );
}