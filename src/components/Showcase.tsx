"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

const MOCKS = [
  { label: "Coaching landing page — concept", color: "bg-ocean" },
  { label: "Local service website — concept", color: "bg-coral" },
  { label: "SaaS waitlist page — concept", color: "bg-sun" },
];

function BrowserMock({ label, color, tilt }: { label: string; color: string; tilt: number }) {
  return (
    <motion.div
      style={{ rotate: tilt }}
      whileHover={{ rotate: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="card w-full max-w-sm shrink-0 overflow-hidden"
    >
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
      </div>
      <div className="p-6">
        <div className="h-2.5 w-2/3 rounded-full bg-ink/10" />
        <div className="mt-3 h-2 w-1/2 rounded-full bg-ink/[0.06]" />
        <div className={`mt-8 h-8 w-28 rounded-full ${color}`} />
        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg bg-ink/[0.04]" />
          <div className="h-10 rounded-lg bg-ink/[0.04]" />
          <div className="h-10 rounded-lg bg-ink/[0.04]" />
        </div>
      </div>
      <div className="border-t border-line px-4 py-3 text-[13px] font-bold text-ink-dim">
        {label}
      </div>
    </motion.div>
  );
}

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const y3 = useTransform(scrollYProgress, [0, 1], [70, -25]);
  const yValues = [y1, y2, y3];

  return (
    <section id="work" ref={ref} className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-ocean">
            Example work
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            The kind of site I build
          </h2>
          <p className="mt-3 text-balance text-[16px] leading-relaxed text-ink-dim">
            I&apos;m a new studio, so these are concept layouts showing style
            and structure — your project would be fully custom.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:items-start">
          {MOCKS.map((m, i) => (
            <motion.div key={m.label} style={{ y: yValues[i] }} className="flex justify-center">
              <BrowserMock label={m.label} color={m.color} tilt={i % 2 === 0 ? -2 : 2} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
