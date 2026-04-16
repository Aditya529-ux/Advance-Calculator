import React, { useState, useEffect } from 'react';
import Calculator from './components/Calculator';
import History from './components/History';
import UnitConverter from './components/UnitConverter';
import { Moon, Sun, History as HistoryIcon, Ruler, Calculator as CalcIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [mode, setMode] = useState('calc'); // 'calc' or 'unit'
  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem('calc-history');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const addToHistory = (entry) => {
    const newHistory = [entry, ...history].slice(0, 50);
    setHistory(newHistory);
    localStorage.setItem('calc-history', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('calc-history');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0f172a] selection:bg-primary/30">
      {/* Background Orbs - more subtle now */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-lg">
        {/* The Realistic Calculator Shell */}
        <div className="calculator-body">
          {/* Top Panel / Solar Panel area feel */}
          <div className="flex justify-between items-center mb-6 px-4">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/20 border border-[#ef4444]/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]/20 border border-[#10b981]/40" />
            </div>
            <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">
              Pro-Scientific Series / AI-800
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {mode === 'calc' ? (
                <Calculator onCalculate={addToHistory} />
              ) : (
                <UnitConverter />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Bottom Branding */}
          <div className="mt-8 flex justify-center">
            <div className="px-3 py-1 rounded-full bg-slate-900/50 border border-slate-700/50 text-[10px] text-slate-400 font-medium">
              VIRTUAL COMPUTING ENGINE
            </div>
          </div>
        </div>

        {/* History Toggle Button - Floating outside or below */}
        <div className="absolute top-4 -right-16 flex flex-col gap-4">
          <button 
            onClick={() => setShowHistory(!showHistory)}
            className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-xl"
            title="History"
          >
            <HistoryIcon size={20} />
          </button>
          <button 
            onClick={() => setMode(mode === 'calc' ? 'unit' : 'calc')}
            className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all shadow-xl"
            title="Switch Mode"
          >
            {mode === 'calc' ? <Ruler size={20} /> : <CalcIcon size={20} />}
          </button>
        </div>

        {/* History Sidebar - Now an Overlay */}
        <AnimatePresence>
          {showHistory && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowHistory(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                className="fixed top-0 right-0 h-full w-80 bg-slate-900 border-l border-slate-800 z-50 shadow-2xl p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">History</h2>
                  <button onClick={() => setShowHistory(false)} className="text-slate-400 hover:text-white">✕</button>
                </div>
                <History history={history} onClear={clearHistory} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
