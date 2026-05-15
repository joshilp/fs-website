# Logo & Branding Asset Checklist
## Falcon Resort & Spanish Fiesta Resort

---

## Colors

| Name | Hex | Used For |
|---|---|---|
| Falcon accent | `#9B7A52` | Website — Falcon pages |
| Spanish accent | `#7D2532` | Website — Spanish pages |
| Dark earth | `#3D2B1F` | Dark backgrounds, favicon background |
| Warm cream | `#FAF6EE` | Light backgrounds |

> The Falcon logo uses blue script — this is legacy (physical sign only). The website uses earth tones independently.

---

## Favicon

**What:** "FS" monogram, Playfair Display Bold, white `#FFFFFF` on dark `#3D2B1F` background.

**Create in Affinity:** 512 × 512 px artboard → export PNG with background.

**Generate full set:** Upload to [realfavicongenerator.net](https://realfavicongenerator.net) → download zip.

**Place files in:** `static/` (project root) — replace existing placeholder `favicon.svg`.

Add the generated HTML snippet to `src/app.html` in the `<head>`.

---

## Files to Create

### Source exports (save to `C:\dev\FalconSpanish\brand\source\`)

- [ ] `falcon-logo.svg` — full logo, transparent bg
- [ ] `spanish-logo.svg` — full logo, transparent bg
- [ ] `falcon-icon.svg` — eagle only, no text, transparent bg
- [ ] `spanish-icon.svg` — dancer only, no text, transparent bg
- [ ] `combined-logo.svg` — both properties in one lockup

---

### Website (save to `C:\dev\FalconSpanish\brand\web\` then copy to project)

| File | Size | Background | Used For |
|---|---|---|---|
| `falcon-logo-color.png` ⭐ | tight crop* | Transparent | Homepage cards, property cards, hero |
| `falcon-logo-white.png` ⭐ | tight crop* | Transparent | Nav (transparent state), footer |
| `spanish-logo-color.png` ⭐ | tight crop* | Transparent | Homepage cards, property cards, hero |
| `spanish-logo-white.png` ⭐ | tight crop* | Transparent | Nav (transparent state), footer |
| `falcon-icon.png` | tight crop* | Transparent | Shared nav, shared footer |
| `spanish-icon.png` | tight crop* | Transparent | Shared nav, shared footer |
| `favicon.svg` ⭐ | 512 × 512 | Dark fill | Browser tab (from realfavicongenerator) |
| `favicon-512.png` ⭐ | 512 × 512 | Dark fill | PWA / Apple touch icon |

⭐ = minimum needed before launch

**\*Tight crop** — artboard must hug the logo content closely (10–15px padding max on each side). Do NOT use a fixed canvas with lots of empty space. The CSS scales by height (`h-14`, `h-20`, etc.) — wasted canvas means the visible logo appears tiny even at large heights.

---

### Affinity Export Checklist (run before every export)

- [ ] **Artboard fill is None** — select artboard with Artboard tool → Colour panel → Fill should show "None". If it shows any colour, remove it. A filled artboard exports a coloured background even if "transparent" is checked.
- [ ] **Transparent background in Export dialog** — each artboard row in the Export panel should have no background colour set
- [ ] **Verify after export** — drag the PNG onto a browser tab. Transparent PNGs show the browser background through them. A solid rectangle means the export still has a background.
- [ ] **Export to temp folder first** (`Desktop\logo-test\`) — verify before copying into `src/lib/assets/` in the project

---

> **White versions** = all elements changed to white, for use on dark backgrounds (nav transparent state, footer). Duplicate the artboard in Affinity, select all elements, change fills and strokes to white.

> **Small-size icons:** The full illustrated eagle/dancer are unreadable below ~80px. For `falcon-icon` and `spanish-icon`, the tight crop is especially important — these display at `h-9` (36px) in the nav.

---

### Google Business Profile (save to `C:\dev\FalconSpanish\brand\gbp\`)

| File | Size | Background |
|---|---|---|
| `falcon-logo-gbp.jpg` | 720 × 720 | White (GBP rejects transparent) |
| `spanish-logo-gbp.jpg` | 720 × 720 | White |

---

### Print (save to `C:\dev\FalconSpanish\brand\print\`)

**Business cards — 3.5 × 2 in at 300 DPI (1050 × 600 px). Add 0.125" bleed if printer requires.**

| File | Notes |
|---|---|
| `falcon-businesscard-front.pdf` | Logo, 7106 Main St, (250) 495-7544, falcon-spanish.com |
| `falcon-businesscard-back.pdf` | Optional: tagline, QR code, or blank |
| `spanish-businesscard-front.pdf` | Logo, 7104 Main St, (250) 495-6833, falcon-spanish.com |
| `spanish-businesscard-back.pdf` | Optional |
| `combined-businesscard-front.pdf` | For staff working both properties |

---

### Other

| Use | File | Notes |
|---|---|---|
| Email signature | `falcon-logo-dark.png` at 300px wide | Inline in Gmail |
| Google review cards | Simple card with QR code + "Leave us a review" | Can do in Canva |
| OTA profile photo | Same as GBP — 720 × 720 JPG, white bg | Per platform |
| Social profile photo | 600 × 600 PNG, transparent | If creating social pages |

---

## Where Logo Files Go in the Project

Once web files are ready, drop them into:

```
src/lib/assets/
  falcon-logo-color.png
  falcon-logo-white.png
  spanish-logo-color.png
  spanish-logo-white.png
  falcon-icon.png
  spanish-icon.png

static/
  favicon.svg
  favicon-512.png
  (+ all other favicon files from realfavicongenerator zip)
```
