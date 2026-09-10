import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://govtpayguide.in";

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

    // Updates
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

  return routes.map((route) => ({
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
}