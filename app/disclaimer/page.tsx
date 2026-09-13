import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read the GovtPayGuide disclaimer regarding government salary, DA, Pay Commission, pension information, calculator estimates and independent website status.",
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
            salary information, calculators and independent informational
            status.
          </p>
        </div>
      </section>

      <div className="container legal-content-container">
        <div className="contact-page-grid">
          <article className="legal-content">
            <section>
              <h2>General Information</h2>

              <p>
                GovtPayGuide is an independent informational website created to
                help users understand government salary, Dearness Allowance,
                Dearness Relief, Pay Commission, pay matrix, pension,
                allowances and related topics.
              </p>

              <p>
                The information published on this website is provided for
                general educational and informational purposes only.
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
                GovtPayGuide and its operators will not be responsible for any
                direct or indirect loss, financial difference, missed benefit,
                incorrect payment, missed deadline, administrative decision or
                other consequence resulting from reliance on information,
                examples or calculator results available on this website.
              </p>

              <p>
                Use of the website and its calculators is at the user&apos;s own
                discretion.
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
              department or Government payment portal. For official payments,
              applications, salary, pension, transfers, appointments or other
              service-related matters, always use the relevant official
              Government website or department.
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
              <h3>Useful Links</h3>

              <Link href="/central-government">Central Government</Link>
              <Link href="/state-government">State Governments</Link>
              <Link href="/calculators">Calculators</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}