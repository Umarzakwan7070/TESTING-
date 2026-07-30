"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function FadeIn({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.09,
  delayChildren = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
}) {
  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
