import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bihar Pension & DR Calculator",
  description:
    "Calculate Bihar Government pension and Dearness Relief using Basic Pension and applicable DR percentage.",
  alternates: {
    canonical: "/state-government/bihar/pension-calculator",
  },
};

export default function BiharPensionCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}