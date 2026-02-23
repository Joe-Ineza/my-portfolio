# Portfolio Website

Production-ready portfolio template built with Next.js (App Router), TypeScript, and Tailwind CSS.

This README is a navigation and setup guide for developers and collaborators.

## What This Repo Contains

- Multi-page portfolio site (home, about, projects, contact, resume)
- Data-driven project system via JSON
- Contact API route with optional SMTP delivery
- Reusable UI/layout/components structure

## Project Structure

```text
src/
├── app/
│   ├── about/                # About page route
│   ├── api/contact/          # Contact form API endpoint
│   ├── contact/              # Contact page route
│   ├── projects/             # Projects list + detail routes
│   ├── resume/               # Resume page route
│   ├── layout.tsx            # Root app shell + metadata
│   ├── page.tsx              # Homepage
│   └── not-found.tsx         # 404 page
├── components/
│   ├── layout/               # Navbar, Footer
│   ├── projects/             # Project UI blocks
│   └── ui/                   # Shared UI primitives
├── data/
│   └── projects.json         # Portfolio project content
├── lib/
│   ├── config.ts             # Site/profile configuration
│   ├── projects.ts           # Project data helpers
│   └── utils.ts              # Utility helpers
└── types/
    └── index.ts              # Type definitions
```

## Where to Customize Content

- Site identity, links, bio: `src/lib/config.ts`
- Project entries: `src/data/projects.json`
- Resume file: `public/resume.pdf`
- Profile/hero/project images: `public/images/...`

## Local Development

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Install and run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Useful scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run lint checks
```

## Contact Form Environment Variables

Set these only if you want email sending enabled:

- `SMTP_HOST`
- `SMTP_PORT` (default `587`)
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_EMAIL`

Without these variables, messages can still be accepted by the API but will not be sent via SMTP.

## Deploy on Vercel

1. Push repository to GitHub
2. Import project at https://vercel.com/new
3. Confirm Vercel Root Directory points to the correct app
4. Add environment variables (if using SMTP)
5. Deploy

## Notes

- If you keep multiple Next.js apps in this repo, verify the selected Vercel root before deploying.
- Keep secrets only in environment variables; never commit credentials.

## License

MIT
