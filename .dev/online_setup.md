# Online Setup & Launch Checklist
## Falcon Resort & Spanish Fiesta Resort — falcon-spanish.com

Complete in order. Do not cancel Tera-Byte or submit to Google until all items are checked.

---

## PHASE 1 — Before You Touch Anything

- [ ] Back up all email via Thunderbird (IMAP sync from Tera-Byte)
- [ ] Download a local copy of the old Tera-Byte website files (just in case)
- [ ] Note your current Tera-Byte nameservers before changing anything

---

## PHASE 1b — Dry Run on a Test Domain (Do This First)

> Run the full setup on a personal domain you already own on Porkbun before touching
> `falcon-spanish.com`. This lets you iron out any issues with zero risk — Tera-Byte keeps
> running untouched until you're ready.

- [ ] Pick a spare domain from your Porkbun account to use as the test domain
- [ ] Complete Phases 2–5 using the test domain instead of `falcon-spanish.com`
- [ ] Verify everything works end-to-end:
  - Website deploys and loads on the test domain
  - Email sends and receives on the test domain
  - mail-tester.com scores 9+/10
  - SPF, DKIM, DMARC all passing
- [ ] Once confirmed, proceed to Phase 6 to bring `falcon-spanish.com` into the same setup

### Switching from test domain to falcon-spanish.com (after dry run):

- [ ] Transfer `falcon-spanish.com` to Porkbun (Phase 6)
- [ ] Add `falcon-spanish.com` to Cloudflare — copy the exact DNS records from the test domain
- [ ] In Google Workspace Admin: Domains → Add a domain → add `falcon-spanish.com` as primary
- [ ] `j@falcon-spanish.com` becomes your primary inbox — test domain address can be kept as alias or abandoned
- [ ] Update Cloudflare Pages custom domain from test domain to `falcon-spanish.com`
- [ ] Verify site loads and email works on `falcon-spanish.com`
- [ ] Then cancel Tera-Byte (Phase 7)

---

## PHASE 2 — DNS & Hosting (Do Together)

### 2a — Cloudflare

