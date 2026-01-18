import FactorialCalculator from './components/FactorialCalculator';
import FibonacciGenerator from './components/FibonacciGenerator';
import PrimeChecker from './components/PrimeChecker';

function App() {
  return (
    <>
      <h1>Math Utilities</h1>
      <div className="app-container">
        <FactorialCalculator />
        <FibonacciGenerator />
        <PrimeChecker />
      </div>
    </>
  );
}

export default App;
