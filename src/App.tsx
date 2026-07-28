import React, { useState } from 'react';
import { GrainOverlay } from './components/GrainOverlay';
import { CursorGlow } from './components/CursorGlow';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { LearningJourney } from './components/LearningJourney';
import { Skills } from './components/Skills';
import { FeaturedProjects } from './components/FeaturedProjects';
import { CurrentGoals } from './components/CurrentGoals';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-white selection:text-black relative font-sans antialiased overflow-x-hidden">
      {/* Background Atmosphere Overlays */}
      <GrainOverlay />
      <CursorGlow />

      {/* Main Header / Navigation */}
      <Header onOpenResume={() => setIsResumeOpen(true)} />

      {/* Page Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <LearningJourney />
        <Skills />
        <FeaturedProjects />
        <CurrentGoals />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
