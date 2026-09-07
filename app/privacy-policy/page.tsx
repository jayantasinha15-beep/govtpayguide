import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the GovtPayGuide Privacy Policy covering cookies, analytics, advertising, third-party services and user information.",
alternates: {
  canonical: "/privacy-policy",
},
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <span className="page-badge">Legal</span>

          <h1>Privacy Policy</h1>

          <p>
            This Privacy Policy explains how GovtPayGuide may collect, use and
            protect information when you use this website.
          </p>
        </div>
      </section>

      <div className="container legal-content-container">
        <div className="contact-page-grid">
          <article className="legal-content">
            <section>
              <h2>Introduction</h2>

              <p>
                GovtPayGuide respects the privacy of its visitors. This Privacy
                Policy explains what information may be collected when you use
                this website, how that information may be used and the choices
                available to you.
              </p>

              <p>
                By using GovtPayGuide, you agree to the practices described in
                this Privacy Policy, subject to applicable law.
              </p>
            </section>

            <section>
              <h2>Information We May Collect</h2>

              <p>
                Depending on how the website is configured, GovtPayGuide may
                collect limited information automatically when you visit the
                site.
              </p>

              <ul className="legal-list">
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Approximate location derived from IP address</li>
                <li>Pages viewed on the website</li>
                <li>Time and date of visits</li>
                <li>Referring website or search source</li>
                <li>General website interaction and performance data</li>
              </ul>

              <p>
                This information is generally used to understand website usage,
                improve content and maintain site performance.
              </p>
            </section>

            <section>
              <h2>Information You Provide Voluntarily</h2>

              <p>
                If you contact GovtPayGuide by email or through a future contact
                form, we may receive information that you choose to provide,
                such as your name, email address and message.
              </p>

              <p>
                Please do not send confidential Government records, passwords,
                financial account details, Aadhaar numbers, PAN numbers, PPO
                numbers or other sensitive personal information through this
                website.
              </p>
            </section>

            <section>
              <h2>Calculator Data</h2>

              <div className="privacy-info-box">
                <strong>Calculator Privacy</strong>

                <p>
                  GovtPayGuide calculators are designed for informational
                  calculations. Salary, Basic Pay, DA rate, pension or other
                  values entered into calculators should not be treated as data
                  submitted to a Government department.
                </p>
              </div>

              <p>
                Unless a future feature specifically states otherwise,
                calculator inputs are intended to be processed in the
                user&apos;s browser and are not intended to create an official
                employee or pensioner record.
              </p>
            </section>

            <section>
              <h2>Cookies</h2>

              <p>
                GovtPayGuide may use cookies and similar technologies to improve
                website functionality, understand visitor activity and support
                analytics or advertising services.
              </p>

              <p>
                Cookies are small files stored on your device by your browser.
                You can usually control or disable cookies through your browser
                settings.
              </p>
            </section>

            <section>
              <h2>Google Analytics and Similar Services</h2>

              <p>
                GovtPayGuide may use website analytics services such as Google
                Analytics or similar tools to understand how visitors use the
                website.
              </p>

              <p>
                These services may collect information such as page views,
                device information, approximate location, referral sources and
                website interactions according to their own privacy policies.
              </p>
            </section>

            <section>
              <h2>Google AdSense and Advertising</h2>

              <p>
                GovtPayGuide may display advertisements through Google AdSense
                or other advertising partners.
              </p>

              <p>
                Third-party advertising providers may use cookies, web beacons
                or similar technologies to display, measure or personalize ads,
                subject to applicable law and their own privacy policies.
              </p>

              <p>
                Google may use advertising cookies to serve ads based on a
                visitor&apos;s previous visits to this website or other
                websites.
              </p>
            </section>

            <section>
              <h2>Third-Party Services</h2>

              <p>
                GovtPayGuide may use or link to third-party services including
                analytics providers, advertising networks, hosting platforms and
                official Government websites.
              </p>

              <p>
                Third-party websites and services operate under their own terms
                and privacy policies. GovtPayGuide does not control how those
                third parties process information.
              </p>
            </section>

            <section>
              <h2>External Government Links</h2>

              <p>
                We may link to official Government websites, Finance Department
                pages, notifications, memoranda, circulars or PDF documents for
                reference.
              </p>

              <p>
                Clicking an external link takes you away from GovtPayGuide. The
                privacy practices of the destination website are governed by
                that website&apos;s own policies.
              </p>
            </section>

            <section>
              <h2>How We May Use Information</h2>

              <p>
                Information collected through the website may be used for
                purposes including:
              </p>

              <ul className="legal-list">
                <li>Operating and maintaining the website</li>
                <li>Improving website content and usability</li>
                <li>Understanding visitor trends</li>
                <li>Monitoring technical performance</li>
                <li>Preventing abuse or security issues</li>
                <li>Responding to enquiries and correction requests</li>
                <li>Supporting advertising and analytics where enabled</li>
              </ul>
            </section>

            <section>
              <h2>Data Security</h2>

              <p>
                Reasonable steps may be taken to protect information handled by
                the website. However, no internet transmission, website or
                electronic storage system can be guaranteed to be completely
                secure.
              </p>
            </section>

            <section>
              <h2>Data Retention</h2>

              <p>
                Information voluntarily submitted to GovtPayGuide may be kept
                only for as long as reasonably necessary for the purpose for
                which it was received, legal compliance, security or legitimate
                website operations.
              </p>
            </section>

            <section>
              <h2>Children&apos;s Privacy</h2>

              <p>
                GovtPayGuide is intended as a general informational website and
                is not specifically directed toward children.
              </p>

              <p>
                We do not knowingly seek to collect personal information from
                children through the website.
              </p>
            </section>

            <section>
              <h2>Your Choices</h2>

              <p>
                Depending on your browser, device, region and applicable law,
                you may have options to control cookies, advertising
                preferences or other website tracking technologies.
              </p>

              <p>
                You can also stop using the website at any time if you do not
                agree with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2>Changes to This Privacy Policy</h2>

              <p>
                GovtPayGuide may update this Privacy Policy when website
                features, third-party services or legal requirements change.
              </p>

              <p>
                The latest version of this policy will be published on this
                page.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>

              <p>
                If you have questions about this Privacy Policy, please contact
                GovtPayGuide through the Contact page.
              </p>

              <Link href="/contact" className="content-button">
                Contact GovtPayGuide
              </Link>
            </section>

            <div className="legal-bottom-nav">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </article>

          <aside className="legal-sidebar">
            <div className="legal-sidebar-card">
              <h3>Privacy Overview</h3>

              <p>
                GovtPayGuide may use cookies, analytics and advertising
                technologies as the website develops.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Do Not Send</h3>

              <p>
                Avoid sending Aadhaar, PAN, bank account, password, PPO or
                confidential employee information through the website.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Legal Pages</h3>

              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/about">About Us</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}