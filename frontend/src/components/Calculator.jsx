import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Display from './Display';
import Keypad from './Keypad';
import { motion } from 'framer-motion';

const API_URL = 'http://localhost:8000/api/v1';

const Calculator = ({ onCalculate }) => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCalculate = async () => {
    if (!expression) return;

    setIsProcessing(true);
    setError(null);
    try {
      const response = await axios.post(`${API_URL}/calculate`, { expression });
      const newResult = response.data.result;
      setResult(newResult);
      onCalculate({
        expression,
        result: newResult,
        timestamp: new Date().toISOString()
      });
      setExpression(newResult.toString());
    } catch (err) {
      setError(err.response?.data?.detail || 'Calculation error');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleKeyPress = useCallback((key) => {
    if (key === 'Enter' || key === '=') {
      handleCalculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
      setExpression('');
      setResult('');
      setError(null);
    } else if (key === 'Backspace') {
      setExpression(prev => prev.slice(0, -1));
    } else if (/^[0-9+\-*/().]$/.test(key)) {
      setExpression(prev => prev + key);
    }
  }, [expression]);

  useEffect(() => {
    const listener = (e) => handleKeyPress(e.key);
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [handleKeyPress]);

  const onBtnClick = (val) => {
    if (val === '=') {
      handleCalculate();
    } else if (val === 'AC') {
      setExpression('');
      setResult('');
      setError(null);
    } else if (val === 'DEL') {
      setExpression(prev => prev.slice(0, -1));
    } else {
      setExpression(prev => prev + val);
    }
  };

  return (
    <div className="flex flex-col">
      <Display 
        expression={expression} 
        result={result} 
        error={error}
        isProcessing={isProcessing}
      />
      <Keypad onBtnClick={onBtnClick} />
    </div>
  );
};

export default Calculator;
