# Home — https://animalhelpline.in/

**Audit status: VERIFIED** (raw HTML pulled directly via curl on 2026-10-17 and parsed; JS counter widgets read from their `data-to-value` attributes, not rendered output)
Page title (`<title>` tag, verified): "Home - Karuna Foundation". WordPress page ID 4239 (`elementor-page-4239`). Sitemap lastmod: 2026-08-21.

## Navigation (exact, identical on every page audited)
Rendered 4× in the DOM per page (desktop menu + responsive/offcanvas variants — normal for this Astra+Elementor header, not a bug). Link set:
| Label | href |
|---|---|
| Home | https://animalhelpline.in/ |
| About | https://animalhelpline.in/about/ |
| Services | https://animalhelpline.in/services/ |
| Volunteers | https://animalhelpline.in/volunteers/ |
| Careers | https://animalhelpline.in/careers/ |
| Contact Us | https://animalhelpline.in/contact-us/ |
| Donate Now (button, not in menu list) | https://animalhelpline.in/#donate (in-page anchor to the Donate section below — **confirmed, no dedicated donate page**) |

Header also shows: 24x7 Animal Helpline label + `tel:+919898499954` click-to-call.

## Section order (top to bottom, as rendered)
1. Hero: H1 "Shelter For Injured Birds & Animal(Panjrapole) Makar Sankranti Word Of Treatment Camp", H5 "22+ Years of Compassionate Service", 4 stat counters — container `elementor-element-346bde64`, **no visibility-restriction classes — this is the block real visitors see**.
2. A second, near-identical hero/stat block (container `elementor-element-4c20bdc7`) sits immediately after it in the DOM, re-using the same H1/H5 and 4 counters with different values/labels — **verified: this container carries all three of `elementor-hidden-desktop`, `elementor-hidden-tablet`, and `elementor-hidden-mobile`, meaning it is hidden on every breakpoint and is never rendered to any visitor on any device.** It is dead/orphaned markup left in the page source, not a live mobile-specific variant (correcting an earlier mischaracterization of this block).
3. About Us — H3 "About Us" / "Dedicated to Animal Welfare", quote H5 " Service to Animals is Service to God ", H5 "Best NGO in Animal Welfare – Awarded by Shri Giriraj Singh, Govt. of India.", Sanskrit shloka (H5): "न त्वहं कामये राज्यं न स्वर्गं नापुनर्भवम्। कामये दुःखताप्तानां प्राणिनामार्तिनाशनम्॥"
4. Free Distribution Campaigns — Bird Nests ("25 lakh+ Nests Distribution": cardboard/clay/wooden) / Water Bowls ("5 lakh+ Water Bowls Distribution": clay water bowls, cement troughs) / Feeding Equipment ("2 lakh+ Water Feeding Bowls Distribution") — **verified as static text, not JS counters** (no `data-to-value` on these three, unlike the stat-band counters above)
5. Param Jivdaya Rath — daily distribution figures
6. Services We Provide — 6 service cards
7. Makar Sankranti Word of Treatment Camp — campaign blurb
8. Lumpy Virus Relief Efforts — stats (Free Vaccines / Cattle Saved / Gaushalas)
9. COVID-19 Response: Maha Karuna Abhiyan — "Distributed Per Day" / "Animals Feed Per Day" / "Manpower & Logistics" / "Budget & Support" counters
10. The Voice of Karuna — media-studio initiative
11. Donation section (`id="donate"`, sticky) — Bank of Baroda details + QR, Foreign/NRI bank details, "Donate Now" interest form, Donation Tithi Scheme, "Karuna Talks"
12. Why Donate? — 6 bullet reasons
13. 24x7 Animal Helpline / Emergency WhatsApp quick-contact tiles
14. Our Review (Trustindex Google reviews widget)
15. Follow on Facebook (Custom Facebook Feed plugin — currently broken, see Issues)
16. Footer block 1: Customer Support, 4 locations, Social Connect, legal doc links, "Contact Us" quick-contact form, visitor counter, copyright
17. Footer block 2: near-identical repeat of block 1 (different widget instance, "Get In Touch" heading)
18. Footer block 3: near-identical repeat again (3rd instance)

