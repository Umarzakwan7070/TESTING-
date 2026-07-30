"use client";

import { motion } from "framer-motion";
import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";
import {
  PenTool,
  Gauge,
  MousePointerClick,
  BarChart3,
  Smartphone,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  {
    index: "A1",
    icon: PenTool,
    title: "Conversion-first design",
    desc: "Every layout, headline, and CTA is built around one job: turning attention into a lead.",
    span: "md:col-span-2",
  },
  {
    index: "A2",
    icon: Gauge,
    title: "Blazing performance",
    desc: "Sub-second loads. No bloated builders — clean code that ranks and converts.",
    span: "",
  },
  {
    index: "A3",
    icon: MousePointerClick,
    title: "Lead capture built-in",
    desc: "Forms, calendars, and CRM/email integrations wired up from day one.",
    span: "",
  },
  {
    index: "A4",
    icon: Smartphone,
    title: "Pixel-perfect on every device",
    desc: "Designed mobile-first, because most of your leads will find you there.",
    span: "md:col-span-2",
  },
  {
    index: "A5",
    icon: BarChart3,
    title: "Analytics & A/B testing",
    desc: "See exactly where visitors drop off, and we iterate until they don't.",
    span: "md:col-span-2",
  },
  {
    index: "A6",
    icon: Sparkles,
    title: "Copy that sells",
    desc: "Persuasive, on-brand copywriting — not filler text you have to rewrite.",
    span: "",
  },
];

export default function Features() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="font-mono-label text-[11px] text-blueprint">Spec — 01 / What you get</span>
          <h2 className="mt-4 text-balance font-display text-4xl italic text-paper sm:text-5xl">
            Everything a lead-gen page needs
          </h2>
          <p className="mt-4 text-balance text-[16.5px] leading-relaxed text-paper-dim">
            One flat engagement covers design, copy, build, and the tracking to
            prove it&apos;s working.
          </p>
        </FadeIn>

        <Stagger className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
          {FEATURES.map((f) => (
            <StaggerItem key={f.title} className={f.span}>
              <motion.div
                whileHover={{ backgroundColor: "var(--ink-2)" }}
                transition={{ duration: 0.3 }}
                className="relative flex h-full flex-col bg-ink p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-line text-brass">
                    <f.icon className="h-4 w-4" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono-label text-[10px] text-line">{f.index}</span>
                </div>
                <h3 className="mt-6 font-display text-lg italic text-paper">{f.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-paper-dim">{f.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
