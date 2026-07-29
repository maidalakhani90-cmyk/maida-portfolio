import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Copy, Check, FileText, Sparkles, User, Briefcase, GraduationCap, Code2 } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, FEATURED_PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
MAIDA LAKHANI
Aspiring AI & Data Science Developer
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY:
${PERSONAL_INFO.aboutDescription}

TECHNICAL SKILLS:
- Core Languages: Python, SQL
- Data & Analytics: Pandas, NumPy, Matplotlib, Seaborn, Exploratory Data Analysis
- AI & Automation: Machine Learning (Regression, Classification), n8n, Prompt Engineering
- Tools: Git, GitHub, Jupyter Notebooks

FEATURED PROJECTS:
${FEATURED_PROJECTS.map((p) => `- ${p.title}: ${p.description}`).join('\n')}

GOALS & CONTINUOUS LEARNING:
Currently mastering Machine Learning models, Deep Learning, and Agentic AI workflows with n8n.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-[#171717] border border-white/20 rounded-2xl max-w-3xl w-full p-6 text-white shadow-2xl relative my-8"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Curriculum Vitae / Resume</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="px-3 py-1.5 rounded-lg bg-[#202020] hover:bg-[#282828] text-xs text-white border border-white/10 transition-colors flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied Text' : 'Copy Text'}
              </button>

              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-[#E5E5E5] hover:bg-white text-xs font-semibold text-[#0B0B0B] transition-colors flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                Print / Save PDF
              </button>
<a
  href="/Maida-Lakhani-Resume.pdf"
  download
  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-xs font-semibold text-black transition-colors flex items-center gap-1.5"
>
  <Download className="w-3.5 h-3.5" />
  Download PDF
</a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#202020] text-[#A1A1AA] hover:text-white border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Preview */}
          <div className="bg-[#0B0B0B] border border-white/10 rounded-xl p-6 sm:p-8 space-y-6 text-left max-h-[70vh] overflow-y-auto font-sans">
            
            {/* Header */}
            <div className="border-b border-white/10 pb-4">
              <h1 className="text-2xl font-bold text-white">{PERSONAL_INFO.name}</h1>
              <p className="text-sm font-medium text-[#E5E5E5] mt-0.5">{PERSONAL_INFO.role}</p>
              <div className="flex flex-wrap gap-3 text-xs text-[#A1A1AA] mt-2 font-mono">
                <span>📧 {PERSONAL_INFO.email}</span>
                <span>•</span>
                <span>💻 github.com/maidalakhani</span>
                <span>•</span>
                <span>🔗 linkedin.com/in/maidalakhani</span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Executive Summary
              </h2>
              <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                {PERSONAL_INFO.aboutDescription}
              </p>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Technical Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#E5E5E5]">
                <div className="p-2.5 bg-[#171717] rounded-lg border border-white/5">
                  <span className="font-semibold text-white">Programming Languages:</span> Python, SQL
                </div>
                <div className="p-2.5 bg-[#171717] rounded-lg border border-white/5">
                  <span className="font-semibold text-white">Data Science Libraries:</span> Pandas, NumPy, Matplotlib, Seaborn
                </div>
                <div className="p-2.5 bg-[#171717] rounded-lg border border-white/5">
                  <span className="font-semibold text-white">AI & Machine Learning:</span> Regression Models, Scikit-Learn, Prompt Engineering
                </div>
                <div className="p-2.5 bg-[#171717] rounded-lg border border-white/5">
                  <span className="font-semibold text-white">Automation & Tools:</span> n8n Workflow Automation, Git, GitHub
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Key Projects Developed
              </h2>
              <div className="space-y-3">
                {FEATURED_PROJECTS.map((p) => (
                  <div key={p.id} className="p-3 bg-[#171717] rounded-xl border border-white/5">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-white">{p.title}</span>
                      <span className="text-[10px] font-mono text-[#A1A1AA]">{p.category}</span>
                    </div>
                    <p className="text-xs text-[#A1A1AA]">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Ongoing Goals */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Learning Milestones
              </h2>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Completed Python Fundamentals, Exploratory Data Analysis, and Machine Learning Foundations in 2026. Actively developing end-to-end agentic AI pipelines and advanced n8n workflow systems.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
