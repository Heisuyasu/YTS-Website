"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title="From Booking to Delivery in Four Steps"
          lead="A simple, transparent process designed around your schedule."
        />

        <ol className="relative mt-12 grid gap-9 md:mt-20 md:grid-cols-4 md:gap-6">
          {/* Vertical connector line (mobile) */}
          <div
            aria-hidden="true"
            className="absolute bottom-7 left-7 top-7 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent-500/60 via-navy-900/10 to-navy-900/10 md:hidden"
          />

          {/* Horizontal connector line (desktop) — draws in on scroll */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-0.5 bg-navy-900/10 md:block"
          >
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-accent-500 via-accent-400 to-accent-500/40"
              initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.3, ease: [0.21, 0.6, 0.35, 1] }}
            />
          </div>

          {processSteps.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={0.12 * i}>
              <li className="relative flex flex-row items-start gap-5 md:flex-col md:items-center md:gap-0 md:text-center">
                {/* Giant faded step numeral (desktop only) */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 left-1/2 hidden -translate-x-1/2 select-none font-display text-[92px] font-extrabold leading-none text-navy-900/[0.05] md:block"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-800 text-accent-400 shadow-soft ring-4 ring-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 font-display text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div className="pt-1 md:pt-0">
                  <h3 className="relative font-display text-base font-bold text-navy-900 md:mt-5">
                    {title}
                  </h3>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-navy-600/90 md:mt-2">
                    {body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
