# Site Inventory — animalhelpline.in (Shree Karuna Foundation Trust)

Audited: 2026-10-17 (three passes — initial WebFetch-based summary pass; a full VERIFIED pass against raw HTML pulled directly via curl, parsed for exact text/headings/nav/images/forms/colors; a follow-up pass that re-verified /events-2/ + its 4 sub-pages and corrected two findings on Home and About)
Source: live crawl of https://animalhelpline.in/ (nav + sitemap.xml → page-sitemap.xml)

## Audit status by page

| Page | Status | Audit file |
|---|---|---|
| Home (/) | **VERIFIED** | [home.md](home.md) |
| About (/about/) | **VERIFIED** | [about.md](about.md) |
| Services (/services/) | **VERIFIED** | [services.md](services.md) |
| Contact Us (/contact-us/) | **VERIFIED** | [contact.md](contact.md) |
| Volunteers (/volunteers/) | **VERIFIED** | [volunteers.md](volunteers.md) |
| Careers (/careers/) | **VERIFIED** | [careers.md](careers.md) |
| Donate Now / donation pages | **VERIFIED** (no dedicated page exists; confirmed via Home + 3 stub pages) | [donations.md](donations.md) |
| /about-us/ | **VERIFIED** | [other-pages.md](other-pages.md) |
| /home-old/ | **VERIFIED** | [other-pages.md](other-pages.md) |
| /csr-activities/ | **VERIFIED** | [other-pages.md](other-pages.md) |
| /certificate/ | **VERIFIED** | [other-pages.md](other-pages.md) |
| /animal-rescue/ | **VERIFIED** | [other-pages.md](other-pages.md) |
| /animal-hospital/ | **VERIFIED** | [other-pages.md](other-pages.md) |
| /distribution/ | **VERIFIED** | [other-pages.md](other-pages.md) |
| /makar-sankranti-health-camp/ | **VERIFIED** | [other-pages.md](other-pages.md) |
| /events/ | **VERIFIED** | [other-pages.md](other-pages.md) |
| /events-2/ + sub-pages (locations/categories/tags/my-bookings) | **VERIFIED** — all 5 return HTTP 200 and are confirmed bare "CONTENTS" placeholder stubs | [other-pages.md](other-pages.md) |
| category-sitemap.xml / author-sitemap.xml contents | **NOT VERIFIED** — out of scope (blog archive pages, not content pages) | [other-pages.md](other-pages.md) |
| Images/assets/colors/fonts | **VERIFIED** (URL/hex level, from source — no rendered screenshot taken) | [images-assets.md](images-assets.md) |

"VERIFIED" = raw HTML fetched directly with curl and parsed for exact headings, body text, nav links, image URLs, form fields (name/type/required), and CSS color values — not a paraphrased summary. Anything within a VERIFIED page that could not be confirmed this way is explicitly marked "Not verified" inline in that page's file rather than guessed.

## Primary navigation (verified identical on every page audited)
| Label | href |
|---|---|
| Home | https://animalhelpline.in/ |
| About | https://animalhelpline.in/about/ |
| Services | https://animalhelpline.in/services/ |
| Volunteers | https://animalhelpline.in/volunteers/ |
| Careers | https://animalhelpline.in/careers/ |
| Contact Us | https://animalhelpline.in/contact-us/ |
| Donate Now (button) | https://animalhelpline.in/#donate (anchors into Home's Donate section; no dedicated page) |

The menu markup repeats 4× in the DOM on every page (desktop + responsive/offcanvas variants) — this is normal Astra/Elementor header behavior, not a bug.

