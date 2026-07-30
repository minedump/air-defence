# Чеклист запуска нового сайта

Скопируй и отмечай по мере выполнения.

## 1. Конфигурация

- [ ] Заполнить `src/lib/config.ts` — компания, контакты, банк, навигация
- [ ] Создать `.env.local` с переменными:
  - `NEXT_PUBLIC_SITE_URL=https://your-domain.ru`
  - `TELEGRAM_BOT_TOKEN=...`
  - `TELEGRAM_CHAT_ID=...`
  - `NEXT_PUBLIC_YANDEX_METRIKA_ID=...` (опционально)
- [ ] Обновить `siteConfig.meta.titleTemplate` и `defaultDescription`

## 2. Дизайн и брендинг

- [ ] Заменить шрифт в `src/app/layout.tsx` (рекомендуется Geist, Outfit, Cabinet Grotesk)
- [ ] Обновить цвет `primary` в `tailwind.config.js`
- [ ] Заменить логотип в `src/components/ui/Logo.tsx`
- [ ] Добавить в `public/`:
  - `favicon.ico` (32×32)
  - `apple-touch-icon.png` (180×180)
  - `og-image.jpg` (1200×630) — используется как дефолтное OG-изображение

## 3. SEO

- [ ] Проверить `src/app/robots.ts` — убедиться что `disallow` настроен правильно
- [ ] Проверить `src/app/sitemap.ts` — все нужные страницы есть в навигации конфига
- [ ] Для каждой страницы заполнить `generatePageMetadata({ title, description, canonicalPath })`
- [ ] Служебные страницы (privacy, agreement, requisites) имеют `noIndex: true` — оставить как есть
- [ ] Добавить структурированные данные (JSON-LD) для главной страницы — Organization schema
- [ ] Проверить OG-теги через https://opengraph.xyz

## 4. Контент

- [ ] Главная страница (`src/app/page.tsx`) — заполнить секции
- [ ] Страница услуг (`src/app/services/page.tsx`) — добавить контент
- [ ] Страница контактов — проверить форму
- [ ] Политика конфиденциальности — проверить актуальность текста
- [ ] Согласие на обработку данных — проверить актуальность текста

## 5. Аналитика

- [ ] Настроить Яндекс.Метрику (добавить ID в `.env.local`)
- [ ] Проверить что счётчик работает в production

## 6. Перед деплоем

- [ ] `npm run build` — убедиться что сборка проходит без ошибок
- [ ] Проверить мобильную версию
- [ ] Проверить скорость через https://pagespeed.web.dev
- [ ] Проверить sitemap: `https://your-domain.ru/sitemap.xml`
- [ ] Проверить robots: `https://your-domain.ru/robots.txt`
- [ ] Добавить сайт в Яндекс.Вебмастер и Google Search Console
