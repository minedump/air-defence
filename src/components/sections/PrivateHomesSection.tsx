import Image from 'next/image';
import { IconHome, IconCar, IconShieldCheck, IconTruck } from '@tabler/icons-react';
import { Badge } from '@/components/ui/Badge';

const offers = [
  {
    icon: IconHome,
    img: '08',
    image: '/images/private-08.webp',
    imgLabel: 'Защитная сетка над частным домом',
    title: 'Защита дома',
    items: [
      'Сетчатые укрытия кровли и мансардных окон',
      'Лёгкие каркасы без нагрузки на кровлю дома',
      'Защитные экраны для фасадов и остекления',
      'Решения, сохраняющие внешний вид участка',
    ],
  },
  {
    icon: IconCar,
    img: '09',
    image: '/images/private-09.webp',
    imgLabel: 'Защитный навес над парковкой',
    title: 'Парковочные места',
    items: [
      'Сетчатые навесы на 1–4 автомобиля',
      'Монтаж без капитального фундамента',
      'Совмещение с навесами и гаражами',
      'Защита от вертикального и бокового удара',
    ],
  },
  {
    icon: IconShieldCheck,
    img: '10',
    image: '/images/private-10.webp',
    imgLabel: 'Сетчатое укрытие двора и участка',
    title: 'Защита участка',
    items: [
      'Периметральные экраны по границе участка',
      'Укрытие двора, зоны отдыха и хозпостроек',
      'Единый контур: дом, парковка и двор',
      'Проект под геометрию вашего участка',
    ],
  },
  {
    icon: IconTruck,
    img: '11',
    image: '/images/private-11.webp',
    imgLabel: 'Навес над стоянкой спецтранспорта и техники',
    title: 'Спецтранспорт и техника',
    items: [
      'Стоянки автопарков и спецтранспорта',
      'Навесы для строительной и сельхозтехники',
      'Укрытия площадок хранения оборудования',
      'Пролёты под габариты крупной техники',
    ],
  },
];

export function PrivateHomesSection() {
  return (
    <section id="private" className="py-12 md:py-24 scroll-mt-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[36rem] h-[36rem] glow-accent pointer-events-none" />

      <div className="container relative">
        <div className="max-w-3xl mb-16">
          <Badge variant="primary" className="mb-4">Частным клиентам</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading uppercase tracking-tight leading-tight">
            Защита частных домов{' '}
            <span className="text-primary">и парковочных мест</span>
          </h2>
          <p className="mt-6 text-soft leading-relaxed max-w-2xl">
            Промышленный опыт — в масштабе частного дома. Проектируем и монтируем
            лёгкие конструкции для защиты коттеджей, дворов, парковок и стоянок
            техники от БПЛА и дронов — быстро, аккуратно и без капитального
            строительства.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map(({ icon: Icon, ...offer }) => (
            <div
              key={offer.img}
              className="card-dark rounded-xl overflow-hidden hover:border-primary/30 transition-colors flex flex-col"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={offer.image}
                  alt={offer.imgLabel}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <Icon size={20} strokeWidth={1.5} className="text-primary" />
                  </span>
                  <h3 className="text-heading font-extrabold text-lg uppercase tracking-wide">
                    {offer.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {offer.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-soft leading-relaxed">
                      <span className="mt-[0.55em] w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
