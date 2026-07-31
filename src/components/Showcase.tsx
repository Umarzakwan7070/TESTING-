"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function LandingPageMock() {
  return (
    <div className="p-6">
      <div className="h-3 w-3/4 rounded-full bg-ink/[0.16]" />
      <div className="mt-2.5 h-3 w-1/2 rounded-full bg-ink/[0.16]" />
      <div className="mt-5 h-2 w-full rounded-full bg-ink/[0.08]" />
      <div className="mt-1.5 h-2 w-5/6 rounded-full bg-ink/[0.08]" />
      <div className="mt-6 h-9 w-32 rounded-full bg-ocean" />
      <div className="mt-6 rounded-2xl bg-white/60 p-3.5">
        <div className="h-2 w-20 rounded-full bg-ink/[0.12]" />
        <div className="mt-2.5 flex gap-2">
          <div className="h-8 flex-1 rounded-lg bg-white/70" />
          <div className="h-8 w-16 rounded-lg bg-ocean" />
        </div>
      </div>
    </div>
  );
}

function WebsiteMock() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-ocean" />
        <div className="h-2 w-10 rounded-full bg-ink/[0.14]" />
        <div className="ml-auto flex gap-1.5">
          <div className="h-1.5 w-6 rounded-full bg-ink/10" />
          <div className="h-1.5 w-6 rounded-full bg-ink/10" />
          <div className="h-1.5 w-6 rounded-full bg-ink/10" />
        </div>
      </div>
      <div className="mt-5 h-16 w-full rounded-xl bg-gradient-to-br from-ocean/25 to-coral/20" />
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-white/60 p-2">
          <div className="h-6 w-full rounded bg-ink/[0.08]" />
          <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-ink/10" />
        </div>
        <div className="rounded-lg bg-white/60 p-2">
          <div className="h-6 w-full rounded bg-ink/[0.08]" />
          <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-ink/10" />
        </div>
        <div className="rounded-lg bg-white/60 p-2">
          <div className="h-6 w-full rounded bg-ink/[0.08]" />
          <div className="mt-1.5 h-1.5 w-3/4 rounded-full bg-ink/10" />
        </div>
      </div>
    </div>
  );
}

function CustomMock() {
  return (
    <div className="p-6">
      <div className="flex gap-2">
        <div className="h-8 flex-1 rounded-lg bg-white/60" />
        <div className="h-8 w-8 shrink-0 rounded-lg bg-sun" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl bg-white/60 p-2">
            <div className="h-12 w-full rounded-lg bg-gradient-to-br from-coral/20 to-sun/20" />
            <div className="mt-2 h-1.5 w-3/4 rounded-full bg-ink/[0.14]" />
            <div className="mt-1 h-1.5 w-1/2 rounded-full bg-ink/[0.08]" />
          </div>
        ))}
      </div>
    </div>
  );
}

const CARDS = [
  {
    key: "landing",
    label: "Landing Page",
    mock: LandingPageMock,
    dot: "bg-ocean",
  },
  {
    key: "website",
    label: "Website",
    mock: WebsiteMock,
    dot: "bg-coral",
  },
  {
    key: "custom",
    label: "Custom",
    mock: CustomMock,
    dot: "bg-sun",
  },
];

function ShowcaseCard({
  label,
  Mock,
  dot,
  y,
  delay,
  tilt,
}: {
  label: string;
  Mock: () => React.JSX.Element;
  dot: string;
  y: MotionValue<number>;
  delay: number;
  tilt: number;
}) {
  return (
    <motion.div style={{ y }} className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.94, rotate: tilt }}
        whileInView={{ opacity: 1, y: 0, scale: 1, rotate: tilt }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ rotate: 0, y: -10, scale: 1.02 }}
        transition={{ duration: 0.7, delay, ease: EASE }}
        className="glass w-full max-w-sm shrink-0 overflow-hidden"
      >
        <div className="flex items-center gap-1.5 border-b border-white/50 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/10" />
        </div>

        <Mock />

        <div className="flex items-center gap-2 border-t border-white/50 px-4 py-3">
          <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
          <span className="text-[13px] font-bold text-ink">{label}</span>
        </div>
      </motion.div>
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
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-10 h-72 w-72 rounded-full bg-ocean/25 blur-3xl" />
        <div className="absolute right-[10%] top-40 h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
        <div className="absolute bottom-0 left-[38%] h-64 w-64 rounded-full bg-sun/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <FadeIn className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-ocean">
            What we could build
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            A few ideas to start from
          </h2>
          <p className="mt-3 text-balance text-[16px] leading-relaxed text-ink-dim">
            I&apos;m a new studio, so these are concept directions showing
            style and structure — from a single landing page to a full
            website. Your project would be fully custom.
          </p>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:items-start">
          {CARDS.map((c, i) => (
            <ShowcaseCard
              key={c.key}
              label={c.label}
              Mock={c.mock}
              dot={c.dot}
              y={yValues[i]}
              delay={i * 0.12}
              tilt={i % 2 === 0 ? -2 : 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
