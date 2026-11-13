import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PROJECTS, type Project, type LabCaseStudy } from "@/lib/projects";
import LightboxImage from "@/components/CaseStudyLightbox";
import { SectionHeading, SECTION_SPACING } from "@/components/FacultyCaseStudy";

export default function HomeLabCaseStudy({
  project,
  study,
}: {
  project: Project;
  study: LabCaseStudy;
}) {
  return (
    <div className="min-h-screen pt-32 relative z-10">
      {/* soft top light, no neon */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(46,91,255,0.10),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <span className="text-accent font-mono text-xs uppercase tracking-[0.4em]">{study.eyebrow}</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] mt-4">
              {study.title}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-medium mt-5">{study.subtitle}</p>
            <p className="text-text-secondary leading-relaxed mt-5 max-w-2xl">{study.description}</p>

            <div className="flex flex-wrap gap-2 mt-7 max-w-xl">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono px-2 py-1 bg-surface border border-border rounded text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-9">
              <a
                href="#objective"
                className="px-7 py-3.5 bg-accent text-white text-sm font-bold rounded-full inline-flex items-center gap-2 shadow-[0_0_30px_rgba(46,91,255,0.35)] hover:bg-opacity-90 transition-all active:scale-95"
              >
                Explore the Project
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#outcome"
                className="px-7 py-3.5 bg-transparent border border-border text-text-primary text-sm font-bold rounded-full hover:bg-surface hover:border-accent/40 transition-all active:scale-95"
              >
                View the Outcome
              </a>
            </div>
          </div>

          {/* metadata panel */}
          <aside className="lg:col-span-5 w-full rounded-3xl border border-border bg-surface p-7 md:p-9">
            <h2 className="text-[11px] font-mono uppercase tracking-[0.35em] text-text-secondary mb-6">
              Project Details
            </h2>
            <dl className="flex flex-col divide-y divide-border">
              {study.meta.map((item) => (
                <div key={item.label} className="py-4 first:pt-0 last:pb-0 flex flex-col gap-1.5">
                  <dt className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">{item.label}</dt>
                  <dd className="text-sm text-text-primary leading-relaxed">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-2 pt-6 mt-2 border-t border-border">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 bg-background border border-border rounded text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </section>

        {/* ── 1. The Objective ───────────────────────────────────── */}
        <section id="objective" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="01 / The Objective" title={study.objective.heading} />
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-text-primary/90 leading-relaxed">
            {study.objective.lead}
          </p>
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-text-primary/90 leading-relaxed border-l-2 border-accent/60 pl-6">
            {study.objective.quote}
          </p>
        </section>

        {/* ── 2. Architecture & Environment ──────────────────────── */}
        <section id="architecture" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="02 / Architecture & Environment" title={study.architecture.heading} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 mt-10">
            {study.architecture.nodes.map((node, i) => (
              <div key={node.title} className="p-7 bg-surface border border-border rounded-3xl flex flex-col gap-3">
                <span className="text-xs font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-bold">{node.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed opacity-90">{node.description}</p>
              </div>
            ))}
          </div>

          {/* simple architecture diagram */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            role="list"
            aria-label="Lab architecture diagram: Kali Linux VM to isolated Docker network to vulnerable applications"
          >
            {study.architecture.flow.map((step, i) => (
              <React.Fragment key={step}>
                {i > 0 ? (
                  <ArrowRight size={18} className="text-accent shrink-0" aria-hidden="true" />
                ) : null}
                <span
                  role="listitem"
                  className="px-5 py-3 bg-surface border border-border rounded-2xl text-sm font-mono text-text-primary"
                >
                  {step}
                </span>
              </React.Fragment>
            ))}
          </div>

          <div className="mt-8 max-w-3xl border border-dashed border-border rounded-2xl p-5 flex gap-4 items-start">
            <span className="mt-0.5 text-accent font-mono text-xs shrink-0">i</span>
            <p className="text-text-secondary text-sm leading-relaxed">{study.architecture.flowNote}</p>
          </div>
        </section>

        {/* ── 3. Contribution & Methodology ──────────────────────── */}
        <section id="methodology" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="03 / Contribution & Methodology" title={study.methodology.heading} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 mt-10">
            {study.methodology.activities.map((activity, i) => (
              <div
                key={activity.title}
                className="p-7 bg-surface border border-border rounded-3xl hover:border-accent/40 transition-colors duration-300 flex flex-col gap-3"
              >
                <span className="text-xs font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-bold">{activity.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed opacity-90">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. The Outcome ─────────────────────────────────────── */}
        <section id="outcome" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="04 / The Outcome" title={study.outcome.heading} />
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-text-primary/90 leading-relaxed border-l-2 border-accent/60 pl-6">
            {study.outcome.quote}
          </p>
          <p className="mt-8 max-w-3xl text-text-secondary leading-relaxed">{study.outcome.paragraph}</p>
        </section>

        {/* ── 5. Visual Evidence ─────────────────────────────────── */}
        <section id="evidence" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="05 / Visual Evidence" title={study.evidence.heading} />
          <div className="mt-8 max-w-3xl border border-border bg-surface rounded-2xl p-5 flex gap-4 items-start">
            <span className="mt-0.5 text-accent font-mono text-xs shrink-0">i</span>
            <p className="text-text-secondary text-sm leading-relaxed">{study.evidence.note}</p>
          </div>

          {study.evidence.primary ? (
            <div className="flex flex-col gap-10 mt-12">
              <LightboxImage image={study.evidence.primary} featured className="w-full" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
                {study.evidence.gallery.map((img) => (
                  <LightboxImage key={img.src} image={img} crop="aspect-[4/3]" />
                ))}
              </div>
            </div>
          ) : (
            <p className="mt-10 max-w-3xl text-text-secondary leading-relaxed">
              Evidence collection for this lab is still being prepared — this section currently serves as a
              methodology overview rather than a claims record.
            </p>
          )}
        </section>

        {/* ── Closing ────────────────────────────────────────────── */}
        <section className={`${SECTION_SPACING} pb-24`}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">
            Explore More <span className="text-text-secondary">Projects</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="px-7 py-3.5 bg-accent text-white text-sm font-bold rounded-full inline-flex items-center gap-2 shadow-[0_0_30px_rgba(46,91,255,0.35)] hover:bg-opacity-90 transition-all active:scale-95"
            >
              <ArrowLeft size={16} className="rotate-90" />
              Back to Projects
            </Link>
            {PROJECTS.filter((p) => p.slug !== project.slug).map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="text-sm px-5 py-3 rounded-full bg-surface border border-border text-text-secondary hover:text-accent hover:border-accent/40 transition-colors"
              >
                {p.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
