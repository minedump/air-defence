import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface Feature {
  title: string;
  description: string;
  /** Иконка — React-компонент из @tabler/icons-react */
  icon?: React.ReactNode;
}

interface FeaturesSectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  features: Feature[];
  /** Количество колонок на десктопе. По умолчанию 2 (design-taste: нет 3-колоночных сеток) */
  columns?: 2 | 4;
  className?: string;
}

export function FeaturesSection({
  badge,
  title,
  subtitle,
  features,
  columns = 2,
  className,
}: FeaturesSectionProps) {
  return (
    <section className={cn('py-24', className)}>
      <div className="container">
        {/* Заголовок секции */}
        <div className="max-w-2xl mb-16">
          {badge && (
            <Badge variant="outline" className="mb-4">
              {badge}
            </Badge>
          )}
          <h2 className="text-4xl lg:text-5xl font-bold text-primary tracking-tighter leading-none">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Сетка фич — 2 или 4 колонки */}
        <div
          className={cn(
            'grid grid-cols-1 gap-8',
            columns === 2 && 'md:grid-cols-2',
            columns === 4 && 'md:grid-cols-2 lg:grid-cols-4'
          )}
        >
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-3">
              {feature.icon && (
                <div className="text-primary w-8 h-8">
                  {feature.icon}
                </div>
              )}
              <h3 className="font-bold text-primary text-lg">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
