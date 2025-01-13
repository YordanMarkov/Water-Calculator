import React from 'react';
import './Progress.css';

function Progress({ currentQuestionIndex }) {
    const maxSteps = 32;

    const getColor = (index) => {
        if (index <= 11) return '#0E4B9A'; // First 12 steps (questions)
        if (index <= 19) return '#119A0E'; // Next 8 steps (questions)
        return '#4B39C3'; // Last 13 steps (questions)
    };

    return (
        <div className="progress-container">
            {[...Array(maxSteps + 1).keys()].map((index) => (
                <div
                    key={index}
                    className={`progress-step ${index <= currentQuestionIndex ? 'active' : ''}`}
                    style={{
                        backgroundColor: index <= currentQuestionIndex ? getColor(index) : '#ccc',
                    }}
                ></div>
            ))}
        </div>
    );
}

export default Progress;