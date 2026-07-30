"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "./ui/FadeIn";
import { MagneticButton } from "./ui/MagneticButton";

const PLANS = [
  {
    tier: "01",
    name: "Launch",
    price: "$1,200",
    desc: "A single, sharp landing page to validate an offer fast.",
    features: ["1 custom landing page", "Copywriting included", "Lead capture form", "5-day delivery"],
    featured: false,
  },
  {
    tier: "02",
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
    tier: "03",
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
          <span className="font-mono-label text-[11px] text-blueprint">Spec — 05 / Pricing</span>
          <h2 className="mt-4 text-balance font-display text-4xl italic text-paper sm:text-5xl">
            Simple pricing, built to pay for itself
          </h2>
          <p className="mt-4 text-balance text-[16.5px] leading-relaxed text-paper-dim">
            One flat project fee. No retainers, no surprise invoices.
          </p>
        </FadeIn>

        <Stagger className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
          {PLANS.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex h-full flex-col p-8 ${
                  plan.featured ? "border-2 border-brass bg-ink-2" : "panel"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-8 bg-brass px-3 py-1 font-mono-label text-[10px] text-ink">
                    Recommended
                  </span>
                )}
                <span className="font-mono-label text-[10px] text-paper-dim">Tier {plan.tier}</span>
                <h3 className="mt-2 font-display text-lg italic text-paper">{plan.name}</h3>
                <p className="mt-1 text-[13px] text-paper-dim">{plan.desc}</p>
                <div className="tabular mt-6 font-display text-4xl italic text-paper">{plan.price}</div>
                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[13.5px] text-paper">
                      <Check className="h-4 w-4 shrink-0 text-brass" strokeWidth={2} />
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
