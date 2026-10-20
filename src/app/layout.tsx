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
  title: "Omar Qasim | Penetration Tester",
  description: "Professional Portfolio of Omar Qasim, a Penetration Tester and Computer Science Graduate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-text-primary">
        <Suspense fallback={<div className="h-16" />}>
          <Navbar />
        </Suspense>
        <main>{children}</main>
        <BackToTop />
      </body>
    </html>
  );
}
