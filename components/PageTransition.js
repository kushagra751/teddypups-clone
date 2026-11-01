"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// A brief full-screen "walking mascot" loading overlay shown between page
// navigations, matching the diamond-background transition on the reference
// site. Skipped on the very first page load so it doesn't delay first paint.
export default function PageTransition() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    setShow(true);
    const t = setTimeout(() => setShow(false), 850);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!show) return null;

  return (
    <div
      className="diamond-bg fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
      role="status"
      aria-live="polite"
    >
      <span className="relative h-16 w-64 max-w-[70vw] overflow-hidden" aria-hidden="true">
        <span className="loader-walk absolute top-0 text-5xl">🧸</span>
      </span>
      <p className="mt-3 font-hand text-2xl text-terracotta">every puppy is family</p>
      <span className="sr-only">Loading…</span>
    </div>
  );
}
