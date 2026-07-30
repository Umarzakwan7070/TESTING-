"use client";

import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";

const QUOTES = [
  {
    quote:
      "Our opt-in rate more than doubled in the first two weeks. The page finally looks like the business we actually are.",
    name: "Founder",
    role: "B2B coaching business",
  },
  {
    quote:
      "They didn't just design a page, they rewrote our whole pitch. Booked calls went up before we even changed our ads.",
    name: "Co-founder",
    role: "Early-stage SaaS",
  },
  {
    quote:
      "Fast, opinionated, and genuinely fun to work with. Exactly what a solo founder needs when time is the scarce resource.",
    name: "Owner",
    role: "Local service business",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--accent-3)]">
            Client feedback
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Representative feedback from client engagements
          </h2>
        </FadeIn>

        <Stagger className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {QUOTES.map((t) => (
            <StaggerItem key={t.name + t.role}>
              <div className="glass flex h-full flex-col justify-between rounded-3xl p-7">
                <p className="text-[15.5px] leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] text-[13px] font-semibold text-white">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-[13.5px] font-medium text-white">{t.name}</p>
                    <p className="text-[12.5px] text-white/45">{t.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
