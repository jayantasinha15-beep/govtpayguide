import type { Metadata } from "next";
import Link from "next/link";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
export const metadata: Metadata = {
  title: "West Bengal Pension, Family Pension & Dearness Relief Guide",
  description:
    "West Bengal Government pension, family pension, Dearness Relief, pension revision, commutation and arrears information.",
alternates: {
  canonical: "/state-government/west-bengal/pension",
},
};

export default function WestBengalPensionPage() {
  return (
    <main>
      <ArticleJsonLd
  title="West Bengal Pension, Family Pension & Dearness Relief Guide"
  description="West Bengal Government pension, family pension, Dearness Relief, pension revision, commutation and arrears information."
  url="/state-government/west-bengal/pension"
/>

<BreadcrumbJsonLd
  items={[
    { name: "Home", path: "/" },
    { name: "West Bengal", path: "/state-government/west-bengal" },
    { name: "Pension", path: "/state-government/west-bengal/pension" },
  ]}
/>
      {/* HERO */}
      <section className="wb-pension-hero">
        <div className="container">
          <span className="page-badge">West Bengal Government</span>

          <h1>West Bengal Pension & Dearness Relief</h1>

          <p>
            Understand pension, family pension, Dearness Relief, pension
            revision, commutation and arrears for West Bengal Government
            pensioners.
          </p>
        </div>
      </section>

      <div className="container wb-pension-page">
        <div className="wb-pension-layout">
          <div className="wb-pension-main">
            {/* QUICK INFO */}
            <section className="wb-pension-summary">
              <div>
                <span>For Retired Employees</span>
                <strong>Pension</strong>
              </div>

              <div>
                <span>For Eligible Family Members</span>
                <strong>Family Pension</strong>
              </div>

              <div>
                <span>Inflation Relief</span>
                <strong>Dearness Relief</strong>
              </div>
            </section>

            {/* OVERVIEW */}
            <section className="article-section">
              <span className="section-kicker">Overview</span>

              <h2>West Bengal Government Pension</h2>

              <p>
                Pension is a retirement benefit payable to eligible retired
                Government employees under the applicable pension rules and
                government orders.
              </p>

              <p>
                The final pension amount depends on factors such as qualifying
                service, pensionable pay, retirement date, applicable revision
                rules and other service conditions.
              </p>
            </section>

            {/* DR */}
            <section className="article-section">
              <span className="section-kicker">Dearness Relief</span>

              <h2>What is Dearness Relief?</h2>

              <p>
                Dearness Relief, commonly called DR, is an inflation-related
                relief payable on eligible pension or family pension.
              </p>

              <p>
                Serving employees receive Dearness Allowance, while pensioners
                and family pensioners receive Dearness Relief.
              </p>

              <div className="wb-dr-difference">
                <div>
                  <span>Serving Employee</span>
                  <strong>DA</strong>
                  <p>Dearness Allowance on eligible Basic Pay.</p>
                </div>

                <div>
                  <span>Pensioner</span>
                  <strong>DR</strong>
                  <p>Dearness Relief on eligible pension/family pension.</p>
                </div>
              </div>
            </section>

            {/* DR CALCULATION */}
            <section className="article-section">
              <h2>How Dearness Relief is Calculated</h2>

              <p>
                A simplified DR calculation can be expressed as:
              </p>

              <div className="formula-box">
                Monthly DR = Basic Pension × Applicable DR Rate ÷ 100
              </div>

              <div className="example-box">
                <p>
                  Example Basic Pension: <strong>₹20,000</strong>
                </p>

                <p>
                  Example DR Rate: <strong>20%</strong>
                </p>

                <p>
                  Monthly DR: <strong>₹4,000</strong>
                </p>
              </div>

              <p className="source-note">
                The example rate above is only for explaining the formula. Use
                the officially applicable West Bengal DR rate for the relevant
                pension period.
              </p>

              <Link
                href="/state-government/west-bengal/pension-calculator"
                className="content-button"
              >
                Open WB Pension Calculator
              </Link>
            </section>

            {/* CURRENT DR */}
            <section className="article-section">
              <span className="section-kicker">Official Update</span>

              <h2>West Bengal DR Updates</h2>

              <p>
                Dearness Relief rates are revised through West Bengal Finance
                Department orders. Pensioners should verify the applicable rate,
                effective date and eligibility from the latest government
                notification.
              </p>

              <div className="official-source-box">
                <span>2026 Official Update</span>

                <h2>DA / DR Order</h2>

                <p>
                  Finance Department Memo No. 2834-F(P2), dated 4 August 2026,
                  covers Dearness Allowance / Dearness Relief for eligible State
                  Government employees, pensioners and family pensioners with
                  effect from 1 October 2026.
                </p>
              </div>

              <Link
                href="/state-government/west-bengal/da"
                className="text-link"
              >
                View West Bengal DA / DR Update →
              </Link>
            </section>

            {/* FAMILY PENSION */}
            <section className="article-section">
              <span className="section-kicker">Family Pension</span>

              <h2>West Bengal Family Pension</h2>

              <p>
                Family pension may be payable to eligible family members after
                the death of a Government employee or pensioner, subject to the
                applicable pension rules.
              </p>

              <p>
                Eligibility, rate, enhanced family pension period and other
                conditions depend on the relevant pension rules and individual
                service record.
              </p>
            </section>

            {/* COMMUTATION */}
            <section className="article-section">
              <span className="section-kicker">Commutation</span>

              <h2>Pension Commutation</h2>

              <p>
                Commutation allows an eligible pensioner to receive a permitted
                portion of pension as a lump sum, subject to applicable rules.
              </p>

              <p>
                West Bengal Finance Department has also issued clarification
                regarding additional commutation arising from pension revision
                under ROPA 2019.
              </p>

              <div className="wb-pension-note">
                <strong>Important:</strong>

                <p>
                  Commutation affects the monthly pension payable during the
                  applicable restoration period. Always use the sanctioned PPO
                  and official pension authority details.
                </p>
              </div>
            </section>

            {/* ARREARS */}
            <section className="article-section">
              <span className="section-kicker">Arrears</span>

              <h2>Pensioners&apos; DA / DR Arrears</h2>

              <p>
                DA or DR arrears are separate from normal monthly pension.
                Arrears may relate to earlier eligible periods and can be
                governed by special notifications and payment schedules.
              </p>

              <div className="wb-pension-arrears-box">
                <span>2026 Arrears Notification</span>

                <h3>Notification No. 997-F(P2)</h3>

                <p>
                  The Finance Department issued a notification on 13 March
                  2026 regarding DA / DR arrears of current pensioners and
                  erstwhile employees for qualifying periods.
                </p>
              </div>

              <Link
                href="/state-government/west-bengal/arrears-calculator"
                className="secondary-content-button"
              >
                WB DA / DR Arrears Calculator
              </Link>
            </section>

            {/* PENSION PROCESS */}
            <section className="article-section">
              <h2>Typical Pension Components</h2>

              <div className="wb-pension-component-grid">
                <div>
                  <span>01</span>
                  <h3>Basic Pension</h3>
                  <p>
                    Base pension sanctioned according to applicable pension
                    rules.
                  </p>
                </div>

                <div>
                  <span>02</span>
                  <h3>Dearness Relief</h3>
                  <p>
                    Applicable DR is added according to Government orders.
                  </p>
                </div>

                <div>
                  <span>03</span>
                  <h3>Commutation Effect</h3>
                  <p>
                    Monthly pension may reflect the applicable commuted portion.
                  </p>
                </div>

                <div>
                  <span>04</span>
                  <h3>Other Adjustments</h3>
                  <p>
                    Recoveries, additional pension or other applicable benefits
                    can affect final payment.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="article-section">
              <h2>Frequently Asked Questions</h2>

              <div className="faq-item">
                <h3>What is the difference between DA and DR?</h3>

                <p>
                  DA generally applies to serving employees, while DR applies to
                  pensioners and family pensioners.
                </p>
              </div>

              <div className="faq-item">
                <h3>Is DR calculated on gross pension?</h3>

                <p>
                  The applicable government order determines the pension amount
                  on which DR is calculated. Pensioners should use their
                  sanctioned pension details and relevant Finance Department
                  order.
                </p>
              </div>

              <div className="faq-item">
                <h3>Can family pensioners receive DR?</h3>

                <p>
                  Eligible family pensioners can receive Dearness Relief subject
                  to applicable West Bengal Government orders.
                </p>
              </div>

              <div className="faq-item">
                <h3>Is pension automatically revised after every Pay Commission?</h3>

                <p>
                  No. Pension revision depends on Government acceptance,
                  applicable rules, orders and the pensioner&apos;s eligibility.
                </p>
              </div>
            </section>

            {/* DISCLAIMER */}
            <div className="calculator-disclaimer">
              <strong>Disclaimer:</strong> GovtPayGuide is an independent
              informational website and is not affiliated with the Government
              of West Bengal. Pension entitlement, pension revision, DR,
              family pension, commutation and arrears are governed by official
              Government orders, pension rules, PPO and departmental records.
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="wb-pension-sidebar">
            <div className="sidebar-card">
              <h3>West Bengal Pension</h3>

              <Link href="/state-government/west-bengal/pension-calculator">
                Pension Calculator
              </Link>

              <Link href="/state-government/west-bengal/da">
                DA / DR Updates
              </Link>

              <Link href="/state-government/west-bengal/arrears-calculator">
                Arrears Calculator
              </Link>
            </div>

            <div className="sidebar-card">
              <h3>Salary Resources</h3>

              <Link href="/state-government/west-bengal/pay-matrix">
                ROPA Pay Matrix
              </Link>

              <Link href="/state-government/west-bengal/pay-structure">
                ROPA Pay Structure
              </Link>

              <Link href="/state-government/west-bengal/salary-calculator">
                Salary Calculator
              </Link>
            </div>

            <div className="sidebar-warning">
              <strong>Verify Official Records</strong>

              <p>
                PPO, Finance Department orders and Pension Disbursing Authority
                records should be treated as authoritative.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}