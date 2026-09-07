"use client";

import { useMemo, useState } from "react";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";

type Row = {
  id: number;
  monthKey: string;
  month: string;

  dueBasic: number;
  drawnBasic: number;

  dueDaRate: number;
  drawnDaRate: number;

  dueHraRate: number;
  drawnHraRate: number;

  received: number;
};

type RuleType =
  | "dueBasic"
  | "drawnBasic"
  | "dueDaRate"
  | "drawnDaRate"
  | "dueHraRate"
  | "drawnHraRate";

type ChangeRule = {
  id: number;
  type: RuleType;
  effectiveMonth: string;
  value: number;
};

const money = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(value || 0));

const round = (value: number) => Math.round(value || 0);

const ruleLabels: Record<RuleType, string> = {
  dueBasic: "Due Basic Pay",
  drawnBasic: "Drawn Basic Pay",
  dueDaRate: "Due DA Rate",
  drawnDaRate: "Drawn DA Rate",
  dueHraRate: "Due HRA Rate",
  drawnHraRate: "Drawn HRA Rate",
};

function formatMonthLabel(value: string) {
  if (!value) return "";

  const [year, month] = value.split("-").map(Number);

  return new Intl.DateTimeFormat("en-IN", {
    month: "short",
    year: "numeric",
  }).format(new Date(year, month - 1, 1));
}

function generateMonthRange(from: string, to: string) {
  if (!from || !to) return [];

  const [fromYear, fromMonth] = from.split("-").map(Number);
  const [toYear, toMonth] = to.split("-").map(Number);

  const start = new Date(fromYear, fromMonth - 1, 1);
  const end = new Date(toYear, toMonth - 1, 1);

  if (start > end) return [];

  const result: { key: string; label: string }[] = [];

  let year = fromYear;
  let month = fromMonth;

  while (
    year < toYear ||
    (year === toYear && month <= toMonth)
  ) {
    const key = `${year}-${String(month).padStart(2, "0")}`;

    result.push({
      key,
      label: formatMonthLabel(key),
    });

    month++;

    if (month > 12) {
      month = 1;
      year++;
    }
  }

  return result;
}

function monthNumber(monthKey: string) {
  if (!monthKey) return 0;

  const [year, month] = monthKey.split("-").map(Number);

  return year * 12 + month;
}

