# Conventions

Конкретные правила для работы с этим проектом. Следуй им при любых изменениях.

## Обязательные правила

### Метаданные страниц
- **ВСЕГДА** используй `generatePageMetadata()` из `lib/metadata.ts` — никогда не пиши `Metadata` объект вручную на странице
- Служебные страницы (privacy, agreement, requisites) должны иметь `noIndex: true`
- Всегда передавай `canonicalPath` — это важно для SEO

```ts
// ✅ Правильно
export const metadata = generatePageMetadata({
  title: 'Услуги',
  description: 'Описание.',
  canonicalPath: '/services',
});

// ❌ Неправильно
export const metadata: Metadata = {
  title: 'Услуги | Название',
  ...
};
```

### Конфиг как единственный источник правды
- Все данные компании, контакты, навигация — только из `siteConfig` (`lib/config.ts`)
- Никогда не хардкодить название компании, телефон, email, URL в компонентах
- Телефон хранится только в `contacts.phone` (сырой формат). Для отображения — `formatPhone(siteConfig.contacts.phone)`

### Новые страницы
- Создавать в `app/[route]/page.tsx`
- Сразу добавлять в `siteConfig.navigation` (header и/или footer) в `lib/config.ts`
- Использовать `generatePageMetadata()` с `canonicalPath`
- Страницы с контентом для пользователей → в header + footer
- Юридические/служебные страницы → только в footer, с `noIndex: true`

### Компоненты
- Server Component по умолчанию — `'use client'` только при использовании хуков, событий или browser API
- Именованные экспорты везде, кроме `Logo` (default export)
- UI-примитивы (`Input`, `Textarea`, `Button`, `Badge`) — через `React.forwardRef` с `displayName`
- Никогда не писать инлайн `<textarea>` или `<input>` — использовать `Input` и `Textarea` из `components/ui/`

### Стили
- Tailwind-классы для всего layout и spacing
- `cn()` из `lib/utils.ts` для условных классов
- Никогда не использовать `h-screen` — только `min-h-[100dvh]`
- Никогда не использовать сложную flexbox математику (`w-[calc(33%-1rem)]`) — только CSS Grid

## Структура импортов (порядок)

```ts
// 1. Next.js
import { Metadata } from 'next';
import Link from 'next/link';

// 2. React
import React, { useState } from 'react';

// 3. Внешние библиотеки
import { IconPhone } from '@tabler/icons-react';

// 4. Внутренние — компоненты
import { Button } from '@/components/ui/Button';

// 5. Внутренние — lib
import { siteConfig } from '@/lib/config';
import { generatePageMetadata } from '@/lib/metadata';
import { cn, formatPhone } from '@/lib/utils';
```

## Именование файлов

| Что | Формат | Пример |
|-----|--------|--------|
| Компоненты | PascalCase | `HeroSection.tsx` |
| Хуки | camelCase с `use` | `useSmoothScroll.ts` |
| Утилиты/lib | camelCase | `metadata.ts` |
| Страницы | всегда `page.tsx` | `app/services/page.tsx` |
| Стили | `_camelCase.scss` для партиалов | `_variables.scss` |

## Что запрещено

- ❌ `Inter` как шрифт — использовать Geist, Outfit, Cabinet Grotesk, Satoshi
- ❌ `h-screen` — только `min-h-[100dvh]`
- ❌ Эмодзи в коде, разметке или контенте
- ❌ 3-колоночные карточные сетки — использовать 2-колоночный zig-zag или асимметричный grid
- ❌ Хардкод данных компании вне `lib/config.ts`
- ❌ Инлайн `<textarea>` или `<input>` — только UI-компоненты
- ❌ Ручные `Metadata` объекты на страницах — только `generatePageMetadata()`
- ❌ Относительные пути в импортах (`../../`) — только `@/`
- ❌ `animate` на `top`, `left`, `width`, `height` — только `transform` и `opacity`
