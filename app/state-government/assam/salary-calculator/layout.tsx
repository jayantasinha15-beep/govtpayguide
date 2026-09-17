import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assam Salary Calculator 2026 | Government Employee Salary",
  description:
    "Use the Assam Government Salary Calculator 2026 to estimate Basic Pay, DA, HRA, gross salary and take-home salary using Pay in Pay Band and Grade Pay.",

  keywords: [
    "Assam salary calculator",
    "Assam government salary calculator",
    "Assam salary calculator 2026",
    "Assam government employee salary",
    "Assam employee salary calculator",
    "Assam basic pay calculator",
    "Assam DA salary calculator",
    "Assam ROP 2017 salary calculator",
  ],

  alternates: {
    canonical:
      "https://www.govtpayindia.com/state-government/assam/salary-calculator",
  },

  openGraph: {
    title:
      "Assam Salary Calculator 2026 | Government Employee Salary",
    description:
      "Calculate estimated Basic Pay, DA, HRA, gross salary and take-home salary for Assam Government employees.",
    url:
      "https://www.govtpayindia.com/state-government/assam/salary-calculator",
    type: "website",
  },
};

export default function AssamSalaryCalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}