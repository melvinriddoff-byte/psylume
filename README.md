# Psylume website

React + TypeScript (Vite) website built from the **Psylume Brand Identity 2026** book.

Pages: **About us** (home), **Therapists**, **Consultation**, **Team**, **Contact**, plus the shared **Header** and **Footer**.

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

The logo PNGs in `src/assets/logos/` were extracted from the brand-book PDF at high resolution and made transparent. For the sharpest result, replace them with the original SVG or PNG exports from your design source, keeping the same file names.

## Placeholder content to replace before launch

All of this is fictional or unconfirmed:

- `src/data/site.ts`: email, phone, clinic address, opening hours, response-time promise, Instagram handle.
- `src/data/therapists.ts`: every therapist (names, credentials, approaches, languages). **Only publish verified practitioners and credentials.**
- `src/data/team.ts`: every team member.
- Portraits are arch-shaped initials. Swap in photos inside `ArchPortrait.tsx`.
- Copy on the Consultation page ("we only use your details to arrange your consultation", reply times) should be reviewed against your real privacy policy and operations.

## Forms

The Consultation and Contact forms validate and show a confirmation, but **they do not send anything yet**. Connect them by editing `submitRequest()` in `src/lib/submit.ts`: one function, used by both forms.

## Safety information

The footer shows a crisis note on every page: India emergency number 112 and the Tele-MANAS helpline (14416 / 1-800-891-4416, free, 24/7). Keep it there, and re-check the numbers periodically.

## Accessibility

Skip link, visible focus rings, labelled form fields with inline errors and focus management, `aria-pressed` filter chips, reduced-motion support (the only animation is the hero artwork on load), and a keyboard-operable mobile menu. Text and button colour pairs were chosen for WCAG AA contrast.

## Deploying

This is a single-page app using client-side routing, so your host must serve `index.html` for every path. A Netlify-style `public/_redirects` file is included. On Vercel, add a rewrite of `/(.*)` to `/`.

## Structure

```
src/
  App.tsx, main.tsx
  components/   Header, Footer, PageIntro, CrisisNote, Field, ArchComposition, ArchPortrait, Star, ScrollManager
  pages/        About, Therapists, Consultation, Team, Contact
  data/         site, therapists, team   (edit content here)
  lib/          submit.ts                (form backend hook-up)
  hooks/        usePageTitle.ts
  styles/       tokens.css, base.css, components.css, pages.css
  assets/logos/ primary mark + secondary lockup, colour and white
```
