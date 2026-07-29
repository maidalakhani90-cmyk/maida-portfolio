import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import emailjs from "@emailjs/browser";
export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

 const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: ''
});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    console.log("handleSubmit running");
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_ao4l5bb",          // Service ID
      "template_fz9wsk8",         // Template ID
      {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
      },
      "KDHfTRMYd75EBP_Jk"          // Public Key
    );

    console.log(result);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 5000);
  } catch (error) {
    alert("Message failed to send.");
    console.error(error);
  }

  setIsSubmitting(false);
};

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B0B0B] border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171717] border border-white/10 text-xs text-[#A1A1AA]">
            <MessageSquare className="w-3.5 h-3.5 text-white" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-sm text-[#A1A1AA]">
            Open for AI & Data Science project collaborations, learning discussions, and opportunities.
          </p>
          <div className="w-12 h-1 bg-[#E5E5E5] rounded-full mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Copy Button */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Card */}
            <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-emerald-500/40 transition-all duration-300">
              <div className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider">
                Direct Email
              </div>

              <div className="flex items-center justify-between gap-2 p-3 bg-[#202020] rounded-xl border border-white/10">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-white truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#171717] hover:bg-emerald-500/10 text-[#A1A1AA] hover:text-white border border-white/10 transition-colors shrink-0 flex items-center gap-1 text-xs"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {copied && (
                <div className="text-[11px] text-emerald-400 font-mono animate-fade-in">
                  ✓ Email address copied to clipboard!
                </div>
              )}
            </div>

            {/* Social Channels */}
            <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 hover:border-emerald-500/40 transition-all duration-300">
              <div className="text-xs font-semibold text-[#A1A1AA] uppercase tracking-wider">
                Social Profiles
              </div>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#202020] hover:bg-[#282828] border border-white/10 hover:border-emerald-500/40 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 text-xs font-medium text-white">
                    <Github className="w-4 h-4" />
                    GitHub
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1AA] group-hover:text-white transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#202020] hover:bg-[#282828] border border-white/10 hover:border-white/20 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2 text-xs font-medium text-white">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1AA] group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Location & Response Badge */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl p-5 flex items-center justify-between hover:border-emerald-500/40 transition-all">
              <span>Status: Active & Learning</span>
              <span className="font-mono text-emerald-400">Response &lt; 24h</span>
            </div>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 shadow-2xl hover:border-emerald-500/40 transition-all duration-300">
              
              <h3 className="text-lg font-bold text-white mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 bg-[#202020] rounded-xl border border-emerald-500/30 text-center space-y-3 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-[#A1A1AA]">
                    Thank you for reaching out, Maida Lakhani will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form
  onSubmit={(e) => {
    console.log("Form Submitted");
    handleSubmit(e);
  }}
  className="space-y-4"
>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Smith"
                        className="w-full rounded-xl bg-black/30 border border-zinc-700 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#202020] border border-white/10 text-white placeholder-[#A1A1AA]/50 text-xs focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Project Inquiry / Collaboration"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#202020] border border-white/10 text-white placeholder-[#A1A1AA]/50 text-xs focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A1A1AA] mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message here..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#202020] border border-white/10 text-white placeholder-[#A1A1AA]/50 text-xs focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
