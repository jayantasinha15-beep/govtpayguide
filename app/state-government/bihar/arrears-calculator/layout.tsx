import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bihar DA Arrears Calculator",
  description:
    "Estimate Bihar Government DA arrears using Basic Pay, old DA rate, revised DA rate and number of months.",
  alternates: {
    canonical: "/state-government/bihar/arrears-calculator",
  },
};

export default function BiharDAArrearsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}