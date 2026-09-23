import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "West Bengal Pay Commission Guide",
  description:
    "Explore West Bengal Pay Commission updates, ROPA 2019, 7th State Pay Commission developments, fitment factor analysis, pay matrix and salary resources.",
  alternates: {
    canonical: "/state-government/west-bengal/pay-commission",
  },
};

export default function WestBengalPayCommissionPage() {
  return (
    <main>
      {/* HERO */}
      <section className="wb-7pc-hero">
        <div className="container">
          <span className="page-badge">West Bengal</span>

          <h1>West Bengal Pay Commission Guide</h1>

          <p>
            Explore the current West Bengal pay structure, ROPA 2019,
            official 7th State Pay Commission developments, fitment factor
            analysis, Pay Matrix and related salary resources.
          </p>

          <div className="wb-7pc-hero-actions">
            <Link
              href="/updates/west-bengal-7th-pay-commission-latest-update-2026"
              className="primary-content-button"
            >
              View Latest Update →
            </Link>

            <a
              href="https://7spc.wb.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-content-button"
            >
              Official 7th SPC Portal ↗
            </a>
          </div>
        </div>
      </section>

      <div className="container wb-7pc-page">
        {/* CURRENT STATUS */}
        <section className="wb-7pc-section">
          <div className="wb-7pc-section-heading">
            <span className="section-kicker">Current Status</span>

            <h2>West Bengal 7th State Pay Commission</h2>

            <p>
              The Government of West Bengal constituted the 7th State Pay
              Commission in July 2026. The Commission is currently carrying
              out its review and consultation-related work.
            </p>
          </div>

          <div className="wb-7pc-warning">
            <h3>What Employees Should Know</h3>

            <p>
              A final fitment factor, revised Pay Matrix, revised minimum
              Basic Pay, pension revision method and implementation date have
              not yet been officially announced.
            </p>

            <p>
              Any salary figures or fitment-factor claims circulating without
              an official Commission recommendation and Government order
              should be treated only as estimates or speculation.
            </p>
          </div>
        </section>

        {/* MAIN RESOURCES */}
        <section className="wb-7pc-section">
          <div className="wb-7pc-section-heading">
            <span className="section-kicker">Pay Commission Resources</span>

            <h2>Choose the Information You Need</h2>

            <p>
              Use these dedicated pages for the latest official status,
              fitment-factor analysis, existing Pay Matrix and salary
              calculation.
            </p>
          </div>

          <div className="wb-7pc-related-grid">
            <Link href="/updates/west-bengal-7th-pay-commission-latest-update-2026">
              <span>Latest Update</span>
              <strong>
                7th Pay Commission Current Status →
              </strong>
            </Link>

            <Link href="/updates/west-bengal-7th-pay-commission-fitment-factor">
              <span>Analysis</span>
              <strong>
                Fitment Factor Explained →
              </strong>
            </Link>

            <Link href="/state-government/west-bengal/pay-matrix">
              <span>Pay Structure</span>
              <strong>
                West Bengal Pay Matrix →
              </strong>
            </Link>

            <Link href="/state-government/west-bengal/salary-calculator">
              <span>Calculator</span>
              <strong>
                West Bengal Salary Calculator →
              </strong>
            </Link>
          </div>
        </section>

        {/* CONFIRMED VS AWAITED */}
        <section className="wb-7pc-section">
          <div className="wb-7pc-section-heading">
            <span className="section-kicker">Status Check</span>

            <h2>Confirmed Information and Details Still Awaited</h2>

            <p>
              This distinction is important because the constitution of a Pay
              Commission does not automatically implement a new salary
              structure.
            </p>
          </div>

          <div className="wb-7pc-scope-grid">
            <div>
              <span>Confirmed</span>

              <h3>Commission Constituted</h3>

              <p>
                The West Bengal 7th State Pay Commission was officially
                constituted in July 2026.
              </p>
            </div>

            <div>
              <span>Confirmed</span>

              <h3>Members Appointed</h3>

              <p>
                A Chairperson, two members and a Member Secretary have been
                appointed to the Commission.
              </p>
            </div>

            <div>
              <span>Confirmed</span>

              <h3>Official Portal Available</h3>

              <p>
                A dedicated official portal is available for notices,
                documents, questionnaires and Commission-related information.
              </p>
            </div>

            <div>
              <span>Confirmed</span>

              <h3>Consultation Underway</h3>

              <p>
                The Commission has started its review and stakeholder
                consultation-related process.
              </p>
            </div>

            <div>
              <span>Awaited</span>

              <h3>Final Fitment Factor</h3>

              <p>
                No final fitment factor should currently be treated as
                officially announced.
              </p>
            </div>

            <div>
              <span>Awaited</span>

              <h3>Revised Pay Matrix</h3>

              <p>
                A final revised Pay Matrix and minimum Basic Pay are still
                awaited.
              </p>
            </div>

            <div>
              <span>Awaited</span>

              <h3>Implementation Date</h3>

              <p>
                The final effective date and implementation schedule have not
                yet been notified.
              </p>
            </div>

            <div>
              <span>Awaited</span>

              <h3>Pension Revision</h3>

              <p>
                The final pension fitment method and revised pension structure
                are yet to be decided.
              </p>
            </div>
          </div>
        </section>

        {/* CURRENT PAY STRUCTURE */}
        <section className="wb-7pc-section">
          <div className="wb-7pc-section-heading">
            <span className="section-kicker">Existing Structure</span>

            <h2>ROPA 2019 Remains Relevant</h2>

            <p>
              Until revised pay rules are formally notified, the existing West
              Bengal pay structure under the applicable ROPA 2019 rules
              continues to remain relevant for current salary calculations.
            </p>

            <p>
              The constitution of the 7th State Pay Commission does not
              immediately replace ROPA 2019. A future revision will require
              Commission recommendations, a Government decision and official
              implementation orders.
            </p>
          </div>

          <div className="wb-7pc-related-grid">
            <Link href="/state-government/west-bengal/pay-structure">
              ROPA 2019 Pay Structure →
            </Link>

            <Link href="/state-government/west-bengal/pay-matrix">
              Existing Pay Matrix →
            </Link>

            <Link href="/state-government/west-bengal/da">
              West Bengal DA Updates →
            </Link>

            <Link href="/state-government/west-bengal/pension">
              Pension and DR Guide →
            </Link>
          </div>
        </section>

        {/* OFFICIAL TIMELINE */}
        <section className="wb-7pc-section">
          <div className="wb-7pc-section-heading">
            <span className="section-kicker">Official Timeline</span>

            <h2>Major 7th Pay Commission Developments</h2>

            <p>
              These are some of the major official developments connected with
              the constitution and early work of the Commission.
            </p>
          </div>

          <div className="wb-7pc-timeline">
            <div className="wb-7pc-timeline-card">
              <span>22 July 2026</span>

              <h3>Commission Constituted</h3>

              <p>
                Resolution No. 2657-F(P1) constituted the 7th State Pay
                Commission along with its Terms of Reference.
              </p>
            </div>

            <div className="wb-7pc-timeline-card">
              <span>29 July 2026</span>

              <h3>Resolution Modified</h3>

              <p>
                Resolution No. 2760-F(P1) partially modified the earlier
                resolution dated 22 July 2026.
              </p>
            </div>

            <div className="wb-7pc-timeline-card">
              <span>August 2026</span>

              <h3>Commission Work Began</h3>

              <p>
                The Commission started its initial activities and the
                dedicated official portal became available.
              </p>
            </div>

            <div className="wb-7pc-timeline-card">
              <span>2 September 2026</span>

              <h3>Memoranda Invited</h3>

              <p>
                The Commission invited memoranda from organisations and
                individuals as part of its consultation process.
              </p>
            </div>
          </div>
        </section>

        {/* COMMISSION MEMBERS */}
        <section className="wb-7pc-section">
          <div className="wb-7pc-section-heading">
            <span className="section-kicker">Composition</span>

            <h2>7th State Pay Commission Members</h2>

            <p>
              The Commission includes a Chairperson, two members and a Member
              Secretary.
            </p>
          </div>

          <div className="wb-7pc-members-grid">
            <div className="wb-7pc-member-card">
              <span>Chairperson</span>
              <h3>Shri Naveen Prakash, IAS (Retd.)</h3>
            </div>

            <div className="wb-7pc-member-card">
              <span>Member</span>
              <h3>Dr. Partha Mukhopadhyay</h3>
            </div>

            <div className="wb-7pc-member-card">
              <span>Member</span>
              <h3>Dr. Partha Pratim Pal</h3>
            </div>

            <div className="wb-7pc-member-card">
              <span>Member Secretary</span>
              <h3>Shri Devi Prasad Karanam, IAS</h3>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="wb-7pc-section">
          <div className="wb-7pc-section-heading">
            <span className="section-kicker">Process</span>

            <h2>What Happens Before Salary Revision?</h2>

            <p>
              A new salary structure can be implemented only after several
              stages are completed.
            </p>
          </div>

          <div className="wb-7pc-process">
            <div>
              <span>1</span>

              <h3>Consultation</h3>

              <p>
                Employees, organisations and other stakeholders may submit
                views and memoranda.
              </p>
            </div>

            <div>
              <span>2</span>

              <h3>Review</h3>

              <p>
                The Commission examines pay, allowances, pension and related
                service matters.
              </p>
            </div>

            <div>
              <span>3</span>

              <h3>Recommendations</h3>

              <p>
                The Commission may submit its report and recommendations to
                the State Government.
              </p>
            </div>

            <div>
              <span>4</span>

              <h3>Government Decision</h3>

              <p>
                Implementation depends on the Government&apos;s decision and
                subsequent official pay-revision orders.
              </p>
            </div>
          </div>
        </section>

        {/* OFFICIAL PORTAL */}
        <section className="wb-7pc-portal">
          <div>
            <span className="section-kicker">Official Information</span>

            <h2>Use Official Sources for Final Decisions</h2>

            <p>
              The Commission portal and West Bengal Finance Department should
              be treated as the primary sources for resolutions, notices,
              reports and implementation orders.
            </p>
          </div>

          <div className="wb-7pc-portal-grid">
            <a
              href="https://7spc.wb.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>7th State Pay Commission</span>
              <strong>Open Official Portal ↗</strong>
            </a>

            <a
              href="https://finance.wb.gov.in/Fin_New/Pages/publication.aspx?type=36"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Pay Commission Orders</span>
              <strong>View Finance Department Orders ↗</strong>
            </a>

            <a
              href="https://finance.wb.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Finance Department</span>
              <strong>Visit Official Website ↗</strong>
            </a>

            <a
              href="https://7spc.wb.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Commission Notices</span>
              <strong>Check Latest Notices ↗</strong>
            </a>
          </div>
        </section>

        {/* RELATED RESOURCES */}
        <section className="wb-7pc-related">
          <h2>Related West Bengal Resources</h2>

          <div className="wb-7pc-related-grid">
            <Link href="/updates/west-bengal-7th-pay-commission-latest-update-2026">
              Latest 7th Pay Commission Update →
            </Link>

            <Link href="/updates/west-bengal-7th-pay-commission-fitment-factor">
              Fitment Factor Analysis →
            </Link>

            <Link href="/state-government/west-bengal/pay-structure">
              ROPA 2019 Pay Structure →
            </Link>

            <Link href="/state-government/west-bengal/pay-matrix">
              West Bengal Pay Matrix →
            </Link>

            <Link href="/state-government/west-bengal/salary-calculator">
              West Bengal Salary Calculator →
            </Link>

            <Link href="/state-government/west-bengal/pension">
              West Bengal Pension Guide →
            </Link>
          </div>
        </section>

        {/* DISCLAIMER */}
        <div className="calculator-disclaimer">
          <strong>Disclaimer:</strong> GovtPayGuide is an independent
          informational website and is not affiliated with the Government of
          West Bengal or the West Bengal 7th State Pay Commission. Final pay,
          pension, fitment factor, Pay Matrix and implementation details must
          be verified from official Government notifications.
        </div>
      </div>
    </main>
  );
}