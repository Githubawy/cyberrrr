import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PROJECTS, type Project, type FeaturedCaseStudy } from "@/lib/projects";
import LightboxImage from "@/components/CaseStudyLightbox";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-accent font-mono text-xs uppercase tracking-[0.4em]">{eyebrow}</span>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">{title}</h2>
    </div>
  );
}

const SECTION_SPACING = "py-16 md:py-24 border-t border-border";

export default function FacultyCaseStudy({ project, featured }: { project: Project; featured: FeaturedCaseStudy }) {
  const close = featured.physical;
  const design = featured.design;
  const app = featured.application;

  return (
    <div className="min-h-screen pt-32 relative">
      {/* soft top light, no neon */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(46,91,255,0.10),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <span className="text-accent font-mono text-xs uppercase tracking-[0.4em]">{featured.eyebrow}</span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.05] mt-4">
              {featured.title}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-medium mt-5">{featured.subtitle}</p>
            <p className="text-text-secondary leading-relaxed mt-5 max-w-2xl">{featured.description}</p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-9">
              <a
                href="#overview"
                className="px-7 py-3.5 bg-accent text-white text-sm font-bold rounded-full inline-flex items-center gap-2 shadow-[0_0_30px_rgba(46,91,255,0.35)] hover:bg-opacity-90 transition-all active:scale-95"
              >
                Explore the Project
                <ArrowUpRight size={16} />
              </a>
              <a
                href={`#${close.id}`}
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
              {featured.meta.map((item) => (
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

        {/* ── 1. Overview ────────────────────────────────────────── */}
        <section id="overview" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="01 / Project Overview" title={featured.overview.heading} />
          <div className="mt-8 max-w-3xl space-y-5">
            {featured.overview.paragraphs.map((p, i) => (
              <p key={i} className="text-text-secondary leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mt-10">
            {featured.overview.pillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="p-7 bg-surface border border-border rounded-3xl flex flex-col gap-3"
              >
                <span className="text-xs font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-bold">{pillar.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed opacity-90">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2. Physical infrastructure (evidence) ──────────────── */}
        <section id={close.id} className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="02 / Physical Infrastructure" title={close.heading} />
          <div className="mt-8 max-w-3xl space-y-5">
            {close.paragraphs.map((p, i) => (
              <p key={i} className="text-text-secondary leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
            <div className="lg:col-span-5">
              <LightboxImage image={close.primary} featured />
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
              {close.gallery.map((img) => (
                <LightboxImage key={img.src} image={img} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Network design ──────────────────────────────────── */}
        <section id="design" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="03 / Network Design" title={design.heading} />
          <div className="mt-8 max-w-3xl space-y-5">
            {design.paragraphs.map((p, i) => (
              <p key={i} className="text-text-secondary leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-10">
            <LightboxImage image={design.primary} featured className="w-full" />
            <div className="max-w-3xl mx-auto w-full">
              <LightboxImage image={design.secondary} />
            </div>
            <div className="max-w-3xl border border-border bg-surface rounded-2xl p-5 flex gap-4 items-start">
              <span className="mt-0.5 text-accent font-mono text-xs shrink-0">i</span>
              <p className="text-text-secondary text-sm leading-relaxed">{design.disclaimer}</p>
            </div>
          </div>
        </section>

        {/* ── 4. Management application ──────────────────────────── */}
        <section id="application" className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="04 / Management Application" title={app.heading} />
          <div className="mt-8 max-w-3xl space-y-5">
            {app.paragraphs.map((p, i) => (
              <p key={i} className="text-text-secondary leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 items-start">
            <ul className="space-y-3 order-2 md:order-1">
              {app.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                  <span className="w-2 h-2 rounded-sm bg-accent/70 mt-1.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="order-1 md:order-2">
              <LightboxImage image={app.primary} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {app.gallery.slice(0, 2).map((img) => (
              <LightboxImage key={img.src} image={img} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {app.gallery.slice(2).map((img) => (
              <LightboxImage key={img.src} image={img} />
            ))}
          </div>
        </section>

        {/* ── 5. Role ────────────────────────────────────────────── */}
        <section className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="05 / Responsibility" title={featured.role.heading} />
          <p className="mt-8 max-w-3xl text-lg text-text-primary/90 leading-relaxed border-l-2 border-accent/60 pl-6">
            {featured.role.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mt-10">
            {featured.role.areas.map((area, i) => (
              <div
                key={area.title}
                className={`p-7 bg-surface border border-border rounded-3xl hover:border-accent/40 transition-colors duration-300 ${
                  i === featured.role.areas.length - 1 ? "sm:last:col-span-2 lg:last:col-span-1" : ""
                }`}
              >
                <h3 className="text-lg font-bold mb-2.5">{area.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed opacity-90">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. Takeaways ───────────────────────────────────────── */}
        <section className={`${SECTION_SPACING} scroll-mt-28`}>
          <SectionHeading eyebrow="06 / Key Takeaways" title="What the Project Left Behind" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 mt-10">
            {featured.takeaways.map((takeaway, i) => (
              <div key={takeaway.title} className="p-7 bg-surface border border-border rounded-3xl">
                <span className="text-xs font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-base font-bold mt-3 mb-2.5 leading-snug">{takeaway.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed opacity-90">{takeaway.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. Closing ─────────────────────────────────────────── */}
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
