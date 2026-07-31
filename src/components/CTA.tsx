"use client";

import { ShieldCheck } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { MagneticButton } from "./ui/MagneticButton";
import { WaveDivider } from "./ui/WaveDivider";

export default function CTA() {
  return (
    <section id="contact" className="relative bg-foam pt-4 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn className="overflow-hidden rounded-[32px] bg-gradient-to-b from-ocean to-ocean-night text-center">
          <WaveDivider fill="var(--foam)" className="!h-10" />
          <div className="px-8 pb-16 pt-4 sm:px-16 sm:pb-20">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Stop losing customers to a website that undersells you.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-balance text-[16px] leading-relaxed text-white/80">
              Book a free 20-minute call. I&apos;ll tell you honestly whether a
              landing page or a full website is the right fit for you.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4">
              <MagneticButton
                href="mailto:hello@surfingleads.co"
                className="!bg-sun !text-ink"
              >
                Book a free call
              </MagneticButton>
              <a href="#pricing" className="text-[13.5px] font-bold text-white/70 transition-colors hover:text-white">
                View pricing
              </a>
            </div>

            <p className="mt-6 flex items-center justify-center gap-1.5 text-[13px] font-bold text-white/70">
              <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
              Free revisions until you&apos;re happy — no extra charge.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
