"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";
import { MagneticButton } from "./ui/MagneticButton";

const PLANS = [
  {
    name: "Launch",
    price: "$1,200",
    desc: "A single, sharp landing page to validate an offer fast.",
    features: ["1 custom landing page", "Copywriting included", "Lead capture form", "5-day delivery"],
    featured: false,
  },
  {
    name: "Growth",
    price: "$2,400",
    desc: "For founders who need the page to actually perform.",
    features: [
      "Everything in Launch",
      "CRM / email integration",
      "Analytics + heatmaps",
      "1 round of A/B testing",
      "30 days of support",
    ],
    featured: true,
  },
  {
    name: "Partner",
    price: "Custom",
    desc: "Ongoing design partner for multiple campaigns or pages.",
    features: [
      "Everything in Growth",
      "Multiple pages / variants",
      "Priority turnaround",
      "Monthly optimization",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-[var(--accent-2)]">
            Pricing
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Simple pricing, built to pay for itself
          </h2>
          <p className="mt-4 text-balance text-[17px] leading-relaxed text-white/55">
            One flat project fee. No retainers, no surprise invoices.
          </p>
        </FadeIn>

        <Stagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
          {PLANS.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  plan.featured
                    ? "border border-white/15 bg-gradient-to-b from-white/[0.09] to-white/[0.02] shadow-[0_20px_60px_-15px_rgba(110,107,255,0.35)]"
                    : "glass"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] px-4 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-medium text-white">{plan.name}</h3>
                <p className="mt-1 text-[13.5px] text-white/50">{plan.desc}</p>
                <div className="mt-6 text-4xl font-semibold tracking-tight text-white">{plan.price}</div>
                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[14px] text-white/70">
                      <Check className="h-4 w-4 shrink-0 text-[var(--accent-3)]" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
                <MagneticButton
                  href="#contact"
                  variant={plan.featured ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  Get started
                </MagneticButton>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
