import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assam DA Arrears Calculator | GovtPayGuide",
  description:
    "Calculate estimated Assam Government DA arrears using Basic Pay, old DA rate, revised DA rate and arrears period. Free Assam DA Arrears Calculator.",

  alternates: {
    canonical:
      "https://www.govtpayindia.com/state-government/assam/arrears-calculator",
  },

  openGraph: {
    title: "Assam DA Arrears Calculator | GovtPayGuide",
    description:
      "Estimate Assam Government DA arrears by comparing old and revised Dearness Allowance rates.",
    url: "https://www.govtpayindia.com/state-government/assam/arrears-calculator",
    type: "website",
  },
};

export default function AssamArrearsCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}