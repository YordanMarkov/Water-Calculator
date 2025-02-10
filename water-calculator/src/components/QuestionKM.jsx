import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import './QuestionKM.css';

function QuestionKM({ selectedKm, onKmChange }) {
  // Define the range of possible values
  const ranges = [0, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500];
  
  // State to track the current value of the slider, initialized from props
  const [value, setValue] = useState(selectedKm || 0);

  useEffect(() => {
    setValue(selectedKm || 0);
  }, [selectedKm]);

  // Handle the change in slider value
  const handleChange = (event, newValue) => {
    setValue(newValue);
    onKmChange(newValue);
  };

  // Define the marks for the slider (each range)
  const marks = ranges.map((range) => ({ value: range })); // For smooth snapping if needed

  return (
    <div className="slider-container">
      <img className="car-trees" src={require("../images/all/car-trees.png")} alt="car trees" />
      
      {/* Slider component to adjust the kilometers */}
      <Slider
        className="slider"
        value={value}
        min={ranges[0]}
        max={ranges[ranges.length - 1]}
        step={null} // Removes intermediate steps, so it snaps to the specified ranges
        marks={marks}  // The predefined marks for the slider
        onChange={handleChange}  // Handle value change
        valueLabelDisplay="auto"  // Display the value label
        sx={{
          color: "#4B39C3",  // Purple color for the slider
          width: `calc(var(--scale) * 561)`,  // Set width based on scale
          height: `calc(var(--scale) * 20)`,  // Set height based on scale
        }}
      />
      
      {/* Display the label corresponding to the selected value */}
      <p className="value">
        {value === ranges[0]
          ? "0 - 250 километра"
          : `${value - 250} - ${value} километра`}
      </p>
    </div>
  );
}

export default QuestionKM;