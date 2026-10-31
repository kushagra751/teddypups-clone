import Img from "@/components/Img";
import { FAMILY_PHOTOS, TESTIMONIAL, media } from "@/lib/data";

export const metadata = {
  title: "Happy families",
  description: "Real photos shared by TeddyPups families after welcoming their new puppy home.",
};

export default function HappyFamiliesPage() {
  return (
    <div className="wrap py-14">
      <p className="eyebrow">our wall of happy endings</p>
      <h1 className="h-display text-5xl">Happy families</h1>
      <p className="mt-3 max-w-3xl text-cocoa">
        Nothing makes us happier than seeing our puppies in loving homes! Here are some beautiful moments shared by our
        amazing clients after welcoming their furry friends.
      </p>
      <p className="mt-4 font-hand text-2xl text-cocoa/70">64 moments and counting</p>

      <figure className="mt-8 rounded-[2rem] bg-ink p-8 text-cream sm:p-10">
        <blockquote className="font-display text-xl leading-relaxed sm:text-2xl">“{TESTIMONIAL.quote}”</blockquote>
        <figcaption className="mt-4 font-hand text-2xl text-apricot">{TESTIMONIAL.author}</figcaption>
      </figure>

      {/* Masonry via CSS columns */}
      <ul className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>li]:mb-4">
        {FAMILY_PHOTOS.map((f) => (
          <li key={f.image} className="break-inside-avoid overflow-hidden rounded-3xl bg-white shadow-card">
            <Img
              src={media(f.image, 640)}
              alt={f.caption ? `A happy TeddyPups family: ${f.caption}` : "A happy TeddyPups family with their new puppy"}
              className="w-full object-cover"
            />
            {f.caption && <p className="p-3 text-sm font-semibold text-cocoa">{f.caption}</p>}
          </li>
        ))}
      </ul>

      <p className="mt-12 text-center font-hand text-3xl text-apricot">every one of them was a Teddy Pup once</p>
    </div>
  );
}
