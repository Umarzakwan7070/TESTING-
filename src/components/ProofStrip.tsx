"use client";

import { Check } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";
import { CountUp } from "./ui/CountUp";

const STATS = [
  {
    value: 76,
    text: "of consumers look for a company's online presence before visiting in person.",
    source: "Visual Objects survey",
    href: "https://www.prnewswire.com/news-releases/76-of-consumers-look-at-online-presence-before-physically-visiting-a-business-301272462.html",
  },
  {
    value: 93,
    text: "of consumers read online reviews before visiting a local business.",
    source: "BrightLocal Consumer Review Survey",
    href: "https://www.brightlocal.com/research/local-consumer-review-survey-2024/",
  },
];

const TRUST_ITEMS = [
  "Conversion-focused",
  "Mobile-first",
  "SEO-ready",
  "Built for enquiries",
  "You own the website",
];

export default function ProofStrip() {
  return (
    <section className="relative bg-foam px-6 pt-4 pb-10 sm:pb-12">
      <FadeIn className="mx-auto max-w-3xl border-y border-line py-8 sm:py-9">
        <Stagger className="flex flex-col gap-8 md:flex-row md:gap-0 md:divide-x md:divide-line">
          {STATS.map((s, i) => (
            <StaggerItem
              key={s.value}
              className={`flex flex-1 flex-col items-center gap-4 text-center md:flex-row md:items-center md:gap-6 md:text-left ${
                i === 0 ? "md:pr-8" : "md:pl-8"
              }`}
            >
              <div className="shrink-0 font-display text-5xl font-bold tracking-tight text-ocean sm:text-6xl">
                <CountUp value={s.value} suffix="%" />
              </div>
              <div>
                <p className="max-w-xs text-balance text-[14.5px] leading-relaxed text-ink-dim sm:text-[15px]">
                  {s.text}
                </p>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-[12px] font-bold text-ink-faint transition-colors hover:text-ink"
                >
                  {s.source} &#8599;
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 border-t border-line pt-7 text-center">
          {TRUST_ITEMS.map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-[12.5px] font-bold text-ink-dim">
              <Check className="h-3.5 w-3.5 shrink-0 text-ocean" strokeWidth={3} />
              {item}
            </span>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
