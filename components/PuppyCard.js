import Link from "next/link";
import Img from "@/components/Img";
import { media, puppyTitle, puppySub } from "@/lib/data";

export default function PuppyCard({ puppy, index }) {
  return (
    <Link
      href={`/puppies/${puppy.slug}`}
      className="group block overflow-hidden rounded-3xl bg-white shadow-card transition duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-peach">
        <Img
          src={media(puppy.images[0], 640)}
          alt={`${puppyTitle(puppy)}, ${puppy.gender} ${puppy.breed} puppy`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-cocoa">
          Available
        </span>
        {puppy.video && (
          <span className="absolute right-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-xs font-bold text-cream">
            ▶ video
          </span>
        )}
        {typeof index === "number" && (
          <span className="absolute bottom-3 left-3 font-hand text-3xl text-white drop-shadow">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-bold leading-snug">{puppyTitle(puppy)}</h3>
        <p className="mt-1 text-sm text-cocoa">{puppySub(puppy)}</p>
      </div>
    </Link>
  );
}
