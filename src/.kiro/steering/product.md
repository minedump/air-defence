# Product

This is a **Next.js website template** for Russian-market B2B companies. It is a reusable, fully anonymized starting point for corporate/service company websites.

## Core Purpose

A multi-page marketing/corporate site with:
- Homepage with hero section and contact form
- Standard legal/info pages (services, contacts, requisites, privacy policy, data processing agreement)
- Contact form that submits leads via a Telegram bot

## Target Audience

Russian-speaking businesses. All user-facing content, labels, and copy are in Russian.

## Key Functionality

- **Lead capture**: Contact form sends submissions to a configured Telegram bot (`/api/telegram`)
- **Company info**: All company details (name, INN, OGRN, contacts, bank details, navigation) are centralized in `lib/config.ts` — single source of truth for all site-wide data
- **SEO**: Per-page metadata, sitemap auto-generated from navigation config, robots settings
- **Analytics**: Yandex Metrika integration
- **Cookie consent**: Cookie banner (Russian personal data law compliant)

## Template Usage

All values in `lib/config.ts` are placeholders. To deploy for a real client:
1. Fill in `lib/config.ts` with actual company data
2. Replace `TODO` comments in page components with real content
3. Set environment variables in `.env.local`
4. Replace the font in `app/layout.tsx` if needed

## Design Philosophy

This template uses the **design-taste-frontend** skill (`.kiro/skills/design-taste.md`). When building new pages or components, apply the anti-slop rules from that skill: asymmetric layouts, premium typography, no generic card grids, full interaction states (loading/empty/error).
