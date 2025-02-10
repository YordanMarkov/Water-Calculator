import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import './QuestionPool.css';

function QuestionPool({ onPoolMonthsChange }) {
  const [value, setValue] = useState(1); // Default value is 1 month

  // Update slider value and notify the parent
  const handleChange = (event, newValue) => {
    setValue(newValue);
    onPoolMonthsChange(newValue); // Call the parent's update function
  };

  return (
    <div className="slider-container">
      <img className="coverpool" src={require("../images/all/coverpool.png")} alt="pool cover" />
      
      <Slider
        className="slider"
        value={value}
        min={1}
        max={12}
        step={1}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{
          color: "#1D4C1C",
          width: `calc(var(--scale) * 561)`,
          height: `calc(var(--scale) * 20)`,
        }}
      />
      
      <p className="value">{`${value} ${value === 1 ? "месец" : "месеца"}`}</p>
    </div>
  );
}

export default QuestionPool;
