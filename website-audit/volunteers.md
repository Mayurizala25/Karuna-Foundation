# Volunteers — https://animalhelpline.in/volunteers/

**Audit status: VERIFIED** (raw HTML pulled via curl 2026-10-17). Page title (`<title>` tag, verified): "Volunteers - Karuna Foundation". WordPress page ID 91. Sitemap lastmod: 2026-08-14.

## Navigation
Identical to [home.md](home.md).

## Section order (top to bottom)
1. "Volunteer Form" (H3) — full signup form
2. "Here to Help, You Always" (H3) — 3 leader profiles
3. Our Review (Trustindex)
4. Follow on Facebook (broken, same error as every page)
5. Footer — 3× duplicated block, same as every page

## Verified exact form fields (CF7, field-by-field from raw HTML — corrects earlier non-raw summary)
| Label (visible) | Input type | name | required (HTML attr) |
|---|---|---|---|
| First Name * | text | first-name | **Yes** |
| Last Name * | text | last-name | **Yes** |
| Email * | email | your-email | **Yes** |
| Occupation | text | occupation | No |
| Residence Landline No | tel | landline | No |
| Mobile * | tel | mobile | **Yes** |
| Gender * | radio (Male / Female) | Gender | **No** — marked with an asterisk in the visible label but the `required` attribute is NOT present on either radio input (confirmed from source) |
| Date of Birth | text, placeholder "DD-MM-YYYY" | dob | No — **this is a plain text field, not an HTML date picker** |
| Passport Size Photo | file | passport-photo | No |
| Residence Address | textarea | address | No |
| Work Interest Status | **two checkboxes** (not a dropdown as previously assumed): "Animal Helpline" and "Rescue" | interest[] | No |
| "Have you worked with us before? If yes, please specify…" | two text fields: Year (year1) and Department (dept1) | year1 / dept1 | No |

**Correction from the earlier (non-raw) pass**: Work Interest Status is two checkboxes, not a single dropdown; Gender is visually marked required but the form does not technically enforce it; Date of Birth is a free-text field with a placeholder, not a native date input.

**Liability disclaimer (exact text)**: "Note: By joining the volunteer team, you acknowledge that your participation is entirely voluntary and at your own responsibility. Shree Karuna Foundation Trust shall not be held liable for any personal injury, accident, loss, or damage that may occur during volunteer activities. We request all volunteers to follow the Trust's guidelines and take appropriate safety precautions at all times."

## "Here to Help, You Always" — 3 leaders (verified, no titles/designations given beyond name)
- Lt. Shri NarottamBhai B. Popat
- Shri Rameshbhai K. Thakker
- Dr. M.G. Mardia
**Not verified**: how these three relate to the trustee board listed in [about.md](about.md) — no designation or relationship text found on this page; flagged for the client to clarify, not guessed.

## Images (verified)
Leader portraits: `narotambhai.png`, `thakker-1024x1024.png`, `mg-1024x1024.png` (all at `/wp-content/uploads/2026/07/`). No other volunteer-specific imagery beyond the shared header/footer assets.

## Colors
Sitewide Elementor Global Kit only confirmed (`#811413` / `#FFFFFF` / `#000000`, "Onest" font). **Not verified**: page-specific CSS overrides for post ID 91 — not fetched in this pass.

## Contact details
Identical to [contact.md](contact.md); plus the usual 3× duplicated footer mini-form.
