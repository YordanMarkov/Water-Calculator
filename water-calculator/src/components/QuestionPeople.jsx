import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import './QuestionPeople.css';

function Question1() {
  // State to track the number of people (value of the slider)
  const [value, setValue] = useState(1);

  // Handle the change in the slider value
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Generate an array of images representing people, based on the slider value
  const people = Array.from({ length: value }, (_, i) => (
    <img
      key={i}
      className="person"
      src={require("../images/all/person.svg").default}  // Source for person image
      alt="person"
      style={{
        width: `calc(var(--scale) * ${Math.min(105, 561 / value)})`,  // Dynamically scale width
        height: `calc(var(--scale) * ${Math.min(120, 561 / value)})`,  // Dynamically scale height
      }}
    />
  ));

  return (
    <div className="slider-container">
      {/* Display the people based on the slider value */}
      <div className="people">{people}</div>

      {/* Slider component to adjust the number of people */}
      <Slider
        className="slider"
        value={value}  // Current value of the slider
        min={1}  // Minimum number of people
        max={20}  // Maximum number of people
        step={1}  // Increment step by 1
        onChange={handleChange}  // Handle value change
        valueLabelDisplay="auto"  // Show value label on the slider
        sx={{
          color: "#0E4B9A",  // Color for the slider
          width: `calc(var(--scale) * 561)`,  // Set width based on scale
          height: `calc(var(--scale) * 20)`,  // Set height based on scale
        }}
      />

      {/* Display the current value */}
      <p className="value">{value}</p>
    </div>
  );
}

export default Question1;