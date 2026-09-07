import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact GovtPayGuide for feedback, corrections, questions and website-related enquiries.",
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
                GovtPayGuide aims to provide clear and useful information about
                government salaries, Dearness Allowance, Pay Commission, pay
                structures, pension and related calculators.
              </p>

              <p>
                You can contact us if you notice incorrect or outdated
                information, have feedback about one of our calculators, or
                want to suggest a topic that should be covered on the website.
              </p>
            </section>

            <section>
              <h2>Email</h2>

              <div className="contact-email-box">
                <span>General Enquiries & Corrections</span>

                <a href="mailto:contact@govtpayguide.in">
                  contact@govtpayguide.in
                </a>
              </div>

              <p className="legal-small-note">
                Replace this email address if your final website uses a
                different official contact email.
              </p>
            </section>

            <section>
              <h2>What You Can Contact Us About</h2>

              <div className="contact-topic-grid">
                <div>
                  <strong>Corrections</strong>
                  <p>
                    Report incorrect, outdated or unclear salary, DA, pension
                    or pay information.
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
                    Suggest government salary, pension or service-related
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
              <h2>Government Service Queries</h2>

              <div className="contact-warning">
                <strong>Please Note</strong>

                <p>
                  GovtPayGuide is not a government department and cannot access
                  employee service records, salary accounts, pension records,
                  PPO details, applications or government databases.
                </p>
              </div>

              <p>
                For individual service matters, salary disputes, pension
                sanctions, official DA entitlement or departmental decisions,
                please contact the appropriate government department or
                competent authority.
              </p>
            </section>

            <section>
              <h2>Corrections & Source Updates</h2>

              <p>
                When reporting an incorrect rate, government order or other
                factual issue, please include the page URL and, where possible,
                the relevant official notification, memorandum, circular or
                government source.
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
                Independent information and calculator website for government
                salary, DA, pay and pension topics.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Important</h3>

              <p>
                We are not affiliated with the Government of India, any State
                Government or government department.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Quick Links</h3>

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