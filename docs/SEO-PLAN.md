# Zaryab Chat House — production SEO plan

Local restaurant / street-food stall in Saddar. Goal: Google par **brand + location + “chaat”** searches mein dikhna, Maps/listings ke sath match, rich results jahan possible.

**Current baseline (already in code):**

- Title, meta description, `metadataBase`, canonical `/`
- Open Graph (basic): title, description, image, `en_PK`, `siteName`
- `robots.txt` (allow all) + `sitemap.xml` (homepage only)
- JSON-LD: `FoodEstablishment`, address, phone, hours spec, `hasMap`, `foundingDate`, `sameAs` (when social verified)
- Semantic H1 = business name; sections with H2s
- Skip link, `lang="en"` on `<html>`
- Image `alt` text on Next `<Image>` usage

**Major gaps:** no Twitter cards, no `keywords`/robots meta strategy, no favicon/app icons, no web manifest, no geo coordinates in schema, schema type could be stronger for local (`Restaurant` + `LocalBusiness`), OG image low-res, `siteUrl` often localhost until env set, no Search Console verification hook, no analytics, thin single-page keywords, no FAQ schema, no menu schema, no breadcrumb, images folder not in public glob listing but files exist — **need production assets**.

---

## Phase A — Launch blockers (technical)

| # | Task | Why | Where / how |
|---|------|-----|-------------|
| A1 | **Production domain** | Canonical, sitemap, OG URLs wrong on localhost | `NEXT_PUBLIC_SITE_URL` in `.env` on host (Vercel/CF/etc.) |
| A2 | **HTTPS + www policy** | Duplicate URLs hurt rankings | Pick `https://domain.com` OR `www`; 301 the other; env matches |
| A3 | **Central SEO config** | One source of truth | New `data/seo.ts` or extend `business.ts`: default title template, description, OG image path, geo lat/lng |
| A4 | **Metadata API complete** | Snippets + shares | `app/layout.tsx`: `twitter` card, `robots` index/follow, `category`, `authors`, `icons`, `manifest` link |
| A5 | **Favicon + apple-touch-icon** | Trust + bookmarks | `app/icon.png` or `public/favicon.ico` + `apple-icon.png` (brand mark) |
| A6 | **Web app manifest** | Mobile “Add to Home Screen”, minor SEO signal | `app/manifest.ts` (name, theme_color, icons) |
| A7 | **Sitemap hardening** | Crawl clarity | `sitemap.ts`: absolute `lastModified`, optional hash sections only if separate routes later |
| A8 | **robots production** | Staging hide | Env-based: `noindex` on preview/staging only |

---

## Phase B — Local SEO (highest ROI for this business)

| # | Task | Why | Where / how |
|---|------|-----|-------------|
| B1 | **Google Business Profile** (off-site) | “chaat near me”, Maps pack | Claim **Zaryab Chat House** listing; NAP = website se exact match (name, address, phone) |
| B2 | **Geo in schema** | Local relevance | `data/business.ts`: lat `24.8634375`, lng `67.0303537` (from Maps); JSON-LD `geo` + `GeoCoordinates` |
| B3 | **Stronger schema** | Rich results | `@type`: `["Restaurant","FoodEstablishment","LocalBusiness"]`; `servesCuisine`, `priceRange` (e.g. `₨`), `menu` URL `#menu` |
| B4 | **Menu structured data** | Menu rich results (where supported) | `Menu` / `MenuItem` JSON-LD from `data/menu.ts` |
| B5 | **areaServed** | Saddar / Karachi | Schema + copy: Empress Market, Van Street, Saddar |
| B6 | **Maps URL consistency** | Entity match | `hasMap` + visible “Get directions” → same URL as GBP |
| B7 | **WhatsApp in schema** (optional) | Contact | `contactPoint` with telephone + contactType |

**Off-site checklist (owner):**

- [ ] GBP: hours = 11 PM–1 AM daily, photos, menu prices, website URL
- [ ] GBP categories: e.g. Chaat restaurant / Fast food / Pakistani
- [ ] Reviews encourage (no fake reviews on site)

---

## Phase C — On-page SEO (single-page site)

| # | Task | Why | Where / how |
|---|------|-----|-------------|
| C1 | **Title template** | Brand + primary keyword | e.g. `Zaryab Chat House \| Late Night Chaat, Empress Market Karachi` (≤60 chars tune) |
| C2 | **Meta description** | CTR | Include: since 1990, Saddar, hours, plates Rs 100–250, call CTA (~150–160 chars) |
| C3 | **Keyword map** (natural, no stuffing) | Coverage | Primary: `Zaryab Chat House`, `chaat Empress Market`, `chaat Saddar Karachi`, `late night chaat Karachi`; secondary: Van Street, food authority, pani puri only if actually served |
| C4 | **H2/H3 hierarchy** | Crawl structure | Ensure one H1; section headings include location where natural (Story, Visit) |
| C5 | **FAQ section + FAQPage schema** | People also ask | 5–8 Qs: hours, location, prices, plates difference, parking?, cash only?, etc. |
| C6 | **Internal anchors** | Already `#menu`, `#visit` | Footer/header links; add visible text “chaat menu Karachi” once in body if natural |
| C7 | **Image SEO** | Image search | High-res WebP in `public/images/`; descriptive filenames; `Image` priority on hero; gallery alts include “Zaryab Chat House” sparingly |
| C8 | **Urdu (later)** | Local queries | `hreflang` only when real Urdu page exists; else skip |

