"use client";

import { FadeIn } from "./ui/FadeIn";
import { MarkedText } from "./ui/MarkedText";
import { MagneticButton } from "./ui/MagneticButton";
import { AuroraField } from "./ui/AuroraField";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <AuroraField className="opacity-70" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeIn>
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Let&apos;s build the page that{" "}
            <MarkedText>turns visitors into leads.</MarkedText>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-balance text-[17px] leading-relaxed text-white/55">
            Book a free 20-minute call. I&apos;ll tell you honestly whether a
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
