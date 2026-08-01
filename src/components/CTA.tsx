"use client";

import { ShieldCheck } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { MagneticButton } from "./ui/MagneticButton";

export default function CTA() {
  return (
    <section id="contact" className="relative bg-foam pt-4 pb-24">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[6%] top-4 h-56 w-56 rounded-full bg-ocean/25 blur-3xl" />
          <div className="absolute right-[8%] bottom-0 h-56 w-56 rounded-full bg-sun/20 blur-3xl" />
        </div>

        <FadeIn className="cta-panel overflow-hidden rounded-[32px] text-center">
          <div className="px-8 pb-16 pt-14 sm:px-16 sm:pb-20 sm:pt-16">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Stop losing customers to a website that undersells you.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-balance text-[16px] leading-relaxed text-white/80">
              Start with a free website assessment and I&apos;ll show you
              honestly what I&apos;d improve first — no pressure either way.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4">
              <MagneticButton
                href="/assessment#quiz"
                className="!bg-sun !text-ink !shadow-lg !shadow-sun/40"
              >
                Get my free website assessment
              </MagneticButton>
              <p className="text-[12.5px] font-bold text-white/60">
                No obligation &middot; No hard sell &middot; Practical recommendations
              </p>
              <div className="flex items-center gap-3 text-[13.5px] font-bold text-white/70">
                <a href="mailto:hello@surfingleads.co" className="transition-colors hover:text-white">
                  Book a free call
                </a>
                <span className="text-white/40">&middot;</span>
                <a href="#pricing" className="transition-colors hover:text-white">
                  View pricing
                </a>
              </div>
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
