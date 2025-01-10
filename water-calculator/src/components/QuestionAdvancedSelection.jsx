import './QuestionAdvancedSelection.css';
import { useState } from 'react';

function QuestionAdvancedSelection({ options = [], questionCount = 3, bigImageSrc, isGreen = false }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const periods = ["Ден", "Седмица", "Месец", "Година"];

  // Add an option to selected options
  const handleSelect = (option) => {
    if (!selectedOptions.some(item => item.option === option)) {
      setSelectedOptions([...selectedOptions, { option, times: 0, periodIndex: 0 }]);
    }
  };

  // Increase or decrease the times count
  const handleTimesChange = (option, operation) => {
    setSelectedOptions(selectedOptions.map(item => {
      if (item.option === option) {
        const newTimes = operation === "increase" ? item.times + 1 : Math.max(item.times - 1, 0);
        return { ...item, times: newTimes };
      }
      return item;
    }));
  };

  // Change the period (e.g., day, week)
  const handlePeriodChange = (option, operation) => {
    setSelectedOptions(selectedOptions.map(item => {
      if (item.option === option) {
        const newIndex =
          operation === "increase"
            ? Math.min(item.periodIndex + 1, periods.length - 1)
            : Math.max(item.periodIndex - 1, 0);
        return { ...item, periodIndex: newIndex };
      }
      return item;
    }));
  };

  // Remove an option from selected options
  const handleRemove = (option) => {
    setSelectedOptions(selectedOptions.filter(item => item.option !== option));
  };

  // Display only a limited number of options
  const displayedOptions = options.slice(0, Math.min(questionCount, options.length));

  return (
    <div className="picture-selectable-questions">
      {/* Display main image */}
      <img className="big-img" src={bigImageSrc || require("../images/all/dish.png")} alt="Big illustration" />
      <div className="selectable-questions">
        {displayedOptions.map((option) => {
          const isSelected = selectedOptions.some(item => item.option === option);

          return (
            <div className="question-row" key={option}>
              {/* Remove button for selected options */}
              {isSelected && (
                <img
                  className="operational-sign remove red"
                  src={require("../images/all/x.svg").default}
                  alt="remove"
                  onClick={() => handleRemove(option)}
                />
              )}
              {/* Option selection button */}
              <button
                className={`selection ${isSelected ? "selected" : ""}`}
                onClick={() => handleSelect(option)}
                style={
                  !isSelected && isGreen
                    ? { backgroundColor: '#119A0E', color: '#FFFFFF' }
                    : {}
                }
              >
                {option}
              </button>
              {/* Controls for selected options */}
              {isSelected && (
                <div className="control-details">
                  {/* Adjust times */}
                  <img
                    className={`operational-sign ${selectedOptions.find(item => item.option === option).times === 0 ? "disabled" : ""}`}
                    src={require("../images/all/minus.svg").default}
                    alt="minus"
                    onClick={() => handleTimesChange(option, "decrease")}
                  />
                  <span className="count">{selectedOptions.find(item => item.option === option).times}</span>
                  <img
                    className="operational-sign"
                    src={require("../images/all/plus.svg").default}
                    alt="plus"
                    onClick={() => handleTimesChange(option, "increase")}
                  />
                  <span className="period-label">път(и) на</span>
                  {/* Adjust period */}
                  <img
                    className={`operational-sign minus ${selectedOptions.find(item => item.option === option).periodIndex === 0 ? "disabled" : ""}`}
                    src={require("../images/all/minus.svg").default}
                    alt="minus period"
                    onClick={() => handlePeriodChange(option, "decrease")}
                  />
                  <span className="period">{periods[selectedOptions.find(item => item.option === option).periodIndex]}</span>
                  <img
                    className={`operational-sign plus ${selectedOptions.find(item => item.option === option).periodIndex === periods.length - 1 ? "disabled" : ""}`}
                    src={require("../images/all/plus.svg").default}
                    alt="plus period"
                    onClick={() => handlePeriodChange(option, "increase")}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionAdvancedSelection;