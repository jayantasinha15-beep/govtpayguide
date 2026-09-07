"use client";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";
import { useMemo, useState } from "react";

export default function DACalculatorPage() {
  const [basicPay, setBasicPay] = useState("");
  const [daRate, setDaRate] = useState("");

  const result = useMemo(() => {
    const basic = Number(basicPay) || 0;
    const rate = Number(daRate) || 0;

    const monthlyDA = (basic * rate) / 100;
    const basicPlusDA = basic + monthlyDA;
    const annualDA = monthlyDA * 12;

    return {
      monthlyDA,
      basicPlusDA,
      annualDA,
    };
  }, [basicPay, daRate]);

  const formatMoney = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <main>
      <CalculatorJsonLd
  name="Dearness Allowance Calculator"
  description="Calculate Dearness Allowance from Basic Pay and DA percentage with monthly and annual estimates."
  url="/da-calculator"
/>
      <section className="page-hero">
        <div className="container">
          <span className="page-badge">Free Calculator</span>

          <h1>DA Calculator</h1>

          <p>
            Calculate Dearness Allowance based on your Basic Pay and applicable
            DA percentage.
          </p>
        </div>
      </section>

      <div className="container calculator-page">
        <section className="calculator-card">
          <div className="calculator-heading">
            <span>Government Salary Tool</span>
            <h2>Calculate Your Dearness Allowance</h2>
            <p>
              Enter your Basic Pay and the DA rate applicable to you.
            </p>
          </div>

          <div className="calculator-grid">
            <div className="form-group">
              <label htmlFor="basicPay">Basic Pay</label>

              <div className="input-wrap">
                <span>₹</span>
                <input
                  id="basicPay"
                  type="number"
                  min="0"
                  placeholder="40000"
                  value={basicPay}
                  onChange={(e) => setBasicPay(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="daRate">DA Rate</label>

              <div className="input-wrap">
                <input
                  id="daRate"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter DA rate"
                  value={daRate}
                  onChange={(e) => setDaRate(e.target.value)}
                />
                <span>%</span>
              </div>
            </div>
          </div>

          <div className="result-section">
            <div className="result-main">
              <span>Monthly DA</span>
              <strong>₹{formatMoney(result.monthlyDA)}</strong>
            </div>

            <div className="result-grid">
              <div className="result-box">
                <span>Basic Pay</span>
                <strong>
                  ₹{formatMoney(Number(basicPay) || 0)}
                </strong>
              </div>

              <div className="result-box">
                <span>DA Rate</span>
                <strong>{Number(daRate) || 0}%</strong>
              </div>

              <div className="result-box">
                <span>Basic Pay + DA</span>
                <strong>₹{formatMoney(result.basicPlusDA)}</strong>
              </div>

              <div className="result-box">
                <span>Annual DA</span>
                <strong>₹{formatMoney(result.annualDA)}</strong>
              </div>
            </div>
          </div>

          <div className="calculator-note">
            <strong>Formula:</strong> DA = Basic Pay × DA Rate ÷ 100
          </div>
        </section>

        <section className="calculator-content">
          <h2>How to Use the DA Calculator</h2>

          <p>
            Enter your current Basic Pay and the Dearness Allowance percentage
            applicable to your salary. The calculator will instantly show your
            monthly DA amount, annual DA and Basic Pay plus DA.
          </p>

          <h2>DA Calculation Example</h2>

          <p>
            If your Basic Pay is ₹40,000 and the applicable DA rate is 50%, your
            Dearness Allowance would be:
          </p>

          <div className="formula-box">
            ₹40,000 × 50 ÷ 100 = ₹20,000
          </div>

          <p>
            Therefore, Basic Pay plus DA would be ₹60,000 before adding other
            applicable allowances or subtracting deductions.
          </p>

          <div className="calculator-disclaimer">
            <strong>Disclaimer:</strong> This calculator is for informational
            purposes only. Use the DA rate applicable to your department,
            government and effective period, and verify it from the relevant
            official notification.
          </div>
        </section>
      </div>
    </main>
  );
}