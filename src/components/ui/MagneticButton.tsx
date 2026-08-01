"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import Link from "next/link";

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
  idlePulse = false,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  idlePulse?: boolean;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.3 });

  const [pulse, setPulse] = useState(false);
  const interactedRef = useRef(false);

  useEffect(() => {
    if (!idlePulse) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setTimeout(() => {
      if (!interactedRef.current) setPulse(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [idlePulse]);

  function cancelPulse() {
    interactedRef.current = true;
    setPulse(false);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-bold transition-colors duration-200 will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-ocean text-white hover:bg-ocean-deep"
      : "bg-ink/5 text-ink hover:bg-ink/[0.08]";

  const pulseProps = pulse
    ? {
        animate: { scale: [1, 1.035, 1, 1.035, 1] },
        transition: { duration: 1.6, ease: "easeInOut" as const },
        onAnimationComplete: () => setPulse(false),
      }
    : {};

  if (href) {
    return (
      <Link href={href} className="inline-block rounded-full" onMouseEnter={cancelPulse} onClick={cancelPulse}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: springX, y: springY }}
          whileTap={{ scale: 0.96 }}
          className={`${base} ${styles} ${className}`}
          {...pulseProps}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={cancelPulse}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${styles} ${className}`}
      onClick={() => {
        cancelPulse();
        onClick?.();
      }}
      {...pulseProps}
    >
      {children}
    </motion.button>
  );
}
