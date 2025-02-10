import React, { useState, useEffect, useRef } from "react";
import Slider from "@mui/material/Slider";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import './QuestionGarden.css';

function QuestionGarden({ onGardenUsageChange, selectedTimes, selectedPeriod }) {
  const [value, setValue] = useState(1); // Initial value set to 1
  const [times, setTimes] = useState(selectedTimes || 0); // Tracks watering times
  const [period, setPeriod] = useState(selectedPeriod || ""); // Tracks watering period

  // Ref to store the previous values to compare
  const prevValuesRef = useRef({ times, period, value });

  // Handle the change in slider value
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Handles increment/decrement of times
  const handleTimesChange = (operation) => {
    setTimes((prevTimes) => {
      const newTimes = operation === "increase" ? prevTimes + 1 : Math.max(0, prevTimes - 1);
      onGardenUsageChange(newTimes, period, value); // Update parent state
      return newTimes;
    });
  };

  // Handles period selection change
  const handlePeriodChange = (event) => {
    const newPeriod = event.target.value;
    setPeriod(newPeriod);
    onGardenUsageChange(times, newPeriod, value); // Update parent state
  };

  // Disable style for decrease button
  const getButtonStyle = (isDisabled) => {
    return isDisabled ? { filter: 'grayscale(100%)', cursor: 'not-allowed' } : {};
  };

  const periods = ["Ден", "Седмица", "Месец", "Година"];

  // Marks for the slider, each with a corresponding value and label
  const marks = [
    { value: 1, label: "1 - 10 кв.м." },
    { value: 2, label: "10 - 45 кв.м." },
    { value: 3, label: "45 - 95 кв.м." },
    { value: 4, label: "95 - 450 кв.м." },
    { value: 5, label: "450 кв.м. - 1 декар" },
  ];

  useEffect(() => {
    // Only call onGardenUsageChange if the new values differ from the previous ones
    if (
      times !== prevValuesRef.current.times ||
      period !== prevValuesRef.current.period ||
      value !== prevValuesRef.current.value
    ) {
      onGardenUsageChange(times, period, value);
      prevValuesRef.current = { times, period, value }; // Update the ref with the new values
    }
  }, [times, period, value, onGardenUsageChange]);

  return (
    <div className="slider-container">
      <img className="sprinkler" src={require("../images/all/sprinkler.png")} alt="sprinkler" />

      {/* Slider component to select the garden size */}
      <Slider
        className="slider"
        value={value}
        min={1}
        max={5}
        step={null} // No intermediate steps, only marked values
        marks={marks} // The predefined marks for the slider
        onChange={handleChange} // Handle value change
        valueLabelDisplay="auto" // Display the value label
        sx={{
          color: "#1D4C1C", // Green color for the slider
          width: `calc(var(--scale) * 1200)`, // Set width based on scale
          height: `calc(var(--scale) * 20)`, // Set height based on scale
        }}
      />

      {/* Display the label corresponding to the selected value */}
      <p className="value">{marks.find((mark) => mark.value === value)?.label}</p>

      <div className="input-field-garden">
        <p className="i-use">Поливам</p>
        <div className="plus-minus-menu">
          <img
            className="operational-sign"
            src={require("../images/all/minus.svg").default}
            alt="minus"
            onClick={() => handleTimesChange("decrease")}
            style={times === 0 ? getButtonStyle(true) : {}}
          />
          <p className="times-garden">{times}</p>
          <img
            className="operational-sign"
            src={require("../images/all/plus.svg").default}
            alt="plus"
            onClick={() => handleTimesChange("increase")}
          />
        </div>
        <p className="times-for">{times === 1 ? "път" : "пъти"} на</p>

        {/* Period selection */}
        <FormControl sx={{ minWidth: 200, marginTop: 2 }}>
          <InputLabel
            sx={{
              fontSize: 'calc(var(--scale) * 25)',
              fontFamily: 'Comfortaa, sans-serif',
              color: 'white',
              textAlign: 'center',
              width: 'calc(var(--scale) * 424)',
              opacity: period ? 0 : 1,
              transition: 'opacity 0.3s ease',
            }}
            shrink={!!period}
          >
            Изберете...
          </InputLabel>
          <Select
            value={period}
            onChange={handlePeriodChange}
            sx={{
              backgroundColor: '#1D4C1C',
              width: 'calc(var(--scale) * 224)',
              borderRadius: 'calc(var(--scale) * 30)',
              color: 'white',
              fontSize: 'calc(var(--scale) * 25)',
              fontFamily: 'Comfortaa, sans-serif',
              textAlign: 'center',
              transition: '0.3s opacity',
              ".MuiSelect-icon": {
                color: "white",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              "&:hover": {
                opacity: 0.8,
                transition: "0.3s opacity",
              },
              "& .MuiSelect-select": {
                paddingLeft: 0,
                paddingRight: 0,
              },
            }}
          >
            {periods.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default QuestionGarden;
