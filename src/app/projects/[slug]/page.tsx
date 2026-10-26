import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { getProject, PROJECTS, FEATURED_CASE_STUDIES } from "@/lib/projects";
import FacultyCaseStudy, { SectionHeading, SECTION_SPACING } from "@/components/FacultyCaseStudy";

/* Dynamic detail route: allow blocking render of awaited params (Next 16) */
export const instant = false;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const featured = FEATURED_CASE_STUDIES[slug];
  if (featured) {
    return <FacultyCaseStudy project={project} featured={featured} />;
  }

  const cs = project.caseStudy;

  return (
    <div className="min-h-screen pt-32 relative">
      {/* soft top light — matches featured case studies */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(46,91,255,0.10),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <span className="text-accent font-mono text-xs uppercase tracking-[0.4em]">
              {project.category} / {project.type}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] mt-4">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-medium mt-5">{project.description}</p>

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
              <div className="py-4 first:pt-0 flex flex-col gap-1.5">
                <dt className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Category</dt>
                <dd className="text-sm text-text-primary leading-relaxed">{project.category}</dd>
              </div>
              <div className="py-4 flex flex-col gap-1.5">
                <dt className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Status</dt>
                <dd className="text-sm text-text-primary leading-relaxed">{project.type}</dd>
              </div>
              <div className="py-4 last:pb-0 flex flex-col gap-1.5">
                <dt className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Technologies</dt>
                <dd className="text-sm text-text-primary leading-relaxed">{project.tags.join(", ")}</dd>
              </div>
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

        {/* ── 01 Objective ───────────────────────────────────────── */}
        <section id="objective" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="01 / The Problem" title="Objective" />
          <div className="mt-8 max-w-3xl space-y-5">
            <p className="text-text-secondary leading-relaxed">{cs.objective}</p>
          </div>
        </section>

        {/* ── 02 Architecture & Environment ──────────────────────── */}
        <section id="architecture" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="02 / Under the Hood" title="Architecture & Environment" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mt-10">
            {cs.architecture.map((item, i) => (
              <div key={i} className="p-7 bg-surface border border-border rounded-3xl flex flex-col gap-3">
                <span className="text-xs font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-text-secondary text-sm leading-relaxed opacity-90">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 03 Contribution & Methodology ──────────────────────── */}
        <section id="methodology" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="03 / How It Was Built" title="Contribution & Methodology" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8 mt-10">
            {cs.methodology.map((item, i) => (
              <div key={i} className="p-7 bg-surface border border-border rounded-3xl hover:border-accent/40 transition-colors duration-300">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-text-secondary text-sm leading-relaxed opacity-90 mt-3">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 04 Outcome ─────────────────────────────────────────── */}
        <section id="outcome" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="04 / The Result" title="Outcome" />
          <p className="mt-8 max-w-3xl text-lg text-text-primary/90 leading-relaxed border-l-2 border-accent/60 pl-6">
            {cs.outcome}
          </p>
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