## Verified exact text
**Hero stat counters** (`data-to-value` read from source, not the animated "0" placeholder text):
| Counter | Value (live, visible block) | Value (orphaned, never-rendered block) | Notes |
|---|---|---|---|
| Years Of experiences | 22 | 22 | identical in both |
| staff members | 70+ | 70+ | identical in both |
| Animal Daily treated | **400+** (this is the number real visitors see) | 100 (no suffix) | the 100 value sits in the hidden-on-all-breakpoints block and is never shown to anyone |
| animals treated / animals rescued | **1.4M+, labeled "animals treated"** (visible) | 1.4M+, labeled "animals rescued" (hidden) | same value, different label — but only the "animals treated" label is ever actually seen |

The discrepancy is not a live inconsistency a visitor could notice — it's leftover/orphaned markup (see Section order #2 above) sitting alongside the real, rendered block. The figures to carry forward for the rebuild are the visible-block values: 22 years, 70+ staff, 400+ animals treated daily, 1.4M+ animals treated.

**Lumpy Virus Relief counters**: Free Vaccines = 40K+, Cattle Saved = 30K+, Gaushalas = 100K+.
Body text: "Outbreak, Capripoxvirus (LSD) in cattle/buffaloes Impact, 17 districts in Gujarat affected Response, Joint operations with Arham Yuva Seva Group"

**COVID-19 Maha Karuna Abhiyan counters**:
- Distributed Per Day: Grains = 3K+ KG, bird feeders = 42+
- Animals Feed Per Day: cattle/stray dogs = 1800+, Grass/Milk & Rotis = 30K+ KG
- Manpower & Logistics: Volunteers = 200+, Vehicles Deployed = 20+
- Budget & Support: day Operating Cost = 1.5+ Lakhs, flour balls for fish = 60 KG

Body text: "During the lockdown, Shree Karuna Foundation Trust & Animal Helpline–Rajkot launched Maha Karuna Abhiyan to feed stray animals and birds."

**Param Jivdaya Rath** (plain text, not counters): "15,000+ Daily Expense" — 450 Kg Wheat & Grains To Birds, 30 Kg Of Wheat Balls For Fish, 25 Kg Sweet Corn For Squirrels, Milk & Rotis For 700 Stray Dogs, 10 Kg Of Ant Feed For Ants.

**The Voice of Karuna**: "Purpose: Raise global awareness for animal welfare, environment & social causes." Facilities Include: "2 state-of-the-art studios (lighting, sound, green/blue screen)", "Free use for NGOs, activists, and content creators", "₹8 lakh+ investment". Promotes: "Plant-based living", "Cruelty-free choices", "High-quality awareness content".

**Donation section (exact)**:
- "Donation Option" — "UPI: SHREEKARUNAFOUNDATION@BARODAMPAY"
- "Bank Of Baroda Bank Details" — A/C: 03600100026705; Bank of Baroda, Rajkot Main; IFSC: BARBORAJKOT — plus a QR code image
- "Foreign Citizen/Nri Bank Details" — SHREE KARUNA FOUNDATION TRUST; A/C: 40270694262; STATE BANK OF INDIA; IFSC: SBIN0000691; Branch Name: New Delhi Main Branch; FCRA: 042080102
- "Donate Now" heading + interactive form (Indian Citizen / Foreign Citizen/NRI radio toggle, see Forms below) with helper text: "Indian citizen option is for transacting through Indian bank accounts or cards issued by Indian banks."
- Repeated full foreign-bank block inline again: Shree Karuna Foundation Trust, Account No: 40270694262, Main Branch Name: New Delhi, Branch Code: 00691, IFSC: SBIN0000691, SWIFT: SBININBB104, FCRA: 042080102
- "Donation Tithi Scheme" heading — **no further explanatory text found**
- "Karuna Talks" heading — reuses the same "Purpose: Raise global awareness…" line as The Voice of Karuna (content duplication)

