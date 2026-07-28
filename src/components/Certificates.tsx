import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Sparkles, X, ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';
import { Certificate } from '../types';

export const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CERTIFICATES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === CERTIFICATES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certificates" className="py-20 md:py-28 bg-[#0B0B0B] border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-xs text-[#A1A1AA]">
            <Award className="w-3.5 h-3.5 text-white" />
            <span>Verified Knowledge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-sm text-[#A1A1AA]">
            Verified learning achievements and industry-recognized credentials.
         <div className="flex items-center gap-2 mt-4">
  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
      Verified
  </span>

  <span className="text-zinc-500 text-sm">
      Credential ID Available
  </span>
</div>
          </p>
          <div className="w-12 h-1 bg-[#E5E5E5] rounded-full mt-1" />
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#171717] p-6 sm:p-10 shadow-2xl">
          
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-[#A1A1AA]">
              Certificate {currentIndex + 1} of {CERTIFICATES.length}
            </span>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-xl bg-[#202020] hover:bg-[#282828] text-white border border-white/10 transition-all hover:scale-105 active:scale-95"
                aria-label="Previous Certificate"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-xl bg-[#202020] hover:bg-[#282828] text-white border border-white/10 transition-all hover:scale-105 active:scale-95"
                aria-label="Next Certificate"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Active Card Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[220px]">
            
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                  CERTIFICATES[currentIndex].status === 'Earned'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                }`}>
                  {CERTIFICATES[currentIndex].status === 'Earned' ? '✔ Earned' : '⏳ In Progress'}
                </span>
                <span className="text-xs text-[#A1A1AA] font-mono">
                  {CERTIFICATES[currentIndex].date}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {CERTIFICATES[currentIndex].title}
              </h3>

              <div className="text-xs text-[#E5E5E5] font-medium">
                Issued by: <span className="text-white font-semibold">{CERTIFICATES[currentIndex].issuer}</span>
              </div>

              <p className="text-sm text-zinc-400 leading-7 max-w-xl">
  {CERTIFICATES[currentIndex].description}
</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {CERTIFICATES[currentIndex].skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-lg bg-[#202020] border border-white/10 text-[11px] text-white font-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Badge Graphic */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-8 rounded-3xl bg-[#151515] border border-white/10 rounded-2xl border border-white/10 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#171717] border border-white/20 flex items-center justify-center text-[#E5E5E5] shadow-inner">
                <ShieldCheck className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Verified Credential</div>
                {CERTIFICATES[currentIndex].credentialId && (
                  <div className="text-[10px] font-mono text-[#A1A1AA] mt-0.5">
                    ID: {CERTIFICATES[currentIndex].credentialId}
                  </div>
                )}
              </div>
              <button
                onClick={() => setActiveCert(CERTIFICATES[currentIndex])}
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-all hover:bg-white text-[#0B0B0B] text-xs font-semibold transition-all shadow-sm"
              >
                View Certificate
              </button>
            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {CERTIFICATES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? 'w-8 bg-[#E5E5E5]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#171717] border border-white/20 rounded-2xl p-6 max-w-lg w-full text-white relative shadow-2xl"
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#202020] text-[#A1A1AA] hover:text-white border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center space-y-4 pt-2">
                <div className="w-16 h-16 rounded-2xl bg-[#202020] border border-white/20 flex items-center justify-center mx-auto text-emerald-400">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">{activeCert.title}</h3>
                <p className="text-xs text-[#A1A1AA]">{activeCert.description}</p>
                <div className="p-3 bg-[#0B0B0B] rounded-xl border border-white/10 text-xs font-mono text-[#E5E5E5]">
                  Issuer: {activeCert.issuer} | Date: {activeCert.date}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
