// components/sections/Contact.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Camera, Share2, MessageCircle, Video } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Contact() {
  const membres = [
    {
      name: 'Ismael Jean',
      role: 'Photographe',
      email: 'ismaeljean@gmail.com',
      phone: '+261 32 56 819 06',
    },
    {
      name: 'Kalo RAVALOHARIVONY',
      role: 'Communauty manager',
      email: 'kaloravaloharivony@gmail.com',
      phone: '+261 34 88 122 84',
    },
    {
      name: 'Voahary RAMERISON',
      role: 'Modele photo',
      email: 'voharyramerison@gmail.com',
      phone: '+261 34 31 772 51',
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: <MessageCircle size={24} />, href: '#' },
    { name: 'YouTube', icon: <Video size={24} />, href: '#' },
    { name: 'Instagram', icon: <Camera size={24} />, href: '#' },
    { name: 'Site Web', icon: <Globe size={24} />, href: '#' },
    { name: 'Partager', icon: <Share2 size={24} />, href: '#' },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          badge="Contact"
          title="Notre équipe à votre écoute"
          subtitle="Contactez directement nos membres pour toute question ou projet."
        />

        <div className="max-w-5xl mx-auto mt-12">
          {/* Cartes membres */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membres.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-[#212E53]/10 flex items-center justify-center text-[#212E53] font-bold text-2xl mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{member.role}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={16} className="text-[#212E53]" />
                    <a href={`mailto:${member.email}`} className="hover:text-[#212E53]">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={16} className="text-[#212E53]" />
                    <a href={`tel:${member.phone}`} className="hover:text-[#212E53]">
                      {member.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-lg font-semibold text-gray-700 mb-6">
              Retrouvez-nous sur nos réseaux
            </h3>
            <div className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-12 h-12 rounded-full bg-[#212E53]/10 flex items-center justify-center text-[#212E53] hover:bg-[#212E53] hover:text-white transition-colors group relative"
                  title={link.name}
                >
                  {link.icon}
                  <span className="absolute -bottom-6 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}