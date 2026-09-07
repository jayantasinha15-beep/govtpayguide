import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GovtPayGuide, an independent informational website covering government salary, DA, Pay Commission, pay matrix, pension and calculators.",
alternates: {
  canonical: "/about",
},
};

export default function AboutPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <span className="page-badge">About</span>

          <h1>About GovtPayGuide</h1>

          <p>
            GovtPayGuide is an independent informational website focused on
            government salary, Dearness Allowance, pay structure, pension and
            related calculators.
          </p>
        </div>
      </section>

      <div className="container legal-content-container">
        <div className="contact-page-grid">
          <article className="legal-content">
            <section>
              <h2>What is GovtPayGuide?</h2>

              <p>
                GovtPayGuide is designed to make government salary and pension
                information easier to understand.
              </p>

              <p>
                The website covers topics such as Central Government pay,
                State Government salary structures, Dearness Allowance,
                Dearness Relief, Pay Commission updates, pay matrices,
                pension and salary calculators.
              </p>
            </section>

            <section>
              <h2>Our Purpose</h2>

              <p>
                Government salary rules can involve multiple notifications,
                pay levels, allowances, pension rules and effective dates.
                GovtPayGuide aims to present this information in a simpler,
                more practical format.
              </p>

              <div className="about-purpose-grid">
                <div>
                  <span>01</span>
                  <strong>Explain</strong>
                  <p>
                    Simplify complex salary, DA, pay matrix and pension topics.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Calculate</strong>
                  <p>
                    Provide useful tools for salary, DA, arrears and pension
                    estimates.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Organize</strong>
                  <p>
                    Separate Central Government and State Government rules
                    clearly.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <strong>Reference</strong>
                  <p>
                    Point readers toward relevant official government sources.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2>Central and State Government Coverage</h2>

              <p>
                GovtPayGuide keeps Central Government and State Government
                salary systems separate because DA rates, HRA rules, pay
                structures, pension rules and government orders may differ.
              </p>

              <p>
                State-specific sections are intended to explain the rules and
                resources relevant to each State Government rather than applying
                Central Government assumptions universally.
              </p>

              <div className="about-link-grid">
                <Link href="/central-government">
                  <span>Central Government</span>
                  <strong>Explore Central Pay Resources →</strong>
                </Link>

                <Link href="/state-government">
                  <span>State Governments</span>
                  <strong>Explore State Salary Guides →</strong>
                </Link>
              </div>
            </section>

            <section>
              <h2>Our Source Approach</h2>

              <p>
                Government salary and pension information can change through
                notifications, memoranda, circulars, resolutions and Gazette
                publications.
              </p>

              <p>
                Where applicable, GovtPayGuide aims to rely on authoritative
                sources such as:
              </p>

              <ul className="legal-list">
                <li>Ministry of Finance</li>
                <li>Department of Expenditure</li>
                <li>Department of Personnel and Training</li>
                <li>Press Information Bureau</li>
                <li>Gazette notifications</li>
                <li>Official State Finance Departments</li>
                <li>Official Government orders and memoranda</li>
              </ul>

              <div className="about-source-box">
                <strong>Official records always take priority.</strong>

                <p>
                  If information on GovtPayGuide differs from an official
                  Government notification or departmental record, the official
                  source should be treated as authoritative.
                </p>
              </div>
            </section>

            <section>
              <h2>Our Calculators</h2>

              <p>
                GovtPayGuide provides calculators for common salary and pension
                estimates, including DA, HRA, arrears, take-home salary and
                pension-related calculations.
              </p>

              <p>
                Calculator results are estimates only. Actual amounts can differ
                because of employee-specific pay fixation, promotion, increment,
                deductions, pension rules, service conditions and Government
                orders.
              </p>

              <Link href="/calculators" className="content-button">
                Browse Calculators
              </Link>
            </section>

            <section>
              <h2>Independent Website</h2>

              <div className="contact-warning">
                <strong>Important</strong>

                <p>
                  GovtPayGuide is not an official Government website and is not
                  affiliated with the Government of India, any State Government,
                  ministry, department, commission or public authority.
                </p>
              </div>

              <p>
                The website does not have access to Government employee records,
                payroll systems, pension databases, PPO information or
                departmental service files.
              </p>
            </section>

            <section>
              <h2>Corrections and Updates</h2>

              <p>
                Government rules and rates change over time, and errors can
                occur. We welcome correction requests when readers find
                outdated, unclear or incorrect information.
              </p>

              <p>
                When reporting an issue, it is helpful to include the relevant
                page and, where possible, an official notification or Government
                source.
              </p>

              <Link href="/contact" className="secondary-content-button">
                Report a Correction
              </Link>
            </section>

            <section>
              <h2>Who This Website is For</h2>

              <p>
                GovtPayGuide may be useful for Government employees, pensioners,
                family pensioners, job aspirants and anyone trying to understand
                Government pay structures or salary calculations.
              </p>
            </section>

            <section>
              <h2>Transparency</h2>

              <p>
                We aim to clearly distinguish between official information,
                simplified explanations, examples and calculator estimates.
              </p>

              <p>
                For important financial, pension or service decisions, readers
                should verify information with the appropriate Government
                authority.
              </p>
            </section>

            <div className="legal-bottom-nav">
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </article>

          <aside className="legal-sidebar">
            <div className="legal-sidebar-card">
              <h3>GovtPayGuide</h3>

              <p>
                Independent salary, DA, pay structure, pension and calculator
                resource for Government pay information.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>What We Cover</h3>

              <Link href="/central-government">Central Government</Link>
              <Link href="/state-government">State Governments</Link>
              <Link href="/calculators">Calculators</Link>
              <Link href="/pension">Pension</Link>
            </div>

            <div className="legal-sidebar-card">
              <h3>Legal</h3>

              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}