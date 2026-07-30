# Next.js Website Template

Профессиональный шаблон для корпоративных сайтов на Next.js 16 + Tailwind CSS + SCSS с интеграцией **design-taste-frontend** skill для создания премиальных интерфейсов.

## Особенности

- **Next.js 16** (App Router) + **TypeScript 5**
- **Tailwind CSS 3** + **SCSS** (переменные, миксины)
- **@tabler/icons-react** — иконки
- **clsx** + **tailwind-merge** — утилита cn()
- **Telegram Bot API** — форма обратной связи
- **Yandex Metrika** — аналитика
- **Design Taste Skill** — anti-slop правила для премиального UI

## Быстрый старт

Откройте http://localhost:3000 после запуска npm run dev

## Настройка перед запуском

1. src/lib/config.ts — заполните данные компании, контакты, навигацию
2. .env.local — NEXT_PUBLIC_SITE_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID
3. src/components/ui/Logo.tsx — вставьте SVG логотипа
4. src/components/analytics/YandexMetrika.tsx — укажите ID счётчика
5. src/app/layout.tsx — замените шрифт (рекомендуется Geist, Outfit, Cabinet Grotesk)
6. tailwind.config.js — измените цвет primary
7. public/ — замените favicon.ico, apple-touch-icon.png, thumbnail.jpg

## Design Taste Skill

Шаблон интегрирован с design-taste-frontend skill (.kiro/skills/design-taste.md).

Настройки: DESIGN_VARIANCE=8, MOTION_INTENSITY=6, VISUAL_DENSITY=4

Кредиты: https://github.com/Leonxlnx/taste-skill