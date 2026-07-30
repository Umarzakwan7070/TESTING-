"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

const STEPS = [
  {
    n: "01",
    title: "Discovery call",
    desc: "30 minutes on your offer, audience, and what a qualified lead looks like for you.",
  },
  {
    n: "02",
    title: "Design & copy",
    desc: "We design a premium, on-brand page and write copy built to move visitors to act.",
  },
  {
    n: "03",
    title: "Build & integrate",
    desc: "Hand-coded, fast, and connected to your CRM, email tool, or booking calendar.",
  },
  {
    n: "04",
    title: "Launch & optimize",
    desc: "We track performance and run iterations so conversion keeps climbing after launch.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="font-mono-label text-[11px] text-blueprint">Spec — 02 / Sequence</span>
          <h2 className="mt-4 text-balance font-display text-4xl italic text-paper sm:text-5xl">
            From kickoff to launch in days, not months
          </h2>
        </FadeIn>

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-[27px] top-0 h-full w-px bg-line md:left-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[27px] top-0 w-px bg-brass md:left-1/2"
          />

          <div className="flex flex-col gap-14">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-line bg-ink font-mono-label text-[13px] text-brass">
                  {step.n}
                </div>

                <FadeIn
                  y={20}
                  className={`flex-1 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}
                >
                  <div className="panel inline-block w-full p-6 md:w-auto md:min-w-[22rem]">
                    <span className="font-mono-label text-[10px] text-paper-dim">Step {step.n}</span>
                    <h3 className="mt-1 font-display text-lg italic text-paper">{step.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-paper-dim">{step.desc}</p>
                  </div>
                </FadeIn>

                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
