import './QuestionAdvancedSelection.css';
import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function QuestionAdvancedSelection({ options = [], questionCount = 3, bigImageSrc, isGreen = false }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const periods = ["Ден", "Седмица", "Месец", "Година"];

  // Add an option to selected options
  const handleSelect = (option) => {
    if (!selectedOptions.some(item => item.option === option)) {
      setSelectedOptions([...selectedOptions, { option, times: 0, period: '' }]); // Initialize period as ''
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

  // Change the period using the Select dropdown
  const handlePeriodChange = (option, event) => {
    const newPeriod = event.target.value;
    setSelectedOptions(selectedOptions.map(item => {
      if (item.option === option) {
        return { ...item, period: newPeriod }; // Update period directly
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
                  <span className="period-label">{selectedOptions.find(item => item.option === option).times === 1 ? "път" : "пъти"} на</span>
                  {/* Period selection dropdown */}
                  <FormControl sx={{ minWidth: 200, marginTop: 2 }}>
                    <InputLabel
                      sx={{
                        fontSize: 'calc(var(--scale) * 25)',
                        fontFamily: 'Comfortaa, sans-serif',
                        color: 'white',
                        textAlign: 'center',
                        width: 'calc(var(--scale) * 424)',
                        opacity: selectedOptions.find(item => item.option === option).period === '' ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                      }}
                      shrink={selectedOptions.find(item => item.option === option).period !== ''}
                    >
                      Изберете...
                    </InputLabel>
                    <Select
                      value={selectedOptions.find(item => item.option === option).period}
                      onChange={(e) => handlePeriodChange(option, e)}
                      sx={{
                        backgroundColor: isGreen ? '#1D4C1C' : '#1C274C',
                        width: 'calc(var(--scale) * 224)',
                        borderRadius: 'calc(var(--scale) * 30)',
                        color: 'white',
                        fontSize: 'calc(var(--scale) * 25)',
                        fontFamily: 'Comfortaa, sans-serif',
                        textAlign: 'center',
                        transition: '0.3s opacity',
                        '.MuiSelect-icon': {
                          color: 'white',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                        '&:hover': {
                          opacity: 0.8,
                          transition: '0.3s opacity',
                        },
                        '& .MuiSelect-select': {
                          paddingLeft: 0,
                          paddingRight: 0,
                        },
                      }}
                    >
                      {periods.map((period, index) => (
                        <MenuItem key={index} value={period}>{period}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
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
