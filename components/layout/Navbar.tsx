"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the mobile menu on navigation */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Lock body scroll while the mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-navy-900/5 bg-white/90 shadow-soft backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-x flex h-[76px] items-center justify-between"
      >
        <Logo light={!solid} />

        {/* Desktop links */}
        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 font-display text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? solid
                        ? "text-accent-600"
                        : "text-accent-400"
                      : solid
                        ? "text-navy-800 hover:text-accent-600"
                        : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent-500"
                    />
                  )}
                </Link>
              </li>
            );
          })}
          <li className="ml-3">
            <Link href="/contact" className="btn-primary !px-5 !py-2.5">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Get a Quote
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors md:hidden ${
            solid
              ? "text-navy-900 hover:bg-navy-900/5"
              : "text-white hover:bg-white/10"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-navy-900/5 bg-white/95 backdrop-blur-md md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 font-display text-sm font-semibold ${
                      pathname === link.href
                        ? "bg-accent-500/10 text-accent-600"
                        : "text-navy-800 hover:bg-navy-900/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-2 px-2 pb-2">
                <Link href="/contact" className="btn-primary w-full">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Get a Quote
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
