"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { SegmentedControl } from "./ui/SegmentedControl";
import { MagneticButton } from "./ui/MagneticButton";

type PlanKey = "landing" | "website";

const PLANS: Record<
  PlanKey,
  {
    name: string;
    price: string;
    priceNote: string;
    desc: string;
    features: string[];
    footnote: string;
  }
> = {
  landing: {
    name: "Landing Page",
    price: "$399",
    priceNote: "starting price, one-time",
    desc: "A single, focused page to launch an offer and start collecting leads fast.",
    features: [
      "1 custom landing page",
      "Copywriting included",
      "Lead capture form",
      "Mobile-optimized",
      "5–7 day delivery",
    ],
    footnote: "One-time fee. Hosting isn't included, but I'm happy to help you set it up.",
  },
  website: {
    name: "Website",
    price: "$700",
    priceNote: "one-time build",
    desc: "A multi-page marketing site — Home, About, Services, Contact, and more.",
    features: [
      "Multi-page website",
      "Copywriting included",
      "Free hosting for the first 3 months",
      "$99/month after month 3 (hosting + maintenance)",
      "Cancel the monthly plan anytime",
    ],
    footnote: "$700 upfront for the build. Hosting is free for 3 months, then $99/month for hosting and maintenance.",
  },
};

export default function Pricing() {
  const [plan, setPlan] = useState<PlanKey>("landing");
  const active = PLANS[plan];

  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-2xl px-6">
        <FadeIn className="text-center">
          <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-accent">
            Pricing
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-label sm:text-4xl">
            Two ways to get online
          </h2>
          <p className="mt-3 text-balance text-[16px] leading-relaxed text-label-secondary">
            Simple, flat pricing. No e-commerce, no scope creep.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-8 flex justify-center">
          <SegmentedControl
            value={plan}
            onChange={setPlan}
            options={[
              { value: "landing", label: "Landing Page" },
              { value: "website", label: "Website" },
            ]}
          />
        </FadeIn>

        <div className="relative mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={plan}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="card p-8"
            >
              <h3 className="text-lg font-semibold text-label">{active.name}</h3>
              <p className="mt-1 text-[14px] text-label-secondary">{active.desc}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight text-label">{active.price}</span>
                <span className="text-[13px] text-label-secondary">{active.priceNote}</span>
              </div>

              <ul className="mt-7 flex flex-col gap-3">
                {active.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14.5px] text-label">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <MagneticButton href="#contact" className="mt-8 w-full">
                Get started
              </MagneticButton>

              <p className="mt-4 text-center text-[12.5px] leading-relaxed text-label-tertiary">
                {active.footnote}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
