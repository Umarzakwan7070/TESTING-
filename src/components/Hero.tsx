"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealText } from "./ui/RevealText";
import { MarkedText } from "./ui/MarkedText";
import { MagneticButton } from "./ui/MagneticButton";
import { AuroraField } from "./ui/AuroraField";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <AuroraField />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 mx-auto w-full max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="card mx-auto mb-8 flex w-fit items-center gap-2 px-4 py-1.5 text-[13px] font-medium text-label-secondary"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-accent" />
          </span>
          New studio — founding-client pricing
        </motion.div>

        <h1 className="text-balance text-center font-bold leading-[1.02] tracking-tight text-label">
          <RevealText
            as="span"
            text="Landing pages & websites"
            className="block text-[10.5vw] sm:text-[6.5vw] lg:text-[4.2rem]"
          />
          <span className="block text-[10.5vw] sm:text-[6.5vw] lg:text-[4.2rem]">
            <RevealText as="span" text="built to" delay={0.32} />{" "}
            <MarkedText delay={1.0}>
              <RevealText as="span" text="convert." delay={0.32} stagger={0.06} />
            </MarkedText>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
          className="mx-auto mt-7 max-w-lg text-balance text-center text-[16.5px] leading-relaxed text-label-secondary sm:text-lg"
        >
          Clean, fast landing pages and marketing websites for entrepreneurs.
          No online stores, no bloat — just a site built to turn visitors
          into customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <MagneticButton href="#pricing">
            See pricing
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3 7.5H12M12 7.5L8 3.5M12 7.5L8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>
          <MagneticButton href="#work" variant="secondary">
            See example work
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.9 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-separator p-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
