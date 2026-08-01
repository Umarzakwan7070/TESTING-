"use client";

import { FadeIn } from "./ui/FadeIn";
import { Check } from "lucide-react";

const ITEMS = [
  "Conversion-focused",
  "Mobile-first",
  "SEO-ready",
  "Built for enquiries",
  "You own the website",
];

export default function TrustStrip() {
  return (
    <section className="relative bg-foam px-6 pb-2">
      <FadeIn
        delay={0.1}
        className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2.5 border-t border-line pt-7 text-center"
      >
        {ITEMS.map((item) => (
          <span key={item} className="flex items-center gap-1.5 text-[12.5px] font-bold text-ink-dim">
            <Check className="h-3.5 w-3.5 shrink-0 text-ocean" strokeWidth={3} />
            {item}
          </span>
        ))}
      </FadeIn>
    </section>
  );
}
