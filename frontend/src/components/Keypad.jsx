import React from 'react';
import { motion } from 'framer-motion';

const buttons = [
  { label: 'sin', type: 'sci', value: 'sin(' },
  { label: 'cos', type: 'sci', value: 'cos(' },
  { label: 'tan', type: 'sci', value: 'tan(' },
  { label: 'log', type: 'sci', value: 'log(' },
  { label: 'ln', type: 'sci', value: 'ln(' },
  
  { label: '√', type: 'sci', value: 'sqrt(' },
  { label: '(', type: 'sci', value: '(' },
  { label: ')', type: 'sci', value: ')' },
  { label: '^', type: 'sci', value: '^' },
  { label: 'n!', type: 'sci', value: 'fact(' },

  { label: '7', type: 'num', value: '7' },
  { label: '8', type: 'num', value: '8' },
  { label: '9', type: 'num', value: '9' },
  { label: 'DEL', type: 'misc', value: 'DEL' },
  { label: 'AC', type: 'misc', value: 'AC' },
  
  { label: '4', type: 'num', value: '4' },
  { label: '5', type: 'num', value: '5' },
  { label: '6', type: 'num', value: '6' },
  { label: '×', type: 'op', value: '×' },
  { label: '÷', type: 'op', value: '÷' },
  
  { label: '1', type: 'num', value: '1' },
  { label: '2', type: 'num', value: '2' },
  { label: '3', type: 'num', value: '3' },
  { label: '+', type: 'op', value: '+' },
  { label: '−', type: 'op', value: '−' },
  
  { label: '0', type: 'num', value: '0' },
  { label: '.', type: 'num', value: '.' },
  { label: 'π', type: 'sci', value: 'π' },
  { label: 'ANS', type: 'sci', value: 'ans' },
  { label: '=', type: 'eq', value: '=' },
];

const Keypad = ({ onBtnClick }) => {
  const getBtnStyles = (type) => {
    switch (type) {
      case 'num': return 'btn-num';
      case 'op': return 'btn-op';
      case 'sci': return 'btn-sci';
      case 'misc': return 'btn-misc';
      case 'eq': return 'btn-eq';
      default: return '';
    }
  };

  return (
    <div className="grid grid-cols-5 gap-4 h-full">
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          onClick={() => onBtnClick(btn.value)}
          className={`calculator-button btn-realistic h-16 ${getBtnStyles(btn.type)}`}
        >
          <span className="relative z-10">{btn.label}</span>
          {/* Subtle reflection effect for premium look */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 pointer-events-none" />
        </button>
      ))}
    </div>
  );
};

export default Keypad;
