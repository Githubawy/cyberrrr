import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { CERTIFICATIONS } from "@/lib/certifications";

const SITE_URL = "https://resume-two-sooty-55.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...PROJECTS.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...CERTIFICATIONS.map((cert) => ({
      url: `${SITE_URL}/certifications/${cert.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
