"use client";

import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, GraduationCap, SealCheck, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

const EXPERIENCE = [
  {
    title: "SOC Analyst",
    company: "Emperial Construction",
    location: "Cairo, Egypt",
    date: "August 2026 – Present",
    // Responsibilities marked for review as per brief
    description: "Responsibilities for this role are currently under review for verification.",
    isProposed: true,
  },
  {
    title: "IT Specialist",
    company: "Obour Hospital",
    location: "Cairo, Egypt",
    date: "September 2024 – July 2026",
    description: [
      "Delivered first- and second-level technical support to internal users, troubleshooting hardware, software, and network connectivity issues across the hospital environment.",
      "Supported core IT infrastructure, including LAN, Windows Server 2022, and Active Directory Domain Services, and applied Group Policy security settings across organizational units.",
      "Monitored and troubleshot DNS, DHCP, firewall rules, and NAT to maintain reliable network operations and resolve connectivity issues.",
      "Used PowerShell to automate bulk user provisioning and routine configuration tasks.",
      "Supported IT operations and disaster recovery planning through structured backup schedules using Windows Server Backup, with recovery procedures and technical documentation.",
      "Documented incident resolution procedures, system configurations, and IT operations. Reviewed Windows Event Logs, including event IDs 4624, 4625, 4720, and 7045, to support troubleshooting and security monitoring.",
    ],
  },
  {
    title: "Software Developer",
    company: "ECCM",
    location: "Cairo, Egypt",
    date: "January 2025 – June 2025",
    description: [
      "Developed a Python, Flask, and SQLite cashier management system for a children's entertainment venue, supporting billing workflows and session tracking over a local network.",
      "Developed a PHP and MySQL restaurant website backend with an administrative panel, dynamic menu rendering, and Arabic-language content support.",
      "Managed project activities including requirements gathering, database schema design, local deployment using XAMPP, and post-deployment support.",
    ],
  },
  {
    title: "IT Intern",
    company: "El-Raya",
    location: "Cairo, Egypt",
    date: "2024",
    description: [
      "Assisted with hardware, software, and network troubleshooting, Active Directory user management, Windows Server administration, and LAN switching.",
      "Supported DHCP scope configuration and switch VLAN configuration to help address IP conflicts and network connectivity issues.",
      "Documented recurring technical issues and troubleshooting procedures in a shared knowledge base.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Computer Science Degree",
    institution: "Benha University",
    year: "2026",
  },
];

const CERTIFICATIONS = [
  {
    slug: "vulnerability-analyst-pentesting",
    name: "Vulnerability Analyst & Pentesting Professional Course",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    year: "2026",
  },
  {
    slug: "hcia-security",
    name: "HCIA-Security — Huawei",
    issuer: "Huawei",
    year: "2025",
  },
  {
    slug: "cybersecurity-beginners",
    name: "Cybersecurity for Beginners Path Certificate",
    issuer: "MaharaTech, ITI",
    year: "2024",
  },
];

export default function Experience() {
  return (
    <div className="space-y-32">
      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-transparent relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-4 mb-16">
            <span className="text-accent font-mono text-xs uppercase tracking-[0.4em]">
              Professional Path
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
              Experience & <br />
              <span className="text-text-secondary">Work History</span>
            </h2>
          </div>

          <div className="relative border-l border-border ml-4 pl-8 space-y-12">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-accent shadow-[0_0_10px_rgba(46,91,255,0.5)]" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <p className="text-accent font-medium text-sm">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-4 text-text-secondary text-xs font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {job.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {job.location}
                    </span>
                  </div>
                </div>

                {job.isProposed ? (
                  <p className="text-text-secondary text-sm italic opacity-70">
                    {job.description}
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {job.description.map((bullet, j) => (
                      <li key={j} className="text-text-secondary text-sm leading-relaxed flex gap-3">
                        <span className="text-accent mt-1.5" style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor', flexShrink: 0 }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs Section */}
      <section id="education" className="py-24 px-6 bg-transparent relative z-10 -mt-52">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-4 mb-12">
            <span className="text-accent font-mono text-xs uppercase tracking-[0.4em]">
              Academic Foundation
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
              Education & <br />
              <span className="text-text-secondary">Certifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap size={24} className="text-accent" />
                <h2 className="text-2xl font-bold tracking-tight">Education</h2>
              </div>
              <div className="space-y-6">
                {EDUCATION.map((edu, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-surface border border-border">
                    <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
                    <p className="text-text-secondary text-sm mb-2">{edu.institution}</p>
                    <span className="text-xs font-mono text-accent uppercase tracking-widest">Graduation Year: {edu.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3 mb-8">
                <SealCheck size={24} className="text-accent" />
                <h2 className="text-2xl font-bold tracking-tight">Certifications</h2>
              </div>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <Link
                    key={i}
                    href={`/certifications/${cert.slug}`}
                    className="flex items-center justify-between p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:bg-surface/80 group"
                  >
                    <div className="flex flex-col">
                      <p className="text-sm font-bold group-hover:text-accent transition-colors">{cert.name}</p>
                      <p className="text-xs text-text-secondary">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-text-secondary">{cert.year}</span>
                      <ArrowUpRight size={14} className="text-text-secondary group-hover:text-accent transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
