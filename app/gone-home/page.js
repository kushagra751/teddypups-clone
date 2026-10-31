import Link from "next/link";
import Img from "@/components/Img";
import { GONE_HOME, media } from "@/lib/data";

export const metadata = {
  title: "Gone home",
  description: "TeddyPups puppies who have already joined their families.",
};

export default function GoneHomePage() {
  return (
    <div className="wrap py-14">
      <h1 className="h-display text-5xl">Gone home</h1>
      <p className="mt-3 max-w-2xl text-cocoa">
        Every puppy here has already joined a loving family. Looking for one just like them? Tell us — we&apos;ll help
        you find your match.
      </p>
      <Link href="/puppies" className="btn-primary mt-6">See available puppies</Link>

      <p className="mt-14 font-hand text-2xl text-apricot">tickets home</p>
      <ul className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GONE_HOME.map((p) => {
          const title = p.name || p.breed;
          return (
            <li key={p.slug}>
              <Link
                href={`/puppies/${p.slug}`}
                className="group flex overflow-hidden rounded-3xl border-2 border-dashed border-cocoa/30 bg-white shadow-card transition hover:-translate-y-1"
              >
                <Img
                  src={media(p.image, 384)}
                  alt={`${title}, ${p.gender} ${p.breed} puppy`}
                  className="h-40 w-32 shrink-0 object-cover"
                />
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-cocoa/70">one ticket home</p>
                    <h2 className="font-display text-xl font-bold">{title}</h2>
                    <p className="text-sm text-cocoa">{p.breed}, {p.gender}</p>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-cocoa">
                    <span>{p.from}</span>
                    <span className="rounded-full bg-blush px-3 py-1">home ♥</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
