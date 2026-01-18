import { useState } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateFactorial = (n) => {
    if (n === 0 || n === 1) return 1;
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    return factorial;
  };

  const handleCalculate = () => {
    setError('');
    setResult(null);

    const num = parseInt(number);

    if (number === '' || isNaN(num)) {
      setError('Please enter a valid number');
      return;
    }

    if (num < 0) {
      setError('Factorial is not defined for negative numbers');
      return;
    }

    if (num > 170) {
      setError('Number too large (max: 170)');
      return;
    }

    const factorial = calculateFactorial(num);
    setResult(factorial);
  };

  return (
    <div className="card">
      <h2>Factorial Calculator</h2>
      <div className="input-group">
        <label htmlFor="factorial-input">Enter a number:</label>
        <input
          id="factorial-input"
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
            setResult(null);
            setError('');
          }}
          placeholder="e.g., 5"
          onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
        />
      </div>
      <button onClick={handleCalculate}>Calculate Factorial</button>

      {result !== null && (
        <div className="result success">
          <p>Factorial of {number} is: <strong>{result}</strong></p>
        </div>
      )}

      {error && (
        <div className="result error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default FactorialCalculator;