---

## Phase D — Social & sharing

| # | Task | Why | Where |
|---|------|-----|--------|
| D1 | **Twitter/X `summary_large_image`** | Share previews | `metadata.twitter` |
| D2 | **OG image 1200×630** | Facebook/WhatsApp preview | Design export `public/og.jpg`; reference in metadata |
| D3 | **Social `sameAs`** | Entity graph | Already wired when `instagram` / `facebook` verified in `business.ts` |

---

## Phase E — Performance & Core Web Vitals

| # | Task | Why | Where |
|---|------|-----|--------|
| E1 | **Replace tiny PNGs** | LCP, clarity | Hero/OG ≥1200px wide assets |
| E2 | **Font subset / display** | LCP | `@fontsource-variable` already; ensure `font-display: swap` if needed |
| E3 | **Motion reduced** | UX + INP | Already `prefers-reduced-motion` partial |
| E4 | **Static export vs SSR** | Site is static — good | Keep `○` static where possible |

---

## Phase F — Trust, crawl, monitoring

| # | Task | Why | Where |
|---|------|-----|--------|
| F1 | **Google Search Console** | Indexing, queries | Verify domain; submit `sitemap.xml` |
| F2 | **Bing Webmaster** (optional) | Extra crawl | Same sitemap |
| F3 | **Analytics** | What works | Plausible / GA4 via env snippet (privacy-friendly choice) |
| F4 | **`humans.txt` / contact** (optional) | Low priority | Skip unless wanted |
| F5 | **Security headers** | Trust | Hosting (Vercel/CF) HSTS, CSP as needed |

---

## Phase G — Content growth (post-launch, optional routes)

Single page is fine for start. Agar ranking expand karni ho:

| # | Idea | URL | SEO benefit |
|---|------|-----|-------------|
| G1 | Menu detail pages | `/menu/single-plate` | Long-tail “chaat plate price Karachi” |
| G2 | Location page | `/visit` or `/empress-market-chaat` | Local landing |
| G3 | Blog (rare updates) | `/news` | Only if owner will post |

**Recommendation:** Launch with **one strong homepage** + GBP; add G1 only if Search Console shows demand.

---

## Implementation order (code tasks)

Do in this order when building:

1. **A1–A2** — domain env (manual deploy)
2. **A3–A4, D1–D2** — `data/seo.ts` + full `metadata` + Twitter + OG image asset
3. **A5–A6** — icons + manifest
4. **B2–B5, B7** — JSON-LD upgrade + menu schema
5. **C1–C5** — copy tune + FAQ component + FAQ schema
6. **C7, E1** — image assets
7. **A8, F1–F3** — staging robots, GSC, analytics (mostly config)

---

## Files to create / touch (dev checklist)

| File | Action |
|------|--------|
| `data/seo.ts` | NEW — titles, descriptions, keywords array, OG path, geo |
| `data/business.ts` | ADD — `geo: { lat, lng }` |
| `app/layout.tsx` | metadata expansion, icons |
| `app/manifest.ts` | NEW |
| `app/icon.png` / `apple-icon.png` | NEW (design) |
| `public/og.jpg` | NEW (1200×630) |
| `components/JsonLd.tsx` | Restaurant + Menu + FAQ graphs |
| `components/Faq.tsx` | NEW section + content in `data/faq.ts` |
| `app/page.tsx` | Mount FAQ |
| `docs/SEO-PLAN.md` | This file — tick items as done |

---

## Success metrics (3–6 months)

- Branded search: “Zaryab Chat House” → #1
- Local: “chaat empress market”, “chaat saddar night” → top 10 (GBP + site)
- Impressions/clicks in Search Console
- Maps direction requests (GBP insights)

---

## Risks / don’ts

- Don’t `noindex` production by mistake
- Don’t use fake reviews or fake ratings in schema
- Don’t change business name spelling away from GBP (**Chat House**)
- Don’t deploy with `NEXT_PUBLIC_SITE_URL=http://localhost:3000`
- Low-res OG image → poor share CTR; fix before marketing

---

## Implementation status

- **Phase A–C (code):** Done — see `data/seo.ts`, `app/layout.tsx`, `app/manifest.ts`, `public/icon.svg`, FAQ section, `lib/structured-data.ts`.
- **Phase D–E:** OG image still uses menu photo (replace with 1200×630 `public/og.jpg` when ready); hi-res food photos still recommended.
- **Phase F:** Google Search Console + analytics — after live domain.
- **Indexing:** Off for `example.com` / localhost until `NEXT_PUBLIC_SITE_URL` is the real domain.

*Last updated: after Phase A–C implementation.*
