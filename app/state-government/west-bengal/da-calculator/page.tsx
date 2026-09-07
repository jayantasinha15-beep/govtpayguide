"use client";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";
import { useMemo, useState } from "react";

export default function WestBengalDACalculatorPage() {
  const [basicPay, setBasicPay] = useState("40000");
  const [daRate, setDaRate] = useState("38");

  const result = useMemo(() => {
    const basic = Math.max(Number(basicPay) || 0, 0);
    const rate = Math.max(Number(daRate) || 0, 0);

    const monthlyDA = (basic * rate) / 100;

    return {
      monthlyDA,
      annualDA: monthlyDA * 12,
      basicPlusDA: basic + monthlyDA,
    };
  }, [basicPay, daRate]);

  const formatMoney = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <main>
      <CalculatorJsonLd
  name="West Bengal DA Calculator"
  description="Calculate West Bengal Government Dearness Allowance using Basic Pay and the applicable DA rate."
  url="/state-government/west-bengal/da-calculator"
/>
      <section className="page-hero">
        <div className="container">
          <span className="page-badge">West Bengal Government</span>

          <h1>West Bengal DA Calculator</h1>

          <p>
            Calculate Dearness Allowance for West Bengal Government employees
            using Basic Pay and the applicable DA rate.
          </p>
        </div>
      </section>

      <div className="container calculator-page">
        <section className="calculator-card">
          <div className="calculator-heading">
            <span>WB Salary Tool</span>

            <h2>Calculate Monthly DA</h2>

            <p>
              Enter your Basic Pay and applicable West Bengal DA percentage.
            </p>
          </div>

          <div className="calculator-grid">
            <div className="form-group">
              <label htmlFor="wbBasicPay">Basic Pay</label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="wbBasicPay"
                  type="number"
                  min="0"
                  value={basicPay}
                  onChange={(e) => setBasicPay(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="wbDaRate">DA Rate</label>

              <div className="input-wrap">
                <input
                  id="wbDaRate"
                  type="number"
                  min="0"
                  step="0.01"
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

              <strong>
                ₹{formatMoney(result.monthlyDA)}
              </strong>
            </div>

            <div className="result-grid">
              <div className="result-box">
                <span>Basic Pay</span>
                <strong>₹{formatMoney(Number(basicPay) || 0)}</strong>
              </div>

              <div className="result-box">
                <span>DA Rate</span>
                <strong>{Number(daRate) || 0}%</strong>
              </div>

              <div className="result-box">
                <span>Basic Pay + DA</span>
                <strong>
                  ₹{formatMoney(result.basicPlusDA)}
                </strong>
              </div>

              <div className="result-box">
                <span>Annual DA</span>
                <strong>
                  ₹{formatMoney(result.annualDA)}
                </strong>
              </div>
            </div>
          </div>

          <div className="calculator-note">
            <strong>Formula:</strong> Basic Pay × DA Rate ÷ 100
          </div>
        </section>

        <section className="calculator-content">
          <h2>West Bengal DA Calculation</h2>

          <p>
            Dearness Allowance is calculated using the applicable percentage
            and eligible Basic Pay.
          </p>

          <div className="formula-box">
            Monthly DA = Basic Pay × DA Rate ÷ 100
          </div>

          <h2>Example</h2>

          <p>
            For example, if Basic Pay is ₹40,000 and DA is 38%:
          </p>

          <div className="example-box">
            <p>
              Basic Pay: <strong>₹40,000</strong>
            </p>

            <p>
              DA Rate: <strong>38%</strong>
            </p>

            <p>
              Monthly DA: <strong>₹15,200</strong>
            </p>

            <p>
              Basic + DA: <strong>₹55,200</strong>
            </p>
          </div>

          <h2>Important Note</h2>

          <p>
            West Bengal Government DA should not be confused with Central
            Government DA. The applicable percentage, effective date and
            eligibility depend on West Bengal Government orders.
          </p>

          <div className="calculator-disclaimer">
            <strong>Disclaimer:</strong> This calculator provides an estimate
            only. Verify the applicable DA rate and effective date from the
            relevant West Bengal Finance Department order before using the
            result for salary or service-related decisions.
          </div>
        </section>
      </div>
    </main>
  );
}