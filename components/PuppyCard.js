import Link from "next/link";
import Img from "@/components/Img";
import { media, puppyTitle, puppySub } from "@/lib/data";

const ACCENTS = ["✦", "🐾", "♥"];

export default function PuppyCard({ puppy, index = 0 }) {
  const accent = ACCENTS[index % ACCENTS.length];
  return (
    <Link href={`/puppies/${puppy.slug}`} className="group block text-center">
      <div className="relative mx-auto aspect-square w-full max-w-[220px]">
        <span
          aria-hidden="true"
          className="absolute -left-1 top-2 text-lg text-terracotta transition group-hover:scale-125"
        >
          {accent}
        </span>
        <div className="h-full w-full overflow-hidden rounded-full border-2 border-ink bg-peach shadow-pop transition duration-300 group-hover:-translate-y-1">
          <Img
            src={media(puppy.images[0], 480)}
            alt={`${puppyTitle(puppy)}, ${puppy.gender} ${puppy.breed} puppy`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>
        <span className="tag absolute -right-1 top-1 bg-paper">Available</span>
        {puppy.video && (
          <span className="tag absolute bottom-1 left-1/2 -translate-x-1/2 bg-ink text-paper">▶ video</span>
        )}
      </div>
      <h3 className="mt-3 font-display text-lg font-bold leading-snug">{puppyTitle(puppy)}</h3>
      <p className="text-sm text-cocoa">{puppySub(puppy)}</p>
    </Link>
  );
}
