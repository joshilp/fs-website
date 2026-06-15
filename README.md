# Falcon & Spanish Fiesta Resorts — Website

Website for Falcon Resort and Spanish Fiesta Resort, Osoyoos BC.
Built with SvelteKit, Tailwind CSS, and `@sveltejs/enhanced-img`. Deployed as a static site (no server required) — runs on Tera-Byte or any static host.

---

## Quick start

```sh
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173). The port may shift if 5173 is in use — check the terminal output.

---

## Dev commands

| Command | What it does |
|---|---|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build static site to `build/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm check` | TypeScript + Svelte type checking |
| `pnpm lint` | ESLint + Prettier checks |
| `pnpm format` | Auto-format all files |

### Content scripts

| Command | What it does |
|---|---|
| `pnpm products:copy` | Regenerate all 21 `product.yaml` files from the master script |
| `pnpm photos:apply` | Copy photos from `.dev-photos/` into product folders using `.dev/photo-mapping.json` |
| `pnpm ota:worksheet` | Regenerate `.dev/OTA-WORKSHEET.md` (unit counts + OTA descriptions) |
| `pnpm products:scaffold` | Initial scaffold — only needed when adding new product slugs |

**Full content refresh order:** `pnpm products:copy` → `pnpm photos:apply` → `pnpm ota:worksheet` → `pnpm build`

---

## Deploying to Tera-Byte

1. Run `pnpm build` — produces a `build/` folder of static files
2. Upload the contents of `build/` to `public_html` on Tera-Byte via Virtualmin
3. Replace the old site files — email, DNS, and Virtualmin are untouched

No server runtime needed. The site is plain HTML/CSS/JS after the build.

---

## Project structure

```
content/
  falcon/
    categories.yaml              ← Category headings + intro text for /falcon/rooms
    {slug}/product.yaml          ← One file per room type — copy, beds, features, photos
  spanish/
    categories.yaml
    {slug}/product.yaml

inventory/
  falcon-rooms.tsv               ← Maps physical room numbers → product slug
  spanish-rooms.tsv

scripts/
  update-product-copy.mjs        ← Writes product.yaml files from master copy data
  apply-product-photos.mjs       ← Copies .dev-photos/ files into product image folders
  generate-ota-worksheet.mjs     ← Builds .dev/OTA-WORKSHEET.md
  scaffold-products.mjs          ← Initial scaffold (rarely needed)

src/
  lib/
    config.ts                    ← Property data: address, phone, geo, amenities, OTA links
    data/
      products.ts                ← Build-time loader: reads YAML + images + TSV
      faq.ts                     ← FAQ questions and answers
      guides.ts                  ← Area guide article index
    components/
      BookingLinks.svelte        ← OTA booking buttons (Booking.com / Expedia)
      GuideLayout.svelte         ← Shared layout for area guide articles
    assets/
      images/                    ← All site images (see images/README.md)
  routes/
    +layout.svelte               ← Site-wide nav, footer, JSON-LD schema
    +page.svelte                 ← Homepage (portal for both properties)
    falcon/                      ← Falcon Resort pages
      +page.svelte               ← Falcon home
      rooms/                     ← Falcon rooms (reads from content/falcon/)
      gallery/
      location/
      faq/
      contact/
    spanish/                     ← Spanish Fiesta Resort pages (same structure)
    rooms/                       ← Shared rooms overview (both properties)
    gallery/
    location/
    faq/
    contact/
    guides/                      ← Area guide index + articles
    sitemap.xml/                 ← Auto-generated sitemap

.dev/
  COPY-STANDARDS.md              ← Rules for writing product copy
  OTA-WORKSHEET.md               ← Generated: OTA descriptions + unit counts per product
  photo-mapping.json             ← Maps product slugs → source photo filenames
  image map.txt                  ← Source notes for photo assignments
  images-GUIDE.md                ← Photo shoot checklist
  online_setup.md                ← Guide: moving from Tera-Byte to Cloudflare
  GBP-GUIDE.md                   ← Google Business Profile setup guide

.dev-photos/                     ← Raw photos from shoots (gitignored — stays local)
  Falcon/
  Spanish/
