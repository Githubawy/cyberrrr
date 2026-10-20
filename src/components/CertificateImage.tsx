"use client";

import React, { useEffect, useRef, useState } from "react";
import { Certificate } from "@phosphor-icons/react/dist/ssr";

export default function CertificateImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  /* The 404 can fire before hydration, so the onError listener is missed —
     also check naturalWidth on mount to catch that race. */
  useEffect(() => {
    imgRef.current?.addEventListener("error", () => setFailed(true));
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth === 0) {
      setFailed(true);
    }
  }, [src]);

  return (
    <div className="rounded-3xl border border-border bg-surface overflow-hidden">
      {failed ? (
        <div className="flex flex-col items-center justify-center text-center gap-3 p-10 text-text-secondary">
          <Certificate size={28} className="text-accent" />
          <p className="text-xs font-mono uppercase tracking-[0.25em]">
            Certificate document
          </p>
          <p className="text-xs opacity-70">Scan available soon.</p>
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="w-full h-auto bg-white/5"
          loading="lazy"
        />
      )}
    </div>
  );
}
