import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Play, Code2, Sparkles, FolderGit2 } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectDemoModal } from './ProjectDemoModal';
import {
  Calculator,
  BarChart3,
  Home,
  Brain,
  Workflow,
  Film
} from "lucide-react";

export const FeaturedProjects: React.FC = () => {
  const [selectedDemoProject, setSelectedDemoProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Python', 'Data Science', 'Machine Learning', 'Automation'];

  const filteredProjects = activeTab === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0B0B0B] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-xs text-[#A1A1AA]">
            <FolderGit2 className="w-3.5 h-3.5 text-white" />
            <span>Practical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-sm text-[#A1A1AA]">
            Real-world applications built during my learning journey in Python, Data Science, and AI.
          </p>
          <div className="w-12 h-1 bg-[#E5E5E5] rounded-full mt-1" />
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-white/[0.08] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === cat
                  ? 'bg-[#E5E5E5] text-[#0B0B0B] font-semibold shadow-md'
                  : 'bg-[#171717] text-[#A1A1AA] hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#151515]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-2"
            >
              {/* macOS Style Header */}
<div className="bg-[#111111] border-b border-white/10">

  {/* macOS Buttons */}
  <div className="flex items-center gap-2 px-4 py-3">
    <span className="w-3 h-3 rounded-full bg-red-500"></span>
    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
    <span className="w-3 h-3 rounded-full bg-green-500"></span>

    <span className="ml-auto text-[10px] text-zinc-500 uppercase tracking-widest">
      {project.category}
    </span>
  </div>

  <div className="h-36 flex items-center justify-center bg-gradient-to-br from-[#111111] via-[#181818] to-[#101010]">
    <Code2 className="w-14 h-14 text-emerald-400 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300" />
  </div>

</div>
              {/* Card Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">

  <span className="text-[11px] uppercase tracking-[0.25em] text-emerald-400 font-semibold">
    Featured Project
  </span>

  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-emerald-400 transition-colors duration-300">
    {project.title}
  </h3>

  <p className="text-sm text-zinc-400 leading-7">
    {project.description}
  </p>

</div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300"                   >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: GitHub & Live Demo */}
                <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl border border-zinc-700 bg-transparent text-white text-sm font-medium transition-all duration-300 hover:border-white hover:bg-white hover:text-black flex items-center justify-center gap-2"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub
                  </a>

                  <button
                    onClick={() => setSelectedDemoProject(project)}
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Project Live Sandbox Modal */}
      <ProjectDemoModal
        project={selectedDemoProject}
        onClose={() => setSelectedDemoProject(null)}
      />
    </section>
  );
};
