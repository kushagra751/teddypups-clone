"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PuppyCard from "@/components/PuppyCard";
import { BREEDS, PUPPIES } from "@/lib/data";

const ORIGINS = [
  { key: "", label: "All puppies" },
  { key: "local", label: "In Dubai" },
  { key: "imported", label: "Imported" },
];

export default function PuppyBrowser() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const origin = params.get("origin") || "";
  const breed = params.get("breed") || "";

  const list = useMemo(() => {
    const match = BREEDS.find((b) => b.key === breed)?.match;
    return PUPPIES.filter((p) => {
      if (origin && p.origin !== origin) return false;
      if (match && !p.breed.toLowerCase().includes(match)) return false;
      return true;
    });
  }, [origin, breed]);

  function setParam(key, value) {
    const next = new URLSearchParams(params.toString());
    if (value) next.set(key, value);
    else next.delete(key);
    const qs = next.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }

  const chip = (active) =>
    `rounded-full border-2 px-4 py-2 text-sm font-bold transition ${
      active ? "border-ink bg-ink text-cream" : "border-cocoa/20 bg-white text-cocoa hover:border-apricot"
    }`;

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by origin">
          {ORIGINS.map((o) => (
            <button key={o.key} type="button" className={chip(origin === o.key)} onClick={() => setParam("origin", o.key)}>
              {o.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by breed">
          <button type="button" className={chip(!breed)} onClick={() => setParam("breed", "")}>
            Any breed
          </button>
          {BREEDS.map((b) => (
            <button key={b.key} type="button" className={chip(breed === b.key)} onClick={() => setParam("breed", b.key)}>
              {b.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm font-semibold text-cocoa" aria-live="polite">
        {list.length} {list.length === 1 ? "puppy" : "puppies"} looking for a family
      </p>

      {list.length === 0 ? (
        <div className="mt-8 rounded-3xl bg-peach p-10 text-center">
          <p className="font-display text-2xl font-bold">No pups match that just yet</p>
          <p className="mt-2 text-cocoa">Try another filter, or ask us about upcoming litters.</p>
          <button
            type="button"
            className="btn-primary mt-6"
            onClick={() => router.replace(pathname, { scroll: false })}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p) => (
            <li key={p.slug}>
              <PuppyCard puppy={p} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
