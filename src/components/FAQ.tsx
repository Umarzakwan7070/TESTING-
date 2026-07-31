"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";

const FAQS = [
  {
    q: "You're new — why should I trust you with this?",
    a: "Fair question. I don't have a long client list yet, which is exactly why founding clients get in at a lower price and my full, undivided attention. If something's not working early on, we talk and fix it together.",
  },
  {
    q: "Do you build online stores?",
    a: "No — I don't build e-commerce or checkout systems. I focus on landing pages and marketing websites: pages built to get visitors to contact you, book a call, or sign up, not to process payments for products.",
  },
  {
    q: "What's the difference between a landing page and a website?",
    a: "A landing page is one focused page built around a single offer or action. A website is multiple pages — Home, About, Services, Contact — for a business that needs a fuller online presence.",
  },
  {
    q: "How does the $99/month for websites work?",
    a: "Websites include free hosting for the first 3 months. After that, it's $99/month, which covers hosting plus small maintenance and updates. You can cancel anytime after the first 3 months.",
  },
  {
    q: "How fast can you actually deliver?",
    a: "Landing pages typically take 5–7 days from kickoff call to live page. Websites take a bit longer depending on how many pages you need — I'll give you an exact timeline on the discovery call.",
  },
  {
    q: "Do you write the copy too?",
    a: "Yes. Copywriting is included in every plan. You can also bring your own draft and I'll refine it for conversion.",
  },
  {
    q: "I have a catalog/listings-style business (real estate, rentals, etc.) — can you build for that?",
    a: "Yes — that's the Custom Website plan, starting at $1,499. It's built around whatever you're showcasing (properties, rentals, services, inventory) with photos, details, and search or filtering. Customers browse and send an inquiry, but the deal itself always closes face-to-face between you and them — the site never processes payments or bookings.",
  },
];

function FAQItem({ q, a, last }: { q: string; a: string; last: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={last ? "" : "border-b border-line"}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 px-5 py-4 text-left"
      >
        <span className="text-[15px] font-medium text-ink">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink/5 text-ink-dim"
        >
          <Plus className="h-3.5 w-3.5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-[14px] leading-relaxed text-ink-dim">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-2xl px-6">
        <FadeIn className="text-center">
          <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-ocean">
            FAQ
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions, answered
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="card mt-10 overflow-hidden">
          {FAQS.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} last={i === FAQS.length - 1} />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
