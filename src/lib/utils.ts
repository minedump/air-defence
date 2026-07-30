import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { siteConfig } from '@/lib/config';

// Единый источник домена для sitemap/robots/canonical/OG —
// в проде берётся из NEXT_PUBLIC_SITE_URL (задаётся в Vercel),
// иначе используется siteConfig.company.domain как резервный.
export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL || siteConfig.company.domain;
}

// Объединение Tailwind-классов с разрешением конфликтов
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Форматирование телефона из сырого номера
// '+70001234567' → '+7 000 123-45-67'
export function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.length !== 11) return raw;
  return `+${digits[0]} ${digits.slice(1, 4)} ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
}
