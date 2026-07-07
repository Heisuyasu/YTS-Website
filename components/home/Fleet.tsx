import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { fleet } from "@/lib/data";

export default function Fleet() {
  return (
    <section className="bg-mist py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Fleet"
          title="The Right Truck for Every Cargo"
          lead="A maintained, road-ready fleet matched to the load — whether it's a Less truck load (LTR) or Full Truck Load (FTL) Cargo load.
          Equiped with GPS, LTFRB Compliant, and DTO Pass (PhilGEPS Accredited)."
        />

        <div className="mt-16 space-y-6">
          {fleet.map((f, i) => {
            const reverse = i % 2 === 1;
            return (
              <Reveal key={f.title} delay={0.08 * i} direction={reverse ? "left" : "right"}>
                <article
                  className={`flex flex-col overflow-hidden rounded-2.5xl border border-navy-900/5 bg-white shadow-soft transition-all duration-300 hover:shadow-lift sm:flex-row ${
                    reverse ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Accent panel — photo when available, icon otherwise */}
                  <div className="relative flex w-full shrink-0 items-center justify-center overflow-hidden bg-navy-950 p-6 sm:w-72">
                    {f.image ? (
                      <div className="relative h-40 w-full sm:h-48">
                        <Image
                          src={f.image}
                          alt={f.title}
                          fill
                          sizes="(min-width: 640px) 288px, 90vw"
                          className="object-contain drop-shadow-xl"
                        />
                      </div>
                    ) : (
                      <div className="flex h-40 w-full items-center justify-center sm:h-48">
                        {f.icon ? (
                          <span className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/[0.06] text-accent-400 ring-1 ring-white/10">
                            <f.icon className="h-12 w-12" aria-hidden="true" strokeWidth={1.5} />
                          </span>
                        ) : null}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-center px-7 py-8 sm:px-9">
                    <span className="flex flex-wrap items-center gap-2">
                      {f.isNew && (
                        <span className="inline-flex w-fit animate-pulse items-center rounded-full bg-accent-500 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-white">
                          New
                        </span>
                      )}
                      <span className="inline-flex w-fit items-center gap-2 rounded-full bg-accent-500/10 px-3.5 py-1.5 font-display text-xs font-semibold text-accent-600">
                        {f.tag}
                      </span>
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-navy-900">
                      {f.title}
                    </h3>
                    <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-navy-600/90">
                      {f.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