export default function BiharSalaryArrearsCalculator() {
  const [fromMonth, setFromMonth] = useState("2024-01");
  const [toMonth, setToMonth] = useState("2024-12");

  const [defaultDueBasic, setDefaultDueBasic] =
    useState(32000);

  const [defaultDrawnBasic, setDefaultDrawnBasic] =
    useState(32000);

  const [defaultDueDaRate, setDefaultDueDaRate] =
    useState(50);

  const [defaultDrawnDaRate, setDefaultDrawnDaRate] =
    useState(46);

  const [defaultDueHraRate, setDefaultDueHraRate] =
    useState(7.5);

  const [defaultDrawnHraRate, setDefaultDrawnHraRate] =
    useState(4);

  const [rules, setRules] = useState<ChangeRule[]>([]);

  const [rows, setRows] = useState<Row[]>([
    {
      id: 1,
      monthKey: "2024-01",
      month: "Jan 2024",
      dueBasic: 32000,
      drawnBasic: 32000,
      dueDaRate: 50,
      drawnDaRate: 46,
      dueHraRate: 7.5,
      drawnHraRate: 4,
      received: 0,
    },
  ]);

  const addRule = () => {
    setRules((current) => [
      ...current,
      {
        id: Date.now(),
        type: "dueBasic",
        effectiveMonth: fromMonth,
        value: 0,
      },
    ]);
  };

  const updateRule = (
    id: number,
    field: keyof ChangeRule,
    value: string
  ) => {
    setRules((current) =>
      current.map((rule) => {
        if (rule.id !== id) return rule;

        if (field === "value") {
          return {
            ...rule,
            value: Math.max(Number(value) || 0, 0),
          };
        }

        return {
          ...rule,
          [field]: value,
        };
      })
    );
  };

  const removeRule = (id: number) => {
    setRules((current) =>
      current.filter((rule) => rule.id !== id)
    );
  };

  const generateRows = () => {
    const months = generateMonthRange(fromMonth, toMonth);

    if (!months.length) {
      alert("Please select a valid month range.");
      return;
    }

    const sortedRules = [...rules].sort(
      (a, b) =>
        monthNumber(a.effectiveMonth) -
        monthNumber(b.effectiveMonth)
    );

    const generatedRows: Row[] = months.map(
      ({ key, label }, index) => {
        let dueBasic = defaultDueBasic;
        let drawnBasic = defaultDrawnBasic;

        let dueDaRate = defaultDueDaRate;
        let drawnDaRate = defaultDrawnDaRate;

        let dueHraRate = defaultDueHraRate;
        let drawnHraRate = defaultDrawnHraRate;

        const currentMonth = monthNumber(key);

        sortedRules.forEach((rule) => {
          if (
            monthNumber(rule.effectiveMonth) >
            currentMonth
          ) {
            return;
          }

          switch (rule.type) {
            case "dueBasic":
              dueBasic = rule.value;
              break;

            case "drawnBasic":
              drawnBasic = rule.value;
              break;

            case "dueDaRate":
              dueDaRate = rule.value;
              break;

            case "drawnDaRate":
              drawnDaRate = rule.value;
              break;

            case "dueHraRate":
              dueHraRate = rule.value;
              break;

            case "drawnHraRate":
              drawnHraRate = rule.value;
              break;
          }
        });

        return {
          id: Date.now() + index,
          monthKey: key,
          month: label,

          dueBasic,
          drawnBasic,

          dueDaRate,
          drawnDaRate,

          dueHraRate,
          drawnHraRate,

          received: 0,
        };
      }
    );

    setRows(generatedRows);
  };

  const addRow = () => {
    const last = rows[rows.length - 1];

    setRows([
      ...rows,
      {
        id: Date.now(),
        monthKey: "",
        month: "",
        dueBasic: last?.dueBasic || 0,
        drawnBasic: last?.drawnBasic || 0,
        dueDaRate: last?.dueDaRate || 0,
        drawnDaRate: last?.drawnDaRate || 0,
        dueHraRate: last?.dueHraRate || 0,
        drawnHraRate: last?.drawnHraRate || 0,
        received: 0,
      },
    ]);
  };

  const removeRow = (id: number) => {
    if (rows.length === 1) return;

    setRows((current) =>
      current.filter((row) => row.id !== id)
    );
  };

  const updateRow = (
    id: number,
    field: keyof Row,
    value: string
  ) => {
    setRows((current) =>
      current.map((row) => {
        if (row.id !== id) return row;

        if (field === "month") {
          return {
            ...row,
            month: value,
          };
        }

        return {
          ...row,
          [field]: Math.max(Number(value) || 0, 0),
        };
      })
    );
  };

  const calculatedRows = useMemo(() => {
    return rows.map((row) => {
      const basicArrear =
        row.dueBasic - row.drawnBasic;

      const dueDA = round(
        (row.dueBasic * row.dueDaRate) / 100
      );

      const drawnDA = round(
        (row.drawnBasic * row.drawnDaRate) / 100
      );

      const daArrear = dueDA - drawnDA;

      const dueHRA = round(
        (row.dueBasic * row.dueHraRate) / 100
      );

      const drawnHRA = round(
        (row.drawnBasic * row.drawnHraRate) / 100
      );

      const hraArrear = dueHRA - drawnHRA;

      const grossArrear =
        basicArrear + daArrear + hraArrear;

      const netArrear =
        grossArrear - row.received;

      return {
        ...row,
        basicArrear,
        dueDA,
        drawnDA,
        daArrear,
        dueHRA,
        drawnHRA,
        hraArrear,
        grossArrear,
        netArrear,
      };
    });
  }, [rows]);

  const totals = useMemo(() => {
    return calculatedRows.reduce(
      (total, row) => {
        total.basic += row.basicArrear;
        total.da += row.daArrear;
        total.hra += row.hraArrear;
        total.gross += row.grossArrear;
        total.received += row.received;
        total.net += row.netArrear;

        return total;
      },
      {
        basic: 0,
        da: 0,
        hra: 0,
        gross: 0,
        received: 0,
        net: 0,
      }
    );
  }, [calculatedRows]);

  const resetCalculator = () => {
    setRules([]);

    setRows([
      {
        id: Date.now(),
        monthKey: "",
        month: "",
        dueBasic: 0,
        drawnBasic: 0,
        dueDaRate: 0,
        drawnDaRate: 0,
        dueHraRate: 0,
        drawnHraRate: 0,
        received: 0,
      },
    ]);
  };

  return (
    <main>
      <CalculatorJsonLd
        name="Bihar Salary Arrears Calculator"
        description="Calculate Bihar Government salary arrears month-wise including Basic Pay, DA, HRA, increment changes and previously received arrears."
        url="/state-government/bihar/salary-arrears-calculator"
      />

      <section className="bsa-hero">
        <div className="container">
          <span className="page-badge">
            Bihar Government Calculator
          </span>

          <h1>Bihar Salary Arrears Calculator</h1>

          <p>
            Calculate month-wise Basic Pay, DA and HRA
            arrears with automatic increment and rate-change
            schedules.
          </p>
        </div>
      </section>

      <div className="container bsa-page">
        {/* STEP 1 */}
        <section className="bsa-generator">
          <div className="bsa-generator-heading">
            <span className="section-kicker">
              Step 1
            </span>

            <h2>Select Arrear Period</h2>

            <p>
              Choose the first and last month of the claim
              period.
            </p>
          </div>

          <div className="bsa-generator-grid">
            <label>
              <span>From Month</span>

              <input
                type="month"
                value={fromMonth}
                onChange={(e) =>
                  setFromMonth(e.target.value)
                }
              />

              <small>
                {formatMonthLabel(fromMonth)}
              </small>
            </label>

            <label>
              <span>To Month</span>

              <input
                type="month"
                value={toMonth}
                onChange={(e) =>
                  setToMonth(e.target.value)
                }
              />

              <small>
                {formatMonthLabel(toMonth)}
              </small>
            </label>
          </div>

          {/* STARTING VALUES */}
          <div className="bsa-default-heading">
            <span className="section-kicker">
              Step 2
            </span>

            <h3>Starting Salary Values</h3>

            <p>
              Enter the values applicable at the beginning
              of the arrear period.
            </p>
          </div>

          <div className="bsa-default-grid">
            <GeneratorInput
              label="Due Basic"
              value={defaultDueBasic}
              onChange={setDefaultDueBasic}
            />

            <GeneratorInput
              label="Drawn Basic"
              value={defaultDrawnBasic}
              onChange={setDefaultDrawnBasic}
            />

            <GeneratorInput
              label="Due DA %"
              value={defaultDueDaRate}
              onChange={setDefaultDueDaRate}
              step="0.01"
            />

            <GeneratorInput
              label="Drawn DA %"
              value={defaultDrawnDaRate}
              onChange={setDefaultDrawnDaRate}
              step="0.01"
            />

            <GeneratorInput
              label="Due HRA %"
              value={defaultDueHraRate}
              onChange={setDefaultDueHraRate}
              step="0.01"
            />

            <GeneratorInput
              label="Drawn HRA %"
              value={defaultDrawnHraRate}
              onChange={setDefaultDrawnHraRate}
              step="0.01"
            />
          </div>
        </section>

        {/* RULES */}
        <section className="bsa-rules-section">
          <div className="bsa-rules-heading">
            <div>
              <span className="section-kicker">
                Step 3
              </span>

              <h2>Add Increment / Rate Change Rules</h2>

              <p>
                Add a rule whenever Basic Pay, DA or HRA
                changes. The new value will automatically
                apply from that month onward.
              </p>
            </div>

            <button
              type="button"
              className="bsa-rule-add"
              onClick={addRule}
            >
              + Add Change Rule
            </button>
          </div>

          {rules.length === 0 ? (
            <div className="bsa-empty-rules">
              No change rules added yet. Add one if Basic
              Pay, DA or HRA changes during the claim
              period.
            </div>
          ) : (
            <div className="bsa-rules-list">
              {rules.map((rule, index) => (
                <div
                  className="bsa-rule-row"
                  key={rule.id}
                >
                  <div className="bsa-rule-number">
                    {index + 1}
                  </div>

                  <label>
                    <span>Change Type</span>

                    <select
                      value={rule.type}
                      onChange={(e) =>
                        updateRule(
                          rule.id,
                          "type",
                          e.target.value
                        )
                      }
                    >
                      <option value="dueBasic">
                        Due Basic Pay
                      </option>

                      <option value="drawnBasic">
                        Drawn Basic Pay
                      </option>

                      <option value="dueDaRate">
                        Due DA Rate
                      </option>

                      <option value="drawnDaRate">
                        Drawn DA Rate
                      </option>

                      <option value="dueHraRate">
                        Due HRA Rate
                      </option>

                      <option value="drawnHraRate">
                        Drawn HRA Rate
                      </option>
                    </select>
                  </label>

                  <label>
                    <span>Effective From</span>

                    <input
                      type="month"
                      value={rule.effectiveMonth}
                      onChange={(e) =>
                        updateRule(
                          rule.id,
                          "effectiveMonth",
                          e.target.value
                        )
                      }
                    />
                  </label>

                  <label>
                    <span>
                      {rule.type.includes("Rate")
                        ? "New Rate (%)"
                        : "New Amount (₹)"}
                    </span>

                    <input
                      type="number"
                      min="0"
                      step={
                        rule.type.includes("Rate")
                          ? "0.01"
                          : "1"
                      }
                      value={rule.value}
                      onChange={(e) =>
                        updateRule(
                          rule.id,
                          "value",
                          e.target.value
                        )
                      }
                    />
                  </label>

                  <button
                    type="button"
                    className="bsa-rule-remove"
                    onClick={() =>
                      removeRule(rule.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="bsa-rules-example">
            <strong>Example:</strong>

            <span>
              Due Basic ₹32,960 from Jul 2024
            </span>

            <span>
              Drawn Basic ₹32,960 from Apr 2025
            </span>

            <span>
              Due DA 53% from Jul 2024
            </span>

            <span>
              Drawn DA 50% from a later month
            </span>
          </div>
        </section>

        {/* GENERATE */}
        <section className="bsa-generate-panel">
          <div>
            <span className="section-kicker">
              Step 4
            </span>

            <h2>Generate Month-wise Calculation</h2>

            <p>
              The calculator will combine your starting
              salary values with all change rules.
            </p>
          </div>

          <button
            type="button"
            className="bsa-generate-button"
            onClick={generateRows}
          >
            Generate Month-wise Rows
          </button>
        </section>

        {/* TABLE */}
        <section className="bsa-table-section">
          <div className="bsa-intro">
            <span className="section-kicker">
              Month-wise Calculation
            </span>

            <h2>Due vs Drawn Salary</h2>

            <p>
              Every generated value remains editable.
            </p>
          </div>

          <div className="bsa-table-card">
            <div className="bsa-table-scroll">
              <table className="bsa-table">
                <thead>
                  <tr>
                    <th>Month</th>

                    <th>Due Basic</th>
                    <th>Drawn Basic</th>
                    <th>Basic Arrear</th>

                    <th>Due DA %</th>
                    <th>Due DA</th>

                    <th>Drawn DA %</th>
                    <th>Drawn DA</th>

                    <th>DA Arrear</th>

                    <th>Due HRA %</th>
                    <th>Due HRA</th>

                    <th>Drawn HRA %</th>
                    <th>Drawn HRA</th>

                    <th>HRA Arrear</th>

                    <th>Gross Arrear</th>
                    <th>Already Received</th>
                    <th>Net Arrear</th>

                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {calculatedRows.map((row) => (
                    <tr key={row.id}>
                      <td>
                        <input
                          className="bsa-month-input"
                          value={row.month}
                          onChange={(e) =>
                            updateRow(
                              row.id,
                              "month",
                              e.target.value
                            )
                          }
                        />
                      </td>

                      <td>
                        <MoneyInput
                          value={row.dueBasic}
                          onChange={(value) =>
                            updateRow(
                              row.id,
                              "dueBasic",
                              value
                            )
                          }
                        />
                      </td>

                      <td>
                        <MoneyInput
                          value={row.drawnBasic}
                          onChange={(value) =>
                            updateRow(
                              row.id,
                              "drawnBasic",
                              value
                            )
                          }
                        />
                      </td>

                      <ResultCell
                        value={row.basicArrear}
                      />

                      <td>
                        <RateInput
                          value={row.dueDaRate}
                          onChange={(value) =>
                            updateRow(
                              row.id,
                              "dueDaRate",
                              value
                            )
                          }
                        />
                      </td>

                      <ResultCell
                        value={row.dueDA}
                      />

                      <td>
                        <RateInput
                          value={row.drawnDaRate}
                          onChange={(value) =>
                            updateRow(
                              row.id,
                              "drawnDaRate",
                              value
                            )
                          }
                        />
                      </td>

                      <ResultCell
                        value={row.drawnDA}
                      />

                      <ResultCell
                        value={row.daArrear}
                        highlight
                      />

                      <td>
                        <RateInput
                          value={row.dueHraRate}
                          onChange={(value) =>
                            updateRow(
                              row.id,
                              "dueHraRate",
                              value
                            )
                          }
                        />
                      </td>

                      <ResultCell
                        value={row.dueHRA}
                      />

                      <td>
                        <RateInput
                          value={row.drawnHraRate}
                          onChange={(value) =>
                            updateRow(
                              row.id,
                              "drawnHraRate",
                              value
                            )
                          }
                        />
                      </td>

                      <ResultCell
                        value={row.drawnHRA}
                      />

                      <ResultCell
                        value={row.hraArrear}
                        highlight
                      />

                      <ResultCell
                        value={row.grossArrear}
                        strong
                      />

                      <td>
                        <MoneyInput
                          value={row.received}
                          onChange={(value) =>
                            updateRow(
                              row.id,
                              "received",
                              value
                            )
                          }
                        />
                      </td>

                      <ResultCell
                        value={row.netArrear}
                        total
                      />

                      <td>
                        <button
                          type="button"
                          className="bsa-remove"
                          onClick={() =>
                            removeRow(row.id)
                          }
                          disabled={rows.length === 1}
                        >
                          ×
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bsa-table-actions">
              <button
                type="button"
                className="bsa-add-button"
                onClick={addRow}
              >
                + Add Month
              </button>

              <button
                type="button"
                className="bsa-reset-button"
                onClick={resetCalculator}
              >
                Reset
              </button>
            </div>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="bsa-summary">
          <div className="bsa-summary-title">
            <span className="section-kicker">
              Final Calculation
            </span>

            <h2>Arrear Summary</h2>
          </div>

          <div className="bsa-summary-grid">
            <SummaryCard
              label="Basic Pay Arrear"
              value={totals.basic}
            />

            <SummaryCard
              label="DA Arrear"
              value={totals.da}
            />

            <SummaryCard
              label="HRA Arrear"
              value={totals.hra}
            />

            <SummaryCard
              label="Gross Arrear"
              value={totals.gross}
            />

            <SummaryCard
              label="Already Received"
              value={totals.received}
            />

            <div className="bsa-summary-card bsa-net-card">
              <span>Net Payable Arrear</span>

              <strong>
                ₹{money(totals.net)}
              </strong>
            </div>
          </div>
        </section>

        <section className="bsa-warning">
          <span className="section-kicker">
            Important
          </span>

          <h2>Due and Drawn Changes Can Be Different</h2>

          <p>
            If an increment became due in one month but was
            actually drawn from a later month, create two
            separate rules: one for Due Basic and another
            for Drawn Basic.
          </p>

          <p>
            The same method can be used for DA and HRA
            revisions.
          </p>
        </section>

        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> This calculator
          provides a mathematical arrear estimate. Actual
          entitlement depends on applicable Bihar
          Government orders, service records, pay
          fixation, HRMS records and payments or
          adjustments already made.
        </div>
      </div>
    </main>
  );
}

function GeneratorInput({
  label,
  value,
  onChange,
  step = "1",
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: string;
}) {
  return (
    <label>
      <span>{label}</span>

      <input
        type="number"
        min="0"
        step={step}
        value={value}
        onChange={(e) =>
          onChange(
            Math.max(Number(e.target.value) || 0, 0)
          )
        }
      />
    </label>
  );
}

function MoneyInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: string) => void;
}) {
  return (
    <input
      className="bsa-number-input"
      type="number"
      min="0"
      step="1"
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    />
  );
}

function RateInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: string) => void;
}) {
  return (
    <div className="bsa-rate-wrap">
      <input
        className="bsa-rate-input"
        type="number"
        min="0"
        step="0.01"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />

      <span>%</span>
    </div>
  );
}

function ResultCell({
  value,
  highlight = false,
  strong = false,
  total = false,
}: {
  value: number;
  highlight?: boolean;
  strong?: boolean;
  total?: boolean;
}) {
  return (
    <td
      className={[
        "bsa-result-cell",
        highlight
          ? "bsa-highlight-cell"
          : "",
        strong
          ? "bsa-strong-cell"
          : "",
        total
          ? "bsa-total-cell"
          : "",
      ].join(" ")}
    >
      ₹{money(value)}
    </td>
  );
}

function SummaryCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="bsa-summary-card">
      <span>{label}</span>
      <strong>₹{money(value)}</strong>
    </div>
  );
}