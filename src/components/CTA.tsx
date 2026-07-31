"use client";

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
              Let&apos;s build the site that turns visitors into customers.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-balance text-[16px] leading-relaxed text-white/80">
              Book a free 20-minute call. I&apos;ll tell you honestly whether a
              landing page or a full website is the right fit for you.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <MagneticButton
                href="mailto:hello@surfingleads.co"
                className="!bg-sun !text-ink"
              >
                Book a free call
              </MagneticButton>
              <MagneticButton href="#pricing" className="!bg-white/15 !text-white hover:!bg-white/25">
                View pricing
              </MagneticButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
