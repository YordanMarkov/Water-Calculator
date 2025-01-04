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

  const areaImageMap = {
    "Благоевград": require("../images/all/areas/Blagoevgrad.svg").default,
    "Добрич": require("../images/all/areas/Dobrich.svg").default,
    "Плевен": require("../images/all/areas/Pleven.svg").default,
    "София": require("../images/all/areas/Sofiiska.svg").default,
    "Бургас": require("../images/all/areas/Burgas.svg").default,
    "Кърджали": require("../images/all/areas/Kurdzhali.svg").default,
    "Пловдив": require("../images/all/areas/Plovdiv.svg").default,
    "София (столица)": require("../images/all/areas/Sofia.svg").default,
    "Варна": require("../images/all/areas/Varna.svg").default,
    "Кюстендил": require("../images/all/areas/Kyustendil.svg").default,
    "Разград": require("../images/all/areas/Razgrad.svg").default,
    "Стара Загора": require("../images/all/areas/Stara Zagora.svg").default,
    "Велико Търново": require("../images/all/areas/Veliko Turnovo.svg").default,
    "Ловеч": require("../images/all/areas/Lovech.svg").default,
    "Русе": require("../images/all/areas/Ruse.svg").default,
    "Търговище": require("../images/all/areas/Turnovo.svg").default,
    "Видин": require("../images/all/areas/Vidin.svg").default,
    "Монтана": require("../images/all/areas/Montana.svg").default,
    "Силистра": require("../images/all/areas/Silistra.svg").default,
    "Хасково": require("../images/all/areas/Haskovo.svg").default,
    "Враца": require("../images/all/areas/Vratsa.svg").default,
    "Пазарджик": require("../images/all/areas/Pazardzhik.svg").default,
    "Сливен": require("../images/all/areas/Sliven.svg").default,
    "Шумен": require("../images/all/areas/Shumen.svg").default,
    "Габрово": require("../images/all/areas/Gabrovo.svg").default,
    "Перник": require("../images/all/areas/Pernik.svg").default,
    "Смолян": require("../images/all/areas/Smolyan.svg").default,
    "Ямбол": require("../images/all/areas/Yambol.svg").default,
  };

  const getImageSource = () => {
    return areaImageMap[selectedArea] || require("../images/all/bg.png");
  };

  return (
    <div className="bulgaria-container">
      <img className="bulgaria" src={getImageSource()} alt="Bulgaria" />

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