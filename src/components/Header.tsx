import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Goals', href: '#goals' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/85 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-[#202020] border border-white/10 flex items-center justify-center text-white font-semibold text-sm tracking-wide group-hover:border-white/30 transition-all group-hover:bg-[#282828] shadow-inner">
              ML
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium text-sm sm:text-base tracking-tight leading-tight group-hover:text-[#E5E5E5] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-[#A1A1AA] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Active Workspace
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#171717]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/[0.08] shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/[0.06] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-lg bg-[#202020] hover:bg-[#282828] text-white text-xs font-medium border border-white/10 hover:border-white/20 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#A1A1AA]" />
              Resume
            </button>
            <a
              href="#contact"
              className="px-4 py-1.5 rounded-lg bg-[#E5E5E5] hover:bg-white text-[#0B0B0B] text-xs font-semibold transition-all flex items-center gap-1 shadow-sm hover:shadow-white/10"
            >
              Connect
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#202020] border border-white/10 text-[#A1A1AA] hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#171717] border-b border-white/[0.08] px-4 pt-3 pb-6 space-y-3 mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-[#A1A1AA] hover:text-white bg-[#202020] rounded-lg border border-white/[0.05]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 rounded-lg bg-[#202020] text-white text-xs font-medium border border-white/10 flex items-center justify-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 rounded-lg bg-[#E5E5E5] text-[#0B0B0B] text-xs font-semibold text-center flex items-center justify-center gap-1"
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
