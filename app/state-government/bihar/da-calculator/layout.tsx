import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bihar DA Calculator",
  description:
    "Calculate Bihar Government Dearness Allowance using Basic Pay and applicable DA rate with monthly and annual estimates.",
  alternates: {
    canonical: "/state-government/bihar/da-calculator",
  },
};

export default function BiharDACalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}