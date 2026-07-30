# Чеклист запуска — ДронЗащита

## 1. Конфигурация

- [x] `src/lib/config.ts` заполнен — компания, банк, навигация, домен `dronzashita.ru`
- [ ] Заполнить `.env.local` / Vercel Environment Variables:
  - [x] `NEXT_PUBLIC_SITE_URL` — задан на Vercel (обновить на `https://dronzashita.ru` после подключения домена)
  - [ ] `TELEGRAM_BOT_TOKEN` — **форма заявок не работает без него**
  - [ ] `TELEGRAM_CHAT_ID` — **форма заявок не работает без него**
  - [ ] `NEXT_PUBLIC_YANDEX_METRIKA_ID` — опционально, добавить когда будет счётчик
- [x] `titleTemplate` и `defaultDescription` обновлены под SEO-семантику
- [x] `contacts.email` — `info@dronzashita.ru`
- [x] Публичная ссылка на Telegram убрана из UI (форма заявок по-прежнему шлёт лиды в Telegram-бота через `TELEGRAM_BOT_TOKEN`/`TELEGRAM_CHAT_ID`)

## 2. Дизайн и брендинг

- [x] Шрифт — Exo 2 (кириллица)
- [x] Цвет `primary` — стальной синий `#4C8DFF`
- [x] Логотип — векторная иконка (сетчатый щит) в `Logo.tsx`
- [x] `favicon.ico`, `apple-touch-icon.png`, `icon-192/512.png`, `og-image.jpg` — сгенерированы (`scripts/generate-icons.mjs`)

## 3. SEO

- [x] `robots.ts` — disallow только `/api/`, домен читается из `getSiteUrl()`
- [x] `sitemap.ts` — только реальные маршруты, якорные ссылки и noIndex-страницы исключены
- [x] `generatePageMetadata` — canonical читает домен из окружения
- [x] privacy/agreement/requisites — `noIndex: true`
- [x] JSON-LD Organization schema в `layout.tsx`
- [ ] Купить и подключить домен `dronzashita.ru` в Vercel
- [ ] Проверить OG-теги на проде через https://opengraph.xyz
- [ ] Добавить сайт в Яндекс.Вебмастер и Google Search Console

## 4. Контент

- [x] Главная — все секции заполнены
- [x] Контакты, реквизиты, политика, согласие — готовы
- [x] Страницы-заглушки `/about`, `/services` — удалены (не использовались)

## 5. Аналитика

- [ ] Яндекс.Метрика — добавить `NEXT_PUBLIC_YANDEX_METRIKA_ID` в Vercel, когда будет счётчик

## 6. Перед деплоем

- [x] `npm run build` — проходит без ошибок
- [ ] Проверить мобильную версию на реальном устройстве
- [ ] Проверить скорость через https://pagespeed.web.dev (после подключения домена)
- [ ] Проверить `/sitemap.xml` и `/robots.txt` на проде
- [ ] Проверить отправку формы (после добавления Telegram-переменных)
