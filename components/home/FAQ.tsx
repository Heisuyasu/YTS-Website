"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-mist py-24 sm:py-28">
      <div className="container-x max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          lead="Quick answers about coverage, cargo, and booking. Can't find yours? Reach out and we're happy to help."
        />

        <div className="mt-14 space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={0.04 * i}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${
                    isOpen
                      ? "border-accent-500/50 shadow-soft"
                      : "border-navy-900/5"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-sm font-bold text-navy-900 sm:text-base">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        isOpen
                          ? "bg-accent-500 text-white"
                          : "bg-navy-900/5 text-navy-700"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-navy-600/90">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
