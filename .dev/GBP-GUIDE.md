# Google Business Profile Setup Guide
## Falcon Resort & Spanish Fiesta Resort — Osoyoos, BC

You need **two separate GBP profiles** — one for each property. They have different addresses and
will show as two distinct pins on Google Maps. Both profiles point to the same website
(`falcon-spanish.com`), which is correct and expected for a multi-location business.

---

## Part 1 — Create / Claim Each Profile

### Step 1 — Go to Google Business Profile Manager

1. Open [business.google.com](https://business.google.com) and sign in with a Google account
   you'll use permanently (create a dedicated business Gmail if you don't have one).
2. Click **"Add your business to Google"** or **"Add a new business"**.

---

## Part 2 — Falcon Resort Profile

Fill in every field exactly as written below. NAP (Name / Address / Phone) must match your
website's footer and contact page **character-for-character**.

### Business Name
```
Falcon Resort
```
> Do **not** add "Osoyoos" or "BC" to the business name. Google considers keyword stuffing in
> names a violation and will suspend your listing.

### Primary Category
```
Motel
```
> This is the single most important field for local ranking. "Motel" is the most accurate and
> will match what people type most often ("Osoyoos motel").

### Additional Categories (add all that apply)
- Resort hotel
- Vacation rental
- Hotel

### Address
```
7106 Main Street
Osoyoos, BC  V0H 1V3
Canada
```

### Phone Number
```
(250) 495-7544
```

### Website
```
https://falcon-spanish.com/falcon
```
> Link directly to the Falcon property page — not the homepage. This ensures guests arriving from
> Google Maps land on Falcon-specific content and CTAs, not the shared homepage where they could
> accidentally book the other property.

### Business Hours
Set your seasonal operating hours accurately. If you close for winter (e.g. Oct–April), use
**"Seasonal hours"** or mark as **temporarily closed** during the off-season rather than
leaving wrong hours year-round.

Example seasonal setup:
- May–September: Open daily, e.g. 8:00 AM – 9:00 PM
- October–April: Mark as **Temporarily closed** or use "Hours not available"

### Short Description (appears under your name in Maps)
```
Lakeside motel on Osoyoos Lake. Private sandy beach, outdoor pool, hot tub. Right on Main Street.
```

### Long Business Description (up to 750 characters — use all of it)
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

### Attributes (select all that are true)
Under "Amenities":
- [ ] Air-conditioned
- [ ] Pool
- [ ] Hot tub (if available)
- [ ] Beach access
- [ ] BBQ facilities
- [ ] Free parking
- [ ] Free Wi-Fi
- [ ] Outdoor seating / Patio area

Under "Accessibility":
- [ ] Wheelchair-accessible entrance (if true)
- [ ] Wheelchair-accessible parking (if true)

Under "Highlights":
- [ ] Family-friendly
- [ ] Pet-friendly (if true — add policy)

---

## Part 3 — Spanish Fiesta Resort Profile

Repeat the same process. The fields are nearly identical; only the name, address, and phone differ.

### Business Name
```
Spanish Fiesta Resort
```

### Primary Category
```
Motel
```

### Additional Categories
- Resort hotel
- Vacation rental
- Hotel

### Address
```
7104 Main Street
Osoyoos, BC  V0H 1V3
Canada
```

### Phone Number
```
(250) 495-6833
```

### Website
```
https://falcon-spanish.com/spanish
```
> Link directly to the Spanish Fiesta property page — not the homepage. Same reasoning as Falcon:
> guests searching specifically for Spanish Fiesta should land on Spanish Fiesta content.

### Business Hours
Same as Falcon Resort.

### Short Description
```
Lakeside motel on Osoyoos Lake. Private sandy beach, outdoor pool, hot tub. Right on Main Street in Osoyoos.
```

### Long Business Description
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

## Part 4 — Photos (Upload These First)

Photos are one of the biggest ranking signals in GBP. Google rewards profiles that have many
recent, high-quality photos. Upload in this order:

### Cover Photo
- A wide shot of the property exterior or the beach/lake view
- Ideally taken on a sunny day with people or activity visible
- **Minimum:** 720 × 540 px. **Ideal:** 1200 × 900 px or larger

### Logo
- If you have a logo, upload it here
- Square format (1:1 ratio)
- If no logo yet, skip for now — don't upload a placeholder

### Required categories to fill (upload at least 3 per category):
| Category | What to photograph |
|---|---|
| **Exterior** | Front of the building, sign, entrance, parking area |
| **Rooms** | Guest rooms showing beds, bathroom, any amenities |
| **Common areas** | Pool, hot tub, BBQ area, picnic tables |
| **Beach / Outdoors** | The beach, lake views, shoreline |
| **Location** | Main Street frontage, street view, nearby landmarks |

### Tips for getting good photos before professional ones are ready:
- Use a modern smartphone on a sunny day — it's enough to start
- Shoot in the morning or evening when light is warm (not harsh midday sun)
- Make beds before photographing rooms
- Clean/tidy the pool area and beach before shooting
- Get at least 10–15 real photos up before the season starts

---

## Part 5 — After Verification

Google will ask you to **verify** your listing, typically by postcard sent to the business address
(takes 5–14 days), or sometimes by phone/video call.

Once verified:

1. **Submit your sitemap** to Google Search Console:
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your property: `falcon-spanish.com`
   - Go to **Sitemaps** → submit `https://falcon-spanish.com/sitemap.xml`

2. **Link GBP to your website** in Search Console for extra verification signals.

