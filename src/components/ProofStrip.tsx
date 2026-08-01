"use client";

import { FadeIn } from "./ui/FadeIn";

export default function ProofStrip() {
  return (
    <section className="relative bg-foam px-6 pt-4 pb-10 sm:pb-12">
      <FadeIn className="mx-auto max-w-3xl border-y border-line py-8 sm:py-9">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
          <div className="shrink-0 font-display text-5xl font-bold tracking-tight text-ocean sm:text-6xl">
            76%
          </div>
          <div>
            <p className="max-w-md text-balance text-[15px] leading-relaxed text-ink-dim sm:text-[16px]">
              of consumers look for a company&apos;s online presence before
              visiting in person.
            </p>
            <a
              href="https://www.prnewswire.com/news-releases/76-of-consumers-look-at-online-presence-before-physically-visiting-a-business-301272462.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[12.5px] font-bold text-ink-faint transition-colors hover:text-ink"
            >
              View research &#8599;
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
