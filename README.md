# Psylume website

React + TypeScript (Vite) website built from the **Psylume Brand Identity 2026** book.

Pages: **Home**, **About us**, **Therapists**, **Team**, **Contact**, **Consultation** and a **404** page, plus the shared **Header** and **Footer**.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build locally
```

Requires Node 18 or newer.

## Brand implementation

| Brand-book item | Where it lives |
| --- | --- |
| Colour palette 01 to 08, in order | `src/styles/tokens.css` (`--c01-coral` … `--c08-black`) |
| Primary font: Bricolage Grotesque (headlines) | `--font-display` in `tokens.css`, loaded in `index.html` |
| Secondary font: Satoshi (body) | `--font-body` in `tokens.css`, loaded in `index.html` |
| Malayalam font: Anek Malayalam | fallback in both font stacks, so Malayalam text renders in the brand face |
| Secondary logo (horizontal lockup) | Header (tablet and up) and Footer (white version) |
| Primary logo (mark) | Header (phones) and Footer (white watermark) |
| Arches, circles and four-point star | `ArchComposition.tsx`, `ArchPortrait.tsx`, `Star.tsx` |

Colour notes:

- Palette value `06` (`#F1B23C`) was read from the brand book's extracted text, which was partly garbled. Please confirm it against the source file.
- Coral `#FF6B6B` fails contrast with white text, so buttons use navy text on coral (5.4:1). Coral is used as a fill, never as body text.

### Font licences

- **Bricolage Grotesque** and **Anek Malayalam**: SIL Open Font License, free for commercial use. Served from Google Fonts.
- **Satoshi**: Fontshare (ITF Free Font License), free for commercial use. Served from Fontshare's own API, which the licence allows. Do not re-upload the font files to a public server.
- **Brittany Signature** (the decorative script in the brand book) is **not used** in this site. Its free version is licensed for personal use only. If you want it on the website, buy a commercial licence from Creatype Studio first.

### Logos

The logo files in `src/assets/logos/` (lossless WebP) were extracted from the brand-book PDF at high resolution and made transparent. For the sharpest result, replace them with the original SVG or PNG exports from your design source, keeping the same file names.

## Placeholder content to replace before launch

All of this is fictional or unconfirmed:

- `src/data/site.ts`: contact details are real (added October 2026). Still to confirm: the response-time promise and the Instagram and LinkedIn links (the LinkedIn page returned 404 in October 2026). Set either to `null` to hide it.
- `src/data/therapists.ts`: every therapist (names, credentials, approaches, languages). **Only publish verified practitioners and credentials.**
- `src/data/team.ts`: every team member.
- Portraits are arch-shaped initials. Swap in photos inside `ArchPortrait.tsx`.
- Copy on the Consultation page ("we only use your details to arrange your consultation", reply times) should be reviewed against your real privacy policy and operations.

## SEO and sharing

- Each page sets its own tab title and meta description with `usePageMeta()` (`src/hooks/usePageMeta.ts`).
- Icons and the link-preview image live in `public/` (favicon set, `apple-touch-icon.png`, `site.webmanifest`, `og-image.png`).
- Once the site has its domain, change `og:image` and `twitter:image` in `index.html` to the full URL (for example `https://psylume.in/og-image.png`). Some apps, WhatsApp included, ignore relative image paths.

## Forms

The Consultation and Contact forms validate and show a confirmation, but **they do not send anything yet**. Connect them by editing `submitRequest()` in `src/lib/submit.ts`: one function, used by both forms.

## Safety information

The footer shows a crisis note on every page: India emergency number 112 and the Tele-MANAS helpline (14416 / 1-800-891-4416, free, 24/7). Keep it there, and re-check the numbers periodically.

## Accessibility

Skip link, visible focus rings, labelled form fields with inline errors and focus management, `aria-pressed` filter chips, reduced-motion support (smooth scrolling, scroll reveals and the hero animation all switch off), and a keyboard-operable mobile menu. Text and button colour pairs were chosen for WCAG AA contrast.

## Deploying

This is a single-page app using client-side routing, so your host must serve `index.html` for every path. A Netlify-style `public/_redirects` file and a `vercel.json` rewrite are included. Unknown addresses show the site's own 404 page.

## Structure

Each page has its own folder holding the page, its sections and its styles. Shared pieces live in `components/`, grouped by role.

```
src/
  main.tsx                    entry point, loads global styles
  app/App.tsx                 shell (header, footer, scrolling) and routes

  components/
    layout/                   Header, Footer, ScrollManager, SmoothScroll (+ Header.css, Footer.css)
    sections/                 PageIntro, ValueGrid, CtaBand: page sections used on more than one page
    ui/                       Field (form field), CrisisNote
    brand/                    ArchComposition (hero art), ArchPortrait, Star
    icons/                    WhatsAppIcon

  pages/
    home/                     HomePage.tsx, home.css
      sections/               HeroSection, MissionSection, ConcernsSection, ValuesSection
    about/                    AboutPage.tsx
      sections/               WhyWeExistSection, HowWeWorkSection, ExpectationsSection
    therapists/               TherapistsPage.tsx, therapists.css
      components/             TherapistFilters, TherapistCard, NoResults
    team/                     TeamPage.tsx, team.css
      sections/               LeadershipSection, CareTeamSection, JoinUsSection
    contact/                  ContactPage.tsx, contact.css
      components/             ContactForm, ContactDetails
    consultation/             ConsultationPage.tsx, consultation.css
      components/             HowItWorks, ConsultationForm

  data/                       site, therapists, team   (edit content here)
  lib/                        submit.ts (form backend hook-up), smoothScroll.ts
  hooks/                      usePageTitle.ts
  styles/                     index.css → tokens, base, buttons, chips, forms (global styles)
  assets/logos/               primary mark + secondary lockup, colour and white
```

To add a page: create `src/pages/<name>/<Name>Page.tsx`, add a route in `src/app/App.tsx` and a link in `navigation` in `src/data/site.ts`.
