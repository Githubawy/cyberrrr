import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

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
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
