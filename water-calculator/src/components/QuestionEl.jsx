import React from 'react';
import Slider from '@mui/material/Slider';
import './QuestionEl.css';

function QuestionEl({ sliderValue, onSliderChange }) {
  const valueHome = 100 - sliderValue; // Home percentage
  const valueEl = sliderValue; // El. central percentage

  return (
    <div className="el-container">
      <img className="el-separation" src={require("../images/all/el_seperation.png")} alt="El-separation" />
      
      <p className="value-home">{valueHome}%</p>
      <p className="value-el">{valueEl}%</p>
      <p className="at-home">У дома</p>
      <p className="el-cent">Ел. централа</p>

      <Slider
        value={sliderValue}
        onChange={onSliderChange}
        aria-label="Slider"
        valueLabelDisplay="off"
        sx={{
          color: "#4B39C3",
          width: `calc(var(--scale) * 561)`,
          height: `calc(var(--scale) * 20)`,
          '& .MuiSlider-track': {
            backgroundColor: 'transparent',
            border: 'none'
          },
          '& .MuiSlider-thumb': {
            width: `calc(var(--scale) * 70)`,
            height: `calc(var(--scale) * 20)`,
            borderRadius: 'calc(var(--scale) * 30)',
          }
        }}
      />
    </div>
  );
}

export default QuestionEl;