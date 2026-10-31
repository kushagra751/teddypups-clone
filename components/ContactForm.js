"use client";

import { useState } from "react";
import { PUPPIES, puppyTitle, wa } from "@/lib/data";

const inline =
  "mx-1 inline-block min-w-[9rem] border-b-2 border-cocoa/40 bg-transparent px-1 py-0.5 font-hand text-2xl text-ink outline-none transition focus:border-apricot";

// Letter-style contact form ("Dear TeddyPups, my name is ...").
export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name?.trim() || !data.phone?.trim()) {
      setError("Please tell us your name and how to reach you.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "contact-page" }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("done");
      form.reset();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try WhatsApp instead.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-[2rem] bg-sage p-10 text-center" role="status">
        <p className="font-hand text-5xl text-cocoa">Letter posted!</p>
        <p className="mt-3">Thank you. Our team will get back to you promptly.</p>
        <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6">
          Or say hello on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-[2rem] border-2 border-dashed border-ink bg-white p-6 shadow-pop sm:p-10"
    >
      <p className="font-hand text-4xl text-cocoa">Dear TeddyPups,</p>

      <div className="mt-4 text-lg leading-[2.6]">
        my name is
        <label className="sr-only" htmlFor="c-name">Your name</label>
        <input id="c-name" name="name" required autoComplete="name" placeholder="your name" className={inline} />
        , and you can reach me on
        <label className="sr-only" htmlFor="c-phone">Phone or WhatsApp</label>
        <input id="c-phone" name="phone" required type="tel" autoComplete="tel" placeholder="phone / WhatsApp" className={inline} />
        or by email at
        <label className="sr-only" htmlFor="c-email">Email</label>
        <input id="c-email" name="email" type="email" autoComplete="email" placeholder="email" className={inline} />
        . I live in
        <label className="sr-only" htmlFor="c-area">Your area</label>
        <input id="c-area" name="area" placeholder="your area" className={inline} />
        , and I&apos;m curious about
        <label className="sr-only" htmlFor="c-puppy">Puppy you&apos;re interested in (optional)</label>
        <select id="c-puppy" name="puppy" defaultValue="" className={`${inline} cursor-pointer`}>
          <option value="">any puppy (not sure yet)</option>
          {PUPPIES.map((p) => (
            <option key={p.slug} value={p.slug}>
              {puppyTitle(p)} ({p.name ? `${p.breed}, ` : ""}
              {p.gender})
            </option>
          ))}
        </select>
        .
      </div>

      <div className="mt-4">
        <label htmlFor="c-message" className="label">Your message (optional)</label>
        <textarea id="c-message" name="message" rows={4} className="field" />
      </div>

      {/* Honeypot */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="c-website">Website</label>
        <input id="c-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-2xl bg-blush px-4 py-3 text-sm font-semibold" role="alert">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="font-hand text-2xl text-cocoa">with love, a future puppy parent</p>
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" ? "Posting…" : "Post my letter"}
        </button>
      </div>
    </form>
  );
}
