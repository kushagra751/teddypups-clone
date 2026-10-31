import FaqList from "@/components/FaqList";
import { FAQS, wa } from "@/lib/data";

export const metadata = {
  title: "Questions & answers",
  description:
    "Answers about TeddyPups puppies: health checks and vaccinations, meeting local puppies, imported teacup breeds and delivery.",
};

export default function FaqPage() {
  return (
    <div className="wrap max-w-3xl py-14">
      <p className="eyebrow">sniff out a question</p>
      <h1 className="h-display text-5xl">Questions &amp; answers</h1>
      <p className="mt-3 text-cocoa">
        Can&apos;t find what you&apos;re looking for? Message us on WhatsApp — our team is available 24/7.
      </p>

      <p className="mt-8 font-hand text-2xl text-cocoa/70">{FAQS.length} notes on the board</p>
      <div className="mt-3">
        <FaqList items={FAQS} />
      </div>

      <div className="mt-10 rounded-[2rem] bg-peach p-8 text-center">
        <p className="font-display text-2xl font-bold">Still wondering?</p>
        <a
          href={wa("Hi TeddyPups! I have a question: ")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-4"
        >
          Ask your own question
        </a>
      </div>
    </div>
  );
}
