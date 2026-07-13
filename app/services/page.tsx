import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Fleet from "@/components/home/Fleet";
import { coverageHighlights } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Fleet",
  description:
    "Trucking, refrigerated hauling, container transport, cranes, forklifts, cross-docking, and warehouse management — YVES Trucking Services' full fleet and services across Palawan.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services & Fleet"
        title="Every Service Your Cargo Needs"
        lead="From single-pallet deliveries to 80-ton crane lifts — one team, one call, province-wide. Explore what we move and the equipment that moves it."
      />

      {/* What we do */}
      <section className="py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Services"
            title="What We Move, Province-wide"
            lead="Complete logistics support for businesses across Palawan — on the road, at the dock, and in the warehouse."
          />
          <ul className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
            {coverageHighlights.map(({ icon: Icon, label }, i) => (
              <Reveal key={label} delay={0.05 * i}>
                <li className="flex items-center gap-3 rounded-2xl border border-navy-900/5 bg-white px-5 py-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-navy-800">
                    {label}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Full fleet (all 9 units) */}
      <Fleet />

      {/* CTA */}
      <section className="py-20">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Not sure which truck fits your cargo?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-navy-600/90">
              Tell us what you're moving and we'll recommend the right unit and
              send a clear quotation within the day.
            </p>
            <Link href="/contact" className="btn-primary mt-7">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
