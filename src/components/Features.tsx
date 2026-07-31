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
    icon: PenTool,
    title: "Conversion-first design",
    desc: "Every layout, headline, and CTA is built around one job: turning attention into a lead.",
    span: "md:col-span-2",
  },
  {
    icon: Gauge,
    title: "Blazing performance",
    desc: "Sub-second loads. No bloated builders — clean code that ranks and converts.",
    span: "",
  },
  {
    icon: MousePointerClick,
    title: "Lead capture built-in",
    desc: "Forms, calendars, and CRM/email integrations wired up from day one.",
    span: "",
  },
  {
    icon: Smartphone,
    title: "Pixel-perfect on every device",
    desc: "Designed mobile-first, because most of your leads will find you there.",
    span: "md:col-span-2",
  },
  {
    icon: BarChart3,
    title: "Analytics & A/B testing",
    desc: "See exactly where visitors drop off, and I iterate until they don't.",
    span: "md:col-span-2",
  },
  {
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
          <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
            What you get
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Everything a lead-gen page needs. Nothing it doesn&apos;t.
          </h2>
          <p className="mt-4 text-balance text-[17px] leading-relaxed text-white/55">
            One flat engagement covers design, copy, build, and the tracking to
            prove it&apos;s working.
          </p>
        </FadeIn>

        <Stagger className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          {FEATURES.map((f) => (
            <StaggerItem key={f.title} className={f.span}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-7"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <f.icon className="h-5 w-5 text-white/80" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-lg font-medium text-white">{f.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/50">{f.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
