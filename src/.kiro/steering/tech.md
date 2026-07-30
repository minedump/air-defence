# Tech Stack

## Framework & Runtime

- **Next.js 16.2+** (App Router)
- **React 18**
- **TypeScript 5**
- **Node.js 20+**

## Styling

- **Tailwind CSS 3** — utility-first CSS framework
- **SCSS/Sass** — for custom styles and mixins
- **clsx + tailwind-merge** — conditional class merging via `cn()` utility in `lib/utils.ts`

### Style Architecture

- `styles/globals.scss` — global styles, Tailwind imports, animations
- `styles/_variables.scss` — SCSS variables (colors, spacing, font sizes)
- `styles/_mixins.scss` — responsive breakpoint mixins and container mixin
- Tailwind config extends base theme with custom `primary` color (`#0B1A2C`)

### Design System Rules

This project follows the **design-taste-frontend** skill (`.kiro/skills/design-taste.md`). Key rules:
- **Typography**: Use `Geist`, `Outfit`, `Cabinet Grotesk`, or `Satoshi`. Never use `Inter`.
- **Layout**: Prefer CSS Grid over complex flexbox math. Use `min-h-[100dvh]` instead of `h-screen`.
- **Icons**: Use `@tabler/icons-react` with consistent `strokeWidth` (1.5 or 2.0).
- **Motion**: For animations, prefer Framer Motion with spring physics. Never animate `top`/`left`/`width`/`height` — use `transform` and `opacity` only.
- **Anti-slop**: No centered hero sections when variance > 4. No 3-column card grids. No generic names/data.

## UI & Icons

- **@tabler/icons-react** — icon library (used throughout components)
- Custom UI components in `components/ui/` (Button, Input, Badge, Logo, CookieConsent)

## API & Integrations

- **Telegram Bot API** — contact form submissions sent via `/api/telegram` route
- **Yandex Metrika** — analytics (configured in `components/analytics/YandexMetrika.tsx`)

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_SITE_URL` — public site URL for metadata and canonical URLs
- `TELEGRAM_BOT_TOKEN` — Telegram bot token for form submissions
- `TELEGRAM_CHAT_ID` — Telegram chat ID to receive messages
- `NEXT_PUBLIC_YANDEX_METRIKA_ID` — Yandex Metrika counter ID (optional, analytics disabled if not set)

## Key Utilities

- `cn(...classes)` — `lib/utils.ts` — conditional Tailwind class merging
- `formatPhone(raw)` — `lib/utils.ts` — formats `+70001234567` → `+7 000 123-45-67`. Store only `contacts.phone` (raw) in config, never duplicate formatted version.
- `generatePageMetadata({ title, description, canonicalPath, noIndex })` — `lib/metadata.ts` — generates full Metadata object with OG, Twitter, robots. Use on every page instead of manual Metadata objects.

## Common Commands

```bash
# Development server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

## Build System

- **Next.js compiler** — built-in TypeScript and SCSS compilation
- **PostCSS + Autoprefixer** — CSS processing
- **Tailwind JIT** — just-in-time CSS generation

## Project Configuration

- `next.config.js` — Next.js configuration
- `tailwind.config.js` — Tailwind theme customization
- `tsconfig.json` — TypeScript compiler options with path aliases (`@/*` → `src/*`)
- `postcss.config.js` — PostCSS plugins (Tailwind, Autoprefixer)

## Adding Dependencies

Before importing any 3rd party library (e.g., `framer-motion`, `lucide-react`), check `package.json`. If missing, output the install command first:
```bash
npm install package-name
```
Never assume a library exists.

## Font Setup

Fonts are loaded via `next/font/google` in `app/layout.tsx` — NOT via `<link>` tags. This ensures fonts are self-hosted at build time with no layout shift. To change the font:

```ts
import { Outfit } from 'next/font/google';
const font = Outfit({ subsets: ['latin', 'cyrillic'], variable: '--font-sans', display: 'swap' });
```

Then apply `className={font.variable}` to `<html>` and reference `var(--font-sans)` in CSS.
