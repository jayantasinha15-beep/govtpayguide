"use client";

import { useMemo, useState } from "react";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";

const payLevels = [
  { level: "Level 1", basic: 18000 },
  { level: "Level 2", basic: 19900 },
  { level: "Level 3", basic: 21700 },
  { level: "Level 4", basic: 25500 },
  { level: "Level 5", basic: 29200 },
  { level: "Level 6", basic: 35400 },
  { level: "Level 7", basic: 44900 },
  { level: "Level 8", basic: 47600 },
  { level: "Level 9", basic: 53100 },
  { level: "Level 10", basic: 56100 },
  { level: "Level 11", basic: 67700 },
  { level: "Level 12", basic: 78800 },
  { level: "Level 13", basic: 123100 },
  { level: "Level 13A", basic: 131100 },
  { level: "Level 14", basic: 144200 },
  { level: "Level 15", basic: 182200 },
  { level: "Level 16", basic: 205400 },
  { level: "Level 17", basic: 225000 },
  { level: "Level 18", basic: 250000 },
];

export default function SalaryCalculatorPage() {
  const [level, setLevel] = useState("Level 6");
  const [basicPay, setBasicPay] = useState("35400");
  const [daRate, setDaRate] = useState("");
  const [hraRate, setHraRate] = useState("");
  const [ta, setTa] = useState("");
  const [otherAllowances, setOtherAllowances] = useState("");
  const [deductions, setDeductions] = useState("");

  const handleLevelChange = (value: string) => {
    setLevel(value);

    const selected = payLevels.find((item) => item.level === value);

    if (selected) {
      setBasicPay(String(selected.basic));
    }
  };

  const result = useMemo(() => {
    const basic = Number(basicPay) || 0;
    const daPercent = Number(daRate) || 0;
    const hraPercent = Number(hraRate) || 0;
    const taAmount = Number(ta) || 0;
    const otherAmount = Number(otherAllowances) || 0;
    const deductionAmount = Number(deductions) || 0;

    const da = (basic * daPercent) / 100;
    const hra = (basic * hraPercent) / 100;

    const gross =
      basic +
      da +
      hra +
      taAmount +
      otherAmount;

    const takeHome = gross - deductionAmount;

    return {
      basic,
      da,
      hra,
      taAmount,
      otherAmount,
      gross,
      deductionAmount,
      takeHome,
      annualGross: gross * 12,
      annualTakeHome: takeHome * 12,
    };
  }, [
    basicPay,
    daRate,
    hraRate,
    ta,
    otherAllowances,
    deductions,
  ]);

  const formatMoney = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(value);

  return (
    <main>
      <CalculatorJsonLd
  name="Central Government Salary Calculator"
  description="Estimate Central Government salary using Basic Pay, DA, HRA, TA, allowances and deductions."
  url="/salary-calculator"
/>
      <section className="page-hero">
        <div className="container">
          <span className="page-badge">
            Government Salary Tool
          </span>

          <h1>Government Salary Calculator</h1>

          <p>
            Estimate Basic Pay, DA, HRA, allowances,
            Gross Salary and Take-Home Salary.
          </p>
        </div>
      </section>

      <div className="container salary-calculator-page">

        <section className="salary-calculator-card">

          <div className="calculator-heading">
            <span>Salary Calculator</span>

            <h2>Calculate Your Monthly Salary</h2>

            <p>
              Select a Pay Level or enter your actual Basic Pay,
              then add the applicable allowance rates and deductions.
            </p>
          </div>

          <div className="salary-input-grid">

            <div className="form-group">
              <label htmlFor="payLevel">
                Pay Level
              </label>

              <select
                id="payLevel"
                value={level}
                onChange={(e) =>
                  handleLevelChange(e.target.value)
                }
              >
                {payLevels.map((item) => (
                  <option
                    key={item.level}
                    value={item.level}
                  >
                    {item.level} — ₹
                    {item.basic.toLocaleString("en-IN")}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="basicPay">
                Basic Pay
              </label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="basicPay"
                  type="number"
                  min="0"
                  value={basicPay}
                  onChange={(e) =>
                    setBasicPay(e.target.value)
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="da">
                DA Rate
              </label>

              <div className="input-wrap">
                <input
                  id="da"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter applicable rate"
                  value={daRate}
                  onChange={(e) =>
                    setDaRate(e.target.value)
                  }
                />

                <span>%</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="hra">
                HRA Rate
              </label>

              <div className="input-wrap">
                <input
                  id="hra"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter HRA rate"
                  value={hraRate}
                  onChange={(e) =>
                    setHraRate(e.target.value)
                  }
                />

                <span>%</span>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="ta">
                Transport Allowance / TA
              </label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="ta"
                  type="number"
                  min="0"
                  placeholder="0"
                  value={ta}
                  onChange={(e) =>
                    setTa(e.target.value)
                  }
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="other">
                Other Allowances
              </label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="other"
                  type="number"
                  min="0"
                  placeholder="0"
                  value={otherAllowances}
                  onChange={(e) =>
                    setOtherAllowances(e.target.value)
                  }
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="deductions">
                Total Monthly Deductions
              </label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="deductions"
                  type="number"
                  min="0"
                  placeholder="NPS, CGHS, tax and other deductions"
                  value={deductions}
                  onChange={(e) =>
                    setDeductions(e.target.value)
                  }
                />
              </div>
            </div>

          </div>

          <div className="salary-result">

            <div className="salary-result-main">
              <span>
                Estimated Monthly Take-Home
              </span>

              <strong>
                ₹{formatMoney(result.takeHome)}
              </strong>
            </div>

            <div className="salary-breakdown">

              <div>
                <span>Basic Pay</span>
                <strong>
                  ₹{formatMoney(result.basic)}
                </strong>
              </div>

              <div>
                <span>DA</span>
                <strong>
                  ₹{formatMoney(result.da)}
                </strong>
              </div>

              <div>
                <span>HRA</span>
                <strong>
                  ₹{formatMoney(result.hra)}
                </strong>
              </div>

              <div>
                <span>TA</span>
                <strong>
                  ₹{formatMoney(result.taAmount)}
                </strong>
              </div>

              <div>
                <span>Other Allowances</span>
                <strong>
                  ₹{formatMoney(result.otherAmount)}
                </strong>
              </div>

              <div className="gross-box">
                <span>Gross Salary</span>
                <strong>
                  ₹{formatMoney(result.gross)}
                </strong>
              </div>

              <div>
                <span>Total Deductions</span>
                <strong>
                  − ₹{formatMoney(result.deductionAmount)}
                </strong>
              </div>

              <div className="take-home-box">
                <span>Take-Home</span>
                <strong>
                  ₹{formatMoney(result.takeHome)}
                </strong>
              </div>

            </div>

            <div className="annual-summary">

              <div>
                <span>Estimated Annual Gross</span>

                <strong>
                  ₹{formatMoney(result.annualGross)}
                </strong>
              </div>

              <div>
                <span>
                  Estimated Annual Take-Home
                </span>

                <strong>
                  ₹{formatMoney(result.annualTakeHome)}
                </strong>
              </div>

            </div>
          </div>

        </section>

        <section className="calculator-content">

          <h2>
            How Government Salary is Calculated
          </h2>

          <p>
            A government employee&apos;s salary can include
            Basic Pay, Dearness Allowance, House Rent
            Allowance, Transport Allowance and other
            applicable allowances.
          </p>

          <div className="formula-box">
            Gross Salary = Basic Pay + DA + HRA + TA +
            Other Allowances
          </div>

          <div className="formula-box">
            Take-Home Salary = Gross Salary − Total
            Deductions
          </div>

          <h2>Pay Level Selection</h2>

          <p>
            Selecting a Pay Level automatically fills its
            starting Basic Pay. If your actual Basic Pay is
            higher because you are in a later Pay Matrix
            cell, simply replace the amount manually.
          </p>

          <h2>DA and HRA Rates</h2>

          <p>
            DA and HRA rates can change over time and can
            depend on the employee category and applicable
            government rules. For this reason, the calculator
            does not automatically assume a current rate.
          </p>

          <div className="calculator-disclaimer">
            <strong>Disclaimer:</strong> The result is an
            estimate for informational purposes. Actual salary
            may differ because of NPS, income tax, CGHS,
            professional tax, special allowances, TA rules,
            departmental deductions and other applicable
            government orders.
          </div>

        </section>
      </div>
    </main>
  );
}