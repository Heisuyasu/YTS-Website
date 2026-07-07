"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import PalawanMap from "./PalawanMap";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { coverageHighlights, serviceAreas } from "@/lib/data";

export default function Coverage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="coverage" className="scroll-mt-24 bg-mist py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Coverage"
          title="We Deliver Across Palawan"
          lead="One provider, the whole province. From the Calamian Islands in the north to Mangsee Island, Balabac in the south, YVES Trucking Services keeps cargo moving to every municipality and key areas."
        />

        <div className="mt-16 grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Map card */}
          <Reveal direction="right">
            <div className="card !p-4 sm:!p-6">
              <PalawanMap active={active} onActivate={setActive} />
            </div>
            <p className="mt-3 text-center text-xs text-navy-600/60">
              Stylized province map — hover or tap a marker to see the service
              area.
            </p>
          </Reveal>

          {/* Highlights + area list */}
          <div className="space-y-10">
            <Reveal direction="left">
              <h3 className="font-display text-lg font-bold text-navy-900">
                What we move, province-wide
              </h3>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {coverageHighlights.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-navy-900/5 bg-white px-4 py-3.5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600">
                      <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-navy-800">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-navy-900">
                <CheckCircle2 className="h-5 w-5 text-accent-500" aria-hidden="true" />
                29 service areas — municipalities, cities & islands
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <button
                    key={area.name}
                    type="button"
                    onMouseEnter={() => setActive(area.name)}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(area.name)}
                    onBlur={() => setActive(null)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                      active === area.name
                        ? "border-accent-500 bg-accent-500 text-white shadow-glow"
                        : "border-navy-900/10 bg-white text-navy-700 hover:border-accent-500/60 hover:text-accent-600"
                    }`}
                  >
                    {area.name}
                    {area.hub ? " ★" : ""}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
