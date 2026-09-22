import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
  "Important information about GovtPayGuide content, salary and pension guides, calculators, recruitment notifications, external sources and website usage.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <span className="page-badge">Legal</span>

          <h1>Disclaimer</h1>

          <p>
            Important information about the use of GovtPayGuide, its guides,
            salary information, calculators, government job guides,
            recruitment notifications and independent informational status.
          </p>
        </div>
      </section>

      <div className="container legal-content-container">
        <div className="contact-page-grid">
          <article className="legal-content">
            <p className="legal-updated-date">
                Last updated: September 22, 2026
            </p>
            <section>
              <h2>General Information</h2>

              <p>
                GovtPayGuide is an independent informational website created to
                help users understand government salary, Dearness Allowance,
                Dearness Relief, Pay Commission, pay matrix, pension,
                allowances and related topics.
              </p>

              <p>
                We may also publish government job guides, recruitment
                notifications, vacancy information, eligibility details,
                application dates and links to official recruitment portals.
              </p>

              <p>
                The information published on this website is provided for
                general educational and informational purposes only.
              </p>
            </section>

            <section>
              <h2>Government Jobs and Recruitment Disclaimer</h2>

              <div className="contact-warning">
                <strong>Important for Applicants</strong>

                <p>
                  GovtPayGuide is not a recruiting authority, examination
                  board, employer or job placement agency. We do not conduct
                  examinations, issue admit cards, receive applications,
                  prepare merit lists, select candidates or provide jobs.
                </p>
              </div>

              <p>
                Recruitment articles and job guides are based on publicly
                available notifications and official sources. Vacancy counts,
                eligibility rules, age limits, fees, reservations, important
                dates, selection procedures and application instructions may
                be changed, corrected, extended or withdrawn by the recruiting
                authority.
              </p>

              <p>
                Before applying, every candidate must read the complete latest
                official notification and verify all details on the official
                website of the recruiting organization. The official
                notification and recruitment portal will always take priority
                over information published on GovtPayGuide.
              </p>
            </section>

            <section>
              <h2>Applications, Fees and Candidate Data</h2>

              <p>
                GovtPayGuide does not accept job applications, resumes, CVs,
                certificates, identity documents, photographs, signatures or
                examination forms. Do not send such documents or sensitive
                personal information to us.
              </p>

              <p>
                We do not collect recruitment or examination fees and we do
                not authorize any person to collect money in our name for a
                government job. Application fees should be paid only through
                the payment method provided on the official recruitment
                portal.
              </p>

              <p>
                A link on our website may take users to an external official
                portal. Any information submitted there is governed by that
                portal&apos;s own terms and privacy policy, not by GovtPayGuide.
              </p>
            </section>

            <section>
              <h2>No Guarantee of Selection or Employment</h2>

              <p>
                Publishing a recruitment notification, job guide or external
                application link does not guarantee eligibility, acceptance of
                an application, examination admission, interview selection,
                appointment, salary, posting or employment.
              </p>

              <p>
                Recruitment decisions are made solely by the relevant
                recruiting authority according to its official rules and
                procedures. GovtPayGuide cannot influence or verify any
                candidate&apos;s selection status.
              </p>
            </section>

            <section>
              <h2>Not a Government Website</h2>

              <div className="contact-warning">
                <strong>Important</strong>

                <p>
                  GovtPayGuide is not an official Government of India website
                  and is not affiliated with, endorsed by, operated by or
                  connected with any Central Government department, State
                  Government, ministry, commission, public authority or
                  government agency.
                </p>
              </div>

              <p>
                Government names, departments, schemes, rules, notifications,
                orders and portals may be mentioned only for informational,
                explanatory and reference purposes.
              </p>

              <p>
                Use of government-related terminology on this website does not
                imply official status, government ownership or government
                endorsement.
              </p>
            </section>

            <section>
              <h2>GovtPayGuide Is Not a Government Payment Portal</h2>

              <div className="contact-warning">
                <strong>Payment Clarification</strong>

                <p>
                  GovtPayGuide does not process government payments, receive
                  government fees, collect application charges, accept tax
                  payments or collect money on behalf of the Government of
                  India, any State Government, department, commission or public
                  authority.
                </p>

                <p>
                  GovtPayGuide does not operate a government payment gateway
                  and does not claim to provide official government payment
                  services.
                </p>
              </div>

              <p>
                Users should make any government-related payment only through
                the official website, portal, treasury system, payment gateway
                or other channel specified by the relevant government
                department or competent authority.
              </p>

              <p>
                GovtPayGuide will never issue an official government receipt,
                salary credit, pension payment, sanction order or payment
                confirmation.
              </p>
            </section>

            <section>
              <h2>Official Sources Take Priority</h2>

              <p>
                Government salary rates, Dearness Allowance, Dearness Relief,
                pay structures, pension rules, allowances, transfer rules,
                service conditions and other matters may change through
                official orders, memoranda, notifications, circulars, Gazette
                publications or departmental instructions.
              </p>

              <p>
                Users should always verify important information through the
                relevant official Government website, Finance Department,
                Department of Expenditure, DoPT, Gazette notification,
                department, commission or other competent authority.
              </p>

              <div className="about-source-box">
                <strong>Official records are authoritative.</strong>

                <p>
                  If any information on GovtPayGuide differs from an official
                  Government notification, order, circular, departmental portal
                  or record, the official Government source should be treated
                  as final and authoritative.
                </p>
              </div>
            </section>

            <section>
              <h2>Confirmed Information, Estimates and Explanations</h2>

              <p>
                GovtPayGuide may publish officially confirmed information,
                simplified explanations, examples, estimates and illustrative
                calculations.
              </p>

              <p>
                A salary projection, fitment-factor example, expected rate,
                estimated arrear or calculator result should not be treated as
                an official Government decision unless it is supported by an
                applicable official notification or order.
              </p>

              <p>
                Readers should pay attention to whether information is
                described as confirmed, notified, expected, estimated,
                illustrative or unconfirmed.
              </p>
            </section>

            <section>
              <h2>Calculator Disclaimer</h2>

              <p>
                Calculators available on GovtPayGuide provide estimates based on
                the values entered by the user and the calculation logic
                displayed on the relevant page.
              </p>

              <p>
                Actual salary, pension, arrears, DA, HRA or take-home amounts
                may differ because of factors including:
              </p>

              <ul className="legal-list">
                <li>Pay fixation and increment dates</li>
                <li>Promotion or change of pay level</li>
                <li>Applicable DA or DR rates</li>
                <li>HRA and allowance eligibility</li>
                <li>NPS or pension contribution</li>
                <li>Income tax and other statutory deductions</li>
                <li>Departmental recoveries</li>
                <li>Commutation or pension restoration</li>
                <li>Individual service conditions</li>
                <li>Government orders applicable to a specific period</li>
              </ul>

              <p>
                Calculator results should not be treated as an official salary
                slip, pension calculation, entitlement certificate, sanction
                order or government record.
              </p>
            </section>

            <section>
              <h2>No Access to Government Systems or Records</h2>

              <p>
                GovtPayGuide does not have access to Government employee
                records, payroll systems, pension databases, PPO records,
                service books, transfer databases, recruitment databases,
                treasury systems or confidential government information.
              </p>

              <p>
                GovtPayGuide cannot approve salaries, pensions, transfers,
                appointments, arrears, allowances, claims, applications or any
                other official Government request.
              </p>
            </section>

            <section>
              <h2>No Professional or Legal Advice</h2>

              <p>
                Information on GovtPayGuide does not constitute legal,
                financial, tax, accounting, pension or professional advice.
              </p>

              <p>
                For individual service disputes, pension claims, salary
                fixation, arrears entitlement, taxation or legal matters,
                consult the appropriate Government department or a qualified
                professional.
              </p>
            </section>

            <section>
              <h2>Accuracy of Information</h2>

              <p>
                We make reasonable efforts to keep the website accurate, useful
                and updated. However, we cannot guarantee that every page will
                always be complete, error-free or updated immediately after a
                new government notification or departmental change is issued.
              </p>

              <p>
                Government websites, circulars, rates and procedures may change
                without prior notice.
              </p>

              <p>
                If you identify outdated, unclear or incorrect information,
                please contact us so that it can be reviewed.
              </p>
            </section>

            <section>
              <h2>External Links</h2>

              <p>
                GovtPayGuide may provide links to official government websites,
                PDFs, notifications or other external resources for reference.
              </p>

              <p>
                We do not control third-party websites and are not responsible
                for their availability, content, security, privacy practices,
                accuracy or subsequent changes.
              </p>

              <p>
                A link to an external website does not mean that GovtPayGuide is
                affiliated with, endorsed by or officially connected with that
                website or organization.
              </p>
            </section>

            <section>
              <h2>Government Orders and PDFs</h2>

              <p>
                When links to government notifications, circulars or PDFs are
                provided, users should check the issuing authority,
                notification or memorandum number, publication date, effective
                date and applicability before relying on the document.
              </p>

              <p>
                Readers should prefer the latest applicable official order where
                multiple versions or amendments exist.
              </p>
            </section>

            <section>
              <h2>Service, Transfer and Employment Information</h2>

              <p>
                Articles relating to transfer, posting, recruitment, service
                rules, appointment or employee benefits are intended only to
                explain publicly available information.
              </p>

              <p>
                Employees and applicants should not take service-related action
                solely on the basis of a GovtPayGuide article. Always verify the
                latest official order, portal status or departmental
                instruction.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
                <p>
                  GovtPayGuide makes reasonable efforts to provide useful and
                  up-to-date information. However, information, external links and
                  calculator results may contain delays, omissions or differences
                  from the latest official records.
                </p>

                <p>
                  To the extent permitted by applicable law, GovtPayGuide and its
                  operators will not be responsible for losses or consequences
                  arising solely from reliance on website content, including missed
                  deadlines, rejected applications, payment differences or
                  employment-related decisions.
                </p>

                <p>
                  Users should verify important information with the relevant
                  official authority before making financial, employment, pension
                  or service-related decisions.
                </p>
            </section>
            <section>
              <h2>Changes to This Disclaimer</h2>

              <p>
                This disclaimer may be updated when the website, its content,
                features or applicable legal requirements change.
              </p>

              <p>
                Users are encouraged to review this page periodically.
              </p>
            </section>

            <section>
              <h2>Contact</h2>

              <p>
                If you have questions about this disclaimer or want to report
                incorrect or outdated information, please visit our Contact
                page.
              </p>

              <Link href="/contact" className="content-button">
                Contact GovtPayGuide
              </Link>
            </section>

            <div className="about-disclaimer">
              <strong>Important:</strong> GovtPayGuide is an independent
              information website. We are not a Government website, Government
              department, recruiting authority or Government payment portal.
              For official payments, job applications, recruitment details,
              salary, pension, transfers, appointments or other service-related
              matters, always use the relevant official Government website or
              department.
            </div>

            <div className="legal-bottom-nav">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </article>

          <aside className="legal-sidebar">
            <div className="legal-sidebar-card">
              <h3>Independent Website</h3>

              <p>
                GovtPayGuide is not affiliated with the Government of India or
                any State Government.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Not a Payment Portal</h3>

              <p>
                GovtPayGuide does not collect Government fees or process
                Government payments.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Calculator Results</h3>

              <p>
                All salary, pension, DA and arrears calculator results are
                estimates only.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Recruitment Information</h3>

              <p>
                Always read the official notification and apply only through
                the recruiting authority&apos;s official portal.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Useful Links</h3>

              <Link href="/central-government">Central Government</Link>
              <Link href="/state-government">State Governments</Link>
              <Link href="/calculators">Calculators</Link>
              <Link href="/government-jobs/notifications">
                Recruitment Notifications
              </Link>
              <Link href="/government-jobs/guides">Job Guides</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
