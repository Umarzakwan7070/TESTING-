"use client";

import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";
import { IconTile } from "./ui/IconTile";
import { ListRow } from "./ui/ListRow";
import {
  PenTool,
  Gauge,
  MousePointerClick,
  BarChart3,
  Smartphone,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  { icon: PenTool, color: "blue" as const, title: "Conversion-first design", desc: "Every layout and CTA is built around one job: turning visitors into leads." },
  { icon: Gauge, color: "green" as const, title: "Blazing performance", desc: "Sub-second loads. Clean code that ranks and converts." },
  { icon: MousePointerClick, color: "orange" as const, title: "Lead capture built-in", desc: "Forms, calendars, and CRM/email integrations wired up from day one." },
  { icon: Smartphone, color: "purple" as const, title: "Pixel-perfect on every device", desc: "Designed mobile-first, because that's where most visitors land." },
  { icon: BarChart3, color: "pink" as const, title: "Analytics included", desc: "See exactly where visitors drop off, so we know what to fix." },
  { icon: Sparkles, color: "teal" as const, title: "Copy that sells", desc: "Persuasive, on-brand copywriting — not filler text you have to rewrite." },
];

export default function Features() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-2xl px-6">
        <FadeIn className="text-center">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-accent">
            What you get
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-label sm:text-4xl">
            Everything a good site needs
          </h2>
          <p className="mt-3 text-balance text-[16px] leading-relaxed text-label-secondary">
            No online stores, no page builders bloated with features you
            won&apos;t use — just the essentials, done well.
          </p>
        </FadeIn>

        <Stagger className="card mt-12 overflow-hidden">
          {FEATURES.map((f, i) => (
            <StaggerItem key={f.title}>
              <ListRow
                leading={<IconTile icon={f.icon} color={f.color} />}
                title={f.title}
                desc={f.desc}
                last={i === FEATURES.length - 1}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
