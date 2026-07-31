"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { MagneticButton } from "./ui/MagneticButton";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`flex w-full items-center justify-between px-5 py-3 transition-all duration-300 md:px-8 ${
          scrolled ? "border-b border-line bg-foam/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <a href="#top" className="font-display text-[18px] font-bold text-ink">
          SurfingLeads
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-white/70 p-1.5 backdrop-blur-sm md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[14px] font-bold text-ink-dim transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton href="#contact" className="!px-5 !py-2 !text-[14px]">
            Get a quote
          </MagneticButton>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
          aria-label="Toggle menu"
        >
          <div className="relative h-4 w-5">
            <motion.span
              animate={{ rotate: open ? 45 : 0, top: open ? "50%" : "0%" }}
              className="absolute left-0 top-0 h-[2px] w-full rounded-full bg-ink"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-ink"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, bottom: open ? "50%" : "0%" }}
              className="absolute left-0 bottom-0 h-[2px] w-full rounded-full bg-ink"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="card absolute inset-x-3 top-[4rem] flex flex-col gap-1 p-3 md:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-[15px] font-bold text-ink-dim transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-ocean px-4 py-3 text-center text-[15px] font-bold text-white"
            >
              Get a quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

    <AnimatePresence>
      {scrolled && (
        <motion.a
          href="mailto:hello@surfingleads.co"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center rounded-full bg-ocean px-6 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-ocean/30 sm:hidden"
        >
          Book a free call
        </motion.a>
      )}
    </AnimatePresence>
    </>
  );
}
