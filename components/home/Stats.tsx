"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { stats } from "@/lib/data";

function Counter({
  value,
  suffix,
  duration = 1.8,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden bg-navy-900 py-24 [clip-path:polygon(0_2.5%,100%_0,100%_97.5%,0_100%)] sm:py-28"
      aria-label="Company statistics"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,105,187,0.25),transparent_65%)]"
      />
      <div className="container-x relative grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`relative ${
              i > 0 ? "sm:before:absolute sm:before:-left-5 sm:before:top-1/2 sm:before:h-10 sm:before:w-px sm:before:-translate-y-1/2 sm:before:bg-white/10 lg:before:block" : ""
            }`}
          >
            <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
