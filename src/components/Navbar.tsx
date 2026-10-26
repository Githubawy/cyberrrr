"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const isHomePage = pathname === "/";

    if (isHomePage) {
      const target = document.querySelector(href);
      if (target) {
        const offset = scrolled ? 64 : 96;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "auto",
        });
      }
    } else {
      // FORCE a hard navigation to the homepage with the hash
      // This resets the route and allows the Home page useEffect to handle the jump
      window.location.href = `/${href}`;
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
      scrolled ? "h-16 bg-background/80 backdrop-blur-md border-b border-border" : "h-24 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter group flex items-center gap-3"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent/50 flex-shrink-0 transition-transform group-hover:scale-110">
            <Image
              src="/profile.jpg"
              alt="Omar Qasim logo"
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </div>
          <span className="relative">Omar Qasim</span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className="text-xs font-bold uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, "#contact")}
            className="px-5 py-2 bg-accent text-white text-xs font-bold rounded-full hover:bg-opacity-90 transition-all active:scale-95 shadow-[0_0_20px_rgba(46,91,255,0.3)]"
          >
            Get in Touch
          </a>
        </div>

        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Scroll progress line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-accent/40 via-accent to-accent"
        style={{ scaleX: progress }}
      />

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <>
            {/* Dimmed backdrop — tap to close */}
            <motion.button
              key="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden cursor-default"
            />

            {/* Full-height menu panel — portaled to <body> so position:fixed
                resolves against the viewport, NOT the nav (whose
                backdrop-blur-md turns it into a containing block and
                collapses the panel once scrolled) */}
            <motion.div
              key="menu-panel"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-background md:hidden overflow-y-auto"
            >
              <div className="px-8 pt-8 pb-8 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      setIsOpen(false);
                      handleNavigation(e, link.href);
                    }}
                    className="text-xl font-bold text-text-secondary hover:text-text-primary active:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={(e) => {
                    setIsOpen(false);
                    handleNavigation(e, "#contact");
                  }}
                  className="mt-4 px-8 py-4 bg-accent text-white text-sm font-bold rounded-full text-center shadow-[0_0_30px_rgba(46,91,255,0.4)]"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </>,
          document.body
        )}
    </nav>
  );
}
