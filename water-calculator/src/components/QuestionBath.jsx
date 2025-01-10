import './QuestionBath.css';
import { useState } from 'react';

function QuestionBath() {
    const [times, setTimes] = useState(0); // Tracks how many times
    const [period, setPeriod] = useState("Дневно"); // Tracks the selected period

    // Handles increment or decrement of times
    const handleTimesChange = (operation) => {
        setTimes(prevTimes => {
            if (operation === "increase") {
                return prevTimes + 1;
            } else if (operation === "decrease" && prevTimes > 0) {
                return prevTimes - 1;
            }
            return prevTimes;
        });
    };

    // Handles period changes
    const handlePeriodChange = (operation) => {
        const periods = ["Дневно", "Седмично", "Месечно", "Годишно"]; // Available periods
        const currentPeriodIndex = periods.indexOf(period); // Current index of the period

        if (operation === "increase" && period !== "Годишно") {
            // Move to the next period
            const nextPeriodIndex = (currentPeriodIndex + 1) % periods.length;
            setPeriod(periods[nextPeriodIndex]);
        } else if (operation === "decrease" && period !== "Дневно") {
            // Move to the previous period
            const prevPeriodIndex = (currentPeriodIndex - 1 + periods.length) % periods.length;
            setPeriod(periods[prevPeriodIndex]);
        }
    };

    // Styles disabled buttons
    const getButtonStyle = (isDisabled) => {
        return isDisabled ? { filter: 'grayscale(100%)', cursor: 'not-allowed' } : {};
    };

    return (
        <div className="question-bath">
            <div className="plus-minus-menu">
                {/* Decrease times */}
                <img
                    className="operational-sign"
                    src={require("../images/all/minus.svg").default}
                    alt="minus"
                    onClick={() => handleTimesChange("decrease")}
                    style={times === 0 ? getButtonStyle(true) : {}} // Disable if times is 0
                />
                <p className="times-bath">{times}</p> {/* Display times */}
                {/* Increase times */}
                <img
                    className="operational-sign"
                    src={require("../images/all/plus.svg").default}
                    alt="plus"
                    onClick={() => handleTimesChange("increase")}
                />
            </div>
            {/* Display bathtub image */}
            <img className="bathtub" src={require("../images/all/bath.png")} alt="bathtub" />
            <div className="plus-minus-menu">
                {/* Decrease period */}
                <img
                    className="operational-sign"
                    src={require("../images/all/minus.svg").default}
                    alt="minus"
                    onClick={() => handlePeriodChange("decrease")}
                    style={period === "Дневно" ? getButtonStyle(true) : {}} // Disable if period is "Дневно"
                />
                <p className="period-bath">{period}</p> {/* Display period */}
                {/* Increase period */}
                <img
                    className="operational-sign"
                    src={require("../images/all/plus.svg").default}
                    alt="plus"
                    onClick={() => handlePeriodChange("increase")}
                    style={period === "Годишно" ? getButtonStyle(true) : {}} // Disable if period is "Годишно"
                />
            </div>
        </div>
    );
}

export default QuestionBath;