## All URLs found in page-sitemap.xml
| URL | Last modified | Status / notes |
|---|---|---|
| / | 2026-08-21 | Live homepage — see [home.md](home.md) |
| /about/ | 2026-10-01 | Current About page (newest, clean) — see [about.md](about.md) |
| /about-us/ | 2026-07-10 | **Duplicate/older About page** — verified to contain two separate, mutually-inconsistent Trustees sections and two separate, mutually-inconsistent Doctor sections on one page — see [other-pages.md](other-pages.md) |
| /services/ | 2026-08-21 | Current Services page — see [services.md](services.md) |
| /volunteers/ | 2026-08-14 | Current Volunteers page — see [volunteers.md](volunteers.md) |
| /careers/ | 2026-08-20 | Current Careers page — see [careers.md](careers.md) |
| /contact-us/ | 2026-08-14 | Current Contact page — see [contact.md](contact.md) |
| /home-old/ | 2026-07-10 | **Legacy homepage** — verified to contain a more detailed 7-category "Our Activities" section not present on the live Home — see [other-pages.md](other-pages.md) |
| /donation-confirmation/ | 2025-06-21 | Verified empty transactional stub (H1 only + shared chrome) — see [donations.md](donations.md) |
| /donation-failed/ | 2025-06-21 | Verified empty transactional stub (H1 only + shared chrome) — see [donations.md](donations.md) |
| /donor-dashboard/ | 2025-06-21 | Verified: no login/form/payment-gateway markup of any kind in source — see [donations.md](donations.md) |
| /csr-activities/ | 2025-06-21 | Verified: 3 feeding-program cards only, no CSR-partner content — see [other-pages.md](other-pages.md) |
| /certificate/ | 2025-08-27 | Verified: legal-doc hub; headings misspell "Karuna Registration" as "Kruna Regestration" — see [other-pages.md](other-pages.md) |
| /animal-rescue/ | 2026-07-06 | Verified: one generic paragraph + shared photo pool — see [other-pages.md](other-pages.md) |
| /makar-sankranti-health-camp/ | 2026-07-06 | Verified: body paragraph is character-for-character identical to /animal-rescue/'s — see [other-pages.md](other-pages.md) |
| /distribution/ | 2026-07-06 | Verified: one generic paragraph + a genuine press-clipping asset (The Hindu) — see [other-pages.md](other-pages.md) |
| /animal-hospital/ | 2026-07-08 | Verified: one generic paragraph + 2 AI-generated (Gemini) images — see [other-pages.md](other-pages.md) |
| /events/ | 2025-07-11 | Verified: "0 events found", same "Makar Sankranti" past event listed 3× with 3 different images — see [other-pages.md](other-pages.md) |
| /events-2/ | 2025-07-11 | Verified: HTTP 200, page ID 1136, title "Events - Karuna Foundation" — body is the literal placeholder text "CONTENTS", no calendar widget — see [other-pages.md](other-pages.md) |
| /events-2/locations/ | 2025-07-11 | Verified: HTTP 200, page ID 1137, title "Locations - Karuna Foundation" — same "CONTENTS" placeholder pattern — see [other-pages.md](other-pages.md) |
| /events-2/categories/ | 2025-07-11 | Verified: HTTP 200, page ID 1138, title "Categories - Karuna Foundation" — same "CONTENTS" placeholder pattern — see [other-pages.md](other-pages.md) |
| /events-2/tags/ | 2025-07-11 | Verified: HTTP 200, page ID 1139, title "Tags - Karuna Foundation" — same "CONTENTS" placeholder pattern — see [other-pages.md](other-pages.md) |
| /events-2/my-bookings/ | 2025-07-11 | Verified: HTTP 200, page ID 1140, title "My Bookings - Karuna Foundation" — same "CONTENTS" placeholder pattern — see [other-pages.md](other-pages.md) |

Note: category-sitemap.xml and author-sitemap.xml were not enumerated (blog/category/author archive pages — not content pages requiring individual audit).

