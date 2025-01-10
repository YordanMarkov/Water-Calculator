import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import './QuestionPool.css';

function QuestionPool() {
  // State to store the slider value
  const [value, setValue] = useState(1);

  // Update the slider value when it changes
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="slider-container">
      {/* Image representing the pool cover */}
      <img className="coverpool" src={require("../images/all/coverpool.png")} alt="pool cover" />
      
      {/* Slider component to select a value between 1 and 12 */}
      <Slider
        className="slider"
        value={value}
        min={1}
        max={12}
        step={1}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{
          color: "#1D4C1C", // Slider color
          width: `calc(var(--scale) * 561)`, // Dynamic width based on scale
          height: `calc(var(--scale) * 20)`, // Dynamic height based on scale
        }}
      />
      
      {/* Display selected value with the correct month label */}
      <p className="value">{`${value} ${value === 1 ? "месец" : "месеца"}`}</p>
    </div>
  );
}

export default QuestionPool;