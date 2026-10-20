"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, ShieldWarning, CheckCircle, Info, ArrowRight, ArrowLeft, ShieldCheck } from "@phosphor-icons/react";
import SectionTitle from "@/components/SectionTitle";

type Step = {
  id: string;
  title: string;
  description: string;
  command: string;
  output: string;
  findings: string[];
};

const LAB_STEPS: Step[] = [
  {
    id: "recon",
    title: "Reconnaissance",
    description: "Gathering initial intelligence on the target environment.",
    command: "nmap -sC -sV -oN initial_scan.txt 10.10.1.15",
    output: "PORT     STATE SERVICE VERSION\n22/tcp  open  ssh     OpenSSH 8.2p1\n80/tcp   open  http    Apache httpd 2.4.41\n443/tcp  open  https   Apache httpd 2.4.41",
    findings: ["Open SSH port found", "Web server running Apache 2.4.41"],
  },
  {
    id: "enum",
    title: "Enumeration",
    description: "Deep dive into the web server to find hidden directories and files.",
    command: "gobuster dir -u http://10.10.1.15 -w /usr/share/wordlists/dirb/common.txt",
    output: "Discovering directories...\n/admin/ - 301\n/config/ - 403\n/uploads/ - 200\n/backup.sql - 200",
    findings: ["Found /admin panel", "Exposed backup.sql file"],
  },
  {
    id: "vuln",
    title: "Vulnerability Assessment",
    description: "Analyzing findings to identify exploitable vulnerabilities.",
    command: "sqlmap -u 'http://10.10.1.15/admin?id=1' --dbs",
    output: "Testing for SQL injection...\n[+] Parameter 'id' is vulnerable to UNION-based SQLi\nDatabase: security_db",
    findings: ["SQL Injection vulnerability in /admin"],
  },
  {
    id: "exploit",
    title: "Exploitation",
    description: "Gaining unauthorized access to the system via identified vulnerability.",
    command: "sqlmap -u 'http://10.10.1.15/admin?id=1' --os-shell",
    output: "Executing exploit...\n[+] Shell established\nsh-4.4# whoami\nroot",
    findings: ["Root access obtained via SQLi"],
  },
];

export default function SecurityLab() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [typedLen, setTypedLen] = useState(0);
  const step = LAB_STEPS[currentStep];
  const command = isComplete ? "" : step.command;

  useEffect(() => {
    setTypedLen(0);
    if (isComplete) return;
    const id = setInterval(() => {
      setTypedLen((n) => {
        if (n >= command.length) {
          clearInterval(id);
          return command.length;
        }
        return n + 1;
      });
    }, 24);
    return () => clearInterval(id);
  }, [currentStep, isComplete]);

  const typedCommand = command.slice(0, typedLen);
  const isTyping = typedLen < command.length;

  const nextStep = () => {
    if (isTyping) {
      setTypedLen(command.length);
      return;
    }
    if (currentStep < LAB_STEPS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const resetLab = () => {
    setCurrentStep(0);
    setIsComplete(false);
  };

  return (
    <section id="lab" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle
          eyebrow="Interactive Demo"
          first={"The Lab"}
          second="Simulation"
          description="Experience a simplified penetration testing workflow. This demonstration uses simulated data to showcase the reconnaissance, enumeration, and exploitation process."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Step Navigator */}
          <div className="flex flex-col gap-4">
            {LAB_STEPS.map((step, i) => (
              <div
                key={step.id}
                onClick={() => setCurrentStep(i)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  currentStep === i
                    ? "bg-accent/10 border-accent text-white"
                    : "bg-surface border-border text-text-secondary hover:border-accent/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    currentStep === i ? "bg-accent text-white" : "bg-border text-text-secondary"
                  }`}>
                    {i + 1}
                  </span>
                  <span className="font-bold">{step.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Terminal Interface */}
          <div className="lg:col-span-2">
            <div className="bg-[#0c0c0e] rounded-3xl border border-border overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-surface px-4 py-3 border-b border-border flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-mono text-text-secondary uppercase tracking-widest">
                  root@security-lab: ~
                </div>
                <div className="w-10" />
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm min-h-[400px] flex flex-col gap-4">
                <AnimatePresence mode="wait">
                  {!isComplete ? (
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-6"
                    >
                      <div className="flex gap-2 items-center">
                        <span className="text-emerald-500 flex-shrink-0">guest@lab:~$</span>
                        <span className="text-text-primary">
                          {typedCommand}
                          {!isTyping ? null : (
                            <span className="inline-block w-2 h-[1.1em] bg-accent ml-0.5 align-middle animate-pulse" />
                          )}
                        </span>
                      </div>

                      <AnimatePresence>
                        {!isTyping ? (
                          <motion.div
                            key={`out-${currentStep}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-black/40 p-4 rounded-lg border border-border text-text-secondary leading-relaxed"
                          >
                            {step.output.split("\n").map((line, j) => (
                              <motion.div
                                key={j}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: j * 0.12, duration: 0.25 }}
                                className="whitespace-pre-wrap"
                              >
                                {line}
                              </motion.div>
                            ))}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>

                      <div className={`flex flex-col gap-3 transition-opacity duration-500 ${isTyping ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                        <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-tighter">
                          <ShieldWarning size={14} />
                          Key Findings:
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {step.findings.map((f, i) => (
                            <div key={i} className="flex items-center gap-2 text-text-secondary text-xs">
                              <CheckCircle size={14} className="text-emerald-500" />
                              {f}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center h-full py-12 text-center"
                    >
                      <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                        <ShieldCheck size={40} className="text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Assessment Complete</h3>
                      <p className="text-text-secondary mb-8 max-w-md">
                        You have successfully navigated the full attack lifecycle from reconnaissance to root access.
                      </p>
                      <button
                        onClick={resetLab}
                        className="px-6 py-2 bg-surface border border-border rounded-full text-xs font-bold hover:bg-accent hover:text-white transition-all flex items-center gap-2"
                      >
                        <ArrowLeft size={14} />
                        Restart Simulation
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Terminal Footer */}
              <div className="p-4 bg-surface/50 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-mono text-text-secondary">
                  <Info size={12} />
                  <span>Simulated Environment - No real targets scanned.</span>
                </div>
                {!isComplete && (
                  <button
                    onClick={nextStep}
                    className="px-4 py-2 bg-accent text-white text-xs font-bold rounded-lg hover:bg-opacity-90 transition-all active:scale-95 flex items-center gap-2"
                  >
                    Next Step
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
