import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  hoverable?: boolean;
}

export default function Card({ children, className = '', hoverable = false, ...props }: CardProps) {
  const baseClasses = 'bg-white rounded-xl shadow-md border border-gray-100 p-6 overflow-hidden';
  const hoverClasses = hoverable ? 'transition-shadow hover:shadow-lg hover:border-[--color-blue-violet]' : '';

  return (
    <motion.div 
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
