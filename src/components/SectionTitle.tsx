"use client";

import React from "react";
import { motion, type Variants } from "motion/react";

type SectionTitleProps = {
  eyebrow: string;
  first: string;
  second: string;
  description?: string;
  /** Optional right-aligned mono label (e.g. project count) */
  meta?: string;
  className?: string;
};

const reveal: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 },
  }),
};

export default function SectionTitle({ eyebrow, first, second, description, meta, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex flex-col gap-4 mb-16 ${className}`}>
      {/* Top row stretches the full grid width: heading left, meta right */}
      <div className="flex items-end justify-between gap-6">
        <div className="flex flex-col gap-4">
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
        </div>

        {meta && (
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hidden md:flex items-center gap-3 shrink-0 pb-2 text-text-secondary/70 font-mono text-[11px] uppercase tracking-[0.3em]"
          >
            <span className="w-8 h-px bg-border" />
            {meta}
          </motion.span>
        )}
      </div>

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
