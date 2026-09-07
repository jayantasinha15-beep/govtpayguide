"use client";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";
import { useMemo, useState } from "react";

export default function ArrearsCalculatorPage() {
  const [basicPay, setBasicPay] = useState("35400");
  const [oldDA, setOldDA] = useState("");
  const [newDA, setNewDA] = useState("");
  const [months, setMonths] = useState("6");

  const result = useMemo(() => {
    const basic = Math.max(Number(basicPay) || 0, 0);
    const oldRate = Math.max(Number(oldDA) || 0, 0);
    const newRate = Math.max(Number(newDA) || 0, 0);
    const totalMonths = Math.max(Number(months) || 0, 0);

    const oldDAAmount = (basic * oldRate) / 100;
    const newDAAmount = (basic * newRate) / 100;
    const monthlyDifference = newDAAmount - oldDAAmount;
    const totalArrears = monthlyDifference * totalMonths;

    return {
      oldDAAmount,
      newDAAmount,
      monthlyDifference,
      totalArrears,
      rateDifference: newRate - oldRate,
    };
  }, [basicPay, oldDA, newDA, months]);

  const formatMoney = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <main>
      <CalculatorJsonLd
  name="DA Arrears Calculator"
  description="Estimate DA arrears using Basic Pay, old DA rate, new DA rate and eligible number of months."
  url="/arrears-calculator"
/>
      <section className="page-hero">
        <div className="container">
          <span className="page-badge">Free Salary Tool</span>

          <h1>DA Arrears Calculator</h1>

          <p>
            Estimate Dearness Allowance arrears after a DA rate revision using
            your Basic Pay, old DA rate, new DA rate and arrears period.
          </p>
        </div>
      </section>

      <div className="container calculator-page">
        <section className="calculator-card">
          <div className="calculator-heading">
            <span>DA Revision</span>

            <h2>Calculate DA Arrears</h2>

            <p>
              Enter the rates applicable to your arrears period. The calculator
              does not assume a current DA rate.
            </p>
          </div>

          <div className="arrears-input-grid">
            <div className="form-group">
              <label htmlFor="arrearsBasic">Basic Pay</label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="arrearsBasic"
                  type="number"
                  min="0"
                  value={basicPay}
                  onChange={(e) => setBasicPay(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="arrearsMonths">Number of Months</label>

              <div className="input-wrap">
                <input
                  id="arrearsMonths"
                  type="number"
                  min="1"
                  step="1"
                  value={months}
                  onChange={(e) => setMonths(e.target.value)}
                />

                <span>Months</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="oldDA">Old DA Rate</label>

              <div className="input-wrap">
                <input
                  id="oldDA"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter old rate"
                  value={oldDA}
                  onChange={(e) => setOldDA(e.target.value)}
                />

                <span>%</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="newDA">New DA Rate</label>

              <div className="input-wrap">
                <input
                  id="newDA"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter new rate"
                  value={newDA}
                  onChange={(e) => setNewDA(e.target.value)}
                />

                <span>%</span>
              </div>
            </div>
          </div>

          {result.rateDifference < 0 && (
            <div className="arrears-warning">
              New DA rate is lower than the old DA rate. Please check the values
              you entered.
            </div>
          )}

          <div className="result-section">
            <div className="result-main">
              <span>Estimated DA Arrears</span>

              <strong>
                ₹{formatMoney(result.totalArrears)}
              </strong>
            </div>

            <div className="result-grid">
              <div className="result-box">
                <span>Old Monthly DA</span>
                <strong>
                  ₹{formatMoney(result.oldDAAmount)}
                </strong>
              </div>

              <div className="result-box">
                <span>New Monthly DA</span>
                <strong>
                  ₹{formatMoney(result.newDAAmount)}
                </strong>
              </div>

              <div className="result-box">
                <span>DA Rate Increase</span>
                <strong>{result.rateDifference}%</strong>
              </div>

              <div className="result-box">
                <span>Monthly Difference</span>
                <strong>
                  ₹{formatMoney(result.monthlyDifference)}
                </strong>
              </div>
            </div>
          </div>

          <div className="calculator-note">
            <strong>Formula:</strong> Basic Pay × (New DA Rate − Old DA Rate)
            ÷ 100 × Number of Months
          </div>
        </section>

        <section className="calculator-content">
          <h2>What Are DA Arrears?</h2>

          <p>
            When a revised DA rate takes effect from an earlier date but the
            increased amount is paid later, eligible employees may receive the
            difference for the applicable period as arrears.
          </p>

          <h2>DA Arrears Calculation Example</h2>

          <p>
            Suppose Basic Pay is ₹35,400, the old DA rate is 50%, the revised
            rate is 53%, and the difference is payable for six months.
          </p>

          <div className="formula-box">
            ₹35,400 × (53 − 50) ÷ 100 = ₹1,062 per month
          </div>

          <div className="formula-box">
            ₹1,062 × 6 months = ₹6,372 estimated arrears
          </div>

          <h2>When This Simple Calculation May Differ</h2>

          <p>
            Actual arrears can differ if Basic Pay changed during the period
            because of annual increment, promotion, pay fixation, retirement or
            another applicable event. Other allowance or deduction adjustments
            may also be handled separately.
          </p>

          <div className="calculator-disclaimer">
            <strong>Disclaimer:</strong> This calculator provides an estimate
            only. Verify the effective date, DA rates, eligibility and payment
            rules from the applicable official government order.
          </div>
        </section>
      </div>
    </main>
  );
}