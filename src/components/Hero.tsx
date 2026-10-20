"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, type Variants } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const shellRef = useRef<HTMLDivElement>(null);
  const EYEBROW_TEXT = "Penetration Tester & Security Researcher";
  const [typedChars, setTypedChars] = useState(0);
  const typed = typedChars >= EYEBROW_TEXT.length;

  useEffect(() => {
    if (typedChars >= EYEBROW_TEXT.length) return;
    const id = setInterval(() => setTypedChars((c) => c + 1), 28);
    return () => clearInterval(id);
  }, [typedChars]);

  const scrollTo = (hash: string) => {
    const target = document.querySelector(hash);
    if (target) {
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = shellRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center px-6 pt-24 pb-12 lg:py-0 bg-transparent">
      {/* Cinematic Radial Wash (clipped here so it can't leak outside the section) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-accent/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">

        {/* Left Column: Portrait — after the text on mobile (order-2), left side on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 lg:order-1 w-full max-w-[210px] sm:max-w-[330px] mx-auto"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-accent/25 blur-[70px] rounded-full" />

          {/* Vertical CYBERSECURITY label */}
          <div className="hidden sm:flex flex-col items-center absolute top-16 -left-11 lg:-left-12">
            <span
              className="font-mono text-[11px] tracking-[0.5em] text-white/70"
              style={{ writingMode: "vertical-rl" }}
            >
              CYBERSECURITY
            </span>
            <div className="w-px h-14 bg-gradient-to-b from-accent to-transparent mt-4" />
            <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(46,91,255,1)] mt-1" />
          </div>

          {/* Frame shell */}
          <div
            ref={shellRef}
            onMouseMove={handleMouseMove}
            className="relative rounded-[32px] p-[2.5px] bg-gradient-to-br from-accent via-accent/30 to-accent/60 shadow-[0_0_45px_rgba(46,91,255,0.5),0_15px_80px_rgba(46,91,255,0.2)] group/shell"
          >
            {/* Photo */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[29px] bg-surface group">
              <Image
                src="/profile.jpg"
                alt="Omar Qasim"
                fill
                sizes="(max-width: 640px) 56vw, (max-width: 1024px) 82vw, 330px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Mouse-tracking edge glow */}
            <div
              className="absolute inset-0 z-10 rounded-[32px] pointer-events-none opacity-0 transition-opacity duration-300 group-hover/shell:opacity-100"
              style={{
                padding: "4px",
                background: "radial-gradient(140px circle at var(--mx, 50%) var(--my, 0%), rgba(190,214,255,1), rgba(46,91,255,0.45) 45%, transparent 70%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            <div
              className="absolute inset-0 z-10 rounded-[32px] pointer-events-none opacity-0 transition-opacity duration-500 group-hover/shell:opacity-70 blur-[10px]"
              style={{
                padding: "8px",
                background: "radial-gradient(120px circle at var(--mx, 50%) var(--my, 0%), rgba(90,130,255,0.8), transparent 65%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            {/* Shield-lock badge */}
            <div className="absolute -top-8 right-4 sm:-top-10 sm:-right-2">
              <div className="absolute inset-0 bg-accent/60 blur-xl rounded-full" />
              <svg viewBox="0 0 24 24" className="relative w-12 h-12 sm:w-14 sm:h-14" fill="none">
                <path d="M12 1.8l8.3 3.4v7c0 5.5-3.5 8.9-8.3 10 -4.8-1.1-8.3-4.5-8.3-10v-7L12 1.8z" fill="rgba(46,91,255,0.25)" stroke="#5B84FF" strokeWidth="1.4" />
                <path d="M13.8 10.3v-1a1.8 1.8 0 0 0-3.6 0v1" stroke="#CFE0FF" strokeWidth="1.5" />
                <rect x="9.9" y="10.3" width="4.2" height="3.4" rx="0.7" fill="#8FB3FF" />
              </svg>
            </div>
          </div>

          {/* Under-glow line */}
          <div className="absolute -bottom-4 left-10 right-10 h-1 rounded-full bg-accent/80 blur-[3px]" />
          <div className="absolute -bottom-6 left-2 right-2 h-2 rounded-full bg-accent/30 blur-[10px]" />
        </motion.div>

        {/* Right Column: Identity — first on mobile (order-1), right side on desktop */}
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8 order-1 lg:order-2"
        >
          <motion.span
            variants={heroItem}
            className="text-accent font-mono text-xs uppercase tracking-[0.4em] mb-4 min-h-[1.2em]"
            aria-label={EYEBROW_TEXT}
          >
            {EYEBROW_TEXT.slice(0, typedChars)}
            <span
              className={`inline-block w-[7px] h-[0.9em] bg-accent ml-0.5 align-middle ${
                typed ? "animate-pulse" : ""
              }`}
            />
          </motion.span>

          <motion.h1
            variants={heroItem}
            className="text-[clamp(2.6rem,5vw,4.6rem)] font-bold tracking-tighter leading-[1.08] text-white"
          >
            Omar Qasim <br />
            <span className="text-text-secondary">Digital Guardian.</span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="text-text-secondary max-w-xl mx-auto lg:mx-0 text-lg md:text-xl leading-relaxed mb-8 lg:mb-12"
          >
            Securing digital ecosystems through rigorous vulnerability assessment
            and architectural analysis. Identifying critical risks before they are exploited.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="px-8 py-4 bg-accent text-white text-sm font-bold rounded-full hover:bg-opacity-90 transition-all active:scale-95 flex items-center gap-3 group shadow-[0_0_30px_rgba(46,91,255,0.4)]"
            >
              View Selected Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-8 py-4 bg-transparent border border-border text-text-primary text-sm font-bold rounded-full hover:bg-surface transition-all active:scale-95"
            >
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
