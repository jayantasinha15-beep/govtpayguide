"use client";
import CalculatorJsonLd from "@/components/CalculatorJsonLd";
import { useMemo, useState } from "react";

type CityClass = "X" | "Y" | "Z";

const cityRates: Record<CityClass, number> = {
  X: 30,
  Y: 20,
  Z: 10,
};

export default function HRACalculatorPage() {
  const [basicPay, setBasicPay] = useState<number>(35400);
  const [cityClass, setCityClass] = useState<CityClass>("X");
  const [manualRate, setManualRate] = useState<string>("");

  const automaticRate = cityRates[cityClass];

  const hraRate =
    manualRate.trim() !== ""
      ? Math.max(Number(manualRate) || 0, 0)
      : automaticRate;

  const result = useMemo(() => {
    const basic = Math.max(basicPay || 0, 0);
    const monthlyHRA = (basic * hraRate) / 100;
    const annualHRA = monthlyHRA * 12;
    const basicPlusHRA = basic + monthlyHRA;

    return {
      monthlyHRA,
      annualHRA,
      basicPlusHRA,
    };
  }, [basicPay, hraRate]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <main className="hra-pro-page">
      <CalculatorJsonLd
  name="Central Government HRA Calculator"
  description="Estimate Central Government House Rent Allowance using Basic Pay and applicable HRA rate."
  url="/hra-calculator"
/>
      <section className="hra-pro-hero">
        <div className="container">
          <span className="page-badge">Central Government Calculator</span>

          <h1>Central Government HRA Calculator</h1>

          <p>
            Estimate House Rent Allowance based on Basic Pay and X, Y or Z city
            classification. You can also manually override the HRA rate when
            needed.
          </p>
        </div>
      </section>

      <section className="container hra-pro-section">
        <div className="hra-pro-layout">
          <div className="hra-pro-calculator">
            <div className="hra-pro-card-heading">
              <span>HRA Calculator</span>
              <h2>Enter your salary details</h2>
            </div>

            <div className="hra-pro-input-grid">
              <div className="hra-pro-field">
                <label htmlFor="basicPay">Basic Pay</label>

                <div className="hra-pro-input-wrap">
                  <span>₹</span>

                  <input
                    id="basicPay"
                    type="number"
                    min="0"
                    value={basicPay}
                    onChange={(e) =>
                      setBasicPay(Math.max(Number(e.target.value), 0))
                    }
                  />
                </div>

                <small>
                  Enter Basic Pay from the applicable Pay Matrix cell.
                </small>
              </div>

              <div className="hra-pro-field">
                <label htmlFor="cityClass">City Classification</label>

                <select
                  id="cityClass"
                  value={cityClass}
                  onChange={(e) =>
                    setCityClass(e.target.value as CityClass)
                  }
                >
                  <option value="X">X Class City — 30%</option>
                  <option value="Y">Y Class City — 20%</option>
                  <option value="Z">Z Class City — 10%</option>
                </select>

                <small>
                  Select the applicable Central Government HRA city class.
                </small>
              </div>

              <div className="hra-pro-field hra-pro-field-full">
                <label htmlFor="manualRate">
                  Manual HRA Rate
                  <span className="hra-pro-optional">Optional</span>
                </label>

                <div className="hra-pro-input-wrap">
                  <input
                    id="manualRate"
                    type="number"
                    min="0"
                    step="0.01"
                    value={manualRate}
                    placeholder={`Automatic: ${automaticRate}`}
                    onChange={(e) => setManualRate(e.target.value)}
                  />

                  <span>%</span>
                </div>

                <small>
                  Leave blank to automatically use the selected X/Y/Z city
                  rate. Enter a percentage only if a different applicable rate
                  needs to be estimated.
                </small>
              </div>
            </div>

            <div className="hra-pro-rate-box">
              <div>
                <span>Selected City</span>
                <strong>{cityClass} Class</strong>
              </div>

              <div>
                <span>HRA Rate Used</span>
                <strong>{hraRate}%</strong>
              </div>
            </div>

            <div className="hra-pro-result">
              <div className="hra-pro-main-result">
                <span>Estimated Monthly HRA</span>
                <strong>{formatCurrency(result.monthlyHRA)}</strong>
              </div>

              <div className="hra-pro-result-grid">
                <div>
                  <span>Basic Pay</span>
                  <strong>{formatCurrency(basicPay)}</strong>
                </div>

                <div>
                  <span>HRA Rate</span>
                  <strong>{hraRate}%</strong>
                </div>

                <div>
                  <span>Basic + HRA</span>
                  <strong>{formatCurrency(result.basicPlusHRA)}</strong>
                </div>

                <div>
                  <span>Annual HRA</span>
                  <strong>{formatCurrency(result.annualHRA)}</strong>
                </div>
              </div>
            </div>

            <div className="hra-pro-formula">
              <span>Formula</span>

              <strong>
                HRA = Basic Pay × HRA Rate ÷ 100
              </strong>

              <p>
                Example: Basic Pay ₹35,400 × {hraRate}% ={" "}
                {formatCurrency((35400 * hraRate) / 100)} per month.
              </p>
            </div>
          </div>

          <aside className="hra-pro-sidebar">
            <div className="hra-pro-sidebar-card">
              <span>Current Calculator Rates</span>

              <h3>X / Y / Z Classification</h3>

              <div className="hra-pro-rate-list">
                <div>
                  <strong>X</strong>
                  <span>30%</span>
                </div>

                <div>
                  <strong>Y</strong>
                  <span>20%</span>
                </div>

                <div>
                  <strong>Z</strong>
                  <span>10%</span>
                </div>
              </div>

              <p>
                These rates correspond to the HRA stage applicable after DA
                crosses 50% under the Central Government HRA framework.
              </p>
            </div>

            <div className="hra-pro-sidebar-card">
              <span>Important</span>

              <h3>Central Government only</h3>

              <p>
                Do not use this calculator for West Bengal or another State
                Government unless that Government follows the same applicable
                HRA rule.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="hra-pro-light-section">
        <div className="container">
          <div className="hra-pro-section-heading">
            <span>HRA Rates</span>
            <h2>How Central Government HRA rates change</h2>

            <p>
              Under the Seventh Central Pay Commission HRA implementation
              order, rates increase when Dearness Allowance crosses specified
              thresholds.
            </p>
          </div>

          <div className="hra-pro-table-wrap">
            <table className="hra-pro-table">
              <thead>
                <tr>
                  <th>DA Stage</th>
                  <th>X City</th>
                  <th>Y City</th>
                  <th>Z City</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Initial HRA Rates</td>
                  <td>24%</td>
                  <td>16%</td>
                  <td>8%</td>
                </tr>

                <tr>
                  <td>After DA crosses 25%</td>
                  <td>27%</td>
                  <td>18%</td>
                  <td>9%</td>
                </tr>

                <tr className="hra-pro-active-row">
                  <td>After DA crosses 50%</td>
                  <td>30%</td>
                  <td>20%</td>
                  <td>10%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="hra-pro-table-note">
            Rates are percentages of Basic Pay. Individual eligibility can
            still depend on applicable Government rules and accommodation
            conditions.
          </p>
        </div>
      </section>

      <section className="container hra-pro-section">
        <div className="hra-pro-info-grid">
          <div className="hra-pro-info-card">
            <span>01</span>
            <h3>What is HRA?</h3>

            <p>
              House Rent Allowance is an allowance provided to eligible
              employees toward housing-related expenses, subject to applicable
              Government rules.
            </p>
          </div>

          <div className="hra-pro-info-card">
            <span>02</span>
            <h3>What is Basic Pay?</h3>

            <p>
              For this HRA framework, Basic Pay refers to pay drawn in the
              prescribed Pay Matrix level. Other components such as special pay
              are not automatically included in Basic Pay for this calculation.
            </p>
          </div>

          <div className="hra-pro-info-card">
            <span>03</span>
            <h3>Why X, Y and Z?</h3>

            <p>
              Central Government cities and towns are classified into X, Y and
              Z categories for HRA purposes according to Government
              classification orders.
            </p>
          </div>
        </div>
      </section>

      <section className="container hra-pro-section hra-pro-source-section">
        <div className="hra-pro-source-card">
          <div>
            <span>Official Source</span>

            <h2>Department of Expenditure</h2>

            <p>
              The Central Government HRA framework is based on Ministry of
              Finance, Department of Expenditure orders regarding implementation
              of Seventh Central Pay Commission recommendations for House Rent
              Allowance.
            </p>
          </div>

          <a
            href="https://doe.gov.in/orders-circulars/32"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-content-button"
          >
            View Official HRA Orders ↗
          </a>
        </div>
      </section>

      <section className="container hra-pro-warning">
        <strong>Important Disclaimer</strong>

        <p>
          This calculator provides an estimate for Central Government HRA.
          Actual entitlement may depend on city classification, Government
          accommodation, posting conditions, employee eligibility and other
          applicable rules. Always verify the applicable Government order and
          official salary record before making financial or service-related
          decisions.
        </p>
      </section>
    </main>
  );
}