import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Central Government Salary Calculator",
  description:
    "Estimate Central Government salary using Basic Pay, DA, HRA, TA, allowances and deductions.",
  alternates: {
    canonical: "/salary-calculator",
  },
};

export default function SalaryCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}