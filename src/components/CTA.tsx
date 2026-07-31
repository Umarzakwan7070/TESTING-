"use client";

import { FadeIn } from "./ui/FadeIn";
import { MarkedText } from "./ui/MarkedText";
import { MagneticButton } from "./ui/MagneticButton";
import { AuroraField } from "./ui/AuroraField";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <AuroraField className="opacity-70" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <FadeIn>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-label sm:text-5xl">
            Let&apos;s build the site that{" "}
            <MarkedText>turns visitors into customers.</MarkedText>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-balance text-[16px] leading-relaxed text-label-secondary">
            Book a free 20-minute call. I&apos;ll tell you honestly whether a
            landing page or a full website is the right fit for you.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
