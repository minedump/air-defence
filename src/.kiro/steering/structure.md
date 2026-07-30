# Project Structure

The project root is one level above `src/`. Config files (`package.json`, `next.config.js`, `tailwind.config.js`, `tsconfig.json`, `.env.local`) live at the root. All source code lives under `src/`.

```
src/
├── app/                        # Next.js App Router pages and API routes
│   ├── layout.tsx              # Root layout (Header, Footer, analytics, font via next/font)
│   ├── page.tsx                # Homepage
│   ├── not-found.tsx           # 404 page
│   ├── sitemap.ts              # Auto-generated sitemap from siteConfig navigation
│   ├── robots.ts               # Auto-generated robots.txt from siteConfig
│   ├── api/
│   │   └── telegram/route.ts   # POST handler — sends form data to Telegram bot
│   ├── agreement/page.tsx      # Data processing agreement (noIndex)
│   ├── contacts/page.tsx       # Contacts page
│   ├── privacy/page.tsx        # Privacy policy (noIndex)
│   ├── requisites/page.tsx     # Company requisites (noIndex)
│   └── services/page.tsx       # Services page
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Fixed header with desktop nav + mobile bottom nav
│   │   └── Footer.tsx          # Footer with company info, links, contacts
│   ├── sections/               # Reusable page sections — compose pages from these
│   │   ├── HeroSection.tsx     # Main hero for homepage (title, subtitle, CTA buttons)
│   │   ├── PageHeroSection.tsx # Compact hero for inner pages
│   │   ├── FeaturesSection.tsx # Feature grid (2 or 4 columns)
│   │   └── index.ts            # Re-exports all sections
│   ├── ui/
│   │   ├── Button.tsx          # Multi-variant button (renders as button, Link, or <a>)
│   │   ├── Input.tsx           # Labeled input with error state
│   │   ├── Badge.tsx           # Small label/tag component
│   │   ├── Logo.tsx            # SVG logo component
│   │   └── CookieConsent.tsx   # Cookie consent banner
│   ├── analytics/
│   │   └── YandexMetrika.tsx   # Yandex Metrika (reads NEXT_PUBLIC_YANDEX_METRIKA_ID)
│   └── ContactFormSection.tsx  # Contact form section (client component)
│
├── hooks/
│   ├── useSmoothScroll.ts      # Scroll to section by ID with header offset
│   └── useBodyScrollLock.ts    # Lock/unlock body scroll (for modals etc.)
│
├── lib/
│   ├── config.ts               # Central site config — company info, contacts, navigation, meta
│   ├── metadata.ts             # generatePageMetadata() — use on every page
│   └── utils.ts                # cn() + formatPhone()
│
└── styles/
    ├── globals.scss            # Global styles, Tailwind directives, animations
    ├── _variables.scss         # SCSS color and spacing variables
    └── _mixins.scss            # Responsive breakpoint mixins, container mixin
```

## Key Conventions

### Path Aliases
Use `@/` for all imports from `src/`. Never use relative paths like `../../`.

```ts
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/lib/config';
import { generatePageMetadata } from '@/lib/metadata';
import { cn, formatPhone } from '@/lib/utils';
```

### Page Metadata
Every page must use `generatePageMetadata()` from `lib/metadata.ts`. Never write raw `Metadata` objects on pages.

```ts
// Обычная страница
export const metadata = generatePageMetadata({
  title: 'Услуги',
  description: 'Описание для поисковиков.',
  canonicalPath: '/services',
});

// Служебная страница (не индексируется)
export const metadata = generatePageMetadata({
  title: 'Реквизиты',
  canonicalPath: '/requisites',
  noIndex: true,
});
```

Pages that should have `noIndex: true`: `/privacy`, `/agreement`, `/requisites`, any admin/utility pages.

### Component Patterns
- **Server components by default** — only add `'use client'` when the component uses hooks, event handlers, or browser APIs
- Components use named exports (e.g., `export const Button = ...`), except `Logo` which uses a default export
- UI primitives use `React.forwardRef` and set `displayName`
- Props interfaces are defined inline above the component

### Styling Conventions
- Prefer Tailwind utility classes for layout and spacing
- Use `cn()` from `lib/utils.ts` for conditional/merged class names
- SCSS variables and mixins are available for custom styles — import with `@use "../styles/variables" as *`
- The `.container` class applies the standard max-width centered layout (defined in `_mixins.scss`)
- The `.glass` class applies glassmorphism effect (backdrop blur + semi-transparent white)
- Primary brand color is `text-primary` / `bg-primary` (Tailwind) or `$text-primary` (SCSS) — `#0B1A2C`

### Design-Taste Integration

This project uses the **design-taste-frontend** skill (`.kiro/skills/design-taste.md`). When creating new components or pages:

**Layout Rules:**
- Use CSS Grid (`grid grid-cols-1 md:grid-cols-3 gap-6`) instead of complex flexbox math
- Use `min-h-[100dvh]` for full-height sections (never `h-screen`)
- For `DESIGN_VARIANCE > 4`, avoid centered hero sections — use split-screen or asymmetric layouts
- Mobile: always fall back to single-column (`w-full px-4`) on `< 768px`

**Typography:**
- Headlines: `text-4xl md:text-6xl tracking-tighter leading-none`
- Body: `text-base text-gray-600 leading-relaxed max-w-[65ch]`
- Use `Geist`, `Outfit`, `Cabinet Grotesk`, or `Satoshi` — never `Inter`

**Interaction States:**
- Always implement loading, empty, and error states
- Use skeletal loaders (not generic spinners)
- Add tactile feedback: `-translate-y-[1px]` or `scale-[0.98]` on `:active`

**Anti-Slop Rules:**
- No 3-column card grids — use 2-column zig-zag or asymmetric layouts
- No generic placeholder names ("John Doe", "Acme Corp")
- No broken Unsplash links — use `https://picsum.photos/seed/{random}/800/600`
- No emojis in code or content — use icons from `@tabler/icons-react`

### Responsive Design
- Mobile-first approach using Tailwind breakpoint prefixes (`md:`, `lg:`)
- Header has separate desktop (`hidden md:flex`) and mobile (`md:hidden`) layouts
- Mobile navigation is a fixed bottom bar

### Configuration
- All site-wide data (company details, contacts, navigation links) must come from `lib/config.ts`
- Never hardcode company name, phone, email, or URLs in components — always reference `siteConfig`
- Navigation arrays in `siteConfig` drive both rendered nav and the auto-generated sitemap

### API Routes
- API routes live in `app/api/` following Next.js App Router conventions
- Use `NextRequest`/`NextResponse` from `next/server`
- Sensitive credentials (bot tokens, chat IDs) are read from environment variables only

### Performance
- Never animate `top`, `left`, `width`, or `height` — use `transform` and `opacity` only
- Apply grain/noise filters to fixed, `pointer-events-none` pseudo-elements only
- Use z-index sparingly (only for navbars, modals, overlays)
