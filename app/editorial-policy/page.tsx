import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "Learn how GovtPayGuide researches, verifies, writes, reviews, updates and corrects government salary, pension, recruitment and calculator content.",
  alternates: {
    canonical: "/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <span className="page-badge">Editorial Policy</span>

          <h1>GovtPayGuide Editorial Policy</h1>

          <p>
            Learn how we research, verify, publish, update and correct
            information relating to government salary, pension, allowances,
            recruitment and calculators.
          </p>
        </div>
      </section>

      <div className="container legal-content-container">
        <div className="contact-page-grid">
          <article className="legal-content">
            <section>
              <h2>Our Editorial Purpose</h2>

              <p>
                GovtPayGuide is an independent informational website created
                to explain government salary, Dearness Allowance, Pay
                Commission, pay structure, pension, recruitment notifications,
                job examinations and related calculations in a clear and
                practical manner.
              </p>

              <p>
                Our aim is to help readers understand publicly available
                information. We do not replace Government departments,
                recruiting authorities, employers, banks, pension authorities
                or official notifications.
              </p>
            </section>

            <section>
              <h2>Our Primary Sources</h2>

              <p>
                Whenever possible, important factual information is checked
                against primary and official sources.
              </p>

              <p>These sources may include:</p>

              <ul>
                <li>Government department websites</li>
                <li>Gazette notifications</li>
                <li>Government resolutions and memoranda</li>
                <li>Official circulars and office orders</li>
                <li>Recruitment advertisements</li>
                <li>Recruiting authority websites</li>
                <li>Pay and pension rules</li>
                <li>Public-sector organisation websites</li>
                <li>Official press releases</li>
                <li>Commission reports and official portals</li>
              </ul>

              <p>
                Where an article refers to a media report, employee demand,
                proposal or expected development, we try to identify it
                clearly instead of presenting it as a final Government
                decision.
              </p>
            </section>

            <section>
              <h2>Official Information and Analysis</h2>

              <p>
                GovtPayGuide separates confirmed information from analysis,
                estimates and illustrative calculations.
              </p>

              <div className="contact-topic-grid">
                <div>
                  <strong>Official Update</strong>

                  <p>
                    Information supported by an official notification,
                    resolution, circular, order or Government portal.
                  </p>
                </div>

                <div>
                  <strong>Analysis</strong>

                  <p>
                    An explanation, comparison or calculation based on
                    available information. Analysis is not a Government
                    decision.
                  </p>
                </div>

                <div>
                  <strong>Recruitment Notification</strong>

                  <p>
                    Information based on a verifiable advertisement issued by
                    the competent recruiting authority.
                  </p>
                </div>

                <div>
                  <strong>Guide</strong>

                  <p>
                    Educational information about salary rules, examinations,
                    job profiles, previous patterns or application processes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2>Recruitment Content Standards</h2>

              <p>
                Recruitment articles should clearly state whether an
                application is currently open or whether the page is only an
                examination guide, recruitment outlook or report about an
                expected notification.
              </p>

              <p>
                Before applying, candidates should verify the following
                details in the complete official advertisement:
              </p>

              <ul>
                <li>Recruiting authority</li>
                <li>Advertisement number</li>
                <li>Vacancy count</li>
                <li>Educational qualification</li>
                <li>Age limit and relaxation</li>
                <li>Reservation provisions</li>
                <li>Application fee</li>
                <li>Application dates</li>
                <li>Selection process</li>
                <li>Official application link</li>
              </ul>

              <div className="contact-warning">
                <strong>Applicant Safety</strong>

                <p>
                  GovtPayGuide does not accept applications, resumes,
                  certificates, identity documents, passwords, OTPs or
                  recruitment fees. Applications and payments should be
                  completed only through the official portal named in the
                  recruitment notification.
                </p>
              </div>
            </section>

            <section>
              <h2>Salary and Pension Information</h2>

              <p>
                Salary, DA, allowances, pension and arrear information can
                change through official orders and employee-specific service
                conditions.
              </p>

              <p>
                We try to distinguish between:
              </p>

              <ul>
                <li>Currently applicable rates</li>
                <li>Future effective rates</li>
                <li>Proposed or expected revisions</li>
                <li>Illustrative calculations</li>
                <li>Confirmed Government decisions</li>
              </ul>

              <p>
                Readers should use their official pay slip, pension payment
                order, service record and applicable Government order for
                individual financial decisions.
              </p>
            </section>

            <section>
              <h2>Calculator Methodology</h2>

              <p>
                GovtPayGuide calculators use the values entered by the user
                and the formula explained on the relevant calculator page.
              </p>

              <p>
                Calculator results are estimates. Actual salary, pension,
                arrears or take-home amounts may differ because of:
              </p>

              <ul>
                <li>Employee-specific Basic Pay</li>
                <li>Applicable DA and HRA rates</li>
                <li>Posting location</li>
                <li>Allowances and deductions</li>
                <li>Promotion or increment</li>
                <li>Pension rules</li>
                <li>Income tax</li>
                <li>Department-specific conditions</li>
                <li>Rounding and payment rules</li>
              </ul>
            </section>

            <section>
              <h2>Writing and Review Process</h2>

              <p>
                Articles are prepared from available sources and organised to
                help readers understand the subject without needing to examine
                multiple documents.
              </p>

              <p>
                The editorial process may include:
              </p>

              <ol>
                <li>Selecting a useful and relevant topic</li>
                <li>Finding available official or reliable sources</li>
                <li>Separating confirmed facts from expectations</li>
                <li>Writing the explanation in an accessible format</li>
                <li>Checking important dates, rates and links</li>
                <li>Adding source and safety notices where necessary</li>
                <li>Reviewing the article before publication</li>
                <li>Updating the page when reliable new information appears</li>
              </ol>
            </section>

            <section>
              <h2>Use of Technology-Assisted Tools</h2>

              <p>
                Technology-assisted tools may be used to support research
                organisation, language improvement, formatting, calculations
                or drafting.
              </p>

              <p>
                Such tools are not treated as an official source. The website
                author remains responsible for reviewing the final article,
                checking important claims and deciding what is published.
              </p>

              <p>
                Government orders, official advertisements and primary
                records take precedence over generated summaries,
                calculations or explanatory material.
              </p>
            </section>

            <section>
              <h2>Authorship and Responsibility</h2>

              <p>
                GovtPayGuide content is published under the responsibility of
                its author and developer, Jayanta Singha.
              </p>

              <p>
                Readers can learn more about the author, the purpose of the
                website and its independent status through the links below.
              </p>

              <div className="legal-bottom-nav">
                <Link href="/author/jayanta-singha">
                  About the Author
                </Link>

                <Link href="/about">
                  About GovtPayGuide
                </Link>
              </div>
            </section>

            <section>
              <h2>Article Updates</h2>

              <p>
                An existing article may be updated when:
              </p>

              <ul>
                <li>A new Government order is published</li>
                <li>A recruitment notification is released</li>
                <li>An application date changes</li>
                <li>A corrigendum is issued</li>
                <li>A DA or pension rate changes</li>
                <li>An official source replaces earlier information</li>
                <li>An error or unclear statement is identified</li>
              </ul>

              <p>
                The original publication date may remain visible while the
                article&apos;s technical updated date is refreshed by the
                website.
              </p>
            </section>

            <section>
              <h2>Corrections Policy</h2>

              <p>
                We aim to correct material factual errors when they are
                identified. Corrections may include revising a date, rate,
                vacancy figure, calculation, source link or explanation.
              </p>

              <p>
                If you find an error, please send:
              </p>

              <ul>
                <li>The URL of the relevant page</li>
                <li>A short explanation of the issue</li>
                <li>The correct information</li>
                <li>An official source, where available</li>
              </ul>

              <p>
                Correction requests can be sent through our{" "}
                <Link href="/contact">Contact page</Link>.
              </p>
            </section>

            <section>
              <h2>Independence and Transparency</h2>

              <p>
                GovtPayGuide is not affiliated with the Government of India,
                any State Government, Government department, Pay Commission,
                recruiting authority, public-sector bank or Government-owned
                company.
              </p>

              <p>
                The website does not guarantee recruitment, salary revision,
                pension approval, arrear payment, examination success or
                appointment.
              </p>
            </section>

            <section>
              <h2>Advertising and Editorial Decisions</h2>

              <p>
                Advertising arrangements do not change the official status of
                information or permit an advertiser to control editorial
                conclusions.
              </p>

              <p>
                Advertisements, if displayed, should remain distinguishable
                from the website&apos;s informational content.
              </p>
            </section>

            <section>
              <h2>Reader Responsibility</h2>

              <p>
                GovtPayGuide articles are provided for general information and
                educational guidance. Readers remain responsible for verifying
                information before submitting an application, making a
                payment or taking an employment, service, pension or financial
                decision.
              </p>

              <p>
                When website information differs from an official Government
                document, the official document must be treated as final.
              </p>
            </section>

            <div className="about-disclaimer">
              <strong>Important:</strong> GovtPayGuide is an independent
              informational website. Official Government notifications,
              recruitment advertisements, departmental records and competent
              authority decisions always take precedence.
            </div>

            <div className="legal-bottom-nav">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </article>

          <aside className="legal-sidebar">
            <div className="legal-sidebar-card">
              <h3>Editorial Standard</h3>

              <p>
                We aim to separate official information from estimates,
                analysis and expectations.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Primary Sources</h3>

              <p>
                Government orders, official advertisements and department
                websites are preferred whenever available.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Corrections</h3>

              <p>
                Readers can report an error through our Contact page with the
                relevant URL and official source.
              </p>

              <Link href="/contact">
                Submit a Correction →
              </Link>
            </div>

            <div className="legal-sidebar-card">
              <h3>Important Links</h3>

              <Link href="/author/jayanta-singha">
                About the Author
              </Link>

              <Link href="/about">
                About GovtPayGuide
              </Link>

              <Link href="/disclaimer">
                Disclaimer
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}