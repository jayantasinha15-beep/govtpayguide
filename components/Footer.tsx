import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        {/* BRAND */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            Govt<span>Pay</span>Guide
          </Link>

          <p>
            Independent guides on government salary, DA, Pay Commission,
            pension, recruitment notifications, job preparation and useful
            calculators in India.
          </p>

          <div className="footer-trust-note">
            Independent informational website. Always verify details from
            official sources.
          </div>
        </div>

        {/* CENTRAL GOVERNMENT */}
        <div className="footer-column">
          <h3>Central Government</h3>

          <Link href="/central-government">Central Govt Guide</Link>
          <Link href="/da">DA Updates</Link>
          <Link href="/pay-commission">Pay Commission</Link>
          <Link href="/pay-matrix">Pay Matrix</Link>
          <Link href="/salary-calculator">Salary Calculator</Link>
        </div>

        {/* STATE GOVERNMENT */}
        <div className="footer-column">
          <h3>State Government</h3>

          <Link href="/state-government">All States</Link>
          <Link href="/state-government/west-bengal">
            West Bengal
          </Link>
          <Link href="/state-government/west-bengal/da">
            WB DA
          </Link>
          <Link href="/state-government/west-bengal/pay-matrix">
            WB Pay Matrix
          </Link>
          <Link href="/state-government/west-bengal/pension">
            WB Pension
          </Link>
        </div>

        {/* GOVERNMENT JOBS */}
        <div className="footer-column">
          <h3>Government Jobs</h3>

          <Link href="/government-jobs">
            Government Jobs
          </Link>

          <Link href="/government-jobs/notifications">
            Recruitment Notifications
          </Link>

          <Link href="/government-jobs/guides">
            Job Guides
          </Link>

          <Link href="/updates">
            Latest Updates
          </Link>
        </div>

        {/* CALCULATORS */}
        <div className="footer-column">
          <h3>Calculators</h3>

          <Link href="/calculators">All Calculators</Link>
          <Link href="/salary-calculator">Salary Calculator</Link>
          <Link href="/da-calculator">DA Calculator</Link>
          <Link href="/hra-calculator">HRA Calculator</Link>
          <Link href="/arrears-calculator">
            DA Arrears Calculator
          </Link>
          <Link href="/state-government/west-bengal/pension-calculator">
            WB Pension Calculator
          </Link>
        </div>

        {/* WEBSITE */}
        <div className="footer-column">
          <h3>Website</h3>

          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>

      <div className="container footer-source-box">
        <div>
          <strong>Verify Official Government Sources</strong>

          <p>
            Salary, DA, pension, recruitment vacancies, eligibility,
            application dates and other details may change through official
            notifications. Always verify the information on the concerned
            department or recruitment authority&apos;s official website.
          </p>
        </div>

        <div className="footer-source-links">
          <a
            href="https://doe.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Department of Expenditure ↗
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
  © {year} GovtPayGuide. All rights reserved.{" "}
  <Link
    href="/author/jayanta-singha"
    className="footer-developer"
  >
    Developed by Jayanta Singha.
  </Link>
</p>

          <p>
            Information, recruitment updates and calculator results are for
            general guidance only.
          </p>
        </div>
      </div>
    </footer>
  );
}