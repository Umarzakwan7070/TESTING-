"use client";

import { FadeIn } from "./ui/FadeIn";

export default function LocalReality() {
  return (
    <section className="relative bg-foam px-6 py-16 sm:py-20">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-coral">
          Local reality
        </span>
        <h2 className="mx-auto mt-3 max-w-lg text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          More Malaysian businesses are moving online every year.
        </h2>

        <div className="mx-auto mt-8 flex w-fit flex-col items-center gap-1 rounded-2xl bg-white px-10 py-7 shadow-sm">
          <span className="font-display text-5xl font-bold tracking-tight text-ocean sm:text-6xl">
            74.4%
          </span>
          <span className="mt-1 max-w-xs text-balance text-[13px] font-bold text-ink-faint">
            of Malaysian establishments had web presence in 2024 — up from
            72.7% in 2023
          </span>
        </div>

        <p className="mx-auto mt-6 max-w-lg text-balance text-[15px] leading-relaxed text-ink-dim">
          Having a way for potential customers to find and understand your
          business online is quickly becoming the norm, not the exception
          — which makes it worth asking whether your own online presence
          is doing its job clearly enough.
        </p>

        <a
          href="https://www.dosm.gov.my/portal-main/release-content/usage-of-ict-and-e-commerce-by-establishment2025"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-[12.5px] font-bold text-ink-faint transition-colors hover:text-ink"
        >
          DOSM data &#8599;
        </a>
      </FadeIn>
    </section>
  );
}
