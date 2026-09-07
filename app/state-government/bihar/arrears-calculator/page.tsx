"use client";

import { useMemo, useState } from "react";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(value || 0));
}

export default function BiharDAArrearsCalculatorPage() {
  const [basicPay, setBasicPay] = useState(40000);
  const [oldDaRate, setOldDaRate] = useState(58);
  const [newDaRate, setNewDaRate] = useState(60);
  const [months, setMonths] = useState(4);

  const result = useMemo(() => {
    const oldDA = (basicPay * oldDaRate) / 100;
    const newDA = (basicPay * newDaRate) / 100;
    const monthlyDifference = newDA - oldDA;
    const totalArrears = monthlyDifference * months;

    return {
      oldDA,
      newDA,
      monthlyDifference,
      totalArrears,
    };
  }, [basicPay, oldDaRate, newDaRate, months]);

  return (
    <main>
      <CalculatorJsonLd
        name="Bihar DA Arrears Calculator"
        description="Estimate Bihar Government DA arrears using Basic Pay, old DA rate, revised DA rate and number of months."
        url="/state-government/bihar/arrears-calculator"
      />

      {/* HERO */}
      <section className="bihar-arrears-hero">
        <div className="container">
          <span className="page-badge">Bihar Government Calculator</span>

          <h1>Bihar DA Arrears Calculator</h1>

          <p>
            Estimate Dearness Allowance arrears by comparing the old DA rate
            with the revised DA rate for a selected number of months.
          </p>
        </div>
      </section>

      <div className="container bihar-arrears-page">
        {/* CALCULATOR */}
        <div className="bihar-arrears-grid">
          <section className="bihar-arrears-card">
            <div className="calculator-heading">
              <span className="section-kicker">Arrears Inputs</span>

              <h2>Enter DA Revision Details</h2>

              <p>
                Enter the Basic Pay, old DA percentage, revised DA percentage
                and the number of months for which you want to estimate the
                difference.
              </p>
            </div>

            <div className="bihar-arrears-input-grid">
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
                  Enter the eligible Basic Pay applicable to the arrears period.
                </small>
              </label>

              <label>
                <span>Old DA Rate (%)</span>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={oldDaRate}
                  onChange={(e) =>
                    setOldDaRate(Math.max(Number(e.target.value), 0))
                  }
                />

                <small>
                  Enter the DA percentage applicable before the revision.
                </small>
              </label>

              <label>
                <span>New DA Rate (%)</span>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={newDaRate}
                  onChange={(e) =>
                    setNewDaRate(Math.max(Number(e.target.value), 0))
                  }
                />

                <small>
                  Enter the revised DA percentage applicable to the period.
                </small>
              </label>

              <label>
                <span>Number of Months</span>

                <input
                  type="number"
                  min="1"
                  step="1"
                  value={months}
                  onChange={(e) =>
                    setMonths(Math.max(Math.floor(Number(e.target.value)), 1))
                  }
                />

                <small>
                  Enter the number of months covered by the arrears estimate.
                </small>
              </label>
            </div>

            <div className="formula-box">
              Total Arrears = Monthly DA Difference × Number of Months
            </div>
          </section>

          {/* RESULT */}
          <section className="bihar-arrears-results">
            <div className="bihar-arrears-result-head">
              <span>Estimated DA Arrears</span>

              <strong>₹{formatMoney(result.totalArrears)}</strong>

              <p>
                For {months} month{months !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="bihar-arrears-result-list">
              <div>
                <span>Basic Pay</span>
                <strong>₹{formatMoney(basicPay)}</strong>
              </div>

              <div>
                <span>Old DA ({oldDaRate}%)</span>
                <strong>₹{formatMoney(result.oldDA)}</strong>
              </div>

              <div>
                <span>New DA ({newDaRate}%)</span>
                <strong>₹{formatMoney(result.newDA)}</strong>
              </div>

              <div className="bihar-arrears-difference">
                <span>Monthly DA Difference</span>
                <strong>₹{formatMoney(result.monthlyDifference)}</strong>
              </div>

              <div>
                <span>Arrears Period</span>
                <strong>
                  {months} month{months !== 1 ? "s" : ""}
                </strong>
              </div>

              <div className="bihar-arrears-total">
                <span>Total Estimated Arrears</span>
                <strong>₹{formatMoney(result.totalArrears)}</strong>
              </div>
            </div>
          </section>
        </div>

        {/* EXPLANATION */}
        <section className="article-section">
          <span className="section-kicker">Calculation Guide</span>

          <h2>How Bihar DA Arrears are Estimated</h2>

          <p>
            When a revised DA rate becomes effective from an earlier date, the
            difference between the old DA amount and revised DA amount may need
            to be calculated for the applicable period.
          </p>

          <div className="formula-box">
            Old DA = Basic Pay × Old DA Rate ÷ 100
          </div>

          <div className="formula-box">
            New DA = Basic Pay × New DA Rate ÷ 100
          </div>

          <div className="formula-box">
            Monthly Difference = New DA − Old DA
          </div>

          <div className="formula-box">
            Estimated Arrears = Monthly Difference × Number of Months
          </div>
        </section>

        {/* EXAMPLE */}
        <section className="article-section">
          <span className="section-kicker">Example</span>

          <h2>DA Arrears Calculation Example</h2>

          <div className="bihar-arrears-example">
            <div>
              <span>Basic Pay</span>
              <strong>₹40,000</strong>
            </div>

            <div>
              <span>Old DA</span>
              <strong>58%</strong>
            </div>

            <div>
              <span>New DA</span>
              <strong>60%</strong>
            </div>

            <div>
              <span>Period</span>
              <strong>4 Months</strong>
            </div>
          </div>

          <div className="example-box">
            <p>
              Old DA: <strong>₹23,200</strong>
            </p>

            <p>
              New DA: <strong>₹24,000</strong>
            </p>

            <p>
              Monthly Difference: <strong>₹800</strong>
            </p>

            <p>
              Estimated 4-Month Arrears: <strong>₹3,200</strong>
            </p>
          </div>

          <p className="source-note">
            This is only a simple example. If Basic Pay changed during the
            arrears period, each salary period should be calculated separately.
          </p>
        </section>

        {/* IMPORTANT */}
        <section className="bihar-arrears-warning">
          <span className="section-kicker">Important</span>

          <h2>Basic Pay Can Change During the Arrears Period</h2>

          <p>
            This calculator assumes the same Basic Pay for every month entered.
            Actual arrears may differ if Basic Pay changed because of annual
            increment, promotion, pay fixation, retirement or another service
            event.
          </p>

          <p>
            In such cases, calculate each Basic Pay period separately and add
            the results.
          </p>
        </section>

        {/* WHAT MAY AFFECT */}
        <section className="bihar-arrears-info-grid">
          <div>
            <span>Increment</span>
            <h3>Basic Pay Revision</h3>

            <p>
              Annual increment during the arrears period can change the DA
              amount payable for later months.
            </p>
          </div>

          <div>
            <span>Promotion</span>
            <h3>Pay Fixation</h3>

            <p>
              Promotion or revised pay fixation can require the arrears period
              to be split into different Basic Pay amounts.
            </p>
          </div>

          <div>
            <span>Government Order</span>
            <h3>Payment Conditions</h3>

            <p>
              Effective date and actual payment instructions depend on the
              relevant Bihar Government order.
            </p>
          </div>
        </section>

        {/* OFFICIAL */}
        <section className="bihar-arrears-official">
          <div>
            <span className="section-kicker">Official Verification</span>

            <h2>Verify the Arrears Order</h2>

            <p>
              Check the applicable Bihar Finance Department notification for
              the revised rate, effective date, eligibility and payment
              instructions before treating any estimate as payable arrears.
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
          <strong>Disclaimer:</strong> This calculator provides a simplified
          estimate only. Actual DA arrears can vary because of Basic Pay
          changes, increment dates, pay fixation, eligibility, rounding rules
          and Government payment instructions. GovtPayGuide is an independent
          informational website and is not affiliated with the Government of
          Bihar.
        </div>
      </div>
    </main>
  );
}