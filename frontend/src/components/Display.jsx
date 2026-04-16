import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Display = ({ expression, result, error, isProcessing }) => {
  return (
    <div className="lcd-display">
      <div className="lcd-content w-full h-full flex flex-col justify-between">
        {/* Expression line - small and subtle */}
        <div className="text-right text-sm opacity-60 min-h-[1.5rem] overflow-x-auto whitespace-nowrap scrollbar-hide">
          {expression || ' '}
        </div>
        
        {/* Main Result Area */}
        <div className="text-right mt-2 min-h-[4rem] flex items-end justify-end">
          <AnimatePresence mode="wait">
            {error ? (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-lg"
              >
                ERROR: {error}
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-5xl font-bold tracking-tight"
              >
                {isProcessing ? (
                  <span className="animate-pulse">_</span>
                ) : (
                  result || '0'
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Glossy screen overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />
    </div>
  );
};

export default Display;
