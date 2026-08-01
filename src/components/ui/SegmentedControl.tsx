"use client";

import { motion } from "framer-motion";

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="relative mx-auto flex w-fit rounded-full bg-ink/5 p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`relative z-10 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-bold transition-colors duration-200 sm:px-5 sm:text-[14px] ${
            value === opt.value ? "text-ink" : "text-ink-dim"
          }`}
        >
          {value === opt.value && (
            <motion.span
              layoutId="segmented-pill"
              className="card absolute inset-0 -z-10"
              transition={{ type: "spring", stiffness: 500, damping: 34 }}
            />
          )}
          {opt.label}
        </button>
      ))}
    </div>
  );
}
