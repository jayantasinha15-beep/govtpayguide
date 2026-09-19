import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact GovtPayGuide for corrections, recruitment updates, calculator feedback, content suggestions and website-related enquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <span className="page-badge">Contact</span>

          <h1>Contact GovtPayGuide</h1>

          <p>
            Have a question, found an error, or want to suggest an improvement?
            We&apos;d be happy to hear from you.
          </p>
        </div>
      </section>

      <div className="container legal-content-container">
        <div className="contact-page-grid">
          <article className="legal-content">
            <section>
              <h2>Get in Touch</h2>

              <p>
                GovtPayGuide is an independent informational website focused on
                government salaries, Dearness Allowance, Pay Commission, pay
                structures, pension, calculators, government job guides and
                recruitment notifications.
              </p>

              <p>
                You can contact us if you notice incorrect or outdated
                information, have feedback about one of our calculators, find
                an issue in a recruitment article, or want to suggest a topic
                that should be covered on the website.
              </p>
            </section>

            <section>
              <h2>Email</h2>

              <div className="contact-email-box">
                <span>General Enquiries &amp; Corrections</span>

                <a href="mailto:jayantasingha09@yahoo.com">
                  jayantasingha09@yahoo.com
                </a>
              </div>
            </section>

            <section>
              <h2>What You Can Contact Us About</h2>

              <div className="contact-topic-grid">
                <div>
                  <strong>Corrections</strong>
                  <p>
                    Report incorrect, outdated or unclear salary, DA, pension,
                    pay or recruitment information.
                  </p>
                </div>

                <div>
                  <strong>Recruitment Updates</strong>
                  <p>
                    Report changes to vacancies, eligibility, important dates,
                    official notifications or application links.
                  </p>
                </div>

                <div>
                  <strong>Calculator Feedback</strong>
                  <p>
                    Tell us about calculation errors or improvements you would
                    like to see.
                  </p>
                </div>

                <div>
                  <strong>Content Suggestions</strong>
                  <p>
                    Suggest government salary, pension, service or job-related
                    topics for future guides.
                  </p>
                </div>

                <div>
                  <strong>Website Enquiries</strong>
                  <p>
                    Contact us regarding the website, technical issues or
                    general enquiries.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2>Recruitment Support Notice</h2>

              <div className="contact-warning">
                <strong>Important for Job Applicants</strong>

                <p>
                  GovtPayGuide is not a recruiting authority, examination
                  board, employer or placement agency. We do not accept job
                  applications, resumes, certificates, identity documents,
                  photographs, signatures or recruitment fees.
                </p>

                <p>
                  We cannot provide application status, registration support,
                  admit cards, examination results, merit lists, interview
                  details or selection assistance.
                </p>
              </div>

              <p>
                For these matters, contact the relevant recruiting authority
                through its official website. Before applying, read the latest
                complete official notification and use only the official
                application portal.
              </p>
            </section>

            <section>
              <h2>Government Service Queries</h2>

              <div className="contact-warning">
                <strong>Please Note</strong>

                <p>
                  GovtPayGuide is not a government department and cannot access
                  employee service records, salary accounts, pension records,
                  PPO details, job applications, recruitment databases or
                  government systems.
                </p>
              </div>

              <p>
                For individual service matters, salary disputes, pension
                sanctions, official DA entitlement, transfers, appointments or
                departmental decisions, please contact the appropriate
                government department or competent authority.
              </p>
            </section>

            <section>
              <h2>Not a Government Payment Portal</h2>

              <div className="contact-warning">
                <strong>Important Clarification</strong>

                <p>
                  GovtPayGuide does not process government payments, collect
                  government fees, receive application or examination charges,
                  or accept money on behalf of the Government of India, any
                  State Government, department, commission, recruiting
                  authority or public body.
                </p>

                <p>
                  We do not operate an official government payment gateway and
                  do not provide government payment services.
                </p>
              </div>

              <p>
                Government and recruitment-related payments should be made only
                through the official portal or payment channel specified by the
                concerned authority.
              </p>
            </section>

            <section>
              <h2>Corrections &amp; Source Updates</h2>

              <p>
                When reporting an incorrect rate, government order,
                recruitment detail or other factual issue, please include the
                page URL and, where possible, the relevant official
                notification, memorandum, circular or government source.
              </p>

              <p>
                Please do not email passwords, OTPs, Aadhaar details, bank
                information, application credentials or other sensitive
                personal data.
              </p>
            </section>

            <section>
              <h2>Response Time</h2>

              <p>
                We try to review genuine enquiries and correction requests as
                soon as reasonably possible. However, a response cannot be
                guaranteed for every message.
              </p>
            </section>

            <div className="about-disclaimer">
              <strong>Important:</strong> GovtPayGuide is an independent
              informational website. We are not affiliated with the Government
              of India, any State Government, government department or
              recruiting authority. We do not accept job applications or
              process government or recruitment payments.
            </div>

            <div className="legal-bottom-nav">
              <Link href="/about">About Us</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </article>

          <aside className="legal-sidebar">
            <div className="legal-sidebar-card">
              <h3>GovtPayGuide</h3>

              <p>
                Independent information website for government salary, pension,
                calculators, job guides and recruitment notifications.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Independent Website</h3>

              <p>
                We are not affiliated with the Government of India, any State
                Government, government department or recruiting authority.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Applicant Safety</h3>

              <p>
                Apply and pay fees only through the recruiting authority&apos;s
                official portal. Never send sensitive documents to us.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Quick Links</h3>

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
