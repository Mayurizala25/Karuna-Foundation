# Images & assets audit — animalhelpline.in

**Audit status: VERIFIED** for image/logo/font URLs below — pulled by parsing raw HTML (`<img>` `src`/`data-src` and `<link>` tags) via curl on 2026-10-17, not a visual crawl. Dimensions shown are from `width`/`height` HTML attributes where present (these reflect the attribute values, which can lag the actual file — **not verified against the real file**). No screenshot/devtools pass was done, so visual rendering, actual on-disk file size, and true alt-text coverage are reported honestly as "Not verified" where applicable below.

## Logo
**Verified**: the image actually rendered in the header `<a>` logo link, on every page, is:
`https://animalhelpline.in/wp-content/uploads/2025/05/WhatsApp-Image-2025-07-28-at-11.12.03-AM-e1753682147276.jpeg` — 189×220 (per HTML attrs), no alt text. Filename confirms it is a WhatsApp-exported JPEG, not a produced logo file. The same file is also used as the site favicon (`<link rel="icon">`, 32×32 and 192×192 variants) and Apple touch icon.
A second file, `https://animalhelpline.in/wp-content/uploads/2026/08/karuna_template_exact_logo_replacement.png` (1024×1535), appears **inside the Home page's Donation section**, not in the header — likely a decorative seal/graphic, not the site logo. Its filename ("exact_logo_replacement") suggests it may have been intended as a logo swap that was never applied to the header.

## Fonts
**Verified** from the Elementor Global Kit and `<link>` tags: primary typeface sitewide is **"Onest"** (loaded via Google Fonts `fonts.googleapis.com` + a locally-hosted copy under `/wp-content/uploads/elementor/google-fonts/css/`), weight 600 for primary text, 400 for secondary/body, 500 for accent. Two additional Google Fonts are locally hosted but their actual usage wasn't traced to specific elements in this pass: **Poppins** and **Nunito** (`poppins.css`, `nunito.css` under the same uploads path) — **not verified** where on the page these apply vs. Onest.

## Verified colors (see also each page's own .md file)
Sitewide Elementor Global Kit (`post-7.css`, class `elementor-kit-7`, loaded on every page):
```
Primary / Secondary: #811413   (dark maroon/brick red)
Text:                #FFFFFF
Accent:               #000000
Page-transition bg:   #FFBC7D
```
Header/footer theme-builder templates (Elementor posts 13 and 68, loaded on every page) contribute the most frequently used colors sitewide:
```
#39796B  (30 occurrences — teal, likely buttons/header accents)
#9B1C1B  (14 occurrences — secondary red)
#25D366 / #63CD5D  (WhatsApp green — floating chat button)
#F2F2F2 / #E7E7E7  (light grey section backgrounds)
#777777  (secondary/grey text)
```
Home page's own inline/page CSS adds: `#c50000` (heading-underline accent), `#00796b` (review-widget button, forced with `!IMPORTANT`), `#3367d6` (form radio-button accent).
**Not verified**: which exact visual element each hex renders on (would require a devtools/screenshot pass); any color stored only in Elementor's per-widget JSON settings rather than in the exported static CSS.

