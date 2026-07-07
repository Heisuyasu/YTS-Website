import Reveal from "./Reveal";

export default function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-40 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(47,105,187,0.28),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(245,86,155,0.14),transparent_50%)]"
      />
      <svg
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 w-full opacity-10"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 60 C 360 20, 720 90, 1080 50 S 1440 30, 1440 30"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="8 12"
        />
      </svg>
      <div className="container-x relative">
        <Reveal>
          <span className="eyebrow-light">{eyebrow}</span>
          <h1 className="mt-5 max-w-2xl font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            {lead}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
