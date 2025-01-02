import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import './QuestionBG.css';

function QuestionBG() {
  const [selectedArea, setSelectedArea] = useState('');

  const handleSelectChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const area = [
    "Благоевград", "Добрич", "Плевен", "София",
    "Бургас", "Кърджали", "Пловдив", "София (столица)",
    "Варна", "Кюстендил", "Разград", "Стара Загора",
    "Велико Търново", "Ловеч", "Русе", "Търговище",
    "Видин", "Монтана", "Силистра", "Хасково",
    "Враца", "Пазарджик", "Сливен", "Шумен",
    "Габрово", "Перник", "Смолян", "Ямбол"
  ];

  return (
    <div className="bulgaria-container">
      <img className="bulgaria" src={require("../images/all/bg.png")} alt="Bulgaria" />

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
          shrink={selectedArea ? true : false}
        >
          Изберете област
        </InputLabel>
        <Select
          value={selectedArea}
          onChange={handleSelectChange}
          sx={{
            backgroundColor: '#6C4CFF',
            width: 'calc(var(--scale) * 424)',
            borderRadius: 'calc(var(--scale) * 30)',
            color: 'white',
            fontSize: 'calc(var(--scale) * 25)',
            fontFamily: 'Comfortaa, sans-serif',
            textAlign: 'center',
            transition: '0.3s opacity',
            '.MuiSelect-icon': {
              color: 'white',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&:hover': {
              opacity: 0.8,
              transition: '0.3s opacity',
            },
            '& .MuiSelect-select': {
              paddingLeft: 0,
              paddingRight: 0,
            },
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
