# bananabandito-mobile.github.io

This repository hosts the public marketing and privacy site for the **Elite Member IQ** mobile application, deployed via GitHub Pages.

## Pages

- `/` – landing page for Elite Member IQ, focused on small martial arts gyms, bootcamps, and personal trainers.
- `/privacy` – dedicated Privacy Policy page for Elite Member IQ, used as the privacy URL for Google Play and the Apple App Store.

## Store links

The site includes clearly marked placeholder links for the app store listings:

- Hero and navigation include `<a>` elements for:
  - App Store – element with `id="app-store-link"`.
  - Google Play – element with `id="google-play-link"`.

When the app is live:

1. Update the `href` attributes of these elements in `index.html` (and any other store CTAs) to point to the live App Store and Google Play URLs.
2. Use the same URLs in:
   - App Store Connect (Privacy Policy / app links).
   - Google Play Console (Privacy Policy URL and store listing links).

## Keeping privacy content aligned

The `/privacy` page is written to reflect the current Elite Member IQ implementation:

- Uses Firebase (Auth, Firestore, Storage, Functions, Messaging) and platform providers (Apple and Google).
- Does **not** assume any additional analytics or advertising SDKs beyond Firebase.
- Assumes support and data requests are handled via the in-app support/help section with a typical 24‑hour response time.

Whenever you make changes that affect data practices, you should:

1. **Update the code** – for example, when adding new SDKs or changing how data is stored.
2. **Review and update `/privacy`** so that:
   - All new data types and purposes are reflected.
   - Any new third parties/SDKs are described at a high level.
3. **Update store disclosures**:
   - Google Play Data Safety form.
   - Apple App Privacy details and privacy questionnaire.

This helps keep the website, app stores, and implementation in sync for reviewers and users.*** End Patch】}```"/>