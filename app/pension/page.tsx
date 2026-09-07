import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Government Pension & Dearness Relief Guide",
  description:
  "Government pension information, Dearness Relief, family pension, pension calculators and Central and State Government pension resources.",
alternates: {
    canonical: "/pension",
  },
};

export default function PensionPage() {
  return (
    <main className="pension-hub-page">
      <section className="pension-hub-hero">
        <div className="container">
          <span className="page-badge">Pension Guide</span>

          <h1>Government Pension & Dearness Relief Information</h1>

          <p>
            Explore pension, Dearness Relief, family pension, commutation and
            pension calculators for Central and State Government pensioners.
          </p>

          <div className="pension-hub-actions">
            <Link
              href="/state-government/west-bengal/pension"
              className="content-button"
            >
              West Bengal Pension
            </Link>

            <Link href="/calculators" className="secondary-content-button">
              Pension Calculators
            </Link>
          </div>
        </div>
      </section>

      <section className="container pension-hub-section">
        <div className="pension-section-heading">
          <span>Pension Resources</span>
          <h2>Choose the information you need</h2>
          <p>
            Pension rules may differ between Central Government and individual
            State Governments, so always use the section relevant to the
            concerned pension authority.
          </p>
        </div>

        <div className="pension-resource-grid">
          <Link href="/central-government" className="pension-resource-card">
            <span className="pension-card-label">Central Government</span>
            <h3>Central Government Pension</h3>
            <p>
              Explore Central Government salary and pension-related resources,
              including DA, pay structure and related guides.
            </p>
            <strong>Explore Central Resources →</strong>
          </Link>

          <Link
            href="/state-government/west-bengal/pension"
            className="pension-resource-card"
          >
            <span className="pension-card-label">West Bengal</span>
            <h3>West Bengal Pension & DR</h3>
            <p>
              Learn about pension, Dearness Relief, family pension, arrears and
              official West Bengal pension-related updates.
            </p>
            <strong>View West Bengal Pension →</strong>
          </Link>

          <Link
            href="/state-government"
            className="pension-resource-card"
          >
            <span className="pension-card-label">State Governments</span>
            <h3>State Pension Guides</h3>
            <p>
              Browse State Government sections as additional pension guides are
              added for different states.
            </p>
            <strong>Browse All States →</strong>
          </Link>
        </div>
      </section>

      <section className="pension-hub-light-section">
        <div className="container">
          <div className="pension-section-heading">
            <span>Pension Basics</span>
            <h2>Important pension concepts</h2>
          </div>

          <div className="pension-basics-grid">
            <div className="pension-basic-card">
              <span>01</span>
              <h3>Basic Pension</h3>
              <p>
                Basic Pension is the pension amount before adding Dearness
                Relief and other applicable additions or deductions.
              </p>
            </div>

            <div className="pension-basic-card">
              <span>02</span>
              <h3>Dearness Relief</h3>
              <p>
                Dearness Relief, commonly called DR, is generally calculated as
                a percentage of the applicable pension amount according to
                Government orders.
              </p>
            </div>

            <div className="pension-basic-card">
              <span>03</span>
              <h3>Family Pension</h3>
              <p>
                Family pension may be payable to eligible family members under
                the applicable Government pension rules and conditions.
              </p>
            </div>

            <div className="pension-basic-card">
              <span>04</span>
              <h3>Commutation</h3>
              <p>
                A portion of pension may be commuted subject to applicable
                Government rules, resulting in a reduced monthly pension for
                the prescribed period.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pension-hub-section">
        <div className="pension-two-column">
          <div className="pension-info-panel">
            <span className="pension-panel-label">How DR Works</span>

            <h2>Dearness Relief calculation</h2>

            <p>
              A simplified estimate of monthly Dearness Relief can be
              calculated using:
            </p>

            <div className="pension-formula-box">
              DR Amount = Basic Pension × DR Rate ÷ 100
            </div>

            <div className="pension-example-box">
              <span>Example only</span>

              <p>
                If Basic Pension is ₹20,000 and the applicable DR rate is 20%:
              </p>

              <strong>₹20,000 × 20 ÷ 100 = ₹4,000</strong>

              <p>
                Total before other additions or deductions would be ₹24,000.
              </p>
            </div>

            <p className="pension-small-note">
              The 20% rate above is only a calculation example and should not
              be treated as the current DR rate.
            </p>
          </div>

          <div className="pension-info-panel">
            <span className="pension-panel-label">Before You Calculate</span>

            <h2>Actual pension can vary</h2>

            <ul className="legal-list">
              <li>Basic or revised pension amount</li>
              <li>Applicable Dearness Relief rate</li>
              <li>Commuted portion of pension</li>
              <li>Additional pension based on eligibility</li>
              <li>Family pension rules</li>
              <li>Recovery or deductions</li>
              <li>Government revision orders</li>
              <li>PPO and pension sanction details</li>
            </ul>

            <p>
              Pension calculators should therefore be used as estimation tools,
              not as replacements for official pension records.
            </p>
          </div>
        </div>
      </section>

      <section className="pension-hub-calculator-section">
        <div className="container">
          <div className="pension-calculator-callout">
            <div>
              <span>Pension Calculator</span>

              <h2>Estimate West Bengal pension and DR</h2>

              <p>
                Enter Basic Pension, DR rate, commuted portion, additions and
                deductions to estimate monthly and annual pension.
              </p>
            </div>

            <Link
              href="/state-government/west-bengal/pension-calculator"
              className="content-button"
            >
              Open Pension Calculator
            </Link>
          </div>
        </div>
      </section>

      <section className="container pension-hub-section">
        <div className="pension-two-column">
          <div className="pension-info-panel">
            <span className="pension-panel-label">Official Records</span>

            <h2>Always verify pension information</h2>

            <p>
              Pension and DR rules can change through Government orders,
              memoranda, notifications and pension-specific instructions.
            </p>

            <p>
              For an individual pension case, the relevant Pension Payment
              Order, sanctioning authority and official Government records
              should be treated as authoritative.
            </p>
          </div>

          <div className="pension-info-panel">
            <span className="pension-panel-label">Need State Information?</span>

            <h2>Browse State Government resources</h2>

            <p>
              State Governments can follow their own pension, DR and salary
              rules. GovtPayGuide keeps state-specific information in separate
              sections to avoid mixing different rules.
            </p>

            <Link
              href="/state-government"
              className="secondary-content-button"
            >
              Browse States
            </Link>
          </div>
        </div>
      </section>

      <section className="container pension-hub-disclaimer">
        <strong>Disclaimer</strong>

        <p>
          GovtPayGuide is an independent informational website and is not
          affiliated with the Government of India or any State Government.
          Pension, DR and calculator information is for general guidance only.
          Always verify important pension matters using official Government
          orders, PPO records and the concerned pension authority.
        </p>
      </section>
    </main>
  );
}