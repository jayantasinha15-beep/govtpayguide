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

export default function AssamSalaryCalculatorPage() {
  const [payInBand, setPayInBand] = useState(30000);
  const [gradePay, setGradePay] = useState(12700);
  const [daRate, setDaRate] = useState(58);
  const [hraRate, setHraRate] = useState(0);
  const [otherAllowances, setOtherAllowances] = useState(0);
  const [deductions, setDeductions] = useState(0);

  const result = useMemo(() => {
    const basicPay = Math.max(0, payInBand) + Math.max(0, gradePay);

    const da = Math.round(
      (basicPay * Math.max(0, daRate)) / 100
    );

    const hra = Math.round(
      (basicPay * Math.max(0, hraRate)) / 100
    );

    const grossSalary =
      basicPay +
      da +
      hra +
      Math.max(0, otherAllowances);

    const takeHome = Math.max(
      0,
      grossSalary - Math.max(0, deductions)
    );

    return {
      basicPay,
      da,
      hra,
      grossSalary,
      takeHome,
      annualGross: grossSalary * 12,
      annualTakeHome: takeHome * 12,
    };
  }, [
    payInBand,
    gradePay,
    daRate,
    hraRate,
    otherAllowances,
    deductions,
  ]);

  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Assam Government</span>

          <h1>Assam Government Salary Calculator</h1>

          <p>
            Estimate Basic Pay, Dearness Allowance, HRA, gross salary
            and approximate take-home salary for Assam Government employees.
          </p>
        </div>
      </section>

      <div className="container state-page-content">
        <section className="calculator-layout">
          <div className="calculator-card">
            <span className="section-label">Salary Inputs</span>

            <h2>Enter Your Pay Details</h2>

            <div className="calculator-field">
              <label htmlFor="payInBand">Pay in Pay Band</label>

              <input
                id="payInBand"
                type="number"
                min="0"
                value={payInBand}
                onChange={(e) =>
                  setPayInBand(Number(e.target.value))
                }
              />

              <small>
                Enter your current Pay in Pay Band under the applicable
                Assam ROP 2017 pay structure.
              </small>
            </div>

            <div className="calculator-field">
              <label htmlFor="gradePay">Grade Pay</label>

              <input
                id="gradePay"
                type="number"
                min="0"
                value={gradePay}
                onChange={(e) =>
                  setGradePay(Number(e.target.value))
                }
              />

              <small>
                Basic Pay is calculated as Pay in Pay Band + Grade Pay.
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
                Default value is 58%. Always verify the currently
                applicable DA rate from the latest Assam Government order.
              </small>
            </div>

            <div className="calculator-field">
              <label htmlFor="hraRate">HRA Rate (%)</label>

              <input
                id="hraRate"
                type="number"
                min="0"
                step="0.01"
                value={hraRate}
                onChange={(e) =>
                  setHraRate(Number(e.target.value))
                }
              />

              <small>
                Enter the HRA percentage applicable to your posting
                and service rules.
              </small>
            </div>

            <div className="calculator-field">
              <label htmlFor="otherAllowances">
                Other Allowances (₹)
              </label>

              <input
                id="otherAllowances"
                type="number"
                min="0"
                value={otherAllowances}
                onChange={(e) =>
                  setOtherAllowances(Number(e.target.value))
                }
              />

              <small>
                Add fixed monthly allowances, if applicable.
              </small>
            </div>

            <div className="calculator-field">
              <label htmlFor="deductions">
                Monthly Deductions (₹)
              </label>

              <input
                id="deductions"
                type="number"
                min="0"
                value={deductions}
                onChange={(e) =>
                  setDeductions(Number(e.target.value))
                }
              />

              <small>
                Include deductions such as pension contribution,
                income tax or other recoveries.
              </small>
            </div>
          </div>

          <div className="calculator-result-card">
            <span className="section-label">Estimated Salary</span>

            <h2>Salary Breakdown</h2>

            <div className="salary-result-list">
              <div>
                <span>Pay in Pay Band</span>
                <strong>{formatINR(payInBand)}</strong>
              </div>

              <div>
                <span>Grade Pay</span>
                <strong>{formatINR(gradePay)}</strong>
              </div>

              <div className="result-highlight">
                <span>Basic Pay</span>
                <strong>{formatINR(result.basicPay)}</strong>
              </div>

              <div>
                <span>DA ({daRate}%)</span>
                <strong>{formatINR(result.da)}</strong>
              </div>

              <div>
                <span>HRA ({hraRate}%)</span>
                <strong>{formatINR(result.hra)}</strong>
              </div>

              <div>
                <span>Other Allowances</span>
                <strong>{formatINR(otherAllowances)}</strong>
              </div>

              <div className="result-highlight">
                <span>Gross Salary</span>
                <strong>{formatINR(result.grossSalary)}</strong>
              </div>

              <div>
                <span>Deductions</span>
                <strong>{formatINR(deductions)}</strong>
              </div>

              <div className="result-total">
                <span>Estimated Take-Home</span>
                <strong>{formatINR(result.takeHome)}</strong>
              </div>
            </div>

            <div className="annual-result-box">
              <div>
                <span>Annual Gross</span>
                <strong>{formatINR(result.annualGross)}</strong>
              </div>

              <div>
                <span>Annual Take-Home</span>
                <strong>{formatINR(result.annualTakeHome)}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="article-section">
          <span className="section-label">Formula</span>

          <h2>How the Assam Salary Calculator Works</h2>

          <div className="article-formula">
            Basic Pay = Pay in Pay Band + Grade Pay
          </div>

          <div className="article-formula">
            DA = Basic Pay × DA Rate ÷ 100
          </div>

          <div className="article-formula">
            HRA = Basic Pay × HRA Rate ÷ 100
          </div>

          <div className="article-formula">
            Gross Salary = Basic Pay + DA + HRA + Other Allowances
          </div>

          <div className="article-formula">
            Take-Home = Gross Salary − Deductions
          </div>
        </section>
        <section className="article-section">
  <span className="section-label">Salary Guide</span>

  <h2>Assam Government Salary Calculator 2026</h2>

  <p>
    The Assam Government Salary Calculator helps employees estimate
    their monthly salary using Pay in Pay Band, Grade Pay, Dearness
    Allowance (DA), HRA, other allowances and deductions.
  </p>

  <p>
    The calculator first combines Pay in Pay Band and Grade Pay to
    determine the Basic Pay used for the calculation. DA and HRA are
    then calculated according to the percentages entered by the user.
  </p>

  <p>
    Since salary components can vary depending on department, post,
    place of posting, applicable Government orders and individual
    deductions, the result should be treated as an estimate rather
    than an official salary statement.
  </p>
</section>

<section className="article-section">
  <span className="section-label">Example</span>

  <h2>Assam Government Salary Calculation Example</h2>

  <p>
    Suppose an employee enters ₹30,000 as Pay in Pay Band and ₹12,700
    as Grade Pay. The Basic Pay used by this calculator will be
    ₹42,700.
  </p>

  <div className="article-formula">
    ₹30,000 + ₹12,700 = ₹42,700 Basic Pay
  </div>

  <p>
    If a DA rate of 58% is entered, the estimated DA on ₹42,700 will
    be ₹24,766.
  </p>

  <div className="article-formula">
    ₹42,700 × 58 ÷ 100 = ₹24,766 DA
  </div>

  <p>
    HRA and other applicable allowances can then be added, while
    deductions can be entered separately to estimate take-home pay.
    The DA percentage in this example is illustrative for explaining
    the calculator; employees should use the rate applicable to them
    under the latest Government order.
  </p>
</section>

<section className="article-section">
  <span className="section-label">Components</span>

  <h2>What Is Included in the Salary Estimate?</h2>

  <h3>Pay in Pay Band</h3>
  <p>
    Enter the Pay in Pay Band applicable to your current pay
    particulars.
  </p>

  <h3>Grade Pay</h3>
  <p>
    Enter the applicable Grade Pay. This calculator adds it to Pay
    in Pay Band when determining Basic Pay.
  </p>

  <h3>Dearness Allowance (DA)</h3>
  <p>
    DA is calculated as a percentage of the Basic Pay used by this
    calculator. Because DA rates can change through Government
    orders, verify the applicable rate before calculating.
  </p>

  <h3>House Rent Allowance (HRA)</h3>
  <p>
    HRA eligibility and rates may differ depending on place of
    posting and applicable service rules. The calculator therefore
    allows you to enter the relevant HRA percentage manually.
  </p>

  <h3>Other Allowances</h3>
  <p>
    Any additional fixed monthly allowances applicable to you can be
    entered separately.
  </p>

  <h3>Deductions</h3>
  <p>
    Enter applicable monthly deductions to obtain a closer estimate
    of take-home salary. Actual deductions vary between employees.
  </p>
</section>

<section className="article-section">
  <span className="section-label">FAQ</span>

  <h2>Frequently Asked Questions</h2>

  <h3>How is Basic Pay calculated in this calculator?</h3>
  <p>
    For this calculator, Basic Pay is calculated by adding Pay in Pay
    Band and Grade Pay.
  </p>

  <h3>How do I calculate Assam Government employee salary?</h3>
  <p>
    Enter your Pay in Pay Band, Grade Pay, applicable DA rate, HRA
    rate, other monthly allowances and deductions. The calculator
    will estimate Basic Pay, DA, HRA, gross salary and take-home
    salary automatically.
  </p>

  <h3>Does this calculator calculate annual salary?</h3>
  <p>
    Yes. It displays estimated annual gross salary and annual
    take-home salary based on the monthly calculation multiplied by
    12.
  </p>

  <h3>Is the salary shown by the calculator official?</h3>
  <p>
    No. The result is an estimate for informational purposes.
    Actual salary depends on the employee&apos;s department, post,
    applicable pay rules, allowances, deductions and Government
    orders.
  </p>

  <h3>Should I always use 58% DA?</h3>
  <p>
    No. The DA field is editable. Enter the rate actually applicable
    to you and verify the latest rate from the relevant Assam
    Government order before relying on the calculation.
  </p>
</section>

        <section className="article-section">
          <span className="section-label">Related</span>

          <h2>Related Assam Salary Tools</h2>

          <div className="article-related-links">
            <Link href="/state-government/assam/pay-matrix">
              Assam Pay Matrix →
            </Link>

            <Link href="/state-government/assam/da">
              Assam DA Latest Update →
            </Link>

            <Link href="/state-government/assam/da-calculator">
              Assam DA Calculator →
            </Link>

            <Link href="/state-government/assam/arrears-calculator">
              Assam DA Arrears Calculator →
            </Link>
          </div>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> This calculator provides an
          approximate salary estimate for informational purposes only.
          Actual salary may differ based on department, post, HRA eligibility,
          allowances, deductions and Government orders. GovtPayGuide is not
          affiliated with the Government of Assam.
        </div>
      </div>
    </main>
  );
}