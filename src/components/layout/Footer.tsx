import React from 'react';
import { IconPhone, IconMail, IconBrandTelegram } from '@tabler/icons-react';
import Logo from '@/components/ui/Logo';
import { siteConfig } from '@/lib/config';
import { formatPhone } from '@/lib/utils';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-4">
      <div className="container">
        <div className="card-dark text-heading md:p-8 p-4 rounded-[.75rem] md:rounded-[1.5rem]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-4 md:pb-10 pb-8">

            {/* Company Info */}
            <div>
              <a href="/" className="inline-block text-heading mb-6">
                <Logo />
              </a>
              <p className="text-muted text-xs leading-relaxed">
                Проектируем и монтируем антидроновые защитные конструкции —
                сетки, купола и экраны — для промышленных площадок
                и частных домов по всей России.
              </p>
            </div>

            {/* Legal Info */}
            <div>
              <h4 className="font-bold uppercase text-xs tracking-wider mb-4 text-primary">Реквизиты</h4>
              <p className="text-muted text-xs leading-relaxed">
                {siteConfig.company.fullName}<br />
                ИНН {siteConfig.company.inn}<br />
                КПП {siteConfig.company.kpp}<br />
                ОГРН {siteConfig.company.ogrn}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold uppercase text-xs tracking-wider mb-4 text-primary">Разделы</h4>
              <ul className="space-y-2 text-muted text-xs">
                {siteConfig.navigation.footer.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-heading transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="font-bold uppercase text-xs tracking-wider mb-4 text-primary">Контакты</h4>
              <ul className="space-y-3 text-muted text-xs">
                <li className="flex items-center gap-2">
                  <IconPhone size={18} strokeWidth={1.5} className="flex-shrink-0 text-primary" />
                  <a href={`tel:${siteConfig.contacts.phone}`} className="hover:text-heading transition-colors">
                    {formatPhone(siteConfig.contacts.phone)}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IconMail size={18} strokeWidth={1.5} className="flex-shrink-0 text-primary" />
                  <a href={`mailto:${siteConfig.contacts.email}`} className="hover:text-heading transition-colors">
                    {siteConfig.contacts.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IconBrandTelegram size={18} strokeWidth={1.5} className="flex-shrink-0 text-primary" />
                  <a
                    href={siteConfig.contacts.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-heading transition-colors"
                  >
                    {siteConfig.contacts.telegramHandle}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 md:pt-8 pt-4">
            <p className="text-muted/60 text-xs text-center uppercase tracking-wider">
              {currentYear} © ДронЗащита | Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
