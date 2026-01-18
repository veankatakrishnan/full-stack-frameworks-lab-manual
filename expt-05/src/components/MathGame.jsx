import { useState, useEffect } from 'react';

function MathGame() {
    const [gameState, setGameState] = useState('setup'); // 'setup', 'playing', 'finished'
    const [difficulty, setDifficulty] = useState('easy');
    const [operation, setOperation] = useState('addition');
    const [totalQuestions, setTotalQuestions] = useState(10);

    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [timer, setTimer] = useState(0);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        let interval;
        if (gameState === 'playing') {
            interval = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameState]);

    const getRange = () => {
        switch (difficulty) {
            case 'easy': return { min: 1, max: 10 };
            case 'medium': return { min: 1, max: 50 };
            case 'hard': return { min: 1, max: 100 };
            default: return { min: 1, max: 10 };
        }
    };

    const generateQuestion = () => {
        const range = getRange();
        const n1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
        const n2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;

        // For subtraction, ensure result is positive
        if (operation === 'subtraction') {
            setNum1(Math.max(n1, n2));
            setNum2(Math.min(n1, n2));
        } else {
            setNum1(n1);
            setNum2(n2);
        }
        setUserAnswer('');
        setFeedback('');
    };

    const startGame = () => {
        setGameState('playing');
        setCurrentQuestion(1);
        setScore(0);
        setStreak(0);
        setTimer(0);
        setAnswers([]);
        generateQuestion();
    };

    const getCorrectAnswer = () => {
        switch (operation) {
            case 'addition': return num1 + num2;
            case 'subtraction': return num1 - num2;
            case 'multiplication': return num1 * num2;
            default: return num1 + num2;
        }
    };

    const getOperationSymbol = () => {
        switch (operation) {
            case 'addition': return '+';
            case 'subtraction': return '−';
            case 'multiplication': return '×';
            default: return '+';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const correctAnswer = getCorrectAnswer();
        const isCorrect = parseInt(userAnswer) === correctAnswer;

        const newAnswers = [...answers, {
            question: `${num1} ${getOperationSymbol()} ${num2}`,
            userAnswer: parseInt(userAnswer),
            correctAnswer,
            isCorrect
        }];
        setAnswers(newAnswers);

        if (isCorrect) {
            const points = 10 + (streak * 2);
            setScore(score + points);
            setStreak(streak + 1);
            setFeedback(`🎉 Correct! +${points} points!`);
        } else {
            setStreak(0);
            setFeedback(`❌ Oops! The answer was ${correctAnswer}`);
        }

        setTimeout(() => {
            if (currentQuestion < totalQuestions) {
                setCurrentQuestion(currentQuestion + 1);
                generateQuestion();
            } else {
                setGameState('finished');
            }
        }, 1500);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const getEncouragingMessage = () => {
        const percentage = (score / (totalQuestions * 10)) * 100;
        if (percentage >= 90) return "🌟 Outstanding! You're a math superstar!";
        if (percentage >= 75) return "🎯 Excellent work! Keep it up!";
        if (percentage >= 60) return "👍 Good job! You're getting better!";
        if (percentage >= 40) return "💪 Nice try! Practice makes perfect!";
        return "🌈 Great effort! Let's try again!";
    };

    if (gameState === 'setup') {
        return (
            <div className="game-card">
                <h2>Math Game Settings</h2>
                <div className="game-settings">
                    <div className="setting-group">
                        <label>Difficulty Level:</label>
                        <div className="button-group">
                            <button
                                className={`setting-btn ${difficulty === 'easy' ? 'active' : ''}`}
                                onClick={() => setDifficulty('easy')}
                            >
                                Easy (1-10)
                            </button>
                            <button
                                className={`setting-btn ${difficulty === 'medium' ? 'active' : ''}`}
                                onClick={() => setDifficulty('medium')}
                            >
                                Medium (1-50)
                            </button>
                            <button
                                className={`setting-btn ${difficulty === 'hard' ? 'active' : ''}`}
                                onClick={() => setDifficulty('hard')}
                            >
                                Hard (1-100)
                            </button>
                        </div>
                    </div>

                    <div className="setting-group">
                        <label>Operation:</label>
                        <div className="button-group">
                            <button
                                className={`setting-btn ${operation === 'addition' ? 'active' : ''}`}
                                onClick={() => setOperation('addition')}
                            >
                                Addition
                            </button>
                            <button
                                className={`setting-btn ${operation === 'subtraction' ? 'active' : ''}`}
                                onClick={() => setOperation('subtraction')}
                            >
                                Subtraction
                            </button>
                            <button
                                className={`setting-btn ${operation === 'multiplication' ? 'active' : ''}`}
                                onClick={() => setOperation('multiplication')}
                            >
                                Multiplication
                            </button>
                        </div>
                    </div>

                    <div className="setting-group">
                        <label>Number of Questions:</label>
                        <div className="button-group">
                            <button
                                className={`setting-btn ${totalQuestions === 5 ? 'active' : ''}`}
                                onClick={() => setTotalQuestions(5)}
                            >
                                5
                            </button>
                            <button
                                className={`setting-btn ${totalQuestions === 10 ? 'active' : ''}`}
                                onClick={() => setTotalQuestions(10)}
                            >
                                10
                            </button>
                            <button
                                className={`setting-btn ${totalQuestions === 15 ? 'active' : ''}`}
                                onClick={() => setTotalQuestions(15)}
                            >
                                15
                            </button>
                        </div>
                    </div>

                    <button className="start-btn" onClick={startGame}>
                        Start Game
                    </button>
                </div>
            </div>
        );
    }

    if (gameState === 'playing') {
        return (
            <div className="game-card">
                <div className="game-header">
                    <div className="score-display">
                        <div className="score-item">
                            <span className="score-label">Score:</span>
                            <span className="score-value">{score}</span>
                        </div>
                        <div className="score-item">
                            <span className="score-label">Streak:</span>
                            <span className="score-value">{streak} 🔥</span>
                        </div>
                        <div className="score-item">
                            <span className="score-label">Time:</span>
                            <span className="score-value">{formatTime(timer)}</span>
                        </div>
                    </div>
                </div>

                <div className="question-container">
                    <div className="question-number">
                        Question {currentQuestion} of {totalQuestions}
                    </div>

                    <div className="question-display">
                        <span className="number">{num1}</span>
                        <span className="operator">{getOperationSymbol()}</span>
                        <span className="number">{num2}</span>
                        <span className="equals">=</span>
                        <span className="answer-placeholder">?</span>
                    </div>

                    <form onSubmit={handleSubmit} className="answer-form">
                        <input
                            type="number"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="Your answer"
                            className="answer-input"
                            autoFocus
                            disabled={feedback !== ''}
                        />
                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={userAnswer === '' || feedback !== ''}
                        >
                            Submit
                        </button>
                    </form>

                    {feedback && (
                        <div className={`feedback ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>
                            {feedback}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    if (gameState === 'finished') {
        const accuracy = Math.round((answers.filter(a => a.isCorrect).length / totalQuestions) * 100);

        return (
            <div className="game-card">
                <h2>🎊 Game Complete!</h2>
                <div className="results-container">
                    <div className="result-message">{getEncouragingMessage()}</div>

                    <div className="results-stats">
                        <div className="stat-card">
                            <div className="stat-value">{score}</div>
                            <div className="stat-label">Final Score</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-value">{accuracy}%</div>
                            <div className="stat-label">Accuracy</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-value">{formatTime(timer)}</div>
                            <div className="stat-label">Time</div>
                        </div>
                    </div>

                    <div className="results-summary">
                        <h3>Your Answers:</h3>
                        <div className="answers-list">
                            {answers.map((answer, index) => (
                                <div key={index} className={`answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`}>
                                    <span className="answer-question">{answer.question} = </span>
                                    <span className="answer-user">{answer.userAnswer}</span>
                                    {!answer.isCorrect && (
                                        <span className="answer-correct"> (Correct: {answer.correctAnswer})</span>
                                    )}
                                    <span className="answer-icon">{answer.isCorrect ? '✓' : '✗'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="play-again-btn" onClick={() => setGameState('setup')}>
                        🔄 Play Again
                    </button>
                </div>
            </div>
        );
    }
}

export default MathGame;
