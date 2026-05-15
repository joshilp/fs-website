# Logo & Branding Asset Checklist
## Falcon Resort & Spanish Fiesta Resort

---

## Colors

| Name | Hex | Used For |
|---|---|---|
| Falcon accent | `#9B7A52` | Website — Falcon pages |
| Spanish accent | `#7D2532` | Website — Spanish pages |
| Shared gold | `#C49A3C` | Favicon, accents, signs |
| Dark earth | `#3D2B1F` | Dark backgrounds |
| Warm cream | `#FAF6EE` | Light backgrounds |

> The Falcon logo uses blue script — this is legacy (physical sign only). The website uses earth tones independently.

---

## Favicon

**What:** "FS" monogram, Playfair Display Bold, gold `#C49A3C` on dark `#3D2B1F` background.

**Create in Affinity:** 512 × 512 px artboard → export PNG with background.

**Generate full set:** Upload to [realfavicongenerator.net](https://realfavicongenerator.net) → download zip.

**Place files in:** `static/` (project root) — replace existing placeholder `favicon.svg`.

Add the generated HTML snippet to `src/app.html` in the `<head>`.

---

## Files to Create

### Source exports (save to `C:\dev\FalconSpanish\brand\source\`)

- [ ] `falcon-logo.svg` — full logo, transparent bg
- [ ] `spanishfiesta-logo.svg` — full logo, transparent bg
- [ ] `falcon-icon.svg` — eagle only, no text, transparent bg
- [ ] `spanishfiesta-icon.svg` — dancer only, no text, transparent bg
- [ ] `combined-logo.svg` — both properties in one lockup

---

### Website (save to `C:\dev\FalconSpanish\brand\web\` then copy to project)

| File | Size | Background | Used For |
|---|---|---|---|
| `falcon-logo-dark.png` ⭐ | 1200 × 400 | Transparent | Nav, contact page |
| `falcon-logo-light.png` ⭐ | 1200 × 400 | Transparent | Footer (white version) |
| `spanishfiesta-logo-dark.png` ⭐ | 1200 × 400 | Transparent | Nav, contact page |
| `spanishfiesta-logo-light.png` ⭐ | 1200 × 400 | Transparent | Footer (white version) |
| `falcon-icon.png` | 400 × 400 | Transparent | Badges, small use |
| `spanishfiesta-icon.png` | 400 × 400 | Transparent | Badges, small use |
| `favicon.svg` ⭐ | 512 × 512 | Dark fill | Browser tab (from realfavicongenerator) |
| `favicon-512.png` ⭐ | 512 × 512 | Dark fill | PWA / Apple touch icon |

⭐ = minimum needed before launch

> **Light versions** = white text/elements for use on dark backgrounds (footer, dark hero). Create by duplicating the logo in Affinity and changing all elements to white.

> **Small-size icons:** The full illustrated eagle/dancer are unreadable below ~80px. For `falcon-icon` and `spanishfiesta-icon`, simplify to a flat single-colour silhouette of the overall shape.

---

### Google Business Profile (save to `C:\dev\FalconSpanish\brand\gbp\`)

| File | Size | Background |
|---|---|---|
| `falcon-gbp-logo.jpg` | 720 × 720 | White (GBP rejects transparent) |
| `spanishfiesta-gbp-logo.jpg` | 720 × 720 | White |

---

### Print (save to `C:\dev\FalconSpanish\brand\print\`)

**Business cards — 3.5 × 2 in at 300 DPI (1050 × 600 px). Add 0.125" bleed if printer requires.**

| File | Notes |
|---|---|
| `falcon-businesscard-front.pdf` | Logo, 7106 Main St, (250) 495-7544, falcon-spanish.com |
| `falcon-businesscard-back.pdf` | Optional: tagline, QR code, or blank |
| `spanishfiesta-businesscard-front.pdf` | Logo, 7104 Main St, (250) 495-6833, falcon-spanish.com |
| `spanishfiesta-businesscard-back.pdf` | Optional |
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
  falcon-logo-dark.png
  falcon-logo-light.png
  spanishfiesta-logo-dark.png
  spanishfiesta-logo-light.png
  falcon-icon.png
  spanishfiesta-icon.png

static/
  favicon.svg
  favicon-512.png
  (+ all other favicon files from realfavicongenerator zip)
```
