import Link from "next/link";
import { wa } from "@/lib/data";

export const metadata = {
  title: "How it works",
  description:
    "Meet a local puppy in our Downtown Dubai showroom or reserve a premium teacup breed imported for you — every step, from choosing to coming home.",
};

const LOCAL_STEPS = [
  { t: "Explore our puppies", d: "Browse our website to view the available puppies. Each listing includes photos, breed details, age, and health information." },
  { t: "Choose your puppy", d: "Once you find a puppy you love, open their profile for more information or to enquire further. You can also reach out to us directly if you have any questions." },
  { t: "Meet before you choose", d: "Spend time bonding before making your decision." },
  { t: "Pick-up or delivery", d: "Pick up your puppy from us or have them delivered to your home within Dubai. Our delivery service is safe and reliable, ensuring your puppy arrives comfortably." },
];

const IMPORT_STEPS = [
  { t: "Reserve your puppy", d: "Browse our selection of available breeds and place a reservation for the teacup puppy that captures your heart. Our reservation-only model ensures that each puppy is specifically sourced to meet your preferences." },
  { t: "Personalized consultation", d: "Once your reservation is confirmed, we will work closely with you to finalize details and provide updates on your puppy's journey." },
  { t: "Import and arrival", d: "We manage all aspects of the import process, including health checks, travel arrangements, and necessary documentation. Your puppy will be carefully transported and will arrive ready to join your family." },
  { t: "Welcome home", d: "Upon arrival, we provide support to help your new puppy acclimate to their new environment. Our team is available for any additional assistance and to ensure a smooth transition into your home." },
];

const PROMISE = [
  { t: "Hand-selected breeders", d: "We work only with breeders who uphold the highest ethical and health standards." },
  { t: "Full transparency", d: "Photos, videos, and health certificates are shared before your puppy travels." },
  { t: "Safe, stress-free delivery", d: "We handle every detail of the import process, so your puppy arrives happy, healthy, and ready to love you." },
];

const DELIVERY = [
  { t: "Take your puppy home the same day", d: "Local puppies are available immediately — visit, fall in love, and go home together." },
  { t: "Delivery within Dubai", d: "Prefer to stay home? We deliver your puppy to your door within Dubai, safely and comfortably." },
  { t: "Safe international cargo", d: "We handle all the paperwork and ensure comfortable travel so your puppy arrives happy and stress-free." },
  { t: "Worldwide delivery", d: "We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance." },
];

const WHY = [
  { t: "International cargo", d: "We safely deliver puppies to loving homes all around the world. Our trusted international cargo partners ensure your new furry friend travels comfortably and arrives safely, no matter the distance." },
  { t: "Support 24/7", d: "Our team is available 24/7 to answer your questions and assist you through every step of the adoption process. From choosing your puppy to post-delivery support — we're just a message away." },
  { t: "Health guarantee", d: "All our puppies come with a verified health certificate from licensed vets. We ensure every puppy is vaccinated, dewormed, and thoroughly checked before joining your family." },
];

const TOC = [
  ["#two-ways", "Two ways home"],
  ["#promise", "Our premium puppy promise"],
  ["#delivery", "Delivery & collection"],
  ["#why", "Why choose us"],
];