## Headline numbers quoted sitewide — verified exact values (counter `data-to-value`, not rendered "0" placeholders)
From Home's hero block (the live, rendered one — see [home.md](home.md) for the second, orphaned copy that is hidden on every breakpoint and never shown to visitors):
- Years of experience: 22
- Staff members: 70+
- "Animal Daily treated": 400+
- "animals treated": 1.4M+
(A second hero block with slightly different values — 100 instead of 400+, "animals rescued" instead of "animals treated" — exists in the page source but is hidden on desktop, tablet, and mobile alike, so it is dead markup, not a live discrepancy visitors would see.)
Lumpy Virus Relief: Free Vaccines 40K+, Cattle Saved 30K+, Gaushalas 100K+.
COVID Maha Karuna Abhiyan: Grains 3K+ KG/day, bird feeders 42+, cattle/stray dogs fed 1800+, Grass/Milk & Rotis 30K+ KG, Volunteers 200+, Vehicles Deployed 20+, Operating Cost 1.5+ Lakhs/day, flour balls for fish 60 KG.
Services page donor-vehicle counters: Hydraulic Rescue Ambulance 2, Jiv Daya Rath 1, Hospital 3, Ambulance & Bike 17.
396 Google reviews, "GOOD" rating (4+ stars) — via the Trustindex plugin, same widget embedded on every page.
Live visitor counter: increments on every render of the footer block, including within a single page load (3 footer instances on Home showed 1,138,771 / 772 / 773 sequentially) — **this is not a meaningful unique-visitor count**.

The earlier pass's figures are confirmed verbatim as static text (not JS counters) in the Free Distribution Campaigns section: "25 lakh+ Nests Distribution" (Bird Nests: cardboard/clay/wooden), "5 lakh+ Water Bowls Distribution" (clay water bowls, cement troughs), "2 lakh+ Water Feeding Bowls Distribution" (Feeding Equipment).

## Cross-cutting structural issues — verified, not inferred
1. **The entire footer "Contact Us" block (heading, intro paragraph, mini quick-contact form, 4 addresses, socials, legal-doc links, visitor counter, copyright) is duplicated 3× on every single page of the site**, including Home, About, Services, Contact, Volunteers, and Careers — confirmed by raw HTML on all of them. The copyright year itself flips between "2004–2025" (instance 1) and "2004–2026" (instances 2–3) within the same page load.
2. **Duplicate/legacy pages**: /about/ vs /about-us/ (the latter internally duplicates its own Trustees/Doctor sections too), /home-old/ vs /. Needs a decision on which URLs survive the rebuild and whether old ones should 301-redirect.
3. **Transactional/dashboard pages are discoverable but empty**: /donor-dashboard/, /donation-confirmation/, /donation-failed/ contain nothing but shared header/footer chrome plus an H1 — confirmed, not assumed.
4. **No standalone "Donate" content page** — the header "Donate Now" button is a `/#donate` anchor into Home; donation methods live only inside Home's body. See [donations.md](donations.md).
5. **Several landing pages share one generic paragraph and one overlapping photo pool** — /animal-rescue/ and /makar-sankranti-health-camp/ use the *identical* paragraph verbatim; /animal-hospital/ and /distribution/ each have their own single paragraph but draw from the same shared image set.
6. **No contact form** on /contact-us/ — only the sitewide 3×-duplicated footer mini-form (Name/Email/Phone/Message, all optional, no validation).
7. **No job listings** on /careers/ — confirmed no positions/departments/salary text anywhere in source; form is free-text only.
8. **/about-us/ duplicates its own Trustees and Doctor sections twice, with different (conflicting) names/order each time** — confirmed verbatim in source, including a doctor surname spelled two different ways ("Pipaliya" vs "pithadiya").
9. **Misspellings confirmed live**: /certificate/ headings read "Kruna Regestration" / "Kruna CSR" / "Kruna FCRA" (vs. the correctly-spelled "Karuna Registration" etc. used in the sitewide footer); /about-us/ has "Our Testimonal" (vs. "Our Testimonial" on /about/); Services page image filename "animal-recuse.png" and "getkanow" banner filename.
10. **The Facebook feed widget is broken in production on every audited page**, showing a live "(#200) Provide valid app ID" OAuth error.
11. **The site logo is a WhatsApp-exported JPEG screenshot** (`WhatsApp-Image-2025-07-28…jpeg`), also reused as the favicon — not a produced vector/PNG logo asset. See [images-assets.md](images-assets.md).
12. **AI-generated images are used in place of real photography in at least two places**: two Gemini-generated images on /animal-hospital/ (generic illustrative use), and — more seriously — a ChatGPT-generated image used on /about/ as the portrait photo for a named person, Dr. Ravi malaviya, in the "Meet Our Doctor" carousel (3rd of 5 slides; filename `ChatGPT-Image-Aug-4-2026-03_49_33-PM.png`). The latter misrepresents a real staff member with a fabricated image and should be prioritized for replacement with an actual photo.
13. **/home-old/ contains a more detailed 7-category "Our Activities" list** than the current live Home's 6-item "Services We Provide" — possible content lost in a prior redesign, worth client review before discarding the old page outright.
14. **Two sections of the live Home page are entirely orphaned markup, hidden on every breakpoint** (`elementor-hidden-desktop` + `elementor-hidden-tablet` + `elementor-hidden-mobile` all three on the same container — meaning never rendered on any device): a second hero/stat block with different counter values (100 vs. the live 400+) and a second "Karuna Talks" bank-details block that also contains Home's only copy of the Careers application form. This explains the earlier-reported "stat inconsistency" (item 2 of the headline-numbers section above was corrected accordingly) and means the Careers form on Home is unreachable by any visitor — the live /careers/ page is the only working path to apply.
15. **/events-2/ and its 4 sub-pages (locations/categories/tags/my-bookings) are confirmed bare placeholder stubs** — each returns HTTP 200 with a distinct page ID and title, but the entire page body is the literal word "CONTENTS" with no calendar widget, listings, or page-specific content of any kind. All 5 link to the main /events/ page's iCal export endpoint, confirming they're wired into the same Events Calendar plugin as a second, incompletely-configured instance — not a working duplicate of /events/ as earlier assumed, and not unrelated orphan pages either. Recommend deleting these 5 URLs in the rebuild unless a second calendar instance is actually needed.

