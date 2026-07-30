import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface PageHeroSectionProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * Упрощённый hero для внутренних страниц (не главная).
 * Меньше высоты, без CTA-кнопок.
 */
export function PageHeroSection({ badge, title, subtitle, className }: PageHeroSectionProps) {
  return (
    <section className={cn('pt-32 pb-16', className)}>
      <div className="container">
        <div className="max-w-3xl">
          {badge && (
            <Badge variant="outline" className="mb-6">
              {badge}
            </Badge>
          )}
          <h1 className="text-4xl lg:text-6xl font-bold text-primary tracking-tighter leading-none">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
