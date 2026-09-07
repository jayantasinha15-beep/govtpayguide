import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "West Bengal DA Arrears Calculator",
  description:
    "Estimate West Bengal Government DA arrears using Basic Pay, old DA rate, new DA rate and eligible months.",
  alternates: {
    canonical: "/state-government/west-bengal/arrears-calculator",
  },
};

export default function WBArrearsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}