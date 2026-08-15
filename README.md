# CA Kiran Prasad — personal brand website

A single-page React site for **CA Kiran Prasad**, who guides Malayali students
through the international finance qualifications: **EA, US CPA, US CMA, ACCA
and DipIFR**.

Built with **Vite + React (JavaScript)**. The only external dependency is
[`lucide-react`](https://lucide.dev) for icons. There is no CSS framework —
all styling is plain CSS injected from a `<style>` tag inside
`src/App.jsx`.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local development

```bash
npm install      # once, to install dependencies
npm run dev      # http://localhost:5173
```

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally, to check before deploying
npm run lint     # oxlint
```

## Project layout

```
index.html        page shell, title, favicon, Open Graph / Twitter meta
src/main.jsx      React entry point — mounts <App /> into #root
src/App.jsx       the entire site: content, components, and its own CSS
public/favicon.svg  "CA" monogram
netlify.toml      Netlify build + SPA fallback
vercel.json       Vercel build + SPA fallback
```

## Before going live — edit these

All outbound links live in one object at the top of `src/App.jsx`:

```js
const LINKS = {
  youtube:   "https://youtube.com/@cakiranprasad",
  instagram: "https://instagram.com/cakiranprasad",
  linkedin:  "https://linkedin.com/in/cakiranprasad",
  whatsapp:  "https://wa.me/919000000000",   // ← your real number, digits only, with country code
  email:     "kiranprasad255@gmail.com",
  phone:     "+91 90000 00000",
};
```

Also update in `index.html`:

- `og:url` and `<link rel="canonical">` — currently `https://cakiranprasad.com/`
- `og:image` / `twitter:image` — add a 1200×630 image at `public/og-image.png`
  and point both tags at it, otherwise shared links show no preview image.

## Deploying

Both hosts are pre-configured for build command `npm run build`, output
directory `dist`, and an SPA fallback so deep links never 404.

### Netlify — drag and drop

```bash
npm run build
```

Then open <https://app.netlify.com/drop> and drag the **`dist` folder** onto
the page. The site is live in seconds on a temporary URL; use **Site
configuration → Change site name** or **Domain management** to set your own.

### Netlify — CLI

```bash
npm install -g netlify-cli
netlify login
netlify init      # first time: link or create a site
npm run build
netlify deploy --prod --dir=dist
```

### Vercel — CLI

```bash
npm install -g vercel
vercel login
vercel            # preview deployment
vercel --prod     # production
```

### Either host, from Git

Push this repo to GitHub and import it. `netlify.toml` / `vercel.json` are
detected automatically, so no manual build settings are needed. Every push to
the default branch then redeploys.

## Custom domain

Buy the domain, add it under the host's domain settings, and point DNS as the
host instructs (usually a `CNAME` for `www` plus an apex `A`/`ALIAS` record).
Both Netlify and Vercel issue HTTPS certificates automatically.
