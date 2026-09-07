"use client";

import { useMemo, useState } from "react";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";

const payLevels = [
  { level: "1", minimum: 18000 },
  { level: "2", minimum: 19900 },
  { level: "3", minimum: 21700 },
  { level: "4", minimum: 25500 },
  { level: "5", minimum: 29200 },
  { level: "6", minimum: 35400 },
  { level: "7", minimum: 44900 },
  { level: "8", minimum: 47600 },
  { level: "9", minimum: 53100 },
  { level: "11", minimum: 67700 },
  { level: "12", minimum: 78800 },
  { level: "13", minimum: 123100 },
  { level: "13A", minimum: 131100 },
  { level: "14", minimum: 144200 },
];

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(value || 0));
}

export default function BiharSalaryCalculatorPage() {
  const [level, setLevel] = useState("6");
  const [basicPay, setBasicPay] = useState(35400);
  const [daRate, setDaRate] = useState(60);
  const [hraRate, setHraRate] = useState(0);
  const [transportAllowance, setTransportAllowance] = useState(0);
  const [medicalAllowance, setMedicalAllowance] = useState(0);
  const [otherAllowance, setOtherAllowance] = useState(0);
  const [deductions, setDeductions] = useState(0);

  const handleLevelChange = (value: string) => {
    setLevel(value);

    const selected = payLevels.find((item) => item.level === value);

    if (selected) {
      setBasicPay(selected.minimum);
    }
  };

  const result = useMemo(() => {
    const da = (basicPay * daRate) / 100;
    const hra = (basicPay * hraRate) / 100;

    const gross =
      basicPay +
      da +
      hra +
      transportAllowance +
      medicalAllowance +
      otherAllowance;

    const takeHome = Math.max(gross - deductions, 0);

    return {
      da,
      hra,
      gross,
      takeHome,
      annualGross: gross * 12,
      annualTakeHome: takeHome * 12,
    };
  }, [
    basicPay,
    daRate,
    hraRate,
    transportAllowance,
    medicalAllowance,
    otherAllowance,
    deductions,
  ]);

  return (
    <main>
      <CalculatorJsonLd
        name="Bihar Government Salary Calculator"
        description="Estimate Bihar Government employee salary using Pay Level, Basic Pay, DA, HRA, allowances and deductions."
        url="/state-government/bihar/salary-calculator"
      />

      <section className="bihar-salary-hero">
        <div className="container">
          <span className="page-badge">Bihar Government Calculator</span>

          <h1>Bihar Government Salary Calculator</h1>

          <p>
            Estimate monthly gross salary and take-home pay using Bihar Pay
            Matrix level, Basic Pay, DA, HRA, allowances and deductions.
          </p>
        </div>
      </section>

      <div className="container bihar-salary-page">
        <div className="bihar-salary-layout">
          <section className="bihar-salary-calculator">
            <div className="bihar-salary-form">
              <div className="calculator-heading">
                <span className="section-kicker">Salary Inputs</span>
                <h2>Enter Salary Details</h2>
                <p>
                  Select your Pay Level and adjust the values according to your
                  salary slip or applicable Government order.
                </p>
              </div>

              <div className="bihar-salary-input-grid">
                <label>
                  <span>Pay Level</span>

                  <select
                    value={level}
                    onChange={(e) => handleLevelChange(e.target.value)}
                  >
                    {payLevels.map((item) => (
                      <option key={item.level} value={item.level}>
                        Level {item.level} — ₹{formatMoney(item.minimum)}
                      </option>
                    ))}
                  </select>

                  <small>
                    Selecting a level loads its first Pay Matrix cell.
                  </small>
                </label>

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
                    Edit this if your current Basic Pay is above the first cell.
                  </small>
                </label>

                <label>
                  <span>DA Rate (%)</span>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={daRate}
                    onChange={(e) =>
                      setDaRate(Math.max(Number(e.target.value), 0))
                    }
                  />

                  <small>
                    60% is prefilled as the notified rate effective from
                    1 January 2026. Verify the applicable rate for your period.
                  </small>
                </label>

                <label>
                  <span>HRA Rate (%)</span>

                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={hraRate}
                    onChange={(e) =>
                      setHraRate(Math.max(Number(e.target.value), 0))
                    }
                  />

                  <small>
                    Enter your applicable Bihar Government HRA rate manually.
                  </small>
                </label>

                <label>
                  <span>Transport Allowance (₹)</span>

                  <input
                    type="number"
                    min="0"
                    value={transportAllowance}
                    onChange={(e) =>
                      setTransportAllowance(
                        Math.max(Number(e.target.value), 0)
                      )
                    }
                  />
                </label>

                <label>
                  <span>Medical Allowance (₹)</span>

                  <input
                    type="number"
                    min="0"
                    value={medicalAllowance}
                    onChange={(e) =>
                      setMedicalAllowance(Math.max(Number(e.target.value), 0))
                    }
                  />
                </label>

                <label>
                  <span>Other Allowances (₹)</span>

                  <input
                    type="number"
                    min="0"
                    value={otherAllowance}
                    onChange={(e) =>
                      setOtherAllowance(Math.max(Number(e.target.value), 0))
                    }
                  />
                </label>

                <label>
                  <span>Total Deductions (₹)</span>

                  <input
                    type="number"
                    min="0"
                    value={deductions}
                    onChange={(e) =>
                      setDeductions(Math.max(Number(e.target.value), 0))
                    }
                  />

                  <small>
                    Include applicable pension contribution, tax, recoveries or
                    other deductions.
                  </small>
                </label>
              </div>
            </div>

            <div className="bihar-salary-results">
              <div className="bihar-result-header">
                <span>Estimated Salary</span>
                <h2>₹{formatMoney(result.takeHome)}</h2>
                <p>Estimated monthly take-home</p>
              </div>

              <div className="bihar-result-list">
                <div>
                  <span>Basic Pay</span>
                  <strong>₹{formatMoney(basicPay)}</strong>
                </div>

                <div>
                  <span>Dearness Allowance</span>
                  <strong>₹{formatMoney(result.da)}</strong>
                </div>

                <div>
                  <span>House Rent Allowance</span>
                  <strong>₹{formatMoney(result.hra)}</strong>
                </div>

                <div>
                  <span>Transport Allowance</span>
                  <strong>₹{formatMoney(transportAllowance)}</strong>
                </div>

                <div>
                  <span>Medical Allowance</span>
                  <strong>₹{formatMoney(medicalAllowance)}</strong>
                </div>

                <div>
                  <span>Other Allowances</span>
                  <strong>₹{formatMoney(otherAllowance)}</strong>
                </div>

                <div className="bihar-result-highlight">
                  <span>Gross Salary</span>
                  <strong>₹{formatMoney(result.gross)}</strong>
                </div>

                <div>
                  <span>Deductions</span>
                  <strong>− ₹{formatMoney(deductions)}</strong>
                </div>

                <div className="bihar-result-takehome">
                  <span>Take-Home Salary</span>
                  <strong>₹{formatMoney(result.takeHome)}</strong>
                </div>
              </div>

              <div className="bihar-annual-grid">
                <div>
                  <span>Annual Gross</span>
                  <strong>₹{formatMoney(result.annualGross)}</strong>
                </div>

                <div>
                  <span>Annual Take-Home</span>
                  <strong>₹{formatMoney(result.annualTakeHome)}</strong>
                </div>
              </div>
            </div>
          </section>

          <section className="article-section">
            <span className="section-kicker">Calculation</span>

            <h2>How Bihar Government Salary is Estimated</h2>

            <div className="formula-box">
              Gross Salary = Basic Pay + DA + HRA + Allowances
            </div>

            <div className="formula-box">
              Take-Home Salary = Gross Salary − Deductions
            </div>

            <p>
              The calculator provides an estimate only. Actual salary depends
              on the employee&apos;s sanctioned Basic Pay, applicable
              allowances, deductions, posting, service conditions and
              Government orders.
            </p>
          </section>

          <section className="bihar-salary-info-grid">
            <div>
              <span>Basic Pay</span>
              <h3>Pay Matrix Cell</h3>

              <p>
                Basic Pay is based on the employee&apos;s applicable Pay Level
                and current matrix cell.
              </p>
            </div>

            <div>
              <span>DA</span>
              <h3>Dearness Allowance</h3>

              <p>
                DA is calculated as a percentage of eligible Basic Pay according
                to the applicable Bihar Finance Department order.
              </p>
            </div>

            <div>
              <span>HRA</span>
              <h3>House Rent Allowance</h3>

              <p>
                HRA entitlement can depend on applicable State Government rules
                and posting conditions.
              </p>
            </div>

            <div>
              <span>Deductions</span>
              <h3>Salary Recoveries</h3>

              <p>
                Pension contribution, income tax, recoveries and other
                deductions may reduce take-home salary.
              </p>
            </div>
          </section>

          <section className="bihar-salary-warning">
            <span className="section-kicker">Important</span>

            <h2>Do Not Use Central Government HRA Automatically</h2>

            <p>
              Central Government X, Y and Z city HRA rates should not
              automatically be treated as Bihar Government employee HRA rates.
            </p>

            <p>
              Enter the HRA percentage applicable to your Bihar Government post
              and posting according to the relevant State Government order.
            </p>
          </section>

          <section className="bihar-salary-official">
            <div>
              <span className="section-kicker">Official Verification</span>

              <h2>Check Your Salary Slip & Government Orders</h2>

              <p>
                Your service book, salary slip, pay-fixation order and Bihar
                Finance Department notifications should be treated as
                authoritative.
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
            salary estimate for informational purposes. GovtPayGuide is an
            independent website and is not affiliated with the Government of
            Bihar. Actual salary and entitlement must be verified from official
            Government orders and departmental records.
          </div>
        </div>
      </div>
    </main>
  );
}