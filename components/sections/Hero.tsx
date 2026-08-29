// components/sections/Hero.tsx (version texte à gauche)
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Users } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      {/* Background image avec dégradé sombre pour meilleur contraste */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Grille à deux colonnes sur md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[60vh]">
          
          {/* Colonne gauche : texte centré sur mobile, aligné à gauche sur desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-start-1 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-[#212E53] bg-white rounded-full shadow-md">
                {t('hero.badge')}
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-md">
              {t('hero.title_start')}<span className="text-blue-300">{t('hero.title_highlight')}</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-100 mb-8 font-medium drop-shadow-md max-w-2xl">
              {t('hero.description')}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start w-full">
              <a href="#team">
                <Button size="lg" variant="primary" className="bg-[#212E53] text-white hover:bg-[#1a2442] border-none">
                  {t('hero.cta')}
                </Button>
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start items-center border-t border-white/20 pt-8 w-full">
              <div className="bg-black/40 p-4 rounded-xl backdrop-blur-md shadow-lg text-center md:text-left w-full sm:w-auto border border-white/10">
                <div className="text-2xl font-bold text-white flex justify-center md:justify-start items-center gap-1">
                  10+ <Star className="text-yellow-400 fill-current" size={20} />
                </div>
                <div className="text-sm text-gray-300 font-semibold">{t('hero.stats.expertise')}</div>
              </div>
              <div className="bg-black/40 p-4 rounded-xl backdrop-blur-md shadow-lg text-center md:text-left w-full sm:w-auto border border-white/10">
                <div className="text-2xl font-bold text-white">{t('hero.stats.collaboration_value')}</div>
                <div className="text-sm text-gray-300 font-semibold">{t('hero.stats.collaboration')}</div>
              </div>
              <div className="bg-black/40 p-4 rounded-xl backdrop-blur-md shadow-lg text-center md:text-left w-full sm:w-auto border border-white/10">
                <div className="text-2xl font-bold text-white">{t('hero.stats.innovative_value')}</div>
                <div className="text-sm text-gray-300 font-semibold">{t('hero.stats.innovative')}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne droite : espace libre pour une image ou illustration */}
          <div className="hidden md:block">
            {/* Tu peux insérer ici une image, un composant décoratif, etc. */}
          </div>

        </div>
      </div>
    </section>
  );
}