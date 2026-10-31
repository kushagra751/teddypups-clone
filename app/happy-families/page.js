import Img from "@/components/Img";
import { FAMILY_PHOTOS, TESTIMONIAL, media } from "@/lib/data";

export const metadata = {
  title: "Happy families",
  description: "Real photos shared by TeddyPups families after welcoming their new puppy home.",
};

const ROTATIONS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0"];

export default function HappyFamiliesPage() {
  return (
    <div className="bg-umber py-14 text-cream">
      <div className="wrap">
        <p className="font-hand text-2xl text-[#f0c994]">our wall of happy endings</p>
        <h1 className="h-display text-5xl text-cream">Happy families</h1>
        <p className="mt-3 max-w-3xl text-cream/85">
          Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our
          amazing clients after welcoming their furry friends.
        </p>
        <p className="mt-4 font-hand text-2xl text-[#f0c994]">64 moments and counting</p>

        {/* Sticky-note testimonial */}
        <figure className="card relative mt-8 max-w-xl -rotate-1 p-7 sm:p-9">
          <span aria-hidden="true" className="absolute -top-3 left-10 h-6 w-16 -rotate-6 rounded-sm bg-peach/80" />
          <blockquote className="font-display text-xl leading-relaxed text-ink sm:text-2xl">“{TESTIMONIAL.quote}”</blockquote>
          <figcaption className="mt-4 font-hand text-2xl text-terracotta">{TESTIMONIAL.author}</figcaption>
        </figure>

        {/* Polaroid photo wall */}
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {FAMILY_PHOTOS.map((f, idx) => (
            <li key={f.image} className={`${ROTATIONS[idx % ROTATIONS.length]} transition duration-300 hover:rotate-0 hover:-translate-y-1`}>
              <div className="polaroid">
                <Img
                  src={media(f.image, 640)}
                  alt={f.caption ? `A happy TeddyPups family: ${f.caption}` : "A happy TeddyPups family with their new puppy"}
                  className="aspect-square w-full object-cover"
                />
                {f.caption && <p className="mt-2 text-center font-hand text-lg text-cocoa">{f.caption}</p>}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-16 text-center font-hand text-3xl text-[#f0c994]">every one of them was a Teddy Pup once</p>
      </div>
    </div>
  );
}
