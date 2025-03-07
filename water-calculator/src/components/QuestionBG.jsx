import React from 'react';
import { Select, MenuItem, FormControl } from "@mui/material";
import './QuestionBG.css';

function QuestionBG({ selectedArea, onAreaChange }) {
  const areas = ["София-град"]; // Add more areas here if needed

  const areaImageMap = {
    "София-град": require("../images/all/areas/bg-map-sofia.png"),
  };

  const getImageSource = () => {
    return areaImageMap[selectedArea] || require("../images/all/bg-map.png");
  };

  return (
    <div className="bulgaria-container">
      <img className="bulgaria" src={getImageSource()} alt="Bulgaria" />

      <FormControl
        sx={{
          minWidth: `calc(var(--scale) * 424)`,
          marginTop: `calc(var(--scale) * 20)`,
        }}
      >
        <Select
          displayEmpty
          value={selectedArea || ""}
          onChange={(event) => onAreaChange(event.target.value)}
          sx={{
            backgroundColor: '#1C274C',
            width: 'calc(var(--scale) * 424)',
            height: 'calc(var(--scale) * 60)',
            borderRadius: 'calc(var(--scale) * 30)',
            color: 'white',
            fontSize: 'calc(var(--scale) * 25)',
            fontFamily: 'Comfortaa, sans-serif',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: `calc(var(--scale) * 16)`,
            paddingRight: `calc(var(--scale) * 16)`,

            '.MuiSelect-icon': {
              color: 'white',
              right: `calc(var(--scale) * 16)`,
            },

            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },

            '&:hover': {
              opacity: 0.8,
              transition: 'opacity 0.3s',
            },

            '& .MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            },
          }}
        >
          {/* This acts as a placeholder */}
          <MenuItem
            disabled
            value=""
            sx={{
              fontSize: 'calc(var(--scale) * 25)',
              textAlign: 'center',
              opacity: 0.5,
              fontFamily: 'Comfortaa, sans-serif',
            }}
          >
            Изберете област
          </MenuItem>

          {areas.map((area, index) => (
            <MenuItem
              key={index}
              value={area}
              sx={{
                fontSize: 'calc(var(--scale) * 25)',
                fontFamily: 'Comfortaa, sans-serif',
                textAlign: 'center',
              }}
            >
              {area}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default QuestionBG;
