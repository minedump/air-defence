import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Услуги',
  description: 'Описание услуг компании.',
  canonicalPath: '/services',
});

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <div className="container py-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-8">Услуги</h1>
        {/* TODO: добавьте контент */}
      </div>
    </div>
  );
}
