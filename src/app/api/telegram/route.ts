// app/api/telegram/route.ts
// Обработчик формы обратной связи — отправляет сообщение в Telegram-бот
// Настройте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env.local
//
// TELEGRAM_PROXY_URL (опционально) — часть IP-адресов api.telegram.org
// недоступна напрямую из некоторых сетей/хостингов. Если задана,
// запрос к Telegram API идёт через HTTP(S)-прокси вида
// http://user:pass@host:port

import { NextRequest, NextResponse } from 'next/server';
import { ProxyAgent, fetch as undiciFetch } from 'undici';

// Требуется Node.js-рантайм — Edge не поддерживает undici/ProxyAgent
export const runtime = 'nodejs';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const PROXY_URL = process.env.TELEGRAM_PROXY_URL;

const proxyAgent = PROXY_URL ? new ProxyAgent(PROXY_URL) : undefined;

// Допустимая максимальная длина полей
const LIMITS = {
  name: 100,
  company: 100,
  phone: 20,
  email: 100,
  message: 2000,
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 11;
}

function escapeMarkdown(text: string): string {
  // Экранируем спецсимволы Markdown чтобы не сломать форматирование
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
}

export async function POST(request: NextRequest) {
  // Проверяем наличие env-переменных
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Telegram: TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы');
    return NextResponse.json(
      { success: false, error: 'Сервис временно недоступен' },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Некорректный формат запроса' },
      { status: 400 }
    );
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json(
      { success: false, error: 'Некорректный формат запроса' },
      { status: 400 }
    );
  }

  const { name, company, phone, email, message } = body as Record<string, unknown>;

  // Валидация обязательных полей
  const errors: string[] = [];

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    errors.push('Имя обязательно');
  } else if (name.length > LIMITS.name) {
    errors.push(`Имя не должно превышать ${LIMITS.name} символов`);
  }

  if (!phone || typeof phone !== 'string' || !isValidPhone(phone)) {
    errors.push('Некорректный номер телефона');
  } else if (phone.length > LIMITS.phone) {
    errors.push('Некорректный номер телефона');
  }

  if (!email || typeof email !== 'string' || !isValidEmail(email)) {
    errors.push('Некорректный email');
  } else if (email.length > LIMITS.email) {
    errors.push(`Email не должен превышать ${LIMITS.email} символов`);
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    errors.push('Сообщение обязательно');
  } else if (message.length > LIMITS.message) {
    errors.push(`Сообщение не должно превышать ${LIMITS.message} символов`);
  }

  if (typeof company === 'string' && company.length > LIMITS.company) {
    errors.push(`Название компании не должно превышать ${LIMITS.company} символов`);
  }

  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, error: errors[0] },
      { status: 422 }
    );
  }

  // Безопасное формирование текста — экранируем пользовательский ввод
  const safeName = escapeMarkdown(String(name).trim());
  const safeCompany = company ? escapeMarkdown(String(company).trim()) : 'Не указана';
  const safePhone = String(phone).replace(/\D/g, '');
  const safeEmail = escapeMarkdown(String(email).trim());
  const safeMessage = escapeMarkdown(String(message).trim());

  const text = [
    '*Новая заявка*',
    '',
    `*Имя:* ${safeName}`,
    `*Компания:* ${safeCompany}`,
    `*Телефон:* ${safePhone}`,
    `*E\\-mail:* ${safeEmail}`,
    '',
    '*Сообщение:*',
    safeMessage,
    '',
    `*Дата и время:* ${escapeMarkdown(new Date().toLocaleString('ru-RU'))}`,
  ].join('\n');

  try {
    const response = await undiciFetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: 'MarkdownV2',
      }),
      ...(proxyAgent ? { dispatcher: proxyAgent } : {}),
    });

    const data = (await response.json()) as { description?: string };

    if (!response.ok) {
      throw new Error(data.description || 'Ошибка Telegram API');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram API error:', error);
    return NextResponse.json(
      { success: false, error: 'Ошибка отправки сообщения' },
      { status: 500 }
    );
  }
}
