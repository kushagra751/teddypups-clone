import { PUPPIES, GONE_HOME } from "@/lib/data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://teddypups-clone.onrender.com";

export default function sitemap() {
  const pages = ["", "/puppies", "/happy-families", "/how-it-works", "/faq", "/contact", "/gone-home"];
  const now = new Date();
  return [
    ...pages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      priority: path === "" ? 1 : 0.7,
    })),
    ...[...PUPPIES, ...GONE_HOME].map((p) => ({
      url: `${SITE_URL}/puppies/${p.slug}`,
      lastModified: now,
      priority: 0.6,
    })),
  ];
}
