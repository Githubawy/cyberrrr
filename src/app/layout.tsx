import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Suspense } from "react";

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
    <html lang="en">
      <body className="bg-background text-text-primary">
        <Suspense fallback={<div className="h-16" />}>
          <Navbar />
        </Suspense>
        <main>{children}</main>
      </body>
    </html>
  );
}
