# Online Setup & Launch Checklist

## Falcon Resort & Spanish Fiesta Resort — falcon-spanish.com

Complete in order. Do not cancel Tera-Byte or submit to Google until all items are checked.

---

## PHASE 1 — Before You Touch Anything

> IMPORTANT: Roundcube is only your current webmail interface. Your actual email is likely stored on Tera-Byte's IMAP mail server.
>
> The migration process copies mail from the Tera-Byte mail server itself — not from Roundcube.

> IMPORTANT: Thunderbird backup is your safety net.
>
> Do not rely entirely on Gmail import/migration tools.
>
> Keep a full local IMAP sync until the migration is fully verified.

* [ ] Back up all email via Thunderbird (IMAP sync from Tera-Byte)
* [ ] Verify Thunderbird fully synced:

  * Inbox
  * Sent mail
  * custom folders
  * archived mail
  * attachments
* [ ] Download a local copy of the old Tera-Byte website files (just in case)
* [ ] Note your current Tera-Byte nameservers before changing anything
* [ ] Record current Tera-Byte IMAP/SMTP settings
* [ ] Confirm you know all mailbox passwords before migration

---

## PHASE 1b — Dry Run on a Test Domain (Do This First)

> Run the full setup on a personal domain you already own on Porkbun before touching
> `falcon-spanish.com`.
>
> This lets you iron out any issues with zero risk — Tera-Byte keeps
> running untouched until you're ready.

* [ ] Pick a spare domain from your Porkbun account to use as the test domain
* [ ] Complete Phases 2–5 using the test domain instead of `falcon-spanish.com`
* [ ] Verify everything works end-to-end:

  * Website deploys and loads on the test domain
  * Email sends and receives on the test domain
  * mail-tester.com scores 9+/10
  * SPF, DKIM, DMARC all passing
  * Gmail Send As works properly
  * Emails do not land in spam folders
* [ ] Once confirmed, proceed to Phase 6 to bring `falcon-spanish.com` into the same setup

### Switching from test domain to falcon-spanish.com (after dry run):

* [ ] Transfer `falcon-spanish.com` to Porkbun (Phase 6)
* [ ] Add `falcon-spanish.com` to Cloudflare — copy the exact DNS records from the test domain
* [ ] `j@falcon-spanish.com` becomes your primary customer-facing inbox
* [ ] Update Cloudflare Pages custom domain from test domain to `falcon-spanish.com`
* [ ] Verify site loads and email works on `falcon-spanish.com`
* [ ] Then cancel Tera-Byte (Phase 7)

---

## PHASE 2 — DNS & Hosting (Do Together)

### 2a — Cloudflare

