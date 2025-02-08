import React from "react";
import Slider from "@mui/material/Slider";
import './QuestionPeople.css';

function QuestionPeople({ selectedPeople, onPeopleChange }) {
  const handleChange = (event, newValue) => {
    onPeopleChange(newValue); // Update the state in App.js
  };

  const people = Array.from({ length: selectedPeople || 1 }, (_, i) => (
    <img
      key={i}
      className="person"
      src={require("../images/all/person.svg").default}
      alt="person"
      style={{
        width: `calc(var(--scale) * ${Math.min(105, 561 / (selectedPeople || 1))})`,
        height: `calc(var(--scale) * ${Math.min(120, 561 / (selectedPeople || 1))})`,
      }}
    />
  ));

  return (
    <div className="slider-container">
      <div className="people">{people}</div>
      <Slider
        className="slider"
        value={selectedPeople || 1}
        min={1}
        max={20}
        step={1}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{
          color: "#0E4B9A",
          width: `calc(var(--scale) * 561)`,
          height: `calc(var(--scale) * 20)`,
        }}
      />
      <p className="value">{selectedPeople || 1}</p>
    </div>
  );
}

export default QuestionPeople;