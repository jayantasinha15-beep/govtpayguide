import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DA Calculator for Government Employees",
  description:
    "Calculate Dearness Allowance from Basic Pay and DA percentage with monthly and annual estimates.",
  alternates: {
    canonical: "/da-calculator",
  },
};

export default function DACalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}