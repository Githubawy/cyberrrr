"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "@phosphor-icons/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-transparent">
      {/* Cinematic Radial Wash */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-accent/10 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Column: Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-square w-full max-w-[450px] mx-auto lg:mx-0"
        >
          <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full" />
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border bg-surface group">
            <Image
              src="/profile.jpg"
              alt="Omar Qasim"
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </motion.div>

        {/* Right Column: Identity */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <motion.div
            className="hero-text overflow-hidden"
          >
            <span className="block text-accent font-mono text-xs uppercase tracking-[0.4em] mb-4">
              Penetration Tester & Security Researcher
            </span>
          </motion.div>

          <motion.h1
            className="hero-text text-[clamp(3rem,6vw,5.5rem)] font-bold tracking-tighter leading-[1.1] text-white"
          >
            Omar Qasim <br />
            <span className="text-text-secondary">Digital Guardian.</span>
          </motion.h1>

          <motion.p
            className="hero-text text-text-secondary max-w-xl mx-auto lg:mx-0 text-lg md:text-xl leading-relaxed mb-12"
          >
            Securing digital ecosystems through rigorous vulnerability assessment
            and architectural analysis. Identifying critical risks before they are exploited.
          </motion.p>

          <div className="hero-text flex flex-col sm:flex-row items-center gap-6">
            <button className="px-8 py-4 bg-accent text-white text-sm font-bold rounded-full hover:bg-opacity-90 transition-all active:scale-95 flex items-center gap-3 group shadow-[0_0_30px_rgba(46,91,255,0.4)]">
              View Selected Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button className="px-8 py-4 bg-transparent border border-border text-text-primary text-sm font-bold rounded-full hover:bg-surface transition-all active:scale-95">
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
