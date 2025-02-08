import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import './QuestionBG.css';

function QuestionBG({ selectedArea, onAreaChange }) {
  // List of all Bulgarian areas (области)
  const area = ["София-град"];

  // Map of area names to image sources
  const areaImageMap = {
    "София-град": require("../images/all/areas/bg-map-sofia.png"),
  };

  // Get the correct image source based on the selection
  const getImageSource = () => {
    return areaImageMap[selectedArea] || require("../images/all/bg-map.png");
  };

  return (
    <div className="bulgaria-container">
      {/* Display the selected area's image */}
      <img className="bulgaria" src={getImageSource()} alt="Bulgaria" />

      {/* Area selection dropdown */}
      <FormControl sx={{ minWidth: 200, marginTop: 2 }}>
        <InputLabel
          sx={{
            fontSize: 'calc(var(--scale) * 25)',
            fontFamily: 'Comfortaa, sans-serif',
            color: 'white',
            textAlign: 'center',
            width: 'calc(var(--scale) * 424)',
            opacity: selectedArea ? 0 : 1,
            transition: 'opacity 0.3s ease',
          }}
          shrink={!!selectedArea}
        >
          Изберете област
        </InputLabel>
        <Select
          value={selectedArea}
          onChange={(event) => onAreaChange(event.target.value)}
          sx={{
            backgroundColor: '#1C274C',
            width: 'calc(var(--scale) * 424)',
            borderRadius: 'calc(var(--scale) * 30)',
            color: 'white',
            fontSize: 'calc(var(--scale) * 25)',
            fontFamily: 'Comfortaa, sans-serif',
            textAlign: 'center',
            transition: '0.3s opacity',
            '.MuiSelect-icon': { color: 'white' },
            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
            '&:hover': { opacity: 0.8, transition: '0.3s opacity' },
            '& .MuiSelect-select': { paddingLeft: 0, paddingRight: 0 },
          }}
        >
          {area.map((area, index) => (
            <MenuItem key={index} value={area}>
              {area}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default QuestionBG;
