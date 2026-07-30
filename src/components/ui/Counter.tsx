"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export function Counter({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.6,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, to, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
      }
    });
  }, [spring, prefix, suffix, decimals]);

  return (
    <motion.span ref={ref}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}
