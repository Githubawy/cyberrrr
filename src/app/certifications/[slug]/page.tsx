"use client";

import React from "react";
import { notFound } from "next/navigation";

const CERT_DATA: Record<string, any> = {
  "vulnerability-analyst-pentesting": {
    name: "Vulnerability Analyst & Pentesting Professional Course",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    year: "2026",
    description: "A comprehensive professional course focusing on advanced vulnerability assessment and penetration testing methodologies.",
    details: [
      "Network reconnaissance and enumeration",
      "Web application security testing",
      "Privilege escalation techniques",
      "Professional reporting and documentation",
    ],
  },
  "hcia-security": {
    name: "HCIA-Security — Huawei",
    issuer: "Huawei",
    year: "2025",
    description: "Huawei Certified ICT Associate in Security, covering network security fundamentals and security product deployment.",
    details: [
      "Firewall configuration and management",
      "VPN technologies (IPsec, SSL)",
      "Intrusion Prevention Systems (IPS)",
      "Security policy orchestration",
    ],
  },
  "cybersecurity-beginners": {
    name: "Cybersecurity for Beginners Path Certificate",
    issuer: "MaharaTech, ITI",
    year: "2024",
    description: "Foundational path in cybersecurity, covering the basics of security principles and defensive strategies.",
    details: [
      "Introduction to Cryptography",
      "Basic Network Security",
      "Identity and Access Management",
      "Introduction to Malware Analysis",
    ],
  },
};

export default function CertPage({ params }: { params: { slug: string } }) {
  const cert = CERT_DATA[params.slug];

  if (!cert) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-white">
            <span className="font-bold text-xl">CERT</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">{cert.name}</h1>
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
                {cert.details.map((detail: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-text-secondary text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {detail}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="bg-surface border border-border p-6 rounded-3xl h-fit sticky top-32">
            <h3 className="text-lg font-bold mb-4">Certification Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-xs">
                <span className="text-text-secondary">Status:</span>
                <span className="text-emerald-500 font-bold">Completed</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-text-secondary">Issued:</span>
                <span className="text-text-primary">{cert.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
