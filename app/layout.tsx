import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteJsonLd from "@/components/SiteJsonLd";

const siteUrl = "https://www.govtpayindia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Government Salary, Pension & Job Updates | GovtPayGuide",
    template: "%s | GovtPayGuide",
  },

  description:
    "Government salary, DA, Pay Commission, pay matrix, pension, recruitment notifications, job guides and salary calculators for Central and State Government employees.",

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
    "government jobs",
    "government recruitment",
    "recruitment notifications",
    "government job guides",
    "Central Government jobs",
    "State Government jobs",
    "West Bengal government jobs",
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

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "GovtPayGuide",
    title: "Government Salary, Pension & Job Updates | GovtPayGuide",
    description:
      "Independent information about government salary, DA, Pay Commission, pension, recruitment notifications, job guides and salary calculators.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Government Salary, Pension & Job Updates | GovtPayGuide",
    description:
      "Government salary, DA, Pay Commission, pension, recruitment notifications, job guides and calculators.",
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
      <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6844731230271447"
          crossOrigin="anonymous"
        />
      </head>

      <body>
        <SiteJsonLd />

        <Header />

        <div className="site-main">{children}</div>

        <Footer />
      </body>
    </html>
  );
}