// scripts/optimize-images.mjs
// Оптимизация изображений: PNG-оригиналы переносятся в /originals/images
// (вне public — не деплоятся), в public/images остаются только WebP.
// Запуск: node scripts/optimize-images.mjs

import { readdirSync, mkdirSync, renameSync, existsSync, statSync } from 'node:fs';
import { join, basename } from 'node:path';
import sharp from 'sharp';

const ROOT = new URL('..', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1');
const PUBLIC_IMAGES = join(ROOT, 'public', 'images');
const ORIGINALS = join(ROOT, 'originals', 'images');

// Качество WebP: 75 — визуально неотличимо для фото, вес падает в ~10 раз
const QUALITY = 75;
// Максимальная ширина: карточки рендерятся до ~960px, hero до ~770px;
// 1400px оставляет запас под retina без лишнего веса
const MAX_WIDTH = 1400;

mkdirSync(ORIGINALS, { recursive: true });

const pngs = readdirSync(PUBLIC_IMAGES).filter((f) => f.endsWith('.png'));

for (const file of pngs) {
  const src = join(PUBLIC_IMAGES, file);
  const webpName = basename(file, '.png') + '.webp';
  const dest = join(PUBLIC_IMAGES, webpName);

  const before = statSync(src).size;

  await sharp(src)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(dest);

  const after = statSync(dest).size;

  // Оригинал — в originals/images (перезапись не допускаем)
  const backup = join(ORIGINALS, file);
  if (!existsSync(backup)) renameSync(src, backup);

  console.log(
    `${file}: ${(before / 1024).toFixed(0)} KB → ${webpName}: ${(after / 1024).toFixed(0)} KB (-${(100 - (after / before) * 100).toFixed(0)}%)`
  );
}

console.log('Готово. Оригиналы в /originals/images, WebP в /public/images.');
