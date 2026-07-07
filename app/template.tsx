"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Page transition — every route change fades/slides the new page in,
 * so moving between Home, About, and Contact feels seamless.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}
