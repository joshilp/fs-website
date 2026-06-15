# Photo Checklist — Room Products
## Falcon Resort & Spanish Fiesta Resort

> One cover photo per **product** (room type), not per physical room number.
> Shoot from one representative unit of each type — all rooms of the same product look the same to guests.
>
> Drop each photo at the path listed below, replacing the placeholder `cover.jpg`.
> Run `pnpm build` and the site picks it up automatically.

**Total product shots needed: 21**
- 8 Falcon products
- 13 Spanish Fiesta products

**Tips**
- Shoot landscape (horizontal), from doorway or corner to show maximum space
- Turn on all lights, open curtains
- Phone camera is fine — aim for at least 1200px wide
- Use the same photos for OTA listings (Booking.com, Expedia, OnRes)

---

## FALCON RESORT — 8 products

### Retro
- [ ] **`falcon/products/retro-suite-2-queens-kitchen/cover.jpg`** — Retro Suite: 2 queens + kitchen
- [ ] **`falcon/products/retro-family-suite-2-doubles-kitchen/cover.jpg`** — Retro Family Suite: 2 doubles + kitchen
- [ ] **`falcon/products/retro-family-suite-1-queen-2-doubles-kitchen/cover.jpg`** — Retro Family Suite: 1 queen + 2 doubles + kitchen
- [ ] **`falcon/products/retro-studio-1-queen-kitchen/cover.jpg`** — Retro Studio: 1 queen + kitchen

### Beachside
- [ ] **`falcon/products/beachside-studio-1-queen/cover.jpg`** — Beachside Studio: 1 queen
- [ ] **`falcon/products/beachside-family-suite-1-queen-1-double/cover.jpg`** — Beachside Family Suite: 1 queen + 1 double
- [ ] **`falcon/products/beachside-suite-2-doubles-kitchen/cover.jpg`** — Beachside Suite: 2 doubles + kitchen

### Beachfront
- [ ] **`falcon/products/beachfront-suite-2-queens-kitchen/cover.jpg`** — Beachfront Suite: 2 queens + kitchen

---

## SPANISH FIESTA RESORT — 13 products

### Beachfront
- [ ] **`spanish/products/beachfront-studio-1-queen-kitchen/cover.jpg`** — Beachfront Studio: 1 queen + kitchen

### Beachside
- [ ] **`spanish/products/beachside-family-suite-2-queens-kitchen/cover.jpg`** — Beachside Family Suite: 2 queens + kitchen

### Family Suite
- [ ] **`spanish/products/family-suite-2-queens-kitchen/cover.jpg`** — Family Suite: 2 queens + kitchen
- [ ] **`spanish/products/family-suite-2-queens-kitchen-private-balcony/cover.jpg`** — Family Suite: 2 queens + kitchen + private balcony

### Studio
- [ ] **`spanish/products/studio-2-queens-kitchen/cover.jpg`** — Studio: 2 queens + kitchen
- [ ] **`spanish/products/studio-1-queen-kitchen/cover.jpg`** — Studio: 1 queen + kitchen
- [ ] **`spanish/products/studio-suite-2-queens-kitchen/cover.jpg`** — Studio Suite: 2 queens + kitchen
- [ ] **`spanish/products/studio-1-queen/cover.jpg`** — Studio: 1 queen
- [ ] **`spanish/products/studio-2-queens/cover.jpg`** — Studio: 2 queens

### Two Bedroom
- [ ] **`spanish/products/two-bedroom-suite-2-queens-kitchen/cover.jpg`** — Two Bedroom Suite: 2 queens + kitchen

### Townside
- [ ] **`spanish/products/townside-studio-2-queens/cover.jpg`** — Townside Studio: 2 queens
- [ ] **`spanish/products/townside-studio-1-queen/cover.jpg`** — Townside Studio: 1 queen
- [ ] **`spanish/products/townside-studio-2-queens-kitchen/cover.jpg`** — Townside Studio: 2 queens + kitchen

---

## Property & site photos (unchanged)

These are separate from product photos — used on home pages, galleries, and section backgrounds.

### Shared site (falcon-spanish.com)
- [ ] **`hero.jpg`** — Main full-screen hero on home page
- [ ] **`about-bg.jpg`** — Faint watermark behind About section
- [ ] **`cta-bg.jpg`** — "Ready to book?" banner background
- [ ] **`gallery-1.jpg`** through **`gallery-6.jpg`** — Shared gallery teaser

### Falcon property pages
- [ ] **`falcon/hero.jpg`** — Falcon home page hero
- [ ] **`falcon/about-bg.jpg`**, **`falcon/cta-bg.jpg`**, **`falcon/rooms-bg.jpg`**, **`falcon/faq-bg.jpg`** — Section backgrounds
- [ ] **`falcon/gallery/gallery-1.jpg`** through **`gallery-6.jpg`** — Falcon gallery

### Spanish Fiesta property pages
- [ ] **`spanish/hero.jpg`** — Spanish Fiesta home page hero
- [ ] **`spanish/about-bg.jpg`**, **`spanish/cta-bg.jpg`**, **`spanish/rooms-bg.jpg`**, **`spanish/faq-bg.jpg`** — Section backgrounds
- [ ] **`spanish/gallery/gallery-1.jpg`** through **`gallery-6.jpg`** — Spanish gallery

All paths are relative to `src/lib/assets/images/`.

---

## Editing copy for website & OTAs

Room descriptions live in `content/{property}/{slug}/product.yaml` — not in this file.

- `description.website` — shown on the rooms page card
- `description.ota` — paste into Booking.com / Expedia listing
- `description.short` — one-liner for teasers

Edit the YAML, rebuild, done. No code changes needed.
