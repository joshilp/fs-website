# Images

All site images live here. They are processed at build time by `@sveltejs/enhanced-img` — automatically converted to WebP/AVIF and served with proper `srcset`. No CDN required.

---

## Folder structure

```
images/
  hero.jpg                          ← Homepage hero (shared, both properties)
  about-bg.jpg                      ← Homepage "About" section watermark
  cta-bg.jpg                        ← Homepage "Ready to book?" banner background
  gallery-1.jpg … gallery-6.jpg     ← Homepage + shared /gallery page

  falcon/
    hero.jpg                        ← Falcon homepage hero
    about-bg.jpg                    ← Falcon about section watermark
    cta-bg.jpg                      ← Falcon "Call to Book" banner background
    rooms-bg.jpg                    ← Falcon rooms page header
    faq-bg.jpg                      ← Falcon FAQ page header
    gallery/
      gallery-1.jpg … gallery-6.jpg ← Falcon /gallery page
    products/
      retro-suite-2-queens-kitchen/
        cover.jpg                   ← Card image on /falcon/rooms
        gallery/
          01.jpg, 02.jpg …          ← Extra photos for OTA listings
      retro-family-suite-2-doubles-kitchen/
        cover.jpg
      … (one folder per room type)

  spanish/
    (same structure as falcon/)
```

---

## Swapping a product photo (room type image)

The simplest way — no scripts needed:

1. Prepare your new photo (landscape, at least 1200px wide, JPG)
2. Rename it `cover.jpg`
3. Drop it into the right product folder, e.g.:
   `src/lib/assets/images/falcon/products/retro-suite-2-queens-kitchen/cover.jpg`
4. Run `pnpm build` — done

The old file is replaced and the site picks up the new photo automatically.

To add gallery extras for OTA use, drop numbered files into the `gallery/` subfolder:
`src/lib/assets/images/falcon/products/retro-suite-2-queens-kitchen/gallery/01.jpg`

---

## Batch photo assignment (when working with .dev-photos)

If you have a batch of raw photos in `.dev-photos/Falcon/` or `.dev-photos/Spanish/`:

1. Open `.dev/photo-mapping.json`
2. Set the source filename for each product:
   ```json
   "retro-suite-2-queens-kitchen": {
     "cover": "IMG_9498.jpg",
     "gallery": ["IMG_9505.jpg"]
   }
   ```
3. Run `pnpm photos:apply` — copies and renames files into the correct product folders
4. Run `pnpm build`

The `.dev-photos/` folder is gitignored (originals stay on your machine, not in the repo).

---

## Falcon products (8 room types)

| Folder | Room type |
|---|---|
| `retro-suite-2-queens-kitchen` | Retro Suite - 2 Queens + Kitchen |
| `retro-family-suite-2-doubles-kitchen` | Retro Family Suite - 2 Doubles + Kitchen |
| `retro-family-suite-1-queen-2-doubles-kitchen` | Retro Family Suite - 1 Queen + 2 Doubles + Kitchen |
| `retro-studio-1-queen-kitchen` | Retro Studio - 1 Queen + Kitchen |
| `beachside-studio-1-queen` | Beachside Studio - 1 Queen |
| `beachside-family-suite-1-queen-1-double` | Beachside Family Suite - 1 Queen + 1 Double |
| `beachside-suite-2-doubles-kitchen` | Beachside Suite - 2 Doubles + Kitchen |
| `beachfront-suite-2-queens-kitchen` | Beachfront Suite - 2 Queens + Kitchen |

## Spanish products (13 room types)

| Folder | Room type |
|---|---|
| `beachfront-studio-1-queen-kitchen` | Beachfront Studio - 1 Queen + Kitchen |
| `beachside-family-suite-2-queens-kitchen` | Beachside Family Suite - 2 Queens + Kitchen |
| `family-suite-2-queens-kitchen` | Family Suite - 2 Queens + Kitchen |
| `studio-2-queens-kitchen` | Studio - 2 Queens + Kitchen |
| `studio-1-queen-kitchen` | Studio - 1 Queen + Kitchen |
| `two-bedroom-suite-2-queens-kitchen` | Two Bedroom Suite - 2 Queens + Kitchen |
| `studio-suite-2-queens-kitchen` | Studio Suite - 2 Queens + Kitchen |
| `studio-1-queen` | Studio - 1 Queen |
| `studio-2-queens` | Studio - 2 Queens |
| `townside-studio-2-queens` | Townside Studio - 2 Queens |
| `townside-studio-1-queen` | Townside Studio - 1 Queen |
| `family-suite-2-queens-kitchen-private-balcony` | Family Suite - 2 Queens + Kitchen + Private Balcony |
| `townside-studio-2-queens-kitchen` | Townside Studio - 2 Queens + Kitchen |

---

## Photo tips

- Landscape (horizontal) orientation for everything
- Minimum 1200px wide — `enhanced-img` handles resizing and format conversion
- Shoot from the doorway or corner of the room with all lights on and curtains open
- One cover shot per room type is enough; gallery extras are for OTA listings
- Use the same photos on Booking.com / Expedia — the `gallery/` folder is your OTA photo set
