import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Central Government HRA Calculator",
  description:
    "Estimate Central Government House Rent Allowance using Basic Pay and X, Y or Z city classification.",
  alternates: {
    canonical: "/hra-calculator",
  },
};

export default function HRACalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}