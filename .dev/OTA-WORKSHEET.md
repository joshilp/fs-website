# OTA Listing Worksheet

Copy `description.ota` from each `content/{property}/{slug}/product.yaml` into Booking.com / Expedia.
Assign photos in [`.dev/photo-mapping.json`](photo-mapping.json), then run `node scripts/apply-product-photos.mjs`.

## Falcon Resort

| Room type | Units | Cover source | Gallery | OTA description |
|---|---:|---|---|---|
| Retro Suite - 2 Queens + Kitchen | 3 | — assign in photo-mapping.json | — | Retro Suite with two queen beds and a full kitchen (stove, fridge, and sink). Sleeps up to 4. Located in Falcon's original motel wing — straightforward, comfortable rooms with the property's classic character. Air-conditioned with cable TV. Steps from Osoyoos Lake at Falcon Resort. Guests enjoy our private sandy beach, outdoor pool, shared hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Retro Family Suite - 2 Doubles + Kitchen | 12 | — assign in photo-mapping.json | — | Retro Family Suite with two double beds and a full kitchen. Sleeps up to 4. In Falcon's original wing — simple, comfortable lodging ideal for families who want to cook some meals in. Air-conditioned with cable TV. Steps from Osoyoos Lake at Falcon Resort. Guests enjoy our private sandy beach, outdoor pool, shared hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Retro Family Suite - 1 Queen + 2 Doubles + Kitchen | 3 | — assign in photo-mapping.json | — | Retro Family Suite with one queen bed, two double beds, and a full kitchen. Sleeps up to 6 — one of our most flexible family layouts in the original motel wing. Air-conditioned with cable TV. Steps from Osoyoos Lake at Falcon Resort. Guests enjoy our private sandy beach, outdoor pool, shared hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Retro Studio - 1 Queen + Kitchen | 4 | — assign in photo-mapping.json | — | Retro Studio with one queen bed and a full kitchen. Sleeps 2. Compact and practical in Falcon's original wing — cook in and save for wineries and dining out. Air-conditioned with cable TV. Steps from Osoyoos Lake at Falcon Resort. Guests enjoy our private sandy beach, outdoor pool, shared hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Beachside Studio - 1 Queen | 4 | — assign in photo-mapping.json | — | Beachside Studio with one queen bed (no kitchen). Sleeps 2. Near Osoyoos Lake with a short walk to our private sandy beach and outdoor pool. Air-conditioned with cable TV. Steps from Osoyoos Lake at Falcon Resort. Guests enjoy our private sandy beach, outdoor pool, shared hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Beachside Family Suite - 1 Queen + 1 Double | 4 | — assign in photo-mapping.json | — | Beachside Family Suite with one queen bed and one double bed (no kitchen). Sleeps up to 4. Near the lake with quick access to the private beach and pool. Air-conditioned with cable TV. Steps from Osoyoos Lake at Falcon Resort. Guests enjoy our private sandy beach, outdoor pool, shared hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Beachside Suite - 2 Doubles + Kitchen | 1 | — assign in photo-mapping.json | — | Beachside Suite with two double beds and a full kitchen. Sleeps up to 4. A short walk to Osoyoos Lake, our private beach, and outdoor pool. Air-conditioned with cable TV. Steps from Osoyoos Lake at Falcon Resort. Guests enjoy our private sandy beach, outdoor pool, shared hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Beachfront Suite - 2 Queens + Kitchen | 2 | — assign in photo-mapping.json | — | Beachfront Suite with two queen beds and a full kitchen. Sleeps up to 4. Lake-facing — our closest accommodation to the water, with direct access to the private sandy beach and pool. Air-conditioned with cable TV. Steps from Osoyoos Lake at Falcon Resort. Guests enjoy our private sandy beach, outdoor pool, shared hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |

### File paths (after photos applied)

- **Retro Suite - 2 Queens + Kitchen:** `src/lib/assets/images/falcon/products/retro-suite-2-queens-kitchen/cover.jpg`
- **Retro Family Suite - 2 Doubles + Kitchen:** `src/lib/assets/images/falcon/products/retro-family-suite-2-doubles-kitchen/cover.jpg`
- **Retro Family Suite - 1 Queen + 2 Doubles + Kitchen:** `src/lib/assets/images/falcon/products/retro-family-suite-1-queen-2-doubles-kitchen/cover.jpg`
- **Retro Studio - 1 Queen + Kitchen:** `src/lib/assets/images/falcon/products/retro-studio-1-queen-kitchen/cover.jpg`
- **Beachside Studio - 1 Queen:** `src/lib/assets/images/falcon/products/beachside-studio-1-queen/cover.jpg`
- **Beachside Family Suite - 1 Queen + 1 Double:** `src/lib/assets/images/falcon/products/beachside-family-suite-1-queen-1-double/cover.jpg`
- **Beachside Suite - 2 Doubles + Kitchen:** `src/lib/assets/images/falcon/products/beachside-suite-2-doubles-kitchen/cover.jpg`
- **Beachfront Suite - 2 Queens + Kitchen:** `src/lib/assets/images/falcon/products/beachfront-suite-2-queens-kitchen/cover.jpg`

## Spanish Fiesta Resort

