import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government Salary, DA, Pension & Pay Guides",
  description:
    "Practical guides on government salary, DA, Pay Commission, pay matrix, pension, arrears, allowances and Central and State Government pay rules.",
alternates: {
    canonical: "/guides",
  },
};

export default function GuidesPage() {
  return (
    <main className="guides-page">
      <section className="guides-hero">
        <div className="container">
          <span className="page-badge">Guides</span>

          <h1>Government Salary, DA, Pay & Pension Guides</h1>

          <p>
            Understand government salary rules, Dearness Allowance, pay
            structure, pension, arrears and calculators through simple,
            practical guides.
          </p>

          <div className="guides-hero-actions">
            <Link href="/central-government" className="content-button">
              Central Govt Guides
            </Link>

            <Link href="/state-government" className="secondary-content-button">
              State Govt Guides
            </Link>
          </div>
        </div>
      </section>

      <section className="container guides-section">
        <div className="guides-heading">
          <span>Browse by Category</span>
          <h2>Find the guide you need</h2>
          <p>
            Central Government and State Government rules are kept separate so
            that different DA rates, pay structures and pension rules are not
            mixed together.
          </p>
        </div>

        <div className="guides-category-grid">
          <Link href="/central-government" className="guide-category-card">
            <span className="guide-number">01</span>
            <h3>Central Government Guides</h3>
            <p>
              Learn about Central Government salary, DA, Pay Commission, pay
              matrix and related calculations.
            </p>
            <strong>Explore Central Guides →</strong>
          </Link>

          <Link href="/state-government" className="guide-category-card">
            <span className="guide-number">02</span>
            <h3>State Government Guides</h3>
            <p>
              Explore state-specific salary, DA, pay structure, pension and
              allowance information.
            </p>
            <strong>Browse State Guides →</strong>
          </Link>

          <Link
            href="/state-government/west-bengal"
            className="guide-category-card"
          >
            <span className="guide-number">03</span>
            <h3>West Bengal Guides</h3>
            <p>
              Read about West Bengal DA, ROPA 2019, Pay Matrix, salary,
              pension and arrears.
            </p>
            <strong>Explore West Bengal →</strong>
          </Link>

          <Link href="/pension" className="guide-category-card">
            <span className="guide-number">04</span>
            <h3>Pension Guides</h3>
            <p>
              Understand pension, Dearness Relief, family pension,
              commutation and pension calculations.
            </p>
            <strong>Explore Pension Guides →</strong>
          </Link>
        </div>
      </section>

      <section className="guides-light-section">
        <div className="container">
          <div className="guides-heading">
            <span>Popular Topics</span>
            <h2>Salary and allowance guides</h2>
          </div>

          <div className="guides-topic-grid">
            <Link href="/da" className="guide-topic-card">
              <div className="guide-topic-icon">DA</div>
              <div>
                <h3>Dearness Allowance Guide</h3>
                <p>
                  Understand DA, revision, calculation and how it affects
                  salary.
                </p>
              </div>
            </Link>

            <Link href="/pay-commission" className="guide-topic-card">
              <div className="guide-topic-icon">PC</div>
              <div>
                <h3>Pay Commission Guide</h3>
                <p>
                  Learn about Pay Commission, fitment factor and revised pay
                  structure.
                </p>
              </div>
            </Link>

            <Link href="/pay-matrix" className="guide-topic-card">
              <div className="guide-topic-icon">PM</div>
              <div>
                <h3>Pay Matrix Guide</h3>
                <p>
                  Understand pay levels, cells, increments and Basic Pay.
                </p>
              </div>
            </Link>

            <Link href="/salary-calculator" className="guide-topic-card">
              <div className="guide-topic-icon">₹</div>
              <div>
                <h3>Salary Calculation Guide</h3>
                <p>
                  Learn how Basic Pay, DA, HRA, TA and deductions affect
                  take-home salary.
                </p>
              </div>
            </Link>

            <Link href="/hra-calculator" className="guide-topic-card">
              <div className="guide-topic-icon">HR</div>
              <div>
                <h3>HRA Calculation Guide</h3>
                <p>
                  Understand the basic method used to estimate House Rent
                  Allowance.
                </p>
              </div>
            </Link>

            <Link href="/arrears-calculator" className="guide-topic-card">
              <div className="guide-topic-icon">AR</div>
              <div>
                <h3>DA Arrears Guide</h3>
                <p>
                  Understand how DA rate differences and eligible periods can
                  affect arrears.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="container guides-section">
        <div className="guides-heading">
          <span>West Bengal</span>
          <h2>West Bengal salary and pension guides</h2>

          <p>
            West Bengal follows its own pay, DA and pension rules. These guides
            are kept separate from Central Government information.
          </p>
        </div>

        <div className="wb-guide-grid">
          <Link
            href="/state-government/west-bengal/da"
            className="wb-guide-card"
          >
            <span>DA</span>
            <h3>West Bengal DA</h3>
            <p>
              Latest official DA-related information, effective dates and
              calculation guidance.
            </p>
            <strong>Read Guide →</strong>
          </Link>

          <Link
            href="/state-government/west-bengal/pay-structure"
            className="wb-guide-card"
          >
            <span>ROPA</span>
            <h3>ROPA 2019 Pay Structure</h3>
            <p>
              Understand revised pay structure, fitment and West Bengal pay
              rules under ROPA 2019.
            </p>
            <strong>Read Guide →</strong>
          </Link>

          <Link
            href="/state-government/west-bengal/pay-matrix"
            className="wb-guide-card"
          >
            <span>PAY</span>
            <h3>West Bengal Pay Matrix</h3>
            <p>
              Explore pay levels, Grade Pay mapping and first-cell Basic Pay
              values.
            </p>
            <strong>Read Guide →</strong>
          </Link>

          <Link
            href="/state-government/west-bengal/pension"
            className="wb-guide-card"
          >
            <span>DR</span>
            <h3>West Bengal Pension & DR</h3>
            <p>
              Learn about pension, Dearness Relief, family pension and arrears.
            </p>
            <strong>Read Guide →</strong>
          </Link>
        </div>
      </section>

      <section className="guides-calculator-section">
        <div className="container">
          <div className="guides-calculator-box">
            <div>
              <span>Free Tools</span>

              <h2>Use government salary calculators</h2>

              <p>
                Estimate salary, DA, HRA, arrears and pension using our
                calculator tools. Results are for general guidance only.
              </p>
            </div>

            <Link href="/calculators" className="content-button">
              View All Calculators
            </Link>
          </div>
        </div>
      </section>

      <section className="container guides-section">
        <div className="guides-two-column">
          <div className="guides-info-card">
            <span className="guide-info-label">Official Sources</span>

            <h2>We prioritize government records</h2>

            <p>
              Salary, DA, pension and pay rules can change through official
              orders, memoranda, resolutions, notifications and Gazette
              publications.
            </p>

            <p>
              Important information should always be verified using the
              relevant Government department or official publication.
            </p>
          </div>

          <div className="guides-info-card">
            <span className="guide-info-label">Important</span>

            <h2>Examples are not current rates</h2>

            <p>
              Some guides may use sample salary or percentage values to explain
              calculations. Example values should not be treated as currently
              applicable Government rates unless specifically identified as an
              official current rate.
            </p>
          </div>
        </div>
      </section>

      <section className="container guides-disclaimer">
        <strong>Disclaimer</strong>

        <p>
          GovtPayGuide is an independent informational website and is not
          affiliated with the Government of India or any State Government.
          Guides and calculator results are intended for general information
          and estimation only. Official Government orders and departmental
          records take precedence.
        </p>
      </section>
    </main>
  );
}