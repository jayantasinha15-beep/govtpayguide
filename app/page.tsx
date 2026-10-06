import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@supabase/supabase-js";

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
  featured_image: string | null;
};
type HomeArticle = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  subcategory: string | null;
  publishedAt: string;
  href: string;
  featured: boolean;
  featuredImage: string | null;
};

function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase environment variables are missing.");
  }

  return createClient(supabaseUrl, supabaseKey);
}

async function getPublishedArticles(): Promise<DbArticle[]> {
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
      featured_image
    `)
    .eq("published", true)
    .not("slug", "is", null)
    .order("published_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Homepage articles error:", error.message);
    return [];
  }

  return (data ?? []) as DbArticle[];
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default async function Home() {
  const dbArticles = await getPublishedArticles();

  const articles: HomeArticle[] = dbArticles.map((article, index) => ({
  id: article.id,
  title: article.title,
  description: article.description,
  category: article.category,
  status: article.status,
  subcategory: null,
  publishedAt: article.published_at ?? new Date().toISOString(),
  href: `/updates/${article.slug}`,
  featured: index < 2,
  featuredImage: article.featured_image,
}));

  const featuredArticles = articles.slice(0, 2);
const latestArticles = articles.slice(2, 6);

  return (
    <main>
      <section className="home-v2-hero">
        <div className="container home-v2-hero-inner">
          <span className="page-badge">GovtPayGuide India</span>

          <h1>Government Pay, Pension & Job Updates</h1>

          <p>
            Find government recruitment news, salary and DA updates,
            pension guides, Pay Commission information and useful
            calculators without searching through multiple sections.
          </p>

          <div className="home-v2-hero-actions">
            <Link href="/government-jobs" className="home-v2-primary-button">
              Find Government Jobs
            </Link>

            <Link href="/updates" className="home-v2-secondary-button">
              Read Latest Updates
            </Link>

            <Link href="/calculators" className="home-v2-text-button">
              Open Calculators →
            </Link>
          </div>

          <div className="home-v2-trust-line">
            Independent informational website · Always verify details from
            the concerned official authority.
          </div>
        </div>
      </section>

      <section className="home-v2-services">
        <div className="container">
          <div className="home-v2-section-heading home-v2-section-heading-centered">
            <span className="section-label">Choose a Section</span>
            <h2>What are you looking for?</h2>
            <p>Go directly to the information or tool you need.</p>
          </div>

          <div className="home-v2-service-grid">
            <Link href="/government-jobs" className="home-v2-service-card">
              <span className="home-v2-service-icon">📢</span>
              <div>
                <h3>Jobs & Recruitment</h3>
                <p>Notifications, vacancy news and practical job guides.</p>
              </div>
              <strong>Explore Jobs →</strong>
            </Link>

            <Link href="/central-government" className="home-v2-service-card">
              <span className="home-v2-service-icon">📈</span>
              <div>
                <h3>Pay, DA & Pension</h3>
                <p>Salary, allowances, Pay Commission and pension updates.</p>
              </div>
              <strong>View Pay Guides →</strong>
            </Link>

            <Link href="/calculators" className="home-v2-service-card">
              <span className="home-v2-service-icon">🧮</span>
              <div>
                <h3>Calculators & Tools</h3>
                <p>Estimate salary, DA, HRA, arrears and pension.</p>
              </div>
              <strong>Use Calculators →</strong>
            </Link>

            <Link href="/state-government" className="home-v2-service-card">
              <span className="home-v2-service-icon">🇮🇳</span>
              <div>
                <h3>State Government</h3>
                <p>State-wise pay, DA, pension and employee guides.</p>
              </div>
              <strong>Browse States →</strong>
            </Link>
          </div>
        </div>
      </section>

      {(featuredArticles.length > 0 || latestArticles.length > 0) && (
        <section className="home-v2-updates">
          <div className="container">
            <div className="home-v2-section-heading home-v2-heading-row">
              <div>
                <span className="section-label">Latest Information</span>
                <h2>Featured & Recent Updates</h2>
                <p>
                  Important recruitment, salary, DA, pension and employee
                  updates.
                </p>
              </div>

              <Link href="/updates" className="home-v2-view-all">
                View All Updates →
              </Link>
            </div>

            {featuredArticles.length > 0 && (
              <div className="home-v2-featured-grid">
                {featuredArticles.map((article) => (
                  <article className="home-v2-featured-card" key={article.id}>
                    {article.featuredImage && (
                      <Link
                        href={article.href}
                        className="home-v2-featured-image"
                        aria-label={article.title}
                      >
                        <Image
                          src={article.featuredImage}
                          alt={article.title}
                          fill
                          sizes="(max-width: 760px) 100vw, 50vw"
                          quality={75}
                          style={{ objectFit: "contain" }}
                        />
                      </Link>
                    )}

                    <div className="home-v2-featured-content">
                      <div className="home-v2-meta">
                        <span>{article.category}</span>
                        {article.subcategory && (
                          <span className="home-v2-subcategory">
                            {article.subcategory}
                          </span>
                        )}
                        <span className="home-v2-status">
                          {article.status}
                        </span>
                      </div>

                      <time dateTime={article.publishedAt}>
                        {formatDate(article.publishedAt)}
                      </time>

                      <h3>
                        <Link href={article.href}>{article.title}</Link>
                      </h3>

                      <p>{article.description}</p>

                      <Link href={article.href} className="home-v2-read-link">
                        Read Update →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {latestArticles.length > 0 && (
              <div className="home-v2-recent-list">
                {latestArticles.map((article) => (
                  <article className="home-v2-recent-item" key={article.id}>
                    <div className="home-v2-meta">
                      <span>{article.category}</span>
                      {article.subcategory && (
                        <span className="home-v2-subcategory">
                          {article.subcategory}
                        </span>
                      )}
                    </div>

                    <div className="home-v2-recent-content">
                      <h3>
                        <Link href={article.href}>{article.title}</Link>
                      </h3>
                      <p>{article.description}</p>
                    </div>

                    <div className="home-v2-recent-side">
                      <time dateTime={article.publishedAt}>
                        {formatDate(article.publishedAt)}
                      </time>
                      <Link href={article.href}>Read →</Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="home-v2-tools">
        <div className="container">
          <div className="home-v2-section-heading home-v2-heading-row">
            <div>
              <span className="section-label">Free Tools</span>
              <h2>Popular Calculators</h2>
              <p>Quick estimates for common government pay calculations.</p>
            </div>

            <Link href="/calculators" className="home-v2-view-all">
              All Calculators →
            </Link>
          </div>

          <div className="home-v2-tool-grid">
            <Link href="/salary-calculator" className="home-v2-tool-card">
              <span>🧮</span>
              <h3>Salary Calculator</h3>
              <p>Estimate gross and take-home salary.</p>
            </Link>

            <Link href="/da-calculator" className="home-v2-tool-card">
              <span>%</span>
              <h3>DA Calculator</h3>
              <p>Calculate DA from Basic Pay and rate.</p>
            </Link>

            <Link href="/hra-calculator" className="home-v2-tool-card">
              <span>🏠</span>
              <h3>HRA Calculator</h3>
              <p>Estimate House Rent Allowance.</p>
            </Link>

            <Link href="/arrears-calculator" className="home-v2-tool-card">
              <span>₹</span>
              <h3>DA Arrears Calculator</h3>
              <p>Estimate arrears after a DA revision.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-v2-states">
        <div className="container">
          <div className="home-v2-section-heading home-v2-heading-row">
            <div>
              <span className="section-label">State Guides</span>
              <h2>Browse by State</h2>
              <p>State-specific salary, DA, pension and pay information.</p>
            </div>

            <Link href="/state-government" className="home-v2-view-all">
              View All States →
            </Link>
          </div>

          <div className="home-v2-state-grid">
            <Link
              href="/state-government/west-bengal"
              className="home-v2-state-card"
            >
              <h3>West Bengal</h3>
              <p>DA, ROPA, Pay Commission, salary and pension.</p>
              <span>View Guide →</span>
            </Link>

            <Link
              href="/state-government/bihar"
              className="home-v2-state-card"
            >
              <h3>Bihar</h3>
              <p>Pay structure, DA, pension and salary calculators.</p>
              <span>View Guide →</span>
            </Link>

            <Link
              href="/state-government/assam"
              className="home-v2-state-card"
            >
              <h3>Assam</h3>
              <p>ROP, DA, Pay Commission, pension and salary.</p>
              <span>View Guide →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-v2-disclaimer">
        <div className="container">
          <div className="home-v2-disclaimer-box">
            <div>
              <strong>Independent information, clearly explained</strong>
              <p>
                GovtPayGuide does not represent any government department.
                Verify recruitment, salary, DA and pension information from
                the relevant official notification before taking action.
              </p>
            </div>

            <div className="home-v2-disclaimer-links">
              <Link href="/about">About Us</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
