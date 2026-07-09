import { Metadata } from "next";
import "./findings.css";
import FindingsClient from "./FindingsClient";

export const metadata: Metadata = {
  title: "Findings",
  description:
    "See real examples of what WOVREX uncovers for HVAC companies. Lapsed maintenance worth $4,200 a year, $70,000 in missed after-hours calls, $31,000 in abandoned estimates, and more.",
  openGraph: {
    title: "Sample Findings | WOVREX Revenue Intelligence",
    description:
      "No two businesses get the same three findings. Here is a representative range of what tends to show up once someone actually looks.",
    url: "https://wovrex.site/findings",
  },
  alternates: {
    canonical: "https://wovrex.site/findings",
  },
};

export default function Findings() {
  return <FindingsClient />;
}
