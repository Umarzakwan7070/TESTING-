"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

const MOCKS = [
  { label: "Coaching offer", accent: "from-[var(--accent-1)] to-[var(--accent-3)]" },
  { label: "SaaS waitlist", accent: "from-[var(--accent-3)] to-[var(--accent-2)]" },
  { label: "Local service biz", accent: "from-[var(--accent-2)] to-[var(--accent-1)]" },
];

function BrowserMock({ label, accent, tilt }: { label: string; accent: string; tilt: number }) {
  return (
    <motion.div
      style={{ rotate: tilt }}
      whileHover={{ rotate: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="glass w-full max-w-sm shrink-0 overflow-hidden rounded-2xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center gap-1.5 border-b border-white/8 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <div className={`h-56 bg-gradient-to-br ${accent} p-6 opacity-90`}>
        <div className="h-2.5 w-2/3 rounded-full bg-white/50" />
        <div className="mt-3 h-2 w-1/2 rounded-full bg-white/30" />
        <div className="mt-8 h-8 w-28 rounded-full bg-white/90" />
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg bg-white/20" />
          <div className="h-10 rounded-lg bg-white/20" />
          <div className="h-10 rounded-lg bg-white/20" />
        </div>
      </div>
      <div className="px-4 py-3 text-[13px] font-medium text-white/70">{label}</div>
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
          <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--accent-1)]">
            Recent work
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Built for founders, not template shoppers
          </h2>
          <p className="mt-4 text-balance text-[17px] leading-relaxed text-white/55">
            A sample of the styles and structures we build — every project is
            fully custom to your brand and offer.
          </p>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:items-start">
          {MOCKS.map((m, i) => (
            <motion.div key={m.label} style={{ y: yValues[i] }} className="flex justify-center">
              <BrowserMock label={m.label} accent={m.accent} tilt={i % 2 === 0 ? -3 : 3} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
