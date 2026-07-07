"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { contactInfo } from "@/lib/data";

/* Facebook Messenger logo (not in Lucide) */
function MessengerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.92 1.45 5.52 3.72 7.21V22l3.4-1.87c.91.25 1.87.39 2.88.39 5.52 0 10-4.14 10-9.27C22 6.14 17.52 2 12 2zm1.06 12.44-2.55-2.72-4.97 2.72 5.47-5.81 2.61 2.72 4.91-2.72-5.47 5.81z" />
    </svg>
  );
}

/**
 * Floating quick-contact stack (bottom-left): Messenger chat + tap-to-call.
 * Appears after the hero; labels expand on hover.
 */
export default function FloatingCall() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseCls =
    "group flex h-12 items-center overflow-hidden rounded-full pl-3.5 pr-3.5 text-white shadow-lift transition-all duration-300 hover:pr-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const labelCls =
    "max-w-0 overflow-hidden whitespace-nowrap font-display text-sm font-semibold opacity-0 transition-all duration-300 group-hover:ml-2.5 group-hover:max-w-[170px] group-hover:opacity-100";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="fixed bottom-6 left-6 z-50 flex flex-col gap-3"
        >
          <a
            href={contactInfo.messenger}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on Messenger"
            className={`${baseCls} bg-[#0084FF] hover:bg-[#006FDB] focus-visible:ring-[#0084FF]`}
          >
            <MessengerIcon className="h-5 w-5" />
            <span className={labelCls}>Chat on Messenger</span>
          </a>
          <a
            href={`tel:${contactInfo.mobile.replace(/\s/g, "")}`}
            aria-label={`Call us at ${contactInfo.mobile}`}
            className={`${baseCls} bg-accent-500 hover:bg-accent-600 focus-visible:ring-accent-400`}
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <PhoneCall className="h-5 w-5" aria-hidden="true" />
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 animate-ping rounded-full bg-white/40"
              />
            </span>
            <span className={labelCls}>{contactInfo.mobile}</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
