import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bihar Salary Arrears Calculator | Basic, DA & HRA",
  description:
    "Calculate Bihar Government salary arrears month-wise including Basic Pay difference, DA arrears, HRA arrears and previously received amounts.",
  alternates: {
    canonical:
      "/state-government/bihar/salary-arrears-calculator",
  },
};

export default function BiharSalaryArrearsCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}