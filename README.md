# Funmita Catering Landing Page

Premium production-grade landing page for Funmita Catering, rebuilt with Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, shadcn-style UI primitives, Lucide Icons, and dark/light mode support.

## What changed

- Rebuilt the website as a conversion-focused landing experience.
- Added scalable content/config architecture in `src/config/site.ts`.
- Added reusable UI primitives in `src/components/ui`.
- Added section-based composition in `src/components/sections`.
- Added responsive navigation, mobile menu, dark/light theme toggle, and accessible CTAs.
- Added metadata, OpenGraph, Twitter cards, canonical URL, robots config, and JSON-LD local business schema.
- Added reduced-motion-aware Framer Motion reveal animations.
- Replaced duplicated page-level implementations with reusable, typed modules.

## Tech stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui-style primitives
- Radix UI
- Lucide Icons
- next-themes

## Project structure

```txt
src/
  app/                 App Router pages, metadata, global styles
  components/
    layout/            Navbar and footer
    motion/            Animation wrappers
    sections/          Landing page sections
    ui/                Reusable shadcn-style primitives
  config/              Typed brand, content, nav, SEO, and schema data
  lib/                 Utilities
```

## Design system

The design uses CSS variables in `src/app/globals.css` for light and dark themes:

- `--background`, `--foreground`, `--card`, `--muted`, `--border`
- `--primary` for the Funmita warm orange brand color
- `--secondary` and `--accent` for soft hospitality tones
- `--radius` for consistent 8px UI corners

Tailwind consumes those tokens from `tailwind.config.ts`, keeping layout, color, radius, and shadows consistent across the site.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```

## Deployment

Vercel is recommended:

1. Push `zillab-branch` to GitHub.
2. Import the repository into Vercel.
3. Use the default Next.js settings.
4. Deploy from `zillab-branch` or merge after review.

For other platforms, build with `npm run build` and start with `npm run start`.

## Future improvements

- Replace Unsplash placeholders with original Funmita food and event photography.
- Connect the CTA flow to a real booking/contact backend.
- Add analytics and conversion tracking.
- Add a CMS for menu, testimonials, packages, and seasonal hampers.
- Add richer gallery pages once brand photography is available.
