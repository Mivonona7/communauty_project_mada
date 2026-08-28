'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[--color-light-gray]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          badge="Contact"
          title="Contactez-nous"
          subtitle="Une question ? Un projet ? Écrivons ensemble."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[--color-text-dark] mb-2">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[--color-blue-violet] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[--color-text-dark] mb-2">Adresse email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[--color-blue-violet] focus:border-transparent transition-all"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[--color-text-dark] mb-2">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Sujet de votre message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[--color-blue-violet] focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[--color-text-dark] mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Comment pouvons-nous vous aider ?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[--color-blue-violet] focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>
              
              <div className="text-center md:text-right">
                <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                  Envoyer le message <Send size={18} className="ml-2" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
