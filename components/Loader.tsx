// components/Loader.tsx
'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* Logo Eventa MG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-20 w-40">
            <Image src="/logos.jpeg" alt="Eventa MG Logo" fill className="object-contain" />
          </div>
        </motion.div>
        
        {/* Spinner Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <Loader2 className="h-10 w-10 text-[#212E53]" />
        </motion.div>
      </div>
    </div>
  );
}