import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import "./globals.css";
import { Suspense } from "react";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://resume-two-sooty-55.vercel.app"),
  title: {
    default: "Omar Qasim | Penetration Tester",
    template: "%s | Omar Qasim",
  },
  description:
    "Professional Portfolio of Omar Qasim, a Penetration Tester and Computer Science Graduate.",
  authors: [{ name: "Omar Qasim" }],
  keywords: [
    "Omar Qasim",
    "Omar Qasim portfolio",
    "penetration tester",
    "security researcher",
    "cybersecurity",
    "penetration testing",
    "vulnerability assessment",
    "network engineering",
    "CTF",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://resume-two-sooty-55.vercel.app",
    siteName: "Omar Qasim",
    title: "Omar Qasim | Penetration Tester",
    description:
      "Professional Portfolio of Omar Qasim, a Penetration Tester and Computer Science Graduate.",
    images: [
      {
        url: "/profile.jpg",
        width: 1024,
        height: 1280,
        alt: "Omar Qasim",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Qasim | Penetration Tester",
    description:
      "Professional Portfolio of Omar Qasim, a Penetration Tester and Computer Science Graduate.",
    images: ["/profile.jpg"],
  },
};

/* Break-out-proof serialization: escapes </script>, &, and U+2028/2029 so
   even if schema data ever becomes dynamic it cannot escape the script tag. */
const safeJsonLd = (value: object): string =>
  JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

/* Structured data: tells Google this site is the identity page for Omar Qasim */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Omar Qasim",
  jobTitle: "Penetration Tester",
  description:
    "Penetration Tester and Security Researcher; Computer Science graduate with documented network-infrastructure and application projects.",
  url: "https://resume-two-sooty-55.vercel.app",
  image: "https://resume-two-sooty-55.vercel.app/profile.jpg",
  knowsAbout: [
    "Penetration Testing",
    "Vulnerability Assessment",
    "Network Security",
    "Network Engineering",
    "Web Application Security",
  ],
  sameAs: ["https://github.com/Githubawy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-text-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(personJsonLd) }}
        />
        <Suspense fallback={<div className="h-16" />}>
          <Navbar />
        </Suspense>
        <main>{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
