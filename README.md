# Velour Atelier — Next.js Portfolio

Premium one-page portfolio built with Next.js + Framer Motion.

## Why you were seeing `pages.dev` 404

Cloudflare Pages shows that screen when the domain exists but no successful deployment has published an `index.html` for the root path.

This project is now configured for **static export**, so Cloudflare Pages can host it directly.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub.
2. In Cloudflare Pages, create a new project and connect the repo.
3. Use these build settings:
   - **Framework preset**: `Next.js (Static HTML Export)` or `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. Deploy.

After deployment, your site root (`/`) will resolve correctly.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

This generates static files in `out/`.
