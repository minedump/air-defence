'use client';

import { Button } from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center">
      <div className="container text-center">
        <div className="mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl lg:text-3xl font-bold text-primary">
            Страница не найдена
          </h2>
        </div>
        <p className="mb-16">
          К сожалению, страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Button variant="primary" size="lg" href="/">
          Вернуться на главную
        </Button>
      </div>
    </div>
  );
}
