# Falcon & Spanish Fiesta Resorts — Website

Website for Falcon Resort and Spanish Fiesta Resort, Osoyoos BC.
Built with SvelteKit, Tailwind CSS, and `@sveltejs/enhanced-img`.

---

## Development

```sh
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173). The port may shift if 5173 is in use — check the terminal output.

## Building

```sh
pnpm build
pnpm preview   # preview the production build locally
```

---

## Project Structure

```
src/
  lib/
    config.ts           ← Property data, addresses, phones, geo coords, schema builder
    data/
      faq.ts            ← FAQ questions and answers
      guides.ts         ← Area guide article index
    components/
      GuideLayout.svelte  ← Shared layout for all area guide articles
    assets/
      images/           ← Site images (hero, gallery, rooms)
      favicon.svg
  routes/
    +layout.svelte      ← Site-wide nav, footer, schema
    +page.svelte        ← Homepage
    rooms/              ← Rooms page
    gallery/            ← Gallery page
    location/           ← Location & things to do
    contact/            ← Contact / book page
    faq/                ← FAQ page
    guides/             ← Area guide index + articles
    sitemap.xml/        ← Auto-generated sitemap
```

---

## Updating Property Data

All property information (addresses, phone numbers, geo coordinates) lives in one place:

**`src/lib/config.ts`**

Edit it there and the change flows through to the nav, footer, contact page, location page, schema markup, and anywhere else it is used. Do not update phone numbers or addresses in individual page files.

When Google Business Profile is verified, update `site.mapEmbedUrl` in `config.ts` with the proper embed URL that shows both property pins.

---

## Adding a New FAQ Question

Open **`src/lib/data/faq.ts`** and add an object to the `faq` array:

```ts
{
  question: 'Your question here?',
  answer: 'Your answer here. Plain text only — this goes into schema markup.'
}
```

The FAQ page and the FAQPage schema (which powers Google rich results) both update automatically. No other files need to be touched.

---

## Adding a New Area Guide Article

Two steps — that's it.

### Step 1 — Add the metadata

Open **`src/lib/data/guides.ts`** and add an entry to the `guides` array:

```ts
{
  slug: 'your-article-slug',          // used in the URL: /guides/your-article-slug
  title: 'Your Article Title',
  description: 'One or two sentences for the meta description and guide card preview.',
  publishedAt: '2026-06-01',          // ISO date: YYYY-MM-DD
  tags: ['osoyoos', 'relevant-tag'],
  readingTimeMinutes: 5               // rough estimate
}
```

### Step 2 — Create the article file

Create a new folder and page file:

```
src/routes/guides/your-article-slug/+page.svelte
```

Use this template — paste it in and replace the content:

```svelte
<script lang="ts">
  import GuideLayout from '$lib/components/GuideLayout.svelte';
  import { guides } from '$lib/data/guides.js';
  const guide = guides.find((g) => g.slug === 'your-article-slug')!;
</script>

<GuideLayout {guide}>
  <p>Your opening paragraph.</p>

  <h2>Section Heading</h2>
  <p>Section content. Use plain HTML inside GuideLayout.</p>

  <h2>Another Section</h2>
  <ul>
    <li>List item</li>
    <li>List item</li>
  </ul>
</GuideLayout>
```

**That's all.** The following happen automatically:
- SEO meta title and description
- Article schema markup (`@type: Article`)
- Prose styling via Tailwind Typography
- "Book Your Stay" CTA at the bottom
- Entry in the guides index page
- Entry in the sitemap

### Content tips

- Aim for 500–900 words of genuine, useful information
- Use `<h2>` for main sections, `<h3>` for sub-sections
- Put the target keyword in the title and naturally in the first paragraph
- Mention the resort once at the end — the `GuideLayout` CTA handles the booking prompt, so keep the article itself informational
- `<strong>` for emphasis, `<ul>` / `<ol>` for lists — all styled automatically by Tailwind Typography

---

## Images

Source images live in `src/lib/assets/images/`. They are processed at build time by `@sveltejs/enhanced-img` — automatically converted to WebP/AVIF and served with proper `srcset`. No CDN required.

When new photos are ready, replace the files in that folder. The filenames the site expects:

| File | Used on |
|---|---|
| `hero.jpg` | Homepage hero, location page header |
| `gallery-1.jpg` — `gallery-6.jpg` | Gallery page, homepage gallery teaser |
| `room-placeholder.jpg` | Rooms page header and room cards |

Replace any of these with better photos when available — same filename, same folder.

---

## Dev Commands

| Command | What it does |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm check` | TypeScript and Svelte type checking |
| `pnpm lint` | Run ESLint and Prettier checks |
| `pnpm format` | Auto-format all files |
