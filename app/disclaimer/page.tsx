import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read the GovtPayGuide disclaimer regarding government salary, DA, Pay Commission, pension information and calculator estimates.",
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
            salary information and calculators.
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
                Pay Commission, pay matrix, pension, allowances and related
                topics.
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
                  and is not affiliated with, endorsed by, or operated by any
                  Central Government department, State Government, ministry,
                  commission or public authority.
                </p>
              </div>

              <p>
                Government names, schemes, rules, departments and notifications
                may be mentioned only for informational and reference purposes.
              </p>
            </section>

            <section>
              <h2>Official Sources Take Priority</h2>

              <p>
                Government salary rates, Dearness Allowance, Dearness Relief,
                pay structures, pension rules, allowances and service
                conditions may change through official orders, memoranda,
                notifications, circulars, gazette publications or departmental
                instructions.
              </p>

              <p>
                Users should always verify important information through the
                relevant official Government website, Finance Department,
                Department of Expenditure, DoPT, Gazette notification,
                department or competent authority.
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
                slip, pension calculation, entitlement certificate or
                government sanction.
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
                consult the appropriate department or a qualified professional.
              </p>
            </section>

            <section>
              <h2>Accuracy of Information</h2>

              <p>
                We make reasonable efforts to keep the website accurate and
                useful. However, we cannot guarantee that every page will
                always be complete, error-free or updated immediately after a
                new government notification is issued.
              </p>

              <p>
                If you identify outdated or incorrect information, please
                contact us so that it can be reviewed.
              </p>
            </section>

            <section>
              <h2>External Links</h2>

              <p>
                GovtPayGuide may provide links to official government websites,
                PDFs or other external resources for reference.
              </p>

              <p>
                We do not control third-party websites and are not responsible
                for their availability, content, security, privacy practices or
                subsequent changes.
              </p>
            </section>

            <section>
              <h2>Government Orders and PDFs</h2>

              <p>
                When links to government notifications or PDFs are provided,
                users should check the issuing authority, notification number,
                date, effective date and applicability before relying on the
                document.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>

              <p>
                GovtPayGuide and its operators will not be responsible for any
                direct or indirect loss, financial difference, missed benefit,
                incorrect payment, administrative decision or other consequence
                resulting from reliance on information or calculator results
                available on this website.
              </p>

              <p>
                Use of the website and its calculators is at the user&apos;s own
                discretion.
              </p>
            </section>

            <section>
              <h2>Changes to This Disclaimer</h2>

              <p>
                This disclaimer may be updated when the website, its services or
                legal requirements change.
              </p>

              <p>
                Users are encouraged to review this page periodically.
              </p>
            </section>

            <section>
              <h2>Contact</h2>

              <p>
                If you have questions about this disclaimer or want to report
                incorrect information, please visit our Contact page.
              </p>

              <Link href="/contact" className="content-button">
                Contact GovtPayGuide
              </Link>
            </section>

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