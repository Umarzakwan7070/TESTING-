"use client";

import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";

const STEPS = [
  { n: "1", title: "Discovery call", desc: "30 minutes on your business, audience, and what a qualified lead looks like for you." },
  { n: "2", title: "Design & copy", desc: "I design a clean, on-brand page or site and write copy built to move visitors to act." },
  { n: "3", title: "Build & connect", desc: "Hand-built, fast, and connected to your CRM, email tool, or booking calendar." },
  { n: "4", title: "Launch", desc: "Your site goes live. For websites, hosting is free for the first 3 months." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-2xl px-6">
        <FadeIn className="text-center">
          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-ocean">
            How it works
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            From kickoff to launch in days
          </h2>
        </FadeIn>

        <Stagger className="mt-12 flex flex-col gap-3">
          {STEPS.map((step) => (
            <StaggerItem key={step.n}>
              <div className="card flex items-start gap-4 p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ocean text-[15px] font-bold text-white">
                  {step.n}
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-ink">{step.title}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-ink-dim">{step.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
