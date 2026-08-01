"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealText } from "./ui/RevealText";
import { MarkedText } from "./ui/MarkedText";
import { MagneticButton } from "./ui/MagneticButton";
import { WaveField } from "./ui/WaveField";
import HeroShowcase from "./HeroShowcase";

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
    <section id="top" ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-foam pt-28 pb-24">
      <WaveField />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 mx-auto w-full max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="card mx-auto mb-8 flex w-fit items-center gap-2 px-4 py-1.5 text-[13px] font-bold text-ink-dim"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-soft rounded-full bg-coral" />
          </span>
          Landing pages & websites — founding-client pricing
        </motion.div>

        <h1 className="text-balance text-center font-display font-extrabold leading-[1.02] tracking-tight text-ink">
          <RevealText
            as="span"
            text="Catch every wave"
            className="block text-[11vw] sm:text-[7vw] lg:text-[4.4rem]"
          />
          <span className="block text-[11vw] sm:text-[7vw] lg:text-[4.4rem]">
            <RevealText as="span" text="of" delay={0.32} />{" "}
            <MarkedText>
              <RevealText as="span" text="leads." delay={0.32} stagger={0.06} />
            </MarkedText>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
          className="mx-auto mt-7 max-w-lg text-balance text-center text-[16.5px] leading-relaxed text-ink-dim sm:text-lg"
        >
          You&apos;re working harder than ever, but the growth isn&apos;t
          matching the effort. It&apos;s not your business — it&apos;s that
          nobody online can tell how good you actually are. I build sites
          that finally show it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-center gap-4"
        >
          <MagneticButton href="/assessment#quiz" idlePulse>
            Get a free website assessment
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3 7.5H12M12 7.5L8 3.5M12 7.5L8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </MagneticButton>
          <p className="text-[12px] font-bold text-ink-faint">
            No hard sell &middot; Practical recommendations &middot; No obligation
          </p>
          <div className="flex items-center gap-3 text-[13.5px] font-bold text-ink-dim">
            <a href="mailto:hello@surfingleads.co" className="transition-colors hover:text-ink">
              Book a free call
            </a>
            <span className="text-ink-faint">&middot;</span>
            <a href="#work" className="transition-colors hover:text-ink">
              See my work
            </a>
          </div>
        </motion.div>

        <HeroShowcase />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.9 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-6 items-start justify-center rounded-full border border-line p-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-ocean" />
        </motion.div>
      </motion.div>
    </section>
  );
}
