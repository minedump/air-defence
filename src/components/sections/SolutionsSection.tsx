import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';

const solutions = [
  {
    img: '02',
    image: '/images/solution-02.webp',
    imgLabel: 'Антидроновая сетка над промышленным объектом',
    title: 'Антидроновые сетки',
    description:
      'Защитные сетки от БПЛА и дронов из высокопрочных полотен под кинетический удар — соло или слоем общего контура.',
  },
  {
    img: '03',
    image: '/images/solution-03.webp',
    imgLabel: 'Металлокаркасная конструкция',
    title: 'Металлокаркасные конструкции',
    description:
      'Несущие каркасы из профильной стали. Выдерживают значительные ударные нагрузки и полностью отвечают требованиям СП 542.',
  },
  {
    img: '04',
    image: '/images/solution-04.webp',
    imgLabel: 'Конструкция на строительных лесах',
    title: 'Системы на базе лесов',
    description:
      'Решения на модульных строительных лесах: разворачиваются в короткие сроки и не требуют устройства фундамента.',
  },
  {
    img: '05',
    image: '/images/solution-05.webp',
    imgLabel: 'Купол от дронов над резервуарным парком',
    title: 'Купола и арочные системы',
    description:
      'Купола от дронов и арочные фермы перекрывают объект сверху и принимают на себя удар по вертикали.',
  },
  {
    img: '06',
    image: '/images/solution-06.webp',
    imgLabel: 'Периметральный защитный экран',
    title: 'Периметральные экраны',
    description:
      'Экраны по границе площадки, закрывающие объект от воздействий сбоку. Наиболее эффективны в связке с верхним укрытием.',
  },
  {
    img: '07',
    image: '/images/solution-07.webp',
    imgLabel: 'Комбинированная защита объекта',
    title: 'Комбинированные решения',
    description:
      'Несколько типов конструкций, объединённых в единый контур. Проект создаётся индивидуально под риски конкретной площадки.',
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="py-12 md:py-24 scroll-mt-16">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <Badge variant="primary" className="mb-4">Продукция</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading uppercase tracking-tight leading-tight">
            Типы защитных конструкций
          </h2>
          <p className="mt-6 text-soft leading-relaxed max-w-2xl">
            Пассивная антидроновая защита зданий и сооружений: сетки, купола
            и экраны работают круглосуточно и не зависят от средств РЭБ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((s) => (
            <div
              key={s.img}
              className="card-dark rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={s.image}
                  alt={s.imgLabel}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-heading font-extrabold text-xl uppercase tracking-wide mb-3">
                  {s.title}
                </h3>
                <p className="text-soft text-sm leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
