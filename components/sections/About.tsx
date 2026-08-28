'use client';

import React from 'react';
import { Users, Lightbulb, Target } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { motion } from 'framer-motion';

export default function About() {
  const features = [
    {
      icon: <Users className="text-[--color-blue-violet]" size={32} />,
      title: "Communauté Unie",
      description: "Un rassemblement de développeurs, artistes et experts pour partager et évoluer ensemble.",
      borderColor: "border-[--color-blue-violet]"
    },
    {
      icon: <Lightbulb className="text-[--color-yellow]" size={32} />,
      title: "Vision Innovante",
      description: "Créer une plateforme nouvelle et révolutionnaire pour Madagascar et le monde entier.",
      borderColor: "border-[--color-yellow]"
    },
    {
      icon: <Target className="text-gray-700" size={32} />,
      title: "Objectif Expertise",
      description: "Devenir des références mondiales en conjuguant nos talents et nos compétences variées.",
      borderColor: "border-gray-300"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[--color-light-gray]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          badge="À propos"
          title="L'Union Fait La Force"
          subtitle="Eventa MG est un ensemble d'experts (Dev, IA, Photo, Radio TV, DJ, Marketing, etc.) qui s'unissent pour s'améliorer et construire la plateforme de demain."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className={`h-full border-t-4 ${feature.borderColor} hover:-translate-y-2 transition-transform duration-300`}>
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[--color-text-dark]">{feature.title}</h3>
                <p className="text-[--color-text-light]">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
