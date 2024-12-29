import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import './QuestionPeople.css';

function Question1() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const people = Array.from({ length: value }, (_, i) => (
    <img
      key={i}
      className="person"
      src={require("../images/all/person.svg").default}
      alt="person"
      style={{
        width: `calc(var(--scale) * ${Math.min(105, 561 / value)})`,
        height: `calc(var(--scale) * ${Math.min(120, 561 / value)})`,
      }}
    />
  ));

  return (
    <div className="slider-container">
      <div className="people">{people}</div>
      <Slider
        className="slider"
        value={value}
        min={1}
        max={20}
        step={1}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{
          color: "#1976d2",
          width: `calc(var(--scale) * 561)`,
          height: `calc(var(--scale) * 20)`,
        }}
      />
      <p className="value">{value}</p>
    </div>
  );
}

export default Question1;
