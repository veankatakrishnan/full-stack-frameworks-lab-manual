import { useState } from 'react';
import Calculator from './components/Calculator';
import MathGame from './components/MathGame';
import './index.css';

function App() {
  const [mode, setMode] = useState('calculator'); // 'calculator' or 'game'

  return (
    <>
      <h1>Interactive Math Game Calculator</h1>

      <div className="mode-selector">
        <button
          className={`mode-btn ${mode === 'calculator' ? 'active' : ''}`}
          onClick={() => setMode('calculator')}
        >
          Calculator
        </button>
        <button
          className={`mode-btn ${mode === 'game' ? 'active' : ''}`}
          onClick={() => setMode('game')}
        >
          Math Game
        </button>
      </div>

      {mode === 'calculator' ? <Calculator /> : <MathGame />}
    </>
  );
}

export default App;
