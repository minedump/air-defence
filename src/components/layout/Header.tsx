'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import { cn } from '@/lib/utils';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { siteConfig } from '@/lib/config';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollToSection } = useSmoothScroll(96);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleContactClick = () => {
    setIsOpen(false);
    scrollToSection('contacts');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 transition-all duration-500">
      <div className="container">
        <div
          className={cn(
            'relative transition-all duration-500 rounded-[1.25rem] border border-white/10 overflow-hidden',
            isOpen ? 'bg-ink-deep' : 'liquid-glass',
            scrolled && 'shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]',
            'py-2 px-4 md:px-6 md:py-3'
          )}
        >
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="flex items-center shrink-0 text-heading hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Logo />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {siteConfig.navigation.header.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-muted hover:text-heading transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button
                variant="primary"
                size="sm"
                onClick={handleContactClick}
                className="flex-shrink-0"
                type="button"
              >
                Получить расчёт
              </Button>
            </div>

            {/* Mobile Burger */}
            <button
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-[70] -mr-2"
              aria-label="Меню"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-heading rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-heading rounded-full"
              />
            </button>
          </div>

          {/* Mobile Dropdown Nav */}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="md:hidden flex flex-col gap-2 items-center pt-8 pb-4"
              >
                {siteConfig.navigation.header.map((item) => (
                  <Button
                    key={item.label}
                    href={item.href}
                    variant="outline"
                    size="md"
                    className="w-full max-w-[280px]"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="primary"
                  size="md"
                  type="button"
                  className="w-full max-w-[280px]"
                  onClick={handleContactClick}
                >
                  Получить расчёт
                </Button>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
