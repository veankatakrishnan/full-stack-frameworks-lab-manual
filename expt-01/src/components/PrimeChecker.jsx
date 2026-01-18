import { useState } from 'react';

function PrimeChecker() {
    const [number, setNumber] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const isPrime = (n) => {
        if (n <= 1) return false;
        if (n === 2) return true;
        if (n % 2 === 0) return false;

        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) return false;
        }
        return true;
    };

    const handleCheck = () => {
        setError('');
        setResult(null);

        const num = parseInt(number);

        if (number === '' || isNaN(num)) {
            setError('Please enter a valid number');
            return;
        }

        if (num < 0) {
            setError('Please enter a non-negative number');
            return;
        }

        const prime = isPrime(num);
        setResult(prime);
    };

    return (
        <div className="card">
            <h2>Prime Number Checker</h2>
            <div className="input-group">
                <label htmlFor="prime-input">Enter a number:</label>
                <input
                    id="prime-input"
                    type="number"
                    value={number}
                    onChange={(e) => {
                        setNumber(e.target.value);
                        setResult(null);
                        setError('');
                    }}
                    placeholder="e.g., 17"
                    onKeyPress={(e) => e.key === 'Enter' && handleCheck()}
                />
            </div>
            <button onClick={handleCheck}>Check Prime</button>

            {result !== null && (
                <div className={`result ${result ? 'success' : 'error'}`}>
                    <p>
                        {number} is <strong>{result ? 'a PRIME' : 'NOT a prime'}</strong> number
                    </p>
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

export default PrimeChecker;