## Legal / trust documents referenced sitewide
- Trust Registration Certificate (Reg. No. E-7920) — linked as "Kruna Regestration" on /certificate/, "Karuna Registration" in the footer (inconsistent spelling, confirmed)
- CSR Certificate
- FCRA Certificate (FCRA No. 042080102)
- Provisional 12AA Registration
(All hosted as downloadable PDFs/images, linked from the footer and from [other-pages.md](other-pages.md): /certificate/. No mention of "80G" tax-exemption status was found anywhere on the site — confirm with the client's CA before claiming it.)

## Next steps (not started)
- Decide canonical URL set for the rebuild (resolve each duplicate pair above; delete /events-2/* unless a second calendar instance is genuinely needed).
- Confirm with the client whether a real payment gateway/donor dashboard is in scope, or whether donation stays bank-detail/UPI based.
- Collect actual image/logo assets per [images-assets.md](images-assets.md) before any visual design work begins.
- Replace the confirmed AI-generated "Dr. Ravi malaviya" portrait on /about/ with a real photo; confirm whether `doct.png`/`doctoe.png` (the other two doctor-carousel images) are real or also AI-generated.

## Remaining "Not verified" items (honest gaps, not guessed)
- category-sitemap.xml / author-sitemap.xml contents (out of scope — blog archive pages).
- Rendered colors mapped to specific visual elements (source-level CSS only; no screenshot/devtools pass taken).
- Whether `doct.png` / `doctoe.png` (About page doctor photos) are real or AI-generated — filenames don't confirm either way.
- Actual on-disk image file sizes/compression and true alt-text coverage in aggregate.
- Whether a real payment gateway is wired up server-side for donations (a static crawl cannot trigger a payment flow).
