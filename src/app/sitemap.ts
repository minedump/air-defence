import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { getSiteUrl } from '@/lib/utils';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const { header, footer, noIndex } = siteConfig.navigation;

  // Объединяем все маршруты из навигации, убираем дубли
  const allRoutes = Array.from(
    new Map([...header, ...footer].map((route) => [route.href, route])).values()
  );

  // Исключаем noIndex-страницы и якорные ссылки на секции главной (/#objects и т.п.) —
  // это не отдельные страницы, sitemap должен содержать только реальные маршруты
  const indexableRoutes = allRoutes.filter(
    (route) => !noIndex.includes(route.href) && !route.href.includes('#')
  );

  const routes = ['', ...indexableRoutes.map((route) => route.href)];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
