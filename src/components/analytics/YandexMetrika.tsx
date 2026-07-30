import Script from 'next/script';

// Укажите ID счётчика в .env.local:
// NEXT_PUBLIC_YANDEX_METRIKA_ID=12345678
//
// Если метрика не нужна — удалите этот компонент и его импорт из layout.tsx

const counterId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

export const YandexMetrika: React.FC = () => {
  if (!counterId) return null;

  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        src="https://mc.yandex.ru/metrika/tag.js"
      />
      <Script
        id="yandex-metrika-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            ym(${counterId}, "init", {
              ssr: true,
              webvisor: true,
              clickmap: true,
              accurateTrackBounce: true,
              trackLinks: true,
            });
          `,
        }}
      />
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${counterId}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};
