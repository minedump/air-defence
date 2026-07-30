'use client';

import Image from 'next/image';
import { IconBuildingFactory2, IconClock, IconRulerMeasure } from '@tabler/icons-react';
import { Button } from '@/components/ui/Button';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const features = [
  { icon: IconBuildingFactory2, label: 'Своё производство' },
  { icon: IconClock, label: 'Проект от 7 дней' },
  { icon: IconRulerMeasure, label: 'Расчёты по СП 542' },
];

export function HeroSection() {
  const { scrollToSection } = useSmoothScroll(64);

  return (
    <section className="relative pt-24 pb-12 md:pb-24 min-h-[100dvh] flex items-center overflow-hidden">
      {/* Декоративная сетка, растворяющаяся к низу секции */}
      <div className="absolute inset-0 grid-pattern-fade pointer-events-none" />
      {/* Акцентное свечение за контентом */}
      <div className="absolute top-1/4 -left-32 w-[40rem] h-[40rem] glow-accent pointer-events-none" />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          {/* Текстовый блок */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-heading uppercase tracking-tight leading-[1.05]">
              Антидроновая защита{' '}
              <span className="text-primary">промышленных объектов и частных домов</span>
            </h1>

            {/* Три ключевых преимущества */}
            <div className="mt-8 flex flex-wrap gap-3">
              {features.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-[1.25rem] liquid-glass border border-white/10"
                >
                  <Icon size={18} strokeWidth={1.5} className="text-primary flex-shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-soft">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-lg text-soft max-w-xl leading-relaxed">
              Проектируем и монтируем защитно-оградительные конструкции —
              сетки, купола и каркасы для пассивной защиты от БПЛА и дронов.
              Рассчитываем под фактические нагрузки по действующим нормативам:
              объект принимается с первого раза, конструкция сохраняет
              геометрию весь срок службы.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="primary" size="lg" onClick={() => scrollToSection('contacts')} type="button">
                Получить расчёт
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('solutions')} type="button">
                Смотреть решения
              </Button>
            </div>
          </div>

          {/* Визуал */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/images/hero-01.webp"
                alt="Антидроновый купол — защитная сетка от БПЛА над трансформаторной подстанцией"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            {/* Плашка-статус в стиле «островка» шапки */}
            <div className="absolute -bottom-4 left-6 liquid-glass border border-white/10 rounded-[1.25rem] px-5 py-3">
              <p className="text-heading font-extrabold text-sm uppercase tracking-widest">Под защитой</p>
              <p className="text-soft text-xs mt-0.5">Купол · Сетка · Опорный каркас</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
