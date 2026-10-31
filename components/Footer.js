import Link from "next/link";
import { SITE, LOGO, wa } from "@/lib/data";

const EXPLORE = [
  { href: "/puppies", label: "Available puppies" },
  { href: "/gone-home", label: "Gone home" },
  { href: "/happy-families", label: "Happy families" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/how-it-works#delivery", label: "Delivery & collection" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Visit & contact" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink pb-24 pt-16 text-cream lg:pb-10">
      <div className="wrap grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-hand text-4xl text-apricot">Home, at last.</p>
          <p className="mt-3 max-w-sm text-cream/80">
            TeddyPups U.A.E. is a Dubai-based brand specializing in miniature puppies, offering premium services and
            worldwide shipping.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold">Explore</h3>
          <ul className="mt-4 space-y-2 text-cream/80">
            {EXPLORE.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-apricot">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold">Say hello</h3>
          <ul className="mt-4 space-y-2 text-cream/80">
            <li>
              <a href={wa()} target="_blank" rel="noopener noreferrer" className="hover:text-apricot">
                WhatsApp {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-apricot">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.location}</li>
          </ul>
          <ul className="mt-5 flex gap-4 text-sm font-semibold">
            <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-apricot">Instagram</a></li>
            <li><a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-apricot">TikTok</a></li>
            <li><a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-apricot">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="wrap mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-sm text-cream/70 sm:flex-row">
        <span className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="" width="24" height="24" className="h-6 w-6 object-contain" />
          © 2026 {SITE.name}
        </span>
        <span className="font-hand text-xl text-apricot">{SITE.tagline}</span>
      </div>
    </footer>
  );
}
