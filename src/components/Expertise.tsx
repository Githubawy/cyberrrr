"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Globe, ChartLine, HardDrive, Terminal, Network } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const EXPERTISE = [
  {
    title: "Penetration Testing",
    description: "Applying structured testing methodologies to find security gaps and understand how to mitigate them.",
    icon: ShieldCheck,
  },
  {
    title: "Web Application Security",
    description: "Testing web applications for common vulnerabilities like the OWASP Top 10 to improve overall security.",
    icon: Globe,
  },
  {
    title: "Vulnerability Assessment",
    description: "Using a mix of automated tools and manual checks to identify and prioritize system vulnerabilities.",
    icon: ChartLine,
  },
  {
    title: "Network Security",
    description: "Analyzing network configurations and traffic patterns to identify potential entry points and security flaws.",
    icon: Network,
  },
  {
    title: "Linux",
    description: "Working with Linux environments to manage systems and implement basic security hardening practices.",
    icon: Terminal,
  },
  {
    title: "Networking",
    description: "Applying knowledge of TCP/IP, DNS, and routing to map and secure network infrastructures.",
    icon: HardDrive,
  },
];

export default function Expertise() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Remove GSAP entirely for this section to ensure no layout interference
    // Let Tailwind and Framer Motion handle everything for maximum stability
  }, []);

  return (
    <section ref={sectionRef} id="expertise" className="py-32 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="expertise-title flex flex-col gap-4 mb-20">
          <span className="text-accent font-mono text-xs uppercase tracking-[0.4em]">
            Technical Capabilities
          </span>
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
            Expertise & <br />
            <span className="text-text-secondary">Technical Focus</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERTISE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group p-10 bg-surface border border-border rounded-3xl hover:border-accent/50 transition-all duration-500 hover:bg-surface/80 backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center mb-8 group-hover:text-accent group-hover:border-accent/30 transition-all duration-500 group-hover:scale-110">
                <item.icon size={28} weight="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
