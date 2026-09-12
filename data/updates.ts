export type UpdateItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
  status: "Official Update" | "Analysis" | "DA Update" | "Guide";
  publishedAt: string;
  updatedAt?: string;
  href: string;
  featured?: boolean;
};

export const updates: UpdateItem[] = [
  {
  slug: "west-bengal-da-latest-update-2026",
  title: "West Bengal DA Latest Update 2026 | 38% DA from October",
  description:
    "The latest notified West Bengal Government DA rate is 38%, effective from 1 October 2026. Check the official order, calculation examples and key details.",
  category: "West Bengal",
  status: "DA Update",
  publishedAt: "2026-09-11",
  href: "/updates/west-bengal-da-latest-update",
  featured: true,
},
  {
  slug: "punjab-da-hike-60-percent-government-employees-2026",
  title:
    "Punjab DA Hike 2026: 85,000 Govt Employees to Get 60% DA",
  description:
    "Punjab has moved to raise DA from 42% to 60% for around 85,000 employees recruited after July 2020. Check who is covered, salary impact and what happens next.",
  category: "Punjab",
  status: "Official Update",
  publishedAt: "2026-09-10",
  href: "/updates/punjab-da-hike-60-percent-government-employees-2026",
  featured: true,
},
  {
  slug: "andhra-pradesh-da-pension-12th-pay-revision-commission-2026",
  title:
    "Andhra Pradesh DA Update 2026: 2 Pending DA Instalments, Pension Hike & 12th PRC",
  description:
    "Andhra Pradesh Government has announced release of two pending DA instalments, additional pension benefits from January 2027 and constitution of the 12th Pay Revision Commission.",
  category: "Andhra Pradesh",
  status: "Official Update",
  publishedAt: "2026-09-10",
  href: "/updates/andhra-pradesh-da-pension-12th-pay-revision-commission-2026",
  featured: true,
},
  {
  slug: "west-bengal-7th-pay-commission-latest-news",
  title: "West Bengal 7th Pay Commission Latest News & Updates 2026",
  description:
    "Track the latest official developments related to the West Bengal 7th State Pay Commission, including resolutions, Terms of Reference, memorandum submissions and Commission activities.",
  category: "West Bengal",
  status: "Official Update",
  publishedAt: "2026-09-10",
  href: "/updates/west-bengal-7th-pay-commission-latest-news",
  featured: true,
},
  {
    slug: "west-bengal-7th-pay-commission-fitment-factor",
    title:
      "West Bengal 7th Pay Commission Fitment Factor: What Could It Be?",
    description:
      "Understand possible fitment-factor scenarios and how different factors could affect revised Basic Pay. No final fitment factor has been officially announced.",
    category: "West Bengal",
    status: "Analysis",
    publishedAt: "2026-09-08",
    href: "/updates/west-bengal-7th-pay-commission-fitment-factor",
    featured: true,
  },

  {
    slug: "west-bengal-7th-pay-commission-latest-update",
    title: "West Bengal 7th State Pay Commission: Latest Updates",
    description:
      "Track official resolutions, Terms of Reference, memorandum submissions and other developments related to the West Bengal 7th State Pay Commission.",
    category: "West Bengal",
    status: "Official Update",
    publishedAt: "2026-09-08",
    href: "/state-government/west-bengal/pay-commission",
    featured: true,
  },

  {
    slug: "west-bengal-da-latest-update",
    title: "West Bengal Government DA Latest Update",
    description:
      "Check the latest West Bengal Dearness Allowance information, effective dates and official Finance Department references.",
    category: "West Bengal",
    status: "DA Update",
    publishedAt: "2026-09-08",
    href: "/state-government/west-bengal/da",
  },

  {
    slug: "bihar-da-latest-update",
    title: "Bihar Government DA Latest Update",
    description:
      "Check the latest Bihar Government Dearness Allowance information, revised rates, effective dates and official Finance Department references.",
    category: "Bihar",
    status: "DA Update",
    publishedAt: "2026-09-08",
    href: "/state-government/bihar/da",
  },
];

export const featuredUpdates = updates.filter(
  (item) => item.featured
);