```

---

## Room products

Room types ("products") are the unit guests book — not individual room numbers. Physical room numbers map to products via `inventory/*.tsv`.

**Each product lives in `content/{property}/{slug}/`:**

```
content/falcon/retro-suite-2-queens-kitchen/
  product.yaml       ← name, beds, features, descriptions, photos, OnRes URL
```

**`product.yaml` fields:**

```yaml
slug: retro-suite-2-queens-kitchen
name: "Retro Suite - 2 Queens + Kitchen"
category: retro          # groups cards on rooms page
categoryLabel: Retro
beds:
  queens: 2
  doubles: 0
  kitchen: full
sleeps: 4
features:
  - 2 Queen Beds
  - Full Kitchen
  - Air Conditioning
  - TV
description:
  short: "One-liner for teasers."
  website: "2–3 sentences shown on the rooms page card."
  ota: "4–8 sentences — paste directly into Booking.com / Expedia room description."
photos:
  cover: IMG_9498.jpg    # source filename in .dev-photos/Falcon/
  gallery:
    - IMG_9505.jpg
booking:
  onres: ""              # OnRes deep link — fill when ready
sortOrder: 1
```

Edit copy and photos in the YAML, run `pnpm build` — the site updates automatically. No code changes needed.

**Falcon — 8 products:** Retro Suite, Retro Family Suite (2 Doubles), Retro Family Suite (1Q+2D), Retro Studio, Beachside Studio, Beachside Family Suite, Beachside Suite, Beachfront Suite.

**Spanish — 13 products:** Beachfront Studio, Beachside Family Suite, Family Suite, Studio (4 variants), Two Bedroom Suite, Townside Studio (3 variants), Family Suite with Balcony.

---

## Updating product copy

Edit `content/{property}/{slug}/product.yaml` directly — or run `pnpm products:copy` to regenerate from the master script at `scripts/update-product-copy.mjs`.

See `.dev/COPY-STANDARDS.md` for copy rules (feature list conventions, OTA closing block, tone).

---

## Updating product photos

**Quick swap (single photo):**
1. Replace `src/lib/assets/images/{property}/products/{slug}/cover.jpg` with the new file
2. Run `pnpm build`

**Batch assignment from `.dev-photos/`:**
1. Edit `.dev/photo-mapping.json` — set source filenames per product
2. Run `pnpm photos:apply`
3. Run `pnpm build`

See `src/lib/assets/images/README.md` for the full folder layout and product table.

---

## Updating property data

All property-level data (address, phone, geo coordinates, amenities, OTA links) lives in one file:

**`src/lib/config.ts`**

Changes flow automatically to nav, footer, contact page, location page, and JSON-LD schema.

**After Google Business Profile is verified**, update these three fields in `config.ts`:
- `properties.falcon.mapEmbedUrl`
- `properties.spanish.mapEmbedUrl`
- `site.mapEmbedUrl` (zoomed-out view showing both properties)

---

## OTA booking links (property level)

Once you have listing URLs, paste them into `src/lib/config.ts`:

```ts
booking: {
  bookingCom: 'https://www.booking.com/hotel/ca/falcon-resort.html',
  expedia: 'https://www.expedia.ca/Osoyoos-Hotels-Falcon-Resort.h9064558.Hotel-Information'
}
```

Booking.com and Expedia buttons appear on rooms and contact pages automatically. Leave a field as `''` and that button stays hidden.

**For room-level booking (OnRes):** paste the deep link into `booking.onres` in each `product.yaml`. The "Book Online" button on that product's card appears automatically once the field is non-empty.

See `.dev/OTA-WORKSHEET.md` for the full list of OTA descriptions and unit counts per product.

---

## Adding a FAQ question

Open `src/lib/data/faq.ts` and add to the array:

```ts
{
  question: 'Your question here?',
  answer: 'Your answer here.'
}
```

Updates the FAQ page and FAQPage schema markup automatically.

---

## Adding an area guide article

**Step 1 — Add metadata** to `src/lib/data/guides.ts`:

```ts
{
  slug: 'your-article-slug',
  title: 'Your Article Title',
  description: 'One or two sentences for the card and meta description.',
  publishedAt: '2026-06-01',
  tags: ['osoyoos'],
  readingTimeMinutes: 5
}
```

**Step 2 — Create the page** at `src/routes/guides/your-article-slug/+page.svelte`:

```svelte
<script lang="ts">
  import GuideLayout from '$lib/components/GuideLayout.svelte';
  import { guides } from '$lib/data/guides.js';
  const guide = guides.find((g) => g.slug === 'your-article-slug')!;
</script>

<GuideLayout {guide}>
  <p>Your content here.</p>
  <h2>Section</h2>
  <p>Section content.</p>
</GuideLayout>
```

SEO meta, schema markup, prose styling, booking CTA, guide index entry, and sitemap entry all happen automatically.

---

## Launch checklist

See `.dev/online_setup.md` (full guide) and `.dev/online_setup-PRINT.md` (checklist). Short version:

1. `pnpm build` → upload `build/` to Tera-Byte `public_html` via Virtualmin
2. Set up Google Business Profiles for both properties
3. Update `mapEmbedUrl` fields in `config.ts` after GBP verification
4. Add Booking.com / Expedia URLs to `config.ts` once listings are live
5. Add OnRes deep links to each `product.yaml` once OnRes is configured
