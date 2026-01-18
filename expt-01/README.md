# Expt-01: React Math Utilities

A simple and elegant ReactJS application featuring three mathematical utilities: factorial calculator, Fibonacci series generator, and prime number checker.

## Features

### 1. Factorial Calculator
- Calculates factorial of any non-negative integer
- Maximum limit: 170 (to prevent overflow)
- Input validation and error handling

### 2. Fibonacci Series Generator
- Generates Fibonacci series up to n terms
- Visual display with numbered badges
- Maximum limit: 50 terms

### 3. Prime Number Checker
- Checks if a number is prime
- Efficient algorithm using square root optimization
- Color-coded results (green for prime, red for non-prime)

## Running the Application

### Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

## Technical Details

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (clean, simple design)

## Recent Updates

### Version 1.1 (Latest)
- ✅ Renamed project from `react-math-app` to `expt-01`
- ✅ Fixed bug where previous results persisted when input fields were cleared
- ✅ Results now disappear immediately when user modifies input

### Version 1.0
- Initial implementation with three math utilities
- Clean, card-based responsive design
- Comprehensive input validation
