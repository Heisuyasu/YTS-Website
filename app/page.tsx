import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Coverage from "@/components/home/Coverage";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/Stats";
import Fleet from "@/components/home/Fleet";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";
import RouteDivider from "@/components/ui/RouteDivider";

export const metadata: Metadata = {
  title: "YVES Trucking Services | Reliable Trucking Across Palawan",
  description:
    "Province-wide trucking and cargo transportation in Palawan, Philippines. Serving Puerto Princesa, El Nido, Coron, Brooke's Point, and 29 service areas including outlying islands.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <RouteDivider tone="light" />
      <Coverage />
      <WhyChooseUs />
      <Stats />
      <Fleet />
      <RouteDivider tone="light" />
      <Process />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}
