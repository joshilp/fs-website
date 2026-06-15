# Product Copy Standards

Use these rules when editing `content/{property}/{slug}/product.yaml`.

## Features (badge list)

Include only what differentiates the room type:

- Bed configuration (specific counts)
- Full kitchen (when applicable)
- Air conditioning
- TV
- Private balcony (when applicable)

**Do not include:** bathroom (assumed in every room), free Wi-Fi, parking, beach, pool (those go in OTA closing block).

## Description fields

| Field | Length | Use |
|---|---|---|
| `description.short` | 1 line | Teasers, comparison pages |
| `description.website` | 2–3 sentences | Rooms page card — warmer tone |
| `description.ota` | 4–8 sentences | Paste into Booking.com / Expedia room type |

## Location naming

- **Beachfront** — lake-facing, closest to the water
- **Beachside** — near the lake, short walk to the private beach
- **Townside** — faces Main Street, quieter from pool/beach foot traffic
- **Retro** (Falcon only) — original motel wing; classic character

## OTA closing block

Append to every `description.ota` (adjust per property):

**Falcon:** pool, shared hot tub, beach, BBQ, parking, Wi-Fi, Main Street.

**Spanish:** pool, hot tub, beach, BBQ, parking, Wi-Fi, Main Street.

## Photos block

Documents source files in `.dev-photos/` for OTA uploads:

```yaml
photos:
  cover: IMG_9514.jpg
  gallery:
    - IMG_9358.jpg
```

Copied to `src/lib/assets/images/{property}/products/{slug}/` by `node scripts/apply-product-photos.mjs`.
