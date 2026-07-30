import { generatePageMetadata } from '@/lib/metadata';
import { ContactFormSection } from '@/components/ContactFormSection';

export const metadata = generatePageMetadata({
  title: 'Контакты',
  description: 'Свяжитесь с нами.',
  canonicalPath: '/contacts',
});

export default function ContactsPage() {
  return <ContactFormSection topPaddingClassName="pt-28" />;
}
