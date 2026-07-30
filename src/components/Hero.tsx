"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealText } from "./ui/RevealText";
import { MarkedText } from "./ui/MarkedText";
import { MagneticButton } from "./ui/MagneticButton";
import { BlueprintField } from "./ui/BlueprintField";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <BlueprintField />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto mb-10 flex w-fit items-center gap-3 border border-line px-4 py-1.5"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-brass" />
          </span>
          <span className="font-mono-label text-[11px] text-paper-dim">
            Status — accepting 3 new briefs for August
          </span>
        </motion.div>

        <h1 className="text-balance text-center font-display font-normal italic leading-[1.02] text-paper">
          <RevealText
            as="span"
            text="Landing pages that turn"
            className="block text-[11vw] sm:text-[7vw] lg:text-[4.8rem]"
          />
          <span className="block text-[11vw] sm:text-[7vw] lg:text-[4.8rem]">
            <RevealText as="span" text="strangers into" delay={0.32} />{" "}
            <MarkedText delay={1.1}>
              <RevealText as="span" text="leads." delay={0.32} stagger={0.06} />
            </MarkedText>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
          className="mx-auto mt-8 max-w-xl text-balance text-center text-[16.5px] leading-relaxed text-paper-dim sm:text-lg"
        >
          We draft the structure and redline the words until your page does
          one job well: turning visitors into qualified leads.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton href="#contact">
            Start your build
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3 7.5H12M12 7.5L8 3.5M12 7.5L8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>
          <MagneticButton href="#work" variant="secondary">
            See recent work
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-line p-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-brass" />
        </motion.div>
      </motion.div>
    </section>
  );
}
