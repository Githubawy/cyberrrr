"use client";

import { motion } from "motion/react";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import SecurityLab from "@/components/SecurityLab";
import Experience from "@/components/Experience";
import InteractiveBackground from "@/components/InteractiveBackground";
import { ArrowUpRight } from "@phosphor-icons/react";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <Hero />

      <section id="about" className="py-24 px-6 relative z-10 bg-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-text-primary">About Me</h2>
            <p className="text-text-secondary leading-relaxed">
              I'm a Computer Science graduate focused on penetration testing, web application security, and network security. I approach security as a practical problem-solving process: understanding how systems work, identifying weaknesses, validating potential risks in controlled environments, and documenting findings clearly. I'm continuously developing my hands-on skills through security labs, technical projects, and structured experimentation.
            </p>
          </motion.div>
        </div>
      </section>

      <Expertise />
      <Projects />
      <SecurityLab />
      <Experience />

      <section id="contact" className="py-32 px-6 bg-transparent border-t border-border text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Let's Connect</h2>
          <p className="text-text-secondary mb-12 text-lg">
            Looking for a security assessment or a dedicated penetration tester for your project?
          </p>
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:phillokahrba@gmail.com"
                className="px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-opacity-90 transition-all active:scale-95 shadow-lg"
              >
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/omarqasim/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-surface border border-border text-white font-bold rounded-full hover:bg-surface/80 transition-all active:scale-95"
              >
                LinkedIn
              </a>
            </div>

            {/* Freelance Profiles Grid */}
            <div className="flex flex-wrap justify-center gap-4 w-full max-w-2xl">
              {[
                { name: "Upwork", url: "https://www.upwork.com/freelancers/~01fc5c0390db831dd6?mp_source=share" },
                { name: "Fiverr", url: "https://pro.fiverr.com/s/mmmdVL9" },
                { name: "Contra", url: "https://contra.com/omar_qasim_ggsaxbpv?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=omar_qasim_ggsaxbpv" },
                { name: "Freelancer", url: "https://www.freelancer.com/u/omarqasim55?frm=omarqasim55&sb=t" },
                { name: "HackerOne", url: "https://hackerone.com/phill0?type=user" },
                { name: "Bugcrowd", url: "https://bugcrowd.com/h/phill0" },
                { name: "YesWeHack", url: "https://yeswehack.com/hunters/OmarQasim" },
                { name: "Intigriti", url: "https://app.intigriti.com/researcher/profile/omarqasim" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 bg-surface border border-border rounded-2xl text-sm font-medium text-text-secondary hover:text-text-primary hover:border-accent/50 transition-all flex items-center justify-center gap-3 group min-w-[160px] text-center"
                >
                  <span className="flex-1 text-center">{platform.name}</span>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border bg-background text-center">
        <p className="text-text-secondary text-xs font-mono tracking-widest uppercase">
          © 2026 Omar Qasim — Secure by Design
        </p>
      </footer>
    </>
  );
}
