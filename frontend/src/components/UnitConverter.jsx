import React, { useState } from 'react';
import { motion } from 'framer-motion';

const units = {
  length: {
    m: 1,
    km: 1000,
    cm: 0.01,
    mm: 0.001,
    inch: 0.0254,
    ft: 0.3048,
  },
  weight: {
    kg: 1,
    g: 0.001,
    lb: 0.453592,
    oz: 0.0283495,
  },
};

const UnitConverter = () => {
  const [category, setCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('m');
  const [toUnit, setToUnit] = useState('km');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = () => {
    if (!value) return;
    const factor = units[category];
    const baseValue = value * factor[fromUnit];
    const converted = baseValue / factor[toUnit];
    setResult(converted.toFixed(4));
  };

  return (
    <div className="flex flex-col">
      {/* Category Selection as "Function Buttons" */}
      <div className="flex gap-4 mb-6">
        {['length', 'weight'].map(cat => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              const first = Object.keys(units[cat])[0];
              const second = Object.keys(units[cat])[1];
              setFromUnit(first);
              setToUnit(second);
            }}
            className={`flex-1 py-3 rounded-xl border-t border-white/10 transition-all font-bold uppercase tracking-widest text-[10px] ${
              category === cat ? 'bg-[#38bdf8] text-[#082f49] shadow-[0_4px_0_0_#075985]' : 'bg-[#1e293b] text-slate-400 border border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="space-y-6">
        <div className="lcd-display h-24 flex items-center justify-center">
           <div className="lcd-content text-3xl font-bold">
             {result ? `${result} ${toUnit}` : '---'}
           </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-500 ml-2 uppercase">From</span>
            <select 
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full p-4 rounded-2xl bg-[#334155] border-t border-white/10 text-white shadow-xl focus:outline-none"
            >
              {Object.keys(units[category]).map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] font-bold text-slate-500 ml-2 uppercase">To</span>
            <select 
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full p-4 rounded-2xl bg-[#334155] border-t border-white/10 text-white shadow-xl focus:outline-none"
            >
              {Object.keys(units[category]).map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>

        <div className="relative">
          <input 
            type="number" 
            placeholder="0.00"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-6 pb-2 rounded-2xl bg-[#020617] border-2 border-[#1e293b] text-[#38bdf8] text-4xl font-mono text-right focus:outline-none placeholder:opacity-20 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
          />
          <span className="absolute left-6 top-1 text-[10px] font-bold text-slate-500 uppercase">Input Value</span>
        </div>

        <button 
          onClick={handleConvert}
          className="calculator-button btn-realistic h-20 w-full btn-eq text-2xl"
        >
          CONVERT UNITS
        </button>
      </div>
    </div>
  );
};

export default UnitConverter;
