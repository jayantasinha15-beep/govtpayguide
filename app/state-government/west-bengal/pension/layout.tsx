import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "West Bengal Pension & DR Calculator",
  description:
    "Estimate West Bengal Government pension and Dearness Relief using Basic Pension, DR rate, commutation, additions and deductions.",
  alternates: {
    canonical: "/state-government/west-bengal/pension-calculator",
  },
};

export default function WBPensionCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}