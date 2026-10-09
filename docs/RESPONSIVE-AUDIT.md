# Responsive UI/UX audit — Zaryab Chat House

Audit date: code review + browser check at 320px, 390px, 600px, 768px.

**Verified:** `document.documentElement.scrollWidth > clientWidth` at **320px** (~394 vs 320) and **390px** (~394 vs 390). Primary cause: **header nav + logo in one row**.

---

## P0 — Must fix (broken on phones)

| ID | Area | Issue | Viewports | Notes |
|----|------|--------|-----------|--------|
| R1 | **Header** | Horizontal **overflow** / side scroll | ~320–400px | 6 nav links + long logo; no wrap, no menu drawer; “Visit” clipped |
| R2 | **Header** | **No mobile navigation pattern** | `< md` (~768px) | All links forced in top bar; poor touch targets when cramped |
| R3 | **Global** | `body` allows **horizontal scroll** | When R1 triggers | No `overflow-x: clip` on root; grain overlay unaffected |

---

## P1 — Major UX (readable but awkward / layout risk)

| ID | Area | Issue | Viewports | Notes |
|----|------|--------|-----------|--------|
| R4 | **Hero** | Image `-mb-[18%]` | Mobile `< md` | Pulls plate into next section; can worsen overflow/bleed |
| R5 | **Hero** | **H1 scale** for long name | Small phones | `clamp(3.75rem, …)` + tight `leading-[0.88]` → tall, heavy stack (“Zaryab Chat House”) |
| R6 | **Hero** | CTA grid `grid-cols-2` | Narrow | “Explore Menu” full width OK; Directions/Call tight in half-width cells |
| R7 | **Story** | **Stats `grid-cols-3`** always | `< sm` | “Hours”, “Van Street, Empress Market” crush in 3 narrow columns |
| R8 | **Story** | Background **“Saddar”** `text-[28vw]` | All mobile | Decorative; section has `overflow-x-clip` but worth checking overlap with headline |

---

## P2 — Polish (responsive improvements)

| ID | Area | Issue | Viewports | Notes |
|----|------|--------|-----------|--------|
| R9 | **Visit** | Long **hours** string | Mobile | `text-xl` block, no `max-w` / smaller type on xs |
| R10 | **Visit / Story / FAQ** | **Large H2** + long copy | `< sm` | `text-4xl` headlines wrap heavily (“Find Zaryab Chat House…”) |
| R11 | **Footer** | **Bottom safe area** vs **ActionBar** | Mobile `< md` | `body pb-16`; fixed bar ~56px + safe-area — copyright / last links may sit under bar |
| R12 | **Footer** | Grid **lg:grid-cols-4** | `md`–`lg` | Copyright column alone; uneven on tablet |
| R13 | **ActionBar** | Shown only `md:hidden` | Mobile | Good; ensure footer + last section extra `padding-bottom` |
| R14 | **Menu** | Price row without leader | `< sm` | Dotted leader `hidden` until `sm`; name + price stack OK but less “menu card” feel |
| R15 | **Signature** | Title **text-4xl → md:text-6xl** | Mobile | Large but OK; spacing `gap-14` very tall scroll on small screens |
| R16 | **Gallery** | Masonry **1 → 2 → 3 cols** | OK | Low-res assets look soft full-width (asset issue) |
| R17 | **FAQ** | Long questions in **flex** row with “+” | Narrow | Generally OK; very long lines need `text-balance` / slightly smaller type |
| R18 | **SocialLinks** | “Coming soon” chips | Visit/Footer | `flex-wrap` + `min-h-11` → tall social blocks on mobile |
| R19 | **Header** | Logo **text-xl** + full name | `< sm` | Competes with nav for width; consider shorter mark or icon on xs |

---

## P3 — Nice to have

| ID | Area | Issue | Notes |
|----|------|--------|--------|
| R20 | **RevealHeading** | `overflow-hidden` on animate | Rare clip on very long one-line titles during motion |
| R21 | **Parallax** | Story image motion | Reduced motion respected; OK |
| R22 | **Touch** | Header link `px-2.5` | Below comfortable 44px when not cramped; OK when menu drawer added |
| R23 | **Tablet** | 600px width | No overflow in test; 768px OK |

---

## Suggested fix order (for next implementation pass)

1. **R1–R3:** Mobile header — hamburger + drawer/sheet OR horizontal scroll nav with fade (prefer drawer); `overflow-x: clip` on `html`; shorten nav on xs if needed  
2. **R11, R13:** `pb-safe` on `main` or footer for ActionBar clearance  
3. **R4–R6:** Hero spacing — reduce negative margin on mobile; tune H1 clamp; stack CTAs full-width on xs  
4. **R7:** Story stats → `grid-cols-1 sm:grid-cols-3` or 2+1 layout  
5. **R9–R10, R17:** Typography scale `text-3xl sm:text-4xl` on long headings; hours `text-base sm:text-xl`  
6. **R12, R18:** Footer grid simplification; compact social pending state  

---

## Test matrix (after fixes)

| Width | Device class | Check |
|-------|----------------|-------|
| 320 | iPhone SE | No horizontal scroll; menu opens; footer visible above bar |
| 390 | iPhone 14 | Header + hero |
| 600 | Large phone / small tablet | Header (drawer closed) |
| 768 | iPad | Desktop nav OR drawer breakpoint decision |
| 1024+ | Desktop | No ActionBar; full nav |

---

*Status: listed only — fixes not applied in this pass.*
