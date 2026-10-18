# Donations — no dedicated page; content embedded in Home + 3 stub pages

**Audit status: VERIFIED** (raw HTML pulled via curl 2026-10-17 for all items below).

There is no single "/donate/" URL on the live site. The header "Donate Now" button on every page links to `https://animalhelpline.in/#donate` — **confirmed**: an in-page anchor to the Donate section that only exists on the Home page (`id="donate"` on a container at that section — see [home.md](home.md)). Visiting that anchor from any other page navigates away to Home.

## Donation content (verified, from Home page — see [home.md](home.md) for full exact text)
**Indian citizens**: UPI `SHREEKARUNAFOUNDATION@BARODAMPAY`; Bank of Baroda A/C 03600100026705, Rajkot Main branch, IFSC BARBORAJKOT; QR code image provided.
**Foreign citizens/NRI**: SHREE KARUNA FOUNDATION TRUST, State Bank of India A/C 40270694262, New Delhi Main Branch, Branch Code 00691, IFSC SBIN0000691, SWIFT SBININBB104, FCRA 042080102.
**Interactive form**: CF7 id 2091 — citizenship radio toggle (Indian/Foreign) + Full Name*, Email*, Mobile*, City, Message — only Name/Email/Mobile are HTML-required. Selecting a citizenship option swaps which QR image is shown via jQuery; it does not change the bank-detail text blocks, which show both sets regardless of selection.
**"Donation Tithi Scheme"**: heading only — **confirmed empty, no explanatory body text found anywhere in the Home page source.**
**"Karuna Talks"**: heading reuses "The Voice of Karuna" studio-initiative copy verbatim — content duplication, not a distinct section.

## /donor-dashboard/ — verified directly
Page ID 905. Page title: "Donor Dashboard - Karuna Foundation". H1 "Donor Dashboard". **Confirmed**: body contains nothing beyond the standard shared header/footer chrome (reviews widget, 4 locations, legal-doc links, Facebook feed). No login form, no donation form, no payment-gateway markup, no donation-amount selector, no 80G/tax-receipt text, no dashboard UI of any kind in the static source. If a real dashboard exists, it would have to be rendered entirely client-side after authentication — **not verified either way, since this crawl cannot authenticate**.

## /donation-confirmation/ and /donation-failed/ — verified directly
Page IDs 903 and 904. Page titles: "Donation Confirmation - Karuna Foundation" / "Donation Failed - Karuna Foundation". H1 "Donation Confirmation" / "Donation Failed" respectively. **Confirmed**: both are otherwise empty — standard header/footer chrome only, no transaction-detail placeholders, no "thank you" or "try again" body copy, no visible payment-gateway reference (e.g. no Razorpay/Instamojo/PayU script tags found in either page's `<head>`). These read as bare WordPress pages created to serve as redirect targets, with no template content ever added.

## What remains genuinely unknown (marked Not verified, not guessed)
- Whether a real payment gateway is wired up server-side (a static crawl cannot trigger or observe a payment flow).
- Full terms of the "Tithi Scheme" (tiers, amounts, what's funded, donor benefits) — no text exists on the live site to source this from; it must come from the client.
- Whether 80G tax-exemption applies — no mention of "80G" found anywhere in any audited page's source (only "12AA provisional registration" is referenced); confirm actual tax status with the client/trust's CA before publishing any tax-deduction claim.

## Recommendation (unchanged from prior audit pass)
A dedicated, shareable `/donate/` page consolidating the UPI/bank/QR details and the donation form is recommended for the rebuild, since the only current entry point is an in-page anchor on Home.