3. **Update the map embed URLs in the website codebase:**
   - In Google Maps, search for the verified GBP listing for each property
   - Click **Share → Embed a map → Copy HTML**
   - Open `src/lib/config.ts` in the project and update:
     - `properties.falcon.mapEmbedUrl` → embed URL from Falcon Resort's verified GBP listing
     - `properties.spanish.mapEmbedUrl` → embed URL from Spanish Fiesta Resort's verified GBP listing
     - `site.mapEmbedUrl` → a zoomed-out embed showing both pins simultaneously (zoom out in
       Google Maps until both properties are visible, then copy the embed code)
   - These flow automatically to each property's `/location` page and the shared homepage

4. **Enable messaging** in GBP so guests can send you a message directly from Google Maps
   (requires the Google Business app on your phone).

5. **Turn on booking links** if/when you have online booking — GBP has a "Reserve a table / Book"
   button you can link to your booking app.

6. **Set up Google Hotel Center** (next major step after GBP):
   - GBP verification is a prerequisite for Google Hotel Center
   - Hotel Center is what allows your nightly rates to appear in Google Hotels search results
   - It requires a booking engine that can send live rates to Google
   - See the separate discussion in project notes for the full Google Hotels overview
   - Start at [hotel.google.com](https://hotel.google.com) once GBP is live

---

## Part 6 — Getting Your First Reviews (Most Important Step)

Reviews are the #1 local ranking factor. 20 recent, positive reviews will outrank any amount of
on-site SEO work. Here's the exact playbook:

### Get your review link
1. In GBP Manager, go to your profile → **"Get more reviews"**
2. Copy the short link (looks like `g.page/FalconResortOsoyoos/review`)
3. Save both links (one per property)

### Ask every guest at checkout
Script you can use at the desk:
> *"We really appreciate your stay. If you have a moment, leaving us a Google review would help us
> a lot — it's the best way for other families to find us. Here's a card with the link."*

Print simple business-card-size cards with the QR code or short URL.

### Goal: 20+ reviews per property before the end of your first full season.

### Responding to reviews
- **Always respond** to every review — positive and negative
- For positive: thank them, mention Osoyoos or the specific feature they liked
- For negative: stay professional, acknowledge their concern, offer to make it right offline
  ("Please call us at [number] so we can discuss this")
- Never argue in a public response

---

## Part 7 — Local Citations (Business Directory Listings)

After GBP, these directories are the next priority for local ranking. Each listing needs your
NAP to match your website exactly.

| Directory | URL | Notes |
|---|---|---|
| **TripAdvisor** | tripadvisor.ca | Creates a separate review platform — important for travel searches |
| **Booking.com** | booking.com | High-authority backlink; optional commission model |
| **Expedia** | expedia.ca | Good for visibility even if you don't use their booking |
| **Yelp** | yelp.ca | Smaller in Canada but still a citation signal |
| **Yellow Pages CA** | yellowpages.ca | Classic local citation |
| **Tourism BC** | hellobc.com | Free listing for BC tourism operators |
| **Destination Osoyoos** | destinationosoyoos.com | Local DMO — email them to get listed |
| **Okanagan Tourism** | tourismkelowna.com or ok.bc.ca | Regional tourism body |

**Rule:** Same name, address, phone on every one. Even minor differences (St. vs Street, missing
postal code) reduce your citation score.

---

## Part 8 — Ongoing GBP Maintenance

Once set up, the profile needs regular attention:

| Task | Frequency |
|---|---|
| Add new photos | Every 2–4 weeks during season |
| Post a "Google Post" (update/offer) | Monthly — announce seasonal deals, events |
| Respond to all new reviews | Within 48 hours |
| Update hours for holidays / off-season | As needed |
| Check for and reject fake edits | Weekly during busy season |
| Update booking link when online booking is ready | When available |

### Google Posts
These appear directly in your Maps listing. Use them for:
- "Now open for the [year] season!"
- "Book now for Canada Day weekend"
- "New photos just added — check out the beach"
- Any specials or packages

---

## NAP Consistency Checklist

The website's NAP data is managed in one place: **`src/lib/config.ts`**. The footer, contact
page, location page, and schema markup all pull from that file automatically. If a phone number
or address ever changes, update it in `config.ts` and it flows everywhere on the site.

For external platforms, verify all of these match `config.ts` exactly:

| Location | Falcon Resort | Spanish Fiesta Resort |
|---|---|---|
| `config.ts` (source of truth) | 7106 Main Street, (250) 495-7544 | 7104 Main Street, (250) 495-6833 |
| GBP profile | Falcon Resort | Spanish Fiesta Resort |
| Website footer | ✓ auto from config | ✓ auto from config |
| Website contact page | ✓ auto from config | ✓ auto from config |
| TripAdvisor | (to fill) | (to fill) |
| Booking.com | (to fill) | (to fill) |
| Yellow Pages | (to fill) | (to fill) |
| Yelp | (to fill) | (to fill) |
| Tourism BC / Hello BC | (to fill) | (to fill) |
| Destination Osoyoos | (to fill) | (to fill) |

---

## Quick Priority Summary

| Priority | Action |
|---|---|
| 🔴 **Do first** | Create and verify both GBP profiles |
| 🔴 **Do first** | Upload at least 10 photos per profile |
| 🔴 **Do first** | Set correct business category (Motel) and fill all fields |
| 🟡 **Do this season** | Collect 20+ Google reviews per property |
| 🟡 **Do this season** | List on TripAdvisor and Tourism BC |
| 🟢 **When ready** | Submit sitemap to Google Search Console |
| 🟢 **When ready** | Add remaining directory listings |
| 🟢 **When ready** | Enable Google booking link once booking app is set up |
