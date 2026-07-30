"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function MarkedText({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <motion.svg
        viewBox="0 0 340 18"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-[0.16em] left-0 h-[0.28em] w-full text-brass"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.2, delay }}
      >
        <motion.path
          d="M2 12.5C58 6 121 4 171 8C221 12 283 6 338 9.5"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7, delay, ease: [0.65, 0, 0.35, 1] }}
        />
      </motion.svg>
    </span>
  );
}
