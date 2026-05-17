# GBP Setup — Print Reference
## Falcon Resort & Spanish Fiesta Resort

> **Full guide with explanations:** `GBP-GUIDE.md`

---

## Step 1 — Check for Existing Listings First

Search Google Maps for **"Falcon Resort Osoyoos"** and **"Spanish Fiesta Resort Osoyoos"** before creating anything.

- Listing exists → click **"Claim this business"** (do NOT create a new one — duplicates split reviews and can trigger suspension)
- No listing → go to [business.google.com](https://business.google.com) → Add your business

Sign in with your dedicated business Gmail. Use the same account for both properties, GBP, Search Console, and Analytics.

---

## Step 2 — Profile Fields

| Field | Falcon Resort | Spanish Fiesta Resort |
|---|---|---|
| **Business Name** | `Falcon Resort` | `Spanish Fiesta Resort` |
| **Primary Category** | `Motel` | `Motel` |
| **Additional Categories** | Resort hotel, Vacation rental, Hotel | Resort hotel, Vacation rental, Hotel |
| **Address** | 7106 Main Street, Osoyoos, BC  V0H 1V3 | 7104 Main Street, Osoyoos, BC  V0H 1V3 |
| **Phone** | (250) 495-7544 | (250) 495-6833 |
| **Website** | https://falcon-spanish.com/falcon | https://falcon-spanish.com/spanish |
| **Hours** | Seasonal — May–Sep daily, Oct–Apr: Temporarily closed | Same |

### Short Descriptions

**Falcon:**
```
Lakeside motel on Osoyoos Lake. Private sandy beach, outdoor pool, hot tub. Right on Main Street.
```

**Spanish Fiesta:**
```
Lakeside motel on Osoyoos Lake. Private sandy beach, outdoor pool, hot tub. Right on Main Street in Osoyoos.
```

### Long Descriptions (copy-paste exactly)

**Falcon:**
```
Falcon Resort is a lakeside motel located right on the shores of Osoyoos Lake in Osoyoos, BC —
Canada's warmest freshwater lake and sunniest valley. We offer clean, air-conditioned motel rooms
steps from a private sandy beach with a safe, shallow entry ideal for families. Our outdoor pool
and hot tub are available to all guests. We're right on Main Street in downtown Osoyoos, within
walking distance of restaurants, shops, the marina, and the Saturday Farmers' Market.

Adjacent to our sister property, Spanish Fiesta Resort, both motels are operated from a shared
office. We can place you in whichever property has availability — so call us and we'll find you
the best room.
```

**Spanish Fiesta:**
```
Spanish Fiesta Resort is a lakeside motel on the shores of Osoyoos Lake in Osoyoos, BC — Canada's
warmest freshwater lake and sunniest valley. We offer comfortable, air-conditioned motel rooms steps
from a private sandy beach with a shallow, sandy entry safe for all ages. Our outdoor pool and hot
tub are open to all guests, and our BBQ and picnic areas make evenings easy.

We're right on Main Street in Osoyoos, within walking distance of restaurants, the marina, shops,
and the Saturday Farmers' Market. Adjacent to our sister property, Falcon Resort, both motels share
one office — call us and we'll find the best available room across both properties.
```

---

## Step 3 — Attributes

Select all that are true on each profile:

**Amenities:**
- [ ] Air-conditioned
- [ ] Pool
- [ ] Hot tub
- [ ] Beach access
- [ ] BBQ facilities
- [ ] Free parking
- [ ] Free Wi-Fi
- [ ] Outdoor seating / Patio area

**Accessibility:**
- [ ] Wheelchair-accessible entrance
- [ ] Wheelchair-accessible parking

**Highlights:**
- [ ] Family-friendly
- [ ] Pet-friendly *(add policy if yes)*

---

## Step 4 — Photos

Upload at least 10 per profile. Priority order:

| Category | What to shoot |
|---|---|
| **Cover photo** | Wide exterior or lake/beach shot — sunny day, 1200 × 900 px min |
| **Logo** | Use `falcon-icon.png` / `spanish-icon.png` — already square, do not use the full logo with text |
| **Exterior** | Building front, sign, entrance, parking |
| **Rooms** | Beds made, bathroom, any amenities |
| **Common areas** | Pool, hot tub, BBQ, picnic tables |
| **Beach / Outdoors** | Beach, lake view, shoreline |

---

## Step 5 — After Verification (postcard takes 5–14 days)

- [ ] Submit sitemap: [search.google.com/search-console](https://search.google.com/search-console) → Sitemaps → `https://falcon-spanish.com/sitemap.xml`
- [ ] Get map embed URLs: Maps → Share → Embed a map → copy the `src="..."` URL → paste into `src/lib/config.ts` (`properties.falcon.mapEmbedUrl`, `properties.spanish.mapEmbedUrl`, `site.mapEmbedUrl`)
- [ ] Enable messaging in the Google Business app
- [ ] Get review links: GBP Manager → "Get more reviews" → save both short links
- [ ] Print review QR cards for front desk

---

## Step 6 — Reviews (ongoing)

**Goal: 20+ per property by end of first season.**

Desk script: *"If you have a moment, a Google review would really help us — here's the link."*

Responding:
- Positive → thank them, mention a specific detail
- Negative → acknowledge, offer to resolve offline ("Call us at [number]")
- Never argue publicly

---

## Step 7 — Directory Listings (NAP must match site exactly)

| Directory | URL |
|---|---|
| TripAdvisor | tripadvisor.ca |
| Tourism BC | hellobc.com |
| Destination Osoyoos | destinationosoyoos.com |
| Yellow Pages CA | yellowpages.ca |
| Yelp | yelp.ca |
| Okanagan Tourism | ok.bc.ca |

---

## NAP Reference

| | Falcon Resort | Spanish Fiesta Resort |
|---|---|---|
| Name | Falcon Resort | Spanish Fiesta Resort |
| Address | 7106 Main Street, Osoyoos, BC  V0H 1V3 | 7104 Main Street, Osoyoos, BC  V0H 1V3 |
| Phone | (250) 495-7544 | (250) 495-6833 |
| Website | falcon-spanish.com/falcon | falcon-spanish.com/spanish |

*NAP on the website is auto-generated from `src/lib/config.ts` — update there if anything changes.*

---

## Ongoing — Monthly Tasks

| Task | Frequency |
|---|---|
| Add new photos | Every 2–4 weeks during season |
| Post a Google Post | Monthly |
| Respond to reviews | Within 48 hours |
| Update seasonal hours | Start/end of season |
| Check for fake edits | Weekly during busy season |