- [ ] Create Cloudflare account at [dash.cloudflare.com](https://dash.cloudflare.com)
- [ ] Add domain `falcon-spanish.com`
- [ ] Cloudflare auto-imports existing DNS records — **do not delete anything yet**
- [ ] Copy the two Cloudflare nameservers (e.g. `alex.ns.cloudflare.com`)

### 2b — Update Nameservers at Tera-Byte

- [ ] In Tera-Byte: Domains → Manage Domain → Nameservers
- [ ] Replace old nameservers with the two Cloudflare ones
- [ ] Save and wait (usually 5 min – 2 hours; up to 24h)
- [ ] Verify old website and email still work after propagation

### 2c — Deploy Website to Cloudflare Pages

- [ ] Push the `fs-website` repo to GitHub (if not already there)
- [ ] In Cloudflare dashboard: Pages → Create a project → Connect to GitHub
- [ ] Select the `fs-website` repo
- [ ] Build settings:
  - Framework preset: **SvelteKit**
  - Build command: `npm run build`
  - Output directory: `build`
- [ ] Deploy and confirm the preview URL works
- [ ] Add custom domain `falcon-spanish.com` in Cloudflare Pages settings
- [ ] Cloudflare handles SSL automatically — no extra steps needed
- [ ] Verify live site at `https://falcon-spanish.com`

---

## PHASE 3 — Email Setup (Free Stack)

> **Setup:** Cloudflare Email Routing receives all `@falcon-spanish.com` email and forwards to
> Gmail. Gmail Send As lets you reply from `j@falcon-spanish.com` inside Gmail. Total cost: $0.
>
> **Accounts:**
> - `fsosoyoos@gmail.com` — your main working Gmail inbox. OTAs, vendors, and internal use.
> - `j@falcon-spanish.com` — customer-facing address, forwards to Gmail via Cloudflare routing.
>
> **If you later hire staff and need separate inboxes per person**, upgrade to Google Workspace
> at that point. The switch takes ~30 minutes of DNS changes and everything else stays the same.

### 3a — Cloudflare Email Routing

- [ ] In Cloudflare dashboard: Email → Email Routing → Enable
- [ ] Add routing rule: `j@falcon-spanish.com` → `fsosoyoos@gmail.com`
- [ ] Add a catch-all rule: any other `@falcon-spanish.com` address → `fsosoyoos@gmail.com`
- [ ] Cloudflare adds the required MX records automatically — delete old Tera-Byte MX records if they weren't replaced
- [ ] Send a test email to `j@falcon-spanish.com` — confirm it arrives in Gmail

### 3b — Gmail Send As (reply from j@falcon-spanish.com)

- [ ] In Gmail (`fsosoyoos@gmail.com`): Settings → See all settings → Accounts → Send mail as
- [ ] Click "Add another email address"
- [ ] Enter name and `j@falcon-spanish.com`
- [ ] Gmail sends a verification email to `j@falcon-spanish.com` — it arrives in Gmail via the routing you just set up
- [ ] Click the verification link
- [ ] Set `j@falcon-spanish.com` as the default send address
- [ ] Test by sending an email — recipient should see it from `j@falcon-spanish.com`

### 3c — Migrate old email from Tera-Byte

- [ ] In Gmail: Settings → See all settings → Accounts → Check mail from other accounts → Add a mail account
- [ ] Enter `j@falcon-spanish.com` with Tera-Byte IMAP credentials
- [ ] Gmail imports all old mail into your inbox
- [ ] Verify old emails came through

### 3d — SPF / DKIM / DMARC

- [ ] Add SPF TXT record in Cloudflare DNS:
  `v=spf1 include:_spf.google.com ~all`
- [ ] Add DMARC TXT record — Host: `_dmarc`, Value: `v=DMARC1; p=none;`
- [ ] Run [mail-tester.com](https://www.mail-tester.com) — aim for 9+/10

### After email is working:

- [ ] Use `fsosoyoos@gmail.com` for GBP, Search Console, and Analytics — one Google login for all business tools

---

## PHASE 4 — Google Business Profiles

See `GBP-GUIDE.md` for full field-by-field instructions.

- [ ] Create Falcon Resort GBP profile
  - Website URL: `https://falcon-spanish.com/falcon`
- [ ] Create Spanish Fiesta Resort GBP profile
  - Website URL: `https://falcon-spanish.com/spanish`
- [ ] Upload minimum 10 photos per profile (exterior, rooms, pool, beach)
- [ ] Submit verification request for both profiles (postcard takes 5–14 days)
- [ ] Once verified: enable messaging in the Google Business app

### After GBP is verified:

- [ ] In Google Maps, get the embed URL for each verified property
- [ ] Update `src/lib/config.ts`:
  - `properties.falcon.mapEmbedUrl`
  - `properties.spanish.mapEmbedUrl`
  - `site.mapEmbedUrl` (zoomed-out view showing both pins)
- [ ] Redeploy site (or Cloudflare Pages auto-deploys on git push)

---

## PHASE 5 — Google Search Console

- [ ] Go to [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Add property: `falcon-spanish.com` (verify via Cloudflare DNS TXT — Cloudflare has a one-click integration)
- [ ] Submit sitemap: `https://falcon-spanish.com/sitemap.xml`
- [ ] Request indexing on the homepage manually

---

## PHASE 6 — Domain Transfer to Porkbun

Do this last — everything else must be working first.

- [ ] Confirm website is live and working
- [ ] Confirm email is working (send/receive test)
- [ ] In Tera-Byte: disable domain lock, get EPP/auth code
- [ ] In Porkbun: Transfer Domain → enter `falcon-spanish.com` and auth code
- [ ] Pay transfer fee (~$10–15 USD for `.com`)
- [ ] Transfer takes 5–7 days — website and email will continue working (Cloudflare controls DNS)
- [ ] Confirm transfer completed in Porkbun dashboard

---

## PHASE 7 — Cancel Tera-Byte

Only after all of the following are confirmed:

- [ ] Website live on Cloudflare Pages
- [ ] Email working via Cloudflare Routing + Gmail Send As (send, receive, spam tests passed)
- [ ] Old email migrated and verified in Gmail
- [ ] Domain transferred to Porkbun
- [ ] Local email backup confirmed in Thunderbird

Then cancel Tera-Byte hosting.

---

## PHASE 8 — After Launch

- [ ] List on TripAdvisor — both properties (see NAP table in `GBP-GUIDE.md`)
- [ ] List on Tourism BC / Hello BC (free)
- [ ] Contact Destination Osoyoos to get listed
- [ ] Begin asking guests for Google reviews (see review script in `GBP-GUIDE.md`)
- [ ] Add new photos to GBP every 2–4 weeks during season
- [ ] Post a Google Post monthly (seasonal deals, openings, events)

---

## Quick Reference — Final Stack

```
Porkbun
└── domain ownership (falcon-spanish.com)

Cloudflare
└── DNS + CDN + SSL (free)

Cloudflare Pages
└── website hosting (free, auto-deploys from GitHub)

Gmail (fsosoyoos@gmail.com)
└── working inbox + GBP + Search Console + Analytics (free)

Cloudflare Email Routing
└── receives j@falcon-spanish.com → forwards to Gmail (free)

Gmail Send As
└── reply from j@falcon-spanish.com inside Gmail (free)
```

---

## Config Values to Update Before Launch

These are placeholders or temporary values currently in the codebase:

| Item | File | Status |
|---|---|---|
| `properties.spanish.mapEmbedUrl` | `src/lib/config.ts` | Using Falcon's embed temporarily |
| `site.mapEmbedUrl` | `src/lib/config.ts` | Needs dual-property embed after GBP verified |
| All gallery images | `src/lib/assets/images/` | Placeholder — replace with real property photos |
| Logo / favicon | `static/favicon.png` | Placeholder — replace when logo is ready |