**Why Donate?** (6 bullets): 24x7 Rescue & Helpline Support; Free Veterinary Treatment; Food & Shelter for Stray Animals; Disaster Rescue Operations; Awareness & Education Programs; Transparent & Accountable.

**Quick-contact tiles**: "24x7 Animal Helpline" — 09898499954 — "Every call can save a life." / "Emergency WhatsApp" — 09898499954 — "Chat with our team now".

**Footer "Contact Us" intro text** (appears 3× identically): "For Free treatment of stray animal and birds and for activities of mobile food zone, If you find any sick animal or birds in the Rajkot city, Please contact us." + "Managed By Shree Karuna Foundation Trust, Rajkot, Trust Regd. No E-7920"

**Visitor counter**: live, incrementing between requests — read as 1,138,771 / 1,138,772 / 1,138,773 across the 3 footer instances on a single page load (confirms it increments per block-render, not a real unique-visitor count).

**Copyright line**: "COPYRIGHT Ⓒ 2004 – 2025 Shree Karuna Foundation Trust All RIGHTS RESERVED." on the first footer instance, "COPYRIGHT Ⓒ 2004 – 2026 …" on the 2nd and 3rd — **the year is inconsistent within the same page**.

## Contact details (verified)
- Email: info@animalhelpline.in
- Phone (as literal `tel:` hrefs found): `+91`, `+919898019059`, `+919898499954`, `09898499954` — note the bare `tel:+91` link (broken/incomplete) and the inconsistent formatting (with/without country code) across instances.
- Addresses — identical to what's in [contact.md](contact.md); repeated 3× in the footer per page.

## Verified colors
Sourced from the live Elementor Global Kit CSS (`wp-content/uploads/elementor/css/post-7.css`, loaded on every page as class `elementor-kit-7`):
```
--e-global-color-primary:   #811413   (dark maroon/brick red)
--e-global-color-secondary: #811413
--e-global-color-text:      #FFFFFF
--e-global-color-accent:    #000000
page-transition background: #FFBC7D   (peach/orange)
font family (all 4 typography roles): "Onest" — primary weight 600, secondary 400, text 400, accent 500
```
Additional colors found in Home's own page CSS / inline `<style>` blocks (`post-4239.css` + inline):
```
#c50000   — heading underline/divider accent (".twelve h3:before")
#00796b   — Trustindex review-widget button background (also forced via "!IMPORTANT" inline override)
#3367d6   — radio button accent color (citizenship/CF7 forms)
```
Sitewide header/footer template CSS (Elementor theme-builder posts 13 and 68, loaded on every page) adds:
```
#39796B   — most frequent accent (30 occurrences) — likely header/footer/button teal
#9B1C1B   — secondary red accent (14 occurrences)
#25D366 / #63CD5D — WhatsApp green (floating WhatsApp button)
#F2F2F2 / #E7E7E7 — light grey section backgrounds
#777777  — secondary/grey text
```
**Not verified**: which exact element each hex maps to visually (would require a rendered screenshot/devtools pass, not just source); any colors applied purely via Elementor's dynamic inline `background_background:"classic"` settings without a literal hex in the static CSS (Elementor can store some colors in post meta/JSON that isn't in the exported CSS file).

