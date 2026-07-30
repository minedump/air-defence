import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, name, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col">
        {label && (
          <label htmlFor={name} className="block text-xs font-bold uppercase tracking-wider mb-1 text-muted">
            {label}
          </label>
        )}
        <input
          ref={ref}
          name={name}
          id={name}
          className={cn(
            'w-full text-base px-4 py-3 rounded-[.75rem] border border-line bg-white/[0.03] text-heading placeholder-muted/50',
            'focus:outline-none focus:border-primary',
            'h-[50px]',
            error && 'border-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-red-500 text-xs font-bold uppercase mt-1 tracking-wider">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
