import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { contactInfo } from "@/lib/data";

export default function CTABanner() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl bg-navy-900 px-8 py-16 text-center sm:px-16">
            {/* Decorative glows */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,86,155,0.22),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(47,105,187,0.25),transparent_55%)]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-10 left-1/2 h-40 w-[130%] -translate-x-1/2 rounded-[100%] border-t border-white/10"
            />

            <div className="relative">
              <span className="eyebrow-light">Ready when you are</span>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                Have cargo to move anywhere in Palawan?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
                Tell us what you're shipping and where it's headed. We'll send a
                clear quotation within the day. No obligations.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href={`tel:${contactInfo.mobile.replace(/\s/g, "")}`}
                  className="btn-ghost"
                >
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  {contactInfo.mobile}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
