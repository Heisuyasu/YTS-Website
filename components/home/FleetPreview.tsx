import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { fleet } from "@/lib/data";

/**
 * Compact 3-card fleet teaser for the homepage.
 * The complete fleet lives on /services.
 */
export default function FleetPreview() {
  const featured = fleet.slice(0, 3);

  return (
    <section className="bg-mist py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Fleet"
          title="The Right Truck for Every Cargo"
          lead="Nine types of units — closed vans, reefers, cranes, and more. GPS-equipped, LTFRB compliant, PhilGEPS accredited."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((f, i) => (
            <Reveal key={f.title} delay={0.08 * i}>
              <article className="card card-hover h-full overflow-hidden !p-0">
                <div className="relative flex h-44 items-center justify-center bg-navy-950 p-5">
                  {f.image && (
                    <div className="relative h-full w-full">
                      <Image
                        src={f.image}
                        alt={f.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 90vw"
                        className="object-contain drop-shadow-xl"
                      />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center rounded-full bg-accent-500/10 px-3 py-1 font-display text-xs font-semibold text-accent-600">
                    {f.tag}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600/90">
                    {f.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 text-center">
          <Link href="/services" className="btn-primary">
            View Our Full Fleet
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
