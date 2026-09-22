import Link from "next/link";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Pay, Pension & Job Updates",
  description:
    "Explore government salary, DA, Pay Commission, pension, calculators, recruitment notifications, job guides and government job news.",
  alternates: {
    canonical: "https://www.govtpayindia.com/",
  },
};
export const revalidate = 60;

type DbArticle = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  status: string;
  published_at: string | null;
  featured: boolean;
  featured_image: string | null;
  subcategory: {
    id: string;
    name: string;
    slug: string;
  } | null;
};

type LatestUpdate = {
  title: string;
  description: string;
  category: string;
  status: string;
  subcategory: string | null;
  publishedAt: string;
  href: string;
  featured?: boolean;
  featuredImage?: string | null;
};

function getSupabase() {
  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Supabase environment variables are missing."
    );
  }

  return createClient(
    supabaseUrl,
    supabaseKey
  );
}

async function getPublishedArticles() {
  const supabase = getSupabase();

  const { data, error } = await supabase
    .from("articles")
    .select(`
      id,
      title,
      slug,
      description,
      category,
      status,
      published_at,
      featured,
      featured_image,
      subcategory:subcategories!articles_subcategory_id_fkey (
        id,
        name,
        slug
      )
    `)
    .eq("published", true)
    .order("published_at", {
      ascending: false,
    });

  if (error) {
    console.error(
      "Failed to load homepage articles:",
      error
    );

    return [];
  }

  return (data ?? []) as unknown as DbArticle[];
}

