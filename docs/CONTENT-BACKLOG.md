# Zaryab Chat House — content backlog

Yeh list un cheezon ki hai jo abhi **todo**, **placeholder**, ya **coming soon** hain. Har step ke liye owner se kya data chahiye aur code mein kahan update hoga — woh neeche hai.

**Legend:** `todo` = `data/business.ts` / `data/menu.ts` / `data/story.ts` mein `status: "verified"` karna.

---

## Step 1 — Visit & contact (sab se zyada visible)

| # | User ko kya dikhta hai | Chahiye kya | File / field | Status |
|---|------------------------|-------------|--------------|--------|
| 1.1 | Visit → **Hours** → badge "Coming soon" | Roz ka time, e.g. `Mon–Sat 11am–9pm` | `business.hours` in `data/business.ts` | `todo` |
| 1.2 | Mobile ActionBar → **WhatsApp** → "soon" (disabled) | WhatsApp number (digits only, country code ke bina), confirm ke number par WhatsApp hai | `business.whatsapp` | `todo` |
| 1.3 | Directions ab address search se jaate hain | Official Google Maps **place URL** (pin exact ho) | `business.mapsPlaceUrl` | `todo` |

**Note:** Phone already verified — Visit par "Coming soon" phone ke liye nahi aata.

---

## Step 2 — Story section

| # | User ko kya dikhta hai | Chahiye kya | File / field | Status |
|---|------------------------|-------------|--------------|--------|
| 2.1 | Story paragraphs | Saddar/Empress Market **generic** copy hai; owner ki official history nahi | `story.copyStatus`, `story.paragraphs`, `story.headline`, `story.eyebrow` | `copyStatus: "placeholder"` |
| 2.2 | "The owner's own story **Coming soon**" | Owner ki apni kahani (2–4 paragraphs, Roman Urdu ya English) | `story.ownerStory` | `todo` |

---

## Step 3 — Menu (teen items)

Har item (`chaat`, `pani-puri`, `kathiyawari-chana-piyala`) par yeh fields abhi incomplete hain jahan `todo` hai:

| # | UI | Chahiye kya | File / field | All 3 items |
|---|-----|-------------|--------------|-------------|
| 3.1 | Menu line → **"Price coming soon"** | Price PKR (number) | `item.price` | `todo` |
| 3.2 | Menu line → short text ab **tagline** hai | Asli description / ingredients | `item.description` | `todo` |
| 3.3 | Abhi screen par nahi | Urdu name | `item.nameUrdu` | `todo` |
| 3.4 | Signature → **"Photography coming soon"** (sirf Pani Puri) | Real pani puri / golgappa photo + alt text | `pani-puri` → `item.photo` | `todo` |
| 3.5 | Abhi UI mein use nahi | `available` / `unavailable` / stock | `item.availability` | `"unknown"` |
| 3.6 | Generic | Better tagline (optional jab description aa jaye) | `item.tagline` | placeholder copy |

**Photos done:** Chaat (`chaat-plate5`), Kathiyawari Chana Piyala (`chaat-plate4`).

---

## Step 4 — Gallery (categories)

Gallery ab **7 photos** se bhari hai; yeh categories abhi **khali** hain (future photos):

| Category | Chahiye kya |
|----------|-------------|
| `storefront` | Stall / shop front, signage |
| `atmosphere` | Rush, evening lights, customers (permission ke sath) |
| `location` | Empress Market / Van Street context shot |

Add karte waqt: `data/gallery.ts` → `galleryItems` array.

---

## Step 5 — Business meta (data hai, UI abhi nahi)

Yeh `data/business.ts` mein `todo` hain — implement karte waqt Footer / Header / naya section add karna hoga:

| Field | Chahiye kya | Suggested UI step |
|-------|-------------|-------------------|
| `instagram` | Profile URL | Footer social links |
| `facebook` | Page URL | Footer social links |
| `foundedYear` | e.g. `2015` | Story details ya Footer |
| `ordering` | `true`/`false` — phone/WhatsApp order? | Visit ya Menu CTA |
| `delivery` | `true`/`false` | Visit note |

---

## Step 6 — SEO & deploy

| # | Issue | Chahiye kya | File |
|---|-------|-------------|------|
| 6.1 | Production URL | Live domain | `NEXT_PUBLIC_SITE_URL` env + `siteUrl` in `data/business.ts` |
| 6.2 | JSON-LD minimal | Hours verify hone par `openingHours` schema add karna optional | `components/JsonLd.tsx` |
| 6.3 | Open Graph | Hero image set hai; live URL ke baad share test | `app/layout.tsx` |

---

## Step 7 — Future phases (code comments / CSS)

| Item | Notes |
|------|--------|
| Urdu UI | Font `--font-urdu` in `globals.css`; `nameUrdu` + `lang="ur"` phase |
| Hero 3D | `data-hero-slot` on Hero — optional canvas; ab real photo use ho rahi hai |
| Image quality | Current assets ~200–370px — high-res replacements same paths under `public/images/` |

---

## Quick checklist (owner se ek baar mein)

- [ ] Opening hours (text)
- [ ] WhatsApp number (active?)
- [ ] Google Maps place link
- [ ] Owner story + official history (verify generic story replace?)
- [ ] Menu: 3 prices + 3 descriptions (+ Urdu names agar chahiye)
- [ ] Pani puri photo
- [ ] Storefront / location / atmosphere photos
- [ ] Instagram / Facebook URLs
- [ ] Founded year, ordering, delivery yes/no
- [ ] Production website URL

---

## Suggested implementation order

1. Step 1 (hours, WhatsApp, Maps URL)  
2. Step 3 prices + descriptions  
3. Step 2 owner story  
4. Step 3 pani puri photo  
5. Step 4 extra gallery  
6. Step 5 social + ordering/delivery UI  
7. Step 6 deploy env + JSON-LD  
8. Step 7 Urdu / polish  

Har step complete hone par is file mein **Status** column update karein ya checkbox tick karein.
