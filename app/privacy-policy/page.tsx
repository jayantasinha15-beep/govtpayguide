import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the GovtPayGuide Privacy Policy covering recruitment information, cookies, analytics, advertising, third-party services and user data.",
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
            This Privacy Policy explains how GovtPayGuide may collect,
            use and protect information when you use this website.
          </p>
        </div>
      </section>

      <div className="container legal-content-container">
        <div className="contact-page-grid">
          <article className="legal-content">
            <section>
              <h2>Introduction</h2>

              <p>
                GovtPayGuide respects the privacy of its visitors. This
                Privacy Policy explains what information may be
                collected when you use this website, how that
                information may be used and the choices available to
                you.
              </p>

              <p>
                GovtPayGuide provides independent information about
                Government salaries, Dearness Allowance, Pay
                Commissions, pensions, calculators, Government job
                guides and recruitment notifications.
              </p>

              <p>
                By using GovtPayGuide, you acknowledge the practices
                described in this Privacy Policy, subject to applicable
                law.
              </p>

              <p>
                <strong>Last updated:</strong> 19 September 2026
              </p>
            </section>

            <section>
              <h2>Information We May Collect Automatically</h2>

              <p>
                Depending on how the website and its third-party
                services are configured, limited technical information
                may be collected automatically when you visit the
                website.
              </p>

              <ul className="legal-list">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device type</li>
                <li>Operating system</li>
                <li>Approximate location derived from IP address</li>
                <li>Pages viewed on the website</li>
                <li>Time and date of visits</li>
                <li>Referring website or search source</li>
                <li>General website interaction data</li>
                <li>Website performance and diagnostic information</li>
              </ul>

              <p>
                This information may be used to understand website
                usage, improve content, maintain performance, measure
                traffic and protect the website against abuse or
                security threats.
              </p>
            </section>

            <section>
              <h2>Information You Provide Voluntarily</h2>

              <p>
                If you contact GovtPayGuide by email or through a
                contact form, we may receive information that you
                voluntarily provide, such as your name, email address
                and message.
              </p>

              <p>
                Information provided voluntarily may be used to respond
                to enquiries, correction requests, feedback or other
                communications.
              </p>

              <p>
                Please do not send confidential Government records,
                passwords, bank details, Aadhaar numbers, PAN numbers,
                PPO numbers, employment records or other sensitive
                personal information through this website.
              </p>
            </section>

            <section>
              <h2>Job Applications and Recruitment Data</h2>

              <div className="privacy-info-box">
                <strong>We Do Not Accept Job Applications</strong>

                <p>
                  GovtPayGuide is an independent informational website.
                  It is not a recruitment agency, recruiting authority
                  or Government application portal.
                </p>
              </div>

              <p>
                GovtPayGuide publishes Government recruitment
                notifications, eligibility information, application
                dates, salary guides and links to official recruitment
                websites for general informational purposes.
              </p>

              <p>
                We do not accept, process or forward job applications
                to Government departments or recruiting authorities.
                We do not conduct examinations, issue admit cards,
                guarantee employment or collect recruitment fees.
              </p>

              <p>
                Visitors should not upload or send the following
                information to GovtPayGuide:
              </p>

              <ul className="legal-list">
                <li>Resumes or curriculum vitae</li>
                <li>Educational certificates or marksheets</li>
                <li>Caste, disability or reservation certificates</li>
                <li>Aadhaar, PAN or other identity documents</li>
                <li>Photographs or signatures for job applications</li>
                <li>Bank, card or payment information</li>
                <li>Recruitment usernames or passwords</li>
                <li>Application registration numbers</li>
              </ul>

              <p>
                Government job applications should be submitted only
                through the official portal identified in the relevant
                recruitment notification.
              </p>
            </section>

            <section>
              <h2>Official Recruitment Portals</h2>

              <p>
                Recruitment articles may link to websites operated by
                organisations such as UPSC, SSC, Railway Recruitment
                Boards, State Public Service Commissions, Government
                departments and other recruiting authorities.
              </p>

              <p>
                When you leave GovtPayGuide and submit information on
                an official recruitment portal, the collection,
                processing, storage and security of that information
                are governed by the destination website&apos;s privacy
                policy and terms.
              </p>

              <p>
                GovtPayGuide does not control information submitted to
                external recruitment portals and is not responsible for
                their privacy or data-processing practices.
              </p>
            </section>

            <section>
              <h2>Calculator Data</h2>

              <div className="privacy-info-box">
                <strong>Calculator Privacy</strong>

                <p>
                  GovtPayGuide calculators are provided for
                  informational estimates. Salary, Basic Pay, DA,
                  pension, allowances or other values entered into a
                  calculator are not submitted to a Government
                  department.
                </p>
              </div>

              <p>
                Unless a feature specifically states otherwise,
                calculator inputs are intended to be processed in the
                user&apos;s browser and are not intended to create an
                official employee, pensioner or applicant record.
              </p>

              <p>
                Users should avoid entering names, employee IDs, PPO
                numbers, bank details or other personally identifying
                information into calculator fields.
              </p>
            </section>

            <section>
              <h2>Cookies and Similar Technologies</h2>

              <p>
                GovtPayGuide may use cookies, web beacons, local
                storage and similar technologies to operate the
                website, remember preferences, understand visitor
                activity and support analytics or advertising
                services.
              </p>

              <p>
                Cookies are small files that may be stored on your
                device by your browser. Some cookies may be necessary
                for website functionality, while others may support
                measurement, advertising or personalization.
              </p>

              <p>
                You can control, block or delete cookies through your
                browser settings. Disabling cookies may affect certain
                website features.
              </p>
            </section>

            <section>
              <h2>Google Analytics and Similar Services</h2>

              <p>
                GovtPayGuide may use Google Analytics or similar
                services to understand how visitors find and interact
                with the website.
              </p>

              <p>
                These services may process information such as IP
                address, page views, device details, approximate
                location, referral source, session activity and
                website interactions according to their respective
                privacy policies.
              </p>

              <p>
                Google provides a browser add-on that may allow users
                to opt out of Google Analytics measurement:
              </p>

              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="article-external-link"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
            </section>

            <section>
              <h2>Google AdSense and Advertising</h2>

              <p>
                GovtPayGuide may display advertisements through Google
                AdSense or other advertising partners.
              </p>

              <p>
                Third-party vendors, including Google, may use cookies
                to serve advertisements based on a user&apos;s previous
                visits to GovtPayGuide or other websites.
              </p>

              <p>
                Google&apos;s use of advertising cookies enables Google
                and its partners to serve, measure and, where
                permitted, personalize advertisements based on visits
                to this website and other websites on the internet.
              </p>

              <p>
                Advertising services may process information such as
                the page URL, IP address, browser information, device
                identifiers, cookie data and interactions with
                advertisements.
              </p>

              <p>
                Users can review or manage Google advertising
                preferences through Google Ads Settings:
              </p>

              <a
                href="https://adssettings.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="article-external-link"
              >
                Google Ads Settings
              </a>

              <p>
                Additional information about how Google uses data from
                websites that use its services is available here:
              </p>

              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="article-external-link"
              >
                How Google Uses Information From Partner Sites
              </a>
            </section>

            <section>
              <h2>Third-Party Vendors and Advertising Networks</h2>

              <p>
                In addition to Google, other third-party advertising
                vendors or networks may use cookies or similar
                technologies where such services are enabled on the
                website.
              </p>

              <p>
                These third parties operate under their own privacy
                policies. Users may visit the relevant provider&apos;s
                website to learn about its data practices and available
                advertising choices.
              </p>

              <p>
                Users may also find information about opting out of
                certain personalized advertising through:
              </p>

              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="article-external-link"
              >
                YourAdChoices
              </a>
            </section>

            <section>
              <h2>Third-Party Services</h2>

              <p>
                GovtPayGuide may use or link to third-party services,
                including analytics providers, advertising networks,
                hosting platforms, content-delivery services,
                Government websites and official recruitment portals.
              </p>

              <p>
                Third-party websites and services operate under their
                own terms and privacy policies. GovtPayGuide does not
                control how those parties collect, use, retain or
                protect information.
              </p>
            </section>

            <section>
              <h2>External Government Links</h2>

              <p>
                GovtPayGuide may link to official Government websites,
                recruiting authorities, Finance Department pages,
                notifications, memoranda, circulars, application
                portals or PDF documents for verification and
                reference.
              </p>

              <p>
                Clicking an external link takes you away from
                GovtPayGuide. The destination website&apos;s privacy
                policy, security practices and terms will apply to your
                activity on that website.
              </p>

              <p>
                Visitors should verify the website address before
                entering personal information or making any payment.
                Recruitment fees should be paid only through the
                official application portal.
              </p>
            </section>

            <section>
              <h2>How We May Use Information</h2>

              <p>
                Information collected through the website may be used
                for purposes including:
              </p>

              <ul className="legal-list">
                <li>Operating and maintaining the website</li>
                <li>Improving website content and usability</li>
                <li>Understanding visitor trends</li>
                <li>Measuring website traffic and engagement</li>
                <li>Monitoring technical performance</li>
                <li>Preventing fraud, abuse or security issues</li>
                <li>Responding to enquiries and correction requests</li>
                <li>Supporting analytics and advertising services</li>
                <li>Complying with applicable legal obligations</li>
              </ul>
            </section>

            <section>
              <h2>Legal Basis and Consent</h2>

              <p>
                Depending on the user&apos;s location and applicable
                law, certain processing may be based on consent,
                legitimate interests, contractual necessity or legal
                obligations.
              </p>

              <p>
                Where consent is required for non-essential cookies,
                personalized advertising or analytics, users may be
                presented with consent choices. Available consent can
                be changed or withdrawn through the relevant consent
                control, browser settings or provider settings.
              </p>
            </section>

            <section>
              <h2>Data Sharing</h2>

              <p>
                GovtPayGuide does not sell job applications, resumes or
                recruitment-related personal information.
              </p>

              <p>
                Limited technical information may be processed by
                service providers that help operate the website,
                provide hosting, measure traffic, display advertising
                or protect the website against misuse.
              </p>

              <p>
                Information may also be disclosed where required by
                law, legal process or a valid request from a competent
                authority.
              </p>
            </section>

            <section>
              <h2>Data Security</h2>

              <p>
                Reasonable technical and organisational measures may
                be used to protect information handled by the website.
                However, no internet transmission, website or
                electronic storage system can be guaranteed to be
                completely secure.
              </p>

              <p>
                Visitors should avoid submitting sensitive personal,
                financial, employment or recruitment information to
                GovtPayGuide.
              </p>
            </section>

            <section>
              <h2>Data Retention</h2>

              <p>
                Information voluntarily submitted to GovtPayGuide may
                be retained only for as long as reasonably necessary
                for the purpose for which it was received, security,
                legal compliance or legitimate website operations.
              </p>

              <p>
                Analytics, advertising and hosting providers may retain
                information according to their own retention policies.
              </p>
            </section>

            <section>
              <h2>Children&apos;s Privacy</h2>

              <p>
                GovtPayGuide is intended as a general informational
                website and is not specifically directed toward
                children.
              </p>

              <p>
                We do not knowingly request children to submit personal
                information, job applications or identity documents
                through the website.
              </p>
            </section>

            <section>
              <h2>Your Privacy Choices</h2>

              <p>
                Depending on your location and applicable law, you may
                have choices or rights concerning personal
                information, cookies and advertising technologies.
              </p>

              <ul className="legal-list">
                <li>Control or delete cookies through browser settings</li>
                <li>Manage personalized advertising through Google Ads Settings</li>
                <li>Use available analytics opt-out tools</li>
                <li>Withdraw consent where consent controls are available</li>
                <li>Contact us regarding information voluntarily submitted to us</li>
              </ul>

              <p>
                You can stop using the website if you do not agree with
                this Privacy Policy.
              </p>
            </section>

            <section>
              <h2>Changes to This Privacy Policy</h2>

              <p>
                GovtPayGuide may update this Privacy Policy when
                website features, recruitment content, third-party
                services, advertising practices or legal requirements
                change.
              </p>

              <p>
                The updated version will be published on this page with
                a revised last-updated date.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>

              <p>
                If you have questions about this Privacy Policy or
                information you voluntarily provided to GovtPayGuide,
                please contact us through the Contact page.
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
                technologies to operate and improve the website.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Recruitment Privacy</h3>

              <p>
                We do not accept job applications, resumes, identity
                documents or recruitment payments.
              </p>
            </div>

            <div className="legal-sidebar-card">
              <h3>Do Not Send</h3>

              <p>
                Avoid sending Aadhaar, PAN, bank details, passwords,
                PPO numbers, certificates or confidential employee
                information.
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