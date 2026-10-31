# TeddyPups U.A.E. — website clone

A clone of https://puppy.instabizweb.com/ built with **Next.js 15 (App Router)** and **Tailwind CSS 3**.

## Pages

| Route | What it does |
| --- | --- |
| `/` | Hero slider, "Meet the pups" grid, two ways to meet, puppy journey + WhatsApp chat mock, trust cards, happy families, FAQ preview, CTA |
| `/puppies` | Available puppies with origin (All / In Dubai / Imported) and breed filters kept in the URL (`?origin=imported&breed=maltipoo`) |
| `/puppies/[slug]` | Puppy detail: photo gallery, specs, WhatsApp link, enquiry form, previous/next pup. Also serves "gone home" puppies |
| `/happy-families` | Testimonial + masonry photo wall |
| `/how-it-works` | Two ways home, promise, delivery & collection, why choose us |
| `/faq` | 9 questions in an accessible accordion |
| `/contact` | Letter-style contact form, details, showroom map link |
| `/gone-home` | Puppies that already found a family |
| `POST /api/enquiry` | Validates enquiries (honeypot + field checks) and logs them |

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

Requires Node 18.18+ (Node 20+ recommended).

## Deploy (Vercel)

1. Push this folder to a GitHub repository.
2. Go to vercel.com → **Add New → Project** → import the repository.
3. Keep the defaults (Framework: Next.js) and click **Deploy**.
4. Copy the live URL for your submission.

## Project structure

```
app/                 routes (layout, pages, api/enquiry)
components/          Header, Footer, HeroSlider, PuppyCard, PuppyBrowser,
                     Gallery, EnquiryForm, ContactForm, FaqList, Img, WhatsAppBar
lib/data.js          all content: puppies, gone-home, photos, FAQs, helpers
```

All content lives in `lib/data.js`, so adding or editing a puppy is a one-object change.

## Notes and known limitations

- **Images are hotlinked** from the reference site's media paths. For a production site, download the images into `public/` and change the `media()` helper in `lib/data.js`. Broken images fall back to a 🐶 placeholder (`components/Img.js`).
- **Origin (Dubai vs Imported)** is only stated on the reference site for Max. For the other puppies it is assumed: Korean teacup lines are "imported", the rest "local".
- **Contact email** is hidden behind Cloudflare protection on the reference site, so `SITE.email` in `lib/data.js` is a placeholder. Replace it.
- **Enquiries** are validated and logged only (`console.log`). Connect an email service, webhook or database in `app/api/enquiry/route.js` to receive them.
- The happy-families wall shows 20 photos; the reference site shows 64.
- Fonts (Fraunces, Caveat, Nunito) load via `next/font/google` at build time.

## Testing checklist

- Filters: change origin and breed, reload the page, confirm the URL state is restored
- Forms: submit empty (error shown), invalid phone/email (error shown), valid (success state)
- Responsive: check 375px, 768px and 1280px widths; mobile menu and bottom WhatsApp/Call bar
- Keyboard: tab through the header, filters, accordion and forms
