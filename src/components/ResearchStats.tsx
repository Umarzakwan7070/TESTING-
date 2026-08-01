"use client";

import { Star, TrendingUp, Target, MapPin } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";

const STATS = [
  {
    icon: Star,
    stat: "93%",
    text: "of consumers read online reviews before visiting a local business.",
    source: "BrightLocal Consumer Review Survey",
    href: "https://www.brightlocal.com/research/local-consumer-review-survey-2024/",
  },
  {
    icon: TrendingUp,
    stat: "66% vs 45%",
    text: "of businesses without a website reported revenue of $100K or less, compared with 45% of businesses with a website, in this survey.",
    source: "Small Business Majority research",
    href: "https://smallbusinessmajority.org/sites/default/files/research-reports/small-businesses-face-obstacles-opportunities-growing-online-presence.pdf",
  },
  {
    icon: Target,
    stat: "4.02% vs 2.35%",
    text: "reported median conversion benchmark for dedicated landing pages vs. general website pages. Results vary by industry, offer and traffic.",
    source: "Landing page conversion benchmarks",
    href: "https://www.involve.me/blog/landing-page-statistics",
  },
];

const LOCAL_STAT = {
  icon: MapPin,
  stat: "74.4%",
  text: "of Malaysian establishments had web presence in 2024 — up from 72.7% in 2023.",
  source: "DOSM (Dept. of Statistics Malaysia)",
  href: "https://www.dosm.gov.my/portal-main/release-content/usage-of-ict-and-e-commerce-by-establishment2025",
};

export default function ResearchStats({
  eyebrow = "Why this matters",
  heading,
  intro,
  closing,
  includeLocal = false,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  closing?: string;
  includeLocal?: boolean;
}) {
  const stats = includeLocal ? [...STATS, LOCAL_STAT] : STATS;

  return (
    <section className="relative bg-sand py-20">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn className="mx-auto max-w-xl text-center">
          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-ocean">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {heading}
          </h2>
          {intro && (
            <p className="mt-4 text-balance text-[15px] leading-relaxed text-ink-dim">{intro}</p>
          )}
        </FadeIn>

        <Stagger
          className={`mt-10 grid grid-cols-1 gap-4 ${
            includeLocal ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"
          }`}
        >
          {stats.map((s) => (
            <StaggerItem key={s.stat}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card block h-full p-6 transition-transform hover:-translate-y-1"
              >
                <s.icon className="h-5 w-5 text-ocean" strokeWidth={2} aria-hidden="true" />
                <div className="mt-4 font-display text-3xl font-bold text-ink">{s.stat}</div>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-dim">{s.text}</p>
                <p className="mt-3 text-[11.5px] font-bold text-ink-faint">{s.source} &rarr;</p>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        {closing && (
          <FadeIn delay={0.2} className="mx-auto mt-8 max-w-lg text-center">
            <p className="text-[15px] leading-relaxed text-ink-dim">{closing}</p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
