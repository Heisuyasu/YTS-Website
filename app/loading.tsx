import { Truck } from "lucide-react";

/**
 * Branded loading state shown while a route is being prepared —
 * a truck driving over a dashed road line.
 */
export default function Loading() {
  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center gap-6 bg-white">
      <div className="relative w-48">
        <div className="flex justify-center">
          <span className="flex h-14 w-14 animate-float-y items-center justify-center rounded-2xl bg-navy-800 text-accent-400 shadow-soft">
            <Truck className="h-7 w-7" aria-hidden="true" />
          </span>
        </div>
        <svg
          aria-hidden="true"
          viewBox="0 0 192 8"
          className="mt-4 w-full overflow-visible"
        >
          <line
            x1="0"
            y1="4"
            x2="192"
            y2="4"
            stroke="#13294F"
            strokeOpacity="0.15"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="10 10"
            className="animate-road-dash"
          />
        </svg>
      </div>
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-navy-600/60">
        Loading…
      </p>
    </div>
  );
}
