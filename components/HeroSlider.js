"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Img from "@/components/Img";
import { media, PUPPIES, puppyTitle } from "@/lib/data";

const SLIDES = PUPPIES.slice(0, 6);

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % SLIDES.length), 3800);
    return () => clearInterval(t);
  }, [paused]);

  const current = SLIDES[i];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Link
        href={`/puppies/${current.slug}`}
        className="relative block aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-peach shadow-card"
        aria-label={`Meet ${puppyTitle(current)}`}
      >
        {SLIDES.map((p, idx) => (
          <Img
            key={p.slug}
            src={media(p.images[0], 1080)}
            alt={`${puppyTitle(p)}, ${p.gender} ${p.breed} puppy`}
            priority={idx === 0}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 font-display text-sm font-bold">
          {puppyTitle(current)}
        </span>
      </Link>

      <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Choose puppy photo">
        {SLIDES.map((p, idx) => (
          <button
            key={p.slug}
            type="button"
            role="tab"
            aria-selected={idx === i}
            aria-label={`Show ${puppyTitle(p)}`}
            onClick={() => setI(idx)}
            className={`h-2.5 rounded-full transition-all ${idx === i ? "w-8 bg-ink" : "w-2.5 bg-cocoa/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
