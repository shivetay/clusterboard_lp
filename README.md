# Clusterboard Landing Page

Public marketing site for Cluster Board, served at [https://clusterboard.pl](https://clusterboard.pl).

The authenticated application lives in the separate `clusterBoard` repository at [https://app.clusterboard.pl](https://app.clusterboard.pl).

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- MUI + Emotion
- i18next (Polish UI copy)

## Project Structure

- `src/app/` — Next.js routes and layout
- `src/views/main-page-view/` — landing page sections (hero, features, pricing)
- `src/content/pricing/static-pricing.ts` — static pricing copy (no backend API)
- `src/lib/app-url.ts` — links to the authenticated app

## Requirements

- Node.js 20+
- npm or pnpm

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL of this landing site (`https://clusterboard.pl`) |
| `NEXT_PUBLIC_APP` | Authenticated app URL (`https://app.clusterboard.pl`) |

## Setup

```bash
npm install
npm run dev
```

Development server runs on [http://localhost:3001](http://localhost:3001) by default.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — production server
- `npm run lint` — ESLint

## Notes

- Login and registration buttons redirect to `app.clusterboard.pl` (no Clerk on the landing site).
- Pricing is static; update `src/content/pricing/static-pricing.ts` when plans change.
- Legal pages (privacy, terms, cookies, OWU) link to the app domain.
