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
  Timer,
  Warehouse,
} from "lucide-react";

const trustChips = [
  { icon: ShieldCheck, label: "Safe cargo handling" },
  { icon: Timer, label: "98% on-time rate" },
  { icon: MapPin, label: "29 service areas" },
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
            <span className="relative whitespace-nowrap text-accent-400">
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
            Cargo moved safely and on schedule — Puerto Princesa to Elnido, Inland, inter-island,
            and everywhere between.
            
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

        {/* Truck illustration */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.21, 0.6, 0.35, 1] }}
          style={reduce ? undefined : { y: parallaxY }}
          className="relative hidden lg:block"
          aria-hidden="true"
        >
          <div className="animate-float-y">
            <TruckIllustration />
          </div>
          {/* Floating badge cards */}
          <div className="absolute -left-6 top-6 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 backdrop-blur-md">
            <p className="font-display text-lg font-bold text-accent-400">
              More satisfied principal and clients and counting.
            </p>
            <p className="text-xs text-white/60"> </p>
          </div>
          <div className="absolute -bottom-4 right-2 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 backdrop-blur-md">
            <p className="font-display text-lg font-bold text-accent-400">
              24/7
            </p>
            <p className="text-xs text-white/60">Dispatch & support</p>
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

/* Flat-style side-view truck, original artwork */
function TruckIllustration() {
  return (
    <svg viewBox="0 0 640 360" className="w-full drop-shadow-2xl" fill="none">
      {/* Ground line */}
      <line
        x1="20"
        y1="312"
        x2="620"
        y2="312"
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="2"
        strokeDasharray="14 12"
      />
      {/* Trailer */}
      <rect x="60" y="96" width="340" height="160" rx="14" fill="#F4F7FB" />
      <rect x="60" y="96" width="340" height="160" rx="14" stroke="#1355B2" strokeWidth="3" />
      <rect x="60" y="196" width="340" height="10" fill="#F5569B" opacity="0.9" />
      {/* Trailer branding */}
      <text
        x="94"
        y="164"
        fontFamily="Poppins, sans-serif"
        fontWeight="800"
        fontSize="44"
        fill="#0B3167"
        letterSpacing="2"
      >
        YVES
      </text>
      <text
        x="96"
        y="188"
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        fontSize="13"
        fill="#1355B2"
        letterSpacing="4"
      >
        TRUCKING SERVICES
      </text>
      {/* Trailer chassis */}
      <rect x="60" y="256" width="340" height="14" rx="4" fill="#0E4187" />
      {/* Cab */}
      <path
        d="M412 256 V150 a14 14 0 0 1 14-14 h70 a16 16 0 0 1 13 7l34 50 a20 20 0 0 1 4 12 v51 z"
        fill="#1355B2"
      />
      <path
        d="M412 256 V150 a14 14 0 0 1 14-14 h70 a16 16 0 0 1 13 7l34 50 a20 20 0 0 1 4 12 v51 z"
        stroke="#0B3167"
        strokeWidth="3"
      />
      {/* Window */}
      <path
        d="M438 158 a8 8 0 0 1 8-8 h44 a10 10 0 0 1 8 4.5 L524 192 h-86 z"
        fill="#FFCBEB"
      />
      {/* Cab accent stripe */}
      <rect x="412" y="226" width="135" height="12" fill="#F5569B" />
      {/* Bumper + light */}
      <rect x="540" y="244" width="14" height="26" rx="4" fill="#0B3167" />
      <rect x="544" y="214" width="8" height="16" rx="3" fill="#FAB3D2" />
      {/* Exhaust */}
      <rect x="404" y="120" width="8" height="136" rx="3" fill="#0B3167" />
      {/* Wheels */}
      {[120, 190, 470].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="288" r="26" fill="#082247" />
          <circle cx={cx} cy="288" r="12" fill="#F4F7FB" />
          <circle cx={cx} cy="288" r="4" fill="#082247" />
        </g>
      ))}
      {/* Motion lines */}
      <g stroke="#F5569B" strokeWidth="4" strokeLinecap="round" opacity="0.7">
        <line x1="10" y1="150" x2="44" y2="150" />
        <line x1="0" y1="180" x2="40" y2="180" />
        <line x1="16" y1="210" x2="44" y2="210" />
      </g>
    </svg>
  );
}