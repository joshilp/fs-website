# Photo Checklist
## Falcon Resort & Spanish Fiesta Resort

> Walk through both properties with this list. Each item names the file it replaces in the app.
> Shoot landscape (horizontal) unless noted. Aim for good natural light — morning or late afternoon.
> You don't need to get all shots in one session. Room photos can be done anytime a room is vacant.

**Total shots needed: 39**
- 9 shared (used on falcon-spanish.com home and gallery pages)
- 15 Falcon-specific
- 15 Spanish Fiesta-specific

---

## SHARED SHOTS — falcon-spanish.com
*These represent both properties together. Shoot from a spot where you can see both buildings, the beach, or the lake.*

- [ ] **`hero.jpg`** — The main full-screen hero on the home page. Wide shot of the lake/beach from the resort grounds. This is the first thing visitors see — make it count. Clear day, good light. No people required but fine if guests are visible and content.

- [ ] **`about-bg.jpg`** — Used as a faint watermark texture behind the "About the Resorts" section. Any wide resort or lake photo works — it's shown at very low opacity so detail isn't critical.

- [ ] **`cta-bg.jpg`** — Background for the "Ready to book?" call-to-action banner (shown very dark with text over it). A moody or atmospheric shot — sunset over the lake, the pool at dusk, or the beach at golden hour.

- [ ] **`gallery-1.jpg`** — Largest tile in the shared gallery grid (shown tall). Best wide shot you have — beach, lake view, or full property from across the water.

- [ ] **`gallery-2.jpg`** — Second gallery tile. Pool area or outdoor amenities.

- [ ] **`gallery-3.jpg`** — Third gallery tile. BBQ/picnic area, or the grounds between the two properties.

- [ ] **`gallery-4.jpg`** — Fourth gallery tile. Looking out from the beach toward the lake.

- [ ] **`gallery-5.jpg`** — Fifth gallery tile. Main Street context — the road, the buildings, the surroundings.

- [ ] **`gallery-6.jpg`** — Sixth gallery tile. Any strong shot not covered above — hot tub, dock, sunset, or aerial if you have one.

---

## FALCON RESORT SHOTS
*Shoot from and around the Falcon property (7106 Main Street).*

### Hero & Backgrounds

- [ ] **`falcon/hero.jpg`** — Full-screen hero for the Falcon Resort home page. Exterior of the Falcon building, pool, or beach — showing it as its own property.

- [ ] **`falcon/about-bg.jpg`** — Faint background texture for Falcon's about section. Any Falcon exterior or lake photo.

- [ ] **`falcon/cta-bg.jpg`** — Background for Falcon's "Call to Book" banner. Atmospheric — pool at dusk, beach, or evening light on the building.

- [ ] **`falcon/rooms-bg.jpg`** — Page header background for the Falcon rooms listing page. Wide exterior or grounds shot.

- [ ] **`falcon/faq-bg.jpg`** — Page header background for Falcon's FAQ page. Any Falcon property photo.

### Room Photos — Falcon
*One clear interior photo per room type. Shoot from the doorway or corner to show as much of the room as possible. Turn on all lights. Open curtains.*

- [ ] **`falcon/rooms/room-a-large-family.jpg`** — **Room A: Large Family Room.** Shows the 3-bed layout — one queen and two doubles, or two queens with hide-a-bed visible. This is the largest room, so capture the full space.

- [ ] **`falcon/rooms/room-b-double-kitchen.jpg`** — **Room B: Double Kitchen Room.** Show both double beds and the kitchen area in the same frame if possible, or two separate shots (use the better one).

- [ ] **`falcon/rooms/room-c-queen-kitchen.jpg`** — **Room C: Queen Kitchen Room.** Show the queen bed and the kitchen. Cozy, clean feel.

- [ ] **`falcon/rooms/room-d-queen.jpg`** — **Room D: Queen Room.** Show the queen + double setup with the bedroom door visible if possible.

