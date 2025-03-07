import './QuestionBath.css';
import { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl } from "@mui/material";

function QuestionBath({ selectedTimes, selectedPeriod, onBathUsageChange, forceNext }) {
    const [times, setTimes] = useState(selectedTimes || 0);
    const [period, setPeriod] = useState(selectedPeriod || "");

    useEffect(() => {
        setTimes(selectedTimes || 0);
        setPeriod(selectedPeriod || "");
    }, [selectedTimes, selectedPeriod]);

    const handleTimesChange = (operation) => {
        setTimes(prevTimes => {
            const newTimes = operation === "increase" ? prevTimes + 1 : Math.max(0, prevTimes - 1);
            onBathUsageChange(newTimes, period);
            return newTimes;
        });
    };

    const handlePeriodChange = (event) => {
        const newPeriod = event.target.value;
        setPeriod(newPeriod);
        onBathUsageChange(times, newPeriod);
    };

    const handleNoUsageAndNext = () => {
        setTimes(0);
        setPeriod("");
        onBathUsageChange(0, "");
        forceNext();
    };

    const options = ['Ден', 'Седмица', 'Месец', 'Година'];

    return (
        <div className="question-bath">
            <div className="bath-button">
                <img className="bathtub" src={require("../images/all/bath.png")} alt="bathtub" />

                {(times === 0 || period === "") && (
                    <div className="no-usage-wrapper">
                        <button className="no-usage-button" onClick={handleNoUsageAndNext}>
                            Не използвам!
                        </button>
                    </div>
                )}
            </div>

            <div className="input-field-bath">
                <p className="i-use">Ползвам вана</p>

                <div className="plus-minus-menu">
                    <img
                        className="operational-sign"
                        src={require("../images/all/minus.svg").default}
                        alt="minus"
                        onClick={() => handleTimesChange("decrease")}
                        style={times === 0 ? { filter: 'grayscale(100%)', cursor: 'not-allowed' } : {}}
                    />
                    <p className="times-bath">{times}</p>
                    <img
                        className="operational-sign"
                        src={require("../images/all/plus.svg").default}
                        alt="plus"
                        onClick={() => handleTimesChange("increase")}
                    />
                </div>

                <p className="times-for">{times === 1 ? "път" : "пъти"} на</p>

                <FormControl
                    sx={{
                        width: 'calc(var(--scale) * 224)',
                        marginTop: `calc(var(--scale) * 8)`,
                    }}
                >
                    <Select
                        displayEmpty
                        value={period || ""}
                        onChange={handlePeriodChange}
                        sx={{
                            backgroundColor: '#1C274C',
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

                        {options.map((option, index) => (
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

export default QuestionBath;
