"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { PROJECTS, type Project } from "@/lib/projects";
import SectionTitle from "@/components/SectionTitle";
import { Network, Code, ShieldCheck, Folder, Flask } from "@phosphor-icons/react";

/* Icons keyed by slug so the shared data file stays render-agnostic */
const PROJECT_ICONS: Record<Project["slug"], React.ComponentType<{ size: number; weight?: string }>> = {
  "faculty-network-infrastructure": Network,
  "network-management-system": Code,
  "web-app-security-assessment": ShieldCheck,
  "educenter-management-system": Folder,
  "cybersecurity-home-lab": Flask,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          eyebrow="Selected Work"
          first="Featured"
          second="Projects & Labs"
          meta={`0${PROJECTS.length} Projects — 0${PROJECTS.length} Case Studies`}
        />

        {/* Uniform cards matching the Expertise grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {PROJECTS.map((project, i) => {
            const Icon = PROJECT_ICONS[project.slug];
            return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col p-6 sm:p-10 bg-surface border border-border rounded-3xl hover:border-accent/50 transition-all duration-500 hover:bg-surface/80 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(46,91,255,0.12)]"
            >
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <div className="w-11 h-11 sm:w-14 sm:h-14 bg-background border border-border rounded-2xl flex items-center justify-center text-accent group-hover:border-accent/40 group-hover:scale-110 transition-all duration-500">
                  {Icon && <Icon size={28} weight="duotone" className="w-6 h-6 sm:w-7 sm:h-7" />}
                </div>
                <span className={`text-[9px] sm:text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border ${
                  project.type === "Completed"
                    ? "border-emerald-500/30 text-emerald-400"
                    : "border-accent/40 text-accent"
                }`}>
                  {project.type}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                {project.description}
              </p>

              <div className="flex flex-col gap-4 mt-auto pt-8">
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
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
