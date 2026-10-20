import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { CERTIFICATIONS, getCertification } from "@/lib/certifications";
import CertificateImage from "@/components/CertificateImage";

/* Dynamic detail route: allow blocking render of awaited params (Next 16) */
export const instant = false;

export default async function CertPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cert = getCertification(slug);

  if (!cert) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <Link
          href="/#education"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm font-mono mb-10"
        >
          <ArrowLeft size={14} />
          Back to portfolio
        </Link>

        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white">
            <SealCheck size={26} weight="duotone" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">{cert.name}</h1>
            <p className="text-text-secondary">{cert.issuer} • {cert.year}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-xl font-bold mb-4 text-accent">About this Certification</h2>
              <p className="text-text-secondary leading-relaxed">{cert.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4 text-accent">Key Competencies</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cert.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {detail}
                  </li>
                ))}
              </ul>
            </section>

            {cert.extra && (
              <section>
                <h2 className="text-xl font-bold mb-4 text-accent">Track Information</h2>
                <dl className="space-y-2">
                  {Object.entries(cert.extra).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-xs border-b border-border pb-2">
                      <dt className="text-text-secondary">{key}:</dt>
                      <dd className="font-mono text-text-primary">{value}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-surface border border-border p-6 rounded-3xl h-fit lg:sticky lg:top-32">
              <h3 className="text-lg font-bold mb-4">Certification Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Status:</span>
                  <span className="text-emerald-500 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Completed
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Issued:</span>
                  <span className="text-text-primary">{cert.year}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Issuer:</span>
                  <span className="text-text-primary text-right">{cert.issuer}</span>
                </div>
              </div>
            </div>

            {/* Certificate document preview (auto-renders once the image is in /public) */}
            <CertificateImage src={cert.image} alt={cert.name} />
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-8 pb-16">
          <h3 className="text-sm font-mono text-text-secondary uppercase tracking-[0.3em] mb-5">
            Other certifications
          </h3>
          <div className="flex flex-wrap gap-3">
            {CERTIFICATIONS.filter((c) => c.slug !== cert.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/certifications/${c.slug}`}
                className="text-sm px-4 py-2 rounded-xl bg-surface border border-border text-text-secondary hover:text-accent hover:border-accent/40 transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
