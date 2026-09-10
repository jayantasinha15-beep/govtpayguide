import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assam Government Pension, Family Pension & DR Guide",
  description:
    "Assam Government pension information, family pension, Dearness Relief, retirement benefits and official pension rules for State Government employees.",
  alternates: {
    canonical: "/state-government/assam/pension",
  },
};

export default function AssamPensionPage() {
  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Assam Government</span>

          <h1>Assam Government Pension & Family Pension Guide</h1>

          <p>
            Understand pension, family pension, Dearness Relief and
            retirement-related benefits for eligible Assam Government
            employees and pensioners.
          </p>

          <div className="hero-actions">
            <Link
              href="/state-government/assam/pension-calculator"
              className="btn primary"
            >
              Pension Calculator
            </Link>

            <Link
              href="/state-government/assam/da"
              className="btn secondary"
            >
              View DA / DR Updates
            </Link>
          </div>
        </div>
      </section>

      <div className="container state-page-content">
        <section className="state-update-box">
          <span className="section-label">Pension Overview</span>

          <h2>Assam Government Pension Framework</h2>

          <p>
            Pension and family pension benefits for eligible Assam Government
            employees are governed by applicable pension rules, Government
            notifications and Finance Department orders.
          </p>

          <p>
            The Assam Services (Pension) Rules, 1969 are an important part of
            the State&apos;s pension framework, subject to subsequent
            amendments and Government instructions.
          </p>
        </section>

        <section className="article-section">
          <span className="section-label">Retirement Pension</span>

          <h2>What is pension?</h2>

          <p>
            Pension is a recurring retirement benefit payable to an eligible
            Government employee after retirement, subject to the applicable
            service and pension rules.
          </p>

          <p>
            The actual pension amount can depend on factors such as qualifying
            service, pensionable emoluments, retirement date and the rules
            applicable to the employee.
          </p>
        </section>

        <section className="article-section">
          <span className="section-label">Family Pension</span>

          <h2>What is family pension?</h2>

          <p>
            Family pension is payable to eligible family members of a deceased
            Government employee or pensioner according to the applicable
            pension rules and Government orders.
          </p>

          <p>
            Eligibility, priority among family members, duration of payment and
            the amount payable depend on the rules applicable to the individual
            case.
          </p>

          <div className="article-warning">
            <strong>Important:</strong> Family pension eligibility should not
            be assumed solely from relationship to the employee. Always verify
            the applicable definition of family and eligibility conditions
            under the relevant Assam Government pension rules.
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Dearness Relief</span>

          <h2>Dearness Relief for Assam Pensioners</h2>

          <p>
            Dearness Relief, commonly called DR, is an additional amount paid
            to eligible pensioners and family pensioners to offset the effect of
            inflation.
          </p>

          <p>
            DR rates are revised through Government orders and should be
            checked from the latest Assam Finance Department notification.
          </p>

          <p>
            Assam Finance Department orders relating to DA and DR may cover
            serving Government employees, State Government pensioners, family
            pension holders and other specified pension categories.
          </p>

          <Link
            href="/state-government/assam/da"
            className="primary-content-button"
          >
            View Assam DA / DR Information →
          </Link>
        </section>

        <section className="article-section">
          <span className="section-label">Retirement Benefits</span>

          <h2>Other retirement-related benefits</h2>

          <p>
            Depending on the employee&apos;s service rules and eligibility,
            retirement benefits may include pension-related payments and other
            benefits sanctioned under Government rules.
          </p>

          <div className="article-table-wrapper">
            <table className="article-table">
              <tbody>
                <tr>
                  <th>Pension</th>
                  <td>
                    Monthly retirement benefit subject to applicable rules
                  </td>
                </tr>

                <tr>
                  <th>Family Pension</th>
                  <td>
                    Benefit for eligible family members after death of the
                    employee or pensioner
                  </td>
                </tr>

                <tr>
                  <th>Dearness Relief</th>
                  <td>
                    Additional relief based on the applicable Government rate
                  </td>
                </tr>

                <tr>
                  <th>Gratuity</th>
                  <td>
                    Retirement or death-related benefit subject to eligibility
                    and applicable rules
                  </td>
                </tr>

                <tr>
                  <th>Other Benefits</th>
                  <td>
                    May depend on service category, retirement date and
                    Government orders
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Pension Calculation</span>

          <h2>How is Assam Government pension calculated?</h2>

          <p>
            Exact pension calculation depends on the pension rules applicable
            to the employee and should not be determined from a single generic
            formula without checking the relevant service conditions.
          </p>

          <p>
            Factors that may be relevant include pensionable pay or
            emoluments, qualifying service and applicable Government pension
            orders.
          </p>

          <div className="article-warning">
            <strong>Note:</strong> The calculator on GovtPayGuide should be
            treated as an estimate only. The final pension sanctioned by the
            competent authority will prevail.
          </div>

          <Link
            href="/state-government/assam/pension-calculator"
            className="primary-content-button"
          >
            Open Assam Pension Calculator →
          </Link>
        </section>

        <section className="article-section">
          <span className="section-label">Compassionate Family Pension</span>

          <h2>Compassionate Family Pension</h2>

          <p>
            Assam also has Government provisions relating to Compassionate
            Family Pension in specified cases involving employees who die in
            harness.
          </p>

          <p>
            Eligibility and benefit conditions under such schemes are separate
            from ordinary retirement pension and should be verified from the
            applicable Government policy or Finance Department order.
          </p>
        </section>

        <section className="article-section">
          <span className="section-label">Documents</span>

          <h2>Documents commonly required for pension processing</h2>

          <p>
            Exact requirements can vary by department and pension category,
            but pension processing may involve service records, retirement
            details, bank information, identification documents and other
            forms prescribed by the competent authority.
          </p>

          <p>
            Employees and pensioners should obtain the current document list
            from their department, pension sanctioning authority or official
            Government instructions.
          </p>
        </section>

        <section className="article-section">
          <span className="section-label">Official Source</span>

          <h2>Where to verify Assam pension rules</h2>

          <p>
            The Finance Department, Government of Assam is responsible for
            rules relating to pay, leave and pension of State Government
            employees.
          </p>

          <div className="article-source-links">
            <a
              href="https://finance.assam.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Assam Finance Department →
            </a>

            <a
              href="https://finance.assam.gov.in/documents/office-memorandum"
              target="_blank"
              rel="noopener noreferrer"
            >
              Finance Department Office Memoranda →
            </a>
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Related</span>

          <h2>Related Assam Government Information</h2>

          <div className="article-related-links">
            <Link href="/state-government/assam/pension-calculator">
              Assam Pension Calculator →
            </Link>

            <Link href="/state-government/assam/da">
              Assam DA / DR Updates →
            </Link>

            <Link href="/state-government/assam/pay-matrix">
              Assam Pay Matrix →
            </Link>

            <Link href="/state-government/assam/salary-calculator">
              Assam Salary Calculator →
            </Link>
          </div>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> GovtPayGuide is an independent
          informational website and is not affiliated with the Government of
          Assam. Pension, family pension, Dearness Relief and retirement
          benefits depend on the rules applicable to each individual case.
          Always verify entitlement and calculations from official Government
          orders and the competent pension authority.
        </div>
      </div>
    </main>
  );
}