"use client";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";
import { useMemo, useState } from "react";
import Link from "next/link";

const payLevels = [
  { level: "Level 1", basic: 17000 },
  { level: "Level 2", basic: 17600 },
  { level: "Level 3", basic: 18800 },
  { level: "Level 4", basic: 19700 },
  { level: "Level 5", basic: 21000 },
  { level: "Level 6", basic: 22700 },
  { level: "Level 6A", basic: 23800 },
  { level: "Level 7", basic: 24700 },
  { level: "Level 8", basic: 27000 },
  { level: "Level 9", basic: 28900 },
  { level: "Level 9A", basic: 31800 },
  { level: "Level 10", basic: 32100 },
  { level: "Level 10A", basic: 33000 },
  { level: "Level 10B", basic: 34500 },
  { level: "Level 10C", basic: 41800 },
  { level: "Level 11", basic: 33400 },
  { level: "Level 12", basic: 35800 },
  { level: "Level 12A", basic: 39500 },
  { level: "Level 12B", basic: 44800 },
  { level: "Level 13", basic: 37100 },
  { level: "Level 14", basic: 39900 },
  { level: "Level 15", basic: 42600 },
  { level: "Level 15A", basic: 52200 },
  { level: "Level 16", basic: 56100 },
  { level: "Level 16A", basic: 60300 },
  { level: "Level 17", basic: 67300 },
  { level: "Level 18", basic: 68400 },
  { level: "Level 19", basic: 95100 },
  { level: "Level 19A", basic: 95400 },
  { level: "Level 20", basic: 96100 },
  { level: "Level 21", basic: 123100 },
  { level: "Level 22", basic: 123600 },
  { level: "Level 23", basic: 125200 },
  { level: "Level 24", basic: 128900 },
];

