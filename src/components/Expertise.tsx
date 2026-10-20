"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Globe, ChartLine, HardDrive, Terminal, Network } from "@phosphor-icons/react";
import SectionTitle from "@/components/SectionTitle";

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
  return (
    <section id="expertise" className="py-32 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          eyebrow="Technical Capabilities"
          first={"Expertise &"}
          second="Technical Focus"
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXPERTISE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group p-10 bg-surface border border-border rounded-3xl hover:border-accent/50 transition-all duration-500 hover:bg-surface/80 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(46,91,255,0.12)]"
            >
              <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center mb-8 text-accent group-hover:border-accent/40 group-hover:scale-110 transition-all duration-500">
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
