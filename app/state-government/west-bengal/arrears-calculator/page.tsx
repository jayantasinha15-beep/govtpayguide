"use client";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";
import { useMemo, useState } from "react";
import Link from "next/link";

export default function WestBengalArrearsCalculatorPage() {
  const [basicPay, setBasicPay] = useState("40000");
  const [oldDaRate, setOldDaRate] = useState("");
  const [newDaRate, setNewDaRate] = useState("");
  const [months, setMonths] = useState("6");

  const formatMoney = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(value);

  const result = useMemo(() => {
    const basic = Math.max(Number(basicPay) || 0, 0);
    const oldRate = Math.max(Number(oldDaRate) || 0, 0);
    const newRate = Math.max(Number(newDaRate) || 0, 0);
    const totalMonths = Math.max(Number(months) || 0, 0);

    const oldMonthlyDA = (basic * oldRate) / 100;
    const newMonthlyDA = (basic * newRate) / 100;

    const rateDifference = newRate - oldRate;
    const monthlyDifference = newMonthlyDA - oldMonthlyDA;

    const totalArrears = monthlyDifference * totalMonths;

    return {
      basic,
      oldMonthlyDA,
      newMonthlyDA,
      rateDifference,
      monthlyDifference,
      totalMonths,
      totalArrears,
    };
  }, [basicPay, oldDaRate, newDaRate, months]);

  const hasNegativeDifference = result.rateDifference < 0;

  return (
    <main>
      <CalculatorJsonLd
  name="West Bengal DA Arrears Calculator"
  description="Estimate West Bengal Government DA arrears using Basic Pay, old DA rate, new DA rate and eligible months."
  url="/state-government/west-bengal/arrears-calculator"
/>
      {/* HERO */}
      <section className="wb-arrears-hero">
        <div className="container">
          <span className="page-badge">West Bengal Government</span>

          <h1>West Bengal DA Arrears Calculator</h1>

          <p>
            Estimate DA arrears using Basic Pay, old DA rate, revised DA rate
            and the number of applicable months.
          </p>
        </div>
      </section>

      <div className="container wb-arrears-page">
        {/* CALCULATOR */}
        <section className="wb-arrears-calculator">
          <div className="calculator-heading">
            <span>WB DA Tool</span>

            <h2>Calculate Estimated DA Arrears</h2>

            <p>
              Enter the Basic Pay and DA rates applicable to the arrears period.
            </p>
          </div>

          <div className="wb-arrears-input-grid">
            {/* BASIC PAY */}
            <div className="form-group">
              <label htmlFor="basicPay">Basic Pay</label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="basicPay"
                  type="number"
                  min="0"
                  value={basicPay}
                  onChange={(e) => setBasicPay(e.target.value)}
                />
              </div>
            </div>

            {/* OLD DA */}
            <div className="form-group">
              <label htmlFor="oldDaRate">Old DA Rate</label>

              <div className="input-wrap">
                <input
                  id="oldDaRate"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Example: 14"
                  value={oldDaRate}
                  onChange={(e) => setOldDaRate(e.target.value)}
                />

                <span>%</span>
              </div>
            </div>

            {/* NEW DA */}
            <div className="form-group">
              <label htmlFor="newDaRate">New / Revised DA Rate</label>

              <div className="input-wrap">
                <input
                  id="newDaRate"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Example: 18"
                  value={newDaRate}
                  onChange={(e) => setNewDaRate(e.target.value)}
                />

                <span>%</span>
              </div>
            </div>

            {/* MONTHS */}
            <div className="form-group">
              <label htmlFor="months">Number of Months</label>

              <div className="input-wrap">
                <input
                  id="months"
                  type="number"
                  min="0"
                  step="1"
                  value={months}
                  onChange={(e) => setMonths(e.target.value)}
                />

                <span>Months</span>
              </div>
            </div>
          </div>

          {hasNegativeDifference && (
            <div className="wb-arrears-warning">
              <strong>Check the DA rates:</strong> The revised DA rate is lower
              than the old DA rate, so the calculated difference is negative.
            </div>
          )}

          {/* RESULT */}
          <div className="wb-arrears-results">
            <div className="wb-arrears-main-result">
              <span>Estimated DA Arrears</span>

              <strong>
                ₹{formatMoney(result.totalArrears)}
              </strong>

              <small>
                For {result.totalMonths} month
                {result.totalMonths === 1 ? "" : "s"}
              </small>
            </div>

            <div className="wb-arrears-result-grid">
              <div>
                <span>Basic Pay</span>
                <strong>₹{formatMoney(result.basic)}</strong>
              </div>

              <div>
                <span>Old Monthly DA</span>
                <strong>
                  ₹{formatMoney(result.oldMonthlyDA)}
                </strong>
              </div>

              <div>
                <span>New Monthly DA</span>
                <strong>
                  ₹{formatMoney(result.newMonthlyDA)}
                </strong>
              </div>

              <div>
                <span>DA Rate Difference</span>
                <strong>{result.rateDifference}%</strong>
              </div>

              <div>
                <span>Monthly Difference</span>
                <strong>
                  ₹{formatMoney(result.monthlyDifference)}
                </strong>
              </div>

              <div>
                <span>Arrears Period</span>
                <strong>
                  {result.totalMonths} month
                  {result.totalMonths === 1 ? "" : "s"}
                </strong>
              </div>
            </div>
          </div>

          <div className="calculator-note">
            <strong>Formula:</strong> Basic Pay × (New DA Rate − Old DA Rate)
            ÷ 100 × Number of Months
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="article-section">
          <span className="section-kicker">Calculation</span>

          <h2>How West Bengal DA Arrears are Calculated</h2>

          <p>
            A simplified DA arrears estimate can be calculated by finding the
            difference between the revised DA rate and the earlier DA rate,
            applying that difference to Basic Pay, and multiplying by the
            applicable number of months.
          </p>

          <div className="formula-box">
            DA Arrears = Basic Pay × (New DA % − Old DA %) ÷ 100 × Months
          </div>
        </section>

        {/* EXAMPLE */}
        <section className="article-section">
          <h2>Example Calculation</h2>

          <p>
            Suppose an employee has a Basic Pay of ₹40,000 and DA changes from
            14% to 18% for 6 months.
          </p>

          <div className="example-box">
            <p>
              Basic Pay: <strong>₹40,000</strong>
            </p>

            <p>
              Old DA Rate: <strong>14%</strong>
            </p>

            <p>
              New DA Rate: <strong>18%</strong>
            </p>

            <p>
              Difference: <strong>4%</strong>
            </p>

            <p>
              Monthly Difference: <strong>₹1,600</strong>
            </p>

            <p>
              6-Month Estimated Arrears:
              <strong> ₹9,600</strong>
            </p>
          </div>
        </section>

        {/* IMPORTANT */}
        <section className="article-section">
          <h2>Why Actual DA Arrears May Differ</h2>

          <p>
            A simple calculator assumes the same Basic Pay throughout the
            selected period. Actual arrears can differ if Basic Pay changed
            because of annual increment, promotion, pay fixation, retirement or
            other service events.
          </p>

          <p>
            Government orders can also specify the exact eligible period,
            payment method, employee category and other conditions.
          </p>
        </section>

        {/* LINKS */}
        <section className="article-section">
          <h2>West Bengal DA Resources</h2>

          <div className="wb-arrears-actions">
            <Link
              href="/state-government/west-bengal/da"
              className="content-button"
            >
              View WB DA Information
            </Link>

            <Link
              href="/state-government/west-bengal/da-calculator"
              className="secondary-content-button"
            >
              WB DA Calculator
            </Link>

            <Link
              href="/state-government/west-bengal/pay-matrix"
              className="secondary-content-button"
            >
              WB Pay Matrix
            </Link>
          </div>
        </section>

        {/* DISCLAIMER */}
        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> This calculator provides a simplified
          estimate only. Actual DA arrears depend on applicable West Bengal
          Government orders, eligible periods, Basic Pay changes, service
          status and departmental calculations. Always verify the official
          Finance Department notification and salary records.
        </div>
      </div>
    </main>
  );
}