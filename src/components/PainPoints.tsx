"use client";

import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";
import { Clock, EyeOff, LogOut, Hammer } from "lucide-react";

const PAINS = [
  { icon: Clock, text: "Your website looks like it's stuck in 2015" },
  { icon: EyeOff, text: "You're a little embarrassed to share your link" },
  { icon: LogOut, text: "Visitors leave before they read a word" },
  { icon: Hammer, text: "You built it yourself, and everyone can tell" },
];

export default function PainPoints() {
  return (
    <section className="relative bg-foam py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-coral">
            Sound familiar?
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Your business deserves better than this.
          </h2>
        </FadeIn>

        <Stagger className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {PAINS.map((p) => (
            <StaggerItem key={p.text}>
              <div className="flex h-full items-center gap-3 rounded-2xl bg-coral/[0.08] px-5 py-4 text-left">
                <p.icon className="h-5 w-5 shrink-0 text-coral" strokeWidth={2} />
                <p className="text-[14.5px] font-bold text-ink">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.3} className="mt-8">
          <p className="text-[18px] font-bold text-ocean">That ends today.</p>
        </FadeIn>
      </div>
    </section>
  );
}
