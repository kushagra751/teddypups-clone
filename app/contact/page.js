import ContactForm from "@/components/ContactForm";
import Img from "@/components/Img";
import { SITE, SHOWROOM_IMAGES, media, wa } from "@/lib/data";

export const metadata = {
  title: "Visit & contact",
  description: "Visit TeddyPups in Downtown Dubai or get in touch on WhatsApp, by phone or email.",
};

export default function ContactPage() {
  return (
    <div className="wrap py-14">
      <h1 className="h-display text-5xl">Get in touch with us</h1>
      <p className="mt-3 max-w-2xl text-cocoa">
        Have questions about our puppies or adoption process? Fill out the form, and our team will get back to you
        promptly. Whether ready to adopt or just seeking info, we&apos;d love to hear from you!
      </p>

      <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.4fr_0.6fr]">
        <ContactForm />

        <aside className="space-y-4">
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
            WhatsApp {SITE.phone}
          </a>
          <div className="rounded-3xl border-2 border-ink bg-white p-6 shadow-pop">
            <p className="font-hand text-2xl text-apricot">call us</p>
            <a href={SITE.phoneHref} className="font-display text-xl font-bold hover:underline">{SITE.phone}</a>
            <p className="mt-5 font-hand text-2xl text-apricot">email</p>
            <a href={`mailto:${SITE.email}`} className="font-display text-xl font-bold break-all hover:underline">{SITE.email}</a>
          </div>
        </aside>
      </div>

      <section className="mt-20 grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="h-display text-4xl">Visit us in Downtown Dubai</h2>
          <p className="mt-3 text-cocoa">
            Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face.
          </p>
          <p className="mt-4 font-semibold">{SITE.location}</p>
          <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">
            Open in Google Maps
          </a>
        </div>
        <Img
          src={media(SHOWROOM_IMAGES[3], 1080)}
          alt="The apricot teddy bear puppy from our showroom, held up to say hello"
          className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card"
        />
      </section>
    </div>
  );
}
