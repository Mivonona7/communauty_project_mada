'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll and handle Escape key when sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.team'), href: '#team' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2" aria-label="Accueil">
              <img src="/logos.jpeg" alt="Eventa MG" className="h-10 w-auto object-contain mix-blend-multiply" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale desktop">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[--color-text-dark] hover:text-[--color-blue-violet] font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Language Switcher */}
            <div className="hidden md:flex items-center gap-4 relative">
              <div className="relative flex items-center">
                <Globe size={18} className="text-[--color-blue-violet] absolute left-3 pointer-events-none" />
                <select
                  value={locale}
                  onChange={(e) => setLocale(e.target.value as 'fr' | 'en')}
                  aria-label="Changer de langue"
                  className="appearance-none bg-white border border-gray-200 text-sm font-medium rounded-full pl-9 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-blue-violet] focus:border-transparent cursor-pointer hover:bg-gray-50 transition-colors uppercase"
                >
                  <option value="fr">FR</option>
                  <option value="en">EN</option>
                </select>
                <ChevronDown size={14} className="text-gray-500 absolute right-3 pointer-events-none" />
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-[--color-text-dark] z-50 relative"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-sidebar"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X size={28} className="text-[--color-blue-violet]" /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar & Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            
            {/* Sidebar */}
            <motion.div
              id="mobile-sidebar"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 left-0 bottom-0 z-50 w-[80%] max-w-sm bg-white shadow-2xl flex flex-col md:hidden overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navigation mobile"
            >
              <div className="flex flex-col p-6 pt-12 space-y-4 flex-grow">
                <div className="flex items-center justify-between mb-8">
                  <a href="#" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                    <img src="/logos.jpeg" alt="Eventa MG" className="h-12 w-auto object-contain mix-blend-multiply" />
                  </a>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-500 hover:text-[--color-blue-violet] transition-colors p-2 rounded-full hover:bg-gray-100"
                    aria-label="Fermer le menu"
                  >
                    <X size={24} />
                  </button>
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-700 hover:text-[--color-blue-violet] hover:bg-blue-50 font-bold text-xl py-3 px-4 rounded-xl block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="p-6 mt-auto border-t border-gray-100">
                <p className="text-xs text-center text-gray-400 font-medium mb-3 uppercase tracking-wider">Langue / Language</p>
                <div className="bg-gray-100 p-1 rounded-2xl flex items-center justify-between relative shadow-inner">
                  <div
                    className={`absolute inset-y-1 w-[calc(50%-4px)] bg-white rounded-xl shadow-sm transition-transform duration-300 ease-in-out ${
                      locale === 'en' ? 'translate-x-[calc(100%+4px)]' : 'translate-x-0'
                    }`}
                  ></div>
                  <button
                    onClick={() => {
                      setLocale('fr');
                      setMobileMenuOpen(false);
                    }}
                    className={`relative z-10 w-1/2 py-3 flex items-center justify-center gap-2 font-bold text-sm rounded-xl transition-colors ${
                      locale === 'fr' ? 'text-[--color-blue-violet]' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => {
                      setLocale('en');
                      setMobileMenuOpen(false);
                    }}
                    className={`relative z-10 w-1/2 py-3 flex items-center justify-center gap-2 font-bold text-sm rounded-xl transition-colors ${
                      locale === 'en' ? 'text-[--color-blue-violet]' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
