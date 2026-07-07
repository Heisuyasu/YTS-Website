import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/data";

export default function WhyChooseUs() {
  const [featured, ...rest] = whyChooseUs;
  const FeaturedIcon = featured.icon;

  return (
    <section className="py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for Businesses That Can't Afford Delays"
          lead="LOGISTICS in an island province takes local knowledge, disciplined operations, and people who care. That's what we bring to every haul."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          {/* Featured card — spans 2x2 on desktop */}
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <article className="group relative flex h-full min-h-[280px] flex-col justify-between overflow-hidden rounded-2.5xl bg-navy-950 p-8 shadow-lift">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full opacity-[0.08]"
                viewBox="0 0 400 300"
                preserveAspectRatio="none"
              >
                <path
                  d="M-20 240 C 80 200, 160 260, 240 200 S 380 140, 420 180"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 10"
                />
                <path
                  d="M-20 100 C 100 60, 180 140, 260 90 S 360 20, 420 60"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="3 8"
                />
              </svg>
              <div
                aria-hidden="true"
                className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-accent-500/15 blur-2xl transition-transform duration-700 group-hover:scale-110"
              />

              <div className="relative">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-glow">
                  <FeaturedIcon className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 max-w-sm font-display text-2xl font-bold text-white">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/65">
                  {featured.body}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-400">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                Our top priority
              </div>
            </article>
          </Reveal>

          {/* Supporting cards */}
          {rest.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={0.06 * (i + 1)}>
              <article className="card card-hover group h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-800 text-accent-400 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
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
  );
}
