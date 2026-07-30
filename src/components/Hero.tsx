"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealText } from "./ui/RevealText";
import { MagneticButton } from "./ui/MagneticButton";
import { AuroraBackground } from "./ui/AuroraBackground";

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
      <AuroraBackground />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 40%, black 40%, transparent 90%)",
        }}
      />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="glass mx-auto mb-8 flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-medium text-white/70"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Now booking 3 new builds for August
        </motion.div>

        <h1 className="text-balance text-center font-semibold leading-[0.95] tracking-tight text-white">
          <RevealText
            as="span"
            text="Landing pages that turn"
            className="block text-[13vw] sm:text-[8vw] lg:text-[5.2rem]"
          />
          <RevealText
            as="span"
            text="strangers into leads"
            delay={0.32}
            gradient
            className="block text-[13vw] sm:text-[8vw] lg:text-[5.2rem]"
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
          className="mx-auto mt-7 max-w-xl text-balance text-center text-[17px] leading-relaxed text-white/60 sm:text-lg"
        >
          We design, write, and ship premium, high-converting landing pages for
          founders and entrepreneurs — so every visitor becomes a lead, not a
          bounce.
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
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
