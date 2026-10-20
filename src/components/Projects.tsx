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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {PROJECTS.map((project, i) => {
            const Icon = PROJECT_ICONS[project.slug];
            return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all duration-300 hover:border-accent/50 hover:bg-surface/80 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(46,91,255,0.12)] ${
                project.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-background border border-border rounded-lg text-accent transition-colors">
                      {Icon && <Icon size={20} weight="duotone" />}
                    </div>
                    <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border ${
                      project.type === "Completed"
                        ? "border-emerald-500/30 text-emerald-400"
                        : "border-accent/40 text-accent"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
