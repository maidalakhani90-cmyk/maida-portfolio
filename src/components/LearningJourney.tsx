import React from 'react';
import { motion } from 'motion/react';
import { Code, BarChart3, FolderGit2, Brain, Sparkles, Workflow, Target, CheckCircle, Clock } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return Code;
      case 'BarChart3': return BarChart3;
      case 'FolderGit2': return FolderGit2;
      case 'Brain': return Brain;
      case 'Sparkles': return Sparkles;
      case 'Workflow': return Workflow;
      case 'Target': return Target;
      default: return Code;
    }
  };

  return (
    <section id="journey" className="py-20 md:py-28 bg-[#0B0B0B] border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-xs text-[#A1A1AA]">
            <Clock className="w-3.5 h-3.5 text-white" />
            <span>Growth & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Journey
          </h2>
          <p className="text-sm text-[#A1A1AA]">
            My continuous journey of learning, building real-world projects, and growing as an AI & Data Science Developer.
          </p>
          <div className="w-12 h-1 bg-[#E5E5E5] rounded-full mx-auto" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-0">
          
          {/* Central Vertical Connector Line */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-white/20 via-white/10 to-white/5 -translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12">
            {JOURNEY_MILESTONES.map((item, index) => {
              const Icon = getIcon(item.icon);
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isEven ? 'sm:text-right' : 'sm:text-left'} pl-10 sm:pl-0`}>
                    <div className="bg-[#171717] border border-white/[0.08] hover:border-white/20 rounded-2xl p-5 sm:p-6 transition-all hover:-translate-y-1 group relative shadow-xl">
                      
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold mb-2 ${
                        item.status === 'completed'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : item.status === 'in-progress'
                          ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                          : 'bg-white/10 text-white border border-white/20'
                      }`}>
                        {item.status === 'completed' && <CheckCircle className="w-3 h-3" />}
                        {item.year}
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-[#E5E5E5] transition-colors mb-1.5 flex items-center gap-2 justify-start sm:justify-inherit">
                        {item.title}
                      </h3>

                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Circle */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#202020] border-2 border-white/20 flex items-center justify-center text-white z-10 shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Connector Arrow Down indicator */}
                  {index < JOURNEY_MILESTONES.length - 1 && (
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-12 bottom-0 flex items-center justify-center pointer-events-none opacity-30">
                      <span className="text-xs text-white">↓</span>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
