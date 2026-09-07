import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "West Bengal Government Salary Calculator",
  description:
    "Estimate West Bengal Government employee salary using ROPA pay level, Basic Pay, DA, HRA, allowances and deductions.",
  alternates: {
    canonical: "/state-government/west-bengal/salary-calculator",
  },
};

export default function WBSalaryCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}