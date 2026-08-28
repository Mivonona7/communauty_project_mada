// components/sections/Hero.tsx (version texte à gauche)
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Users } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
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
      {/* Background image avec dégradé */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(0, 0, 0, 0.5) 100%), url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Grille à deux colonnes sur md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[60vh]">
          
          {/* Colonne gauche : texte aligné à gauche */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-start-1 text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#212E53] rounded-full shadow-md">
                Communauté d'experts
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-black drop-shadow-sm">
              Unissons nos talents pour innover à <span className="text-[#212E53]">Madagascar</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-black mb-8 font-medium drop-shadow-sm">
              Développeurs, experts IA, photographes, marketeurs, artistes et plus encore. Une communauté pour partager, progresser ensemble et créer les plateformes de demain, de Madagascar à l'international.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12 justify-start flex-wrap">
              <Button size="lg" variant="outline" className="bg-white">
                En savoir plus
              </Button>
              <Button size="lg" variant="secondary">
                <Users className="mr-2 w-5 h-5" /> Rejoins-nous
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-8 justify-start items-center border-t border-gray-200/50 pt-8">
              <div className="bg-white/70 p-4 rounded-xl backdrop-blur-sm shadow-sm text-left">
                <div className="text-2xl font-bold text-black flex justify-start items-center gap-1">
                  10+ <Star className="text-yellow-500 fill-current" size={20} />
                </div>
                <div className="text-sm text-black font-semibold">Domaines d'expertise</div>
              </div>
              <div className="bg-white/70 p-4 rounded-xl backdrop-blur-sm shadow-sm text-left">
                <div className="text-2xl font-bold text-black">100%</div>
                <div className="text-sm text-black font-semibold">Collaboration & Partage</div>
              </div>
              <div className="bg-white/70 p-4 rounded-xl backdrop-blur-sm shadow-sm text-left">
                <div className="text-2xl font-bold text-black">Innovant</div>
                <div className="text-sm text-black font-semibold">Visions & Projets</div>
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