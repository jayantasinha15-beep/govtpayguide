import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about GovtPayGuide, an independent informational website covering government salary, pension, calculators, job guides and recruitment notifications.",
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
            GovtPayGuide is an independent informational website created to
            make government salary, Dearness Allowance, Pay Commission,
            pension, pay matrix, government jobs and related information easier
            to understand.
          </p>
        </div>
      </section>

      <div className="container legal-content-container">
        <div className="contact-page-grid">
          <article className="legal-content">
            <section>
              <h2>What is GovtPayGuide?</h2>

              <p>
                GovtPayGuide is an independent information platform focused on
                government salary, Dearness Allowance, Dearness Relief, Pay
                Commission, pay matrix, pension, allowances and salary-related
                calculators, as well as government job guides and recruitment
                notifications.
              </p>

              <p>
                The website is designed to explain publicly available
                government pay information in a simpler and more practical
                format for employees, pensioners, job aspirants and readers who
                want to understand salary, pension and recruitment-related
                topics.
              </p>

              <div className="contact-warning">
                <strong>Independent Information Website</strong>

                <p>
                  GovtPayGuide is not affiliated with the Government of India,
                  any State Government, ministry, department, commission,
                  public authority or official government payment portal.
                </p>

                <p>
                  GovtPayGuide does not process government payments, collect
                  money on behalf of any government authority, issue official
                  orders, accept job applications or provide government
                  services.
                </p>
              </div>
            </section>

            <section>
              <h2>Our Purpose</h2>

              <p>
                Government salary and pension rules may involve multiple
                notifications, memoranda, pay levels, allowances, service
                conditions, effective dates and departmental orders.
              </p>

              <p>
                GovtPayGuide aims to organize and explain this information in a
                clear, useful and easy-to-understand format.
              </p>

              <div className="about-purpose-grid">
                <div>
                  <span>01</span>
                  <strong>Explain</strong>
                  <p>
                    Simplify complex salary, DA, pay matrix, Pay Commission and
                    pension topics.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <strong>Calculate</strong>
                  <p>
                    Provide practical calculators for salary, DA, HRA, arrears,
                    pension and related estimates.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <strong>Organize</strong>
                  <p>
                    Keep Central Government and State Government pay rules and
                    updates clearly separated.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <strong>Reference</strong>
                  <p>
                    Direct readers toward official government and recruitment
                    sources wherever possible.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2>Government Jobs and Recruitment Coverage</h2>

              <p>
                GovtPayGuide publishes government job guides and recruitment
                notifications to help candidates understand publicly available
                information such as vacancies, eligibility, age limits,
                application fees, important dates, selection processes and
                official application links.
              </p>

              <p>
                Recruitment details can be revised, extended or withdrawn by
                the recruiting authority. Candidates should therefore read the
                complete latest official notification and verify every detail
                on the recruiting organization&apos;s official website before
                applying.
              </p>

              <div className="contact-warning">
                <strong>Independent Recruitment Information</strong>

                <p>
                  GovtPayGuide is not a recruiting authority, examination
                  board, employer or placement agency. We do not accept job
                  applications, issue admit cards, conduct examinations,
                  prepare merit lists or guarantee employment.
                </p>
              </div>

              <div className="about-link-grid">
                <Link href="/government-jobs/notifications">
                  <span>Latest Vacancies</span>
                  <strong>Recruitment Notifications →</strong>
                </Link>

                <Link href="/government-jobs/guides">
                  <span>Career Information</span>
                  <strong>Explore Job Guides →</strong>
                </Link>
              </div>
            </section>

            <section>
              <h2>Central and State Government Coverage</h2>

              <p>
                GovtPayGuide keeps Central Government and State Government
                salary systems separate because DA rates, HRA rules, pay
                structures, pension rules, allowances and government orders can
                differ significantly.
              </p>

              <p>
                State-specific sections are intended to explain the rules and
                resources relevant to individual State Governments rather than
                applying Central Government assumptions universally.
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
                official notifications, office memoranda, circulars,
                resolutions, Gazette publications and departmental orders.
              </p>

              <p>
                Wherever applicable, GovtPayGuide aims to verify information
                using authoritative primary sources such as:
              </p>

              <ul className="legal-list">
                <li>Ministry of Finance</li>
                <li>Department of Expenditure</li>
                <li>Department of Personnel and Training</li>
                <li>Press Information Bureau</li>
                <li>Gazette notifications</li>
                <li>Official State Finance Departments</li>
                <li>Official Education Departments</li>
                <li>Official Government orders and memoranda</li>
                <li>Official departmental portals</li>
                <li>Official recruiting organizations and examination boards</li>
                <li>Official recruitment notifications and application portals</li>
              </ul>

              <div className="about-source-box">
                <strong>Official records always take priority.</strong>

                <p>
                  If information published on GovtPayGuide differs from an
                  official Government notification, order, circular, portal or
                  departmental record, the official Government source should be
                  treated as authoritative.
                </p>
              </div>
            </section>

            <section>
              <h2>Official Information vs Explanations</h2>

              <p>
                GovtPayGuide aims to clearly distinguish between officially
                confirmed information and explanatory or illustrative content.
              </p>

              <p>
                When a figure, salary estimate, fitment factor, expected rate or
                calculation has not been officially notified, it should be
                understood as an example or estimate rather than a confirmed
                Government decision.
              </p>

              <p>
                Important service, pension, transfer, recruitment, appointment,
                payment or financial decisions should always be based on the
                latest official Government order, recruitment notification or
                departmental instruction.
              </p>
            </section>

            <section>
              <h2>Our Calculators</h2>

              <p>
                GovtPayGuide provides calculators for common salary and pension
                estimates, including DA, HRA, arrears, take-home salary and
                pension-related calculations.
              </p>

              <p>
                Calculator results are estimates only. Actual amounts may differ
                because of employee-specific pay fixation, promotion, increment,
                deductions, pension rules, service conditions and Government
                orders.
              </p>

              <Link href="/calculators" className="content-button">
                Browse Calculators
              </Link>
            </section>

            <section>
              <h2>GovtPayGuide Is Not a Payment Portal</h2>

              <div className="contact-warning">
                <strong>Important Clarification</strong>

                <p>
                  GovtPayGuide does not receive Government fees, salaries,
                  pension payments, tax payments, application fees or any other
                  payment on behalf of the Government.
                </p>

                <p>
                  We do not operate any Government payment gateway and do not
                  claim to be an official Government payment service.
                </p>
              </div>

              <p>
                Users should make Government payments only through the official
                website or payment portal specified by the relevant Government
                department or authority.
              </p>

              <p>
                Recruitment and examination fees should be paid only through
                the official application portal specified by the recruiting
                authority.
              </p>
            </section>

            <section>
              <h2>No Access to Government Records</h2>

              <p>
                GovtPayGuide does not have access to Government employee
                records, payroll systems, pension databases, PPO information,
                departmental service books, transfer databases, recruitment
                databases, application records or confidential Government
                systems.
              </p>

              <p>
                We cannot approve salaries, pensions, transfers, appointments,
                job applications, admit cards, examination results, claims,
                arrears, allowances or any official Government request.
              </p>
            </section>

            <section>
              <h2>Corrections and Updates</h2>

              <p>
                Government rules, rates and orders change over time, and errors
                can occur. We welcome correction requests when readers find
                outdated, unclear or incorrect information.
              </p>

              <p>
                When reporting an issue, it is helpful to include the relevant
                page and, where possible, the related official notification,
                Government order or departmental source.
              </p>

              <Link href="/contact" className="secondary-content-button">
                Report a Correction
              </Link>
            </section>

            <section>
              <h2>Who This Website Is For</h2>

              <p>
                GovtPayGuide may be useful for Government employees, pensioners,
                family pensioners, job aspirants and anyone trying to understand
                Government pay structures, salary calculations, DA, pension,
                Pay Commission or recruitment-related information.
              </p>
            </section>

            <section>
              <h2>Transparency</h2>

              <p>
                We aim to clearly distinguish between official information,
                simplified explanations, examples, estimates and calculator
                results.
              </p>

              <p>
                For important financial, pension, employment or service-related
                decisions, readers should verify the latest information directly
                with the appropriate Government or recruiting authority.
              </p>
            </section>

            <div className="about-disclaimer">
              <strong>Important:</strong> GovtPayGuide is an independent
              information platform. For official decisions, payments,
              job applications, recruitment, transfers, appointments, pension
              matters or service-related action, always verify the latest
              information from the concerned Government department, recruiting
              authority or official portal.
            </div>

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
                Independent salary, DA, Pay Commission, pension, calculator and
                government jobs information platform.
              </p>

              <p>
                Not an official Government website and not a Government payment
                portal.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>What We Cover</h3>

              <Link href="/central-government">Central Government</Link>
              <Link href="/state-government">State Governments</Link>
              <Link href="/calculators">Calculators</Link>
              <Link href="/pension">Pension</Link>
              <Link href="/government-jobs/notifications">
                Recruitment Notifications
              </Link>
              <Link href="/government-jobs/guides">Job Guides</Link>
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
