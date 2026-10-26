import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Stack, Target, Wrench, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { getProject, PROJECTS, FEATURED_CASE_STUDIES } from "@/lib/projects";
import FacultyCaseStudy from "@/components/FacultyCaseStudy";

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
    <div className="min-h-screen pt-32 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm font-mono mb-10"
        >
          <ArrowLeft size={14} />
          Back to portfolio
        </Link>

        <div className="mb-10">
          <span className="text-accent font-mono text-xs uppercase tracking-[0.4em]">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mt-3 mb-5">{project.title}</h1>
          <p className="text-text-secondary max-w-2xl leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 bg-surface border border-border rounded text-text-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-14 max-w-3xl">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Target size={20} className="text-accent" />
              <h2 className="text-2xl font-bold tracking-tight">Objective</h2>
            </div>
            <p className="text-text-secondary leading-relaxed">{cs.objective}</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Stack size={20} className="text-accent" />
              <h2 className="text-2xl font-bold tracking-tight">Architecture & Environment</h2>
            </div>
            <ul className="space-y-3">
              {cs.architecture.map((item, i) => (
                <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                  <span className="w-2 h-2 rounded-sm bg-accent/70 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Wrench size={20} className="text-accent" />
              <h2 className="text-2xl font-bold tracking-tight">Contribution & Methodology</h2>
            </div>
            <ol className="space-y-3">
              {cs.methodology.map((item, i) => (
                <li key={i} className="flex gap-4 text-text-secondary text-sm leading-relaxed">
                  <span
                    className="font-mono text-xs text-accent mt-1 flex-shrink-0"
                    style={{ minWidth: "1.5em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </section>

          <section className="border border-border bg-surface rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <SealCheck size={20} className="text-accent" />
              <h2 className="text-2xl font-bold tracking-tight">Outcome</h2>
            </div>
            <p className="text-text-secondary leading-relaxed">{cs.outcome}</p>
          </section>
        </div>

        <div className="mt-20 border-t border-border pt-8 pb-16">
          <h3 className="text-sm font-mono text-text-secondary uppercase tracking-[0.3em] mb-5">
            Other projects
          </h3>
          <div className="flex flex-wrap gap-3">
            {PROJECTS.filter((p) => p.slug !== project.slug).map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="text-sm px-4 py-2 rounded-xl bg-surface border border-border text-text-secondary hover:text-accent hover:border-accent/40 transition-colors"
              >
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
