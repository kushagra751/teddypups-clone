"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, SITE, LOGO, wa } from "@/lib/data";
import Scallop from "@/components/Scallop";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <div className="bg-ink py-1.5 text-center font-hand text-lg text-peach">{SITE.tagline}</div>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 bg-paper">
        <div className="wrap flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO} alt="" width="36" height="36" className="h-9 w-9 rounded-full border-2 border-ink object-contain" />
            {SITE.short}
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:bg-peach ${
                  isActive(n.href) ? "bg-peach text-ink" : "text-cocoa"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp hidden !py-2 sm:inline-flex">
              WhatsApp us
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="btn-ghost !py-2 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <span aria-hidden="true">🐾</span> Menu
            </button>
          </div>
        </div>
        <Scallop color="#fffaf0" flip />
      </header>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-50 flex flex-col bg-[#e8a548] p-6 lg:hidden" role="dialog" aria-modal="true">
          <div className="flex items-center justify-between">
            <span className="font-hand text-3xl text-ink">where to, friend?</span>
            <button type="button" onClick={() => setOpen(false)} className="btn bg-[#e8a548] text-ink shadow-pop">
              Close
            </button>
          </div>
          <nav className="mt-8 flex flex-1 flex-col gap-2" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded-2xl px-5 py-4 font-display text-2xl font-bold transition hover:bg-[#f0b26a] ${
                  isActive(n.href) ? "text-terracotta" : "text-ink"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a href={wa()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
            WhatsApp us
          </a>
          <a href={SITE.phoneHref} className="mt-3 text-center font-semibold text-ink/70">
            {SITE.phone}
          </a>
        </div>
      )}
    </>
  );
}
