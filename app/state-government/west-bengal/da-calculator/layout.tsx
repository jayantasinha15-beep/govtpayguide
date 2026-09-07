import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "West Bengal DA Calculator",
  description:
    "Calculate West Bengal Government Dearness Allowance using Basic Pay and applicable DA rate with monthly and annual estimates.",
  alternates: {
    canonical: "/state-government/west-bengal/da-calculator",
  },
};

export default function WBDACalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}