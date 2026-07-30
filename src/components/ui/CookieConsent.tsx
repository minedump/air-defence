'use client';

import { useState, useEffect } from 'react';
import { IconCookie } from '@tabler/icons-react';
import { Button } from '@/components/ui/Button';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setIsVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 md:bottom-6 left-4 right-4 md:left-auto md:right-6 z-[60] md:max-w-md">
      <div className="card-dark backdrop-blur-md rounded-xl p-5 md:p-6 shadow-2xl shadow-black/40">
        <div className="flex items-start gap-4">
          <span className="w-10 h-10 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
            <IconCookie size={22} strokeWidth={1.5} className="text-primary" />
          </span>
          <p className="text-sm text-soft leading-relaxed">
            Мы используем cookies для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с{' '}
            <a href="/privacy" className="underline hover:no-underline text-primary">
              политикой обработки cookies
            </a>
          </p>
        </div>
        <Button variant="primary" size="sm" onClick={acceptCookies} className="w-full mt-4">
          Принять
        </Button>
      </div>
    </div>
  );
};
