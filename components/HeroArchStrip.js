"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Img from "@/components/Img";
import { media, PUPPIES, puppyTitle } from "@/lib/data";
import Scallop from "@/components/Scallop";

// The row of arch-topped puppy photos under the hero buttons, with a
// teddy-bear mascot in the middle and a floating name chip above that
// rotates through the puppies (and follows hover/focus).
export default function HeroArchStrip() {
  const real = PUPPIES.slice(0, 6);
  const items = [...real.slice(0, 3), { mascot: true }, ...real.slice(3, 6)];

  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (hovering) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => setActive((n) => (n + 1) % real.length), 2200);
    return () => clearInterval(t);
  }, [hovering, real.length]);

  const puppy = real[active];
  const label = puppy.name ? `${puppy.name} · ${puppy.breed}` : `${puppy.breed} · ${puppy.gender}, ${puppy.age}`;

  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <span className="tag max-w-[88vw] truncate bg-paper text-cocoa sm:max-w-xs">{label}</span>
      </div>
      <ul className="mt-4 flex items-end justify-center gap-1.5 sm:gap-2.5">
        {items.map((it) =>
          it.mascot ? (
            <li key="mascot" className="-mt-5">
              <div
                aria-hidden="true"
                className="flex h-36 w-20 items-center justify-center rounded-t-full rounded-b-2xl border-2 border-ink bg-[#f0b26a] text-4xl shadow-pop sm:h-40 sm:w-24"
              >
                🧸
              </div>
            </li>
          ) : (
            <li key={it.slug}>
              <Link
                href={`/puppies/${it.slug}`}
                onMouseEnter={() => { setHovering(true); setActive(real.indexOf(it)); }}
                onFocus={() => { setHovering(true); setActive(real.indexOf(it)); }}
                onMouseLeave={() => setHovering(false)}
                onBlur={() => setHovering(false)}
                className="block h-28 w-16 overflow-hidden rounded-t-full rounded-b-2xl border-2 border-ink bg-peach shadow-pop transition hover:-translate-y-1 sm:h-32 sm:w-20"
              >
                <Img
                  src={media(it.images[0], 240)}
                  alt={`${puppyTitle(it)}, ${it.breed} puppy`}
                  className="h-full w-full object-cover"
                />
              </Link>
            </li>
          )
        )}
      </ul>
      <Scallop color="#fbf1e1" className="mx-auto -mt-px max-w-2xl" />
    </div>
  );
}
