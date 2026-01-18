import { useState } from 'react';

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState(null);
    const [operation, setOperation] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const handleNumberClick = (num) => {
        if (waitingForOperand) {
            setDisplay(String(num));
            setWaitingForOperand(false);
        } else {
            setDisplay(display === '0' ? String(num) : display + num);
        }
    };

    const handleDecimalClick = () => {
        if (waitingForOperand) {
            setDisplay('0.');
            setWaitingForOperand(false);
        } else if (display.indexOf('.') === -1) {
            setDisplay(display + '.');
        }
    };

    const handleOperationClick = (nextOperation) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operation) {
            const currentValue = previousValue || 0;
            const newValue = performOperation(currentValue, inputValue, operation);

            setDisplay(String(newValue));
            setPreviousValue(newValue);
        }

        setWaitingForOperand(true);
        setOperation(nextOperation);
    };

    const performOperation = (firstValue, secondValue, operation) => {
        switch (operation) {
            case '+':
                return firstValue + secondValue;
            case '-':
                return firstValue - secondValue;
            case '×':
                return firstValue * secondValue;
            case '÷':
                return secondValue !== 0 ? firstValue / secondValue : 'Error';
            default:
                return secondValue;
        }
    };

    const handleEquals = () => {
        const inputValue = parseFloat(display);

        if (previousValue !== null && operation) {
            const newValue = performOperation(previousValue, inputValue, operation);
            setDisplay(String(newValue));
            setPreviousValue(null);
            setOperation(null);
            setWaitingForOperand(true);
        }
    };

    const handleClear = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    const handleBackspace = () => {
        if (!waitingForOperand) {
            const newDisplay = display.length > 1 ? display.slice(0, -1) : '0';
            setDisplay(newDisplay);
        }
    };

    const handlePercentage = () => {
        const value = parseFloat(display);
        setDisplay(String(value / 100));
    };

    const handleToggleSign = () => {
        const value = parseFloat(display);
        setDisplay(String(value * -1));
    };

    return (
        <div className="calculator-card">
            <h2>Simple Calculator</h2>

            <div className="calculator-container">
                <div className="calculator-display">
                    <div className="display-operation">
                        {previousValue !== null && operation && (
                            <span>{previousValue} {operation}</span>
                        )}
                    </div>
                    <div className="display-value">{display}</div>
                </div>

                <div className="calculator-buttons">
                    <button className="btn-function" onClick={handleClear}>C</button>
                    <button className="btn-function" onClick={handleBackspace}>⌫</button>
                    <button className="btn-function" onClick={handlePercentage}>%</button>
                    <button className="btn-operation" onClick={() => handleOperationClick('÷')}>÷</button>

                    <button className="btn-number" onClick={() => handleNumberClick(7)}>7</button>
                    <button className="btn-number" onClick={() => handleNumberClick(8)}>8</button>
                    <button className="btn-number" onClick={() => handleNumberClick(9)}>9</button>
                    <button className="btn-operation" onClick={() => handleOperationClick('×')}>×</button>

                    <button className="btn-number" onClick={() => handleNumberClick(4)}>4</button>
                    <button className="btn-number" onClick={() => handleNumberClick(5)}>5</button>
                    <button className="btn-number" onClick={() => handleNumberClick(6)}>6</button>
                    <button className="btn-operation" onClick={() => handleOperationClick('-')}>−</button>

                    <button className="btn-number" onClick={() => handleNumberClick(1)}>1</button>
                    <button className="btn-number" onClick={() => handleNumberClick(2)}>2</button>
                    <button className="btn-number" onClick={() => handleNumberClick(3)}>3</button>
                    <button className="btn-operation" onClick={() => handleOperationClick('+')}>+</button>

                    <button className="btn-number" onClick={handleToggleSign}>±</button>
                    <button className="btn-number" onClick={() => handleNumberClick(0)}>0</button>
                    <button className="btn-number" onClick={handleDecimalClick}>.</button>
                    <button className="btn-equals" onClick={handleEquals}>=</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
