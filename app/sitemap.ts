import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://govtpayguide.in";

  const routes = [
    "",
    "/central-government",
    "/state-government",
    "/state-government/west-bengal",
    "/state-government/west-bengal/da",
    "/state-government/west-bengal/da-calculator",
    "/state-government/west-bengal/pay-structure",
    "/state-government/west-bengal/pay-matrix",
    "/state-government/west-bengal/salary-calculator",
    "/state-government/west-bengal/arrears-calculator",
    "/state-government/west-bengal/pension",
    "/state-government/west-bengal/pension-calculator",

    "/calculators",
    "/salary-calculator",
    "/da-calculator",
    "/hra-calculator",
    "/arrears-calculator",

    "/da",
    "/pay-commission",
    "/pay-matrix",
    "/pension",
    "/guides",

    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" ||
      route === "/da" ||
      route === "/pay-commission" ||
      route === "/state-government/west-bengal/da"
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/central-government" ||
            route === "/state-government" ||
            route === "/calculators" ||
            route === "/pension" ||
            route === "/guides"
          ? 0.9
          : route.includes("calculator")
            ? 0.8
            : 0.7,
  }));
}