export default async function Home() {
  const dbArticles =
    await getPublishedArticles();

  const supabaseUpdates: LatestUpdate[] =
    dbArticles.map((article) => ({
      title: article.title,
      description: article.description,
      category: article.category,
      status: article.status,
      subcategory: article.subcategory?.name ?? null,
      publishedAt:
        article.published_at ??
        new Date(0).toISOString(),
      href: `/updates/${article.slug}`,
      featured: article.featured,
      featuredImage: article.featured_image,
    }));

  const sortedUpdates = [...supabaseUpdates].sort(
  (a, b) =>
    new Date(b.publishedAt).getTime() -
    new Date(a.publishedAt).getTime()
);

// Admin থেকে "Feature on Homepage" ON করা articles
const featuredUpdates = sortedUpdates
  .filter((article) => article.featured === true)
  .slice(0, 3);

// Featured articles বাদ দিয়ে normal latest articles
const latestUpdates = sortedUpdates
  .filter((article) => article.featured !== true)
  .slice(0, 3);

  return (
    <main>
      {/* =====================================
          HERO
      ====================================== */}

      <section className="home-hero">
        <div className="container home-hero-inner">
          <div className="home-hero-content">
            <span className="page-badge">
              Government Pay & Job Guide
            </span>

            <h1>
              Government Pay, Pension
              & Job Updates
            </h1>

            <p>
              Get clear information about
              Central and State Government
              salary, Dearness Allowance,
              Pay Commission, pension,
              pay matrix, recruitment
              notifications, job guides and
              useful salary calculators.
            </p>

            <div className="home-hero-actions">
              <Link
                href="/updates"
                className="home-primary-button"
              >
                Latest Updates →
              </Link>

              <Link
                href="/government-jobs"
                className="home-secondary-button"
              >
                Explore Government Jobs
              </Link>
            </div>
          </div>

          <div className="home-hero-card">
            <span className="home-hero-card-label">
              GovtPayGuide
            </span>

            <h2>
              Your Government Information
              Hub
            </h2>

            <p>
              Salary guides, DA revisions,
              Pay Commission updates,
              calculators and government
              job information in one place.
            </p>

            <div className="home-hero-points">
              <span>
                ✓ Central Government
              </span>

              <span>
                ✓ State Government
              </span>

              <span>
                ✓ Salary Calculators
              </span>

              <span>
                ✓ Pension Guides
              </span>

              <span>
                ✓ Government Jobs
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="trust-notice">
  <div className="trust-notice-inner">
    <h2>Independent Government Information Portal</h2>

    <p>
      GovtPayGuide is an independent informational website providing guides,
      calculators and updates related to government salary, Dearness Allowance,
      Pay Commission, pension, employee pay matters, recruitment notifications
      and government job guides.
    </p>

    <p>
        GovtPayGuide is an independent informational website. Please verify
        important details from the relevant official authority.
    </p>

  </div>
</section>

      {/* =====================================
          QUICK LINKS
      ====================================== */}

      <section className="home-section">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <span className="section-label">
                Explore
              </span>

              <h2>
                Popular Government Pay Topics
              </h2>
            </div>
          </div>

          <div className="home-quick-grid">
            <Link
              href="/central-government"
              className="home-quick-card"
            >
              <span className="home-quick-icon">
                🏛️
              </span>

              <h3>
                Central Government
              </h3>

              <p>
                Salary, DA, Pay Matrix and
                Central Government employee
                information.
              </p>

              <span>
                Explore →
              </span>
            </Link>

            <Link
              href="/da"
              className="home-quick-card"
            >
              <span className="home-quick-icon">
                📈
              </span>

              <h3>
                DA Updates
              </h3>

              <p>
                Latest Dearness Allowance
                rates, revisions and effective
                dates.
              </p>

              <span>
                View DA →
              </span>
            </Link>

            <Link
              href="/pay-commission"
              className="home-quick-card"
            >
              <span className="home-quick-icon">
                📊
              </span>

              <h3>
                Pay Commission
              </h3>

              <p>
                Pay Commission news,
                recommendations and salary
                revision guides.
              </p>

              <span>
                Learn More →
              </span>
            </Link>

            <Link
              href="/state-government"
              className="home-quick-card"
            >
              <span className="home-quick-icon">
                🇮🇳
              </span>

              <h3>
                State Governments
              </h3>

              <p>
                State-wise Government salary,
                DA, pension and Pay Commission
                information.
              </p>

              <span>
                Browse States →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          GOVERNMENT JOBS
      ====================================== */}

      <section className="home-section home-state-section">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <span className="section-label">
                Government Jobs
              </span>

              <h2>
                Recruitment Notifications & Job Guides
              </h2>

              <p>
                Explore active recruitment notifications, upcoming vacancy
                news, post-wise salary information and practical job guides.
              </p>
            </div>

            <Link
              href="/government-jobs"
              className="home-view-all-link"
            >
              View Government Jobs →
            </Link>
          </div>

          <div className="home-quick-grid">
            <Link
              href="/government-jobs/notifications"
              className="home-quick-card"
            >
              <span className="home-quick-icon">
                📢
              </span>

              <h3>Recruitment Notifications</h3>

              <p>
                Check published vacancies, eligibility, important dates and
                official application links.
              </p>

              <span>View Notifications →</span>
            </Link>

            <Link
              href="/government-jobs/guides"
              className="home-quick-card"
            >
              <span className="home-quick-icon">
                📘
              </span>

              <h3>Government Job Guides</h3>

              <p>
                Understand salary, pay level, allowances, selection process
                and career growth for government posts.
              </p>

              <span>Browse Job Guides →</span>
            </Link>

            <Link
              href="/government-jobs"
              className="home-quick-card"
            >
              <span className="home-quick-icon">
                📰
              </span>

              <h3>Recruitment News</h3>

              <p>
                Follow upcoming vacancies, recruitment developments and
                important updates for candidates.
              </p>

              <span>Read Job News →</span>
            </Link>
          </div>
        </div>
      </section>
      {/* =====================================
    FEATURED UPDATES
====================================== */}

{featuredUpdates.length > 0 && (
  <section className="home-section home-featured-section">
    <div className="container">
      <div className="home-section-heading">
        <div>
          <span className="section-label">
            Featured
          </span>

          <h2>
            Featured Government Updates & Job News
          </h2>

          <p>
            Important salary, DA, Pay Commission, pension and recruitment
            updates selected for the homepage.
          </p>
        </div>
      </div>

      <div className="featured-news-grid">
        {featuredUpdates.map((item) => {
          const formattedDate = new Date(
            item.publishedAt
          ).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric",
          });

          return (
            <article
              className="featured-news-card"
              key={item.href}
            >
              {item.featuredImage && (
  <Link
    href={item.href}
    className="featured-news-image-link"
  >
    <div className="featured-news-image">
      <Image
  src={item.featuredImage}
  alt={item.title}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
  quality={75}
  loading="lazy"
  style={{
  objectFit: "contain",
  objectPosition: "center",
}}
/>
    </div>
  </Link>
)}
              <div className="featured-news-top">
                <span className="featured-badge">
                  Featured
                </span>

                <span className="featured-news-date">
                  {formattedDate}
                </span>
              </div>

              <div className="latest-news-meta">
                <span className="latest-news-category">
                  {item.category}
                </span>

                {item.subcategory && (
                  <span className="latest-news-subcategory">
                    {item.subcategory}
                  </span>
                )}

                <span className="latest-news-status">
                  {item.status}
                </span>
              </div>

              <Link href={item.href}>
                <h3>
                  {item.title}
                </h3>
              </Link>

              <p>
                {item.description}
              </p>

              <Link
                href={item.href}
                className="latest-news-link"
              >
                Read Featured Update →
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  </section>
)}

      {/* =====================================
          LATEST UPDATES
      ====================================== */}

      <section className="home-section home-news-section">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <span className="section-label">
                Latest Updates
              </span>

              <h2>
                Latest Government Updates & Job News
              </h2>

              <p>
                Recent salary, DA, Pay Commission, pension, recruitment
                notifications and government job developments.
              </p>
            </div>

            <Link
              href="/updates"
              className="home-view-all-link"
            >
              View All Updates →
            </Link>
          </div>

          {latestUpdates.length > 0 ? (
            <div className="latest-news-grid">
              {latestUpdates.map((item) => {
                const formattedDate =
                  new Date(
                    item.publishedAt
                  ).toLocaleDateString(
                    "en-IN",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }
                  );

                return (
                  <article
                    className="latest-news-card"
                    key={item.href}
                  >
                    <div className="latest-news-meta">
                      <span className="latest-news-category">
                        {item.category}
                      </span>

                      {item.subcategory && (
                        <span className="latest-news-subcategory">
                          {item.subcategory}
                        </span>
                      )}

                      <span className="latest-news-status">
                        {item.status}
                      </span>
                    </div>

                    <div className="latest-news-date">
                      {formattedDate}
                    </div>

                    <Link href={item.href}>
                      <h3>
                        {item.title}
                      </h3>
                    </Link>

                    <p>
                      {item.description}
                    </p>

                    <Link
                      href={item.href}
                      className="latest-news-link"
                    >
                      Read Full Update →
                    </Link>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="admin-list-empty">
              No latest updates available.
            </div>
          )}
        </div>
      </section>

      {/* =====================================
          CALCULATORS
      ====================================== */}

      <section className="home-section">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <span className="section-label">
                Free Tools
              </span>

              <h2>
                Government Salary Calculators
              </h2>

              <p>
                Estimate salary, DA, HRA
                and arrears using simple
                calculators.
              </p>
            </div>

            <Link
              href="/calculators"
              className="home-view-all-link"
            >
              All Calculators →
            </Link>
          </div>

          <div className="home-calculator-grid">
            <Link
              href="/salary-calculator"
              className="home-calculator-card"
            >
              <span>
                🧮
              </span>

              <h3>
                Salary Calculator
              </h3>

              <p>
                Calculate Basic Pay, DA,
                HRA, allowances and estimated
                salary.
              </p>

              <strong>
                Calculate →
              </strong>
            </Link>

            <Link
              href="/da-calculator"
              className="home-calculator-card"
            >
              <span>
                %
              </span>

              <h3>
                DA Calculator
              </h3>

              <p>
                Calculate Dearness Allowance
                from Basic Pay and DA rate.
              </p>

              <strong>
                Calculate →
              </strong>
            </Link>

            <Link
              href="/hra-calculator"
              className="home-calculator-card"
            >
              <span>
                🏠
              </span>

              <h3>
                HRA Calculator
              </h3>

              <p>
                Estimate House Rent Allowance
                from Basic Pay and applicable
                HRA percentage.
              </p>

              <strong>
                Calculate →
              </strong>
            </Link>

            <Link
              href="/arrears-calculator"
              className="home-calculator-card"
            >
              <span>
                ₹
              </span>

              <h3>
                DA Arrears Calculator
              </h3>

              <p>
                Estimate DA arrears after
                an allowance revision.
              </p>

              <strong>
                Calculate →
              </strong>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          STATE GOVERNMENT
      ====================================== */}

      <section className="home-section home-state-section">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <span className="section-label">
                State Guides
              </span>

              <h2>
                State Government Employee
                Information
              </h2>

              <p>
                Explore State-specific DA,
                salary, Pay Commission and
                pension guides.
              </p>
            </div>
          </div>

          <div className="home-state-grid">
            <Link
              href="/state-government/west-bengal"
              className="home-state-card"
            >
              <h3>
                West Bengal
              </h3>

              <p>
                DA, ROPA, Pay Commission,
                salary and pension.
              </p>

              <span>
                View Guide →
              </span>
            </Link>

            <Link
              href="/state-government/bihar"
              className="home-state-card"
            >
              <h3>
                Bihar
              </h3>

              <p>
                DA, pay structure, pension
                and Bihar Government salary
                calculators.
              </p>

              <span>
                View Guide →
              </span>
            </Link>

            <Link
              href="/state-government/assam"
              className="home-state-card"
            >
              <h3>
                Assam
              </h3>

              <p>
                ROP, DA, Pay Commission,
                pension and salary
                information.
              </p>

              <span>
                View Guide →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================
          DISCLAIMER
      ====================================== */}

      <section className="home-disclaimer-section">
        <div className="container">
          <div className="home-disclaimer">
            <h2>
              Important Disclaimer
            </h2>

            <p>
              GovtPayGuide is an independent informational website. Please verify
              important details from the relevant official authority.
            </p>

            <p>
              Salary figures, DA rates,
              pension information,
              Pay Commission developments,
              recruitment details, job guides
              and calculator results are
              provided for informational
              purposes only. Always verify
              important information from the
              relevant official Government
              notification, recruiting authority
              or department.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
