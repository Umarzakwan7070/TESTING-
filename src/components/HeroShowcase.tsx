"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

function LandingPageMock() {
  return (
    <div className="p-4">
      <div className="h-2 w-4/5 rounded-full bg-ink/[0.16]" />
      <div className="mt-1.5 h-2 w-1/2 rounded-full bg-ink/[0.16]" />
      <div className="mt-3 h-1.5 w-full rounded-full bg-ink/[0.08]" />
      <div className="mt-3 h-7 w-20 rounded-full bg-ocean" />
      <div className="mt-4 rounded-xl bg-white/60 p-2.5">
        <div className="flex gap-1.5">
          <div className="h-6 flex-1 rounded-md bg-white/70" />
          <div className="h-6 w-10 rounded-md bg-ocean" />
        </div>
      </div>
    </div>
  );
}

function WebsiteMock() {
  return (
    <div className="p-4">
      <div className="flex items-center gap-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-coral" />
        <div className="h-1.5 w-8 rounded-full bg-ink/[0.14]" />
        <div className="ml-auto flex gap-1">
          <div className="h-1 w-4 rounded-full bg-ink/10" />
          <div className="h-1 w-4 rounded-full bg-ink/10" />
        </div>
      </div>
      <div className="mt-3 h-10 w-full rounded-lg bg-gradient-to-br from-coral/25 to-ocean/20" />
      <div className="mt-2.5 grid grid-cols-3 gap-1.5">
        <div className="h-5 rounded bg-white/60" />
        <div className="h-5 rounded bg-white/60" />
        <div className="h-5 rounded bg-white/60" />
      </div>
    </div>
  );
}

function CustomMock() {
  return (
    <div className="p-4">
      <div className="flex gap-1.5">
        <div className="h-6 flex-1 rounded-md bg-white/60" />
        <div className="h-6 w-6 rounded-md bg-sun" />
      </div>
      <div className="mt-2.5 grid grid-cols-2 gap-1.5">
        <div className="rounded-lg bg-white/60 p-1.5">
          <div className="h-7 rounded bg-gradient-to-br from-sun/25 to-coral/20" />
        </div>
        <div className="rounded-lg bg-white/60 p-1.5">
          <div className="h-7 rounded bg-gradient-to-br from-sun/25 to-coral/20" />
        </div>
      </div>
    </div>
  );
}

const CARDS = [
  { key: "landing", label: "Landing Page", mock: LandingPageMock, dot: "bg-ocean", float: 0, tilt: -8, delay: 1.1 },
  { key: "website", label: "Website", mock: WebsiteMock, dot: "bg-coral", float: -14, tilt: 0, delay: 1.25 },
  { key: "custom", label: "Custom", mock: CustomMock, dot: "bg-sun", float: 0, tilt: 8, delay: 1.4 },
];

export default function HeroShowcase() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto mt-16 w-full max-w-4xl lg:mt-24" style={{ perspective: 1400 }}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-0 h-48 w-48 rounded-full bg-ocean/20 blur-3xl" />
        <div className="absolute right-[10%] top-10 h-48 w-48 rounded-full bg-coral/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-sun/20 blur-3xl" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:items-center">
        {CARDS.map((c) => {
          const isActive = active === c.key;
          const dimmed = active !== null && !isActive;

          return (
            <motion.button
              key={c.key}
              type="button"
              onClick={() => setActive(isActive ? null : c.key)}
              initial={{ opacity: 0, y: 50, scale: 0.92, rotateY: 0 }}
              animate={
                isActive
                  ? { opacity: 1, y: c.float - 22, scale: 1.1, rotateY: 0, filter: "brightness(1)" }
                  : {
                      opacity: 1,
                      y: dimmed ? c.float + 8 : c.float,
                      scale: dimmed ? 0.9 : 1,
                      rotateY: dimmed ? c.tilt : 0,
                      filter: dimmed ? "brightness(0.85)" : "brightness(1)",
                    }
              }
              whileHover={!isActive ? { y: c.float - 8, scale: 1.03 } : undefined}
              transition={{ duration: 0.7, delay: active === null ? c.delay : 0, ease: EASE }}
              style={{ zIndex: isActive ? 30 : 10, transformStyle: "preserve-3d" }}
              className="glass w-full cursor-pointer overflow-hidden text-left"
            >
              <div className="flex items-center gap-1.5 border-b border-white/50 px-3.5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-ink/10" />
                <span className="h-2 w-2 rounded-full bg-ink/10" />
                <span className="h-2 w-2 rounded-full bg-ink/10" />
              </div>
              <div className="flex h-44 flex-col justify-center overflow-hidden">
                <c.mock />
              </div>
              <div className="flex items-center gap-1.5 border-t border-white/50 px-3.5 py-2.5">
                <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                <span className="text-[12px] font-bold text-ink">{c.label}</span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
