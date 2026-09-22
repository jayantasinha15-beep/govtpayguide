import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const baseUrl = "https://www.govtpayindia.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",

    // Main Sections
    "/central-government",
    "/state-government",
    "/updates",
    "/calculators",
    "/pension",
    "/guides",
    "/government-jobs",
    "/government-jobs/notifications",
    "/government-jobs/guides",

    // Central Government
    "/da",
    "/da-calculator",
    "/pay-commission",
    "/pay-matrix",
    "/salary-calculator",
    "/hra-calculator",
    "/arrears-calculator",

    // West Bengal
    "/state-government/west-bengal",
    "/state-government/west-bengal/da",
    "/state-government/west-bengal/pay-structure",
    "/state-government/west-bengal/pay-matrix",
    "/state-government/west-bengal/pay-commission",
    "/state-government/west-bengal/pension",
    "/state-government/west-bengal/salary-calculator",
    "/state-government/west-bengal/da-calculator",
    "/state-government/west-bengal/arrears-calculator",
    "/state-government/west-bengal/pension-calculator",

    // Bihar
    "/state-government/bihar",
    "/state-government/bihar/da",
    "/state-government/bihar/pay-commission",
    "/state-government/bihar/pay-matrix",
    "/state-government/bihar/pension",
    "/state-government/bihar/salary-calculator",
    "/state-government/bihar/da-calculator",
    "/state-government/bihar/arrears-calculator",
    "/state-government/bihar/pension-calculator",
    "/state-government/bihar/salary-arrears-calculator",

    // Assam
    "/state-government/assam",
    "/state-government/assam/da",
    "/state-government/assam/pay-commission",
    "/state-government/assam/pay-matrix",
    "/state-government/assam/pension",
    "/state-government/assam/salary-calculator",
    "/state-government/assam/da-calculator",
    "/state-government/assam/arrears-calculator",
    "/state-government/assam/pension-calculator",

    // Existing Static Update Pages
    "/updates/west-bengal-da-latest-update",
    "/updates/punjab-da-hike-60-percent-government-employees-2026",
    "/updates/andhra-pradesh-da-pension-12th-pay-revision-commission-2026",
    "/updates/west-bengal-7th-pay-commission-fitment-factor",
    "/updates/west-bengal-7th-pay-commission-latest-news",
    // Author
    "/author/jayanta-singha",

    // Legal / Information
    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
  ];

  /* =========================================
     STATIC URLS
  ========================================= */

  const staticUrls: MetadataRoute.Sitemap = routes.map((route) => {
    let changeFrequency:
      | "daily"
      | "weekly"
      | "monthly" = "monthly";

    let priority = 0.7;

    if (route === "") {
      changeFrequency = "daily";
      priority = 1;
    } else if (
      route === "/updates" ||
      route === "/government-jobs"
    ) {
      changeFrequency = "daily";
      priority = 0.9;
    } else if (
      route === "/central-government" ||
      route === "/state-government" ||
      route === "/government-jobs/notifications" ||
      route === "/government-jobs/guides"
    ) {
      changeFrequency = "weekly";
      priority = 0.9;
    } else if (
      route.startsWith("/updates/") ||
      route.endsWith("/da") ||
      route.endsWith("/pay-commission")
    ) {
      changeFrequency = "weekly";
      priority = 0.8;
    } else if (
      route.startsWith("/state-government/")
    ) {
      changeFrequency = "monthly";
      priority = 0.8;
    }

    return {
      url: `${baseUrl}${route}`,
      changeFrequency,
      priority,
    };
  });

  /* =========================================
     SUPABASE ARTICLES
  ========================================= */

  const { data: articles, error } = await supabase
    .from("articles")
    .select(
      "slug, published_at, updated_at"
    )
    .eq("published", true)
    .order("published_at", {
      ascending: false,
    });

  if (error) {
    console.error(
      "Sitemap article fetch error:",
      error.message
    );
  }

  const articleUrls: MetadataRoute.Sitemap =
    articles
      ?.filter(
        (article) =>
          typeof article.slug === "string" &&
          article.slug.trim().length > 0
      )
      .map((article) => ({
        url: `${baseUrl}/updates/${article.slug.trim()}`,

        lastModified: article.updated_at
          ? new Date(article.updated_at)
          : article.published_at
          ? new Date(article.published_at)
          : undefined,

        changeFrequency: "weekly" as const,
        priority: 0.8,
      })) ?? [];

  /* =========================================
     REMOVE DUPLICATES
  ========================================= */

  const combinedUrls = [
    ...staticUrls,
    ...articleUrls,
  ];

  const uniqueUrls = Array.from(
    new Map(
      combinedUrls.map((item) => [
        item.url,
        item,
      ])
    ).values()
  );

  return uniqueUrls;
}