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

          // Fix the thumb size here (the sliding dot)
          '& .MuiSlider-thumb': {
            width: `calc(var(--scale) * 28)`,  // you can tweak this value to fit your design
            height: `calc(var(--scale) * 28)`,

            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: `0 0 calc(var(--scale) * 16) rgba(14, 75, 154, 0.3)`,  // Adjust the aura size & color here
            },
          },

          '& .MuiSlider-rail': {
            height: `calc(var(--scale) * 20)`,
          },

          '& .MuiSlider-track': {
            height: `calc(var(--scale) * 20)`,
          },

           // === VALUE LABEL (the box above the thumb) ===
          '& .MuiSlider-valueLabel': {
            fontSize: `calc(var(--scale) * 16)`, // you can go smaller or bigger
            padding: `calc(var(--scale) * 4) calc(var(--scale) * 8)`,
            '&::before': {
                display: 'none',
            },
          },
        }}
      />
      <p className="value">{selectedPeople || 1}</p>
    </div>
  );
}

export default QuestionPeople;