'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Mail, Phone, MessageCircle } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const teamMembers = [
  {
    name: "Ignace Raz",
    role: "Head of Customer Success",
    image: "/teams/IGNACE.jpg",
    description: "Assure que chaque client et prestataire vive la meilleure expérience possible.",
    email: "tiana@eventa.mg",
    phone: "+261 34 00 000 05",
    whatsapp: "https://wa.me/261340000005",
    facebook: "https://m.me/tiana.eventa"
  },
  {
    name: "Andry RAMANANTSOA",
    role: "Developpeur & Photographe",
    image: "/teams/andry.png",
    description: "Developpeur web fullstack JAVA / next js et React js et aussi Data analyst et science des donnees",
    email: "andry@eventa.mg",
    phone: "+261 38 67 201 46",
    whatsapp: "https://wa.me/261386720146",
    facebook: "https://m.me/andry.eventa"
  },
  {
    name: "Ismael RAMANANTSOA",
    role: "Photographe & Vidéaste",
    image: "/teams/ismael.jpeg",
    description: "Expert en photographie et vidéographie, il capture les moments les plus précieux.",
    email: "ismael@eventa.mg",
    phone: "+261 34 00 000 02",
    whatsapp: "https://wa.me/261340000002",
    facebook: "https://m.me/ismael.eventa"
  },
  {
    name: "HALA Kanty",
    role: "Advisor - Wedding Planner",
    image: "/teams/hala.jpg",
    description: "Plus de 500 mariages à son actif, elle guide notre stratégie qualité.",
    email: "kanty@eventa.mg",
    phone: "+261 34 00 000 03",
    whatsapp: "https://wa.me/261340000003",
    facebook: "https://m.me/kanty.eventa"
  },
  {
    name: "ANKAFA MATOKY",
    role: "CTO & Lead Developer",
    image: "/teams/ankafa.jpg",
    description: "Architecte de notre plateforme et passionné par l'intelligence artificielle.",
    email: "ankafa@eventa.mg",
    phone: "+261 34 00 000 04",
    whatsapp: "https://wa.me/261340000004",
    facebook: "https://m.me/ankafa.eventa"
  },
  {
    name: "KALO",
    role: "Membre de l'équipe",
    image: "/teams/kalo.jpg",
    description: "Participe activement au succès des projets.",
    email: "kalo@eventa.mg",
    phone: "+261 34 00 000 06",
    whatsapp: "https://wa.me/261340000006",
    facebook: "https://m.me/kalo.eventa"
  },
  {
    name: "RINAH",
    role: "Membre de l'équipe",
    image: "/teams/rinah.jpeg",
    description: "Participe activement au succès des projets.",
    email: "rinah@eventa.mg",
    phone: "+261 34 00 000 07",
    whatsapp: "https://wa.me/261340000007",
    facebook: "https://m.me/rinah.eventa"
  },
  {
    name: "ANTONIO",
    role: "Membre de l'équipe",
    image: "/teams/antonio.jpeg",
    description: "Participe activement au succès des projets.",
    email: "antonio@eventa.mg",
    phone: "+261 34 00 000 08",
    whatsapp: "https://wa.me/261340000008",
    facebook: "https://m.me/antonio.eventa"
  },
  {
    name: "RALPH",
    role: "Membre de l'équipe",
    image: "/teams/ralph.jpeg",
    description: "Participe activement au succès des projets.",
    email: "ralph@eventa.mg",
    phone: "+261 34 00 000 09",
    whatsapp: "https://wa.me/261340000009",
    facebook: "https://m.me/ralph.eventa"
  },
  {
    name: "KEVIN",
    role: "Membre de l'équipe",
    image: "/teams/kevin.jpg",
    description: "Participe activement au succès des projets.",
    email: "kevin@eventa.mg",
    phone: "+261 34 00 000 10",
    whatsapp: "https://wa.me/261340000010",
    facebook: "https://m.me/kevin.eventa"
  }
];

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, currentIndex, itemsToShow]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - itemsToShow : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= teamMembers.length - itemsToShow ? 0 : prev + 1));
  };

  const visibleMembers = teamMembers.slice(currentIndex, currentIndex + itemsToShow);
  // Handle wrap around if needed (not strictly necessary with the above logic, but for seamless loop)
  if (visibleMembers.length < itemsToShow) {
    visibleMembers.push(...teamMembers.slice(0, itemsToShow - visibleMembers.length));
  }

  return (
    <section id="team" className="py-20 bg-[--color-light-gray]">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          badge="Notre équipe"
          title="Qui sommes-nous ?"
        />

        <div 
          className="relative max-w-6xl mx-auto mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-6 overflow-hidden py-4 px-2">
            <AnimatePresence mode="popLayout">
              {visibleMembers.map((member, idx) => (
                <motion.div
                  key={`${member.name}-${currentIndex + idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="flex-1 min-w-[280px]"
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden text-center h-full border border-gray-100 flex flex-col">
                    <div className="p-8 pb-6 flex flex-col items-center flex-grow">
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-[--color-yellow]">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-bold text-[--color-text-dark] mb-1">{member.name}</h3>
                      <p className="text-sm text-[--color-blue-violet] font-semibold mb-4">{member.role}</p>
                      <p className="text-sm text-[--color-text-light] mb-6 flex-grow">{member.description}</p>
                      
                      <div className="w-full border-t border-gray-100 pt-4 flex flex-col gap-2 text-sm text-[--color-text-light]">
                        <div className="flex items-center justify-center gap-2">
                          <Mail size={16} className="text-[--color-blue-violet]" />
                          <a href={`mailto:${member.email}`} className="hover:text-[--color-blue-violet] transition-colors">{member.email}</a>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <Phone size={16} className="text-[--color-blue-violet]" />
                          <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="hover:text-[--color-blue-violet] transition-colors">{member.phone}</a>
                        </div>
                        
                        <div className="flex justify-center gap-3 mt-3">
                          <a 
                            href={member.whatsapp} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-[#212E53] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
                            title="WhatsApp"
                          >
                            <MessageCircle size={16} />
                          </a>
                          <a 
                            href={member.facebook} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-[#212E53] text-white px-4 py-1.5 rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors font-medium text-xs"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            Discuter
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button 
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[--color-blue-violet] hover:bg-[--color-blue-violet] hover:text-white transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[--color-blue-violet] hover:bg-[--color-blue-violet] hover:text-white transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: teamMembers.length - itemsToShow + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentIndex === idx ? 'bg-[--color-blue-violet]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
