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

export default function AssamDAArrearsCalculatorPage() {
  const [basicPay, setBasicPay] = useState(30000);
  const [oldDaRate, setOldDaRate] = useState(55);
  const [newDaRate, setNewDaRate] = useState(58);
  const [months, setMonths] = useState(6);

  const result = useMemo(() => {
    const safeBasicPay = Math.max(0, basicPay);
    const safeOldRate = Math.max(0, oldDaRate);
    const safeNewRate = Math.max(0, newDaRate);
    const safeMonths = Math.max(0, Math.floor(months));

    const oldDA = Math.round((safeBasicPay * safeOldRate) / 100);
    const newDA = Math.round((safeBasicPay * safeNewRate) / 100);

    const monthlyDifference = newDA - oldDA;
    const totalArrears = monthlyDifference * safeMonths;

    return {
      oldDA,
      newDA,
      monthlyDifference,
      totalArrears,
      annualDifference: monthlyDifference * 12,
    };
  }, [basicPay, oldDaRate, newDaRate, months]);

  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Assam Government</span>

          <h1>Assam DA Arrears Calculator</h1>

          <p>
            Estimate Dearness Allowance arrears by comparing the old and
            revised DA rates for a selected number of months.
          </p>
        </div>
      </section>

      <div className="container state-page-content">
        <section className="calculator-layout">
          <div className="calculator-card">
            <span className="section-label">Arrears Inputs</span>

            <h2>Enter DA Details</h2>

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
                Enter the Basic Pay applicable during the arrears period.
              </small>
            </div>

            <div className="calculator-field">
              <label htmlFor="oldDaRate">Old DA Rate (%)</label>

              <input
                id="oldDaRate"
                type="number"
                min="0"
                step="0.01"
                value={oldDaRate}
                onChange={(e) =>
                  setOldDaRate(Number(e.target.value))
                }
              />

              <small>
                Enter the DA percentage that was payable before revision.
              </small>
            </div>

            <div className="calculator-field">
              <label htmlFor="newDaRate">New DA Rate (%)</label>

              <input
                id="newDaRate"
                type="number"
                min="0"
                step="0.01"
                value={newDaRate}
                onChange={(e) =>
                  setNewDaRate(Number(e.target.value))
                }
              />

              <small>
                Enter the revised DA percentage applicable to the period.
              </small>
            </div>

            <div className="calculator-field">
              <label htmlFor="months">Number of Months</label>

              <input
                id="months"
                type="number"
                min="0"
                step="1"
                value={months}
                onChange={(e) =>
                  setMonths(Number(e.target.value))
                }
              />

              <small>
                Enter the number of months for which arrears are payable.
              </small>
            </div>
          </div>

          <div className="calculator-result-card">
            <span className="section-label">Estimated Arrears</span>

            <h2>DA Arrears Breakdown</h2>

            <div className="salary-result-list">
              <div>
                <span>Basic Pay</span>
                <strong>{formatINR(basicPay)}</strong>
              </div>

              <div>
                <span>Old DA ({oldDaRate}%)</span>
                <strong>{formatINR(result.oldDA)}</strong>
              </div>

              <div>
                <span>New DA ({newDaRate}%)</span>
                <strong>{formatINR(result.newDA)}</strong>
              </div>

              <div className="result-highlight">
                <span>Monthly DA Difference</span>
                <strong>
                  {formatINR(result.monthlyDifference)}
                </strong>
              </div>

              <div>
                <span>Arrears Period</span>
                <strong>{Math.max(0, Math.floor(months))} months</strong>
              </div>

              <div className="result-total">
                <span>Estimated DA Arrears</span>
                <strong>{formatINR(result.totalArrears)}</strong>
              </div>
            </div>

            <div className="annual-result-box">
              <div>
                <span>Annual DA Difference</span>
                <strong>
                  {formatINR(result.annualDifference)}
                </strong>
              </div>

              <div>
                <span>DA Increase</span>
                <strong>{newDaRate - oldDaRate}%</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Formula</span>

          <h2>How DA Arrears are Calculated</h2>

          <div className="article-formula">
            Old DA = Basic Pay × Old DA Rate ÷ 100
          </div>

          <div className="article-formula">
            New DA = Basic Pay × New DA Rate ÷ 100
          </div>

          <div className="article-formula">
            Monthly DA Difference = New DA − Old DA
          </div>

          <div className="article-formula">
            Total DA Arrears = Monthly DA Difference × Number of Months
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Example</span>

          <h2>Example DA Arrears Calculation</h2>

          <p>
            Suppose Basic Pay is ₹30,000, the old DA rate is 55%, the revised
            DA rate is 58% and arrears are payable for 6 months.
          </p>

          <div className="article-table-wrapper">
            <table className="article-table">
              <tbody>
                <tr>
                  <th>Basic Pay</th>
                  <td>₹30,000</td>
                </tr>

                <tr>
                  <th>Old DA at 55%</th>
                  <td>₹16,500</td>
                </tr>

                <tr>
                  <th>New DA at 58%</th>
                  <td>₹17,400</td>
                </tr>

                <tr>
                  <th>Monthly Difference</th>
                  <td>₹900</td>
                </tr>

                <tr>
                  <th>Arrears Period</th>
                  <td>6 months</td>
                </tr>

                <tr>
                  <th>Total DA Arrears</th>
                  <td>
                    <strong>₹5,400</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Important</span>

          <h2>Actual arrears may differ</h2>

          <p>
            This calculator assumes the same Basic Pay throughout the entire
            arrears period.
          </p>

          <p>
            If Basic Pay changed because of increment, promotion, pay fixation
            or another revision during the period, arrears should ideally be
            calculated month by month using the Basic Pay applicable to each
            month.
          </p>

          <div className="article-warning">
            <strong>Important:</strong> DA revision does not automatically mean
            that arrears are payable for every previous month. The actual
            effective date and arrears entitlement depend on the relevant Assam
            Government order.
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Related</span>

          <h2>Related Assam Salary Tools</h2>

          <div className="article-related-links">
            <Link href="/state-government/assam/da-calculator">
              Assam DA Calculator →
            </Link>

            <Link href="/state-government/assam/salary-calculator">
              Assam Salary Calculator →
            </Link>

            <Link href="/state-government/assam/da">
              Assam DA Latest Update →
            </Link>

            <Link href="/state-government/assam/pay-matrix">
              Assam Pay Matrix →
            </Link>
          </div>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> This calculator provides an approximate
          DA arrears estimate for informational purposes only. Actual arrears
          depend on the applicable Government order, effective date, employee
          eligibility, month-wise Basic Pay and departmental calculation.
          GovtPayGuide is not affiliated with the Government of Assam.
        </div>
      </div>
    </main>
  );
}