| Room type | Units | Cover source | Gallery | OTA description |
|---|---:|---|---|---|
| Beachfront Studio - 1 Queen + Kitchen | 1 | — assign in photo-mapping.json | — | Beachfront Studio with one queen bed and a full kitchen. Sleeps 2. Lake-facing room closest to the water at Spanish Fiesta Resort. Air-conditioned with cable TV. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Beachside Family Suite - 2 Queens + Kitchen | 2 | — assign in photo-mapping.json | — | Beachside Family Suite with two queen beds and a full kitchen. Sleeps up to 4. Near Osoyoos Lake with easy access to the private beach, pool, and hot tub. Air-conditioned with cable TV. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Family Suite - 2 Queens + Kitchen | 8 | — assign in photo-mapping.json | — | Family Suite with two queen beds and a full kitchen. Sleeps up to 4. Comfortable, air-conditioned accommodation with cable TV. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Studio - 2 Queens + Kitchen | 1 | — assign in photo-mapping.json | — | Studio with two queen beds and a full kitchen. Sleeps up to 4. Open layout, air-conditioned, with cable TV. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Studio - 1 Queen + Kitchen | 5 | — assign in photo-mapping.json | — | Studio with one queen bed and a full kitchen. Sleeps 2. Cozy, air-conditioned unit with cable TV — cook in and enjoy the Okanagan at your own pace. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Two Bedroom Suite - 2 Queens + Kitchen | 1 | — assign in photo-mapping.json | — | Two Bedroom Suite with two queen beds and a full kitchen. Sleeps up to 4. Separate sleeping areas and a full kitchen — our most spacious layout at Spanish Fiesta. Air-conditioned with cable TV. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Studio Suite - 2 Queens + Kitchen | 2 | — assign in photo-mapping.json | — | Studio Suite with two queen beds and a full kitchen. Sleeps up to 4. Slightly more spacious than our standard studios, with air conditioning and cable TV. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Studio - 1 Queen | 6 | — assign in photo-mapping.json | — | Studio with one queen bed (no kitchen). Sleeps 2. Straightforward, air-conditioned room with cable TV — great for short stays when you do not need to cook. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Studio - 2 Queens | 1 | — assign in photo-mapping.json | — | Studio with two queen beds (no kitchen). Sleeps up to 4. Air-conditioned with cable TV — ideal for groups who plan to eat out. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Townside Studio - 2 Queens | 5 | — assign in photo-mapping.json | — | Townside Studio with two queen beds (no kitchen). Sleeps up to 4. Faces Main Street — a quieter side of the property while still steps from the pool, hot tub, and beach. Air-conditioned with cable TV. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Townside Studio - 1 Queen | 1 | — assign in photo-mapping.json | — | Townside Studio with one queen bed (no kitchen). Sleeps 2. Faces Main Street away from the pool deck — still full access to beach, pool, and hot tub. Air-conditioned with cable TV. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Family Suite - 2 Queens + Kitchen + Private Balcony | 1 | — assign in photo-mapping.json | — | Family Suite with two queen beds, a full kitchen, and a private balcony. Sleeps up to 4. The only room type with a private balcony at Spanish Fiesta Resort. Air-conditioned with cable TV. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |
| Townside Studio - 2 Queens + Kitchen | 1 | — assign in photo-mapping.json | — | Townside Studio with two queen beds and a full kitchen. Sleeps up to 4. Faces Main Street with full kitchen facilities — pool, hot tub, and beach still on the property. Air-conditioned with cable TV. Steps from Osoyoos Lake at Spanish Fiesta Resort. Guests enjoy our private sandy beach, outdoor pool, hot tub, and BBQ area. Free parking and Wi-Fi. On Main Street in Osoyoos, BC. |

### File paths (after photos applied)

- **Beachfront Studio - 1 Queen + Kitchen:** `src/lib/assets/images/spanish/products/beachfront-studio-1-queen-kitchen/cover.jpg`
- **Beachside Family Suite - 2 Queens + Kitchen:** `src/lib/assets/images/spanish/products/beachside-family-suite-2-queens-kitchen/cover.jpg`
- **Family Suite - 2 Queens + Kitchen:** `src/lib/assets/images/spanish/products/family-suite-2-queens-kitchen/cover.jpg`
- **Studio - 2 Queens + Kitchen:** `src/lib/assets/images/spanish/products/studio-2-queens-kitchen/cover.jpg`
- **Studio - 1 Queen + Kitchen:** `src/lib/assets/images/spanish/products/studio-1-queen-kitchen/cover.jpg`
- **Two Bedroom Suite - 2 Queens + Kitchen:** `src/lib/assets/images/spanish/products/two-bedroom-suite-2-queens-kitchen/cover.jpg`
- **Studio Suite - 2 Queens + Kitchen:** `src/lib/assets/images/spanish/products/studio-suite-2-queens-kitchen/cover.jpg`
- **Studio - 1 Queen:** `src/lib/assets/images/spanish/products/studio-1-queen/cover.jpg`
- **Studio - 2 Queens:** `src/lib/assets/images/spanish/products/studio-2-queens/cover.jpg`
- **Townside Studio - 2 Queens:** `src/lib/assets/images/spanish/products/townside-studio-2-queens/cover.jpg`
- **Townside Studio - 1 Queen:** `src/lib/assets/images/spanish/products/townside-studio-1-queen/cover.jpg`
- **Family Suite - 2 Queens + Kitchen + Private Balcony:** `src/lib/assets/images/spanish/products/family-suite-2-queens-kitchen-private-balcony/cover.jpg`
- **Townside Studio - 2 Queens + Kitchen:** `src/lib/assets/images/spanish/products/townside-studio-2-queens-kitchen/cover.jpg`

