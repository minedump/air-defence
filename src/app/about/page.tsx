import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'О нас',
  description: 'Информация о компании.',
  canonicalPath: '/about',
});

export default function AboutPage() {
  return (
    <div className="pt-16">
      <div className="container py-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-8">О нас</h1>
        {/* TODO: добавьте контент */}
      </div>
    </div>
  );
}
