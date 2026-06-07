# Website 4 Sale

Minimal single-page domain sale site built with Vite, TypeScript, Tailwind CSS, Oxlint, and Oxfmt.

## Setup

```sh
npm install
npm run dev
```

## Customize

Copy the sample env file for local development:

```sh
cp .env.example .env
```

Then edit `.env`:

```txt
VITE_DOMAIN=example.com
VITE_TAGLINE=A clean, memorable domain ready for its next owner.
VITE_ASKING_PRICE=Make an offer
VITE_CONTACT_EMAIL=hello@example.com
```

The values are read in `src/env.ts`.

There are no fallback listing values. All npm scripts require these env vars, so missing config fails immediately instead of accidentally showing sample content.

## Checks

```sh
npm run check
```
