"use client";

import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, GraduationCap, SealCheck, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";
import { CERTIFICATIONS } from "@/lib/certifications";
import SectionTitle from "@/components/SectionTitle";

const EXPERIENCE = [
  {
    title: "Information Technology Security Specialist",
    company: "Emperial EG",
    location: "Nasr City",
    date: "July 2026 – Present",
    description: [
      "Monitor and investigate security alerts using SIEM tools and Wazuh to detect suspicious activities, potential threats, and ongoing attacks.",
      "Analyze security logs and event data to investigate malicious activity, identify attack patterns, and determine potential security impact.",
      "Perform initial incident response and threat containment by blocking malicious IP addresses through Sophos Firewall and restricting malicious network traffic.",
      "Monitor and analyze cPanel mail server logs to investigate suspicious email activity, detect potential abuse, and identify mail-related security incidents.",
      "Investigate phishing emails and suspicious indicators to assess threats and support appropriate security response actions.",
      "Review Sophos Firewall events and network traffic indicators to identify suspicious connections and potential security violations.",
      "Document security investigations, response actions, and findings in ticketing systems to maintain incident records and support follow-up investigations.",
      "Escalate complex or unresolved security incidents according to established incident-handling procedures.",
    ],
  },
  {
    title: "Information Technology Specialist",
    company: "Farid Habib Hospital",
    location: "El Obour, Al Qalyubiyah, Egypt",
    date: "June 2025 – July 2026",
    description: [
      "Delivered first- and second-level technical support to internal users — reducing helpdesk tickets by standardizing troubleshooting procedures for hardware, software, and network issues across the hospital environment.",
      "Supported core IT infrastructure including LAN, Windows Server 2022, and Active Directory DS — enforcing GPO-based security policies across segmented OUs and ensuring system integrity for 100+ domain users.",
      "Maintained LAN uptime by monitoring and troubleshooting DNS, DHCP, firewall rules, and NAT — proactively identifying and resolving network issues before they impacted business operations.",
      "Contributed to IT operations efficiency by scripting bulk user provisioning and configuration tasks in PowerShell.",
      "Assisted in IT operations and disaster recovery planning by implementing structured backup schedules — daily incremental and weekly full backups via Windows Server Backup — with quarterly tested recovery procedures and full technical documentation.",
      "Created detailed technical documentation for incident resolution, system configurations, and IT procedures — monitoring Windows Event Logs (4624, 4625, 4720, 7045) and building a knowledge base.",
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

const CERTS = CERTIFICATIONS;


export default function Experience() {
  return (
    <div className="space-y-32">
      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-transparent relative">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Professional Path" first={"Experience &"} second="Work History" />

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

                {Array.isArray(job.description) ? (
                  <ul className="space-y-3">
                    {job.description.map((bullet: string, j: number) => (
                      <li key={j} className="text-text-secondary text-sm leading-relaxed flex gap-3">
                        <span className="text-accent mt-1.5" style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'currentColor', flexShrink: 0 }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {job.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs Section */}
      <section id="education" className="py-24 px-6 bg-transparent relative z-10 -mt-32 lg:-mt-52">
        <div className="max-w-5xl mx-auto">
          <SectionTitle eyebrow="Academic Foundation" first={"Education &"} second="Certifications" className="mb-12" />

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
                {CERTS.map((cert, i) => (
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
