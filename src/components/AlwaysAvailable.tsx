"use client";

import { Search, Eye, ShieldCheck, MessageCircle } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";

const JOURNEY = [
  { icon: Search, label: "Discover", desc: "They find your business." },
  { icon: Eye, label: "Understand", desc: "They quickly see what you do." },
  { icon: ShieldCheck, label: "Trust", desc: "They see the proof behind it." },
  { icon: MessageCircle, label: "Contact", desc: "They know exactly what to do next." },
];

export default function AlwaysAvailable() {
  return (
    <section className="relative bg-foam py-24 sm:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-ocean">
            Always available
          </span>
          <h2 className="mx-auto mt-4 max-w-lg text-balance font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            You can&apos;t be available 24/7. Your website can.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-balance text-[16px] leading-relaxed text-ink-dim">
            While you&apos;re sleeping, travelling, meeting clients or focused
            on running your business, your website stays available —
            showing what you do, answering the important questions, and
            giving potential customers a clear way to reach you.
          </p>
        </FadeIn>

        <Stagger className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-8">
          {JOURNEY.map((step) => (
            <StaggerItem key={step.label}>
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                  <step.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[13.5px] font-bold uppercase tracking-wide text-ink">
                    {step.label}
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-ink-dim">{step.desc}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn delay={0.2} className="mt-14">
          <p className="mx-auto max-w-md text-balance text-[18px] font-bold leading-snug text-ocean">
            You don&apos;t have to be there for someone to discover why your
            business is worth choosing.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
