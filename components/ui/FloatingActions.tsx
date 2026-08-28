'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp / Phone Button */}
      <motion.a
        href="https://wa.me/261340000000"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-[#212E53] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#1a2442] transition-colors"
        title="Nous contacter sur WhatsApp"
      >
        <Phone size={24} />
      </motion.a>

      {/* Messenger Button */}
      <motion.a
        href="https://m.me/votrepagemessenger"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-[#212E53] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#1a2442] transition-colors"
        title="Nous contacter sur Messenger"
      >
        <MessageCircle size={24} />
      </motion.a>
      
      {/* Facebook Button */}
      <motion.a
        href="https://facebook.com/votrepagemessenger"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-[#212E53] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#1a2442] transition-colors"
        title="Notre page Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </motion.a>

      {/* Scroll to top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-[#212E53] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[#1a2442] transition-colors mt-2"
            title="Retour en haut"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
