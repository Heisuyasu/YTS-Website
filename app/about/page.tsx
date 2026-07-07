import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Target } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about YVES Trucking Services — our story, vision, mission, and the values behind reliable cargo transportation across Palawan.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Moving Palawan's Businesses Forward"
        lead="YVES Trucking Services is a Palawan-grown logistics company dedicated to one thing: dependable cargo transportation across every corner of the province. Safe, on time, every time."
      />

      {/* Company overview */}
      <section className="py-24 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal direction="right">
            <span className="eyebrow">Company Overview</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Local Roads. Professional Standards.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-600/90">
              <p>
                YVES Trucking Services was built on a simple observation:
                businesses in Palawan deserve the same dependable, professional
                logistics that companies in major cities take for granted. Long
                distances, island geography, and challenging roads shouldn't
                mean unpredictable deliveries.
              </p>
              <p>
                Today, our trucks travel the full length of the province — the
                national highway from Bataraza to El Nido, the coastal roads to
                San Vicente and Roxas, and connecting routes to the island
                municipalities of Cuyo, Agutaya, Magsaysay and Balabac Island.
                and Calamianes group of island in Coron.

              </p>
              <p>
                Behind every trip is a team of experienced drivers, careful
                loaders, and responsive coordinators who treat your cargo like
                their own.
              </p>
            </div>
            <Link href="/contact" className="btn-outline-dark mt-8">
              Work With Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          {/* Vision & Mission cards */}
          <div className="space-y-6">
            <Reveal direction="left">
              <article className="card card-hover border-l-4 !border-l-accent-500">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-600">
                  <Compass className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-navy-900">
                  Our Vision
                </h3>
                <p className="mt-2.5 leading-relaxed text-navy-600/90">
                  To be the most trusted LOGISTICS
                  provider in Palawan — the first name businesses call when
                  something important needs to move, anywhere in the province.
                </p>
              </article>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <article className="card card-hover border-l-4 !border-l-royal-500">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal-500/10 text-royal-600">
                  <Target className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-navy-900">
                  Our Mission
                </h3>
                <p className="mt-2.5 leading-relaxed text-navy-600/90">
                  To provide seamless and dependable logistics services
                  that support the growing economy of Palawan, through
                  professional handling, timely delivery, and 
                  operational excellence.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Corporate values */}
      <section className="bg-mist py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Corporate Values"
            title="The Principles Behind Every Haul"
            lead="Seven values guide how we drive, how we serve, and how we grow."
          />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {values.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={0.05 * i}>
                <article className="card card-hover group h-full text-center">
                  <span className="mx-auto flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-navy-800 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-navy-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600/90">
                    {body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Small CTA */}
      <section className="py-20">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
              Let's move your business forward.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-navy-600/90">
              Talk to our team about one-time deliveries or scheduled provincial
              hauling.
            </p>
            <Link href="/contact" className="btn-primary mt-7">
              Contact Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
