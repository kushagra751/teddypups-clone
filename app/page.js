import Link from "next/link";
import Img from "@/components/Img";
import HeroSlider from "@/components/HeroSlider";
import PuppyCard from "@/components/PuppyCard";
import FaqList from "@/components/FaqList";
import {
  PUPPIES, GONE_HOME, FAMILY_PHOTOS, SHOWROOM_IMAGES, TESTIMONIAL, JOURNEY, TRUST, FAQS, BREEDS,
  media, wa, puppyTitle,
} from "@/lib/data";

export default function HomePage() {
  const featured = PUPPIES;
  const cta = PUPPIES[0];

  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden bg-gradient-to-b from-peach/70 to-cream">
        <div className="wrap grid items-center gap-12 py-14 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="fade-up">
            <p className="eyebrow">{`every puppy is family`}</p>
            <h1 className="h-display mt-2 text-5xl sm:text-6xl lg:text-7xl">
              Premium teacup <span className="text-apricot">puppies</span> in Dubai
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cocoa">
              Meet your new best friend in our Dubai showroom, or order a rare miniature breed from trusted breeders
              worldwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/puppies" className="btn-primary">View available puppies</Link>
              <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Enquire on WhatsApp</a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-1 font-hand text-2xl text-cocoa/80" aria-label="Featured pups">
              {PUPPIES.slice(0, 6).map((p) => (
                <li key={p.slug}>{puppyTitle(p)}</li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-md">
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* MEET THE PUPS */}
      <section className="wrap mt-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="h-display text-4xl">Meet the pups</h2>
            <p className="mt-2 text-cocoa">Real puppies, real photos, looking for their families right now.</p>
          </div>
          <Link href="/puppies" className="btn-ghost">See all available puppies</Link>
        </div>
        <ol className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p, idx) => (
            <li key={p.slug}>
              <PuppyCard puppy={p} index={idx} />
            </li>
          ))}
          <li>
            <Link
              href="/puppies"
              className="flex aspect-[4/5] h-full min-h-[14rem] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-cocoa/30 bg-peach/50 p-6 text-center font-display text-xl font-bold transition hover:bg-peach"
            >
              <span className="font-hand text-4xl text-apricot">16</span>
              Meet them all
            </Link>
          </li>
        </ol>
      </section>

      {/* TWO WAYS */}
      <section className="wrap mt-24">
        <h2 className="h-display text-center text-4xl">Two ways to meet your puppy</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-[2rem] bg-white shadow-card">
            <Img
              src={media(SHOWROOM_IMAGES[0], 1080)}
              alt="A tiny apricot teddy bear puppy held up in the TeddyPups showroom"
              className="h-72 w-full object-cover"
            />
            <div className="p-7">
              <p className="eyebrow">Puppies in Dubai</p>
              <h3 className="font-display text-2xl font-bold">In our showroom</h3>
              <p className="mt-2 text-cocoa">
                See them, love them, take them home. Come meet our locally available puppies before you decide.
              </p>
              <Link href="/puppies?origin=local" className="btn-primary mt-5">Meet local puppies</Link>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-[2rem] bg-ink text-cream shadow-card">
            <div className="flex h-72 items-center justify-center bg-gradient-to-br from-cocoa to-ink">
              <p className="font-hand text-5xl text-apricot">Korea ✈ Dubai</p>
            </div>
            <div className="flex flex-1 flex-col items-start p-7">
              <p className="font-hand text-2xl text-apricot">Imported for you</p>
              <h3 className="font-display text-2xl font-bold">KoreaDubai</h3>
              <p className="mt-2 text-cream/80">
                Exclusive Korean teacup puppies, delivered. Order from the world&apos;s most reputable breeders and let
                us handle the import.
              </p>
              <Link href="/puppies?origin=imported" className="btn mt-5 bg-apricot text-ink hover:bg-peach">
                See imported puppies
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="wrap mt-24 grid items-start gap-10 lg:grid-cols-2">
        <div>
          <h2 className="h-display text-4xl">Your puppy journey</h2>
          <p className="mt-3 max-w-lg text-cocoa">
            A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
          </p>
          <ol className="mt-8 space-y-5">
            {JOURNEY.map((s, idx) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-apricot font-display text-xl font-bold">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="text-cocoa">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link href="/how-it-works" className="btn-ghost mt-8">How it works</Link>
        </div>

        {/* WhatsApp chat mock */}
        <div className="rounded-[2rem] bg-sage p-5 shadow-card">
          <div className="flex items-center gap-3 rounded-2xl bg-[#075e54] px-4 py-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl">🧸</span>
            <div>
              <p className="font-bold leading-tight">TeddyPups U.A.E.</p>
              <p className="text-xs text-white/80">online</p>
            </div>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] px-4 py-2.5">
              Hi TeddyPups! I&apos;d love to know more about your puppies.
            </p>
            <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5">
              Select your preferred breed or tell us what you&apos;re looking for. We&apos;ll guide you based on
              availability and your lifestyle.
            </p>
            <div className="flex flex-wrap gap-2">
              {BREEDS.map((b) => (
                <Link
                  key={b.key}
                  href={`/puppies?breed=${b.key}`}
                  className="rounded-full bg-white px-4 py-2 font-bold text-cocoa shadow transition hover:bg-peach"
                >
                  {b.label}
                </Link>
              ))}
            </div>
            <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5">
              Our team will share real photos, health details, and all necessary information directly on WhatsApp.
            </p>
            <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-2.5">
              Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and
              stress-free.
            </p>
          </div>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-5 w-full">
            Say hello on WhatsApp
          </a>
        </div>
      </section>

      {/* TRUST */}
      <section className="mt-24 bg-peach/50 py-16">
        <div className="wrap">
          <p className="eyebrow">puppy passport</p>
          <h2 className="h-display text-4xl">Why families trust TeddyPups</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t) => (
              <li key={t.title} className="rounded-3xl bg-white p-6 shadow-card">
                <h3 className="font-display text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-cocoa">{t.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HAPPY FAMILIES */}
      <section className="wrap mt-24">
        <h2 className="h-display text-4xl">Happy families &amp; puppies</h2>
        <p className="mt-3 max-w-3xl text-cocoa">
          We are truly honored to see our puppies become cherished members of loving families. These heartwarming
          moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts.
        </p>
        <figure className="mt-8 rounded-[2rem] bg-ink p-8 text-cream sm:p-10">
          <blockquote className="font-display text-xl leading-relaxed sm:text-2xl">“{TESTIMONIAL.quote}”</blockquote>
          <figcaption className="mt-4 font-hand text-2xl text-apricot">{TESTIMONIAL.author}</figcaption>
        </figure>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {FAMILY_PHOTOS.slice(0, 8).map((f) => (
            <li key={f.image} className="overflow-hidden rounded-3xl bg-white shadow-card">
              <Img src={media(f.image, 640)} alt="A happy TeddyPups family with their new puppy" className="aspect-square w-full object-cover" />
              {f.caption && <p className="p-3 text-sm font-semibold text-cocoa">{f.caption}</p>}
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link href="/happy-families" className="btn-ghost">See every happy family</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="wrap mt-24 max-w-3xl">
        <h2 className="h-display text-4xl">Questions, answered</h2>
        <div className="mt-8">
          <FaqList items={FAQS.slice(0, 3)} />
        </div>
        <div className="mt-6">
          <Link href="/faq" className="btn-ghost">Read all questions</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="wrap mt-24">
        <div className="grid items-center gap-8 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-apricot to-blush p-8 sm:p-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="h-display text-4xl">Ready to meet your new best friend?</h2>
            <p className="mt-4 max-w-lg text-ink/80">
              Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help
              you find the right match and ensure a smooth, safe delivery across the UAE.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Enquire on WhatsApp</a>
              <Link href="/contact" className="btn-primary">Visit &amp; contact</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xs">
            <Img
              src={media(cta.images[0], 640)}
              alt="Max, waiting inside"
              className="aspect-[4/5] w-full rotate-3 rounded-[2rem] object-cover shadow-card"
            />
            <span className="absolute -bottom-3 -left-3 -rotate-6 rounded-full bg-white px-4 py-1 font-hand text-2xl shadow">
              welcome home
            </span>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-cocoa">
          {GONE_HOME.length}+ puppies have already found their families. <Link href="/gone-home" className="font-bold underline">See who went home</Link>
        </p>
      </section>
    </>
  );
}