### Gallery Photos — Falcon
*6 photos specific to the Falcon property. Mix of exterior, pool, beach access, and grounds.*

- [ ] **`falcon/gallery/gallery-1.jpg`** — Best Falcon exterior shot. Ideally the front of the building or the view from the beach looking back.

- [ ] **`falcon/gallery/gallery-2.jpg`** — Falcon pool area.

- [ ] **`falcon/gallery/gallery-3.jpg`** — Falcon beach access / private beach.

- [ ] **`falcon/gallery/gallery-4.jpg`** — Falcon BBQ or picnic area.

- [ ] **`falcon/gallery/gallery-5.jpg`** — Falcon grounds or parking area.

- [ ] **`falcon/gallery/gallery-6.jpg`** — Any strong Falcon shot not covered above.

---

## SPANISH FIESTA RESORT SHOTS
*Shoot from and around the Spanish Fiesta property (7104 Main Street).*

### Hero & Backgrounds

- [ ] **`spanish/hero.jpg`** — Full-screen hero for the Spanish Fiesta home page. Exterior of Spanish Fiesta building, pool, or beach.

- [ ] **`spanish/about-bg.jpg`** — Faint background texture for Spanish Fiesta's about section.

- [ ] **`spanish/cta-bg.jpg`** — Background for Spanish Fiesta's "Call to Book" banner. Atmospheric shot.

- [ ] **`spanish/rooms-bg.jpg`** — Page header background for the Spanish Fiesta rooms listing page.

- [ ] **`spanish/faq-bg.jpg`** — Page header background for Spanish Fiesta's FAQ page.

### Room Photos — Spanish Fiesta
*Same approach as Falcon rooms — shoot from doorway or corner, all lights on, curtains open.*

- [ ] **`spanish/rooms/room-a-family.jpg`** — **Room A: Family Room.** 2 queens + hide-a-bed. Show the full room with both beds visible.

- [ ] **`spanish/rooms/room-b-queen-kitchen.jpg`** — **Room B: Queen Kitchen Room.** 2 queen beds and the kitchen. Spacious feel.

- [ ] **`spanish/rooms/room-c-studio-queen.jpg`** — **Room C: Studio Queen.** Single queen and kitchen. Cozy and practical.

- [ ] **`spanish/rooms/room-d-double-queen.jpg`** — **Room D: Double Queen Room.** Clean shot of both queen beds.

### Gallery Photos — Spanish Fiesta
*6 photos specific to the Spanish Fiesta property.*

- [ ] **`spanish/gallery/gallery-1.jpg`** — Best Spanish Fiesta exterior shot.

- [ ] **`spanish/gallery/gallery-2.jpg`** — Spanish Fiesta pool area.

- [ ] **`spanish/gallery/gallery-3.jpg`** — Spanish Fiesta hot tub.

- [ ] **`spanish/gallery/gallery-4.jpg`** — Spanish Fiesta beach access.

- [ ] **`spanish/gallery/gallery-5.jpg`** — Spanish Fiesta BBQ or picnic area.

- [ ] **`spanish/gallery/gallery-6.jpg`** — Any strong Spanish Fiesta shot not covered above.

---

## Tips

- **Room photos:** Shoot when the room is freshly cleaned and unoccupied. Turn on every light including lamps. Open all curtains to let in natural light. Shoot from the corner or doorway to get maximum depth.
- **Exterior shots:** Early morning (8–10 AM) or late afternoon (4–6 PM) gives the best light with no harsh shadows.
- **Phone is fine:** Modern smartphone cameras are more than good enough. Shoot in the highest resolution available. Landscape orientation for everything except room photos where portrait might work better.
- **File format:** JPG is preferred. Aim for at least 1200px wide. Cloudflare/Vite will optimize them on build.
- **Replacing a photo:** Drop the new file into `src/lib/assets/images/` at the exact path listed above, replacing the placeholder. Run `pnpm build` and the site picks it up automatically.
