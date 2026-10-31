"use client";

import { useState } from "react";
import Img from "@/components/Img";
import { media } from "@/lib/data";

// Photo gallery for a puppy page. The second image of a video puppy is a video poster.
export default function Gallery({ images, alt, hasVideo }) {
  const [i, setI] = useState(0);
  const count = images.length;
  const go = (n) => setI((n + count) % count);

  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-peach shadow-card">
        <Img src={media(images[i], 1080)} alt={`${alt}${count > 1 ? ` (photo ${i + 1})` : ""}`} priority className="h-full w-full object-cover" />
        {hasVideo && i === 1 && (
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-ink/80 text-3xl text-cream">▶</span>
          </span>
        )}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(i - 1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-bold"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(i + 1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl font-bold"
            >
              ›
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">
              {i + 1} / {count}
            </span>
          </>
        )}
      </div>

      {count > 1 && (
        <ul className="mt-3 flex gap-3">
          {images.map((src, idx) => (
            <li key={src}>
              <button
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Show photo ${idx + 1}`}
                aria-current={idx === i}
                className={`relative h-20 w-20 overflow-hidden rounded-2xl border-2 ${idx === i ? "border-ink" : "border-transparent opacity-70"}`}
              >
                <Img src={media(src, 384)} alt="" className="h-full w-full object-cover" />
                {hasVideo && idx === 1 && (
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/30 text-cream" aria-hidden="true">▶</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