function Steps({ steps }) {
  return (
    <ol className="mt-5 space-y-4">
      {steps.map((s, i) => (
        <li key={s.t} className="flex gap-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-apricot font-display font-bold">
            {i + 1}
          </span>
          <div>
            <h4 className="font-display text-lg font-bold">{s.t}</h4>
            <p className="text-cocoa">{s.d}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Cards({ items, cols = "sm:grid-cols-2" }) {
  return (
    <ul className={`mt-8 grid gap-4 ${cols}`}>
      {items.map((i) => (
        <li key={i.t} className="rounded-3xl bg-white p-6 shadow-card">
          <h3 className="font-display text-xl font-bold">{i.t}</h3>
          <p className="mt-2 text-cocoa">{i.d}</p>
        </li>
      ))}
    </ul>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="wrap py-14">
      <h1 className="h-display text-5xl">How it works</h1>
      <p className="mt-3 max-w-3xl text-cocoa">
        Whether you choose to visit us locally or order a premium breed from overseas, TeddyPups is here to make the
        experience unforgettable.
      </p>

      <nav className="mt-8 flex flex-wrap gap-2" aria-label="On this page">
        {TOC.map(([href, label], i) => (
          <a key={href} href={href} className="rounded-full border-2 border-cocoa/20 bg-white px-4 py-2 text-sm font-bold text-cocoa transition hover:border-apricot">
            <span className="mr-1 text-apricot">{i + 1}</span> {label}
          </a>
        ))}
      </nav>

      {/* Two ways */}
      <section id="two-ways" className="mt-16 scroll-mt-24">
        <p className="eyebrow">choose your way</p>
        <h2 className="h-display text-4xl">Two ways home</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-peach/60 p-7">
            <p className="font-hand text-2xl text-apricot">In Dubai · meet in person</p>
            <h3 className="font-display text-2xl font-bold">Meet your puppy in person</h3>
            <p className="mt-3 text-cocoa">
              Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We
              source healthy, well-socialized puppies from trusted local breeders, ensuring they&apos;re raised with
              care, proper nutrition, and veterinary checks.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-cocoa/70">Downtown Dubai</p>
            <Steps steps={LOCAL_STEPS} />
          </article>

          <article className="rounded-[2rem] bg-white p-7 shadow-card">
            <p className="font-hand text-2xl text-apricot">Imported · order upon request</p>
            <h3 className="font-display text-2xl font-bold">Order upon request</h3>
            <p className="mt-3 text-cocoa">
              Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the
              world&apos;s most sought-after teacup breeds — ethically sourced from the most reputable, certified
              breeders across Europe, Korea, and beyond.
            </p>
            <p className="mt-3 text-cocoa">
              From Korean teacup poodles to rare Maltese, Pom, and Yorkie lines, we bring the world&apos;s finest
              puppies to Dubai, just for you.
            </p>
            <p className="mt-3 text-sm font-bold uppercase tracking-wide text-cocoa/70">Europe · Korea → Dubai</p>
            <Steps steps={IMPORT_STEPS} />
          </article>
        </div>
      </section>

      {/* Promise */}
      <section id="promise" className="mt-20 scroll-mt-24">
        <p className="eyebrow">puppy passport</p>
        <h2 className="h-display text-4xl">Our premium puppy promise</h2>
        <Cards items={PROMISE} cols="md:grid-cols-3" />
      </section>

      {/* Delivery */}
      <section id="delivery" className="mt-20 scroll-mt-24">
        <h2 className="h-display text-4xl">Delivery &amp; collection</h2>
        <p className="mt-3 max-w-2xl text-cocoa">
          From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives
          safely.
        </p>
        <Cards items={DELIVERY} />
      </section>

      {/* Why */}
      <section id="why" className="mt-20 scroll-mt-24">
        <h2 className="h-display text-4xl">Why choose us</h2>
        <p className="mt-3 max-w-3xl text-cocoa">
          We&apos;re here to help you find a new family member. From the moment you visit our site to the joyful day
          your puppy arrives at your door, we&apos;re with you every step of the way. Our mission is to make the entire
          adoption process smooth, transparent, and full of love.
        </p>
        <Cards items={WHY} cols="md:grid-cols-3" />

        <div className="mt-10 rounded-[2rem] bg-ink p-8 text-cream sm:p-10">
          <h3 className="font-display text-3xl font-bold">Unique and high quality puppies</h3>
          <p className="mt-3 max-w-3xl text-cream/80">
            When you choose TeddyPups, you can trust that you&apos;re getting a puppy of the highest quality. We also
            provide guidance and support to new pet owners, offering advice on training, nutrition, and general care to
            ensure a smooth transition for you and your new furry friend.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">Ask us on WhatsApp</a>
            <Link href="/puppies" className="btn bg-apricot text-ink hover:bg-peach">See available puppies</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
