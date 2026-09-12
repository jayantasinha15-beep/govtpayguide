import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteJsonLd from "@/components/SiteJsonLd";

const siteUrl = "https://govtpayindia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "GovtPayGuide | DA, Pay Commission & Salary Calculator",
    template: "%s | GovtPayGuide",
  },

  description:
    "Government salary information, DA updates, Pay Commission guides, pay matrix, pension information and salary calculators for Central and State Government employees.",

  applicationName: "GovtPayGuide",

  keywords: [
    "government salary",
    "government salary calculator",
    "DA calculator",
    "Dearness Allowance",
    "government DA update",
    "Pay Commission",
    "7th Pay Commission",
    "8th Pay Commission",
    "pay matrix",
    "government employee salary",
    "government pension",
    "Dearness Relief",
    "West Bengal government salary",
    "West Bengal DA",
    "ROPA 2019",
  ],

  authors: [
    {
      name: "GovtPayGuide",
      url: siteUrl,
    },
  ],

  creator: "GovtPayGuide",
  publisher: "GovtPayGuide",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "GovtPayGuide",
    title: "GovtPayGuide | Government Salary, DA & Pension Guides",
    description:
      "Independent guides and calculators for government salary, DA, Pay Commission, pay matrix, pension and State Government pay information.",
  },

  twitter: {
    card: "summary_large_image",
    title: "GovtPayGuide | Government Salary, DA & Pension Guides",
    description:
      "Government salary, DA, Pay Commission, pension and calculator resources for Central and State Government employees.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteJsonLd />

        <Header />

        <div className="site-main">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
