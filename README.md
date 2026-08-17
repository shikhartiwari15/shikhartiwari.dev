# shikhartiwari.dev

Personal portfolio — **AI & Industrial Automation Engineer**. Industrial HMI/SCADA
control-panel aesthetic. Next.js 14 (static export) + Tailwind CSS + TypeScript,
deployed on Cloudflare Pages.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build (static export → ./out)

```bash
npm run build      # outputs a fully static site to ./out
```

`next.config.mjs` sets `output: "export"`, so `./out` is a static site you can
deploy anywhere. No server required.

## Deploy to Cloudflare Pages

Connect the GitHub repo in the Cloudflare Pages dashboard and set:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Framework preset:** Next.js (Static HTML Export)

Push to `main` → auto-deploy. Every pull request gets a free preview URL.

## Where to edit things

| What                | File                        |
| ------------------- | --------------------------- |
| **Projects**        | `lib/projects.ts`  ← edit this most |
| Hero / sections     | `app/page.tsx`              |
| Pipeline diagram    | `components/Pipeline.tsx`   |
| Contact form        | `components/ContactForm.tsx`|
| Colors / animation  | `tailwind.config.ts`, `app/globals.css` |
| Light / dark palette | `app/globals.css` — edit the `:root` (dark) and `.light` blocks |
| Fonts (Poppins + Plex Mono) | `app/layout.tsx` |
| Theme toggle        | `components/ThemeToggle.tsx` |
| SEO / metadata      | `app/layout.tsx`            |
| Résumé download     | `public/Shikhar_Tiwari_Resume.pdf` |

## Contact form

Uses [Web3Forms](https://web3forms.com) — no backend, no database.

1. Get a free access key (250 submissions/month, no account needed).
2. Paste it into `WEB3FORMS_ACCESS_KEY` in `components/ContactForm.tsx`.

Submissions arrive in your inbox. Swap for Formspree / Static Forms / splitforms
if you prefer — they use the same drop-in pattern.

## Adding a project

Open `lib/projects.ts` and add an entry to the `PROJECTS` array. Fill in `links`
when you have real URLs (blank links simply don't render). Drop a screenshot in
`public/` and set `image` to show it.
