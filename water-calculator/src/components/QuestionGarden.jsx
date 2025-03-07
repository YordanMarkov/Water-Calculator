import React, { useState, useEffect, useRef } from "react";
import Slider from "@mui/material/Slider";
import { Select, MenuItem, FormControl } from "@mui/material";
import './QuestionGarden.css';

function QuestionGarden({ onGardenUsageChange, selectedTimes, selectedPeriod }) {
    const [value, setValue] = useState(1);
    const [times, setTimes] = useState(selectedTimes || 0);
    const [period, setPeriod] = useState(selectedPeriod || "");

    const prevValuesRef = useRef({ times, period, value });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleTimesChange = (operation) => {
        setTimes((prevTimes) => {
            const newTimes = operation === "increase" ? prevTimes + 1 : Math.max(0, prevTimes - 1);
            onGardenUsageChange(newTimes, period, value);
            return newTimes;
        });
    };

    const handlePeriodChange = (event) => {
        const newPeriod = event.target.value;
        setPeriod(newPeriod);
        onGardenUsageChange(times, newPeriod, value);
    };

    const periods = ["Ден", "Седмица", "Месец", "Година"];

    const marks = [
        { value: 1, label: "1 - 10 кв.м." },
        { value: 2, label: "10 - 45 кв.м." },
        { value: 3, label: "45 - 95 кв.м." },
        { value: 4, label: "95 - 450 кв.м." },
        { value: 5, label: "450 кв.м. - 1 декар" },
    ];

    useEffect(() => {
        if (
            times !== prevValuesRef.current.times ||
            period !== prevValuesRef.current.period ||
            value !== prevValuesRef.current.value
        ) {
            onGardenUsageChange(times, period, value);
            prevValuesRef.current = { times, period, value };
        }
    }, [times, period, value, onGardenUsageChange]);

    return (
        <div className="slider-container">
            <img className="sprinkler" src={require("../images/all/sprinkler.png")} alt="sprinkler" />

            <Slider
                className="slider"
                value={value}
                min={1}
                max={5}
                step={null}
                marks={marks}
                onChange={handleChange}
                valueLabelDisplay="off"
                sx={{
                    color: "#1D4C1C",
                    width: `calc(var(--scale) * 1200)`,
                    height: `calc(var(--scale) * 0)`,

                    '& .MuiSlider-rail': {
                        height: `calc(var(--scale) * 20)`,
                    },
                    '& .MuiSlider-track': {
                        height: `calc(var(--scale) * 20)`,
                    },
                    '& .MuiSlider-thumb': {
                        width: `calc(var(--scale) * 28)`,
                        height: `calc(var(--scale) * 28)`,
                        backgroundColor: '#1D4C1C',
                        boxShadow: '0 0 calc(var(--scale) * 12) rgba(29, 76, 28, 0.4)',
                        '&:focus, &:hover, &.Mui-active': {
                            boxShadow: '0 0 calc(var(--scale) * 16) rgba(29, 76, 28, 0.6)',
                        },
                    },
                    '& .MuiSlider-markLabel': {
                        fontSize: `calc(var(--scale) * 16)`,
                        fontFamily: 'Comfortaa, sans-serif',
                    },
                }}
            />

            <p className="value">{marks.find((mark) => mark.value === value)?.label}</p>

            <div className="input-field-garden">
                <p className="i-use-garden">Поливам</p>

                <div className="plus-minus-menu">
                    <img
                        className="operational-sign"
                        src={require("../images/all/minus.svg").default}
                        alt="minus"
                        onClick={() => handleTimesChange("decrease")}
                        style={times === 0 ? { filter: 'grayscale(100%)', cursor: 'not-allowed' } : {}}
                    />
                    <p className="times-garden">{times}</p>
                    <img
                        className="operational-sign"
                        src={require("../images/all/plus.svg").default}
                        alt="plus"
                        onClick={() => handleTimesChange("increase")}
                    />
                </div>

                <p className="times-for-garden">{times === 1 ? "път" : "пъти"} на</p>

                <FormControl
                    sx={{
                        width: 'calc(var(--scale) * 224)',
                        height: 'calc(var(--scale) * 60)',
                        minHeight: 'calc(var(--scale) * 60)',
                        marginTop: `calc(var(--scale) * 8)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Select
                        displayEmpty
                        value={period || ""}
                        onChange={handlePeriodChange}
                        sx={{
                            backgroundColor: '#1D4C1C',
                            width: '100%',
                            height: '100%',
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
                        <MenuItem
                            disabled
                            value=""
                            sx={{
                                fontSize: 'calc(var(--scale) * 25)',
                                fontFamily: 'Comfortaa, sans-serif',
                                textAlign: 'center',
                                opacity: 0.5,
                            }}
                        >
                            Изберете...
                        </MenuItem>

                        {periods.map((option, index) => (
                            <MenuItem
                                key={index}
                                value={option}
                                sx={{
                                    fontSize: 'calc(var(--scale) * 25)',
                                    fontFamily: 'Comfortaa, sans-serif',
                                    textAlign: 'center',
                                }}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default QuestionGarden;
