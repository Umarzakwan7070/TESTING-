"use client";

import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";
import { ArrowRight } from "lucide-react";

const PAIRS = [
  { problem: "You're stuck doing it all yourself", solution: "I take the work off your plate" },
  { problem: "Your site looks like an afterthought", solution: "Your site finally looks like you mean business" },
  { problem: "Customers scroll right past you", solution: "Customers actually stop and look" },
  { problem: "It's draining hours you don't have", solution: "You get your time back" },
];

export default function PainPoints() {
  return (
    <section className="relative bg-foam py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-coral">
            Problem &rarr; Solution
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            You&apos;re losing customers you never even see.
          </h2>
          <p className="mt-3 text-balance text-[15px] leading-relaxed text-ink-dim">
            Every visitor who leaves without reaching out is gone for good
            — and most of them never tell you why.
          </p>
        </FadeIn>

        <Stagger className="mt-10 flex flex-col gap-3">
          {PAIRS.map((p) => (
            <StaggerItem key={p.problem}>
              <div className="flex flex-col items-center gap-2.5 rounded-2xl bg-white px-5 py-4 shadow-sm sm:flex-row sm:justify-center sm:gap-4">
                <span className="text-[14.5px] font-bold text-ink-faint line-through decoration-coral/50">
                  {p.problem}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-coral" strokeWidth={2.5} />
                <span className="text-[14.5px] font-bold text-ocean">{p.solution}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.3} className="mt-8">
          <p className="text-[18px] font-bold text-ocean">
            That&apos;s the switch — and every day you wait, someone else
            gets the customer instead.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
