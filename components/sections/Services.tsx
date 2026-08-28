// components/sections/Services.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Code,
  Camera,
  GraduationCap,
  Music,
  TrendingUp,
  Mic,
} from 'lucide-react';

const services = [
  {
    icon: <Code className="text-[#212E53]" size={28} />,
    title: 'Développement & IA',
    description:
      'Des développeurs Fullstack, Mobile et experts en Intelligence Artificielle pour créer les solutions de demain.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop', // code
    color: 'bg-[#212E53]/5',
    border: 'border-[#212E53]/20',
  },
  {
    icon: <Camera className="text-[#212E53]" size={28} />,
    title: 'Création Visuelle',
    description:
      'Photographes, vidéastes et designers prêts à capturer l\'essence de chaque projet avec créativité.',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=300&fit=crop', // appareil photo
    color: 'bg-yellow-500/5',
    border: 'border-yellow-500/20',
  },
  {
    icon: <Mic className="text-[#212E53]" size={28} />,
    title: 'Médias & Communication',
    description:
      'Des professionnels de la Radio et Télévision, experts en voix et présentation audiovisuelle.',
    image:
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=300&fit=crop', // microphone
    color: 'bg-red-500/5',
    border: 'border-red-500/20',
  },
  {
    icon: <TrendingUp className="text-[#212E53]" size={28} />,
    title: 'Marketing Digital & Influence',
    description:
      'Marketeurs, commerciaux et créateurs de contenu (TikTokers) pour maximiser la visibilité en ligne.',
    image:
      'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=300&fit=crop', // marketing / business
    color: 'bg-green-500/5',
    border: 'border-green-500/20',
  },
  {
    icon: <GraduationCap className="text-[#212E53]" size={28} />,
    title: 'Éducation & Formation',
    description:
      'Des pédagogues (professeurs de mathématiques, formateurs) qui transmettent le savoir et accompagnent.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=300&fit=crop', // éducation
    color: 'bg-purple-500/5',
    border: 'border-purple-500/20',
  },
  {
    icon: <Music className="text-[#212E53]" size={28} />,
    title: 'Beauté & Animation',
    description:
      'Des maquilleurs (Make up) et DJ pour apporter une touche artistique et dynamique aux événements.',
    image:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=300&fit=crop', // DJ / musique
    color: 'bg-pink-500/5',
    border: 'border-pink-500/20',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#F8F9FA] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Titre aligné à gauche */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl mb-14"
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#212E53] rounded-full shadow-md mb-4">
            Nos expertises
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-black">
            Une multitude de <span className="text-[#212E53]">talents</span>
          </h2>
          <p className="text-lg text-gray-600">
            Chaque domaine est couvert par des passionnés prêts à collaborer et à
            faire rayonner Madagascar.
          </p>
        </motion.div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div
                className={`h-full rounded-xl border ${service.border} ${service.color} backdrop-blur-sm shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Conteneur de l'image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Contenu texte */}
                <div className="p-6">
                  <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 border border-gray-50 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Petit trait en bas (animation) */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#212E53] transition-all duration-300 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}