## Images (verified URLs found in page source)
Logo actually used in the header: `https://animalhelpline.in/wp-content/uploads/2025/05/WhatsApp-Image-2025-07-28-at-11.12.03-AM-e1753682147276.jpeg` (189×220, no alt text) — **the live "logo" is a WhatsApp-exported JPEG**, also reused as the site favicon. A separate file, `karuna_template_exact_logo_replacement.png`, appears decoratively inside the Donation section (not the header).
Donation QR code: `https://animalhelpline.in/wp-content/uploads/2026/08/image-7-e1786516367550.png`
Certificate thumbnails: `Pro-Reg-1.png`, `CSR.png`, `FCRA.png`, `Pro-Reg.png` (all at `/wp-content/uploads/2025/05/`)
Contact icon glyphs: `email-svgrepo-com.png`, `phone-call-alt-1-svgrepo-com.png`, `location-pin-alt-1-svgrepo-com.png`
Footer attribution: `designbywebsmaniac-white.png`, and `ogo.png` (truncated filename, likely a second logo mark)
Content photography: a mix of genuine WhatsApp-exported field photos (`WhatsApp-Image-*.jpeg`) and stock PNG icons (`vaccine.png`, `cow_2303763.png`) — see [images-assets.md](images-assets.md) for the full catalog.
Review avatars and star icons are pulled live from `cdn.trustindex.io` and `lh3.googleusercontent.com` (third-party, not self-hosted).

## Forms (verified field-by-field from raw HTML)
**Form 1 — Donate Now interest form** (CF7 id 2091, the only one of its kind on the site):
| Field | type | name | required |
|---|---|---|---|
| Citizenship | radio (Indian Citizen / Foreign Citizen/NRI) | citizenship | No (despite being the form's main control) |
| Full Name | text | fullname | **Yes** |
| Email | email | email | **Yes** |
| Mobile Number | tel | mobile | **Yes** |
| City | text | city | No |
| Message | textarea | brancharea | No |
Selecting a citizenship option slides a QR-code image in/out via jQuery (`.img__citizon` / `.img__foreign`), independent of the bank-detail text blocks already on the page.

**Form 2 — Careers application** (CF7 id 826) — same fields as on [careers.md](careers.md). **Verified placement on Home**: it is embedded via a raw `[contact-form-7]` shortcode widget directly underneath the "Karuna Talks" bank-detail headings (Bank Name / Account Name / Account Number), with no heading or label of its own introducing it — it is not a popup and not tied to any "Apply Now" button. More importantly, **its entire parent container (`elementor-element-2c8ecab1`) is hidden on all three breakpoints (`elementor-hidden-desktop`, `elementor-hidden-tablet`, `elementor-hidden-mobile`)**, exactly like the orphaned hero block above — so this form, too, is never actually rendered to any visitor on Home. The only way a visitor can realistically reach this form is by navigating to [careers.md](careers.md) directly.

**Forms 3–5 — "Contact Us" quick-contact form** (CF7 id 2326, same form reused 3×: DOM ids `wpcf7-f2326-o3/o4/o5`): Name (text, optional), Email (optional), Phone (optional), Message/brancharea (textarea, optional) — **no field is marked required**, confirming this mini-form has no validation at all.

## Issues/observations (confirmed from source, not inferred)
1. **The entire "Contact Us" footer block (heading + intro text + mini-form + address list + socials + legal-doc links + visitor counter + copyright) is duplicated 3× on this single page**, with only the visitor counter incrementing between copies and the copyright year flipping from 2025 to 2026 between copies. Unlike the hero/Careers-form blocks below, **these 3 footer copies are NOT hidden by breakpoint classes — all 3 are confirmed live and visible**, stacked one after another.
2. **Two entire sections of the page are dead markup, hidden on every breakpoint (`elementor-hidden-desktop`+`elementor-hidden-tablet`+`elementor-hidden-mobile` all three on the same container)**: a second hero/stat block with slightly different counter values/labels (100 vs the live 400+; "animals rescued" vs the live "animals treated"), and a second "Karuna Talks"/bank-details block that also contains the Careers application form with no heading of its own. Neither is ever shown to a real visitor on any device — this looks like leftover content from a prior edit rather than intentional responsive design.
3. **Donation Tithi Scheme has a heading but no body copy** anywhere in the page source — confirmed empty, not just hard to find.
4. Facebook feed widget shows a live error: "(#200) Provide valid app ID" — the Facebook integration is broken in production.
5. Logo is a JPEG screenshot/WhatsApp export, not a vector/production logo asset.
6. `tel:+91` (incomplete phone link) exists in the header markup alongside the correct full numbers.
