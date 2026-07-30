# Design Taste Skill

Этот проект использует **design-taste-frontend** skill из репозитория [taste-skill by Leonxlnx](https://github.com/Leonxlnx/taste-skill).

## Что это?

Skill — это набор правил и инструкций для AI, которые помогают создавать премиальные интерфейсы вместо generic "AI slop" дизайна.

## Как использовать

Skill автоматически активируется через Kiro steering system. Все правила из `design-taste.md` применяются при создании новых компонентов и страниц.

### Основные принципы:

1. **Типографика**: Используйте Geist, Outfit, Cabinet Grotesk или Satoshi (не Inter)
2. **Layouts**: CSS Grid вместо сложной flexbox математики
3. **Viewport**: `min-h-[100dvh]` вместо `h-screen`
4. **Анимации**: Framer Motion с spring physics, только `transform` и `opacity`
5. **Состояния**: Всегда реализуйте loading, empty и error states

### Anti-Slop правила:

- ❌ Центрированные hero-секции (при DESIGN_VARIANCE > 4)
- ❌ 3-колоночные карточные сетки
- ❌ Generic имена ("John Doe", "Acme Corp")
- ❌ Эмодзи в коде или контенте
- ❌ Broken Unsplash links
- ✅ Асимметричные layouts
- ✅ Split-screen дизайны
- ✅ Тактильная обратная связь (`:active` states)
- ✅ Skeletal loaders (не generic spinners)

### Настройки (dial values):

Можно менять в промптах к AI:

- **DESIGN_VARIANCE**: 8 (1=Симметрия, 10=Асимметрия)
- **MOTION_INTENSITY**: 6 (1=Статика, 10=Кинематографичность)
- **VISUAL_DENSITY**: 4 (1=Воздушно, 10=Плотно)

### Примеры промптов:

```
"Создай hero-секцию с DESIGN_VARIANCE=9 и MOTION_INTENSITY=7"
"Добавь Bento Grid с perpetual micro-interactions"
"Реализуй форму с полными interaction states (loading/empty/error)"
```

## Структура skill файла

- **Section 1-2**: Baseline конфигурация и архитектурные конвенции
- **Section 3**: Design engineering directives (bias correction)
- **Section 4**: Creative proactivity (anti-slop implementation)
- **Section 5**: Performance guardrails
- **Section 6**: Technical reference (dial definitions)
- **Section 7**: AI tells (forbidden patterns)
- **Section 8**: Creative arsenal (high-end inspiration)
- **Section 9**: Motion-engine Bento paradigm
- **Section 10**: Final pre-flight check

## Лицензия

MIT License · Copyright (c) 2026 Leonxlnx

Оригинальный репозиторий: https://github.com/Leonxlnx/taste-skill
