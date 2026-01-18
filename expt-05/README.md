# Experiment 05: Interactive Math Game Calculator

A fun and educational ReactJS application that combines a functional calculator with an interactive math game designed for kids to practice their arithmetic skills.

## 🎯 Features

### Calculator Mode
- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Clean Interface**: Simple and intuitive design
- **Responsive**: Works on all screen sizes
- **Visual Feedback**: Clear display showing operations and results

### Math Game Mode
- **Three Difficulty Levels**:
  - Easy: Numbers from 1-10
  - Medium: Numbers from 1-50
  - Hard: Numbers from 1-100

- **Multiple Operations**:
  - ➕ Addition
  - ➖ Subtraction
  - ✖️ Multiplication

- **Engaging Features**:
  - Customizable number of questions (5, 10, or 15)
  - Real-time scoring system
  - Streak bonuses for consecutive correct answers
  - Timer to track performance
  - Encouraging feedback messages
  - Detailed results summary with accuracy percentage

- **Kid-Friendly Design**:
  - Vibrant colors and gradients
  - Smooth animations
  - Emoji feedback
  - Positive reinforcement messages

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

Eg:
```bash
cd "e:\Full Stack\Full Stack Frameworks Notes\Lab Experiments\expt-05"
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎮 How to Play the Math Game

1. **Select Settings**:
   - Choose your difficulty level (Easy, Medium, or Hard)
   - Pick an operation type (Addition, Subtraction, or Multiplication)
   - Select the number of questions you want to answer

2. **Start the Game**:
   - Click the "🚀 Start Game" button
   - Answer each question by typing your answer in the input field
   - Click "Submit" to check your answer

3. **Track Your Progress**:
   - Watch your score increase with correct answers
   - Build up your streak for bonus points
   - Keep an eye on the timer

4. **View Results**:
   - After completing all questions, see your final score
   - Check your accuracy percentage
   - Review all your answers
   - Play again to improve your score!

## 🛠️ Technologies Used

- **React 19.2.0**: Modern UI library
- **Vite 7.2.4**: Fast build tool and dev server
- **CSS3**: Custom styling with gradients and animations
- **JavaScript (ES6+)**: Game logic and state management

## 📁 Project Structure

```
expt-05/
├── src/
│   ├── components/
│   │   ├── Calculator.jsx      # Calculator component
│   │   └── MathGame.jsx         # Math game component
│   ├── App.jsx                  # Main app with mode switching
│   ├── index.css                # Global styles
│   └── main.jsx                 # Entry point
├── public/
├── index.html
├── package.json
└── README.md
```

## 🎨 Design Features

- **Gradient Backgrounds**: Eye-catching purple gradient background
- **Smooth Animations**: Fade-in and slide-in effects
- **Interactive Buttons**: Hover effects and active states
- **Responsive Layout**: Adapts to mobile, tablet, and desktop screens
- **Color-Coded Feedback**: Green for correct, orange for incorrect answers

## 🏆 Scoring System

- **Base Points**: 10 points per correct answer
- **Streak Bonus**: +2 points for each consecutive correct answer
- **Example**: 
  - 1st correct answer: 10 points
  - 2nd correct answer: 12 points (10 + 2×1)
  - 3rd correct answer: 14 points (10 + 2×2)
  - And so on...

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- 📱 Mobile phones (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktop computers (1024px and up)

## 🎓 Educational Benefits

- **Practice Arithmetic**: Reinforces basic math skills
- **Build Confidence**: Positive feedback encourages learning
- **Track Progress**: See improvement over time
- **Adaptive Difficulty**: Choose the right challenge level
- **Time Management**: Learn to work under time pressure

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

This project is part of the Full Stack Frameworks Lab Experiments series.

---

**Enjoy learning math! 🎉📚✨**
