import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import EnquiryForm from "@/components/EnquiryForm";
import Img from "@/components/Img";
import {
  PUPPIES, GONE_HOME, INCLUDED, IMPORT_STEPS,
  findPuppy, findGone, media, wa, puppyTitle,
} from "@/lib/data";

export function generateStaticParams() {
  return [...PUPPIES, ...GONE_HOME].map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const puppy = findPuppy(slug);
  const gone = findGone(slug);
  if (puppy) {
    return {
      title: `${puppyTitle(puppy)}, ${puppy.breed} puppy`,
      description: `Meet ${puppyTitle(puppy)}: ${puppy.breed}, ${puppy.gender}, ${puppy.age} old. Real photos from TeddyPups U.A.E.`,
    };
  }
  if (gone) {
    return {
      title: `${gone.name || gone.breed} — gone home`,
      description: `${gone.name || gone.breed} the ${gone.breed} has already joined a loving family.`,
    };
  }
  return { title: "Puppy not found" };
}

function Section({ n, label, children }) {
  return (
    <section className="mt-16">
      <p className="font-hand text-2xl text-apricot">
        {n} <span className="text-cocoa/70">{label}</span>
      </p>
      {children}
    </section>
  );
}

export default async function PuppyPage({ params }) {
  const { slug } = await params;
  const puppy = findPuppy(slug);
  const gone = puppy ? null : findGone(slug);
  if (!puppy && !gone) notFound();

  /* ---------- Gone home ---------- */
  if (gone) {
    const title = gone.name || gone.breed;
    return (
      <div className="wrap py-14">
        <nav className="text-sm text-cocoa" aria-label="Breadcrumb">
          <Link href="/gone-home" className="font-semibold underline">Gone home</Link> / {title}
        </nav>
        <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] bg-peach shadow-card">
            <Img src={media(gone.image, 1080)} alt={`${title}, ${gone.gender} ${gone.breed} puppy`} priority className="aspect-[4/5] w-full object-cover" />
          </div>
          <div>
            <span className="rounded-full bg-blush px-4 py-1 text-sm font-bold">gone home ♥</span>
            <h1 className="h-display mt-4 text-5xl">{title}</h1>
            <p className="mt-2 text-lg text-cocoa">{gone.breed} · {gone.gender} · from {gone.from}</p>
            <p className="mt-6 max-w-md text-cocoa">
              {title} has already joined a loving family. Looking for one just like {gone.gender === "girl" ? "her" : "him"}?
              Tell us — we&apos;ll help you find your match.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/puppies" className="btn-primary">See available puppies</Link>
              <a href={wa(`Hi TeddyPups! I saw ${title} the ${gone.breed} and I'm looking for a puppy like that.`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------- Available puppy ---------- */
  const title = puppyTitle(puppy);
  const subject = puppy.name ? `${puppy.name} (${puppy.breed})` : `the ${puppy.breed}`;
  const imported = puppy.origin === "imported";
  const idx = PUPPIES.findIndex((p) => p.slug === puppy.slug);
  const prev = PUPPIES[(idx - 1 + PUPPIES.length) % PUPPIES.length];
  const next = PUPPIES[(idx + 1) % PUPPIES.length];
  const pageUrl = `https://puppy.instabizweb.com/puppies/${puppy.slug}`;

  const specs = [
    ["Breed", puppy.breed],
    ["Boy or girl", puppy.gender === "boy" ? "Boy" : puppy.gender === "girl" ? "Girl" : "Boy & girl"],
    ["Age", puppy.age],
    ["Where", imported ? "Imported for you" : "In our Dubai showroom"],
  ];

  return (
    <div className="wrap py-14">
      <nav className="text-sm text-cocoa" aria-label="Breadcrumb">
        <Link href="/puppies" className="font-semibold underline">Available puppies</Link> / {title}
      </nav>

      <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
        <Gallery
          images={puppy.images}
          hasVideo={!!puppy.video}
          alt={`${title}, ${puppy.gender} ${puppy.breed} puppy`}
        />

        <div>
          <p className="font-hand text-2xl text-apricot">1 hello, it&apos;s me</p>
          <span className="mt-2 inline-block rounded-full bg-sage px-4 py-1 text-sm font-bold">Available</span>
          <h1 className="h-display mt-3 text-5xl">{title}</h1>
          {puppy.name && <p className="mt-1 text-lg text-cocoa">{puppy.breed}</p>}

          <dl className="mt-8 grid grid-cols-2 gap-3">
            {specs.map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-white p-4 shadow-card">
                <dt className="text-xs font-bold uppercase tracking-wide text-cocoa/70">{k}</dt>
                <dd className="mt-1 font-display text-lg font-bold">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa(`Hi TeddyPups! I'm interested in ${subject}: ${pageUrl}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Ask about {title} on WhatsApp
            </a>
            <a href="#enquire" className="btn-ghost">Send an enquiry</a>
          </div>
        </div>
      </div>

      <Section n="2" label={`what comes with ${title}`}>
        <h2 className="h-display mt-1 text-3xl">Every Teddy Pup comes</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {INCLUDED.map((i) => (
            <li key={i} className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-card">
              <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-apricot text-sm font-bold">✓</span>
              {i}
            </li>
          ))}
        </ul>
      </Section>

      {imported && (
        <Section n="3" label="the way home">
          <h2 className="h-display mt-1 text-3xl">Coming home from abroad</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {IMPORT_STEPS.map((s, i) => (
              <li key={s.title} className="rounded-3xl bg-peach/60 p-5">
                <span className="font-hand text-4xl text-apricot">{i + 1}</span>
                <h3 className="font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-1 text-sm text-cocoa">{s.text}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      <section id="enquire" className="mt-16 scroll-mt-24">
        <p className="font-hand text-2xl text-apricot">{imported ? "4" : "3"} <span className="text-cocoa/70">dear TeddyPups…</span></p>
        <h2 className="h-display mt-1 text-3xl">Ask about {title}</h2>
        <p className="mt-2 max-w-xl text-cocoa">
          Leave your details and our team will get back to you promptly — or message us on WhatsApp for the quickest reply.
        </p>
        <div className="mt-6 max-w-2xl">
          <EnquiryForm slug={puppy.slug} subject={subject} />
        </div>
      </section>

      <nav className="mt-16 grid gap-4 sm:grid-cols-2" aria-label="More puppies">
        {[
          { p: prev, label: "Previous pup" },
          { p: next, label: "Next pup" },
        ].map(({ p, label }) => (
          <Link key={label} href={`/puppies/${p.slug}`} className="flex items-center gap-4 rounded-3xl bg-white p-3 shadow-card transition hover:-translate-y-0.5">
            <Img src={media(p.images[0], 384)} alt="" className="h-20 w-20 rounded-2xl object-cover" />
            <span>
              <span className="block text-xs font-bold uppercase tracking-wide text-cocoa/70">{label}</span>
              <span className="font-display text-lg font-bold">{puppyTitle(p)}</span>
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
