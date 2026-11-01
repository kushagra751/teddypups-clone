"use client";

import { useState } from "react";
import { wa } from "@/lib/data";

// Used on puppy detail pages. `subject` is e.g. "Max (Maltipoo)".
export default function EnquiryForm({ slug, subject }) {
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.name?.trim() || !data.phone?.trim()) {
      setError("Please add your name and phone or WhatsApp number.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, puppy: slug, source: "puppy-page" }),
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
      <div className="rounded-3xl bg-sage p-8 text-center" role="status">
        <p className="font-hand text-4xl text-cocoa">Thank you!</p>
        <p className="mt-2">Your letter is on its way. Our team will get back to you promptly.</p>
        <a
          href={wa(`Hello! I am interested in ${subject}. Please share more details and available photos.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp mt-5"
        >
          Message us on WhatsApp too
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-3xl border-2 border-ink bg-white p-6 shadow-pop sm:p-8">
      <div>
        <label htmlFor="name" className="label">Your name *</label>
        <input id="name" name="name" required autoComplete="name" className="field" />
      </div>
      <div>
        <label htmlFor="phone" className="label">Phone or WhatsApp *</label>
        <input id="phone" name="phone" required type="tel" autoComplete="tel" placeholder="+971 50 123 4567" className="field" />
        <p className="mt-1 text-xs text-cocoa/70">With country code, e.g. +971 50 123 4567</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="label">Email (optional)</label>
          <input id="email" name="email" type="email" autoComplete="email" className="field" />
        </div>
        <div>
          <label htmlFor="area" className="label">Your area (optional)</label>
          <input id="area" name="area" placeholder="e.g. Dubai Marina" className="field" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="label">Message (optional)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          defaultValue={`Hi! I'd love to know more about ${subject}.`}
          className="field"
        />
      </div>

      {/* Honeypot: real users never see or fill this */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="rounded-2xl bg-blush px-4 py-3 text-sm font-semibold text-ink" role="alert">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
