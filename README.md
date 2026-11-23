# Roman Stankevych — Actor Website

One-page portfolio for actor Roman Stankevych, built with **Next.js 16** (App Router), **TypeScript** and **Tailwind CSS 4**.

The site is exported as plain static files, so it needs no server or backend and is hosted for free on Cloudflare Pages.

## Getting started

Requires Node.js 20 or newer.

```bash
npm install      # install dependencies into node_modules
npm run dev      # dev server at http://localhost:3000 with hot reload
npm run build    # production build into out/
npm run preview  # serve the built out/ folder locally
```

## Project structure

```
src/
  app/
    layout.tsx        root layout: <html>, fonts, SEO metadata
    page.tsx          the home page: sections in order
    globals.css       design tokens: colors, fonts, breakpoints
    icon.svg          favicon
  content/
    site.ts           ALL content: copy, links, videos, photos, credits
  components/
    sections/         one file per page section
    video/            Vimeo player that loads only on click
    ui/               buttons, icons, container, section heading
    EmailLink.tsx     mailto link that also copies the address
    ShareCvButton.tsx native share / copy link for the CV
  lib/vimeo.ts        Vimeo thumbnails via oEmbed
public/
  cv/                 CV PDF, served at /cv/...
  images/             portrait, gallery, social preview image
```

## Common edits

- **Text or links** — `src/content/site.ts`.
- **Add a video** — add `{ title, kind, vimeoId }` to `reelGroups`. `vimeoId` is the number from `vimeo.com/1234567`.
- **Video presentation / English monologue** — set `vimeoId` and remove `soon: true` on `presentation` or on the `English Monologue` entry.
- **Gallery photos** — create `public/images/gallery/<slug>/` with `full.webp` (max 2000px) and `thumb.webp` (short side 800px), then add `photo("<slug>", "Label")` to `gallery`.
- **LinkedIn** — set `links.linkedin`; the header icon appears automatically.
- **Update the CV** — replace the file in `public/cv/` keeping the same name.

## Deploy

Cloudflare Pages project `roman-stankevych` → https://roman-stankevych.pages.dev

1. `npm run build`
2. Cloudflare dashboard → Workers & Pages → roman-stankevych → Create deployment → upload the `out` folder.

When the custom domain is connected, update `SITE_URL` in `src/app/layout.tsx`.
