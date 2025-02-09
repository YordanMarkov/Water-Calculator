import './QuestionAdvancedSelection.css';
import { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function QuestionAdvancedSelection({ options = [], questionCount = 3, bigImageSrc, selectedOptions, onDishUsageChange, isGreen = false }) {
  const [localSelectedOptions, setLocalSelectedOptions] = useState(() => selectedOptions || []);

  useEffect(() => {
    if (onDishUsageChange && typeof onDishUsageChange === "function") {
      onDishUsageChange(localSelectedOptions); // Always update answers state
    }
  }, [localSelectedOptions]); 
 
  const periods = ["Ден", "Седмица", "Месец", "Година"];

  // Add an option to selected options
  const handleSelect = (option) => {
    if (!localSelectedOptions.some(item => item.option === option)) {
      setLocalSelectedOptions([...localSelectedOptions, { option, times: 0, period: '' }]);
    }
  };

  // Increase or decrease the times count
  const handleTimesChange = (option, operation) => {
    setLocalSelectedOptions(localSelectedOptions.map(item => {
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
    setLocalSelectedOptions(localSelectedOptions.map(item => {
      if (item.option === option) {
        return { ...item, period: newPeriod };
      }
      return item;
    }));
  };

  // Remove an option from selected options
  const handleRemove = (option) => {
    setLocalSelectedOptions(localSelectedOptions.filter(item => item.option !== option));
  };

  // Display only a limited number of options
  const displayedOptions = options.slice(0, Math.min(questionCount, options.length));

  return (
    <div className="picture-selectable-questions">
      <img className="big-img" src={bigImageSrc || require("../images/all/dish.png")} alt="Big illustration" />
      <div className="selectable-questions">
        {displayedOptions.map((option) => {
          const selectedItem = localSelectedOptions.find(item => item.option === option);
          const isSelected = !!selectedItem;

          return (
            <div className="question-row" key={option}>
              {isSelected && (
                <img
                  className="operational-sign remove red"
                  src={require("../images/all/x.svg").default}
                  alt="remove"
                  onClick={() => handleRemove(option)}
                />
              )}
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
              {isSelected && (
                <div className="control-details">
                  <img
                    className={`operational-sign ${selectedItem.times === 0 ? "disabled" : ""}`}
                    src={require("../images/all/minus.svg").default}
                    alt="minus"
                    onClick={() => handleTimesChange(option, "decrease")}
                  />
                  <span className="count">{selectedItem.times}</span>
                  <img
                    className="operational-sign"
                    src={require("../images/all/plus.svg").default}
                    alt="plus"
                    onClick={() => handleTimesChange(option, "increase")}
                  />
                  <span className="period-label">{selectedItem.times === 1 ? "път" : "пъти"} на</span>
                  
                  <FormControl sx={{ minWidth: 200, marginTop: 2 }}>
                    <InputLabel
                      sx={{
                        fontSize: 'calc(var(--scale) * 25)',
                        fontFamily: 'Comfortaa, sans-serif',
                        color: 'white',
                        textAlign: 'center',
                        width: 'calc(var(--scale) * 424)',
                        opacity: selectedItem.period === '' ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                      }}
                      shrink={selectedItem.period !== ''}
                    >
                      Изберете...
                    </InputLabel>
                    <Select
                      value={selectedItem.period}
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
