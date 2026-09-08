import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://govtpayguide.in";

  const routes = [
    // =========================
    // HOME
    // =========================
    "",

    // =========================
    // CENTRAL GOVERNMENT
    // =========================
    "/central-government",
    "/da",
    "/pay-commission",
    "/pay-matrix",
    "/salary-calculator",
    "/da-calculator",
    "/hra-calculator",
    "/arrears-calculator",
    "/pension",
    "/calculators",
    "/guides",

    // =========================
    // STATE GOVERNMENT
    // =========================
    "/state-government",

    // =========================
    // WEST BENGAL
    // =========================
    "/state-government/west-bengal",
    "/state-government/west-bengal/da",
    "/state-government/west-bengal/pay-commission",
    "/state-government/west-bengal/pay-structure",
    "/state-government/west-bengal/pay-matrix",
    "/state-government/west-bengal/pension",

    // West Bengal Calculators
    "/state-government/west-bengal/salary-calculator",
    "/state-government/west-bengal/da-calculator",
    "/state-government/west-bengal/arrears-calculator",
    "/state-government/west-bengal/pension-calculator",

    // =========================
    // BIHAR
    // =========================
    "/state-government/bihar",
    "/state-government/bihar/da",
    "/state-government/bihar/pay-commission",
    "/state-government/bihar/pay-matrix",
    "/state-government/bihar/pension",

    // Bihar Calculators
    "/state-government/bihar/salary-calculator",
    "/state-government/bihar/da-calculator",
    "/state-government/bihar/arrears-calculator",
    "/state-government/bihar/salary-arrears-calculator",
    "/state-government/bihar/pension-calculator",

    // =========================
    // LEGAL / INFORMATION
    // =========================
    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
  ];

  const weeklyRoutes = [
    "",
    "/da",
    "/pay-commission",

    "/state-government/west-bengal",
    "/state-government/west-bengal/da",
    "/state-government/west-bengal/pay-commission",

    "/state-government/bihar",
    "/state-government/bihar/da",
    "/state-government/bihar/pay-commission",
  ];

  const highPriorityRoutes = [
    "/central-government",
    "/state-government",
    "/calculators",
    "/pension",
    "/guides",

    "/state-government/west-bengal",
    "/state-government/west-bengal/da",
    "/state-government/west-bengal/pay-commission",

    "/state-government/bihar",
    "/state-government/bihar/da",
    "/state-government/bihar/pay-commission",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,

    lastModified: new Date(),

    changeFrequency: weeklyRoutes.includes(route)
      ? "weekly"
      : "monthly",

    priority:
      route === ""
        ? 1
        : highPriorityRoutes.includes(route)
          ? 0.9
          : route.includes("calculator")
            ? 0.8
            : route === "/about" ||
                route === "/contact" ||
                route === "/privacy-policy" ||
                route === "/disclaimer"
              ? 0.5
              : 0.7,
  }));
}