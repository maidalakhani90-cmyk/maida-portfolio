import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, Database, Binary, PieChart, LineChart, Table2, 
  Cpu, Activity, Workflow, GitBranch, Github, Sparkle, 
  Layers, X, Check, ArrowUpRight
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const categories = ['All', 'Core Language', 'Data & Analytics', 'AI & Machine Learning', 'Tools & Automation'];

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Database': return Database;
      case 'Binary': return Binary;
      case 'PieChart': return PieChart;
      case 'LineChart': return LineChart;
      case 'Table2': return Table2;
      case 'Cpu': return Cpu;
      case 'Activity': return Activity;
      case 'Workflow': return Workflow;
      case 'GitBranch': return GitBranch;
      case 'Github': return Github;
      case 'Sparkle': return Sparkle;
      default: return Code2;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0B0B0B] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-xs text-[#A1A1AA]">
            <Layers className="w-3.5 h-3.5 text-white" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-sm text-[#A1A1AA]">
            Technologies, programming languages, frameworks, and tools I use to build AI and Data Science solutions.
          </p>
          <div className="w-12 h-1 bg-[#E5E5E5] rounded-full mt-1" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/[0.08] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#E5E5E5] text-[#0B0B0B] font-semibold shadow-md'
                  : 'bg-[#171717] text-[#A1A1AA] hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill, index) => {
            const Icon = getIcon(skill.iconName);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setSelectedSkill(skill)}
                className="bg-[#202020] border border-white/[0.08] hover:border-white/25 rounded-2xl p-4 flex flex-col items-center text-center cursor-pointer group transition-all shadow-md relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-[#171717] border border-white/10 flex items-center justify-center text-white mb-3 group-hover:border-white/30 group-hover:bg-[#252525] transition-colors shadow-inner">
                  <Icon className="w-6 h-6 text-[#E5E5E5]" />
                </div>
                
                <h3 className="text-sm font-semibold text-white group-hover:text-[#E5E5E5] transition-colors mb-1">
                  {skill.name}
                </h3>
                
                <span className="text-[11px] text-[#A1A1AA] font-mono">
                  {skill.category}
                </span>

                <div className="mt-3 w-full bg-[#171717] h-1.5 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className="bg-[#E5E5E5] h-full rounded-full transition-all duration-500" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Skill Details Drawer Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-[#171717] border border-white/20 rounded-2xl p-6 max-w-md w-full shadow-2xl relative text-white"
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#202020] hover:bg-[#282828] text-[#A1A1AA] hover:text-white border border-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#202020] border border-white/20 flex items-center justify-center text-white">
                  {React.createElement(getIcon(selectedSkill.iconName), { className: "w-6 h-6 text-white" })}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedSkill.name}</h3>
                  <span className="text-xs text-[#A1A1AA] font-mono">{selectedSkill.category}</span>
                </div>
              </div>

              <p className="text-xs text-[#A1A1AA] leading-relaxed mb-4">
                {selectedSkill.description}
              </p>

              <div className="mb-4 space-y-1.5">
                <div className="flex justify-between text-xs text-[#A1A1AA]">
                  <span>Proficiency & Usage Confidence</span>
                  <span className="font-mono text-white font-semibold">{selectedSkill.level}%</span>
                </div>
                <div className="w-full bg-[#202020] h-2 rounded-full overflow-hidden border border-white/10">
                  <div className="bg-[#E5E5E5] h-full rounded-full" style={{ width: `${selectedSkill.level}%` }} />
                </div>
              </div>

              {selectedSkill.projectsUsed.length > 0 && (
                <div className="pt-3 border-t border-white/10">
                  <h4 className="text-xs font-semibold text-white mb-2">Projects Implemented In:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedSkill.projectsUsed.map((p) => (
                      <span key={p} className="px-2.5 py-1 rounded-md bg-[#202020] border border-white/10 text-[11px] text-[#A1A1AA] flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-400" />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
