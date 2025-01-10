import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import './QuestionEl.css';

function QuestionEl() {
  const [sliderValue, setSliderValue] = useState(50); // Initial value set to 50

  // Handle slider value change
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue); // Update slider value
  };

  const valueHome = 100 - sliderValue; // Home percentage
  const valueEl = sliderValue; // El. central percentage

  return (
    <div className="el-container">
      {/* Separation image */}
      <img className="el-separation" src={require("../images/all/el_seperation.png")} alt="El-separation" />
      
      {/* Display home percentage */}
      <p className="value-home">{valueHome}%</p>
      
      {/* Display electric central percentage */}
      <p className="value-el">{valueEl}%</p>
      
      {/* Text indicating home */}
      <p className="at-home">У дома</p>
      
      {/* Text indicating electric central */}
      <p className="el-cent">Ел. централа</p>

      {/* Slider for adjusting the values */}
      <Slider
        value={sliderValue}
        onChange={handleSliderChange}
        aria-label="Slider"
        valueLabelDisplay="off"
        sx={{
          color: "#4B39C3", // Slider color
          width: `calc(var(--scale) * 561)`, // Dynamic width based on scale
          height: `calc(var(--scale) * 20)`, // Dynamic height based on scale
          '& .MuiSlider-track': {
            backgroundColor: 'transparent', // Transparent track
            border: 'none'
          },
          '& .MuiSlider-thumb': {
            width: `calc(var(--scale) * 70)`, // Dynamic thumb width
            height: `calc(var(--scale) * 20)`, // Dynamic thumb height
            borderRadius: 'calc(var(--scale) * 30)', // Rounded thumb
          }
        }}
      />
    </div>
  );
}

export default QuestionEl;