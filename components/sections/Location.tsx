'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          badge="Localisation"
          title="Nous trouver"
          subtitle="Basés à Antananarivo, au cœur de l'événementiel malgache."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl mx-auto h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-gray-100"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120760.10173661332!2d47.452654064560734!3d-18.910189033325095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07deb3e7401d3%3A0xc6c4f2bb7507c913!2sAntananarivo%2C%20Madagascar!5e0!3m2!1sen!2sfr!4v1699999999999!5m2!1sen!2sfr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Eventa MG Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
