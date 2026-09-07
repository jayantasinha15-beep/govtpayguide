import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DA Arrears Calculator",
  description:
    "Estimate DA arrears using Basic Pay, old DA rate, new DA rate and eligible number of months.",
  alternates: {
    canonical: "/arrears-calculator",
  },
};

export default function ArrearsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}