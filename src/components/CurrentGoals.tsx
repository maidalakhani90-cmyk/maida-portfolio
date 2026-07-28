import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckSquare, Square, Target, Award, Sparkles, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CURRENT_GOALS } from '../data/portfolioData';
import { GoalItem } from '../types';
import {
FolderGit2,
Brain,
Cpu,
Workflow,
Trophy,
Briefcase
} from "lucide-react";
export const CurrentGoals: React.FC = () => {
  const [goals, setGoals] = useState<GoalItem[]>(CURRENT_GOALS);

  const toggleGoal = (id: string) => {
    setGoals((prev) =>
      prev.map((g) => {
        if (g.id === id) {
          const nextState = !g.completed;
          if (nextState) {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.7 }
            });
          }
          return { ...g, completed: nextState };
        }
        return g;
      })
    );
  };

  const completedCount = goals.filter((g) => g.completed).length;
  const progressPercent = Math.round((completedCount / goals.length) * 100);

  return (
    <section id="goals" className="py-20 md:py-28 bg-[#0B0B0B] border-t border-white/[0.08] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-xs text-[#A1A1AA]">
            <Target className="w-3.5 h-3.5 text-white" />
            <span>Roadmap & Execution</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
  2026 Learning Roadmap
</h2>
         <p className="text-base text-zinc-400 max-w-xl leading-7">
  Tracking my journey toward becoming an AI Engineer through consistent
  project building, practical learning, and continuous improvement.
</p>
          <div className="w-12 h-1 bg-[#E5E5E5] rounded-full mt-1" />
        </div>

        {/* Progress Bar Header Card */}
        <div className="bg-[#171717] border border-white/10 rounded-3xl p-7 mb-10 shadow-xl">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="text-[#A1A1AA] font-medium flex items-center gap-2">
              <Award className="w-4 h-3 text-emerald-400" />
              Learning Progress
            </span>
            <span className="font-mono text-white font-bold">{progressPercent}% Completed</span>
          </div>
<p className="text-xs text-zinc-500 mt-2">
  {completedCount} Milestones Completed • {goals.length - completedCount} Active
</p>
          <div className="w-full bg-[#202020] h-3 rounded-full overflow-hidden border border-white/10 p-0.5">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-gradient-to-r from-zinc-400 via-white to-emerald-400 h-full rounded-full"
            />
          </div>
        </div>

        {/* Animated Checklist Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => toggleGoal(goal.id)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group hover:-translate-y-1 hover:border-emerald-400/30 hover:shadow-[0_0_25px_rgba(16,185,129,.15)] ${
                goal.completed
                  ? 'bg-[#171717]/90 border-white/20 text-white shadow-md'
                  : 'bg-[#202020]/60 border-white/[0.06] text-[#A1A1AA] hover:border-white/20 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${
                  goal.completed 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                    : 'bg-[#171717] border border-white/20 text-transparent group-hover:border-white/40'
                }`}>
                  <Check className={`w-4 h-4 ${goal.completed ? 'opacity-100' : 'opacity-0'}`} />
                </div>
<div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">

  {index === 0 && <FolderGit2 className="w-5 h-5" />}
  {index === 1 && <Brain className="w-5 h-5" />}
  {index === 2 && <Cpu className="w-5 h-5" />}
  {index === 3 && <Workflow className="w-5 h-5" />}
  {index === 4 && <Trophy className="w-5 h-5" />}
  {index === 5 && <Briefcase className="w-5 h-5" />}

</div>
                <span className={`text-sm font-medium ${goal.completed ? 'line-through text-[#A1A1AA]' : 'text-white'}`}>
                  {goal.title}
                </span>
              </div>

              <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                goal.completed
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'bg-[#171717] text-[#A1A1AA] border border-white/10'
              }`}>
                {goal.completed ? '✓ Completed' : 'Active'}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
