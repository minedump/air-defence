import { Badge } from '@/components/ui/Badge';

const services = [
  'Работаем по 44-ФЗ, 223-ФЗ и прямым договорам',
  'Готовим коммерческое предложение с фиксированной ценой и сроками',
  'Подаём заявку и полный пакет квалификационных документов',
  'Подтверждаем квалификацию реализованными объектами',
  'Аудит объекта и проектирование выполняем как отдельную услугу по договору',
];

export function ProcurementSection() {
  return (
    <section id="procurement" className="py-12 md:py-24 scroll-mt-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Badge variant="primary" className="mb-4">B2B · Тендеры</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading uppercase tracking-tight leading-tight">
              Участвуем в тендерах
            </h2>
            <p className="mt-6 text-soft leading-relaxed max-w-xl">
              Готовы принять участие в вашем тендере — государственном,
              корпоративном или коммерческом. Пригласите нас — подготовим
              предложение и полный комплект документов.
            </p>
          </div>

          <ol className="space-y-3">
            {services.map((service, i) => (
              <li
                key={service}
                className="flex items-center gap-5 card-dark rounded-xl px-6 py-5 hover:border-primary/30 transition-colors"
              >
                <span className="text-primary font-extrabold text-lg tracking-widest flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-soft text-sm md:text-base leading-relaxed">{service}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
