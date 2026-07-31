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
    desc: "I design a premium, on-brand page and write copy built to move visitors to act.",
  },
  {
    n: "03",
    title: "Build & integrate",
    desc: "Hand-coded, fast, and connected to your CRM, email tool, or booking calendar.",
  },
  {
    n: "04",
    title: "Launch & optimize",
    desc: "I track performance and run iterations so conversion keeps climbing after launch.",
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
          <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
            How it works
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            From kickoff to launch in days, not months
          </h2>
        </FadeIn>

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-[27px] top-0 h-full w-px bg-white/8 md:left-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[27px] top-0 w-px bg-accent md:left-1/2"
          />

          <div className="flex flex-col gap-14">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-background text-sm font-semibold text-white">
                  {step.n}
                </div>

                <FadeIn
                  y={20}
                  className={`flex-1 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}
                >
                  <div className="glass inline-block w-full rounded-2xl p-6 md:w-auto md:min-w-[22rem]">
                    <h3 className="text-lg font-medium text-white">{step.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-white/50">{step.desc}</p>
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
