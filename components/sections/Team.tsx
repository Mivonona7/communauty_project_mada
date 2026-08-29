'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Mail, Phone, MessageCircle } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const teamMembers = [
  {
    name: "Ignace RAZANAJATOVO",
    role: "Responsable Commercial",
    image: "/teams/IGNACE.jpg",
    description: "Assure que chaque client et prestataire vive la meilleure expérience possible.",
    email: "tiana@eventa.mg",
    phone: "+261 34 01 654 12",
    whatsapp: "https://wa.me/261340165412",
    facebook: "https://m.me/tiana.eventa"
  },
  {
    name: "HALA Kanty",
    role: "Développeur Web & Mobile",
    image: "/teams/hala.jpg",
    description: "Développeur d'applications performantes, il transforme vos idées en solutions numériques innovantes.",
    email: "befenosteeven@gmail.com",
    phone: "+261 34 00 000 03",
    whatsapp: "https://wa.me/261340000003",
    facebook: "https://m.me/kanty.eventa"
  },
  {
    name: "Finaritra Sarobidy",
    role: "Juriste, Business Manager",
    image: "/teams/sarobidy.jpeg",
    description: "Garantit la conformité légale et pilote la stratégie d'affaires pour assurer la croissance des projets.",
    email: "santatriniainafinaritra19@gmail.com",
    phone: "+261 34 88 122 84",
    whatsapp: "https://wa.me/261340000006",
    facebook: "https://m.me/kalo.eventa"
  },
  {
    name: "Andry RAMANANTSOA",
    role: "Développeur IA - Web - Mobile & Photographe",
    image: "/teams/andry.png",
    description: "Développeur web fullstack JAVA, Next.js et React.js, également Data Analyst et Data Scientist.",
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
    email: "ismaeljean@gmail.com",
    phone: "+261 32 56 819 06",
    whatsapp: "https://wa.me/261340000002",
    facebook: "https://m.me/ismael.eventa"
  },
  
  {
    name: "ANKAFA MATOKY",
    role: "Développeur Web - Mobile - Designer",
    image: "/teams/ankafa.jpeg",
    description: "Architecte de notre plateforme et passionné par l'intelligence artificielle.",
    email: "narindratsiry18@gmail.com",
    phone: "+261 38 38 466 60",
    whatsapp: "https://wa.me/261340000004",
    facebook: "https://m.me/ankafa.eventa"
  },
  {
    name: "Kalo RAVALOHARIVONY",
    role: "Community Manager",
    image: "/teams/kalo.jpeg",
    description: "Gère l'image de marque et anime la communauté sur les réseaux sociaux avec créativité et engagement.",
    email: "kaloravaloharivony@gmail.com",
    phone: "+261 34 88 122 84",
    whatsapp: "https://wa.me/261340000006",
    facebook: "https://m.me/kalo.eventa"
  },
  
  {
    name: "Antonio Visionnaire",
    role: "Développeur Mobile - Designer",
    image: "/teams/antonio.jpeg",
    description: "Conçoit des interfaces intuitives et développe des applications mobiles fluides centrées sur l'utilisateur.",
    email: "kaloravaloharivony@gmail.com",
    phone: "+261 34 88 122 84",
    whatsapp: "https://wa.me/261340000006",
    facebook: "https://m.me/kalo.eventa"
  },
  {
    name: "Rinah RANDRIANARISON",
    role: "Formateur en Mathématiques et Physique",
    image: "/teams/rinah.jpeg",
    description: "Partage son savoir et accompagne avec pédagogie pour développer les compétences de l'équipe.",
    email: "randrianarisonrinah18@gmail.com",
    phone: "+261 34 36 094 45",
    whatsapp: "https://wa.me/261340000007",
    facebook: "https://m.me/rinah.eventa"
  },
  {
    name: "Ralf FANANTENANA",
    role: "Développeur Web - Desktop",
    image: "/teams/ralph.jpg",
    description: "Développe des solutions logicielles robustes et des applications web sur mesure pour répondre aux besoins techniques.",
    email: "fanantenanaralainohasoavina@gmail.com",
    phone: "+261 33 15 58 975",
    whatsapp: "https://wa.me/261340000009",
    facebook: "https://m.me/ralph.eventa"
  },
  {
    name: "Mendrika",
    role: "Développeur Web - Desktop",
    image: "/teams/kevin.jpg",
    description: "Spécialiste du développement logiciel, il conçoit des architectures performantes pour le web et les applications de bureau.",
    email: "mendrikaafitiavanaa@gmail.com",
    phone: "+261 34 00 000 10",
    whatsapp: "https://wa.me/261340000010",
    facebook: "https://m.me/kevin.eventa"
  },
  {
    name: "Voahary RAMERISON",
    role: "Développeuse IA - Modèle photo",
    image: "/teams/voahary.jpg",
    description: "Allie expertise en intelligence artificielle et créativité artistique en tant que modèle photo.",
    email: "voharyramerison@gmail.com",
    phone: "+261 34 31 772 51",
    whatsapp: "https://wa.me/261340000010",
    facebook: "https://m.me/kevin.eventa"
  },
  {
    name: "Fréderic ANDRIANANTENAINA",
    role: "Développeur IA - Web",
    image: "/teams/frederic.jpg",
    description: "Intègre des solutions d'intelligence artificielle avancées dans des applications web modernes.",
    email: "andrianantenainafrederic9@gmail.com",
    phone: "+261 34 88 122 84",
    whatsapp: "https://wa.me/261340000006",
    facebook: "https://m.me/kalo.eventa"
  },
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
            className="absolute top-1/2 left-0 md:-left-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[--color-blue-violet] hover:bg-[--color-blue-violet] hover:text-white transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 md:-right-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-[--color-blue-violet] hover:bg-[--color-blue-violet] hover:text-white transition-colors z-10"
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
