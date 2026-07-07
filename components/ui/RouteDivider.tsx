"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Truck } from "lucide-react";

/**
 * Recurring brand motif: a dashed "route line" with a truck travelling
 * along it, bookended by an origin pin and destination pin. Used between
 * homepage sections instead of a plain margin — ties every transition
 * back to "we move things across Palawan."
 */
export default function RouteDivider({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const reduce = useReducedMotion();
  const line = tone === "dark" ? "stroke-white/15" : "stroke-navy-900/12";
  const pin = tone === "dark" ? "text-white/30" : "text-navy-900/20";

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto flex max-w-7xl items-center px-5 py-2 sm:px-8 lg:px-10"
    >
      <MapPin className={`h-4 w-4 shrink-0 ${pin}`} />
      <svg
        className="mx-3 h-6 w-full flex-1 overflow-visible"
        viewBox="0 0 1000 24"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="12"
          x2="1000"
          y2="12"
          strokeWidth="2"
          strokeDasharray="2 14"
          strokeLinecap="round"
          className={line}
        />
        <motion.g
          initial={reduce ? { x: 480 } : { x: -40 }}
          whileInView={{ x: 480 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4, ease: [0.21, 0.6, 0.35, 1] }}
        >
          <circle cx="12" cy="12" r="11" className="fill-accent-500" />
          <foreignObject x="1" y="1" width="22" height="22">
            <div className="flex h-full w-full items-center justify-center">
              <Truck className="h-3 w-3 text-white" strokeWidth={2.5} />
            </div>
          </foreignObject>
        </motion.g>
      </svg>
      <MapPin className={`h-4 w-4 shrink-0 ${pin}`} />
    </div>
  );
}
