"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { updates } from "@/data/updates";

const staticPages = [
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
    description:
      "Calculate Dearness Allowance from Basic Pay and DA percentage.",
    category: "Calculator",
    href: "/da-calculator",
  },
  {
    title: "HRA Calculator",
    description:
      "Estimate House Rent Allowance based on Basic Pay and HRA rate.",
    category: "Calculator",
    href: "/hra-calculator",
  },
  {
    title: "DA Arrears Calculator",
    description:
      "Estimate Dearness Allowance arrears after a DA revision.",
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

  // West Bengal
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
    title: "West Bengal Salary Calculator",
    description:
      "Estimate salary for West Bengal Government employees.",
    category: "West Bengal Calculator",
    href: "/state-government/west-bengal/salary-calculator",
  },

  // Bihar
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
    title: "Bihar Salary Calculator",
    description:
      "Estimate salary for Bihar Government employees.",
    category: "Bihar Calculator",
    href: "/state-government/bihar/salary-calculator",
  },

  // Assam
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
    description:
      "Assam Pay Commission and Revision of Pay Rules information.",
    category: "Assam",
    href: "/state-government/assam/pay-commission",
  },
  {
    title: "Assam Salary Calculator",
    description:
      "Estimate salary for Assam Government employees.",
    category: "Assam Calculator",
    href: "/state-government/assam/salary-calculator",
  },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const allItems = useMemo(() => {
    const updateItems = updates.map((item) => ({
      title: item.title,
      description: item.description,
      category: item.category,
      href: item.href,
    }));

    return [...updateItems, ...staticPages];
  }, []);

  const results = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return [];
    }

    return allItems.filter((item) => {
      const searchableText = [
        item.title,
        item.description,
        item.category,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchTerm);
    });
  }, [query, allItems]);

  return (
    <main>
      <section className="state-hero">
        <div className="container">
          <span className="page-badge">Search</span>

          <h1>Search GovtPayGuide</h1>

          <p>
            Search Government salary, DA, Pay Commission, pension,
            calculators and latest employee updates.
          </p>
        </div>
      </section>

      <div className="container search-page">
        <div className="site-search-box">
          <span className="site-search-icon">⌕</span>

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search DA, Pay Commission, West Bengal, Punjab..."
            aria-label="Search GovtPayGuide"
          />

          {query.length > 0 && (
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
              Search for DA, Pay Commission, salary calculator, pension,
              West Bengal, Bihar, Assam or Punjab.
            </p>

            <div className="search-suggestions">
              <button type="button" onClick={() => setQuery("DA")}>
                DA
              </button>

              <button
                type="button"
                onClick={() => setQuery("Pay Commission")}
              >
                Pay Commission
              </button>

              <button
                type="button"
                onClick={() => setQuery("West Bengal")}
              >
                West Bengal
              </button>

              <button
                type="button"
                onClick={() => setQuery("Salary Calculator")}
              >
                Salary Calculator
              </button>
            </div>
          </div>
        )}

        {query.trim() && (
          <section className="search-results-section">
            <div className="search-results-heading">
              <h2>Search Results</h2>

              <span>
                {results.length}{" "}
                {results.length === 1 ? "result" : "results"}
              </span>
            </div>

            {results.length > 0 ? (
              <div className="search-results-grid">
                {results.map((item, index) => (
  <article
    className="search-result-card"
    key={`${item.href}-${index}`}
  >
                    <span className="search-result-category">
                      {item.category}
                    </span>

                    <Link href={item.href}>
                      <h3>{item.title}</h3>
                    </Link>

                    <p>{item.description}</p>

                    <Link
                      href={item.href}
                      className="search-result-link"
                    >
                      View Page →
                    </Link>
                  </article>
                ))}
              </div>
            ) : (
              <div className="search-no-results">
                <h2>No results found</h2>

                <p>
                  We could not find anything for &quot;{query}&quot;.
                  Try another keyword.
                </p>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}