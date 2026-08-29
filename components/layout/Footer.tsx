'use client';

import React from 'react';
import { Globe, MessageCircle, Share2, Link as LinkIcon, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-bold mb-4">
              <span className="text-[--color-yellow]">Eventa</span>
              <span className="text-[--color-blue-violet]"> MG</span>
            </div>
            <p className="text-[--color-text-light] mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[--color-text-dark] hover:text-[--color-blue-violet] hover:border-[--color-blue-violet] border shadow-sm transition-colors">
                <Globe size={18} />
              </a>
              <a href="#" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[--color-text-dark] hover:text-[--color-blue-violet] hover:border-[--color-blue-violet] border shadow-sm transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" aria-label="Partager" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[--color-text-dark] hover:text-[--color-blue-violet] hover:border-[--color-blue-violet] border shadow-sm transition-colors">
                <Share2 size={18} />
              </a>
              <a href="#" aria-label="Lien" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[--color-text-dark] hover:text-[--color-blue-violet] hover:border-[--color-blue-violet] border shadow-sm transition-colors">
                <LinkIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[--color-text-dark] mb-4 text-lg">{t('footer.links_title')}</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-[--color-text-light] hover:text-[--color-blue-violet] transition-colors">{t('footer.links.about')}</a></li>
              <li><a href="#services" className="text-[--color-text-light] hover:text-[--color-blue-violet] transition-colors">{t('footer.links.services')}</a></li>
              <li><a href="#team" className="text-[--color-text-light] hover:text-[--color-blue-violet] transition-colors">{t('footer.links.team')}</a></li>
              <li><a href="#location" className="text-[--color-text-light] hover:text-[--color-blue-violet] transition-colors">{t('footer.links.location')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[--color-text-dark] mb-4 text-lg">{t('footer.legal_title')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[--color-text-light] hover:text-[--color-blue-violet] transition-colors">{t('footer.legal.mentions')}</a></li>
              <li><a href="#" className="text-[--color-text-light] hover:text-[--color-blue-violet] transition-colors">{t('footer.legal.cgu')}</a></li>
              <li><a href="#" className="text-[--color-text-light] hover:text-[--color-blue-violet] transition-colors">{t('footer.legal.privacy')}</a></li>
              <li><a href="#" className="text-[--color-text-light] hover:text-[--color-blue-violet] transition-colors">{t('footer.legal.faq')}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[--color-text-dark] mb-4 text-lg">{t('footer.contact_title')}</h3>
            <ul className="space-y-4">
              <li className="flex flex-row justify-center md:justify-start items-start gap-2 md:gap-3">
                <MapPin className="text-[--color-blue-violet] mt-1 shrink-0" size={20} />
                <span className="text-[--color-text-light]">{t('footer.location')}</span>
              </li>
              <li className="flex flex-row justify-center md:justify-start items-center gap-2 md:gap-3">
                <Phone className="text-[--color-blue-violet] shrink-0" size={20} />
                <span className="text-[--color-text-light]">+261 38 67 201 46</span>
              </li>
              <li className="flex flex-row justify-center md:justify-start items-center gap-2 md:gap-3">
                <Mail className="text-[--color-blue-violet] shrink-0" size={20} />
                <span className="text-[--color-text-light]">contact@eventa.mg</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-[--color-text-light]">
          <p>&copy; {new Date().getFullYear()} Eventa MG. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}