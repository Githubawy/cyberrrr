"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X } from "@phosphor-icons/react";
import type { CaseStudyMedia } from "@/lib/projects";

type Props = {
  image: CaseStudyMedia;
  priority?: boolean;
  /** Larger hover styling for flagship screenshots */
  featured?: boolean;
  className?: string;
};

export default function LightboxImage({ image, priority = false, featured = false, className = "" }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <figure className={className}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Enlarge image: ${image.alt}`}
          title="Click to enlarge"
          className={`group block w-full overflow-hidden rounded-2xl border border-border bg-surface cursor-zoom-in transition-colors duration-300 hover:border-accent/40 focus-visible:outline-2 focus-visible:outline-accent ${
            featured ? "shadow-[0_30px_80px_rgba(0,0,0,0.35)]" : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1100px"
            className={`w-full h-auto transition-transform duration-500 group-hover:scale-[1.015] ${
              featured ? "bg-white" : ""
            }`}
          />
        </button>
        {image.caption ? (
          <figcaption className="mt-3 text-xs font-mono text-text-secondary leading-relaxed">
            {image.caption}
          </figcaption>
        ) : null}
      </figure>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={image.alt}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          >
            <div
              className="relative flex items-center justify-center max-w-[1400px] max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority
                className="max-h-[85vh] w-auto h-auto object-contain rounded-xl border border-border bg-surface"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close enlarged image"
                className="absolute top-2 right-2 rounded-full bg-background/80 border border-border p-2 text-text-secondary hover:text-accent transition-colors"
              >
                <X size={18} weight="bold" />
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
