// components/sections/About.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Users, Lightbulb, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [pathLength, setPathLength] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      id: 0,
      icon: <Users className="text-[#212E53]" size={32} />,
      title: t('about.steps.0.title'),
      description: t('about.steps.0.description'),
      step: t('about.steps.0.step'),
      bg: 'bg-[#212E53]/5',
      border: 'border-[#212E53]/20',
      color: '#212E53',
    },
    {
      id: 1,
      icon: <Lightbulb className="text-yellow-500" size={32} />,
      title: t('about.steps.1.title'),
      description: t('about.steps.1.description'),
      step: t('about.steps.1.step'),
      bg: 'bg-yellow-500/5',
      border: 'border-yellow-500/20',
      color: '#EAB308',
    },
    {
      id: 2,
      icon: <Target className="text-gray-700" size={32} />,
      title: t('about.steps.2.title'),
      description: t('about.steps.2.description'),
      step: t('about.steps.2.step'),
      bg: 'bg-gray-100',
      border: 'border-gray-300',
      color: '#6B7280',
    },
  ];

  const getCenters = () => {
    const centers = stepsRef.current.map((el) => {
      if (!el) return { x: 0, y: 0 };
      const rect = el.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return { x: 0, y: 0 };
      return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top,
      };
    });
    return centers;
  };

  const generateSnakePath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;
    const amplitude = Math.min(40, dist * 0.2); // Augmenté pour plus de vagues
    const control1x = start.x + dx * 0.3;
    const control1y = start.y + dy * 0.3 - amplitude;
    const control2x = start.x + dx * 0.7;
    const control2y = start.y + dy * 0.7 + amplitude;
    return `M ${start.x} ${start.y} C ${control1x} ${control1y}, ${control2x} ${control2y}, ${end.x} ${end.y}`;
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
    setPathLength(0);
    setShowParticles(false);

    if (index < steps.length - 1) {
      const centers = getCenters();
      if (centers[index] && centers[index + 1]) {
        setTimeout(() => setPathLength(1), 100);
        setTimeout(() => setShowParticles(true), 800);
      }
    }
  };

  useEffect(() => {
    if (activeIndex !== null) {
      // Nettoyage optionnel
    }
  }, [activeIndex]);

  const getPathPoints = () => {
    if (activeIndex === null || activeIndex >= steps.length - 1) return { start: null, end: null, path: '' };
    const centers = getCenters();
    const start = centers[activeIndex];
    const end = centers[activeIndex + 1];
    if (!start || !end) return { start: null, end: null, path: '' };
    const path = generateSnakePath(start, end);
    return { start, end, path };
  };

  const { start, end, path } = getPathPoints();

  const particleCount = 20;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100 - 20,
    y: Math.random() * 100 - 20,
    size: 2 + Math.random() * 4,
    duration: 0.8 + Math.random() * 1.2,
    delay: Math.random() * 0.5,
  }));

  return (
    <section id="about" className="py-20 bg-[#F8F9FA] overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Titre (aligné à gauche) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left max-w-3xl mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-[#212E53] rounded-full shadow-md mb-4">
            {t('about.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-black">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Conteneur des cartes centrées avec grand espacement */}
        <div className="relative" ref={containerRef}>
          {/* SVG superposé pour le serpent */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 5 }}
          >
            {path && (
              <>
                <motion.path
                  d={path}
                  stroke="#212E53"
                  strokeWidth="4"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: pathLength || 0 }}
                  transition={{ duration: 0.9, ease: 'easeInOut' }}
                  strokeLinecap="round"
                />
                {pathLength > 0 && (
                  <motion.circle
                    r="10"
                    fill="#212E53"
                    initial={{ offsetDistance: '0%' }}
                    animate={{ offsetDistance: '100%' }}
                    transition={{ duration: 1.3, ease: 'easeInOut', delay: 0.3 }}
                    style={{
                      offsetPath: `path("${path}")`,
                    }}
                  />
                )}
              </>
            )}
          </svg>

          {/* Cartes flex centrées */}
          <div className="flex flex-wrap justify-center items-start gap-16 lg:gap-24 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="cursor-pointer w-72 flex-shrink-0"
                onClick={() => handleCardClick(index)}
                ref={(el) => {
                  stepsRef.current[index] = el;
                }}
              >
                <div
                  className={`p-6 rounded-xl shadow-lg border ${step.border} ${step.bg} backdrop-blur-sm hover:shadow-xl transition-all duration-300 h-full ${
                    activeIndex === index ? 'ring-4 ring-[#212E53] ring-offset-4' : ''
                  }`}
                >
                  <div className="text-xs text-[#212E53] font-bold uppercase tracking-wider mb-2">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 border border-gray-50">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Particules */}
        <AnimatePresence>
          {showParticles && activeIndex !== null && activeIndex < steps.length - 1 && (
            <div className="absolute inset-0 pointer-events-none">
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full bg-[#212E53]/30"
                  style={{
                    width: p.size,
                    height: p.size,
                    left: `${30 + Math.random() * 40}%`,
                    top: `${30 + Math.random() * 40}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 2.5, 0],
                    x: [0, (Math.random() - 0.5) * 250],
                    y: [0, (Math.random() - 0.5) * 250],
                  }}
                  transition={{
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        
      </div>
    </section>
  );
}