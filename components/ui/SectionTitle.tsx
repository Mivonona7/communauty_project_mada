'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ badge, title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-yellow-100 text-[--color-text-dark] rounded-full border border-[--color-yellow]"
        >
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold mb-4 text-[--color-text-dark]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-[--color-text-light] max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
