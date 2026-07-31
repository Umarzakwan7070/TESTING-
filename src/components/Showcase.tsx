"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

const MOCKS = [
  { label: "Coaching offer — concept" },
  { label: "SaaS waitlist — concept" },
  { label: "Local service biz — concept" },
];

function BrowserMock({ label, tilt }: { label: string; tilt: number }) {
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
      <div className="relative h-56 bg-gradient-to-br from-accent/25 to-accent/5 p-6">
        <div className="h-2.5 w-2/3 rounded-full bg-white/50" />
        <div className="mt-3 h-2 w-1/2 rounded-full bg-white/30" />
        <div className="mt-8 h-8 w-28 rounded-full bg-accent" />
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg bg-white/10" />
          <div className="h-10 rounded-lg bg-white/10" />
          <div className="h-10 rounded-lg bg-white/10" />
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
          <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
            Example work
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            The kind of page I build
          </h2>
          <p className="mt-4 text-balance text-[17px] leading-relaxed text-white/55">
            I&apos;m a new studio, so these are concept layouts showing the
            style and structure I build — your project would be fully custom
            to your brand and offer.
          </p>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:items-start">
          {MOCKS.map((m, i) => (
            <motion.div key={m.label} style={{ y: yValues[i] }} className="flex justify-center">
              <BrowserMock label={m.label} tilt={i % 2 === 0 ? -3 : 3} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
