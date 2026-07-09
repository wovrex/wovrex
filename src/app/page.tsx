import { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

// Below-fold sections — code-split and lazy loaded so they never block initial paint
const FourPlacesGap = dynamic(() => import("@/components/FourPlacesGap"), { ssr: true });
const Calculator = dynamic(() => import("@/components/Calculator"), { ssr: true });
const Section4 = dynamic(() => import("@/components/Section4"), { ssr: true });
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), { ssr: true });
const SectionFAQ = dynamic(() => import("@/components/SectionFAQ"), { ssr: true });
const Section5 = dynamic(() => import("@/components/Section5"), { ssr: true });

export const metadata: Metadata = {
  description:
    "Opportunities are hiding. WOVREX helps established HVAC companies uncover hidden revenue leaks in missed calls, lapsed maintenance, abandoned estimates, and dispatch inefficiencies.",
  alternates: {
    canonical: "https://wovrex.site",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FourPlacesGap />
      <Calculator />
      <Section4 />
      <TestimonialsSection />
      <SectionFAQ />
      <Section5 />
    </>
  );
}
