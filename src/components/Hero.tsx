import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText, Send, Sparkles, FolderCode, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Typing Effect Logic
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const fullText = PERSONAL_INFO.typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % PERSONAL_INFO.typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex]);

  // Periodic Blink Animation trigger for character
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 4000);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-between items-center overflow-hidden bg-[#0B0B0B]">
      {/* Background Soft Glow & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-zinc-800/20 via-zinc-700/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: 3D Vector Female Character */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Speech Bubble Above / Next to Character */}
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-4 z-20"
            >
              <div className="bg-[#171717]/95 border border-white/10 shadow-2xl rounded-2xl p-4 sm:p-5 backdrop-blur-md max-w-xs text-left text-white relative group hover:border-white/20 transition-all">
                <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-white">
                  <span className="text-lg animate-bounce inline-block">🚀</span> Welcome!

<p className="text-xs text-[#A1A1AA] leading-relaxed">
  Explore my AI, Data Science & Python projects.
</p>
                </div>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  
                </p>
                {/* Speech Bubble Pointer */}
                <div className="absolute -bottom-2 left-8 sm:left-12 w-4 h-4 bg-[#171717] border-b border-r border-white/10 rotate-45" />
              </div>
            </motion.div>

            {/* Character Image Container with Soft 3D Breathing & Waving Animation */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 group"
            >
              {/* Soft Ambient Shadow Under Character */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-6 bg-black/60 blur-xl rounded-full pointer-events-none" />

              {/* Character Base Image */}
              <div className="relative w-full h-full rounded-3xl bg-[#171717]/60 border border-white/[0.08] p-3 shadow-2xl backdrop-blur-sm overflow-hidden flex items-center justify-center group-hover:border-white/20 transition-all duration-500">
                <img
                  src="/images/maida_hero_character_1785156439564.jpg"
                  alt="Maida Lakhani 3D Vector Character"
                  className="w-full h-full object-cover rounded-2xl filter contrast-[1.03] transition-all duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Animated Waving Hand Badge Overlay */}
                <motion.div
                  animate={{
                    rotate: [0, 18, -10, 18, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: 'easeInOut',
                  }}
                  className="absolute top-6 right-6 bg-[#202020]/90 border border-white/20 px-3 py-1.5 rounded-full shadow-lg text-xs font-medium text-white flex items-center gap-1.5 backdrop-blur-md"
                >
                  <span className="text-sm">👋</span> Waving
                </motion.div>

                {/* Simulated Micro Eye-Blink Overlay effect */}
                {isBlinking && (
                  <div className="absolute inset-0 bg-transparent pointer-events-none transition-opacity duration-100 opacity-20 border-t-2 border-white/20" />
                )}

                {/* Laptop Badge */}
                <div className="absolute bottom-4 left-4 bg-[#0B0B0B]/80 border border-white/10 px-2.5 py-1 rounded-lg text-[11px] text-[#A1A1AA] flex items-center gap-1.5 backdrop-blur-sm">
                  <Terminal className="w-3 h-3 text-emerald-400" />
                  Python & ML Ready
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Title, Subtitle, Typing Effect, Description & Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171717] border border-white/10 text-xs text-[#A1A1AA]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="text-white font-medium">AI Portfolio</span>
              <span className="text-white/20">|</span>
              <span>Python • Machine Learning • AI</span>
            </motion.div>

            {/* Name Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[#E5E5E5] tracking-tight">
                {PERSONAL_INFO.role}
              </p>
            </motion.div>

            {/* Dynamic Typing Effect Container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#171717] border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-3 w-full sm:w-auto font-mono text-sm text-[#E5E5E5] shadow-inner"
            >
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <div className="flex items-center gap-1">
                <span>{displayedText}</span>
                <span className="w-2 h-4 bg-white/80 animate-pulse inline-block ml-0.5" />
              </div>
            </motion.div>

            {/* Small Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-[#A1A1AA] leading-relaxed max-w-2xl font-normal"
            >
              {PERSONAL_INFO.heroDescription}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-[#E5E5E5] hover:bg-white text-[#0B0B0B] text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-white/10 hover:-translate-y-0.5 active:translate-y-0"
              >
                <FolderCode className="w-4 h-4" />
                View Projects
              </a>

              <a
  href="/Maida-Lakhani-Resume.pdf"
  download
  className="px-6 py-3 rounded-xl bg-[#202020] hover:bg-[#282828] text-white text-sm font-medium border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 shadow-md hover:-translate-y-0.5"
>
  <FileText className="w-4 h-4 text-[#A1A1AA]" />
  Download Resume
</a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-[#171717] hover:bg-[#202020] text-[#A1A1AA] hover:text-white text-sm font-medium border border-white/10 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                Contact Me
              </a>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.8, delay: 0.8 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="mt-8 flex flex-col items-center gap-1.5 text-xs text-[#A1A1AA] hover:text-white transition-colors cursor-pointer group"
      >
        <span className="tracking-widest uppercase text-[10px] font-medium text-[#A1A1AA]/80 group-hover:text-white">
          Scroll Down
        </span>
        <div className="w-6 h-9 rounded-full border border-white/20 p-1 flex justify-center items-start">
          <div className="w-1.5 h-2.5 bg-white/70 rounded-full animate-bounce" />
        </div>
      </motion.a>
    </section>
  );
};
