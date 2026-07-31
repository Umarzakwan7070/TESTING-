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
    <span className={`relative inline-block text-accent ${className}`}>
      {children}
      <motion.span
        className="pointer-events-none absolute -bottom-[0.1em] left-0 h-[3px] w-full origin-left rounded-full bg-accent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.9 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.8, delay, ease: [0.65, 0, 0.35, 1] }}
      />
    </span>
  );
}
