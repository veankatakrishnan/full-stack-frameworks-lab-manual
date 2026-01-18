import { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [steps, setSteps] = useState([]);
  const [error, setError] = useState('');

  const calculateSumOfDigits = () => {
    // Reset states
    setError('');
    setResult(null);
    setSteps([]);

    // Validation
    if (!number || number.trim() === '') {
      setError('Please enter a number');
      return;
    }

    const numValue = number.replace(/[^0-9]/g, '');

    if (numValue === '') {
      setError('Please enter a valid number');
      return;
    }

    // Calculate sum of digits
    const digits = numValue.split('');
    const calculationSteps = [];
    let sum = 0;

    digits.forEach((digit, index) => {
      const digitValue = parseInt(digit);
      sum += digitValue;
      calculationSteps.push({
        digit: digitValue,
        runningSum: sum,
        isLast: index === digits.length - 1
      });
    });

    setResult(sum);
    setSteps(calculationSteps);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      calculateSumOfDigits();
    }
  };

  return (
    <>
      <h1>Sum of Digits Calculator</h1>
      <div className="card">
        <h2>Calculate Sum of Digits</h2>

        <div className="input-group">
          <label htmlFor="numberInput">Enter a number:</label>
          <input
            id="numberInput"
            type="text"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
              setResult(null);
              setError('');
            }}
            onKeyPress={handleKeyPress}
            placeholder="e.g., 12345"
            autoFocus
          />
        </div>

        <button onClick={calculateSumOfDigits}>Calculate Sum</button>

        {error && (
          <div className="result error">
            <p>{error}</p>
          </div>
        )}

        {result !== null && (
          <div className="result success">
            <p>Sum of digits: <strong>{result}</strong></p>
            {steps.length > 0 && (
              <div className="calculation-steps">
                <div className="step-header">Calculation:</div>
                <div className="step">
                  {steps.map(s => s.digit).join(' + ')} = {result}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
