import { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { YandexMetrika } from '@/components/analytics/YandexMetrika';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { siteConfig } from '@/lib/config';
import '../styles/globals.scss';

// Exo 2 — техно-гротеск с поддержкой кириллицы:
// скошенные формы литер дают инженерный характер uppercase-заголовкам
const exo2 = Exo_2({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.company.domain;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Антидроновая защита промышленных объектов и частных домов — сетки и купола от БПЛА',
    template: siteConfig.meta.titleTemplate,
  },
  description: siteConfig.meta.defaultDescription,
  manifest: '/manifest.webmanifest',
  openGraph: {
    siteName: siteConfig.company.shortName,
    locale: siteConfig.meta.locale,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
};

// JSON-LD: Organization schema — помогает Google понять кто такая компания
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.company.fullName,
  alternateName: siteConfig.company.shortName,
  url: siteConfig.company.domain,
  logo: `${siteConfig.company.domain}/icon-512.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contacts.phone,
    contactType: 'customer service',
    availableLanguage: 'Russian',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.company.legalAddress,
    addressCountry: 'RU',
  },
  sameAs: [
    siteConfig.contacts.telegramUrl,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={exo2.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <YandexMetrika />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
