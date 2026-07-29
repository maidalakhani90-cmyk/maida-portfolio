import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Coffee, Laptop, Heart, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-[#0B0B0B] via-[#101010] to-black border-t border-white/[0.08] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/[0.08]">
          
          {/* Left Column: 3D Girl Sitting with Laptop and Coffee */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-[#171717] border border-white/10 p-3 shadow-2xl overflow-hidden group hover:border-white/20 transition-all"
            >
              <img
                src="/maida_footer_character_1785156455101.jpg"
                alt="Maida Lakhani Sitting with Laptop and Coffee"
                className="w-full h-full object-cover rounded-xl filter contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Coffee Overlay Badge */}
              <div className="absolute bottom-3 right-3 bg-[#0B0B0B]/90 border border-white/10 px-2.5 py-1 rounded-lg text-[11px] font-mono text-white flex items-center gap-1.5 backdrop-blur-md">
                <Coffee className="w-3.5 h-3.5 text-amber-300" />
                Coffee & Code
              </div>
            </motion.div>
          </div>

          {/* Right Column: Farewell Message, Quote, and Navigation */}
          <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-xs text-[#A1A1AA]">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
              <span>Gratitude</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Let's Build the Future with AI!
            </h3>

            {/* Quote Block */}
            <blockquote className="bg-[#171717] border-l-2 border-[#E5E5E5] p-4 rounded-r-xl max-w-md text-xs sm:text-sm text-[#A1A1AA] italic leading-relaxed font-mono">
              "Learning every day,
Building with purpose,
Growing through projects."
            </blockquote>

            <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-4 text-xs text-[#A1A1AA]">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <span>•</span>
              <a href="#journey" className="hover:text-white transition-colors">Journey</a>
              <span>•</span>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <span>•</span>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <span>•</span>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-[#A1A1AA]">
              Built with Python, React & Motion
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#171717] hover:bg-[#202020] text-white border border-white/10 hover:border-white/20 transition-all flex items-center gap-1.5 shadow-md"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
