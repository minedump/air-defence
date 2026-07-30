import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

const objects = [
  {
    num: '01',
    title: 'Энергетика',
    items: [
      'Подстанции и группы автотрансформаторов',
      'Открытые распределительные устройства (ОРУ)',
      'Генерирующие станции: ТЭЦ, ГРЭС, ГЭС',
      'Блочно-модульные подстанции',
      'Прочая энергетическая инфраструктура',
    ],
  },
  {
    num: '02',
    title: 'Нефтегазовый сектор',
    items: [
      'НПЗ и газоперерабатывающие заводы',
      'Нефтебазы, склады ГСМ, резервуарные парки',
      'Наливные терминалы и эстакады',
      'Компрессорные и насосные станции',
      'Объекты добычи и транспортировки нефти и газа',
    ],
  },
  {
    num: '03',
    title: 'Склады и производство',
    items: [
      'Логистические и распределительные центры',
      'Складские комплексы',
      'Производственные корпуса и цеха',
      'Заводские территории и технические здания',
    ],
  },
  {
    num: '04',
    title: 'Связь и данные',
    items: [
      'Дата-центры (ЦОД)',
      'Узлы связи и телеком-оборудование',
      'Радиорелейные и радиолокационные комплексы',
      'Вышки и базовые станции мобильной связи',
    ],
  },
  {
    num: '05',
    title: 'Жизнеобеспечение и городская среда',
    items: [
      'Котельные и тепловые пункты',
      'Станции водозабора и водоподготовки',
      'Медицинские учреждения и лаборатории',
      'Газораспределительные станции',
      'Административные и муниципальные здания',
      'Общественные и транспортные объекты',
    ],
  },
];

export function ObjectsSection() {
  return (
    <section id="objects" className="py-12 md:py-24 scroll-mt-16">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <Badge variant="primary" className="mb-4">Направления</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading uppercase tracking-tight leading-tight">
            Промышленные объекты и инфраструктура
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {objects.map((obj) => (
            <div
              key={obj.num}
              className="relative card-dark rounded-xl p-6 md:p-8 overflow-hidden hover:border-primary/30 transition-colors"
            >
              <span
                aria-hidden
                className="absolute -top-6 right-2 text-[6rem] leading-none font-extrabold text-white/[0.04] tracking-tighter"
              >
                {obj.num}
              </span>

              <p className="text-primary font-bold text-sm tracking-widest mb-3">/{obj.num}</p>
              <h3 className="text-heading font-extrabold text-xl uppercase tracking-wide mb-5">
                {obj.title}
              </h3>

              <ul className="space-y-2">
                {obj.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-soft leading-relaxed">
                    <span className="mt-[0.55em] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA-плитка вместо шестой карточки */}
          <div className="card-accent rounded-xl p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-heading font-extrabold text-xl uppercase tracking-wide mb-4">
                Не нашли свой объект?
              </h3>
              <p className="text-soft text-sm leading-relaxed">
                Работаем и с нетиповыми площадками. Опишите задачу — инженер
                оценит условия и предложит подходящую схему защиты.
              </p>
            </div>
            <Button variant="primary" size="md" href="/#contacts" className="self-start">
              Обсудить задачу
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
