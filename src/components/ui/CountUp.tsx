"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function CountUp({
  value,
  decimals = 0,
  suffix = "",
  duration = 1.2,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!inView) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let start: number | null = null;
    const durationMs = duration * 1000;
    let raf = 0;

    function tick(timestamp: number) {
      if (reduceMotion) {
        setDisplay(value.toFixed(decimals));
        return;
      }
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay((value * eased).toFixed(decimals));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
