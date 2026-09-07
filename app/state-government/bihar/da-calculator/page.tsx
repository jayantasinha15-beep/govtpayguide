"use client";

import { useMemo, useState } from "react";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(value || 0));
}

export default function BiharDACalculatorPage() {
  const [basicPay, setBasicPay] = useState(40000);
  const [daRate, setDaRate] = useState(60);

  const result = useMemo(() => {
    const monthlyDA = (basicPay * daRate) / 100;
    const basicPlusDA = basicPay + monthlyDA;
    const annualDA = monthlyDA * 12;

    return {
      monthlyDA,
      basicPlusDA,
      annualDA,
    };
  }, [basicPay, daRate]);

  return (
    <main>
      <CalculatorJsonLd
        name="Bihar DA Calculator"
        description="Calculate Bihar Government Dearness Allowance using Basic Pay and applicable DA percentage."
        url="/state-government/bihar/da-calculator"
      />

      <section className="bihar-da-calc-hero">
        <div className="container">
          <span className="page-badge">Bihar Government Calculator</span>

          <h1>Bihar DA Calculator</h1>

          <p>
            Calculate monthly Dearness Allowance, Basic Pay plus DA and annual
            DA using your eligible Basic Pay and applicable Bihar Government DA
            rate.
          </p>
        </div>
      </section>

      <div className="container bihar-da-calc-page">
        <div className="bihar-da-calc-grid">
          <section className="bihar-da-calc-card">
            <div className="calculator-heading">
              <span className="section-kicker">DA Inputs</span>
              <h2>Enter Basic Pay & DA Rate</h2>

              <p>
                Use your current eligible Basic Pay and the DA percentage
                applicable to the salary period you want to calculate.
              </p>
            </div>

            <div className="bihar-da-calc-inputs">
              <label>
                <span>Basic Pay (₹)</span>

                <input
                  type="number"
                  min="0"
                  value={basicPay}
                  onChange={(e) =>
                    setBasicPay(Math.max(Number(e.target.value), 0))
                  }
                />

                <small>
                  Enter eligible Basic Pay from your salary or pay-fixation
                  record.
                </small>
              </label>

              <label>
                <span>DA Rate (%)</span>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={daRate}
                  onChange={(e) =>
                    setDaRate(Math.max(Number(e.target.value), 0))
                  }
                />

                <small>
                  60% is prefilled for the notified rate effective from
                  1 January 2026. Change it for another applicable period.
                </small>
              </label>
            </div>

            <div className="formula-box">
              Monthly DA = Basic Pay × DA Rate ÷ 100
            </div>
          </section>

          <section className="bihar-da-calc-results">
            <div className="bihar-da-calc-result-head">
              <span>Monthly Dearness Allowance</span>

              <strong>₹{formatMoney(result.monthlyDA)}</strong>

              <p>
                Based on ₹{formatMoney(basicPay)} Basic Pay at {daRate}% DA
              </p>
            </div>

            <div className="bihar-da-calc-result-list">
              <div>
                <span>Basic Pay</span>
                <strong>₹{formatMoney(basicPay)}</strong>
              </div>

              <div>
                <span>DA Rate</span>
                <strong>{daRate}%</strong>
              </div>

              <div>
                <span>Monthly DA</span>
                <strong>₹{formatMoney(result.monthlyDA)}</strong>
              </div>

              <div className="bihar-da-calc-highlight">
                <span>Basic Pay + DA</span>
                <strong>₹{formatMoney(result.basicPlusDA)}</strong>
              </div>

              <div>
                <span>Annual DA</span>
                <strong>₹{formatMoney(result.annualDA)}</strong>
              </div>
            </div>
          </section>
        </div>

        <section className="article-section">
          <span className="section-kicker">Calculation Guide</span>

          <h2>How Bihar DA is Calculated</h2>

          <p>
            Dearness Allowance is generally calculated by applying the
            applicable DA percentage to eligible Basic Pay.
          </p>

          <div className="formula-box">
            DA Amount = Eligible Basic Pay × Applicable DA Rate ÷ 100
          </div>

          <div className="example-box">
            <p>
              Example Basic Pay: <strong>₹40,000</strong>
            </p>

            <p>
              Example DA Rate: <strong>60%</strong>
            </p>

            <p>
              Monthly DA: <strong>₹24,000</strong>
            </p>

            <p>
              Basic Pay + DA: <strong>₹64,000</strong>
            </p>
          </div>
        </section>

        <section className="bihar-da-calc-info-grid">
          <div>
            <span>Basic Pay</span>
            <h3>Use Eligible Basic Pay</h3>

            <p>
              Do not enter gross salary. DA calculation normally starts from
              the eligible Basic Pay amount.
            </p>
          </div>

          <div>
            <span>DA Rate</span>
            <h3>Use Applicable Period</h3>

            <p>
              DA rates change through Government orders, so choose the rate
              applicable to the month or period you are calculating.
            </p>
          </div>

          <div>
            <span>Salary</span>
            <h3>DA is Only One Component</h3>

            <p>
              HRA, transport allowance, medical allowance and other eligible
              salary components are separate from this DA calculation.
            </p>
          </div>
        </section>

        <section className="bihar-da-calc-warning">
          <span className="section-kicker">Important</span>

          <h2>Do Not Automatically Use Central Government DA</h2>

          <p>
            Bihar Government employees should use the DA rate approved by the
            Bihar Government for their applicable pay structure and period.
          </p>

          <p>
            A Central Government DA announcement should not automatically be
            treated as applicable to Bihar State Government employees.
          </p>
        </section>

        <section className="bihar-da-calc-source">
          <div>
            <span className="section-kicker">Official Verification</span>

            <h2>Check Bihar Finance Department Orders</h2>

            <p>
              Always verify the DA rate, effective date and eligibility from
              the applicable Bihar Finance Department notification.
            </p>
          </div>

          <a
            href="https://state.bihar.gov.in/finance/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-content-button"
          >
            Bihar Finance Department ↗
          </a>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> This calculator provides an estimated DA
          amount for informational purposes. GovtPayGuide is an independent
          website and is not affiliated with the Government of Bihar. Actual DA
          entitlement is governed by official Government orders and service
          records.
        </div>
      </div>
    </main>
  );
}