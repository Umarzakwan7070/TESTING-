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
    <div className="relative mx-auto flex w-fit rounded-full bg-black/5 p-1 dark:bg-white/10">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`relative z-10 rounded-full px-5 py-2 text-[14px] font-medium transition-colors duration-200 ${
            value === opt.value ? "text-label" : "text-label-secondary"
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
