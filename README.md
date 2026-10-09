# Zaryab Chat House

Website for **Zaryab Chat House** — late-night chaat on Van Street, Empress Market, Saddar, Karachi (since 1990).

## Setup

```bash
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_SITE_URL to your live domain when deploying
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## SEO

- Central config: `data/seo.ts` (title, description, keywords, geo, OG image path).
- FAQ copy: `data/faq.ts`. Structured data: `lib/structured-data.ts`.
- Indexing stays **off** on `example.com`, `localhost`, preview deploys, and `npm run dev`. On the real domain, set `NEXT_PUBLIC_SITE_URL` and deploy a production build.

## Content updates

| What | Where |
|------|--------|
| Business name, hours, maps, phone, WhatsApp, **social URLs** | `data/business.ts` |
| Menu plates, prices, descriptions | `data/menu.ts` |
| Story & owner copy | `data/story.ts` |
| Gallery photos | `data/gallery.ts` + `public/images/` |

Social links (Instagram, Facebook): set `instagram` and `facebook` to `{ status: "verified", value: "https://..." }` in `data/business.ts`. Until then the site shows “Coming soon”.

## Scripts

- `npm run dev` — development
- `npm run build` — production build
- `npm run start` — run production server