export default function WestBengalSalaryCalculator() {
  const [selectedLevel, setSelectedLevel] = useState("Level 6");
  const [basicPay, setBasicPay] = useState("22700");

  const [daRate, setDaRate] = useState("");
  const [hraRate, setHraRate] = useState("");

  const [medicalAllowance, setMedicalAllowance] = useState("");
  const [otherAllowance, setOtherAllowance] = useState("");

  const [deductions, setDeductions] = useState("");

  const formatMoney = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(value);

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);

    const selected = payLevels.find((item) => item.level === level);

    if (selected) {
      setBasicPay(String(selected.basic));
    }
  };

  const result = useMemo(() => {
    const basic = Math.max(Number(basicPay) || 0, 0);
    const daPercent = Math.max(Number(daRate) || 0, 0);
    const hraPercent = Math.max(Number(hraRate) || 0, 0);

    const medical = Math.max(Number(medicalAllowance) || 0, 0);
    const other = Math.max(Number(otherAllowance) || 0, 0);
    const deductionAmount = Math.max(Number(deductions) || 0, 0);

    const da = (basic * daPercent) / 100;
    const hra = (basic * hraPercent) / 100;

    const gross = basic + da + hra + medical + other;

    const takeHome = Math.max(gross - deductionAmount, 0);

    return {
      basic,
      da,
      hra,
      medical,
      other,
      gross,
      deductions: deductionAmount,
      takeHome,
      annualGross: gross * 12,
      annualTakeHome: takeHome * 12,
    };
  }, [
    basicPay,
    daRate,
    hraRate,
    medicalAllowance,
    otherAllowance,
    deductions,
  ]);

  return (
    <main>
      <CalculatorJsonLd
  name="West Bengal Government Salary Calculator"
  description="Estimate West Bengal Government salary using ROPA pay level, Basic Pay, DA, HRA, allowances and deductions."
  url="/state-government/west-bengal/salary-calculator"
/>
      {/* HERO */}
      <section className="wb-salary-hero">
        <div className="container">
          <span className="page-badge">West Bengal Government</span>

          <h1>West Bengal Salary Calculator</h1>

          <p>
            Estimate salary using ROPA 2019 Pay Level, Basic Pay, DA, HRA,
            allowances and monthly deductions.
          </p>
        </div>
      </section>

      <div className="container wb-salary-page">
        {/* CALCULATOR */}
        <section className="wb-salary-calculator">
          <div className="calculator-heading">
            <span>ROPA 2019 Calculator</span>

            <h2>Calculate West Bengal Government Salary</h2>

            <p>
              Select your Pay Level and enter the applicable allowance and
              deduction details.
            </p>
          </div>

          <div className="wb-salary-input-grid">
            {/* PAY LEVEL */}
            <div className="form-group">
              <label htmlFor="payLevel">ROPA Pay Level</label>

              <select
                id="payLevel"
                value={selectedLevel}
                onChange={(e) => handleLevelChange(e.target.value)}
              >
                {payLevels.map((item) => (
                  <option key={item.level} value={item.level}>
                    {item.level} — ₹{formatMoney(item.basic)}
                  </option>
                ))}
              </select>

              <small>Starting Basic Pay will auto-fill.</small>
            </div>

            {/* BASIC PAY */}
            <div className="form-group">
              <label htmlFor="basicPay">Current Basic Pay</label>

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

              <small>
                Edit this if your current matrix cell is above the first cell.
              </small>
            </div>

            {/* DA */}
            <div className="form-group">
              <label htmlFor="daRate">DA Rate</label>

              <div className="input-wrap">
                <input
                  id="daRate"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter applicable DA"
                  value={daRate}
                  onChange={(e) => setDaRate(e.target.value)}
                />

                <span>%</span>
              </div>
            </div>

            {/* HRA */}
            <div className="form-group">
              <label htmlFor="hraRate">HRA Rate</label>

              <div className="input-wrap">
                <input
                  id="hraRate"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Enter applicable HRA"
                  value={hraRate}
                  onChange={(e) => setHraRate(e.target.value)}
                />

                <span>%</span>
              </div>
            </div>

            {/* MEDICAL */}
            <div className="form-group">
              <label htmlFor="medical">
                Medical / Fixed Allowance
              </label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="medical"
                  type="number"
                  min="0"
                  placeholder="0"
                  value={medicalAllowance}
                  onChange={(e) => setMedicalAllowance(e.target.value)}
                />
              </div>
            </div>

            {/* OTHER */}
            <div className="form-group">
              <label htmlFor="otherAllowance">
                Other Monthly Allowances
              </label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="otherAllowance"
                  type="number"
                  min="0"
                  placeholder="0"
                  value={otherAllowance}
                  onChange={(e) => setOtherAllowance(e.target.value)}
                />
              </div>
            </div>

            {/* DEDUCTION */}
            <div className="form-group">
              <label htmlFor="deductions">
                Total Monthly Deductions
              </label>

              <div className="input-wrap">
                <span>₹</span>

                <input
                  id="deductions"
                  type="number"
                  min="0"
                  placeholder="0"
                  value={deductions}
                  onChange={(e) => setDeductions(e.target.value)}
                />
              </div>

              <small>
                Include applicable NPS/GPF, tax, insurance, recovery or other
                deductions.
              </small>
            </div>
          </div>

          {/* RESULTS */}
          <div className="wb-salary-results">
            <div className="wb-salary-main-result">
              <span>Estimated Take-Home Salary</span>

              <strong>₹{formatMoney(result.takeHome)}</strong>

              <small>Per month</small>
            </div>

            <div className="wb-salary-result-grid">
              <div>
                <span>Basic Pay</span>
                <strong>₹{formatMoney(result.basic)}</strong>
              </div>

              <div>
                <span>DA</span>
                <strong>₹{formatMoney(result.da)}</strong>
              </div>

              <div>
                <span>HRA</span>
                <strong>₹{formatMoney(result.hra)}</strong>
              </div>

              <div>
                <span>Medical / Fixed</span>
                <strong>₹{formatMoney(result.medical)}</strong>
              </div>

              <div>
                <span>Other Allowances</span>
                <strong>₹{formatMoney(result.other)}</strong>
              </div>

              <div>
                <span>Gross Salary</span>
                <strong>₹{formatMoney(result.gross)}</strong>
              </div>

              <div>
                <span>Total Deductions</span>
                <strong>₹{formatMoney(result.deductions)}</strong>
              </div>

              <div>
                <span>Take-Home</span>
                <strong>₹{formatMoney(result.takeHome)}</strong>
              </div>
            </div>

            <div className="wb-annual-result">
              <div>
                <span>Estimated Annual Gross</span>
                <strong>₹{formatMoney(result.annualGross)}</strong>
              </div>

              <div>
                <span>Estimated Annual Take-Home</span>
                <strong>₹{formatMoney(result.annualTakeHome)}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="article-section">
          <span className="section-kicker">Calculation</span>

          <h2>How West Bengal Salary is Calculated</h2>

          <div className="formula-box">
            Gross Salary = Basic Pay + DA + HRA + Medical / Fixed Allowances +
            Other Allowances
          </div>

          <div className="formula-box">
            Estimated Take-Home = Gross Salary − Monthly Deductions
          </div>
        </section>

        {/* BASIC PAY */}
        <section className="article-section">
          <h2>ROPA Pay Level and Basic Pay</h2>

          <p>
            Selecting a Pay Level automatically loads the first-cell Basic Pay
            for that level. However, an employee who has already received
            increments may be drawing a higher Basic Pay within the same Pay
            Level.
          </p>

          <p>
            For this reason, the Basic Pay field remains editable.
          </p>

          <div className="wb-salary-actions">
            <Link
              href="/state-government/west-bengal/pay-matrix"
              className="content-button"
            >
              View WB Pay Matrix
            </Link>

            <a
              href="https://finance.wb.gov.in/writereaddata/ROPA-2019.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-content-button"
            >
              Download ROPA 2019
            </a>
          </div>
        </section>

        {/* DA */}
        <section className="article-section">
          <h2>DA Rate</h2>

          <p>
            The DA field is intentionally editable because Dearness Allowance
            rates can change through subsequent West Bengal Government orders.
            Enter the rate applicable to the salary period you want to
            calculate.
          </p>

          <Link
            href="/state-government/west-bengal/da"
            className="text-link"
          >
            Check West Bengal DA information →
          </Link>
        </section>

        {/* HRA */}
        <section className="article-section">
          <h2>HRA and Other Allowances</h2>

          <p>
            HRA and other allowances may depend on applicable government rules,
            place of posting, employee category and specific departmental
            orders. Therefore this calculator does not automatically assume a
            universal HRA rate.
          </p>
        </section>

        {/* DISCLAIMER */}
        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> This calculator provides an estimated
          salary only. Actual salary can differ due to pay fixation, current
          government orders, increment, promotion, pension contribution, tax,
          insurance, recovery, departmental allowances and other deductions.
          Verify official West Bengal Government records before relying on the
          result.
        </div>
      </div>
    </main>
  );
}