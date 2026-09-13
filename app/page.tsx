import Link from "next/link";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";
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
};

type LatestUpdate = {
  title: string;
  description: string;
  category: string;
  status: string;
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
      featured_image
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

  return (data ?? []) as DbArticle[];
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
              Government Pay & Salary Guide
            </span>

            <h1>
              Government Salary, DA,
              Pay Commission & Pension
              Updates
            </h1>

            <p>
              Get clear information about
              Central and State Government
              salary, Dearness Allowance,
              Pay Commission, pension,
              pay matrix and useful salary
              calculators.
            </p>

            <div className="home-hero-actions">
              <Link
                href="/updates"
                className="home-primary-button"
              >
                Latest Updates →
              </Link>

              <Link
                href="/calculators"
                className="home-secondary-button"
              >
                Explore Calculators
              </Link>
            </div>
          </div>

          <div className="home-hero-card">
            <span className="home-hero-card-label">
              GovtPayGuide
            </span>

            <h2>
              Your Government Pay Information
              Hub
            </h2>

            <p>
              Salary guides, DA revisions,
              Pay Commission updates and
              calculators in one place.
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
            </div>
          </div>
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
            Featured Government Updates
          </h2>

          <p>
            Important salary, DA, Pay Commission
            and pension updates selected for the
            homepage.
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
  style={{ objectFit: "cover" }}
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
                Latest News
              </span>

              <h2>
                Latest Government Employee
                Updates
              </h2>

              <p>
                Recent salary, DA,
                Pay Commission and pension
                developments.
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
              GovtPayGuide is an independent
              informational website and is
              not affiliated with the
              Government of India, any State
              Government or any Government
              department.
            </p>

            <p>
              Salary figures, DA rates,
              pension information,
              Pay Commission developments
              and calculator results are
              provided for informational
              purposes only. Always verify
              important information from the
              relevant official Government
              notification or department.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}