import { Badge } from '@/components/ui/Badge';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';

const stats = [
  { value: '200+', label: 'Завершённых проектов' },
  { value: '18', label: 'Лет в строительстве' },
  { value: '30+', label: 'Регионов присутствия' },
];

export function CasesSection() {
  return (
    <section id="cases" className="py-12 md:py-24 scroll-mt-16">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <Badge variant="primary" className="mb-4">Опыт</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading uppercase tracking-tight leading-tight">
            Выполненные проекты
          </h2>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="card-dark rounded-xl p-6 md:p-8 text-center">
              <p className="text-primary font-extrabold text-4xl md:text-5xl tracking-tight">{s.value}</p>
              <p className="text-muted text-xs uppercase tracking-[0.2em] mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-dark rounded-xl overflow-hidden">
            <ImagePlaceholder
              number="11"
              label="Реализованный объект — защита подстанции"
              aspect="aspect-[16/9]"
              className="rounded-none border-0"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-heading font-extrabold text-xl uppercase tracking-wide mb-3">
                Портфолио проектов
              </h3>
              <p className="text-soft text-sm leading-relaxed">
                Примеры площадок, где наши конструкции закрывают критическую
                инфраструктуру от внешних угроз.
              </p>
            </div>
          </div>

          <div className="card-dark rounded-xl overflow-hidden">
            <ImagePlaceholder
              number="12"
              label="Обзор защитных решений крупным планом"
              aspect="aspect-[16/9]"
              className="rounded-none border-0"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-heading font-extrabold text-xl uppercase tracking-wide mb-3">
                Каталог конструкций
              </h3>
              <p className="text-soft text-sm leading-relaxed">
                Разбор каждого продукта: как он устроен, какие нагрузки
                выдерживает и где уже установлен.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
