import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  light = false,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignCls = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignCls}`}>
      <span className={light ? "eyebrow-light" : "eyebrow"}>{eyebrow}</span>
      <h2
        className={`mt-4 font-display text-xl font-bold tracking-tight sm:text-2xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-4 text-sm leading-relaxed sm:text-base ${
            light ? "text-white/70" : "text-navy-600/90"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}
