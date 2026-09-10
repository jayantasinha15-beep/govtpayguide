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

export default function AssamDACalculatorPage() {
  const [basicPay, setBasicPay] = useState(30000);
  const [daRate, setDaRate] = useState(58);

  const result = useMemo(() => {
    const safeBasicPay = Math.max(0, basicPay);
    const safeDaRate = Math.max(0, daRate);

    const daAmount = Math.round(
      (safeBasicPay * safeDaRate) / 100
    );

    return {
      daAmount,
      basicPlusDA: safeBasicPay + daAmount,
      annualDA: daAmount * 12,
    };
  }, [basicPay, daRate]);

  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Assam Government</span>

          <h1>Assam DA Calculator</h1>

          <p>
            Calculate Dearness Allowance for Assam Government employees
            using your Basic Pay and the applicable DA percentage.
          </p>
        </div>
      </section>

      <div className="container state-page-content">
        <section className="calculator-layout">
          <div className="calculator-card">
            <span className="section-label">DA Inputs</span>

            <h2>Enter Your Details</h2>

            <div className="calculator-field">
              <label htmlFor="basicPay">Basic Pay (₹)</label>

              <input
                id="basicPay"
                type="number"
                min="0"
                value={basicPay}
                onChange={(e) =>
                  setBasicPay(Number(e.target.value))
                }
              />

              <small>
                Enter the Basic Pay applicable to your salary structure.
              </small>
            </div>

            <div className="calculator-field">
              <label htmlFor="daRate">DA Rate (%)</label>

              <input
                id="daRate"
                type="number"
                min="0"
                step="0.01"
                value={daRate}
                onChange={(e) =>
                  setDaRate(Number(e.target.value))
                }
              />

              <small>
                Default value is 58%. Verify the latest applicable DA rate
                from an official Assam Government Finance Department order.
              </small>
            </div>
          </div>

          <div className="calculator-result-card">
            <span className="section-label">DA Result</span>

            <h2>Calculation Result</h2>

            <div className="salary-result-list">
              <div>
                <span>Basic Pay</span>
                <strong>{formatINR(basicPay)}</strong>
              </div>

              <div>
                <span>DA Rate</span>
                <strong>{daRate}%</strong>
              </div>

              <div className="result-highlight">
                <span>Monthly DA</span>
                <strong>{formatINR(result.daAmount)}</strong>
              </div>

              <div className="result-total">
                <span>Basic + DA</span>
                <strong>{formatINR(result.basicPlusDA)}</strong>
              </div>
            </div>

            <div className="annual-result-box">
              <div>
                <span>Annual DA</span>
                <strong>{formatINR(result.annualDA)}</strong>
              </div>

              <div>
                <span>Monthly DA Rate</span>
                <strong>{daRate}%</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Formula</span>

          <h2>How Assam DA is Calculated</h2>

          <div className="article-formula">
            DA = Basic Pay × DA Rate ÷ 100
          </div>

          <p>
            For example, if Basic Pay is ₹30,000 and DA is 58%:
          </p>

          <div className="article-formula">
            ₹30,000 × 58 ÷ 100 = ₹17,400
          </div>

          <p>
            Therefore, monthly DA would be ₹17,400 and Basic Pay plus DA
            would be ₹47,400.
          </p>
        </section>

        <section className="article-section">
          <span className="section-label">Important</span>

          <h2>Which DA rate should you use?</h2>

          <p>
            Use only the DA rate applicable to your salary and effective
            period. DA rates can be revised by the Assam Government through
            Finance Department orders.
          </p>

          <div className="article-warning">
            <strong>Note:</strong> The default rate in this calculator is
            provided for convenience. Always confirm the applicable rate and
            effective date from the latest official Government order before
            relying on the result.
          </div>

          <Link
            href="/state-government/assam/da"
            className="primary-content-button"
          >
            View Assam DA Latest Update →
          </Link>
        </section>

        <section className="article-section">
          <span className="section-label">Related</span>

          <h2>Related Assam Salary Tools</h2>

          <div className="article-related-links">
            <Link href="/state-government/assam/salary-calculator">
              Assam Salary Calculator →
            </Link>

            <Link href="/state-government/assam/arrears-calculator">
              Assam DA Arrears Calculator →
            </Link>

            <Link href="/state-government/assam/pay-matrix">
              Assam Pay Matrix →
            </Link>

            <Link href="/state-government/assam/da">
              Assam DA Updates →
            </Link>
          </div>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> This calculator is for informational
          purposes only. Actual DA entitlement depends on the applicable
          Assam Government Finance Department order, employee category,
          effective date and service conditions. GovtPayGuide is not
          affiliated with the Government of Assam.
        </div>
      </div>
    </main>
  );
}