import { useState } from 'react';

function EmployeeTaxCalculator() {
    const [basicPay, setBasicPay] = useState('');
    const [grade, setGrade] = useState(null);
    const [bonus, setBonus] = useState(null);

    // Calculate salary components
    const calculateSalary = () => {
        const basic = parseFloat(basicPay) || 0;
        const da = basic * 0.30;
        const hra = basic * 0.10;
        const specialAllowance = basic * 0.05;
        const totalSalary = basic + da + hra + specialAllowance;

        return {
            basicPay: basic,
            da,
            hra,
            specialAllowance,
            totalSalary
        };
    };

    // Determine grade based on total salary
    const determineGrade = (totalSalary) => {
        if (totalSalary >= 10000 && totalSalary <= 20000) return 'A';
        if (totalSalary >= 20001 && totalSalary <= 30000) return 'B';
        if (totalSalary >= 30001 && totalSalary <= 40000) return 'C';
        if (totalSalary > 40000) return 'EXC';
        return null;
    };

    // Calculate bonus based on grade
    const calculateBonus = (grade, basic) => {
        switch (grade) {
            case 'A': return basic * 0.15;
            case 'B': return basic * 0.12;
            case 'C': return basic * 0.06;
            case 'EXC': return basic * 0.05;
            default: return 0;
        }
    };

    const handleCheckGrade = () => {
        const { totalSalary } = calculateSalary();
        const employeeGrade = determineGrade(totalSalary);
        setGrade(employeeGrade);
        setBonus(null); // Reset bonus when checking grade
    };

    const handleCheckBonus = () => {
        const { basicPay: basic, totalSalary } = calculateSalary();
        const employeeGrade = grade || determineGrade(totalSalary);
        const bonusAmount = calculateBonus(employeeGrade, basic);

        if (!grade) {
            setGrade(employeeGrade);
        }
        setBonus(bonusAmount);
    };

    const handleInputChange = (e) => {
        setBasicPay(e.target.value);
        setGrade(null);
        setBonus(null);
    };

    const salary = calculateSalary();
    const isValidInput = basicPay && parseFloat(basicPay) > 0;

    return (
        <div className="card">
            <h2>Employee Tax Calculator</h2>

            <div className="input-section">
                <div className="input-group">
                    <label htmlFor="basic-pay">Basic Pay (₹):</label>
                    <input
                        id="basic-pay"
                        type="number"
                        value={basicPay}
                        onChange={handleInputChange}
                        placeholder="Enter basic pay"
                    />
                </div>
            </div>

            {isValidInput && (
                <>
                    <div className="salary-breakdown">
                        <h3>Salary Breakdown</h3>
                        <div className="salary-item">
                            <span>Basic Pay:</span>
                            <span>₹ {salary.basicPay.toFixed(2)}</span>
                        </div>
                        <div className="salary-item">
                            <span>DA (30%):</span>
                            <span>₹ {salary.da.toFixed(2)}</span>
                        </div>
                        <div className="salary-item">
                            <span>HRA (10%):</span>
                            <span>₹ {salary.hra.toFixed(2)}</span>
                        </div>
                        <div className="salary-item">
                            <span>Special Allowance (5%):</span>
                            <span>₹ {salary.specialAllowance.toFixed(2)}</span>
                        </div>
                        <div className="salary-item">
                            <span>Total Salary:</span>
                            <span>₹ {salary.totalSalary.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="button-group">
                        <button onClick={handleCheckGrade}>Check Grade</button>
                        <button onClick={handleCheckBonus}>Check Bonus</button>
                    </div>

                    {grade && (
                        <div className={`result grade-result grade-${grade.toLowerCase()}`}>
                            <h3>Employee Grade</h3>
                            <p>Grade: {grade}</p>
                        </div>
                    )}

                    {bonus !== null && (
                        <div className="result bonus-result">
                            <h3>Bonus Amount</h3>
                            <p>₹ {bonus.toFixed(2)}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default EmployeeTaxCalculator;
