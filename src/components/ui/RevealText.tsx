"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
  as: Tag = "span",
  gradient = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "p";
  gradient?: boolean;
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, i) => (
          <Fragment key={i}>
            <span className="inline-block overflow-hidden pb-[0.15em] align-bottom">
              <motion.span
                className={`inline-block will-change-transform ${gradient ? "gradient-text" : ""}`}
                initial={{ y: "110%", rotate: 4 }}
                whileInView={{ y: "0%", rotate: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{
                  duration: 0.9,
                  delay: delay + i * stagger,
                  ease: EASE,
                }}
              >
                {word}
              </motion.span>
            </span>
            {i !== words.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}
