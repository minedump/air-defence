import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  /** Номер заглушки — соответствует промпту в IMAGE-PROMPTS.md */
  number: string;
  /** Подпись — что должно быть на изображении */
  label: string;
  /** Tailwind-класс соотношения сторон, напр. 'aspect-[4/3]' */
  aspect?: string;
  className?: string;
}

/**
 * Графичная заглушка под изображение в blueprint-стиле.
 * Промпт для генерации каждого изображения — в IMAGE-PROMPTS.md по номеру.
 */
export function ImagePlaceholder({
  number,
  label,
  aspect = 'aspect-[4/3]',
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl card-dark grid-pattern select-none',
        aspect,
        className
      )}
    >
      {/* Угловые скобки-кронштейны */}
      <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-primary/60" />
      <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-primary/60" />
      <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-primary/60" />
      <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-primary/60" />

      {/* Диагональные линии */}
      <svg className="absolute inset-0 w-full h-full text-white/[0.06]" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.3" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.3" />
      </svg>

      {/* Призрачный номер */}
      <span
        aria-hidden
        className="absolute -bottom-4 right-2 text-[7rem] leading-none font-extrabold text-white/[0.05] tracking-tighter"
      >
        {number}
      </span>

      {/* Центральный блок */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <span className="text-primary font-extrabold text-2xl tracking-widest">
          IMG&nbsp;{number}
        </span>
        <span className="text-muted text-xs uppercase tracking-[0.2em] max-w-[85%]">
          {label}
        </span>
      </div>
    </div>
  );
}
