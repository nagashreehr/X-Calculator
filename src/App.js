import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => setInput((prev) => prev + value);

  const handleCalculate = () => {
    try {
      const evalResult = eval(input);
      if (input.includes('0/0') && !evalResult) setResult('NaN');
      else if (input.includes('/0') && !evalResult) setResult('Infinity');
      else if (isNaN(evalResult)) setResult('Error');
      else setResult(evalResult.toString());
    } catch {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly className="input-field" />
      <div className="result">{result}</div>
      <div className="buttons">
        {['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'].map((btn, i) =>
          btn === 'C' ? (
            <button key={i} onClick={handleClear}>C</button>
          ) : btn === '=' ? (
            <button key={i} onClick={handleCalculate}>=</button>
          ) : (
            <button key={i} onClick={() => handleClick(btn)}>{btn}</button>
          )
        )}
      </div>
    </div>
  );
};

export default App;