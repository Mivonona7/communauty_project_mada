'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Camera, GraduationCap, Music, TrendingUp, Mic, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

export default function Services() {
  const services = [
    {
      icon: <Code className="text-[--color-blue-violet]" size={28} />,
      title: "Développement & IA",
      description: "Des développeurs Fullstack, Mobile et experts en Intelligence Artificielle pour créer les solutions de demain."
    },
    {
      icon: <Camera className="text-[--color-blue-violet]" size={28} />,
      title: "Création Visuelle",
      description: "Photographes, vidéastes et designers prêts à capturer l'essence de chaque projet avec créativité."
    },
    {
      icon: <Mic className="text-[--color-blue-violet]" size={28} />,
      title: "Médias & Communication",
      description: "Des professionnels de la Radio et Télévision, experts en voix et présentation audiovisuelle."
    },
    {
      icon: <TrendingUp className="text-[--color-blue-violet]" size={28} />,
      title: "Marketing Digital & Influence",
      description: "Marketeurs, commerciaux et créateurs de contenu (TikTokers) pour maximiser la visibilité en ligne."
    },
    {
      icon: <GraduationCap className="text-[--color-blue-violet]" size={28} />,
      title: "Éducation & Formation",
      description: "Des pédagogues (professeurs de mathématiques, formateurs) qui transmettent le savoir et accompagnent."
    },
    {
      icon: <Music className="text-[--color-blue-violet]" size={28} />,
      title: "Beauté & Animation",
      description: "Des maquilleurs (Make up) et DJ pour apporter une touche artistique et dynamique aux événements."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          badge="Nos expertises"
          title="Une multitude de talents"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Card hoverable className="h-full flex flex-col group">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[--color-blue-violet] group-hover:text-white transition-colors">
                  {React.cloneElement(service.icon, { 
                    className: "transition-colors group-hover:text-white" 
                  })}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[--color-text-dark]">{service.title}</h3>
                <p className="text-[--color-text-light] flex-grow mb-6">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-[--color-blue-violet] font-semibold hover:text-[--color-yellow] transition-colors">
                    Rejoindre <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
