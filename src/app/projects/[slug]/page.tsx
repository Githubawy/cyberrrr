import React from "react";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // This is a placeholder since we are building the structure first.
  // In a real scenario, we would fetch project data by slug.
  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Project Case Study</h1>
        <p className="text-text-secondary">Details for project: {params.slug}</p>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-accent">Objective</h2>
            <p className="text-text-secondary">[PLACEHOLDER: Objectives will be provided by user]</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-accent">Architecture / Environment</h2>
            <p className="text-text-secondary">[PLACEHOLDER: Environment details will be provided by user]</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-accent">Contribution & Methodology</h2>
            <p className="text-text-secondary">[PLACEHOLDER: Detailed methodology will be provided by user]</p>
          </section>
        </div>
      </div>
    </div>
  );
}
