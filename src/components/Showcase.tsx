"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

const MOCKS = [
  { label: "Coaching offer" },
  { label: "SaaS waitlist" },
  { label: "Local service biz" },
];

function BrowserMock({ label, tilt }: { label: string; tilt: number }) {
  return (
    <motion.div
      style={{ rotate: tilt }}
      whileHover={{ rotate: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="panel w-full max-w-sm shrink-0 overflow-hidden"
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2 w-2 border border-line" />
        <span className="h-2 w-2 border border-line" />
        <span className="h-2 w-2 border border-line" />
        <span className="ml-auto font-mono-label text-[9px] text-line">Preview</span>
      </div>
      <div className="relative h-56 bg-paper/[0.04] p-6">
        <div className="absolute left-0 top-0 h-full w-1 bg-brass" />
        <div className="h-2.5 w-2/3 bg-paper/70" />
        <div className="mt-3 h-2 w-1/2 bg-paper/30" />
        <div className="mt-8 h-8 w-28 border border-brass" />
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="h-10 border border-line" />
          <div className="h-10 border border-line" />
          <div className="h-10 border border-line" />
        </div>
      </div>
      <div className="px-4 py-3 font-mono-label text-[11px] text-paper-dim">{label}</div>
    </motion.div>
  );
}

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const y3 = useTransform(scrollYProgress, [0, 1], [90, -30]);
  const yValues = [y1, y2, y3];

  return (
    <section id="work" ref={ref} className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="font-mono-label text-[11px] text-blueprint">Spec — 03 / Recent work</span>
          <h2 className="mt-4 text-balance font-display text-4xl italic text-paper sm:text-5xl">
            Built for founders, not template shoppers
          </h2>
          <p className="mt-4 text-balance text-[16.5px] leading-relaxed text-paper-dim">
            A sample of the structures we build — every project is fully
            custom to your brand and offer.
          </p>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:items-start">
          {MOCKS.map((m, i) => (
            <motion.div key={m.label} style={{ y: yValues[i] }} className="flex justify-center">
              <BrowserMock label={m.label} tilt={i % 2 === 0 ? -2 : 2} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
