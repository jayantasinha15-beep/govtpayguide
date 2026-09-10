"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

function formatINR(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

export default function AssamPensionCalculatorPage() {
  const [pensionablePay, setPensionablePay] = useState(50000);
  const [pensionPercent, setPensionPercent] = useState(50);
  const [drRate, setDrRate] = useState(58);

  const result = useMemo(() => {
    const safePay = Math.max(0, pensionablePay);
    const safePensionPercent = Math.max(0, pensionPercent);
    const safeDrRate = Math.max(0, drRate);

    const monthlyPension = Math.round(
      (safePay * safePensionPercent) / 100
    );

    const monthlyDR = Math.round(
      (monthlyPension * safeDrRate) / 100
    );

    const pensionPlusDR = monthlyPension + monthlyDR;

    return {
      monthlyPension,
      monthlyDR,
      pensionPlusDR,
      annualPension: monthlyPension * 12,
      annualDR: monthlyDR * 12,
      annualTotal: pensionPlusDR * 12,
    };
  }, [pensionablePay, pensionPercent, drRate]);

  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Assam Government</span>

          <h1>Assam Pension Calculator</h1>

          <p>
            Estimate monthly pension, Dearness Relief and annual pension
            income using pensionable pay and an estimated pension percentage.
          </p>
        </div>
      </section>

      <div className="container state-page-content">
        <section className="calculator-layout">
          <div className="calculator-card">
            <span className="section-label">Pension Inputs</span>

            <h2>Enter Pension Details</h2>

            <div className="calculator-field">
              <label htmlFor="pensionablePay">
                Pensionable Pay / Basic Pay (₹)
              </label>

              <input
                id="pensionablePay"
                type="number"
                min="0"
                value={pensionablePay}
                onChange={(e) =>
                  setPensionablePay(Number(e.target.value))
                }
              />

              <small>
                Enter the pensionable pay or emoluments applicable to your
                pension calculation.
              </small>
            </div>

            <div className="calculator-field">
              <label htmlFor="pensionPercent">
                Pension Percentage (%)
              </label>

              <input
                id="pensionPercent"
                type="number"
                min="0"
                max="100"
                step="0.01"
                value={pensionPercent}
                onChange={(e) =>
                  setPensionPercent(Number(e.target.value))
                }
              />

              <small>
                Default value is 50% for estimation only. Actual pension
                calculation depends on the rules applicable to the employee.
              </small>
            </div>

            <div className="calculator-field">
              <label htmlFor="drRate">
                Dearness Relief Rate (%)
              </label>

              <input
                id="drRate"
                type="number"
                min="0"
                step="0.01"
                value={drRate}
                onChange={(e) =>
                  setDrRate(Number(e.target.value))
                }
              />

              <small>
                Enter the applicable Dearness Relief rate. Default is 58%;
                verify the latest official Assam Government order.
              </small>
            </div>
          </div>

          <div className="calculator-result-card">
            <span className="section-label">Estimated Pension</span>

            <h2>Pension Breakdown</h2>

            <div className="salary-result-list">
              <div>
                <span>Pensionable Pay</span>
                <strong>{formatINR(pensionablePay)}</strong>
              </div>

              <div>
                <span>Pension Percentage</span>
                <strong>{pensionPercent}%</strong>
              </div>

              <div className="result-highlight">
                <span>Monthly Pension</span>
                <strong>
                  {formatINR(result.monthlyPension)}
                </strong>
              </div>

              <div>
                <span>DR Rate</span>
                <strong>{drRate}%</strong>
              </div>

              <div>
                <span>Monthly DR</span>
                <strong>{formatINR(result.monthlyDR)}</strong>
              </div>

              <div className="result-total">
                <span>Pension + DR</span>
                <strong>
                  {formatINR(result.pensionPlusDR)}
                </strong>
              </div>
            </div>

            <div className="annual-result-box">
              <div>
                <span>Annual Pension</span>
                <strong>
                  {formatINR(result.annualPension)}
                </strong>
              </div>

              <div>
                <span>Annual DR</span>
                <strong>
                  {formatINR(result.annualDR)}
                </strong>
              </div>

              <div>
                <span>Annual Pension + DR</span>
                <strong>
                  {formatINR(result.annualTotal)}
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Formula</span>

          <h2>How this pension estimate works</h2>

          <div className="article-formula">
            Estimated Pension = Pensionable Pay × Pension Percentage ÷ 100
          </div>

          <div className="article-formula">
            DR = Estimated Pension × DR Rate ÷ 100
          </div>

          <div className="article-formula">
            Pension + DR = Estimated Pension + DR
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Example</span>

          <h2>Example Pension Calculation</h2>

          <p>
            Suppose pensionable pay is ₹50,000, estimated pension is 50% and
            Dearness Relief is 58%.
          </p>

          <div className="article-table-wrapper">
            <table className="article-table">
              <tbody>
                <tr>
                  <th>Pensionable Pay</th>
                  <td>₹50,000</td>
                </tr>

                <tr>
                  <th>Pension at 50%</th>
                  <td>₹25,000</td>
                </tr>

                <tr>
                  <th>DR at 58%</th>
                  <td>₹14,500</td>
                </tr>

                <tr>
                  <th>Pension + DR</th>
                  <td>
                    <strong>₹39,500</strong>
                  </td>
                </tr>

                <tr>
                  <th>Annual Pension + DR</th>
                  <td>
                    <strong>₹4,74,000</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Important</span>

          <h2>This is an estimate, not a pension sanction</h2>

          <p>
            Pension calculations can depend on qualifying service,
            pensionable emoluments, retirement date, pension category,
            applicable pension rules and Government orders.
          </p>

          <p>
            Therefore, the 50% default shown in this calculator must not be
            treated as the pension entitlement for every Assam Government
            employee.
          </p>

          <div className="article-warning">
            <strong>Important:</strong> The pension amount sanctioned by the
            competent Government authority will always prevail over this
            calculator&apos;s estimate.
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Dearness Relief</span>

          <h2>About the DR rate</h2>

          <p>
            Dearness Relief is calculated on eligible pension or family
            pension according to the applicable Government order.
          </p>

          <p>
            Since DR rates can change, always verify the current rate and
            effective date before using the result for financial planning.
          </p>

          <Link
            href="/state-government/assam/da"
            className="primary-content-button"
          >
            Check Assam DA / DR Update →
          </Link>
        </section>

        <section className="article-section">
          <span className="section-label">Related</span>

          <h2>Related Assam Pension Resources</h2>

          <div className="article-related-links">
            <Link href="/state-government/assam/pension">
              Assam Pension Guide →
            </Link>

            <Link href="/state-government/assam/da">
              Assam DA / DR Updates →
            </Link>

            <Link href="/state-government/assam/salary-calculator">
              Assam Salary Calculator →
            </Link>

            <Link href="/state-government/assam/pay-matrix">
              Assam Pay Structure →
            </Link>
          </div>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> This calculator is provided only for
          general estimation and educational purposes. Actual pension, family
          pension and Dearness Relief depend on the applicable Assam
          Government pension rules, qualifying service, pensionable
          emoluments, retirement conditions and official sanction.
          GovtPayGuide is not affiliated with the Government of Assam.
        </div>
      </div>
    </main>
  );
}