import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import './QuestionKM.css';

function QuestionKM() {
  const ranges = [0, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500];
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const marks = ranges.map((range) => ({ value: range })); // For smooth snapping if needed

  return (
    <div className="slider-container">
      <img className="car-trees" src={require("../images/all/car-trees.png")} alt="car trees" />
      <Slider
        className="slider"
        value={value}
        min={ranges[0]}
        max={ranges[ranges.length - 1]}
        step={null} // Removes intermediate steps
        marks={marks}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{
          color: "#4B39C3",
          width: `calc(var(--scale) * 561)`,
          height: `calc(var(--scale) * 20)`,
        }}
      />
      <p className="value">
        {value === ranges[0]
          ? "0 - 250 километра"
          : `${value - 250} - ${value} километра`}
      </p>
    </div>
  );
}

export default QuestionKM;
