import React from 'react';
import { motion } from 'motion/react';
import { Code, Database, Brain, Workflow, CheckCircle2, Target, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { title } from 'motion/react-m';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Python Fundamentals",
      desc: "Building efficient, scalable, and object-oriented Python applications with clean coding practices."
    },
    {
      icon: Database,
      title: "Data Analytics",
      desc: "Analyzing datasets using Pandas, NumPy, Matplotlib, and creating meaningful visual insights."
    },
    {
      icon: Brain,
      title: "Machine Learning",
      desc: "Developing predictive models using Scikit-learn, feature engineering, and model evaluation techniques."
    },
    {
      icon: Workflow,
      title: "AI Automation",
      desc: "Creating intelligent AI workflows, API integrations, automation systems, and AI-powered solutions."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0B0B0B] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-xs text-[#A1A1AA]">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Who I Am
          </h2>
          <div className="w-12 h-1 bg-[#E5E5E5] rounded-full mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 bg-[#171717] border border-white/[0.08] rounded-2xl p-6 sm:p-8 backdrop-blur-md relative"
          >
            <div className="space-y-4 text-[#A1A1AA] leading-relaxed text-sm sm:text-base">
              <p className="text-white text-lg font-medium leading-relaxed">
                {PERSONAL_INFO.aboutDescription}
              </p>
             <p>
  I am passionate about Artificial Intelligence, Data Science, and Python development. My goal is to build intelligent applications that solve real-world problems while continuously improving my technical expertise.
</p>

<p>
  I enjoy working on practical projects involving Machine Learning, Data Analysis, SQL, Automation, and modern AI technologies. Every project strengthens my problem-solving skills and helps me grow as a future AI Engineer.
</p>
            </div>

            {/* Quick Guiding Principles */}
            <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#E5E5E5]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-world Project Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Problem Solving Skills</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean & Scalable Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Continuous Learning Mindset</span>
              </div>
            </div>
          </motion.div>

          {/* Core Focus Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#202020] border border-white/[0.08] hover:border-white/20 rounded-xl p-5 transition-all hover:-translate-y-0.5 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#171717] border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:border-white/30 transition-colors">
                      <Icon className="w-5 h-5 text-[#E5E5E5]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-[#E5E5E5] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
