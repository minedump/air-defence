import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.company.domain;
  const { header, footer, noIndex } = siteConfig.navigation;

  // Объединяем все маршруты из навигации, убираем дубли
  const allRoutes = Array.from(
    new Map([...header, ...footer].map((route) => [route.href, route])).values()
  );

  // Исключаем noIndex страницы — их не должно быть в sitemap
  const indexableRoutes = allRoutes.filter((route) => !noIndex.includes(route.href));

  const routes = ['', ...indexableRoutes.map((route) => route.href)];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
