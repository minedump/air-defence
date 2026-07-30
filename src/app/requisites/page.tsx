import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/config';

export const metadata = generatePageMetadata({
  title: 'Реквизиты',
  canonicalPath: '/requisites',
  noIndex: true,
});

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-1 sm:gap-6 py-3.5 border-b border-white/5 last:border-b-0">
      <dt className="text-muted text-xs font-bold uppercase tracking-wider sm:pt-0.5">{label}</dt>
      <dd className="text-soft text-sm leading-relaxed break-words">{children}</dd>
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="card-dark rounded-xl px-6 py-4 md:px-8 md:py-5">
      <h2 className="text-primary font-extrabold text-sm uppercase tracking-widest pt-2 pb-3 border-b border-white/10">
        {title}
      </h2>
      <dl>{children}</dl>
    </section>
  );
}

export default function RequisitesPage() {
  const { company, bank } = siteConfig;

  return (
    <div className="pt-28 pb-16">
      <div className="container pb-8 max-w-3xl">
        <h1 className="text-4xl font-bold text-heading uppercase tracking-tight mb-8">Реквизиты</h1>

        <div className="space-y-6">
          <Group title="Компания">
            <Row label="Полное наименование">{company.fullName}</Row>
            <Row label="ИНН">{company.inn}</Row>
            <Row label="КПП">{company.kpp}</Row>
            <Row label="ОГРН">{company.ogrn}</Row>
            {company.okved && <Row label="ОКВЭД">{company.okved}</Row>}
            <Row label="Генеральный директор">{company.generalDirector}</Row>
            <Row label="Юридический адрес">{company.legalAddress}</Row>
            <Row label="Почтовый адрес">{company.postalAddress}</Row>
          </Group>

          <Group title="Банковские реквизиты">
            <Row label="Банк">{bank.name}</Row>
            <Row label="БИК">{bank.bik}</Row>
            <Row label="Расчётный счёт">{bank.checkingAccount}</Row>
            <Row label="Корр. счёт">{bank.correspondentAccount}</Row>
          </Group>
        </div>
      </div>
    </div>
  );
}
