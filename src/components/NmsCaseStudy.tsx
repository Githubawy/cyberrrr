import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowDown, ArrowUpRight, CheckCircle, FileText } from "@phosphor-icons/react/dist/ssr";
import { PROJECTS, type Project, type SoftwareCaseStudy } from "@/lib/projects";
import LightboxImage from "@/components/CaseStudyLightbox";
import { SectionHeading, SECTION_SPACING } from "@/components/FacultyCaseStudy";

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden="true">
      <ArrowDown size={16} className="text-accent" />
      {label ? (
        <span className="mt-1 text-[10px] font-mono uppercase tracking-[0.25em] text-text-secondary">
          {label}
        </span>
      ) : null}
    </div>
  );
}

function StatusChip({ status }: { status: string }) {
  const evidenced = status === "Visible in system screenshots";
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full border ${
        evidenced
          ? "text-accent border-accent/30 bg-accent/10"
          : "text-text-secondary border-border bg-background"
      }`}
    >
      {evidenced ? <CheckCircle size={11} weight="bold" /> : <FileText size={11} weight="bold" />}
      {status}
    </span>
  );
}

export default function NmsCaseStudy({ project, study }: { project: Project; study: SoftwareCaseStudy }) {
  return (
    <div className="min-h-screen pt-32 relative">
      {/* soft top light — same treatment as featured case studies */}
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

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-9">
              <a
                href="#objective"
                className="px-7 py-3.5 bg-accent text-white text-sm font-bold rounded-full inline-flex items-center gap-2 shadow-[0_0_30px_rgba(46,91,255,0.35)] hover:bg-opacity-90 transition-all active:scale-95"
              >
                Explore the System
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#evidence"
                className="px-7 py-3.5 bg-transparent border border-border text-text-primary text-sm font-bold rounded-full hover:bg-surface hover:border-accent/40 transition-all active:scale-95"
              >
                View Technical Evidence
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
                <div key={item.label} className="py-4 first:pt-0 flex flex-col gap-1.5">
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

        {/* ── 1. Objective ───────────────────────────────────────── */}
        <section id="objective" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="01 / Objective" title={study.objective.heading} />
          <div className="mt-8 max-w-3xl space-y-5">
            {study.objective.paragraphs.map((p, i) => (
              <p key={i} className="text-text-secondary leading-relaxed">
                {p}
              </p>
            ))}
            <div className="border border-border bg-surface rounded-2xl p-5 flex gap-4 items-start">
              <span className="mt-0.5 text-accent font-mono text-xs shrink-0">i</span>
              <p className="text-text-secondary text-sm leading-relaxed">{study.objective.note}</p>
            </div>
          </div>
        </section>

        {/* ── 2. Architecture ────────────────────────────────────── */}
        <section id="architecture" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="02 / System Architecture" title={study.architecture.heading} />

          {/* legend */}
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-text-secondary mr-1 self-center">
              Evidence level:
            </span>
            <StatusChip status="Visible in system screenshots" />
            <StatusChip status="Documented in project description" />
          </div>

          {/* flow diagram */}
          <div className="mt-10 flex flex-col items-center" role="list" aria-label="System architecture flow">
            {/* 01 Web Interface */}
            <div role="listitem" className="w-full max-w-3xl p-6 bg-surface border border-border rounded-2xl">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-xs text-accent">{study.architecture.flow[0].index}</span>
                  <h3 className="text-lg font-bold mt-1">{study.architecture.flow[0].title}</h3>
                </div>
                <StatusChip status={study.architecture.flow[0].status} />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed opacity-90 mt-3">
                {study.architecture.flow[0].description}
              </p>
            </div>

            <FlowArrow label="Requests · PHP pages" />

            {/* 02 Application Backend */}
            <div role="listitem" className="w-full max-w-3xl p-6 bg-surface border border-border rounded-2xl">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-xs text-accent">{study.architecture.flow[1].index}</span>
                  <h3 className="text-lg font-bold mt-1">{study.architecture.flow[1].title}</h3>
                </div>
                <StatusChip status={study.architecture.flow[1].status} />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed opacity-90 mt-3">
                {study.architecture.flow[1].description}
              </p>
            </div>

            {/* branch: database + scanning component */}
            <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-0">
              <div className="flex flex-col">
                <FlowArrow label="SQL · reads / writes" />
                <div role="listitem" className="flex-1 p-6 bg-surface border border-border rounded-2xl">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-xs text-accent">{study.architecture.flow[2].index}</span>
                      <h3 className="text-lg font-bold mt-1">{study.architecture.flow[2].title}</h3>
                    </div>
                    <StatusChip status={study.architecture.flow[2].status} />
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed opacity-90 mt-3">
                    {study.architecture.flow[2].description}
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <FlowArrow label="Invokes Python · Nmap / ARP" />
                <div role="listitem" className="flex-1 p-6 bg-surface border border-border rounded-2xl">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-xs text-accent">{study.architecture.flow[3].index}</span>
                      <h3 className="text-lg font-bold mt-1">{study.architecture.flow[3].title}</h3>
                    </div>
                    <StatusChip status={study.architecture.flow[3].status} />
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed opacity-90 mt-3">
                    {study.architecture.flow[3].description}
                  </p>
                </div>
              </div>
            </div>

            {/* converge */}
            <div className="w-full max-w-3xl flex">
              <div className="flex-1 flex flex-col items-center">
                <FlowArrow label="Results" />
              </div>
              <div className="flex-1 flex flex-col items-center">
                <FlowArrow label="Discovered IP / MAC data" />
              </div>
            </div>

            {/* 05 Results & Visualization */}
            <div role="listitem" className="w-full max-w-3xl p-6 bg-surface border border-accent/30 rounded-2xl">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-xs text-accent">{study.architecture.flow[4].index}</span>
                  <h3 className="text-lg font-bold mt-1">{study.architecture.flow[4].title}</h3>
                </div>
                <StatusChip status={study.architecture.flow[4].status} />
              </div>
              <p className="text-text-secondary text-sm leading-relaxed opacity-90 mt-3">
                {study.architecture.flow[4].description}
              </p>
            </div>

            {/* feedback to interface */}
            <div className="w-full max-w-3xl mt-6 border border-dashed border-border rounded-2xl p-4 flex items-center gap-3">
              <ArrowLeft size={16} className="text-text-secondary shrink-0 rotate-90" />
              <p className="text-text-secondary text-sm leading-relaxed">
                Results and stored inventory feed back into the web interface — dashboard statistics, device and
                port records, and the network-map view all render from these components.
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. Feature showcase (technical evidence) ───────────── */}
        <section id="evidence" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="03 / Feature Showcase" title={study.features.heading} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {study.features.cards.map((card) => (
              <div key={card.title} className="p-5 bg-surface border border-border rounded-3xl flex flex-col gap-5">
                {card.image ? (
                  <LightboxImage image={card.image} className="[&>button]:rounded-xl" />
                ) : (
                  <div
                    className="aspect-[16/9] rounded-xl border border-dashed border-border bg-background flex flex-col items-center justify-center gap-2 text-center px-6"
                    aria-label={card.placeholder}
                  >
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">
                      {card.placeholder}
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed opacity-90 -mt-3">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Contribution & Methodology ───────────────────────── */}
        <section id="methodology" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="04 / Contribution & Methodology" title={study.contribution.heading} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mt-10">
            {study.contribution.areas.map((area, i) => (
              <div
                key={area.title}
                className="p-7 bg-surface border border-border rounded-3xl hover:border-accent/40 transition-colors duration-300"
              >
                <span className="text-xs font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-base font-bold mt-3 mb-2.5 leading-snug">{area.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed opacity-90">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Outcome & Limitations ────────────────────────────── */}
        <section id="outcome" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="05 / Outcome & Limitations" title={study.outcome.heading} />
          <div className="mt-8 max-w-3xl space-y-5">
            {study.outcome.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-text-primary/90 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-10 max-w-3xl p-7 bg-surface border border-border rounded-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
              {study.outcome.futureWorkLabel}
            </span>
            <ul className="space-y-3 mt-4">
              {study.outcome.futureWork.map((item) => (
                <li key={item} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                  <span className="w-2 h-2 rounded-sm bg-accent/70 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 6. Lessons learned ─────────────────────────────────── */}
        <section id="lessons" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="06 / Key Takeaways" title="Lessons Learned" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mt-10">
            {study.lessons.map((lesson, i) => (
              <div key={lesson.title} className="p-7 bg-surface border border-border rounded-3xl">
                <span className="text-xs font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-base font-bold mt-3 mb-2.5 leading-snug">{lesson.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed opacity-90">{lesson.description}</p>
              </div>
            ))}
          </div>
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
