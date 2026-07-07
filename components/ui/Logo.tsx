import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="YVES Trucking Services — Home"
      className="group flex items-center gap-3"
    >
      {/* Logomark: brand badge */}
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/logo.png"
          alt="YVES Trucking Services logo"
          width={64}
          height={64}
          priority
          className="h-11 w-11 object-contain drop-shadow-sm"
        />
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-navy-900"
          }`}
        >
          YVES
        </span>
        <span
          className={`block font-display text-[0.62rem] font-semibold uppercase tracking-[0.24em] ${
            light ? "text-white/70" : "text-navy-600/80"
          }`}
        >
          Trucking Services
        </span>
      </span>
    </Link>
  );
}
