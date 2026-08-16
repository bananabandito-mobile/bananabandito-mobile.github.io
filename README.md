# bananabandito-mobile.github.io

This repository hosts the public marketing and privacy site for the **Elite Member IQ** mobile application, deployed via GitHub Pages behind the custom domain **https://mobile.bananabandito.com/** (Cloudflare in front of GitHub Pages). `https://bananabandito-mobile.github.io/` redirects there.

## Pages

- `/` – landing page for Elite Member IQ, focused on small martial arts gyms, bootcamps, and personal trainers.
- `/privacy` – dedicated Privacy Policy page for Elite Member IQ, used as the privacy URL for Google Play and the Apple App Store (`https://mobile.bananabandito.com/privacy/`).

The deploy workflow publishes only `index.html`, `privacy/`, `styles.css`, `js/`, and `img/`. It does not publish `README.md` or `.github/`.

## What we market (keep in sync with the app)

Promote only shipped product:

- Join-code onboarding with owner approval (invites after billing setup)
- Announcements / bulletin with push
- Schedule with RSVPs, targeted sessions, and instructor assignment
- Staff inbox and class channels (not member-to-member DMs)
- PDF documents and e-sign
- Stripe Connect payouts, membership plans, household billing, dependents
- Owner analytics dashboard (counts, not enterprise reporting)

Do **not** claim: gym-floor check-in, lead CRM, email campaigns, member DMs, multi-location inside one community, a “coach” role, or live store URLs until listings exist.

Roles in the app: Owner, Manager, Instructor, Staff, Billing Admin, Member, Dependent.

## Store links

The site includes clearly marked placeholder links for the app store listings:

- Hero and navigation include `<a>` elements for:
  - App Store – element with `id="app-store-link"`.
  - Google Play – element with `id="google-play-link"`.

When the app is live:

1. Update **every** store CTA `href="#"` on `index.html` and `privacy/index.html` (nav, hero, footer, and “Get the app”) to the official `apps.apple.com` and `play.google.com` listing URLs. Do not use link shorteners. The nav pair is tagged `id="app-store-link"` and `id="google-play-link"`; other CTAs use the `store-link--appstore` / `store-link--play` classes.
2. Use the same URLs in:
   - App Store Connect (Privacy Policy / app links).
   - Google Play Console (Privacy Policy URL and store listing links).

## Screenshots

The landing page uses labeled CSS previews, not Patrol test captures. Integration artifacts under `elitememberiq/integration_test/artifacts/` contain PII, E2E fixture names, empty states, and emulator chrome — do not copy them here.

When production builds are ready, recapture a seeded demo community (no real emails, no “E2E” titles, no debug banner) and replace the previews with files in `img/screenshots/`:

| Screen | Suggested file |
|--------|----------------|
| Owner home (hero) | `img/screenshots/hero-home-owner.png` |
| Announcements | `img/screenshots/bulletin-posts.png` |
| Schedule (Day, with events) | `img/screenshots/schedule-day.png` |
| Members roster | `img/screenshots/members-roster.png` |
| Staff inbox or approvals | `img/screenshots/chat-inbox.png` |
| Documents library | `img/screenshots/documents-library.png` |
| Billing hub | `img/screenshots/billing-hub.png` |
| Plans list | `img/screenshots/plans-memberships.png` |

Do not capture login screens, Stripe Connect WebViews, or share-code screens that show a live invite code.

## Keeping privacy content aligned

The `/privacy` page is written to reflect the current Elite Member IQ implementation:

- Firebase Authentication: email and password only (no Apple or Google Sign-In). Firestore, Storage, Functions, Cloud Messaging, App Check, Crashlytics.
- Stripe for platform billing, member subscriptions, household plans, and Connect payouts (not App Store / Play in-app purchases).
- Chat images, PDF documents / e-sign, dependents, and community-scoped staff access.
- Accounts are 13+. Under-13 dependents are household profiles only (no login, chat, or date of birth). Members 13–17 may have their own login, supervised in the gym.
- This marketing website sets no cookies and uses no `localStorage` / `sessionStorage`. GitHub Pages and Cloudflare are disclosed as website hosts.
- Privacy and deletion requests: `elitememberiq-support@bananabandito.com`. Gym operational issues: in-app Chat to community staff.
- No 24-hour SLA unless operations can meet it.

HTML includes a Content-Security-Policy and Referrer-Policy. Set the remaining headers in Cloudflare (GitHub Pages cannot set them):

1. **SSL/TLS → Edge Certificates → HSTS:** enable, max-age 12 months (`31536000`), include subdomains. Do **not** turn on preload unless you intend to keep `mobile.bananabandito.com` permanently.
2. **Rules → Transform Rules → Modify Response Header** (for `mobile.bananabandito.com`):
   - `X-Content-Type-Options`: `nosniff`
   - `X-Frame-Options`: `DENY`
   - Optional: `Permissions-Policy`: `camera=(), microphone=(), geolocation=()`
3. Use **SSL/TLS Full (strict)** so Cloudflare talks to GitHub Pages over HTTPS.

## Protecting the store privacy URL

`/privacy` is what App Store Connect and Google Play will cite. Anyone who can push to `main` with your GitHub login can change it. This repo cannot enforce that; do it in GitHub:

1. **Account 2FA:** GitHub → Settings → Password and authentication → enable 2FA (passkey or security key preferred).
2. **Org 2FA:** Organization Settings → Authentication security → Require two-factor authentication for members.
3. **Branch ruleset on `main`:** Settings → Rules → Rulesets → New ruleset, target `main`:
   - Block force pushes
   - Block deletions
   - You can keep pushing from your laptop; do **not** require pull requests unless you want to change that workflow.
4. **`github-pages` environment:** Settings → Environments → `github-pages` → add a short wait timer (5–10 minutes) so you can cancel a bad deploy. Required reviewers only help if a *second* GitHub user exists; with one person they add a click, not a second key.
5. Do not put a GitHub personal access token in this repo or in client apps.

Whenever you make changes that affect data practices, you should:

1. **Update the code** – for example, when adding new SDKs or changing how data is stored.
2. **Review and update `/privacy`** so that:
   - All new data types and purposes are reflected.
   - Any new third parties/SDKs are described at a high level.
3. **Update store disclosures**:
   - Google Play Data Safety form.
   - Apple App Privacy details and privacy questionnaire.

This helps keep the website, app stores, and implementation in sync for reviewers and users.
