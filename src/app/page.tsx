import { generatePageMetadata } from '@/lib/metadata';
import { ContactFormSection } from '@/components/ContactFormSection';
import {
  HeroSection,
  ObjectsSection,
  SolutionsSection,
  PrivateHomesSection,
  ProcessSection,
  ProcurementSection,
} from '@/components/sections';

export const metadata = generatePageMetadata({
  title: 'Антидроновая защита объектов — сетки и купола от БПЛА и дронов',
  description:
    'Антидроновые сетки, купола от дронов и металлокаркасы для энергетики, нефтегаза, складов, ЦОД и частных домов. Пассивная защита от БПЛА по СП 542. Проект от 7 дней.',
  canonicalPath: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ObjectsSection />
      <PrivateHomesSection />
      <SolutionsSection />
      <ProcessSection />
      <ProcurementSection />
      <ContactFormSection />
    </>
  );
}
