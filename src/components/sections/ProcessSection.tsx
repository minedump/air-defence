import { Badge } from '@/components/ui/Badge';

const steps = [
  {
    num: '01',
    title: 'Аудит объекта',
    description: 'Инженер приезжает на объект, фиксирует условия, ограничения и требования к будущей конструкции.',
  },
  {
    num: '02',
    title: 'Проектирование',
    description: 'Готовим проект с расчётом нагрузок по СП 542 и согласовываем его с заказчиком. Разработка — от 7 рабочих дней.',
  },
  {
    num: '03',
    title: 'Поставка материалов',
    description: 'Доставляем на объект все конструктивные элементы согласно проекту и согласованному графику.',
  },
  {
    num: '04',
    title: 'Монтаж',
    description: 'Собираем защитный контур на объекте из готовых конструктивных элементов в согласованный по договору срок.',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-12 md:py-24 scroll-mt-16">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <Badge variant="primary" className="mb-4">Схема сотрудничества</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading uppercase tracking-tight leading-tight">
            Четыре шага до защищённого объекта
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative card-dark rounded-xl p-6 md:p-8 overflow-hidden hover:border-primary/30 transition-colors"
            >
              <span
                aria-hidden
                className="absolute -bottom-8 right-0 text-[8rem] leading-none font-extrabold text-white/[0.04] tracking-tighter"
              >
                {step.num}
              </span>

              <p className="text-primary font-bold text-[11px] uppercase tracking-[0.3em] mb-4">
                Шаг {step.num}
              </p>
              <h3 className="text-heading font-extrabold text-lg uppercase tracking-wide mb-3">
                {step.title}
              </h3>
              <p className="text-soft text-sm leading-relaxed relative">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
