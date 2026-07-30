'use client';

import React, { useState } from 'react';
import { IconPhone, IconMail, IconMapPin, IconChevronDown } from '@tabler/icons-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { siteConfig } from '@/lib/config';
import { cn, formatPhone } from '@/lib/utils';

interface ContactFormSectionProps {
  /**
   * Верхний отступ секции. По умолчанию — ритм между секциями на главной
   * (pt-12/md:pt-24). На отдельной странице /contacts передаём pt-28 —
   * такой же отступ, как на страницах реквизитов/политики/согласия.
   */
  topPaddingClassName?: string;
}

const objectTypes = [
  'Энергетика',
  'Нефтегазовые комплексы',
  'Склады и производство',
  'Объекты связи и данных',
  'Инфраструктура жизнеобеспечения',
  'Гражданская инфраструктура',
  'Частный дом / парковка',
];

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  topPaddingClassName = 'pt-12 md:pt-24',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    objectType: '',
    message: '',
  });

  const [consent, setConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const applyPhoneMask = (value: string): string => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length === 0) return '';
    let result = '+7';
    if (digits.length > 1) result += ' ' + digits.slice(1, 4);
    if (digits.length >= 4) result += ' ' + digits.slice(4, 7);
    if (digits.length >= 7) result += '-' + digits.slice(7, 9);
    if (digits.length >= 9) result += '-' + digits.slice(9, 11);
    return result.trim();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, phone: applyPhoneMask(e.target.value) }));
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsent(e.target.checked);
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace(/\D/g, '');

    if (!formData.name || !cleanPhone || !formData.email || !formData.message) {
      setError('Пожалуйста, заполните все обязательные поля');
      return;
    }
    if (cleanPhone.length !== 11) {
      setError('Введите корректный номер телефона (10 цифр после +7)');
      return;
    }
    if (!consent) {
      setError('Подтвердите согласие на обработку персональных данных');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    // Тип объекта добавляем в текст сообщения — API-роут принимает message как есть
    const messageWithType = formData.objectType
      ? `Тип объекта: ${formData.objectType}\n\n${formData.message}`
      : formData.message;

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: cleanPhone,
          message: messageWithType,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', company: '', phone: '', email: '', objectType: '', message: '' });
        setConsent(false);
        setTimeout(() => setSuccess(''), 5000);
      } else {
        throw new Error(result.error || 'Ошибка отправки');
      }
    } catch {
      setError(`Ошибка отправки. Попробуйте позже или напишите на ${siteConfig.contacts.email}.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacts" className={cn(topPaddingClassName, 'pb-16 scroll-mt-16')}>
      <div className="container">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-heading uppercase tracking-tight leading-tight">
            Контакты
          </h2>
        </div>

        <div className="card-dark grid grid-cols-1 lg:grid-cols-2 gap-16 md:p-8 p-4 rounded-[.75rem] md:rounded-[1.5rem]">

          {/* Left side */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <p className="text-muted">Отвечаем в течение рабочего часа.</p>
            </div>

            {/* Контактные данные */}
            <ul className="space-y-4 text-sm text-soft">
              <li className="flex items-center gap-3">
                <IconPhone size={20} strokeWidth={1.5} className="text-primary flex-shrink-0" />
                <a href={`tel:${siteConfig.contacts.phone}`} className="hover:text-heading transition-colors">
                  {formatPhone(siteConfig.contacts.phone)}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMail size={20} strokeWidth={1.5} className="text-primary flex-shrink-0" />
                <a href={`mailto:${siteConfig.contacts.email}`} className="hover:text-heading transition-colors">
                  {siteConfig.contacts.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <IconMapPin size={20} strokeWidth={1.5} className="text-primary flex-shrink-0" />
                <span>{siteConfig.company.legalAddress}</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Контактное лицо*" name="name" autoComplete="name" placeholder="Ваше имя" value={formData.name} onChange={handleChange} required disabled={isLoading} />
              <Input label="Компания" name="company" autoComplete="organization" placeholder="Название компании" value={formData.company} onChange={handleChange} disabled={isLoading} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Телефон*" name="phone" autoComplete="off" type="tel" placeholder="+7 000 000-00-00" value={formData.phone} onChange={handlePhoneChange} required disabled={isLoading} />
              <Input label="Почта*" name="email" autoComplete="email" type="email" placeholder="your@email.ru" value={formData.email} onChange={handleChange} required disabled={isLoading} />
            </div>

            <div className="w-full flex flex-col">
              <label htmlFor="objectType" className="block text-xs font-bold uppercase tracking-wider mb-1 text-muted">
                Тип объекта
              </label>
              <div className="relative">
                <select
                  id="objectType"
                  name="objectType"
                  value={formData.objectType}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full text-base pl-4 pr-10 py-3 rounded-[.75rem] border border-line bg-white/[0.03] text-heading focus:outline-none focus:border-primary h-[50px] appearance-none [&>option]:bg-ink"
                >
                  <option value="">Не выбрано</option>
                  {objectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <IconChevronDown
                  size={18}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
                />
              </div>
            </div>

            <Textarea
              label="Комментарий*"
              name="message"
              placeholder="Опишите объект и задачу..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              disabled={isLoading}
            />

            <Checkbox
              id="consent"
              name="consent"
              checked={consent}
              onChange={handleConsentChange}
              disabled={isLoading}
              required
              label={
                <>
                  Я согласен с{' '}
                  <a href="/privacy" className="underline decoration-white/30 hover:text-heading hover:decoration-heading transition-colors">
                    политикой конфиденциальности
                  </a>{' '}
                  и даю{' '}
                  <a href="/agreement" className="underline decoration-white/30 hover:text-heading hover:decoration-heading transition-colors">
                    согласие на обработку персональных данных
                  </a>
                </>
              }
            />

            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm text-center">{error}</p>
              </div>
            )}
            {success && (
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm text-center">{success}</p>
              </div>
            )}

            <Button variant="primary" size="lg" type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Отправка...' : 'Отправить заявку'}
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
};
