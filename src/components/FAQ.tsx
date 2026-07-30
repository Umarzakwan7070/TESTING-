"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./ui/FadeIn";

const FAQS = [
  {
    q: "How fast can you actually deliver?",
    a: "Most single-page projects go from kickoff call to live page in 5–7 days. Larger, multi-page or integration-heavy builds take a bit longer — we'll give you an exact timeline on the discovery call.",
  },
  {
    q: "Do you write the copy too?",
    a: "Yes. Copywriting is included in every plan. You can also bring your own draft and we'll refine it for conversion.",
  },
  {
    q: "What platforms do you build on?",
    a: "We hand-code with modern frameworks for speed and flexibility, and can also build on Webflow or Framer if that fits your team better.",
  },
  {
    q: "Can you connect it to my CRM or email tool?",
    a: "Yes — HubSpot, Mailchimp, ConvertKit, Notion, Airtable, Zapier, and most common lead tools are supported out of the box.",
  },
  {
    q: "What if it doesn't convert well?",
    a: "The Growth and Partner plans include analytics and A/B testing rounds specifically so we can diagnose and fix drop-off after launch.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn delay={index * 0.05} className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-[17px] italic text-paper">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-7 w-7 shrink-0 items-center justify-center border border-line font-mono text-[16px] text-brass"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-[14.5px] leading-relaxed text-paper-dim">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeIn>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <FadeIn className="text-center">
          <span className="font-mono-label text-[11px] text-blueprint">Spec — 06 / FAQ</span>
          <h2 className="mt-4 text-balance font-display text-4xl italic text-paper sm:text-5xl">
            Questions, answered
          </h2>
        </FadeIn>

        <div className="mt-14">
          {FAQS.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
