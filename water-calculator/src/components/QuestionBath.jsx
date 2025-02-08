import './QuestionBath.css';
import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function QuestionBath({ selectedTimes, selectedPeriod, onBathUsageChange }) {
    const [times, setTimes] = useState(selectedTimes || 0); // Tracks times
    const [period, setPeriod] = useState(selectedPeriod || ""); // Tracks period

    // Handles increment/decrement of times
    const handleTimesChange = (operation) => {
        setTimes(prevTimes => {
            const newTimes = operation === "increase" ? prevTimes + 1 : Math.max(0, prevTimes - 1);
            onBathUsageChange(newTimes, period); // Update parent state
            return newTimes;
        });
    };

    // Handles period selection change
    const handlePeriodChange = (event) => {
        const newPeriod = event.target.value;
        setPeriod(newPeriod);
        onBathUsageChange(times, newPeriod); // Update parent state
    };

    // Disable style for decrease button
    const getButtonStyle = (isDisabled) => {
        return isDisabled ? { filter: 'grayscale(100%)', cursor: 'not-allowed' } : {};
    };

    const options = ['Ден', 'Седмица', 'Месец', 'Година'];

    return (
        <div className="question-bath">
            <img className="bathtub" src={require("../images/all/bath.png")} alt="bathtub" />

            <div className="input-field-bath">
                <p className="i-use">Ползвам вана</p>
                <div className="plus-minus-menu">
                    <img
                        className="operational-sign"
                        src={require("../images/all/minus.svg").default}
                        alt="minus"
                        onClick={() => handleTimesChange("decrease")}
                        style={times === 0 ? getButtonStyle(true) : {}}
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

                {/* Period selection */}
                <FormControl sx={{ minWidth: 200, marginTop: 2 }}>
                    <InputLabel
                        sx={{
                            fontSize: 'calc(var(--scale) * 25)',
                            fontFamily: 'Comfortaa, sans-serif',
                            color: 'white',
                            textAlign: 'center',
                            width: 'calc(var(--scale) * 424)',
                            opacity: period ? 0 : 1,
                            transition: 'opacity 0.3s ease',
                        }}
                        shrink={!!period}
                    >
                        Изберете...
                    </InputLabel>
                    <Select
                        value={period}
                        onChange={handlePeriodChange}
                        sx={{
                            backgroundColor: '#1C274C',
                            width: 'calc(var(--scale) * 224)',
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
                        {options.map((option, index) => (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default QuestionBath;