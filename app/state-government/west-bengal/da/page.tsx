import type { Metadata } from "next";
import Link from "next/link";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
export const metadata: Metadata = {
  title: "West Bengal DA Rate 2026, Latest Update & Arrears",
  description:
    "West Bengal Government DA information, latest notified DA rate, effective date, DA calculation, arrears and official order references.",
alternates: {
  canonical: "/state-government/west-bengal/da",
},
};

export default function WestBengalDAPage() {
  return (
    <main>
      <ArticleJsonLd
  title="Dearness Allowance (DA) Guide for Government Employees"
  description="Understand Dearness Allowance, DA calculation, revision, fitment and how DA affects government salary."
  url="/da"
/>

<BreadcrumbJsonLd
  items={[
    { name: "Home", path: "/" },
    { name: "DA Guide", path: "/da" },
  ]}
/>
      <section className="wb-da-hero">
        <div className="container">
          <span className="page-badge">West Bengal Government</span>

          <h1>West Bengal Dearness Allowance (DA)</h1>

          <p>
            Latest notified DA information, effective dates, calculation,
            arrears and official Finance Department references for West Bengal
            Government employees.
          </p>
        </div>
      </section>

      <div className="container wb-da-page">
        <div className="wb-da-layout">
          <div className="wb-da-main">

            <section className="wb-da-current-card">
              <div>
                <span className="wb-da-small-label">
                  Latest Notified Rate
                </span>

                <h2>38% DA</h2>

                <p>
                  of Basic Pay under the revised pay structure
                </p>
              </div>

              <div className="wb-da-effective">
                <span>Effective From</span>
                <strong>1 October 2026</strong>
              </div>
            </section>

            <div className="wb-da-order-note">
              <strong>Official Order:</strong> West Bengal Finance Department
              Memo No. 2834-F(P2), dated 4 August 2026.
            </div>

            <section className="article-section">
              <span className="section-kicker">
                Latest West Bengal DA
              </span>

              <h2>West Bengal DA Rate 2026</h2>

              <p>
                The West Bengal Government has notified Dearness Allowance at
                38% of Basic Pay for eligible employees drawing pay under the
                revised pay structure, effective from 1 October 2026.
              </p>

              <p>
                The applicable rate and eligibility should always be checked
                against the relevant Finance Department memorandum and the
                employee&apos;s applicable service and pay rules.
              </p>
            </section>

            <section className="article-section">
              <h2>How West Bengal DA is Calculated</h2>

              <p>
                For an employee where DA is calculated as a percentage of Basic
                Pay, the simplified calculation is:
              </p>

              <div className="formula-box">
                DA Amount = Basic Pay × DA Rate ÷ 100
              </div>

              <h3>Example</h3>

              <div className="example-box">
                <p>
                  Basic Pay: <strong>₹40,000</strong>
                </p>

                <p>
                  DA Rate: <strong>38%</strong>
                </p>

                <p>
                  Monthly DA:
                  <strong> ₹15,200</strong>
                </p>
              </div>

              <Link
                href="/state-government/west-bengal/da-calculator"
                className="content-button"
              >
                Open WB DA Calculator
              </Link>
            </section>

            <section className="article-section">
              <h2>West Bengal DA Rate Timeline</h2>

              <div className="table-wrap">
                <table className="da-table">
                  <thead>
                    <tr>
                      <th>Effective Date</th>
                      <th>DA Rate</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>1 October 2026</td>
                      <td>38%</td>
                      <td>
                        <span className="status-current">
                          Notified
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Previous applicable period</td>
                      <td>18%</td>
                      <td>Previous rate</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="source-note">
                Rates shown here should be updated whenever a new West Bengal
                Finance Department order is issued.
              </p>
            </section>

            <section className="article-section">
              <span className="section-kicker">
                Arrears
              </span>

              <h2>West Bengal DA Arrears</h2>

              <p>
                DA arrears are a separate issue from the current DA rate.
                Arrears may relate to earlier periods and can be governed by
                separate court directions, government notifications and payment
                procedures.
              </p>

              <div className="wb-arrears-info">
                <h3>2026 Arrears Notifications</h3>

                <p>
                  In March 2026, the West Bengal Finance Department issued
                  separate notifications dealing with DA arrears for serving
                  State Government employees and Dearness Allowance/Relief
                  arrears for pensioners and former employees.
                </p>
              </div>

              <Link
                href="/state-government/west-bengal/arrears-calculator"
                className="content-button"
              >
                WB DA Arrears Calculator
              </Link>
            </section>

            <section className="article-section">
              <h2>DA for Pensioners</h2>

              <p>
                Pensioners and family pensioners generally receive Dearness
                Relief (DR) rather than employee DA. The applicable rate,
                eligibility and arrears may be governed by separate orders.
              </p>

              <Link
                href="/state-government/west-bengal/pension"
                className="text-link"
              >
                View West Bengal Pension & DR Guide →
              </Link>
            </section>

            <section className="article-section">
              <h2>Frequently Asked Questions</h2>

              <div className="faq-item">
                <h3>What is the notified West Bengal DA rate?</h3>

                <p>
                  The notified revised-pay DA rate is 38% of Basic Pay with
                  effect from 1 October 2026.
                </p>
              </div>

              <div className="faq-item">
                <h3>Is West Bengal DA the same as Central Government DA?</h3>

                <p>
                  No. Central Government and West Bengal Government DA are
                  governed by separate orders and should not be treated as the
                  same rate.
                </p>
              </div>

              <div className="faq-item">
                <h3>Is DA calculated on gross salary?</h3>

                <p>
                  DA is generally calculated using the applicable Basic Pay
                  under the relevant pay structure, not the employee&apos;s
                  total gross salary.
                </p>
              </div>

              <div className="faq-item">
                <h3>Does a DA increase automatically mean arrears?</h3>

                <p>
                  Not necessarily. Arrears depend on the effective date, payment
                  date and applicable government order.
                </p>
              </div>
            </section>

            <div className="calculator-disclaimer">
              <strong>Disclaimer:</strong> GovtPayGuide is an independent
              informational website and is not affiliated with the Government
              of West Bengal. Government notifications and official department
              records take precedence over information shown on this page.
            </div>
          </div>

          <aside className="wb-da-sidebar">
            <div className="sidebar-card">
              <h3>West Bengal Tools</h3>

              <Link href="/state-government/west-bengal/salary-calculator">
                WB Salary Calculator
              </Link>

              <Link href="/state-government/west-bengal/da-calculator">
                WB DA Calculator
              </Link>

              <Link href="/state-government/west-bengal/arrears-calculator">
                WB Arrears Calculator
              </Link>

              <Link href="/state-government/west-bengal/pension-calculator">
                WB Pension Calculator
              </Link>
            </div>

            <div className="sidebar-card">
              <h3>West Bengal Guides</h3>

              <Link href="/state-government/west-bengal">
                WB Government Salary
              </Link>

              <Link href="/state-government/west-bengal/pay-structure">
                ROPA Pay Structure
              </Link>

              <Link href="/state-government/west-bengal/pension">
                Pension & DR
              </Link>
            </div>

            <div className="sidebar-warning">
              <strong>Official Source</strong>

              <p>
                Verify DA orders through the West Bengal Finance Department
                before relying on any rate for salary or service-related
                decisions.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}