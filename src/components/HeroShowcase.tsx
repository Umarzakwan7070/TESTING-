"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const CALLOUTS = [
  { top: "18%", label: "Headline that says what you do", delay: 1.5 },
  { top: "47%", label: "One clear call to action", delay: 1.7 },
  { top: "74%", label: "Captures every lead", delay: 1.9 },
];

function Callout({ top, label, delay }: { top: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      style={{ top }}
      className="absolute left-0 hidden w-48 -translate-x-[calc(100%+18px)] items-center gap-2 lg:flex"
    >
      <span className="text-right text-[12.5px] font-bold leading-snug text-ink-dim">{label}</span>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
      <span className="h-px w-4 shrink-0 bg-line" />
    </motion.div>
  );
}

export default function HeroShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 1.0, ease: EASE }}
      className="relative mx-auto mt-16 w-full max-w-lg lg:mt-24"
    >
      {CALLOUTS.map((c) => (
        <Callout key={c.label} top={c.top} label={c.label} delay={c.delay} />
      ))}

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="card overflow-hidden"
      >
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
          <span className="ml-3 h-2 flex-1 max-w-40 rounded-full bg-ink/[0.04]" />
        </div>

        <div className="p-7">
          <div className="h-3 w-3/4 rounded-full bg-ink/[0.14]" />
          <div className="mt-2.5 h-3 w-1/2 rounded-full bg-ink/[0.14]" />
          <div className="mt-4 h-2 w-full rounded-full bg-ink/[0.06]" />
          <div className="mt-1.5 h-2 w-5/6 rounded-full bg-ink/[0.06]" />

          <div className="mt-6 h-9 w-32 rounded-full bg-ocean" />

          <div className="mt-8 rounded-2xl bg-ink/[0.03] p-4">
            <div className="h-2 w-24 rounded-full bg-ink/10" />
            <div className="mt-3 flex gap-2">
              <div className="h-9 flex-1 rounded-lg bg-white" />
              <div className="h-9 w-20 rounded-lg bg-ocean" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10, rotate: -4 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 0.6, delay: 2.1, ease: EASE }}
        className="card absolute -bottom-5 -right-4 flex items-center gap-2 px-4 py-2.5 sm:-right-8"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sun text-[11px] font-bold text-ink">
          $
        </span>
        <span className="text-[13px] font-bold text-ink">Starting at $399</span>
      </motion.div>
    </motion.div>
  );
}
