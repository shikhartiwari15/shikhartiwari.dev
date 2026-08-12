# Portfolio — Coming Soon

A single-page "coming soon" placeholder, styled like an engineering blueprint /
technical drawing (grid background, dimension lines, a corner title block).
Built with Next.js (App Router) and exported as static HTML — no server needed.

## Before you deploy

Open `app/page.tsx` and replace the placeholder email:

```tsx
<a className="contact" href="mailto:you@yourdomain.com">
  ...
  <span className="contact__value">you@yourdomain.com</span>
</a>
```

## Run locally

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build

```bash
npm run build      # outputs static files to /out
```

`next.config.js` is set to `output: 'export'`, so `npm run build` produces a
fully static `/out` folder — no Node server required at runtime.

## Deploy to Cloudflare Workers

1. Push this project to a GitHub repo.
2. In the Cloudflare dashboard: **Compute → Workers & Pages → Create → Import a repository**,
   and select the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Deploy command:** `npx wrangler deploy`
4. Deploy, then attach your domain from the Worker's **Domains** tab.

### Why `wrangler.jsonc` is here

Without a `wrangler.jsonc` in the repo, `wrangler deploy` auto-detects Next.js
as a dependency and assumes you want full SSR — it tries to install the
OpenNext adapter and build a `.next/standalone` server bundle. That fails here
because this project uses `output: 'export'` (a plain static site), which
never produces that server bundle.

`wrangler.jsonc` heads that off by explicitly telling Wrangler this is a
static-assets deploy (`assets.directory: "./out"`), so it skips OpenNext
entirely and just uploads the static files from `next build`. Keep this file —
deleting it will bring the auto-detection (and the build failure) back.

## Structure

```
app/
  layout.tsx     # <html>/<body> shell + page metadata
  page.tsx       # the coming-soon page content
  globals.css    # all styling (grid bg, dimension line, meter, title block)
next.config.js   # static export config
```
