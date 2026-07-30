// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Акцент бренда — стальной синий
        'primary': '#4C8DFF',
        'primary-light': '#7FAAFF',
        // Тёмная индустриальная палитра с холодным синим подтоном
        'ink': '#0A0F1C',        // основной фон
        'ink-deep': '#060B16',   // фон хедера / глубокие панели
        'surface': '#121A2B',    // фон карточек
        'line': '#2A3550',       // бордеры
        'heading': '#EDF2F9',    // заголовки
        'soft': '#C6D2E4',       // основной текст
        'muted': '#9DACC4',      // вторичный текст
        'accent': '#00E0FF',     // техно-циан для деталей
      },
    },
  },
  plugins: [],
}
