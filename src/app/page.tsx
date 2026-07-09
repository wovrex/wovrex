import { Metadata } from "next";
import Hero from "@/components/Hero";
import FourPlacesGap from "@/components/FourPlacesGap";
import Calculator from "@/components/Calculator";
import Section4 from "@/components/Section4";
import TestimonialsSection from "@/components/TestimonialsSection";
import SectionFAQ from "@/components/SectionFAQ";
import Section5 from "@/components/Section5";

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
