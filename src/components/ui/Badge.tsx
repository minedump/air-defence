import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full text-xs';

    const variantStyles = {
      primary: 'bg-primary/15 text-primary border border-primary/30',
      secondary: 'bg-white/5 text-muted border border-white/10',
      outline: 'bg-transparent text-primary border border-primary/40',
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
