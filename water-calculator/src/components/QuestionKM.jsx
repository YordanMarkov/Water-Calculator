import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import './QuestionKM.css';

function QuestionKM({ selectedKm, onKmChange }) {
    const ranges = [0, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500];
    const [value, setValue] = useState(selectedKm || 0);

    useEffect(() => {
        setValue(selectedKm || 0);
    }, [selectedKm]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        onKmChange(newValue);
    };

    const marks = ranges.map((range) => ({ value: range }));

    return (
        <div className="slider-container">
            <img className="car-trees" src={require("../images/all/car-trees.png")} alt="car trees" />

            <Slider
                className="slider"
                value={value}
                min={ranges[0]}
                max={ranges[ranges.length - 1]}
                step={null}
                marks={marks}
                onChange={handleChange}
                valueLabelDisplay="auto"
                sx={{
                    color: "#4B39C3",
                    width: `calc(var(--scale) * 561)`,
                    height: `calc(var(--scale) * 20)`,

                    '& .MuiSlider-thumb': {
                        width: `calc(var(--scale) * 28)`,
                        height: `calc(var(--scale) * 28)`,
                        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                            boxShadow: `0 0 calc(var(--scale) * 16) rgba(75, 57, 195, 0.3)`,
                        },
                    },

                    '& .MuiSlider-rail': {
                        height: `calc(var(--scale) * 20)`,
                    },

                    '& .MuiSlider-track': {
                        height: `calc(var(--scale) * 20)`,
                    },

                    '& .MuiSlider-valueLabel': {
                        fontSize: `calc(var(--scale) * 16)`,
                        padding: `calc(var(--scale) * 4) calc(var(--scale) * 8)`,
                        '&::before': {
                            display: 'none',
                        },
                    },
                }}
            />

            <p className="value">
                {value === ranges[0]
                    ? "0 - 250 километра"
                    : `${value - 250} - ${value} километра`}
            </p>
        </div>
    );
}

export default QuestionKM;
