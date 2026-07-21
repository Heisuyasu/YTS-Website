"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowLeftRight,
  ArrowRight,
  Clock,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Warehouse,
} from "lucide-react";
import TruckScene from "./TruckScene";

const trustChips = [
  { icon: ShieldCheck, label: "Safe cargo handling" },
  { icon: Clock, label: "On-time delivery" },
  { icon: Warehouse, label: "Cross dock & warehouse management" },
  { icon: PackageCheck, label: "Special cargo handling" },
  { icon: ArrowLeftRight, label: "Inbound & outbound Palawan" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.7, ease: [0.21, 0.6, 0.35, 1] },
  }),
};

export default function Hero() {
  const reduce = useReducedMotion();
  /* Scroll parallax — truck drifts up slightly slower than the page */
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 600], [0, 90]);

  return (
    <section
      className="relative isolate overflow-hidden bg-navy-950 text-white"
      aria-label="Hero"
    >
      {/* Layered background: gradient wash + route lines + soft glows */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(47,105,187,0.28),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(245,86,155,0.16),transparent_50%)]"
      />
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-[0.16]"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Stylized highway routes */}
        <path
          d="M-60 620 C 260 520, 420 700, 760 560 S 1240 420, 1520 520"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M-60 660 C 260 560, 420 740, 760 600 S 1240 460, 1520 560"
          stroke="white"
          strokeWidth="1"
          strokeDasharray="10 14"
          className={reduce ? "" : "animate-road-dash"}
        />
        <path
          d="M-80 240 C 300 300, 640 140, 900 240 S 1360 340, 1540 220"
          stroke="white"
          strokeWidth="1.5"
          strokeDasharray="2 10"
        />
        {/* Waypoint dots */}
        {[
          [180, 585],
          [560, 618],
          [935, 512],
          [1265, 468],
        ].map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="5" fill="#F5569B" />
            <circle cx={cx} cy={cy} r="11" stroke="#F5569B" strokeWidth="1.5" />
          </g>
        ))}
      </svg>

      <div className="container-x relative grid min-h-[92svh] items-center gap-14 pb-24 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        {/* Copy */}
        <div>
          <motion.span
            variants={fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            custom={0}
            className="eyebrow-light"
          >
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Province-wide · Palawan, Philippines
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            custom={1}
            className="mt-6 font-display text-2xl font-extrabold leading-[1.15] tracking-tight sm:text-3xl lg:text-4xl"
          >
            Reliable Logistics Services{" "}
            <span className="relative text-accent-400 sm:whitespace-nowrap">
              Across Palawan
              <svg
                aria-hidden="true"
                viewBox="0 0 300 12"
                className="absolute -bottom-2 left-0 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9 C 75 2, 225 2, 298 8"
                  stroke="#F5569B"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.7"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            custom={2}
            className="mt-7 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base"
          >
            LOGISTICS in an Island province,
            reliable trucking and cargo handler,
            safe, on time, every time.

          </motion.p>

          <motion.div
            variants={fadeUp}
            initial={reduce ? false : "hidden"}
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link href="/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/#coverage" className="btn-ghost">
              View Coverage Map
            </Link>
          </motion.div>

          {/* Trust chips — revealed one by one */}
          <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/60">
            {trustChips.map(({ icon: Icon, label }, i) => (
              <motion.li
                key={label}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55 + 0.14 * i,
                  duration: 0.5,
                  ease: [0.21, 0.6, 0.35, 1],
                }}
                className="flex items-center gap-2"
              >
                <Icon className="h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                {label}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* 3D truck scene (WebGL) */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.21, 0.6, 0.35, 1] }}
          style={reduce ? undefined : { y: parallaxY }}
          className="relative mx-auto mt-16 w-full max-w-sm px-6 sm:max-w-md lg:mx-0 lg:mt-0 lg:max-w-none lg:px-0"
          aria-hidden="true"
        >
          <TruckScene />
          {/* Floating badge cards */}
          <div className="absolute -left-1 -top-16 rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2 backdrop-blur-md sm:-left-2 sm:-top-6 lg:-left-6 lg:-top-8 lg:rounded-2xl lg:px-5 lg:py-4">
            <p className="font-display text-xs font-bold leading-snug text-accent-400 sm:text-sm lg:text-lg">
              More satisfied principal and clients.
              <br />
              <span className="block pl-8 sm:pl-12 lg:pl-16 xl:pl-24">...and counting.</span>
            </p>
          </div>
          <div className="absolute bottom-14 right-4 rounded-xl border border-white/10 bg-white/[0.07] px-3 py-2 backdrop-blur-md sm:-bottom-4 sm:right-6 lg:right-2 lg:rounded-2xl lg:px-5 lg:py-4">
            <p className="font-display text-base font-bold text-accent-400 lg:text-lg">
              24/7
            </p>
            <p className="text-[10px] text-white/60 lg:text-xs">Dispatch & support</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade into next section */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white"
      />
    </section>
  );
}
