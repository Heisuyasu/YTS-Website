import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { contactInfo, navLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            LOGISTICS in an Island province,
            Reliable trucking and cargo handler,
            Safe, on time, every time.

          </p>
          <div className="flex gap-3 pt-1">
            {[
              { icon: Facebook, label: "Facebook", href: contactInfo.facebook },
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href === "#" ? undefined : "_blank"}
                rel={href === "#" ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-500 hover:text-white"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer navigation">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent-400">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 transition-colors hover:text-accent-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#coverage"
                className="text-white/70 transition-colors hover:text-accent-400"
              >
                Coverage Map
              </Link>
            </li>
            <li>
              <Link
                href="/#faq"
                className="text-white/70 transition-colors hover:text-accent-400"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent-400">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              <span>{contactInfo.location}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              <a
                href={`mailto:${contactInfo.email}`}
                className="transition-colors hover:text-accent-400"
              >
                {contactInfo.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              <a
                href={`tel:${contactInfo.mobile.replace(/\s/g, "")}`}
                className="transition-colors hover:text-accent-400"
              >
                {contactInfo.mobile}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent-400">
            Office Hours
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            {contactInfo.hours.map((h) => (
              <li key={h.days}>
                <span className="block font-semibold text-white/85">
                  {h.days}
                </span>
                {h.time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/45 sm:flex-row">
          <p>
            © {year} YVES Trucking Services. All rights reserved.
          </p>
          <p>Proudly serving the province of Palawan, Philippines.</p>
        </div>
      </div>
    </footer>
  );
}