* [ ] Create Cloudflare account at [https://dash.cloudflare.com](https://dash.cloudflare.com)
* [ ] Add domain `falcon-spanish.com`
* [ ] Cloudflare auto-imports existing DNS records — **do not delete anything yet**
* [ ] Copy the two Cloudflare nameservers (e.g. `alex.ns.cloudflare.com`)

### 2b — Update Nameservers at Tera-Byte

* [ ] In Tera-Byte: Domains → Manage Domain → Nameservers
* [ ] Replace old nameservers with the two Cloudflare ones
* [ ] Save and wait (usually 5 min – 2 hours; up to 24h)
* [ ] Verify old website still works after propagation
* [ ] Verify old email still works after propagation

> Changing nameservers does NOT immediately move your website or email.
>
> Cloudflare simply becomes the DNS manager while traffic still points to the existing Tera-Byte services.

### 2c — Deploy Website to Cloudflare Pages

* [ ] Push the `fs-website` repo to GitHub (if not already there)
* [ ] In Cloudflare dashboard: Pages → Create a project → Connect to GitHub
* [ ] Select the `fs-website` repo
* [ ] Build settings:

  * Framework preset: **SvelteKit**
  * Build command: `pnpm build` *(this project uses pnpm — Cloudflare Pages auto-detects it)*
  * Output directory: `build`
* [ ] Deploy and confirm the preview URL works
* [ ] Add custom domain `falcon-spanish.com` in Cloudflare Pages settings
* [ ] Cloudflare handles SSL automatically — no extra steps needed
* [ ] Verify live site at `https://falcon-spanish.com`

---

## PHASE 3 — Email Setup (Free Stack)

> Setup:
>
> Cloudflare Email Routing receives all `@falcon-spanish.com` email and forwards to Gmail.
>
> Gmail Send As lets you reply from `j@falcon-spanish.com` inside Gmail.
>
> Total cost: $0.

> Accounts:
>
> * `fsosoyoos@gmail.com` — your main working Gmail inbox. OTAs, vendors, and internal use.
> * `j@falcon-spanish.com` — customer-facing address, forwards to Gmail via Cloudflare routing.

> If you later hire staff and need separate inboxes per person, upgrade to Google Workspace.
>
> The switch takes ~30 minutes of DNS changes and everything else stays the same.

### 3a — Cloudflare Email Routing

* [ ] In Cloudflare dashboard: Email → Email Routing → Enable
* [ ] Add routing rule: `j@falcon-spanish.com` → `fsosoyoos@gmail.com`
* [ ] Add a catch-all rule: any other `@falcon-spanish.com` address → `fsosoyoos@gmail.com`
* [ ] Cloudflare adds the required MX records automatically
* [ ] Delete old Tera-Byte MX records if they were not automatically replaced
* [ ] Send a test email to `j@falcon-spanish.com`
* [ ] Confirm it arrives in Gmail

### 3b — Gmail Send As (reply from [j@falcon-spanish.com](mailto:j@falcon-spanish.com))

* [ ] In Gmail (`fsosoyoos@gmail.com`): Settings → See all settings → Accounts → Send mail as
* [ ] Click "Add another email address"
* [ ] Enter name and `j@falcon-spanish.com`
* [ ] Gmail sends a verification email to `j@falcon-spanish.com`
* [ ] Verification email arrives in Gmail through Cloudflare routing
* [ ] Click the verification link
* [ ] Set `j@falcon-spanish.com` as the default send address
* [ ] Test by sending an email
* [ ] Verify recipient sees it from `j@falcon-spanish.com`

### 3c — Migrate old email from Tera-Byte

> Recommended approach:
>
> 1. Thunderbird IMAP backup first
> 2. Then Gmail import/migration
>
> Thunderbird preserves the cleanest local backup if anything goes wrong.

* [ ] Confirm Thunderbird fully synced all mail/folders before migration
* [ ] In Gmail: Settings → See all settings → Accounts → Check mail from other accounts → Add a mail account
* [ ] Enter `j@falcon-spanish.com` with Tera-Byte IMAP credentials
* [ ] Gmail imports old mail into Gmail
* [ ] Verify:

  * Inbox
  * Sent mail
  * custom folders
  * attachments
  * older archived messages
* [ ] Keep Thunderbird backup until fully verified

### 3d — SPF / DKIM / DMARC

* [ ] Add SPF TXT record in Cloudflare DNS:
  `v=spf1 include:_spf.google.com ~all`

> **DKIM note:** Domain-specific DKIM signing (`d=falcon-spanish.com`) is only available on
> Google Workspace — not free Gmail. With Gmail Send As, Google signs outbound mail with their
> own DKIM (`d=gmail.com`). This is fine — DMARC will still pass via SPF alignment, and
> deliverability is not significantly impacted. If mail-tester.com flags missing DKIM, this is
> why. Upgrade to Google Workspace later if DKIM alignment becomes a concern.

* [ ] Add DMARC TXT record:

  * Host: `_dmarc`
  * Value: `v=DMARC1; p=none;`

* [ ] Run [https://www.mail-tester.com](https://www.mail-tester.com)

* [ ] Aim for 9+/10 score

* [ ] Send test emails to:

  * Gmail
  * Outlook
  * iCloud
  * Yahoo

* [ ] Verify emails are not landing in spam

### After email is working:

* [ ] Use `fsosoyoos@gmail.com` for GBP, Search Console, and Analytics
* [ ] Keep everything under one Google login

---

## PHASE 4 — Google Business Profiles

See `GBP-GUIDE.md` for full field-by-field instructions.

* [ ] Create Falcon Resort GBP profile

  * Website URL: `https://falcon-spanish.com/falcon`
* [ ] Create Spanish Fiesta Resort GBP profile

  * Website URL: `https://falcon-spanish.com/spanish`
* [ ] Upload minimum 10 photos per profile (exterior, rooms, pool, beach)
* [ ] Submit verification request for both profiles (postcard takes 5–14 days)
* [ ] Once verified: enable messaging in the Google Business app

### After GBP is verified:

* [ ] In Google Maps, get the embed URL for each verified property
* [ ] Update `src/lib/config.ts`:

  * `properties.falcon.mapEmbedUrl`
  * `properties.spanish.mapEmbedUrl`
  * `site.mapEmbedUrl` (zoomed-out view showing both pins)
* [ ] Redeploy site (or Cloudflare Pages auto-deploys on git push)

---

## PHASE 5 — Google Search Console

* [ ] Go to [https://search.google.com/search-console](https://search.google.com/search-console)
* [ ] Add property: `falcon-spanish.com`
* [ ] Verify via Cloudflare DNS TXT record
* [ ] Submit sitemap: `https://falcon-spanish.com/sitemap.xml`
* [ ] Request indexing on the homepage manually

---

## PHASE 6 — Domain Transfer to Porkbun

Do this last — everything else must be working first.

* [ ] Confirm website is live and working
* [ ] Confirm email is working (send/receive tests passed)
* [ ] Confirm Thunderbird backup exists
* [ ] In Tera-Byte: disable domain lock
* [ ] Get EPP/auth code
* [ ] In Porkbun: Transfer Domain → enter `falcon-spanish.com` and auth code
* [ ] Pay transfer fee (~$10–15 USD for `.com`)
* [ ] Transfer takes 5–7 days
* [ ] Website and email continue working because Cloudflare controls DNS
* [ ] Confirm transfer completed in Porkbun dashboard

---

## PHASE 7 — Cancel Tera-Byte

Only after all of the following are confirmed:

* [ ] Website live on Cloudflare Pages
* [ ] Email working via Cloudflare Routing + Gmail Send As
* [ ] SPF passing
* [ ] DKIM passing
* [ ] DMARC configured
* [ ] Old email migrated and verified in Gmail
* [ ] Domain transferred to Porkbun
* [ ] Local email backup confirmed in Thunderbird
* [ ] Spam-folder tests passed

Then cancel Tera-Byte hosting.

---

## PHASE 8 — After Launch

* [ ] List on TripAdvisor — both properties
* [ ] List on Tourism BC / Hello BC
* [ ] Contact Destination Osoyoos to get listed
* [ ] Begin asking guests for Google reviews
* [ ] Add new photos to GBP every 2–4 weeks during season
* [ ] Post a Google Post monthly

---

## Quick Reference — Final Stack

```text
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

Thunderbird
└── local IMAP email backup + migration safety net
```

---

## Config Values to Update Before Launch

These are placeholders or temporary values currently in the codebase:

| Item                             | File                     | Status                                          |
| -------------------------------- | ------------------------ | ----------------------------------------------- |
| `properties.spanish.mapEmbedUrl` | `src/lib/config.ts`      | Using Falcon's embed temporarily                |
| `site.mapEmbedUrl`               | `src/lib/config.ts`      | Needs dual-property embed after GBP verified    |
| All gallery images               | `src/lib/assets/images/` | Placeholder — replace with real property photos |
| Logo / favicon                   | `static/favicon.png`     | Placeholder — replace when logo is ready        |
