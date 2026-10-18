# Other pages — found via sitemap, outside primary navigation

**Audit status: VERIFIED** for every page below, including /events-2/ and its 4 sub-pages (verified 2026-10-17 in a follow-up pass), except the category/author sitemaps (see end of file) — raw HTML pulled via curl and parsed for exact title/text/images/forms/links.

---

## /about-us/ — duplicate/older About page
**Verified.** Page title (`<title>` tag, verified): "About us - Karuna Foundation" (lowercase "us", distinct from /about/'s "About - Karuna Foundation"). WordPress page ID 84. Sitemap lastmod: 2026-07-10 (older than /about/, page ID 4220, lastmod 2026-10-01).

Confirmed via raw HTML: this page renders **two separate "Meet Our Trustees" sections** and **two separate "Meet Our Doctor" sections**, back to back, with different content each time:
- Trustee list #1 (H4s in order): mital khetani, pratik sanghani, Paras Mehta, Gaurang Thakkar, dhirendra kanabar, Kamlesh Shah, Ghanshyam Thakkar, rajnikant patel, **Vishnu Bharad** (9 names).
- Trustee list #2 (same section heading, different order): mital khetani, pratik sanghani, Paras Mehta, Gaurang Thakkar, dhirendra kanabar, rajnikant patel, Vishnu Bharad, Kamlesh Shah, Ghanshyam Thakkar (same 9 names, reordered).
- Doctor list #1: Dr.Nikunj Pipaliya, Dr. Dip Sojitra, Dr. Ravi malaviya (3 names).
- Doctor list #2 (different heading variant "Meet Our Doctor"): Dr. Ravi malaviya, Dr. Dip Sojitra, **Dr. nikunj pithadiya** (3 names — note the surname is spelled "pithadiya" here, not "Pipaliya" as in list #1 or on /about/).
This is a confirmed template/content-duplication bug, not a one-off observation — both repeated sections are present verbatim in the page source with genuinely different data each time (not identical copy-paste).

Other confirmed content: same "Service to Animals is Service to God" philosophy quote, same Our Story / Vision / Mission / Core Purpose text as /about/ (word-for-word identical in the portions checked), same Media coverage / Our monthly Report / Our Testimonial (titled "Our Testimonal" here — **misspelled**, vs. "Our Testimonial" on /about/) / Makar Sankranti Camp / કરૂણા અભિયાન-૨૦૨૬ sections.

**Recommendation unchanged**: retire this URL (301 → /about/) once the client confirms which trustee/doctor roster is current.

---

## /home-old/ — legacy homepage
**Verified.** Page title (`<title>` tag, verified): "Home old - Karuna Foundation". WordPress page ID 10. Sitemap lastmod: 2026-07-10.

Confirmed this page has a **more detailed "Our Activities" section than the current live Home page**: 7 distinct categories (Animal Helpline; Free Veterinary Hospital; Shelter for Injured Birds & Animals (Panjrapole); Mobile Food Zone for Animals & Birds; Animal Welfare Advocacy; Gaushala / Panjrapole Infrastructure Development; Veterinary Skill Development Centre) — versus the current Home's 6-item "Services We Provide" list, which drops "Veterinary Skill Development Centre" and folds the rest into shorter labels. **Worth flagging to the client**: this may be content that was lost/simplified when Home was last redesigned, not merely an old draft to discard outright.

Otherwise mirrors Home's structure: Free Distribution Campaigns, Param Jivdaya Rath, Services We Provide (6 cards), campaign sections (Makar Sankranti / Lumpy Virus / COVID-19), Donation Tithi Scheme + Karuna Talks, Become a volunteer CTA, reviews, footer.

**Recommendation unchanged**: retire this URL (301 → /) — but first have the client review the extra "Our Activities" categories above in case any should be restored to the live Home page.

---

## /donor-dashboard/, /donation-confirmation/, /donation-failed/
Moved to [donations.md](donations.md) — fully verified there (all three confirmed to contain only standard header/footer chrome, no transactional or dashboard content in the static source).

---

## /csr-activities/ — CSR landing page
**Verified.** Page title: "CSR Activities - Karuna Foundation". WordPress page ID 901. Sitemap lastmod: 2025-06-21.

Exact headings: "Animal Helpline" (H5, small label) → "CSR Activities" (H1) → "Help Us Provide Love and Care" (H5) → "Our Activities" (H2) → three H4 cards: "Feeding Birds", "Feeding Squirrels", "Feeding Fish". **Confirmed: no corporate-donor list or CSR-partnership text anywhere on this page** — it only names the three feeding programs, despite the "CSR" framing.

**Recommendation unchanged**: fold into Services/Programs unless the client wants a genuine CSR-partner-facing page with real partnership content.

---

## /certificate/ — legal document hub
**Verified.** Page title: "Certificate - Karuna Foundation". WordPress page ID 2460. Sitemap lastmod: 2025-08-27.

Exact headings: "Certificate" (H1), "CSR Document" (H3), then 4 H4 labels — **note the misspellings, confirmed verbatim from source**: "Kruna Regestration", "Kruna CSR", "Kruna FCRA", "provisional registration" (first three all misspell "Karuna" as "Kruna" and "Registration" as "Regestration" — this is on the live site today, not a transcription error in this audit). The sitewide footer elsewhere spells these correctly ("Karuna Registration", "Karuna CSR", "Karuna FCRA"), so this page's heading set is a distinct, uncorrected typo.
Also includes a decorative registered-trademark-symbol stock image (`png-transparent-registered-trademark-symbol…thumbnail.png`) of unclear purpose — **not verified** what it's meant to represent.

**Recommendation unchanged**: keep as a "Transparency / Legal Documents" page, but fix the misspelled headings and source clean certificate files rather than reusing the current thumbnails.

---

## /animal-rescue/ — rescue landing page
**Verified.** Page title: "Animal Rescue - Karuna Foundation". WordPress page ID 4184. Sitemap lastmod: 2026-07-06.

Exact heading "About Animal Rescue". Exact body text (one paragraph): "Animal rescue is a compassionate effort dedicated to protecting, treating, and caring for animals and birds that are injured, abandoned, sick, or in distress. Rescue teams work tirelessly to provide immediate medical attention, safe shelter, food, and rehabilitation, giving vulnerable animals a second chance at life." No other unique body copy beyond this single paragraph plus the shared reviews/footer.

---

## /animal-hospital/ — hospital landing page
**Verified.** Page title: "Animal Hospital - Karuna Foundation". WordPress page ID 4342. Sitemap lastmod: 2026-07-08.

Exact heading "About Animal Hospital". Exact body text: "Every day, innocent animals suffer silently on our streets, injured, abandoned, and afraid. A puppy trembles in pain, a kitten cries for help, and a wounded cow struggles to survive. Unable to speak, these animals depend on human kindness and compassion. Together, we can give them the care, protection, and love they deserve." **Confirmed: no doctor bios, treatment categories, equipment, or hours listed on this page** — just this one paragraph plus shared reviews/footer. Includes two AI-generated-looking images (`Gemini_Generated_Image_wtpjilwtpjilwtpj.png`, `Gemini_Generated_Image_qkg7ueqkg7ueqkg7.png` — filenames indicate Gemini image-generation output, not real photography) — **flag for the client**: confirm whether AI-generated imagery is acceptable for the rebuild or should be replaced with real hospital photos.

---

## /distribution/ — feeding/distribution program page
**Verified.** Page title: "Distribution - Karuna Foundation". WordPress page ID 4209. Sitemap lastmod: 2026-07-06.

Exact heading "About Distribution". Exact body text: "We distribute nutritious animal feed, bird food, fresh grass, milk, and rotis to support the daily needs of rescued and stray animals. Every contribution helps provide essential nourishment, ensuring animals and birds receive the care they deserve. Together, we can create a kinder and healthier environment for every living being." Image set includes a press clipping: `Heres-how-to-help-the-birds-this-summer-The-Hindu.png` (alt: "Here's how to help the birds this summer - The Hindu") — genuine media-coverage asset worth preserving if sourced/licensed correctly.

---

## /makar-sankranti-health-camp/ — mismatched campaign page
**Verified — mismatch confirmed exactly.** Page title: "Makar Sankranti Health Camp - Karuna Foundation". WordPress page ID 4202. Sitemap lastmod: 2026-07-06.

Heading "About Makar Sankranti Health Camp" but the body paragraph underneath is **character-for-character identical to /animal-rescue/'s paragraph** ("Animal rescue is a compassionate effort dedicated to protecting, treating, and caring for animals and birds…), not camp-specific content. No dates, locations, or outcomes for the camp anywhere in the page source. Shares a `kite.png` icon (thematically relevant to Uttarayan/kite season) but otherwise reuses the same generic rescue photo set as other pages.

**Recommendation unchanged**: write real camp-specific content or remove this URL.

---

## /events/ — events calendar plugin (The Events Calendar)
**Verified.** Page title: "Upcoming Events – Karuna Foundation" (note: en-dash, and "Upcoming Events" rather than "Events" — a different title pattern from every other audited page). Exact state: "0 events found." / "There are no upcoming events." Search box, List/Month/Day view toggle, Today/Upcoming date nav. "Latest Past Events" section lists the **same event 3 times, identically**: "Makar Sankranti", July 11, 2025 @ 8:00 am – 5:00 pm, each with its own (different) image (`56fa011cdf90c-16…jpg`, `56fa095dbef2d-95.jpg`, `5e0ecb9a38aca-45.jpg`) — confirmed 3 separate event posts with the same title/date, not a rendering glitch.

## /events-2/ and sub-pages (/events-2/locations/, /categories/, /tags/, /my-bookings/) — VERIFIED
All 5 URLs return **HTTP 200** and are genuinely distinct pages (5 different WordPress page IDs: 1136 /events-2/, 1137 /locations/, 1138 /categories/, 1139 /tags/, 1140 /my-bookings/ — each with its own `<link rel="canonical">` pointing at itself). **The earlier assumption that these mirror /events/'s Events Calendar UI was wrong and is corrected here.**

| URL | Page title (verified) | H1 |
|---|---|---|
| /events-2/ | "Events - Karuna Foundation" | Events |
| /events-2/locations/ | "Locations - Karuna Foundation" | Locations |
| /events-2/categories/ | "Categories - Karuna Foundation" | Categories |
| /events-2/tags/ | "Tags - Karuna Foundation" | Tags |
| /events-2/my-bookings/ | "My Bookings - Karuna Foundation" | My Bookings |

**Confirmed body content on all 5 pages, identically**: the H1 is immediately followed by the single literal word **"CONTENTS"** as the entire page body — no events calendar widget, no search box, no List/Month/Day view toggle, no event listings, no past-events section, and no mention of "Makar Sankranti" or any event name. This is a stark contrast to /events/, which has a fully functional (if empty) Events Calendar UI. These 5 pages read as **placeholder/stub pages where a shortcode or dynamic content block was never filled in** — not a duplicate parallel instance of the same working calendar, which was the earlier (unverified) assumption.

**Images**: none of the 5 pages have any page-specific imagery — only the standard sitewide shared assets (header photo, Trustindex star/avatar icons, contact glyphs, certificate thumbnails, footer attribution logos) — identical set across all 5.

**Forms**: each page has exactly 3 instances of the same sitewide footer "Contact Us" mini-form (CF7, Name/Email/Phone/Message, all optional, no validation) — same pattern as every other audited page. No page-specific or events-related form on any of the 5.

**Links**: each page links to itself (canonical) and, on all 5, to `https://animalhelpline.in/events/?ical=1` — the iCal-export endpoint belonging to The Events Calendar plugin on the *main* /events/ page. This confirms /events-2/ and its sub-pages are wired into the same Events Calendar plugin's routing (its default archive sub-routes are locations/categories/tags/my-bookings), set up under a second "events-2" rewrite base — most likely a second, incompletely-configured calendar/post-type instance — rather than being unrelated orphan pages or a copy-pasted duplicate of /events/'s content.

**Recommendation**: these 5 pages should be removed or properly configured before the rebuild — in their current state they serve a bare "CONTENTS" placeholder to any visitor who finds them (e.g., via sitemap or search), which looks broken. Decide with the client whether a second events/calendar instance is actually needed; if not, delete these 5 URLs rather than carry them into the rebuild.

---

## category-sitemap.xml / author-sitemap.xml
**Not enumerated in either audit pass** — these are WordPress archive pages (blog category and author listings), not standalone content pages, and are out of scope for a page-by-page content audit unless the client confirms the site has an active blog.

---

## Summary table (updated)

| URL | Verified this pass | Keep as-is | Merge/retire | Needs new content |
|---|---|---|---|---|
| /about-us/ | Yes | | Retire → redirect to /about/ | |
| /home-old/ | Yes | | Retire → redirect to / (review "Our Activities" 7-item list first) | |
| /csr-activities/ | Yes | | Merge into Services/Programs | |
| /certificate/ | Yes | Keep (fix misspelled headings, clean assets) | | |
| /animal-rescue/ | Yes | | | Yes, if kept standalone |
| /animal-hospital/ | Yes | | | Yes — also replace AI-generated images |
| /distribution/ | Yes | | Consider merge into Home/Services | |
| /makar-sankranti-health-camp/ | Yes | | | Yes — or remove |
| /events/ | Yes | | Fix triplicated event entry | Yes, if events feature is kept |
| /events-2/* (5 pages) | Yes | | **Remove** (confirmed bare "CONTENTS" placeholder stubs, not a working duplicate calendar) | |
