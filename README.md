# shikhartiwari.dev

Personal portfolio for Shikhar Tiwari — AI &amp; Industrial Automation Engineer.
Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Configured as
a static export, so it deploys anywhere that serves static files.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # outputs a static site to ./out
```

## Deploy to Cloudflare Pages (recommended — your domain already lives at Cloudflare)

1. Push this folder to a new GitHub repo.
2. Cloudflare dashboard → **Workers &amp; Pages** → **Create** → **Pages** → **Connect to Git**.
3. Pick the repo. Set:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. **Save and Deploy.** You'll get a `*.pages.dev` URL to preview.
5. In the Pages project → **Custom domains** → **Set up a domain** → enter
   `shikhartiwari.dev`. Because the domain is already in your Cloudflare
   account, the DNS record is added automatically. Add `www` too if you want.

HTTPS is issued automatically — required for `.dev`, handled for you.

## Deploy to Vercel (alternative)

Import the repo at vercel.com — it auto-detects Next.js, no config needed.
Then add `shikhartiwari.dev` under the project's **Domains** and follow the DNS
instructions (a CNAME/A record you add in Cloudflare's DNS tab).

## Editing content

All copy lives in `app/page.tsx` (stats, experience, skills, focus) and
`components/Pipeline.tsx` (the data-flow diagram). Colors and fonts are in
`tailwind.config.ts`.
