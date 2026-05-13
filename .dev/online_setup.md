# Online Setup & Launch Checklist
## Falcon Resort & Spanish Fiesta Resort — falcon-spanish.com

Complete in order. Do not cancel Tera-Byte or submit to Google until all items are checked.

---

## PHASE 1 — Before You Touch Anything

- [ ] Back up all email via Thunderbird (IMAP sync from Tera-Byte)
- [ ] Download a local copy of the old Tera-Byte website files (just in case)
- [ ] Note your current Tera-Byte nameservers before changing anything

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

## PHASE 3 — Email Migration (Google Workspace)

> **Why Google Workspace:** One Google account covers email, GBP, Search Console, Google
> Analytics, and Google Maps management. No juggling separate logins. $7.20 CAD/user/month
> for one user = ~$86/year.
>
> **Before signing up:** You already have `falcon.spanish.resorts@gmail.com`. Use that as the
> Google account you sign up with — it becomes the Workspace admin account. Your actual working
> inbox will be `j@falcon-spanish.com` inside that Workspace. One Google login for everything.

- [ ] Sign up at [workspace.google.com](https://workspace.google.com) → Business Starter plan
- [ ] Add domain `falcon-spanish.com` during signup
- [ ] Google gives a TXT record to verify domain ownership — add it in Cloudflare DNS
- [ ] Complete domain verification in Google Workspace admin console
- [ ] Delete old Tera-Byte MX records from Cloudflare DNS
- [ ] Add Google Workspace MX records (Google provides these — 5 records with priorities)
- [ ] Add SPF TXT record: `v=spf1 include:_spf.google.com ~all`
- [ ] Add DKIM TXT record — in Google Admin: Apps → Gmail → Authenticate email → generate key → add in Cloudflare
- [ ] Add DMARC TXT record — Host: `_dmarc`, Value: `v=DMARC1; p=none;`
- [ ] Sign into Gmail with `j@falcon-spanish.com` — confirm email is receiving
- [ ] Test sending — confirm it arrives and doesn't land in spam
- [ ] Run [mail-tester.com](https://www.mail-tester.com) — aim for 9+/10
- [ ] Migrate old email: in Gmail → Settings → See all settings → Accounts → Import mail and contacts → use Tera-Byte IMAP credentials
- [ ] Verify all old mail came through (inbox, sent, folders)

### After email is working:

- [ ] Use this same Google account for GBP, Search Console, and Analytics — one login for everything

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
- [ ] Email working on Google Workspace (send, receive, spam tests passed)
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

Google Workspace (Business Starter)
└── email (j@falcon-spanish.com) + GBP + Search Console + Analytics (~$7.20 CAD/mo)
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
