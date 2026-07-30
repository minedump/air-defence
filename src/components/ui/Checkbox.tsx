import React from 'react';
import { IconCheck } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: React.ReactNode;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, checked, id, ...props }, ref) => {
    return (
      <div className={cn('w-full', className)}>
        <label htmlFor={id} className="flex items-start gap-3 cursor-pointer select-none group">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            checked={checked}
            className="peer sr-only"
            {...props}
          />
          <span
            aria-hidden
            className={cn(
              'flex items-center justify-center w-5 h-5 mt-0.5 rounded-md border-2 flex-shrink-0 transition-colors',
              'peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40',
              checked ? 'bg-primary border-primary' : 'border-line bg-white/[0.03] group-hover:border-muted',
              error && !checked && 'border-red-500'
            )}
          >
            {checked && <IconCheck size={14} strokeWidth={3} className="text-ink-deep" />}
          </span>
          <span className="text-sm text-muted leading-relaxed">{label}</span>
        </label>
        {error && (
          <p className="text-red-500 text-xs font-bold uppercase mt-1.5 ml-8 tracking-wider">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
