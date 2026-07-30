import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, name, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col">
        {label && (
          <label
            htmlFor={name}
            className="block text-xs font-bold uppercase tracking-wider mb-1 text-muted"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          name={name}
          id={name}
          rows={rows}
          className={cn(
            'w-full text-base px-4 py-3 rounded-[.75rem] border border-line bg-white/[0.03] text-heading placeholder-muted/50 resize-none',
            'focus:outline-none focus:border-primary',
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

Textarea.displayName = 'Textarea';
