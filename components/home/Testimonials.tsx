import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="flex h-full w-[340px] shrink-0 flex-col rounded-2.5xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur transition-all duration-300 hover:border-accent-500/40 hover:bg-white/[0.08] sm:w-[400px]">
      <Quote className="h-7 w-7 text-accent-500" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
        "{t.quote}"
      </blockquote>
      <figcaption className="mt-6 border-t border-white/10 pt-4">
        <p className="font-display text-sm font-bold text-white">{t.name}</p>
        <p className="mt-0.5 text-xs text-white/50">{t.role}</p>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const track = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-navy-950 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Client Feedback"
          title="Trusted by Businesses Across the Province"
          lead="Placeholder testimonials — swap in real client quotes as they come in."
          light
        />
      </div>

      {/* Auto-scrolling marquee, pauses on hover */}
      <div className="group relative mt-16 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {track.map((t, i) => (
            <TestimonialCard key={`${t.role}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
