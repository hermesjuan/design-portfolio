# CLAUDE.md

## Project overview

Personal portfolio for Hermes Juan — product designer. Single-page site showcasing case studies.

## Tech stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript
- **Animation:** Framer Motion
- **Fonts:** Young Serif (headings), Inter (body)
- **Hosting:** Netlify (auto-deploys on push to `master`)

## Project structure

```
app/
  layout.tsx        — root layout, fonts, metadata, favicon
  page.tsx          — entire single-page site
  globals.css       — Tailwind base styles
  fonts/            — local font files

components/
  Nav.tsx           — sticky top navigation
  Footer.tsx        — footer with social links
  CaseStudySection.tsx — reusable case study block (sticky bar + 2-col layout)
  FadeIn.tsx        — scroll-triggered fade-in wrapper

public/
  images/           — portfolio images (avif, gif, mp4, png)
  favicon.png       — site favicon
```

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # Run ESLint
```

## Key conventions

- All case studies live on the single homepage — no sub-routes
- Images go in `public/images/` and are referenced as `/images/filename.ext`
- Preferred image format is `.avif` for best compression
- `.gif` images use the `unoptimized` flag in Next.js Image
- `.mp4` files render as `<video autoPlay muted loop>`
- Deploy: every push to `master` triggers a Netlify production deploy

## Configuration files

- `next.config.mjs` — Next.js config
- `tailwind.config.ts` — custom fonts, max-width, colors
- `tsconfig.json` — TypeScript config
- `postcss.config.mjs` — PostCSS with Tailwind plugin
- `netlify.toml` — Netlify build settings with @netlify/plugin-nextjs
