"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Folder, Code, ShieldCheck, Flask } from "@phosphor-icons/react";
import Link from "next/link";

const PROJECTS = [
  {
    slug: "faculty-network-infrastructure",
    title: "Faculty Network Infrastructure",
    category: "Network Architecture",
    description: "A university faculty network project involving Cisco Packet Tracer, routers, switches, and wireless infrastructure.",
    tags: ["Cisco Packet Tracer", "Networking", "Architecture"],
    type: "Completed",
    size: "large", // For Bento Grid variance
    icon: Network,
  },
  {
    slug: "network-management-system",
    title: "Network Management System",
    category: "Software Development",
    description: "Web application for network device inventory, port management, and topology visualization.",
    tags: ["PHP", "MySQL", "Python", "Nmap"],
    type: "Prototype",
    size: "medium",
    icon: Code,
  },
  {
    slug: "web-app-security-assessment",
    title: "Web Application Security Assessment",
    category: "Security Assessment",
    description: "Penetration testing and vulnerability assessment focused on OWASP risks.",
    tags: ["OWASP", "Pentesting", "Vulnerability Assessment"],
    type: "Demonstration",
    size: "medium",
    icon: ShieldCheck,
  },
  {
    slug: "educenter-management-system",
    title: "EduCenter Management System",
    category: "Web Application",
    description: "Education management application involving student records, payments, and role-based access.",
    tags: ["Web Dev", "RBAC", "Database"],
    type: "Completed",
    size: "small",
    icon: Folder,
  },
  {
    slug: "cybersecurity-home-lab",
    title: "Cybersecurity Home Lab",
    category: "Security Research",
    description: "Practical lab work involving Docker, OWASP Juice Shop, and network security experiments.",
    tags: ["Docker", "Juice Shop", "Linux"],
    type: "Lab Exercise",
    size: "medium",
    icon: Flask,
  },
];

// To avoid the "Activity" or "GlobeLock" issues, I will import common icons explicitly
import { Network } from "@phosphor-icons/react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col gap-4 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-mono text-xs uppercase tracking-[0.2em]"
          >
            Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter leading-none"
          >
            Featured <br />
            <span className="text-text-secondary">Projects & Labs</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all duration-300 hover:border-accent/50 hover:bg-surface/80 backdrop-blur-sm ${
                project.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-background border border-border rounded-lg text-text-primary group-hover:text-accent transition-colors">
                      <project.icon size={20} weight="duotone" />
                    </div>
                    <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border ${
                      project.type === "Completed" ? "border-emerald-500/30 text-emerald-500" :
                      project.type === "Prototype" ? "border-blue-500/30 text-blue-500" :
                      project.type === "Lab Exercise" ? "border-purple-500/30 text-purple-500" :
                      "border-amber-500/30 text-amber-500"
                    }`}>
                      {project.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 bg-background border border-border rounded text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-xs font-bold text-text-primary group-hover:text-accent transition-colors"
                  >
                    View Case Study
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Background Decorative Element */}
              <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-accent/5 blur-3xl rounded-full group-hover:bg-accent/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
