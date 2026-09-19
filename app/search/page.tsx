"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { updates } from "@/data/updates";
import { supabase } from "@/lib/supabase";

type SearchItem = {
  title: string;
  description: string;
  category: string;
  articleType?: string;
  href: string;
};

type ArticleRow = {
  title: string;
  slug: string;
  description: string | null;
  category: string | null;
  status: string | null;
};

const staticPages: SearchItem[] = [
  {
    title: "Central Government Salary & Pay Guide",
    description:
      "Central Government salary, DA, Pay Commission, pay matrix and employee information.",
    category: "Central Government",
    href: "/central-government",
  },
  {
    title: "Dearness Allowance (DA) Updates",
    description:
      "Latest Dearness Allowance updates, rates, revisions and effective dates.",
    category: "DA",
    href: "/da",
  },
  {
    title: "Pay Commission",
    description:
      "Pay Commission updates, recommendations, fitment factor and salary revision information.",
    category: "Pay Commission",
    href: "/pay-commission",
  },
  {
    title: "Central Government Pay Matrix",
    description:
      "Explore Central Government pay matrix levels and Basic Pay structure.",
    category: "Pay Matrix",
    href: "/pay-matrix",
  },
  {
    title: "Government Salary Calculator",
    description:
      "Calculate Basic Pay, DA, HRA, allowances, gross salary and estimated take-home pay.",
    category: "Calculator",
    href: "/salary-calculator",
  },
  {
    title: "DA Calculator",
    description: "Calculate Dearness Allowance from Basic Pay and DA percentage.",
    category: "Calculator",
    href: "/da-calculator",
  },
  {
    title: "HRA Calculator",
    description: "Estimate House Rent Allowance based on Basic Pay and HRA rate.",
    category: "Calculator",
    href: "/hra-calculator",
  },
  {
    title: "DA Arrears Calculator",
    description: "Estimate Dearness Allowance arrears after a DA revision.",
    category: "Calculator",
    href: "/arrears-calculator",
  },
  {
    title: "Government Pension Guide",
    description:
      "Government pension, Dearness Relief and retirement benefit information.",
    category: "Pension",
    href: "/pension",
  },
  {
    title: "Government Jobs",
    description:
      "Government job guides, latest vacancies and recruitment notifications.",
    category: "Government Jobs",
    href: "/government-jobs",
  },
  {
    title: "Recruitment Notifications",
    description:
      "Browse the latest government recruitment notifications, vacancies and application dates.",
    category: "Government Jobs",
    articleType: "Recruitment Notification",
    href: "/government-jobs/notifications",
  },
  {
    title: "Government Job Guides",
    description:
      "Government job salary, eligibility, selection process and career guides.",
    category: "Government Jobs",
    articleType: "Guide",
    href: "/government-jobs/guides",
  },
  {
    title: "West Bengal Government Employees",
    description:
      "West Bengal salary, DA, Pay Commission, pay structure and pension information.",
    category: "West Bengal",
    href: "/state-government/west-bengal",
  },
  {
    title: "West Bengal DA Updates",
    description:
      "Latest Dearness Allowance updates for West Bengal Government employees.",
    category: "West Bengal",
    href: "/state-government/west-bengal/da",
  },
  {
    title: "West Bengal 7th Pay Commission",
    description:
      "Latest West Bengal 7th State Pay Commission information and updates.",
    category: "West Bengal",
    href: "/state-government/west-bengal/pay-commission",
  },
  {
    title: "Bihar Government Employees",
    description:
      "Bihar Government salary, DA, pay structure, pension and calculator information.",
    category: "Bihar",
    href: "/state-government/bihar",
  },
  {
    title: "Bihar DA Updates",
    description:
      "Latest Dearness Allowance information for Bihar Government employees.",
    category: "Bihar",
    href: "/state-government/bihar/da",
  },
  {
    title: "Assam Government Employees",
    description:
      "Assam salary, DA, Pay Commission, ROP 2017, pension and calculator information.",
    category: "Assam",
    href: "/state-government/assam",
  },
  {
    title: "Assam DA Updates",
    description:
      "Latest Dearness Allowance information for Assam Government employees.",
    category: "Assam",
    href: "/state-government/assam/da",
  },
  {
    title: "Assam Pay Commission",
    description: "Assam Pay Commission and Revision of Pay Rules information.",
    category: "Assam",
    href: "/state-government/assam/pay-commission",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [articleItems, setArticleItems] = useState<SearchItem[]>([]);
  const [loadingArticles, setLoadingArticles] = useState(true);

  useEffect(() => {
    let active = true;

    const loadArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("title, slug, description, category, status")
        .eq("published", true)
        .order("published_at", { ascending: false })
        .limit(500);

      if (!active) return;

      if (error) {
        console.error("Search article loading failed:", error.message);
        setArticleItems([]);
        setLoadingArticles(false);
        return;
      }

      const items = ((data ?? []) as ArticleRow[]).map((article) => ({
        title: article.title,
        description: article.description ?? "Read the latest update on GovtPayGuide.",
        category: article.category ?? "Update",
        articleType: article.status ?? "",
        href: `/updates/${article.slug}`,
      }));

      setArticleItems(items);
      setLoadingArticles(false);
    };

    loadArticles();

    return () => {
      active = false;
    };
  }, []);

  const allItems = useMemo(() => {
    const updateItems: SearchItem[] = updates.map((item) => ({
      title: item.title,
      description: item.description,
      category: item.category,
      href: item.href,
    }));

    const merged = [...articleItems, ...updateItems, ...staticPages];

    return Array.from(
      new Map(merged.map((item) => [item.href, item])).values()
    );
  }, [articleItems]);

  const results = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) return [];

    return allItems
      .map((item) => {
        const title = item.title.toLowerCase();
        const category = item.category.toLowerCase();
        const description = item.description.toLowerCase();
        const articleType = (item.articleType ?? "").toLowerCase();

        let score = 0;

        if (title === searchTerm) score += 100;
        if (title.startsWith(searchTerm)) score += 50;
        if (title.includes(searchTerm)) score += 30;
        if (category.includes(searchTerm)) score += 20;
        if (articleType.includes(searchTerm)) score += 15;
        if (description.includes(searchTerm)) score += 10;

        return { ...item, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [query, allItems]);

  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Search</span>
          <h1>Search GovtPayGuide</h1>
          <p>
            Search government jobs, recruitment notifications, salary, DA, Pay
            Commission, pension, calculators and latest updates.
          </p>
        </div>
      </section>

      <div className="container search-page">
        <div className="site-search-box">
          <span className="site-search-icon" aria-hidden="true">🔍</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search government jobs, UPSC, SSC, DA, pension..."
            aria-label="Search GovtPayGuide"
          />
          {query && (
            <button
              type="button"
              className="search-clear-button"
              onClick={() => setQuery("")}
            >
              Clear
            </button>
          )}
        </div>

        {!query.trim() && (
          <div className="search-empty-state">
            <h2>What are you looking for?</h2>
            <p>
              Try searching for Government Jobs, Recruitment Notification,
              UPSC, SSC, DA, Pay Commission, pension or a State Government.
            </p>
            <div className="search-suggestions">
              {["Government Jobs", "Recruitment Notification", "UPSC", "DA", "Pay Commission", "West Bengal"].map(
                (suggestion) => (
                  <button
                    type="button"
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                  >
                    {suggestion}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {query.trim() && (
          <section className="search-results-section">
            <div className="search-results-heading">
              <div>
                <span className="section-label">Results</span>
                <h2>Search results for &quot;{query}&quot;</h2>
              </div>
              <span>
                {loadingArticles
                  ? "Loading articles..."
                  : `${results.length} ${results.length === 1 ? "result" : "results"} found`}
              </span>
            </div>

            {results.length > 0 ? (
              <div className="search-results-grid">
                {results.map((item) => (
                  <article className="search-result-card" key={item.href}>
                    <span className="search-result-category">
                      {item.articleType
                        ? `${item.category} · ${item.articleType}`
                        : item.category}
                    </span>
                    <Link href={item.href}><h3>{item.title}</h3></Link>
                    <p>{item.description}</p>
                    <Link href={item.href} className="search-result-link">
                      View Page →
                    </Link>
                  </article>
                ))}
              </div>
            ) : loadingArticles ? (
              <div className="search-no-results"><p>Loading published articles...</p></div>
            ) : (
              <div className="search-no-results">
                <h2>No results found</h2>
                <p>
                  We could not find anything for &quot;{query}&quot;. Try a shorter
                  keyword such as UPSC, SSC, jobs, DA, pension or salary.
                </p>
                <Link href="/government-jobs" className="search-browse-link">
                  Browse Government Jobs →
                </Link>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
