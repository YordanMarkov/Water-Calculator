import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import './QuestionGarden.css';

function QuestionGarden() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const marks = [
    { value: 1, label: "1 - 50 кв.м." },
    { value: 2, label: "50 - 100 кв.м." },
    { value: 3, label: "100 - 250 кв.м." },
    { value: 4, label: "250 - 500 кв.м." },
    { value: 5, label: "500 кв.м. - 1 декар" },
    { value: 6, label: "1 - 5 декара" },
    { value: 7, label: "5 - 10 декара" },
    { value: 8, label: "10+ декара" },
  ];

  return (
    <div className="slider-container">
      <img className="sprinkler" src={require("../images/all/sprinkler.png")} alt="sprinkler" />
      <Slider
        className="slider"
        value={value}
        min={1}
        max={8}
        step={null}
        marks={marks}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{
          color: "#1D4C1C",
          width: `calc(var(--scale) * 1200)`,
          height: `calc(var(--scale) * 20)`,
        }}
      />
      <p className="value">
        {marks.find((mark) => mark.value === value)?.label}
      </p>
    </div>
  );
}

export default QuestionGarden;
