# Personal site — Kiran Prasad

A single-page personal brand site. Plain HTML, CSS, and JavaScript — no build
step, no dependencies, no framework to upgrade. Open `index.html` in a browser
and it works.

## Files

```
index.html    all the content — this is the file you'll edit most
styles.css    all the styling; design tokens live at the top in :root
main.js       theme toggle, scroll reveal, nav highlighting
assets/       your photo, résumé, favicon, social preview image
```

## Running it locally

Just double-click `index.html`. Or, for a proper local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Making it yours

Everything you need to change is in `index.html`, marked with `EDIT ME`
comments. The important bits:

1. **Name, title, and description** — the `<head>` block at the top.
2. **Hero** — your name and the one-sentence version of what you do.
3. **About** — your bio, your skills in the `.tags` list, the `.facts` list.
4. **Work** — each project is one `<article class="card">`. Copy one to add a
   project, delete one to remove it. The grid re-flows on its own.
5. **Writing** — each post is one `<li class="post">`. Point the `href` at your
   posts wherever they live, or delete the whole section if you don't write.
6. **Contact** — your email and social links.

Drop `portrait.jpg` and `resume.pdf` into `assets/` (see `assets/README.md`).
If the photo isn't there yet the site shows your initials instead, so nothing
looks broken while you're still setting up.

### Changing the colors

One line in `styles.css` drives the entire accent color:

```css
--accent: #b4531f;
```

Change it and the buttons, links, highlights, and section numbers all follow.
The dark palette has its own `--accent` a bit further down — brighten it so it
stays readable on a dark background.

Light and dark both work out of the box: the site follows the visitor's system
setting, and the toggle in the header overrides it (remembered via
`localStorage`).

## Publishing it with GitHub Pages

Free, and it serves straight from this repository.

1. Merge this branch into `main`.
2. Go to **Settings → Pages** in the repo.
3. Under **Source**, choose **Deploy from a branch**.
4. Pick branch `main`, folder `/ (root)`, and press **Save**.
5. Wait a minute or two — your site appears at
   `https://cakiran369.github.io/Kiranwebsite/`.

### Using your own domain

Once you own a domain (Namecheap, Cloudflare, Porkbun — around $10/year):

1. Add a file named `CNAME` at the repo root containing just your domain,
   e.g. `kiranprasad.com`.
2. At your registrar, add a `CNAME` record pointing `www` to
   `cakiran369.github.io`, and four `A` records for the bare domain pointing to
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Back in **Settings → Pages**, enter the domain and tick **Enforce HTTPS**.

DNS takes anywhere from a few minutes to a few hours to propagate.

## Notes on what's built in

- **Responsive** from ~320px up; the layout collapses to a single column on
  phones and the nav links hide below 34rem.
- **Accessible**: skip link, visible focus rings, semantic landmarks, real
  headings, `prefers-reduced-motion` respected.
- **Fast**: no external requests at all — no CDN fonts, no analytics, no
  tracking. The whole page is a handful of KB.
- **Degrades gracefully**: with JavaScript disabled, every section is still
  visible and readable; only the animations and theme toggle go away.
