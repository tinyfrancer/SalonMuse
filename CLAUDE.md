# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server at http://localhost:3000 (hot reload)
pnpm build        # production build — catches type errors and broken imports
pnpm start        # run production build locally
pnpm lint         # ESLint
pnpm type-check   # tsc --noEmit
```

Add a shadcn component:
```bash
pnpm dlx shadcn@latest add <component-name>
```

## Stack

- **Next.js 16** (App Router) — file-based routing under `src/app/`
- **React 19** + **TypeScript 5**
- **Tailwind CSS v4** — utility-first, no separate CSS files needed
- **shadcn/ui** — pre-built accessible components in `src/components/ui/` (copy-paste, not a library dep)
- **pnpm** — package manager

## Architecture

### Routing
Each route is a `page.tsx` file inside `src/app/<route>/`. The root layout (`src/app/layout.tsx`) wraps every page with `<Header>` and `<Footer>`.

### Data layer
All content lives as typed TypeScript arrays in `src/lib/data/`:
- `services.ts` — service menu with name, price, duration, category
- `team.ts` — stylist profiles with bio and specialties
- `gallery.ts` — gallery image metadata (src paths, alt text, category)

To add or edit content, only these files need changing — no CMS, no API calls.

### Components
- `src/components/layout/` — `Header.tsx` (sticky, mobile-responsive nav) and `Footer.tsx`
- `src/components/ui/` — shadcn components (Button, Card, Badge, Separator, etc.)

### Pages
| Route | File | Notes |
|---|---|---|
| `/` | `src/app/page.tsx` | Hero, featured services/team, CTA |
| `/services` | `src/app/services/page.tsx` | Full menu grouped by category |
| `/gallery` | `src/app/gallery/page.tsx` | Client component with category filter tabs |
| `/team` | `src/app/team/page.tsx` | Stylist cards with bios |
| `/booking` | `src/app/booking/page.tsx` | Calendly embed placeholder |

### Images
Static images go in `public/images/gallery/` and `public/images/team/`. Reference them as `/images/...` (no `public/` prefix). The gallery page uses Next.js `<Image>` with `fill` + `aspect-square` containers.

Team member avatars currently render an initial letter placeholder. Swap in a real image by replacing the placeholder `<div>` with `<Image src={stylist.image} ... />`.

### Online Booking
Set `CALENDLY_URL` in `src/app/booking/page.tsx` to your Calendly or Acuity scheduling link. The Calendly inline widget script needs to be added to `src/app/layout.tsx` via `next/script` when activated.

### Colors
The design uses a warm salon palette defined as CSS custom properties in `src/app/globals.css`. The palette uses:
- Warm ivory background (`--background`)
- Charcoal text (`--foreground`)
- Dusty rose accents (`--accent`)

Adjust the `oklch(...)` values in the `:root` block to retheme the entire site.
