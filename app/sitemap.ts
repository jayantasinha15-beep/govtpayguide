import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.govtpayindia.com";

  const routes = [
    "",

    // Main Sections
    "/central-government",
    "/state-government",
    "/updates",
    "/calculators",
    "/pension",
    "/guides",

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

    // Legal / Information
    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
  ];

  // Get all published Supabase articles
  const { data: articles, error } = await supabase
    .from("articles")
    .select("slug, published_at")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Sitemap article fetch error:", error.message);
  }

  // Static sitemap URLs
  const staticUrls: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/updates"
        ? "daily"
        : route.includes("/updates/") ||
          route.endsWith("/da") ||
          route.endsWith("/pay-commission")
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/updates" ||
          route === "/central-government" ||
          route === "/state-government"
        ? 0.9
        : route.startsWith("/state-government/")
        ? 0.8
        : 0.7,
  }));

  // Dynamic Supabase article URLs
  const articleUrls: MetadataRoute.Sitemap =
    articles?.map((article) => ({
      url: `${baseUrl}/updates/${article.slug}`,
      lastModified: article.published_at
        ? new Date(article.published_at)
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })) ?? [];

  // Prevent duplicate URLs
  const combinedUrls = [...staticUrls, ...articleUrls];

  const uniqueUrls = Array.from(
    new Map(combinedUrls.map((item) => [item.url, item])).values()
  );

  return uniqueUrls;
}