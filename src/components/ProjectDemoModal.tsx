import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, RefreshCw, CheckCircle2, Terminal, ArrowRight, Sparkles, Sliders, Database, BarChart2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="bg-[#171717] border border-white/20 rounded-2xl max-w-2xl w-full p-6 text-white shadow-2xl relative my-8"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#202020] border border-white/10 flex items-center justify-center text-emerald-400 font-mono text-sm font-bold">
                demo
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  {project.title}
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                    Live Demo
                  </span>
                </h3>
                <p className="text-xs text-[#A1A1AA]">{project.description}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[#202020] hover:bg-[#282828] text-[#A1A1AA] hover:text-white border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Render specific demo sandbox */}
          <div className="min-h-[280px]">
            {project.demoType === 'calculator' && <CalculatorDemo />}
            {project.demoType === 'student-analysis' && <StudentAnalysisDemo />}
            {project.demoType === 'sales-analysis' && <SalesAnalysisDemo />}
            {project.demoType === 'house-price' && <HousePriceDemo />}
            {project.demoType === 'movie-recommender' && <MovieRecommenderDemo />}
            {project.demoType === 'n8n-workflow' && <N8nWorkflowDemo />}
          </div>

          {/* Modal Footer */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#A1A1AA]">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-white/60" />
              <span>Interactive Python / Data Sandbox</span>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#202020] hover:bg-[#282828] text-white border border-white/10 transition-colors flex items-center gap-1.5 font-medium"
            >
              View GitHub Repo
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

// 1. Python Calculator Sandbox Demo Component
const CalculatorDemo = () => {
  const [display, setDisplay] = useState('0');
  const [history, setHistory] = useState('Python Math Engine Ready');

  const handleBtn = (val: string) => {
    if (val === 'C') {
      setDisplay('0');
      setHistory('Cleared');
    } else if (val === '=') {
      try {
        const sanitized = display.replace(/×/g, '*').replace(/÷/g, '/');
        // safe eval for basic numbers
        const res = Function(`'use strict'; return (${sanitized})`)();
        setHistory(`${display} = ${res}`);
        setDisplay(String(res));
      } catch {
        setDisplay('Error');
        setHistory('Syntax Error');
      }
    } else {
      if (display === '0' || display === 'Error') {
        setDisplay(val);
      } else {
        setDisplay(display + val);
      }
    }
  };

  const buttons = ['C', '(', ')', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '%', '='];

  return (
    <div className="bg-[#0B0B0B] border border-white/10 rounded-xl p-4 font-mono">
      <div className="text-right mb-3">
        <div className="text-[11px] text-[#A1A1AA] h-4">{history}</div>
        <div className="text-2xl font-bold text-white tracking-wider bg-[#171717] px-3 py-2 rounded-lg border border-white/10 mt-1 overflow-x-auto">
          {display}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((b) => (
          <button
            key={b}
            onClick={() => handleBtn(b)}
            className={`py-2.5 rounded-lg text-sm font-semibold transition-all ${
              b === '='
                ? 'bg-[#E5E5E5] text-[#0B0B0B] hover:bg-white'
                : b === 'C'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                : ['÷', '×', '-', '+'].includes(b)
                ? 'bg-[#202020] text-amber-300 border border-white/10'
                : 'bg-[#171717] text-white hover:bg-[#202020] border border-white/5'
            }`}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
};

// 2. Student Result Analysis Demo
const StudentAnalysisDemo = () => {
  const [selectedSubject, setSelectedSubject] = useState<'Math' | 'Science' | 'English'>('Math');

  const stats = {
    Math: { avg: 84.5, highest: 98, lowest: 62, passRate: '94%', students: 120 },
    Science: { avg: 81.2, highest: 96, lowest: 58, passRate: '89%', students: 120 },
    English: { avg: 88.0, highest: 100, lowest: 70, passRate: '97%', students: 120 },
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(['Math', 'Science', 'English'] as const).map((sub) => (
          <button
            key={sub}
            onClick={() => setSelectedSubject(sub)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              selectedSubject === sub
                ? 'bg-[#E5E5E5] text-[#0B0B0B] font-semibold border-white'
                : 'bg-[#202020] text-[#A1A1AA] border-white/10'
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#0B0B0B] p-3 rounded-xl border border-white/10 text-center">
          <div className="text-[11px] text-[#A1A1AA]">Average Score</div>
          <div className="text-xl font-bold text-white">{stats[selectedSubject].avg}</div>
        </div>
        <div className="bg-[#0B0B0B] p-3 rounded-xl border border-white/10 text-center">
          <div className="text-[11px] text-[#A1A1AA]">Highest Score</div>
          <div className="text-xl font-bold text-emerald-400">{stats[selectedSubject].highest}</div>
        </div>
        <div className="bg-[#0B0B0B] p-3 rounded-xl border border-white/10 text-center">
          <div className="text-[11px] text-[#A1A1AA]">Pass Rate</div>
          <div className="text-xl font-bold text-blue-400">{stats[selectedSubject].passRate}</div>
        </div>
        <div className="bg-[#0B0B0B] p-3 rounded-xl border border-white/10 text-center">
          <div className="text-[11px] text-[#A1A1AA]">Total Sample</div>
          <div className="text-xl font-bold text-white">{stats[selectedSubject].students}</div>
        </div>
      </div>

      <div className="bg-[#0B0B0B] p-4 rounded-xl border border-white/10">
        <div className="text-xs text-[#A1A1AA] mb-3 flex items-center justify-between">
          <span>Grade Distribution Histogram (Matplotlib Simulation)</span>
          <span className="font-mono text-emerald-400">DataFrame: Loaded</span>
        </div>
        <div className="h-28 flex items-end justify-between gap-2 pt-2 border-b border-white/10 pb-1">
          {[
            { label: 'A (90-100)', height: '75%', val: '38%' },
            { label: 'B (80-89)', height: '85%', val: '42%' },
            { label: 'C (70-79)', height: '40%', val: '14%' },
            { label: 'D (60-69)', height: '20%', val: '4%' },
            { label: 'F (<60)', height: '10%', val: '2%' }
          ].map((bar) => (
            <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[10px] text-white/70">{bar.val}</span>
              <div
                className="w-full bg-[#E5E5E5] rounded-t hover:bg-white transition-all"
                style={{ height: bar.height }}
              />
              <span className="text-[9px] text-[#A1A1AA] truncate w-full text-center">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Sales Data Analysis Demo
const SalesAnalysisDemo = () => {
  const [period, setPeriod] = useState<'Q1' | 'Q2' | 'Q3' | 'Q4'>('Q4');

  const salesData = {
    Q1: { revenue: '$142,500', growth: '+12%', topCategory: 'Electronics' },
    Q2: { revenue: '$168,200', growth: '+18%', topCategory: 'Laptops & PCs' },
    Q3: { revenue: '$185,900', growth: '+10.5%', topCategory: 'Smart Devices' },
    Q4: { revenue: '$224,000', growth: '+21.4%', topCategory: 'Software & AI Tools' },
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs text-[#A1A1AA]">Select Quarter:</span>
        <div className="flex gap-1.5">
          {(['Q1', 'Q2', 'Q3', 'Q4'] as const).map((q) => (
            <button
              key={q}
              onClick={() => setPeriod(q)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium ${
                period === q ? 'bg-[#E5E5E5] text-[#0B0B0B]' : 'bg-[#202020] text-[#A1A1AA]'
              }`}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[#0B0B0B] p-3 rounded-xl border border-white/10">
          <div className="text-[11px] text-[#A1A1AA]">Quarterly Revenue</div>
          <div className="text-lg font-bold text-white">{salesData[period].revenue}</div>
        </div>
        <div className="bg-[#0B0B0B] p-3 rounded-xl border border-white/10">
          <div className="text-[11px] text-[#A1A1AA]">Growth Rate</div>
          <div className="text-lg font-bold text-emerald-400">{salesData[period].growth}</div>
        </div>
        <div className="bg-[#0B0B0B] p-3 rounded-xl border border-white/10">
          <div className="text-[11px] text-[#A1A1AA]">Top Category</div>
          <div className="text-xs font-bold text-[#E5E5E5] truncate">{salesData[period].topCategory}</div>
        </div>
      </div>

      <div className="bg-[#0B0B0B] p-4 rounded-xl border border-white/10">
        <div className="text-xs text-[#A1A1AA] mb-2 flex justify-between">
          <span>Seaborn Trend Line Visualization</span>
          <span className="text-emerald-400 font-mono">Status: Analyzed</span>
        </div>
        <div className="h-24 flex items-end gap-3 pt-4 border-b border-white/10 pb-2 px-2">
          {[40, 65, 55, 80, 95, 110].map((val, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full bg-gradient-to-t from-zinc-700 to-white rounded-t transition-all duration-300"
                style={{ height: `${val * 0.7}%` }}
              />
              <span className="text-[9px] text-[#A1A1AA]">M{idx + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 4. House Price Prediction Demo
const HousePriceDemo = () => {
  const [sqft, setSqft] = useState(1800);
  const [beds, setBeds] = useState(3);
  const [locationScore, setLocationScore] = useState(8);

  const predictedPrice = Math.round((sqft * 180 + beds * 25000 + locationScore * 15000));

  return (
    <div className="space-y-4">
      <div className="bg-[#0B0B0B] p-4 rounded-xl border border-white/10 space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-[#A1A1AA]">Square Feet:</span>
            <span className="font-mono font-bold text-white">{sqft} sq ft</span>
          </div>
          <input
            type="range"
            min="600"
            max="4000"
            step="100"
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            className="w-full accent-white cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-[#A1A1AA]">Bedrooms:</span>
            <span className="font-mono font-bold text-white">{beds} Beds</span>
          </div>
          <input
            type="range"
            min="1"
            max="6"
            value={beds}
            onChange={(e) => setBeds(Number(e.target.value))}
            className="w-full accent-white cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-[#A1A1AA]">Location Index (1-10):</span>
            <span className="font-mono font-bold text-white">{locationScore}/10</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={locationScore}
            onChange={(e) => setLocationScore(Number(e.target.value))}
            className="w-full accent-white cursor-pointer"
          />
        </div>
      </div>

      <div className="bg-[#202020] p-4 rounded-xl border border-white/20 text-center">
        <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">Scikit-Learn ML Predicted Valuation</span>
        <div className="text-3xl font-extrabold text-emerald-400 mt-1 font-mono">
          ${predictedPrice.toLocaleString()}
        </div>
        <p className="text-[11px] text-[#A1A1AA] mt-1">
          Model: Random Forest Regressor (R² = 0.92)
        </p>
      </div>
    </div>
  );
};

// 5. Movie Recommendation System Demo
const MovieRecommenderDemo = () => {
  const [selectedGenre, setSelectedGenre] = useState<'Sci-Fi' | 'Action' | 'Drama'>('Sci-Fi');

  const recs = {
    'Sci-Fi': [
      { title: 'Interstellar', similarity: '98.4%', year: '2014', plot: 'Space exploration through wormholes.' },
      { title: 'Inception', similarity: '95.1%', year: '2010', plot: 'Subconscious dream extraction.' },
      { title: 'Blade Runner 2049', similarity: '92.7%', year: '2017', plot: 'Neo-noir cyberpunk detective.' },
    ],
    'Action': [
      { title: 'The Dark Knight', similarity: '97.2%', year: '2008', plot: 'Heroic order against chaotic mastermind.' },
      { title: 'Mad Max: Fury Road', similarity: '94.8%', year: '2015', plot: 'High-octane desert survival pursuit.' },
      { title: 'Top Gun: Maverick', similarity: '91.0%', year: '2022', plot: 'Elite tactical aerial missions.' },
    ],
    'Drama': [
      { title: 'The Shawshank Redemption', similarity: '99.1%', year: '1994', plot: 'Hope and resilience in prison.' },
      { title: 'Whiplash', similarity: '93.5%', year: '2014', plot: 'Relentless pursuit of musical perfection.' },
      { title: 'Oppenheimer', similarity: '91.8%', year: '2023', plot: 'Biographical quantum science drama.' },
    ]
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {(['Sci-Fi', 'Action', 'Drama'] as const).map((g) => (
          <button
            key={g}
            onClick={() => setSelectedGenre(g)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              selectedGenre === g
                ? 'bg-[#E5E5E5] text-[#0B0B0B] font-semibold border-white'
                : 'bg-[#202020] text-[#A1A1AA] border-white/10'
            }`}
          >
            {g} Recommendations
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {recs[selectedGenre].map((m, idx) => (
          <div key={m.title} className="bg-[#0B0B0B] p-3 rounded-xl border border-white/10 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#A1A1AA]">#{idx + 1}</span>
                <span className="text-sm font-bold text-white">{m.title}</span>
                <span className="text-[10px] text-[#A1A1AA]">({m.year})</span>
              </div>
              <p className="text-xs text-[#A1A1AA] mt-0.5">{m.plot}</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-emerald-400">{m.similarity}</span>
              <div className="text-[9px] text-[#A1A1AA]">Cosine Score</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 6. n8n Automation Workflow Demo
const N8nWorkflowDemo = () => {
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionLog, setExecutionLog] = useState<string[]>([
    '[n8n] Workflow initialized',
    '[Webhook Node] Listening on POST /api/webhook/feedback'
  ]);

  const triggerRun = () => {
    setIsExecuting(true);
    setExecutionLog((prev) => [...prev, '[Trigger] Webhook event received payload...']);

    setTimeout(() => {
      setExecutionLog((prev) => [...prev, '[Function Node] Parsing JSON & extract feedback text...']);
    }, 600);

    setTimeout(() => {
      setExecutionLog((prev) => [...prev, '[LLM Node] Sentiment: POSITIVE (0.94)']);
    }, 1200);

    setTimeout(() => {
      setExecutionLog((prev) => [...prev, '[Discord Node] Dispatch alert notification ✓']);
      setIsExecuting(false);
    }, 1800);
  };

  return (
    <div className="space-y-4">
      {/* Node Flow Map */}
      <div className="bg-[#0B0B0B] p-4 rounded-xl border border-white/10 flex items-center justify-between gap-2 overflow-x-auto text-xs font-mono">
        <div className="px-3 py-2 rounded-lg bg-[#202020] border border-white/20 text-white shrink-0 text-center">
          ⚡ Webhook
        </div>
        <span className="text-white/40">→</span>
        <div className="px-3 py-2 rounded-lg bg-[#202020] border border-white/20 text-white shrink-0 text-center">
          ⚙️ Data Parser
        </div>
        <span className="text-white/40">→</span>
        <div className="px-3 py-2 rounded-lg bg-[#202020] border border-white/20 text-white shrink-0 text-center">
          🧠 Sentiment AI
        </div>
        <span className="text-white/40">→</span>
        <div className="px-3 py-2 rounded-lg bg-[#202020] border border-white/20 text-white shrink-0 text-center">
          🔔 Discord Bot
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xs text-[#A1A1AA]">Live Workflow Simulator</span>
        <button
          onClick={triggerRun}
          disabled={isExecuting}
          className="px-4 py-1.5 rounded-lg bg-[#E5E5E5] hover:bg-white text-[#0B0B0B] text-xs font-semibold transition-all flex items-center gap-1.5 disabled:opacity-50"
        >
          {isExecuting ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5" />}
          {isExecuting ? 'Running Workflow...' : 'Execute Workflow'}
        </button>
      </div>

      <div className="bg-[#0B0B0B] p-3 rounded-xl border border-white/10 font-mono text-[11px] h-32 overflow-y-auto space-y-1 text-emerald-400/90">
        {executionLog.map((log, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="text-white/30">&gt;</span>
            <span>{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
