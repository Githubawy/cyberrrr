"use client";

import React from "react";
import { motion } from "motion/react";

type SectionTitleProps = {
  eyebrow: string;
  first: string;
  second: string;
  description?: string;
  className?: string;
};

const reveal = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

export default function SectionTitle({ eyebrow, first, second, description, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-4 mb-16 ${className}`}>
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-accent font-mono text-xs uppercase tracking-[0.4em]"
      >
        {eyebrow}
      </motion.span>
      {/* whileInView lives on the unclipped h2 — children are fully hidden
          by overflow clipping, so they can never trigger the observer themselves */}

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-4xl md:text-6xl font-bold tracking-tighter leading-none"
      >
        <span className="block overflow-hidden">
          <motion.span custom={0} variants={reveal} className="block whitespace-pre-line">
            {first}
          </motion.span>
        </span>
        <span className="block overflow-hidden">
          <motion.span
            custom={1}
            variants={reveal}
            className={`block whitespace-pre-line ${second ? "text-text-secondary" : ""}`}
          >
            {second}
          </motion.span>
        </span>
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-text-secondary max-w-2xl text-lg"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
