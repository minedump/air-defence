import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  const { company, manifest, meta } = siteConfig;

  return {
    name: company.fullName,
    short_name: manifest.shortName,
    description: meta.defaultDescription,
    start_url: '/',
    display: 'standalone',
    background_color: manifest.backgroundColor,
    theme_color: manifest.themeColor,
    lang: 'ru',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
