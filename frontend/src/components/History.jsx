import React from 'react';
import { Trash2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const History = ({ history, onClear }) => {
  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold dark:text-white">History</h2>
        <button 
          onClick={onClear}
          className="p-2 text-gray-500 hover:text-red-500 transition-colors"
          title="Clear History"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        <AnimatePresence initial={false}>
          {history.length === 0 ? (
            <div className="text-center py-10 text-gray-400 font-medium">
              No history yet
            </div>
          ) : (
            history.map((item, idx) => (
              <motion.div
                key={item.timestamp}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 group"
              >
                <div className="text-sm text-gray-500 mb-1 truncate">
                  {item.expression} =
                </div>
                <div className="text-lg font-bold dark:text-white">
                  {item.result}
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default History;
