import { FAQS, wa } from "@/lib/data";

export const metadata = {
  title: "Questions & answers",
  description:
    "Answers about TeddyPups puppies: health checks and vaccinations, meeting local puppies, imported teacup breeds and delivery.",
};

export default function FaqPage() {
  return (
    <div className="bg-espresso py-14 text-cream">
      <div className="wrap max-w-3xl">
        <p className="font-hand text-2xl text-[#f0c994]">sniff out a question</p>
        <h1 className="h-display text-5xl text-cream">Questions &amp; answers</h1>
        <p className="mt-3 text-cream/80">
          Can&apos;t find what you&apos;re looking for? Message us on WhatsApp — our team is available 24/7.
        </p>

        <p className="mt-8 font-hand text-2xl text-[#f0c994]">{FAQS.length} notes on the board</p>

        <ul className="mt-6 space-y-7">
          {FAQS.map((f) => (
            <li key={f.q} className="flex gap-3">
              <span aria-hidden="true" className="mt-1 shrink-0 text-lg text-[#f0c994]">✦</span>
              <div>
                <h2 className="font-display text-xl font-bold text-cream">{f.q}</h2>
                <p className="mt-1 text-cream/80">{f.a}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-[2rem] border-2 border-cream/30 bg-cream/10 p-8 text-center">
          <p className="font-display text-2xl font-bold text-cream">Still wondering?</p>
          <a
            href={wa()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-4"
          >
            Ask your own question
          </a>
        </div>
      </div>
    </div>
  );
}
