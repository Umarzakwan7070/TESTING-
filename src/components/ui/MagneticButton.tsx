"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.3 });

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

  if (href) {
    return (
      <Link href={href} className="inline-block rounded-full">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ x: springX, y: springY }}
          whileTap={{ scale: 0.96 }}
          className={`${base} ${styles} ${className}`}
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
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={`${base} ${styles} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
