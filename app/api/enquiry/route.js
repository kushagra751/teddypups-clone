import { NextResponse } from "next/server";

// Simple enquiry endpoint. Validates input, drops bot submissions (honeypot),
// and logs the enquiry. Swap the console.log for an email / DB / webhook call in production.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const clean = (v, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

  // Honeypot: bots fill the hidden "website" field. Pretend success, store nothing.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const enquiry = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 160),
    area: clean(body.area, 120),
    puppy: clean(body.puppy, 120),
    message: clean(body.message, 2000),
    source: clean(body.source, 40),
    receivedAt: new Date().toISOString(),
  };

  if (!enquiry.name || !enquiry.phone) {
    return NextResponse.json({ ok: false, error: "Name and phone are required." }, { status: 400 });
  }
  if (!/^[+\d][\d\s().-]{6,}$/.test(enquiry.phone)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (enquiry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  console.log("[enquiry]", JSON.stringify(enquiry));
  return NextResponse.json({ ok: true });
}
