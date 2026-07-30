"use client";

import { FadeIn } from "./ui/FadeIn";
import { MarkedText } from "./ui/MarkedText";
import { MagneticButton } from "./ui/MagneticButton";
import { BlueprintField } from "./ui/BlueprintField";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <BlueprintField className="opacity-70" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <span className="font-mono-label text-[11px] text-blueprint">Final approval</span>
          <h2 className="mt-4 text-balance font-display text-4xl italic text-paper sm:text-6xl">
            Let&apos;s build the page that{" "}
            <MarkedText>turns visitors into leads.</MarkedText>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-balance text-[16.5px] leading-relaxed text-paper-dim">
            Book a free 20-minute call. We&apos;ll tell you honestly whether a
            new landing page will move the needle for your business.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton href="mailto:hello@launchframe.co">
              Book a free call
            </MagneticButton>
            <MagneticButton href="#pricing" variant="secondary">
              View pricing
            </MagneticButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
