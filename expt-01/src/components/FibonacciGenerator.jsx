import { useState } from 'react';

function FibonacciGenerator() {
    const [count, setCount] = useState('');
    const [series, setSeries] = useState([]);
    const [error, setError] = useState('');

    const generateFibonacci = (n) => {
        if (n <= 0) return [];
        if (n === 1) return [0];

        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib;
    };

    const handleGenerate = () => {
        setError('');
        setSeries([]);

        const num = parseInt(count);

        if (count === '' || isNaN(num)) {
            setError('Please enter a valid number');
            return;
        }

        if (num <= 0) {
            setError('Please enter a positive number');
            return;
        }

        if (num > 50) {
            setError('Number too large (max: 50)');
            return;
        }

        const fibSeries = generateFibonacci(num);
        setSeries(fibSeries);
    };

    return (
        <div className="card">
            <h2>Fibonacci Generator</h2>
            <div className="input-group">
                <label htmlFor="fibonacci-input">Number of terms:</label>
                <input
                    id="fibonacci-input"
                    type="number"
                    value={count}
                    onChange={(e) => {
                        setCount(e.target.value);
                        setSeries([]);
                        setError('');
                    }}
                    placeholder="e.g., 10"
                    onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                />
            </div>
            <button onClick={handleGenerate}>Generate Series</button>

            {series.length > 0 && (
                <div className="result success">
                    <p>Fibonacci Series ({series.length} terms):</p>
                    <div className="fibonacci-series">
                        {series.map((num, index) => (
                            <span key={index} className="fibonacci-number">{num}</span>
                        ))}
                    </div>
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

export default FibonacciGenerator;
