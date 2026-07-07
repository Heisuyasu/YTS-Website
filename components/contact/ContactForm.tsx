"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Loader2,
  MapPin,
  Package,
  Send,
} from "lucide-react";
import { formspreeId, serviceAreas } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

const inputCls =
  "w-full rounded-xl border border-navy-900/10 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-600/40 shadow-sm transition-all duration-200 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/25";

const cargoTypes = [
  "General merchandise",
  "Retail / grocery goods",
  "Construction materials",
  "Agricultural products",
  "Appliances / equipment",
  "Palletized freight",
  "Other (describe below)",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    /* Demo mode until a real Formspree ID is set in lib/data.ts */
    if (formspreeId === "YOUR_FORM_ID") {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("sent");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-green-200 bg-green-50 px-6 py-12 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-green-600" aria-hidden="true" />
        <p className="font-display text-lg font-bold text-navy-900">
          Message received!
        </p>
        <p className="max-w-sm text-sm text-navy-600/90">
          Thank you for reaching out. Our team will get back to you within one
          business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-semibold text-accent-600 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            Something went wrong sending your message. Please try again, or
            reach us directly by phone or email.
          </span>
        </div>
      )}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-semibold text-navy-800"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Juan Dela Cruz"
            className={inputCls}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-semibold text-navy-800"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputCls}
          />
        </div>
      </div>

      {/* Route planner — pickup & destination from the 19 service areas */}
      <fieldset className="rounded-2xl border border-navy-900/10 bg-mist/60 p-4">
        <legend className="flex items-center gap-1.5 px-1 font-display text-xs font-semibold uppercase tracking-wider text-navy-600/70">
          <MapPin className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />
          Route details (optional)
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label
              htmlFor="pickup"
              className="mb-1.5 block text-sm font-semibold text-navy-800"
            >
              Pickup
            </label>
            <select id="pickup" name="pickup" className={inputCls} defaultValue="">
              <option value="">Select area…</option>
              {serviceAreas.map((a) => (
                <option key={a.name} value={a.name}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="destination"
              className="mb-1.5 block text-sm font-semibold text-navy-800"
            >
              Destination
            </label>
            <select
              id="destination"
              name="destination"
              className={inputCls}
              defaultValue=""
            >
              <option value="">Select area…</option>
              {serviceAreas.map((a) => (
                <option key={a.name} value={a.name}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="cargo"
              className="mb-1.5 flex items-center gap-1 text-sm font-semibold text-navy-800"
            >
              <Package className="h-3.5 w-3.5 text-accent-500" aria-hidden="true" />
              Cargo type
            </label>
            <select id="cargo" name="cargo" className={inputCls} defaultValue="">
              <option value="">Select type…</option>
              {cargoTypes.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-semibold text-navy-800"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="e.g., Delivery quote: Puerto Princesa to El Nido"
          className={inputCls}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-semibold text-navy-800"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your cargo — approximate weight or volume, preferred pickup date, and any special handling needs."
          className={`${inputCls} resize-y`}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.button
          key={status}
          type="submit"
          disabled={status === "sending"}
          whileTap={{ scale: 0.97 }}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </>
          )}
        </motion.button>
      </AnimatePresence>
    </form>
  );
}
