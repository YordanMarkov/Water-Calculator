import './QuestionBath.css';
import { useState } from 'react';

function QuestionBath() {
    const [times, setTimes] = useState(0);
    const [period, setPeriod] = useState("Дневно");

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

    const handlePeriodChange = (operation) => {
        const periods = ["Дневно", "Седмично", "Месечно", "Годишно"];
        const currentPeriodIndex = periods.indexOf(period);

        if (operation === "increase" && period !== "Годишно") {
        const nextPeriodIndex = (currentPeriodIndex + 1) % periods.length;
        setPeriod(periods[nextPeriodIndex]);
        } else if (operation === "decrease" && period !== "Дневно") {
        const prevPeriodIndex = (currentPeriodIndex - 1 + periods.length) % periods.length;
        setPeriod(periods[prevPeriodIndex]);
        }
    };

    const getButtonStyle = (isDisabled) => {
        return isDisabled ? { filter: 'grayscale(100%)', cursor: 'not-allowed' } : {};
    };

    return (
        <div className="question-bath">
        <div className="plus-minus-menu">
            <img
            className="operational-sign"
            src={require("../images/all/minus.svg").default}
            alt="minus"
            onClick={() => handleTimesChange("decrease")}
            style={times === 0 ? getButtonStyle(true) : {}}
            />
            <p className="times-bath">{times}</p>
            <img
            className="operational-sign"
            src={require("../images/all/plus.svg").default}
            alt="plus"
            onClick={() => handleTimesChange("increase")}
            />
        </div>
        <img className="bathtub" src={require("../images/all/bath.png")} alt="bathtub" />
        <div className="plus-minus-menu">
            <img
            className="operational-sign"
            src={require("../images/all/minus.svg").default}
            alt="minus"
            onClick={() => handlePeriodChange("decrease")}
            style={period === "Дневно" ? getButtonStyle(true) : {}}
            />
            <p className="period-bath">{period}</p>
            <img
            className="operational-sign"
            src={require("../images/all/plus.svg").default}
            alt="plus"
            onClick={() => handlePeriodChange("increase")}
            style={period === "Годишно" ? getButtonStyle(true) : {}}
            />
        </div>
        </div>
    );
}

export default QuestionBath;
