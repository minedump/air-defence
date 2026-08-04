// lib/config.ts
// Центральный конфиг сайта — замените все значения на свои

import type { SiteConfig } from '@/lib/types';

export const siteConfig: SiteConfig = {
  company: {
    domain: 'https://dronzashita.ru',
    shortName: 'ДронЗащита',
    fullName: 'ООО «Служба специальных перевозок»',
    inn: '7714756451',
    kpp: '770101001',
    ogrn: '5087746299768',
    okved: '',
    legalAddress:
      '105082, г. Москва, вн.тер.г. муниципальный округ Басманный, ул. Бакунинская, д. 69, стр. 1, помещ. 2/А',
    postalAddress:
      '105082, г. Москва, вн.тер.г. муниципальный округ Басманный, ул. Бакунинская, д. 69, стр. 1, помещ. 2/А',
    generalDirector: 'Карадон Александр Дмитриевич (действует на основании Устава)',
  },

  contacts: {
    // Только сырой номер — форматирование через formatPhone() из lib/utils.ts
    phone: '+74954454405',
    email: 'info@dronzashita.ru',
  },

  bank: {
    name: 'ПАО Сбербанк',
    bik: '044525225',
    checkingAccount: '40702810138000303715',
    correspondentAccount: '30101810400000000225',
  },

  // SEO-дефолты — используются в generatePageMetadata()
  meta: {
    titleTemplate: '%s | ДронЗащита',
    defaultDescription:
      'Антидроновая защита зданий и сооружений: защитные сетки от БПЛА и дронов, купола, металлокаркасы под ключ. Расчёты по СП 542.1325800.2024, разработка проекта от 7 дней, монтаж по всей России.',
    ogImage: '/og-image.jpg',
    locale: 'ru_RU',
  },

  // Web App Manifest — используется в app/manifest.ts
  manifest: {
    shortName: 'ДронЗащита',
    themeColor: '#0A0F1C',
    backgroundColor: '#0A0F1C',
  },

  navigation: {
    header: [
      { label: 'Пром. объекты', href: '/#objects' },
      { label: 'Частные дома', href: '/#private' },
      { label: 'Наши решения', href: '/#solutions' },
    ],
    footer: [
      { label: 'Пром. объекты', href: '/#objects' },
      { label: 'Частные дома', href: '/#private' },
      { label: 'Наши решения', href: '/#solutions' },
      { label: 'Контакты', href: '/contacts' },
      { label: 'Реквизиты', href: '/requisites' },
      { label: 'Согласие на обработку данных', href: '/agreement' },
      { label: 'Политика конфиденциальности', href: '/privacy' },
    ],
    // Маршруты с noIndex: true — исключаются из sitemap автоматически
    noIndex: ['/privacy', '/agreement', '/requisites'],
  },
};
