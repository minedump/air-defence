import { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

interface PageMetadataOptions {
  /** Заголовок страницы без названия компании. Итог: "Услуги | Название" */
  title: string;
  /** Описание для поисковиков и соцсетей. По умолчанию — siteConfig.meta.defaultDescription */
  description?: string;
  /** Путь к OG-изображению. По умолчанию — siteConfig.meta.ogImage */
  ogImage?: string;
  /** Запретить индексацию (для служебных страниц) */
  noIndex?: boolean;
  /** Канонический URL страницы (без домена, например '/services') */
  canonicalPath?: string;
}

export function generatePageMetadata({
  title,
  description,
  ogImage,
  noIndex = false,
  canonicalPath,
}: PageMetadataOptions): Metadata {
  const { company, meta } = siteConfig;

  const fullTitle = meta.titleTemplate.replace('%s', title);
  const desc = description ?? meta.defaultDescription;
  const image = ogImage ?? meta.ogImage;
  const canonical = canonicalPath ? `${company.domain}${canonicalPath}` : undefined;

  return {
    // absolute — иначе layout-шаблон '%s | Название' применится второй раз
    title: { absolute: fullTitle },
    description: desc,

    // Canonical URL — важно для SEO при дублирующемся контенте
    ...(canonical && { alternates: { canonical } }),

    openGraph: {
      title: fullTitle,
      description: desc,
      url: canonical,
      siteName: company.shortName,
      locale: meta.locale,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [image],
    },

    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
