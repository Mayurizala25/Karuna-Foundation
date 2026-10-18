# About — https://animalhelpline.in/about/

**Audit status: VERIFIED** (raw HTML pulled via curl 2026-10-17). Page title (`<title>` tag, verified): "About - Karuna Foundation". WordPress page ID 4220. Sitemap lastmod: 2026-10-01 (newest page on the site).
A second, older About page exists at **/about-us/** (page ID 84, lastmod 2026-07-10) — fully re-audited in [other-pages.md](other-pages.md); it visibly duplicates its own Trustees and Doctor sections twice on one page, with different member lists each time.

## Navigation
Identical to [home.md](home.md) — same 6 links, same `tel:+919898499954` header CTA, same `/#donate` target for "Donate Now" (anchors back to the Home page's donate section — there is no `#donate` anchor on the About page itself, meaning the button on this page just navigates away to Home).

## Section order (top to bottom)
1. Hero / header bar only (no page-specific hero banner found beyond the shared header)
2. "Our Story" — H3, with quote H5 " Service to Animals is Service to God "
3. "our commitment" — lead-in to Vision/Mission/Core Purpose
4. Vision (H3)
5. Mission (H3)
6. Core Purpose (H3)
7. "Meet Our Trustees" (H3) — 8 trustee cards
8. "Meet Our Doctor" (H3) — 5 doctor cards
9. "Media coverage" (H3) — gallery, no body text captured
10. "Our monthly Report" (H3) — gallery, no body text captured
11. "Our Testimonial" (H3)
12. "Makar Sankranti Camp" (H3)
13. "કરૂણા અભિયાન-૨૦૨૬" (H3, Gujarati: "Karuna Campaign 2026")
14. Our Review (Trustindex widget)
15. Follow on Facebook (broken, same error as Home)
16. Footer — same 3× duplicated block pattern as every other page (see [home.md](home.md) Issue #1)

## Verified exact text
**Our Story**: "Guided by the belief that "Service to Animal is Service to God," our journey began with the generous donation of a mobile ambulance van by the respected Kanabar family of Manavadar. This noble act inspired a wave of support from kind-hearted individuals and organizations, including Manishbhai Mansata, Shri Andh Apang Gausewa Trust, Mr. Madhoobhai Mehta, Meenalben Mehta (The Romeera Foundation, UK), and others. Their contributions of ambulances and food service vehicles have helped us reach and treat countless stray and injured animals across Gujarat."

**Vision**: "To create a compassionate society where kindness towards animals is a core value. We believe that serving animals is a form of serving God. Our mission is to ensure every sick, injured, or stray animal receives the care they deserve."

**Mission**: "To provide timely care to stray and sick animals through mobile veterinary services and shelters, promote compassion, vegetarianism, and non-violence, support gaushalas, and raise awareness to protect animals from cruelty and slaughter."

**Core Purpose**: "Driven by the belief that "Service to Animals is Service to God," we rescue, treat, protect, and care for stray and injured animals. Our mission is to give every voiceless life the compassion, dignity, and care it deserves."

**Meet Our Trustees** (exact names + designations as rendered, including the site's own inconsistent capitalization):
| Name (as shown) | Designation (as shown) |
|---|---|
| mital khetani | President |
| pratik sanghani | Secretary |
| Paras Mehta | Trustee |
| Gaurang Thakkar | Trustee |
| dhirendra kanabar | trustee *(lowercase on this page)* |
| Kamlesh Shah | Trustee |
| Ghanshyam Thakkar | Trustee |
| rajnikant patel | **Designation : (blank — no title given)** |

**Meet Our Doctor** (5 names, no designations shown): Dr.Nikunj Pipaliya, Dr. Dip Sojitra, Dr. Ravi malaviya, Dr. Raj Radadiya, Dr. Pruthviraj Sojitra — rendered as a 5-slide image carousel, one portrait photo per doctor. **Verified photo-to-name mapping (by carousel slide order) and a confirmed data-integrity issue**: slide 1 (Dr.Nikunj Pipaliya) uses `doct.png`; slide 2 (Dr. Dip Sojitra) uses `doctoe.png`; **slide 3 (Dr. Ravi malaviya) uses `ChatGPT-Image-Aug-4-2026-03_49_33-PM.png` — the filename itself confirms this "doctor portrait" is an AI-generated (ChatGPT) image, not a real photograph**; slides 4–5 (Dr. Raj Radadiya, Dr. Pruthviraj Sojitra) use properly-named files (`Dr-Raj-Rameshbhai-Radadiya.png`, `Dr-Pruthviraj-Manubhai-Sojitra.png`) that give no indication of being AI-generated.

Sections "Media coverage", "Our monthly Report", "Our Testimonial", "Makar Sankranti Camp", "કરૂણા અભિયાન-૨૦૨૬" render as headings over image galleries — **no body paragraph text found under any of them; Not verified whether any exists in a format this crawl couldn't capture (e.g. text baked into the images themselves).**

## Discrepancies vs. /about-us/ (both pages live simultaneously — confirmed, not inferred)
- Trustee count: 8 here vs. 9 on /about-us/ (which adds "Vishnu Bharad").
- Rajnikant Patel's title: blank here; /about-us/'s *second* trustee-list instance also lists no title for most, but /about-us/ is internally inconsistent too (see [other-pages.md](other-pages.md)).
- Doctor count/roster: 5 here vs. two **different, mutually inconsistent** 3-doctor lists on /about-us/ (one list spells a name "Dr. nikunj pithadiya" — not "Pipaliya").
- **Recommendation stands**: get one confirmed-current trustee list and one confirmed-current doctor roster from the client before writing final copy; do not merge the conflicting lists by guessing.

## Images (verified; selection — full list is long)
Includes genuine-looking field/portrait photos: `Pratikbhai-new-photo.png`, `RMP_Photo_page-0001-784x1024.jpg`, `Dr-Raj-Rameshbhai-Radadiya.png`, `Dr-Pruthviraj-Manubhai-Sojitra.png`. The doctor-carousel files `doct.png` and `doctoe.png` (Dr. Pipaliya and Dr. Dip Sojitra's slides) carry generic filenames that give no indication either way of being real photos or not — **not verified**. The third doctor-carousel slide is **confirmed AI-generated** — see "Meet Our Doctor" above (`ChatGPT-Image-Aug-4-2026-03_49_33-PM.png`, used as Dr. Ravi malaviya's portrait).
Campaign/media images: `Vaccination-camp.png` (alt="Vaccination camp"), `omsocial.png`, `Dharms-Humanity-and-Nature.png` (alt="Dharm's Humanity and Nature"), `modi.png`, `hospital.png`.
A long run of monthly-report-style images named generically `image.png` / `image-1.png` / `image-2.png` per month (2025/12 through 2026/10) — **filenames give no indication of month/content; Not verified what each one depicts without opening them.**
Large batch of unlabeled `IMG-20251108-WA00xx.jpg` WhatsApp exports (13 files) under "Media coverage"/"monthly Report" — likely raw rescue/camp photos, captions not verified.

## Colors
No page-specific `<style>` overrides found beyond the sitewide Elementor Global Kit (`#811413` primary, `#FFFFFF` text, `#000000` accent, "Onest" font — see [home.md](home.md) for the full verified palette). **Not verified**: whether post-4220's own Elementor CSS file contains additional overrides — not fetched in this pass.

## Forms
Same 3× duplicated footer "Contact Us" quick-contact form (CF7 id 2326) as every other page — no About-page-specific form.

## Contact details
Identical to [contact.md](contact.md) — repeated 3× in the footer, same addresses/phones/email.
