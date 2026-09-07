"use client";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";
import { useMemo, useState } from "react";
import Link from "next/link";

export default function WestBengalPensionCalculatorPage() {
  const [basicPension, setBasicPension] = useState("20000");
  const [drRate, setDrRate] = useState("");
  const [commutedReduction, setCommutedReduction] = useState("");
  const [additionalPension, setAdditionalPension] = useState("");
  const [otherAdditions, setOtherAdditions] = useState("");
  const [deductions, setDeductions] = useState("");

  const formatMoney = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(value);

  const result = useMemo(() => {
    const basic = Math.max(Number(basicPension) || 0, 0);
    const drPercent = Math.max(Number(drRate) || 0, 0);
    const commuted = Math.max(Number(commutedReduction) || 0, 0);
    const additional = Math.max(Number(additionalPension) || 0, 0);
    const other = Math.max(Number(otherAdditions) || 0, 0);
    const deductionAmount = Math.max(Number(deductions) || 0, 0);

    const dr = (basic * drPercent) / 100;

    const grossPension =
      basic + dr + additional + other;

    const netPension = Math.max(
      grossPension - commuted - deductionAmount,
      0
    );

    return {
      basic,
      dr,
      commuted,
      additional,
      other,
      deductions: deductionAmount,
      grossPension,
      netPension,
      annualGross: grossPension * 12,
      annualNet: netPension * 12,
    };
  }, [
    basicPension,
    drRate,
    commutedReduction,
    additionalPension,
    otherAdditions,
    deductions,
  ]);

  return (
    <main>
      <CalculatorJsonLd
  name="West Bengal Pension and DR Calculator"
  description="Estimate West Bengal Government pension and Dearness Relief using Basic Pension, DR rate, commutation, additions and deductions."
  url="/state-government/west-bengal/pension-calculator"
/>
      {/* HERO */}
      <section className="wb-pension-calc-hero">
        <div className="container">
          <span className="page-badge">West Bengal Government</span>

          <h1>West Bengal Pension Calculator</h1>

          <p>
            Estimate monthly pension using Basic Pension, Dearness Relief,
            commutation adjustment, additional pension and deductions.
          </p>
        </div>
      </section>

      <div className="container wb-pension-calc-page">
        {/* CALCULATOR */}
        <section className="wb-pension-calc-card">
          <div className="calculator-heading">
            <span>WB Pension Tool</span>

            <h2>Calculate Estimated Monthly Pension</h2>

            <p>
              Enter your sanctioned pension details and applicable DR rate.
            </p>
          </div>

          <div className="wb-pension-calc-grid">
            {/* BASIC PENSION */}
            <div className="form-group">
              <label htmlFor="basicPension">
                Basic Pension
              </label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="basicPension"
                  type="number"
                  min="0"
                  value={basicPension}
                  onChange={(e) =>
                    setBasicPension(e.target.value)
                  }
                />
              </div>
            </div>

            {/* DR */}
            <div className="form-group">
              <label htmlFor="drRate">
                Dearness Relief Rate
              </label>

              <div className="input-wrap">
                <input
                  id="drRate"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter applicable DR"
                  value={drRate}
                  onChange={(e) =>
                    setDrRate(e.target.value)
                  }
                />

                <span>%</span>
              </div>

              <small>
                Enter the rate applicable to the pension period.
              </small>
            </div>

            {/* COMMUTED REDUCTION */}
            <div className="form-group">
              <label htmlFor="commutedReduction">
                Monthly Commuted Portion
              </label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="commutedReduction"
                  type="number"
                  min="0"
                  placeholder="0"
                  value={commutedReduction}
                  onChange={(e) =>
                    setCommutedReduction(e.target.value)
                  }
                />
              </div>

              <small>
                Enter only if a commuted pension reduction is currently
                applicable.
              </small>
            </div>

            {/* ADDITIONAL PENSION */}
            <div className="form-group">
              <label htmlFor="additionalPension">
                Additional Pension
              </label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="additionalPension"
                  type="number"
                  min="0"
                  placeholder="0"
                  value={additionalPension}
                  onChange={(e) =>
                    setAdditionalPension(e.target.value)
                  }
                />
              </div>

              <small>
                Add any eligible additional pension amount, if applicable.
              </small>
            </div>

            {/* OTHER ADDITIONS */}
            <div className="form-group">
              <label htmlFor="otherAdditions">
                Other Monthly Additions
              </label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="otherAdditions"
                  type="number"
                  min="0"
                  placeholder="0"
                  value={otherAdditions}
                  onChange={(e) =>
                    setOtherAdditions(e.target.value)
                  }
                />
              </div>
            </div>

            {/* DEDUCTIONS */}
            <div className="form-group">
              <label htmlFor="deductions">
                Other Monthly Deductions
              </label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="deductions"
                  type="number"
                  min="0"
                  placeholder="0"
                  value={deductions}
                  onChange={(e) =>
                    setDeductions(e.target.value)
                  }
                />
              </div>

              <small>
                Include recovery, tax or other applicable deductions.
              </small>
            </div>
          </div>

          {/* RESULTS */}
          <div className="wb-pension-calc-results">
            <div className="wb-pension-calc-main">
              <span>Estimated Net Monthly Pension</span>

              <strong>
                ₹{formatMoney(result.netPension)}
              </strong>

              <small>Estimated monthly amount</small>
            </div>

            <div className="wb-pension-calc-result-grid">
              <div>
                <span>Basic Pension</span>
                <strong>
                  ₹{formatMoney(result.basic)}
                </strong>
              </div>

              <div>
                <span>Dearness Relief</span>
                <strong>
                  ₹{formatMoney(result.dr)}
                </strong>
              </div>

              <div>
                <span>Additional Pension</span>
                <strong>
                  ₹{formatMoney(result.additional)}
                </strong>
              </div>

              <div>
                <span>Other Additions</span>
                <strong>
                  ₹{formatMoney(result.other)}
                </strong>
              </div>

              <div>
                <span>Gross Pension</span>
                <strong>
                  ₹{formatMoney(result.grossPension)}
                </strong>
              </div>

              <div>
                <span>Commuted Portion</span>
                <strong>
                  ₹{formatMoney(result.commuted)}
                </strong>
              </div>

              <div>
                <span>Other Deductions</span>
                <strong>
                  ₹{formatMoney(result.deductions)}
                </strong>
              </div>

              <div>
                <span>Net Pension</span>
                <strong>
                  ₹{formatMoney(result.netPension)}
                </strong>
              </div>
            </div>

            <div className="wb-pension-calc-annual">
              <div>
                <span>Estimated Annual Gross Pension</span>
                <strong>
                  ₹{formatMoney(result.annualGross)}
                </strong>
              </div>

              <div>
                <span>Estimated Annual Net Pension</span>
                <strong>
                  ₹{formatMoney(result.annualNet)}
                </strong>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULA */}
        <section className="article-section">
          <span className="section-kicker">Calculation</span>

          <h2>How This Pension Calculator Works</h2>

          <div className="formula-box">
            Dearness Relief = Basic Pension × DR Rate ÷ 100
          </div>

          <div className="formula-box">
            Gross Pension = Basic Pension + DR + Additional Pension + Other
            Additions
          </div>

          <div className="formula-box">
            Estimated Net Pension = Gross Pension − Commuted Portion − Other
            Deductions
          </div>
        </section>

        {/* EXAMPLE */}
        <section className="article-section">
          <h2>Example Pension Calculation</h2>

          <p>
            Suppose a pensioner has Basic Pension of ₹20,000 and an example DR
            rate of 20%.
          </p>

          <div className="example-box">
            <p>
              Basic Pension: <strong>₹20,000</strong>
            </p>

            <p>
              Example DR Rate: <strong>20%</strong>
            </p>

            <p>
              Dearness Relief: <strong>₹4,000</strong>
            </p>

            <p>
              Gross Pension before other adjustments:
              <strong> ₹24,000</strong>
            </p>
          </div>

          <p className="source-note">
            The 20% figure above is only an example for explaining the
            calculation. Enter the officially applicable DR rate for the
            relevant period.
          </p>
        </section>

        {/* COMMUTATION */}
        <section className="article-section">
          <h2>What Should I Enter as Commuted Portion?</h2>

          <p>
            If a portion of your pension has been commuted and that reduction
            is currently reflected in the monthly pension, enter the monthly
            reduced amount in the commuted portion field.
          </p>

          <p>
            If pension has already been restored or no commutation reduction
            applies, leave this field at zero.
          </p>
        </section>

        {/* ADDITIONAL PENSION */}
        <section className="article-section">
          <h2>Additional Pension</h2>

          <p>
            Some pensioners may qualify for additional pension under applicable
            age-based or other pension rules. Because eligibility and rates can
            vary, this calculator uses a manual rupee input instead of assuming
            a universal percentage.
          </p>
        </section>

        {/* LINKS */}
        <section className="article-section">
          <h2>West Bengal Pension Resources</h2>

          <div className="wb-pension-calc-actions">
            <Link
              href="/state-government/west-bengal/pension"
              className="content-button"
            >
              WB Pension & DR Guide
            </Link>

            <Link
              href="/state-government/west-bengal/da"
              className="secondary-content-button"
            >
              WB DA / DR Updates
            </Link>

            <Link
              href="/state-government/west-bengal/arrears-calculator"
              className="secondary-content-button"
            >
              Arrears Calculator
            </Link>
          </div>
        </section>

        {/* DISCLAIMER */}
        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> This calculator provides an estimate
          only. Actual pension depends on the sanctioned PPO, pension rules,
          Dearness Relief orders, commutation and restoration status,
          additional pension eligibility, recoveries, tax and pension
          disbursing authority records. Official Government records take
          precedence.
        </div>
      </div>
    </main>
  );
}