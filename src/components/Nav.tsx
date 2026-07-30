"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { MagneticButton } from "./ui/MagneticButton";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

function CompassMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="9.5" stroke="var(--brass)" strokeWidth="1.2" />
      <path d="M11 3V6.5M11 15.5V19M3 11H6.5M15.5 11H19" stroke="var(--brass)" strokeWidth="1.2" />
      <path d="M11 7L13 11L11 15L9 11L11 7Z" fill="var(--brass)" />
    </svg>
  );
}

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
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`flex w-full items-center justify-between px-6 py-4 transition-colors duration-500 md:px-10 ${
          scrolled ? "border-b border-line bg-ink/90 backdrop-blur-sm" : "border-b border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 font-display text-[17px] italic text-paper">
          <CompassMark />
          Launchframe
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono-label text-[11px] text-paper-dim transition-colors hover:text-brass"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <MagneticButton href="#contact" className="!px-5 !py-2.5">
            Book a call
          </MagneticButton>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center text-paper md:hidden"
          aria-label="Toggle menu"
        >
          <div className="relative h-4 w-5">
            <motion.span
              animate={{ rotate: open ? 45 : 0, top: open ? "50%" : "0%" }}
              className="absolute left-0 top-0 h-[1.5px] w-full bg-paper"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-paper"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, bottom: open ? "50%" : "0%" }}
              className="absolute left-0 bottom-0 h-[1.5px] w-full bg-paper"
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
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-line bg-ink p-4 md:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-mono-label rounded-[2px] px-4 py-3 text-[12px] text-paper-dim transition-colors hover:bg-ink-2 hover:text-brass"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="font-mono-label mt-2 rounded-[4px] bg-brass px-4 py-3 text-center text-[12px] text-ink"
            >
              Book a call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
