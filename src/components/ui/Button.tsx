import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'red';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  href?: string;
  isAnchor?: boolean;
  disabled?: boolean;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    className,
    children,
    href,
    isAnchor = false,
    target,
    rel,
    type = 'button',
    disabled,
    onClick,
    ...props
  }, ref) => {
    const baseStyles = 'font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 inline-flex items-center justify-center gap-2';

    const variantStyles = {
      // Акцентная — сплошная заливка; на hover цвет насыщеннее и темнее
      primary: 'bg-primary text-ink-deep hover:saturate-150 hover:brightness-90',
      // Стеклянная в стиле «островка» шапки
      secondary: 'liquid-glass text-heading border border-white/10 hover:border-primary hover:text-primary',
      // Контурная — тоже стеклянная
      outline: 'liquid-glass text-heading border border-white/10 hover:border-primary hover:text-primary',
      red: 'bg-red-500 text-white hover:!bg-red-400 hover:text-white',
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-xs h-[30px] rounded-md',
      md: 'px-6 py-3 text-sm h-[40px] rounded-lg',
      lg: 'px-8 py-4 text-base h-[50px] rounded-[.75rem]',
    };

    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    const handleClick = (e: React.MouseEvent) => {
      if (isAnchor && href) e.preventDefault();
      onClick?.(e as any);
    };

    // Не передаём обработчик, если он не нужен — иначе серверные компоненты
    // не смогут сериализовать проп onClick для Link/anchor
    const clickHandler = onClick || (isAnchor && href) ? handleClick : undefined;

    if (href && isAnchor) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          onClick={clickHandler as React.MouseEventHandler<HTMLAnchorElement>}
          target={target}
          rel={rel}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    if (href && !isAnchor) {
      return (
        <Link
          href={href}
          className={classes}
          onClick={clickHandler as React.MouseEventHandler<HTMLAnchorElement>}
          target={target}
          rel={rel}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={classes}
        onClick={clickHandler as React.MouseEventHandler<HTMLButtonElement>}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
