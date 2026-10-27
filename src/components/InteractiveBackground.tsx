"use client";

import React, { useRef, useEffect } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* Adaptive settings: the desktop look is unchanged; mobile gets a
       lighter, cheaper variant that keeps the same vibe without the
       frame drops caused by the O(n²) line pass on small screens. */
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches;

    const COUNT = isMobile ? 26 : 80;
    const LINK_DIST = isMobile ? 110 : 150;
    const SPEED = isMobile ? 0.25 : 0.5;
    const LINE_ALPHA = isMobile ? 0.45 : 1.0;

    let animationFrameId = 0;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * SPEED;
        this.vy = (Math.random() - 0.5) * SPEED;
        this.size = Math.random() * (isMobile ? 1.6 : 2) + 1;
      }

      update(canvas: HTMLCanvasElement) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          this.x -= dx * 0.01;
          this.y -= dy * 0.01;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(46, 91, 255, 0.3)";
        ctx.fill();
      }
    }

    const drawLinks = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p = particles[i];
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(46, 91, 255, ${
              (1 - dist / LINK_DIST) * LINE_ALPHA
            })`;
            ctx.lineWidth = isMobile ? 0.4 : 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const drawFrame = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update(canvas);
        p.draw();
      });
      drawLinks();
    };

    const animate = () => {
      drawFrame();
      animationFrameId = requestAnimationFrame(animate);
    };

    const buildParticles = () => {
      particles = Array.from({ length: COUNT }, () => new Particle(canvas));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      buildParticles();
    };

    const handleResizeDebounced = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    /* Save battery / prevent scroll stutter: stop the loop when the tab is hidden */
    const handleVisibility = () => {
      cancelAnimationFrame(animationFrameId);
      if (!document.hidden) animate();
    };

    window.addEventListener("resize", handleResizeDebounced);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("visibilitychange", handleVisibility);

    resize();
    animate();

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResizeDebounced);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-50"
      style={{ background: "transparent" }}
    />
  );
}
