"use client";

import { useMemo, useState } from "react";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(value || 0));
}

export default function BiharPensionCalculatorPage() {
  const [basicPension, setBasicPension] = useState(25000);
  const [drRate, setDrRate] = useState(60);

  const result = useMemo(() => {
    const monthlyDR = (basicPension * drRate) / 100;
    const monthlyTotal = basicPension + monthlyDR;
    const annualPension = basicPension * 12;
    const annualDR = monthlyDR * 12;
    const annualTotal = monthlyTotal * 12;

    return {
      monthlyDR,
      monthlyTotal,
      annualPension,
      annualDR,
      annualTotal,
    };
  }, [basicPension, drRate]);

  return (
    <main>
      <CalculatorJsonLd
        name="Bihar Pension Calculator"
        description="Estimate Bihar Government pension and Dearness Relief using Basic Pension and applicable DR rate."
        url="/state-government/bihar/pension-calculator"
      />

      <section className="bihar-pension-calc-hero">
        <div className="container">
          <span className="page-badge">Bihar Pension Calculator</span>

          <h1>Bihar Pension & Dearness Relief Calculator</h1>

          <p>
            Estimate monthly Dearness Relief, pension plus DR and annual pension
            amounts using your Basic Pension and applicable Bihar Government DR
            rate.
          </p>
        </div>
      </section>

      <div className="container bihar-pension-calc-page">
        <div className="bihar-pension-calc-grid">
          <section className="bihar-pension-calc-card">
            <div className="calculator-heading">
              <span className="section-kicker">Pension Inputs</span>

              <h2>Enter Pension Details</h2>

              <p>
                Use the Basic Pension shown in your pension records and the DR
                rate applicable to the period you want to calculate.
              </p>
            </div>

            <div className="bihar-pension-calc-inputs">
              <label>
                <span>Basic Pension (₹)</span>

                <input
                  type="number"
                  min="0"
                  value={basicPension}
                  onChange={(e) =>
                    setBasicPension(Math.max(Number(e.target.value), 0))
                  }
                />

                <small>
                  Enter the eligible Basic Pension from your PPO or pension
                  record.
                </small>
              </label>

              <label>
                <span>Dearness Relief Rate (%)</span>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={drRate}
                  onChange={(e) =>
                    setDrRate(Math.max(Number(e.target.value), 0))
                  }
                />

                <small>
                  60% is prefilled for the notified rate effective from
                  1 January 2026. Change it for another applicable period.
                </small>
              </label>
            </div>

            <div className="formula-box">
              Monthly DR = Basic Pension × DR Rate ÷ 100
            </div>
          </section>

          <section className="bihar-pension-calc-results">
            <div className="bihar-pension-calc-result-head">
              <span>Estimated Monthly Pension + DR</span>

              <strong>₹{formatMoney(result.monthlyTotal)}</strong>

              <p>
                Based on ₹{formatMoney(basicPension)} Basic Pension at {drRate}%
                DR
              </p>
            </div>

            <div className="bihar-pension-calc-result-list">
              <div>
                <span>Basic Pension</span>
                <strong>₹{formatMoney(basicPension)}</strong>
              </div>

              <div>
                <span>DR Rate</span>
                <strong>{drRate}%</strong>
              </div>

              <div>
                <span>Monthly Dearness Relief</span>
                <strong>₹{formatMoney(result.monthlyDR)}</strong>
              </div>

              <div className="bihar-pension-calc-highlight">
                <span>Monthly Pension + DR</span>
                <strong>₹{formatMoney(result.monthlyTotal)}</strong>
              </div>

              <div>
                <span>Annual Basic Pension</span>
                <strong>₹{formatMoney(result.annualPension)}</strong>
              </div>

              <div>
                <span>Annual DR</span>
                <strong>₹{formatMoney(result.annualDR)}</strong>
              </div>

              <div className="bihar-pension-calc-total">
                <span>Annual Pension + DR</span>
                <strong>₹{formatMoney(result.annualTotal)}</strong>
              </div>
            </div>
          </section>
        </div>

        <section className="article-section">
          <span className="section-kicker">Calculation Guide</span>

          <h2>How Bihar Pension DR is Calculated</h2>

          <p>
            Dearness Relief is generally calculated by applying the applicable
            DR percentage to the eligible Basic Pension.
          </p>

          <div className="formula-box">
            Dearness Relief = Basic Pension × DR Rate ÷ 100
          </div>

          <div className="formula-box">
            Pension + DR = Basic Pension + Dearness Relief
          </div>

          <div className="example-box">
            <p>
              Basic Pension: <strong>₹25,000</strong>
            </p>

            <p>
              DR Rate: <strong>60%</strong>
            </p>

            <p>
              Monthly DR: <strong>₹15,000</strong>
            </p>

            <p>
              Monthly Pension + DR: <strong>₹40,000</strong>
            </p>
          </div>
        </section>

        <section className="bihar-pension-calc-info-grid">
          <div>
            <span>Basic Pension</span>
            <h3>Use PPO Amount</h3>

            <p>
              Use the eligible Basic Pension amount shown in your PPO or latest
              pension revision record.
            </p>
          </div>

          <div>
            <span>Dearness Relief</span>
            <h3>Use Applicable Rate</h3>

            <p>
              DR rates can change through Government orders, so use the rate
              applicable to the period you are calculating.
            </p>
          </div>

          <div>
            <span>Family Pension</span>
            <h3>Check Sanctioned Amount</h3>

            <p>
              Family pensioners should enter the sanctioned Basic Family Pension
              applicable to them.
            </p>
          </div>
        </section>

        <section className="bihar-pension-calc-warning">
          <span className="section-kicker">Important</span>

          <h2>This Calculator Does Not Determine Pension Eligibility</h2>

          <p>
            It only calculates DR on a Basic Pension amount entered by the user.
            It does not determine qualifying service, pension sanction, family
            pension eligibility, commutation or gratuity.
          </p>

          <p>
            Those benefits are governed by applicable Bihar Government pension
            rules, PPOs and departmental orders.
          </p>
        </section>

        <section className="bihar-pension-calc-source">
          <div>
            <span className="section-kicker">Official Verification</span>

            <h2>Check Your PPO and Bihar Finance Department Orders</h2>

            <p>
              Always verify the sanctioned Basic Pension, DR rate and effective
              date from official pension records and Bihar Government orders.
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
          <strong>Disclaimer:</strong> This calculator provides an approximate
          pension and DR estimate for informational purposes. GovtPayGuide is an
          independent website and is not affiliated with the Government of
          Bihar. Actual pension and Dearness Relief must be verified from the
          PPO, Government orders and pension disbursing authority.
        </div>
      </div>
    </main>
  );
}