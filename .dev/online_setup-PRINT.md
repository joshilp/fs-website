# Online Setup — Print Checklist
## Falcon Resort & Spanish Fiesta Resort — falcon-spanish.com

> **Full guide with explanations:** `online_setup.md`
>
> Complete phases in order. Do not cancel Tera-Byte until Phase 7 is fully checked off.
>
> Use one dedicated business Gmail for everything — GBP, Search Console, Analytics, Cloudflare.

---

## PHASE 1 — Back Up Email Before Anything Else

- [ ] Install Thunderbird, add Tera-Byte IMAP account, let it fully sync
- [ ] Confirm synced: Inbox, Sent, custom folders, archived mail, attachments
- [ ] Note current Tera-Byte nameservers, IMAP/SMTP settings, and mailbox passwords
- [ ] Download a local copy of the old Tera-Byte website files

---

## PHASE 1b — Dry Run on a Test Domain First

*Use a spare domain from Porkbun. Complete Phases 2–5 on it before touching `falcon-spanish.com`.*

- [ ] Pick a test domain from Porkbun
- [ ] Run Phases 2–5 on test domain
- [ ] Confirm: site loads · email sends/receives · mail-tester.com 9+/10 · no spam issues
- [ ] Once confirmed, repeat for `falcon-spanish.com` (Phases 2–5 again, then Phase 6)

---

## PHASE 2 — DNS & Hosting

**2a — Cloudflare**
- [ ] Create account at [dash.cloudflare.com](https://dash.cloudflare.com)
- [ ] Add domain — Cloudflare auto-imports DNS records (do not delete anything yet)
- [ ] Copy the two Cloudflare nameservers

**2b — Update Nameservers at Tera-Byte**
- [ ] Domains → Manage Domain → Nameservers → replace with Cloudflare nameservers
- [ ] Wait for propagation (5 min – 24h)
- [ ] Confirm old site and old email still work

**2c — Deploy Website to Cloudflare Pages**
- [ ] Push `fs-website` repo to GitHub
- [ ] Cloudflare dashboard: Pages → Create project → Connect to GitHub → select `fs-website`
- [ ] Build settings: Framework: **SvelteKit** · Command: `pnpm build` · Output: `build`
- [ ] Deploy — confirm preview URL works
- [ ] Add custom domain `falcon-spanish.com` in Pages settings
- [ ] Confirm live site at `https://falcon-spanish.com`

---

## PHASE 3 — Email

**3a — Cloudflare Email Routing**
- [ ] Cloudflare dashboard: Email → Email Routing → Enable
- [ ] Add rule: `j@falcon-spanish.com` → *(your Gmail)*
- [ ] Add catch-all: any `@falcon-spanish.com` → *(your Gmail)*
- [ ] Cloudflare adds MX records automatically — delete old Tera-Byte MX records if leftover
- [ ] Send test to `j@falcon-spanish.com` — confirm it arrives in Gmail

**3b — Gmail Send As**
- [ ] Gmail: Settings → Accounts → Send mail as → Add another email address
- [ ] Add `j@falcon-spanish.com` — Gmail sends a verification email
- [ ] Verification email arrives in Gmail via Cloudflare routing — click the link
- [ ] Set `j@falcon-spanish.com` as default send address
- [ ] Send a test — confirm recipient sees `j@falcon-spanish.com` as sender

**3c — Migrate Old Email**
- [ ] Gmail: Settings → Accounts → Check mail from other accounts → Add mail account
- [ ] Enter `j@falcon-spanish.com` with Tera-Byte IMAP credentials
- [ ] Gmail imports old mail — verify Inbox, Sent, folders, attachments
- [ ] Keep Thunderbird backup until fully verified

**3d — SPF / DKIM / DMARC**
- [ ] Add SPF TXT record in Cloudflare DNS:
  `v=spf1 include:_spf.google.com ~all`
- [ ] Add DMARC TXT record — Host: `_dmarc` · Value: `v=DMARC1; p=none;`
- [ ] Run [mail-tester.com](https://www.mail-tester.com) — aim for 9+/10
- [ ] Send test emails to Gmail, Outlook, iCloud, Yahoo — confirm not landing in spam

---

## PHASE 4 — Google Business Profiles

*See `GBP-GUIDE-PRINT.md` for all field values and photo instructions.*

- [ ] Search Maps for existing listings first — claim if found, create only if not
- [ ] Create / claim Falcon Resort GBP — website: `https://falcon-spanish.com/falcon`
- [ ] Create / claim Spanish Fiesta Resort GBP — website: `https://falcon-spanish.com/spanish`
- [ ] Fill all fields, attributes, descriptions for both profiles
- [ ] Upload 10+ photos per profile
- [ ] Submit verification request (postcard: 5–14 days)
- [ ] Once verified: enable messaging in Google Business app
- [ ] Get embed URLs from Maps → update `src/lib/config.ts` → push to GitHub

---

## PHASE 5 — Google Search Console

- [ ] Go to [search.google.com/search-console](https://search.google.com/search-console)
- [ ] Add property: `falcon-spanish.com`
- [ ] Verify via Cloudflare DNS TXT record
- [ ] Submit sitemap: `https://falcon-spanish.com/sitemap.xml`
- [ ] Request indexing on homepage manually

---

## PHASE 6 — Domain Transfer to Porkbun

*Only after site and email are confirmed working on `falcon-spanish.com`.*

- [ ] In Tera-Byte: disable domain lock → get EPP/auth code
- [ ] In Porkbun: Transfer Domain → enter `falcon-spanish.com` and auth code → pay fee (~$10–15 USD)
- [ ] Transfer takes 5–7 days — site and email stay up throughout
- [ ] Confirm transfer complete in Porkbun dashboard

---

## PHASE 7 — Cancel Tera-Byte

*Only cancel after ALL of these are confirmed:*

- [ ] Website live on Cloudflare Pages
- [ ] Email working — send and receive
- [ ] SPF / DMARC configured
- [ ] mail-tester.com 9+/10
- [ ] Old email migrated and verified in Gmail
- [ ] Thunderbird local backup confirmed
- [ ] Domain transferred to Porkbun

---

## PHASE 8 — After Launch

- [ ] List on TripAdvisor — both properties
- [ ] List on Tourism BC / Hello BC (hellobc.com)
- [ ] Email Destination Osoyoos (destinationosoyoos.com) to get listed
- [ ] Start asking guests for Google reviews at checkout
- [ ] Add new photos to GBP every 2–4 weeks during season
- [ ] Post a Google Post monthly

---

## Config Values Still Needed

| Item | File | Status |
|---|---|---|
| `properties.falcon.mapEmbedUrl` | `src/lib/config.ts` | Update after Falcon GBP verified |
| `properties.spanish.mapEmbedUrl` | `src/lib/config.ts` | Update after Spanish GBP verified |
| `site.mapEmbedUrl` | `src/lib/config.ts` | Zoomed-out dual-property embed |
| Hero / gallery images | `src/lib/assets/images/` | Replace placeholders with real photos |
| CTA background images | `src/lib/assets/images/` | Replace `cta-bg.jpg` per property folder |
| Logo / favicon | `static/` | ✅ Ready |