## Photography catalog (verified URLs, organized by page — not exhaustive of every thumbnail size variant)
**Home**: hero/content photos are genuine WhatsApp-exported field photos (`WhatsApp-Image-2025-07-28…jpeg`, `WhatsApp-Image-2025-11-11…jpeg`, `WhatsApp-Image-2025-11-12…jpeg`, `WhatsApp-Image-2025-10-06…jpeg`) mixed with stock/clip-art PNG icons (`vaccine.png`, `cow_2303763.png`, `nohat_upscaled_x4…png`) and a donation QR (`image-7-e1786516367550.png`).
**About / about-us**: largest photo set of any page — genuine-looking portraits (`Pratikbhai-new-photo.png`, `RMP_Photo_page-0001-784x1024.jpg`, `Dr-Raj-Rameshbhai-Radadiya.png`, `Dr-Pruthviraj-Manubhai-Sojitra.png`), campaign/media images (`Vaccination-camp.png`, `omsocial.png`, `Dharms-Humanity-and-Nature.png`, `modi.png`, `hospital.png`), plus ~13 unlabeled `IMG-20251108-WA00xx.jpg` WhatsApp exports and a run of generically-named `image.png`/`image-1.png`/`image-2.png` files (one per month, 2025/12–2026/10) whose content is **not verified** without opening each file. **Confirmed AI-generated image used as a real person's portrait**: the "Meet Our Doctor" carousel's 3rd slide (labeled "Dr. Ravi malaviya") uses `ChatGPT-Image-Aug-4-2026-03_49_33-PM.png` — the filename itself confirms AI-image-generator output presented as a doctor's photo. The adjacent two doctor-carousel files (`doct.png`, `doctoe.png`, used for Dr. Pipaliya and Dr. Dip Sojitra) have generic filenames that don't confirm or rule out the same issue — **not verified** either way for those two.
**Services**: `animal-recuse.png` (donor-vehicle icon, filename typo for "rescue"), `getkanow-1024x683.png` (banner, filename typo for "getknow"), plus 7 `WhatsApp-Image-2025-11-12…jpeg` rescue photos and 4 `IMG-20240202-WA00xx.jpg` files.
**Volunteers**: 3 leader portraits — `narotambhai.png`, `thakker-1024x1024.png`, `mg-1024x1024.png`.
**Careers**: one banner, `WhatsApp-Image-2026-08-19-at-1.57.31-PM.jpeg`.
**Animal Rescue / Animal Hospital / Distribution / Makar Sankranti Health Camp**: all four share most of the same underlying photo pool (bird-feeder/birdhouse stock photos, `IMG_38xx`/`IMG_39xx` series, `56fa0…`/`5e0e…` hashed filenames that look like a stock-photo CDN export) — confirms the earlier finding that these landing pages recycle one shared image set rather than having unique photography each. Animal Hospital additionally uses two **AI-generated images** (`Gemini_Generated_Image_wtpjilwtpjilwtpj.png`, `Gemini_Generated_Image_qkg7ueqkg7ueqkg7.png` — filenames indicate Google Gemini image-gen output) — flag for the client on whether AI imagery is acceptable going forward. **This is now a confirmed sitewide pattern, not a one-off**: the About page separately uses a ChatGPT-generated image as a named doctor's portrait (see About section above) — at least two different AI image generators (Gemini, ChatGPT) have been used for site imagery across at least two pages.
**Distribution** additionally includes a real press clipping: `Heres-how-to-help-the-birds-this-summer-The-Hindu.png` (The Hindu newspaper coverage) — a genuine media-mention asset worth keeping if licensing is confirmed.
**Certificate**: `Pro-Reg-1.png`, `CSR.png`, `FCRA.png`, `Pro-Reg.png` (thumbnail icons for the 4 legal documents) plus a generic registered-trademark stock graphic of unclear purpose.

## Shared icons/graphics (every page)
Contact-method glyphs: `email-svgrepo-com.png`, `phone-call-alt-1-svgrepo-com.png`, `location-pin-alt-1-svgrepo-com.png`.
Footer attribution: `designbywebsmaniac-white.png` ("Design by WebsManiac" watermark) and `ogo.png` (truncated filename — likely a second/footer logo mark, **not verified** what it depicts without opening it).

## Third-party embeds (not self-hosted — confirmed via source)
- Google review widget (**Trustindex** plugin, `cdn.trustindex.io`) — star icons, Google logo, and reviewer profile photos (`lh3.googleusercontent.com`) all load live from third-party CDNs, not from the site's own media library.
- Facebook feed widget (**Custom Facebook Feed** plugin) — currently broken in production on every audited page, showing "(#200) Provide valid app ID".

## Legal/trust documents referenced sitewide (as linked PDFs, per [other-pages.md](other-pages.md) /certificate/)
- Trust Registration Certificate (linked as "Kruna Regestration" — misspelled — on /certificate/, correctly spelled "Karuna Registration" in the footer elsewhere)
- CSR Certificate
- FCRA Certificate (FCRA No. 042080102)
- Provisional 12AA Registration
Plus a 14-image "CSR Document" gallery on /certificate/ — individual image URLs not itemized in this pass.

## What this audit could NOT determine (honestly marked Not verified)
- Actual on-disk file sizes/compression level of any image (HTML attributes only, not fetched file bytes beyond the few CSS files pulled for color verification).
- Alt-text coverage in aggregate: most images across every page carry `alt=""` (empty) — a real minority have descriptive alt text (mostly WhatsApp-export filenames auto-used as alt, e.g. `alt="WhatsApp Image 2025-11-12 at 4.32.46 PM"`, which is not meaningfully descriptive for accessibility either way).
- Brand guideline / official logo vector files — none referenced anywhere in any page's source; must be requested directly from the client.
- Whether any photography is licensed stock vs. the organization's own — the hashed filenames (`56fa0…`, `5e0e…`, `303040119-303040619-Vierno…`) on the bird-feeder/birdhouse images strongly suggest stock-photo origin and should be checked for licensing before reuse in the rebuild.

## Recommendation before design phase (unchanged)
1. Request original logo files (vector if available) and a brand guideline directly from the client — the current "logo" is a WhatsApp JPEG screenshot.
2. Verify licensing on the suspected stock photos (bird feeders/birdhouses) before reusing them.
3. Decide whether the two AI-generated images on /animal-hospital/ are acceptable or should be replaced with real photography.
4. Do a dedicated visual/devtools pass to confirm real rendered colors and capture a current screenshot set — this audit is source-level only, not a rendered visual record.
