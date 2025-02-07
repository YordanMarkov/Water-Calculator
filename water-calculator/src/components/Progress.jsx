import React from 'react';
import './Progress.css';

function Progress({ currentQuestionIndex, setCurrentQuestionIndex }) {
    const handleNavigation = (index) => {
        setCurrentQuestionIndex(index); // Navigate to the specific question
    };

    const maxSteps = 33;

    const getColor = (index) => {
        if (index <= 13) return '#0E4B9A'; // First 12 steps (questions)
        if (index <= 21) return '#119A0E'; // Next 8 steps (questions)
        return '#4B39C3'; // Last 13 steps (questions)
    };

    return (
        <div className="progress-container">
            {[...Array(maxSteps).keys()].map((index) => {
                const stepNumber = index + 1; // Skip 0 and start from 1
                return (
                    <div
                        key={stepNumber}
                        className={`progress-step ${stepNumber <= currentQuestionIndex ? 'active' : ''}`}
                        style={{
                            backgroundColor: stepNumber <= currentQuestionIndex ? getColor(stepNumber) : '#ccc',
                        }}
                        onClick={() => handleNavigation(stepNumber)} // Add click handler
                    ></div>
                );
            })}
        </div>
    );
}

export default Progress;