import { Suspense } from "react";
import Link from "next/link";
import PuppyBrowser from "@/components/PuppyBrowser";
import Img from "@/components/Img";
import { GONE_HOME, media } from "@/lib/data";

export const metadata = {
  title: "Available puppies",
  description:
    "Teacup and teddy bear puppies available now in Dubai and imported from trusted breeders — every listing shows real photos of the puppy.",
};

export default function PuppiesPage() {
  return (
    <>
      <section className="wrap pt-14">
        <p className="eyebrow">from Teddy&apos;s sketchbook</p>
        <h1 className="h-display text-5xl">Available puppies</h1>
        <p className="mt-3 max-w-2xl text-cocoa">
          Every listing shows real photos of the actual puppy. Open a profile to see them all, then ask us about them on
          WhatsApp.
        </p>
        <div className="mt-10">
          <Suspense fallback={<p className="text-cocoa">Fetching puppies…</p>}>
            <PuppyBrowser />
          </Suspense>
        </div>
      </section>

      <section className="wrap mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="h-display text-3xl">Already gone home</h2>
            <p className="mt-2 text-cocoa">These puppies have found their families.</p>
          </div>
          <Link href="/gone-home" className="btn-ghost">See the puppies who&apos;ve gone home</Link>
        </div>
        <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {GONE_HOME.slice(0, 5).map((p) => (
            <li key={p.slug}>
              <Link href={`/puppies/${p.slug}`} className="group block overflow-hidden rounded-3xl border-2 border-ink bg-white shadow-pop">
                <div className="relative aspect-square overflow-hidden">
                  <Img src={media(p.image, 384)} alt={`${p.name || p.breed}, ${p.gender} ${p.breed} puppy`} className="h-full w-full object-cover grayscale-[30%] transition group-hover:grayscale-0" />
                  <span className="absolute left-2 top-2 rounded-full bg-blush px-3 py-1 text-xs font-bold">gone home ♥</span>
                </div>
                <p className="p-3 font-display font-bold">{p.name || p.breed}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
