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
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`flex w-full items-center justify-between px-5 py-3 transition-all duration-300 md:px-8 ${
          scrolled ? "nav-blur border-b border-separator" : "border-b border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 text-[16px] font-semibold tracking-tight text-label">
          <span className="flex h-7 w-7 items-center justify-center rounded-[9px] bg-accent">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
          </span>
          Launchframe
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-label-secondary transition-colors hover:text-label"
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
          className="flex h-9 w-9 items-center justify-center rounded-full text-label md:hidden"
          aria-label="Toggle menu"
        >
          <div className="relative h-4 w-5">
            <motion.span
              animate={{ rotate: open ? 45 : 0, top: open ? "50%" : "0%" }}
              className="absolute left-0 top-0 h-[1.5px] w-full bg-label"
            />
            <motion.span
              animate={{ opacity: open ? 0 : 1 }}
              className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-label"
            />
            <motion.span
              animate={{ rotate: open ? -45 : 0, bottom: open ? "50%" : "0%" }}
              className="absolute left-0 bottom-0 h-[1.5px] w-full bg-label"
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
                className="rounded-xl px-4 py-3 text-[15px] font-medium text-label-secondary transition-colors hover:bg-black/5 hover:text-label"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-[15px] font-semibold text-white"
            >
              Get a quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
