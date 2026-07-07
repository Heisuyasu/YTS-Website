import type { Metadata } from "next";
import {
  Building2,
  Clock,
  Mail,
  MapPin,
  Smartphone,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a trucking quote from YVES Trucking Services. Contact our Palawan team by phone, email, or the form — we respond within one business day.",
};

type InfoItem = {
  icon: typeof Building2;
  label: string;
  value: string;
  href?: string;
};

const infoItems: InfoItem[] = [
  { icon: Building2, label: "Company", value: contactInfo.company },
  { icon: MapPin, label: "Location", value: contactInfo.location },
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Smartphone,
    label: "Mobile",
    value: contactInfo.mobile,
    href: `tel:${contactInfo.mobile.replace(/\s/g, "")}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's Get Your Cargo Moving"
        lead="Send us the details of your shipment and we'll respond with a clear quotation within one business day."
      />

      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* LEFT: business info + form */}
          <div className="space-y-12">
            <Reveal direction="right">
              <h2 className="font-display text-2xl font-bold text-navy-900">
                Business Information
              </h2>
              <ul className="mt-6 space-y-4">
                {infoItems.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-accent-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-navy-600/60">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="font-semibold text-navy-900 transition-colors hover:text-accent-600"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="font-semibold text-navy-900">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-accent-400">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-600/60">
                      Office Hours
                    </p>
                    {contactInfo.hours.map((h) => (
                      <p key={h.days} className="font-semibold text-navy-900">
                        {h.days}:{" "}
                        <span className="font-normal text-navy-600">
                          {h.time}
                        </span>
                      </p>
                    ))}
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div className="card !p-8">
                <h2 className="font-display text-2xl font-bold text-navy-900">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-navy-600/90">
                  Fields marked with your cargo details help us quote faster.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: embedded map */}
          <Reveal direction="left" className="lg:sticky lg:top-24 lg:self-start">
            <div className="card h-full !p-3">
              <div className="overflow-hidden rounded-2xl">
                <iframe
                  src={contactInfo.mapEmbedSrc}
                  title="YVES Trucking Services office location on Google Maps"
                  className="h-[420px] w-full border-0 lg:h-[720px]"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="px-3 py-3 text-xs text-navy-600/60">
                Map centered on Puerto Princesa City — update the address in{" "}
                <code className="rounded bg-mist px-1.5 py-0.5">
                  lib/data.ts
                </code>{" "}
                once the exact office location is final.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
