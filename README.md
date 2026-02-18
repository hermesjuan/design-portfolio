# hermesjuan.com

Personal portfolio of Hermes Juan — product designer. Built with Next.js 14, Tailwind CSS, and deployed on Netlify.

---

## Tech stack

| Tool | Purpose |
|---|---|
| Next.js 14 (App Router) | Framework |
| Tailwind CSS | Styling |
| TypeScript | Type safety |
| Netlify | Hosting + deploy previews |
| Young Serif | Serif font (headings, labels) |
| Inter | Sans-serif font (body text) |

---

## Project structure

```
app/
  layout.tsx            — root layout: fonts, metadata, favicon
  page.tsx              — the entire single-page site (hero, case studies, want more, footer)
  globals.css           — base styles

components/
  Nav.tsx               — sticky top nav ("Hermes Juan")
  Footer.tsx            — centered footer links (Linkedin, email, Behance)
  CaseStudySection.tsx  — reusable case study block: sticky bar + 2-col layout
  FadeIn.tsx            — scroll-triggered fade-in animation wrapper

public/
  images/               — all portfolio images (avif, gif, mp4, png)
  favicon.png           — site favicon

tailwind.config.ts      — custom fonts, max-width, colors
```

---

## Running locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Making changes with Claude Code

### Starting a session

Open the project folder in your terminal and run:

```bash
claude
```

Claude Code will open in your terminal. Describe what you want to change in plain English.

### Common tasks

**Update text content** (hero copy, case study descriptions, footer links):
> "Update the hero headline to say X" or "Change the Aruba description to..."

**Add or swap an image:**
1. Drop the new image into `public/images/`
2. Tell Claude: "Replace the first Sardius image with sardius-new.avif"

**Add a new case study:**
> "Add a new case study after Aruba called [Project Name], year 2024, category Product, with images project-1.avif and project-2.avif"

**Change fonts or spacing:**
> "Make the nav name slightly larger" or "Add more space between case studies"

**Update footer or nav links:**
> "Update the Behance link in the footer to behance.net/newurl"

### Deploying changes

Every push to `master` automatically triggers a production deploy on Netlify — usually live within 1–2 minutes.

Monitor builds at: https://app.netlify.com/teams/hermesjuan/builds

### Working with PRs (for bigger changes)

For larger redesigns, Claude Code may create a branch and open a PR so you can preview before merging. You'll get a deploy preview URL like `deploy-preview-XX--hermesjuan.netlify.app`. Once happy, say: "Looks good, merge the PR."

---

## Images

All images live in `public/images/`. Supported formats:

| Format | Used for | Notes |
|---|---|---|
| `.avif` | Most portfolio images | Best compression |
| `.gif` | Animated demos | Handled with `unoptimized` flag |
| `.mp4` | Video demos | Rendered as `<video autoPlay muted loop>` |
| `.png` | Illustrations, logos | Supports transparency |

Reference images in code as `/images/filename.ext`.

---

## Key design decisions

- **Single-page scroll** — all case studies on the homepage, no sub-routes
- **Sticky separator bar** — sticks below the nav showing `[year] · [category] · [company]`
- **Sticky left column** — title/description stays fixed while images scroll past on the right
- **Young Serif throughout** — headings, separator labels, nav, footer, and card titles
- **FadeIn animations** — subtle fade-in as content enters the viewport
