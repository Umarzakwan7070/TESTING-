"use client";

import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";

const QUOTES = [
  {
    quote:
      "Our opt-in rate more than doubled in the first two weeks. The page finally looks like the business we actually are.",
    role: "Founder — B2B coaching business",
  },
  {
    quote:
      "They didn't just design a page, they rewrote our whole pitch. Booked calls went up before we even changed our ads.",
    role: "Co-founder — early-stage SaaS",
  },
  {
    quote:
      "Fast, opinionated, and genuinely fun to work with. Exactly what a solo founder needs when time is the scarce resource.",
    role: "Owner — local service business",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="font-mono-label text-[11px] text-blueprint">Spec — 04 / Margin notes</span>
          <h2 className="mt-4 text-balance font-display text-4xl italic text-paper sm:text-5xl">
            Representative feedback from client engagements
          </h2>
        </FadeIn>

        <Stagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {QUOTES.map((t, i) => (
            <StaggerItem key={t.role} className={i === 1 ? "md:translate-y-6" : ""}>
              <div className="h-full border-l-2 border-brass bg-ink-2 p-7">
                <span className="font-display text-4xl italic leading-none text-brass">&ldquo;</span>
                <p className="mt-2 text-[15px] leading-relaxed text-paper">{t.quote}</p>
                <p className="mt-6 font-mono-label text-[10.5px] text-paper-dim">{t.role}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
