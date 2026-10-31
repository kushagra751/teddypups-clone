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

      <p className="mt-14 font-hand text-2xl text-terracotta">tickets home</p>
      <ul className="mt-3 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GONE_HOME.map((p, idx) => {
          const title = p.name || p.breed;
          return (
            <li key={p.slug}>
              <Link href={`/puppies/${p.slug}`} className="group block">
                <div className={`polaroid block ${idx % 2 === 0 ? "-rotate-1" : "rotate-1"} transition duration-300 group-hover:rotate-0 group-hover:-translate-y-1`}>
                  <div className="overflow-hidden rounded-sm">
                    <Img
                      src={media(p.image, 384)}
                      alt={`${title}, ${p.gender} ${p.breed} puppy`}
                      className="aspect-square w-full object-cover grayscale-[20%]"
                    />
                  </div>
                  <p className="mt-2 text-center font-hand text-xl text-cocoa">one ticket home</p>
                </div>
                <div className="card -mt-2 flex items-center justify-between gap-2 p-4">
                  <div>
                    <h2 className="font-display text-lg font-bold">{title}</h2>
                    <p className="text-sm text-cocoa">{p.breed}, {p.gender} · {p.from}</p>
                  </div>
                  <span className="tag shrink-0 bg-blush">home ♥</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
