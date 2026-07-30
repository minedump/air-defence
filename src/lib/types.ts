// lib/types.ts
// Общие TypeScript типы проекта

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  company: {
    domain: string;
    shortName: string;
    fullName: string;
    inn: string;
    kpp: string;
    ogrn: string;
    okved: string;
    legalAddress: string;
    postalAddress: string;
    generalDirector: string;
  };
  contacts: {
    /** Сырой номер телефона: '+70001234567'. Форматировать через formatPhone() */
    phone: string;
    email: string;
    telegramUrl: string;
    telegramHandle: string;
  };
  bank: {
    name: string;
    bik: string;
    checkingAccount: string;
    correspondentAccount: string;
  };
  meta: {
    /** Шаблон заголовка, например '%s | Компания' */
    titleTemplate: string;
    defaultDescription: string;
    /** Путь к OG-изображению в /public, например '/og-image.jpg' */
    ogImage: string;
    /** Локаль для OpenGraph, например 'ru_RU' */
    locale: string;
  };
  manifest: {
    /** Короткое название для иконки на рабочем столе (до 12 символов) */
    shortName: string;
    /** Основной цвет темы (theme-color, адресная строка браузера) */
    themeColor: string;
    /** Цвет фона splash-экрана */
    backgroundColor: string;
  };
  navigation: {
    header: NavItem[];
    footer: NavItem[];
    /** Маршруты с noIndex — исключаются из sitemap. Должны совпадать со страницами где noIndex: true */
    noIndex: string[];
  };
}
