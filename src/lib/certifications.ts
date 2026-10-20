export type Certification = {
  slug: string;
  name: string;
  issuer: string;
  year: string;
  /// Path to the certificate image inside /public
  image: string;
  description: string;
  details: string[];
  extra?: Record<string, string>;
};

export const CERTIFICATIONS: Certification[] = [
  {
    slug: "vulnerability-analyst-pentesting",
    name: "Vulnerability Analyst & Pentesting Professional Course",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    year: "2026",
    image: "/certifications/vulnerability-analyst-pentesting.jpg",
    description:
      "A comprehensive professional program sponsored by the Egyptian Ministry of Communications and Information Technology, focusing on advanced vulnerability assessment and penetration testing methodologies across infrastructure and security domains.",
    details: [
      "Network reconnaissance and enumeration",
      "Web application security testing",
      "Privilege escalation techniques",
      "Professional reporting and documentation",
    ],
  },
  {
    slug: "hcia-security",
    name: "HCIA-Security — Huawei",
    issuer: "Huawei",
    year: "2025",
    image: "/certifications/hcia-security.jpg",
    description:
      "Huawei Certified ICT Associate in Security, covering network security fundamentals, threat awareness, and security product deployment. Completed with a passing grade in the HCIA-Security V4.0 course via Huawei Talent Online.",
    details: [
      "Firewall configuration and management",
      "VPN technologies (IPsec, SSL)",
      "Intrusion Prevention Systems (IPS)",
      "Security policy orchestration",
    ],
  },
  {
    slug: "cybersecurity-beginners",
    name: "Cybersecurity for Beginners Path Certificate",
    issuer: "MaharaTech, ITI",
    year: "2024",
    image: "/certifications/cybersecurity-beginners.jpg",
    description:
      "A 35-hour foundational track by the Egyptian Information Technology Institute (ITI), delivered on the MaharaTech platform in partnership with VMware. Covers the basics of security principles and defensive strategies across 8 courses.",
    details: [
      "Introduction to Cryptography",
      "Basic Network Security",
      "Identity and Access Management",
      "Introduction to Malware Analysis",
    ],
    extra: {
      "Track duration": "35 hours",
      "Courses completed": "8",
      "Verification code": "pIYJjuwlHS",
    },
  },
];

export function getCertification(slug: string) {
  return CERTIFICATIONS.find((cert) => cert.slug === slug);
}
