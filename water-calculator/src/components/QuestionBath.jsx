import './QuestionBath.css';
import { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function QuestionBath() {
    const [times, setTimes] = useState(0); // Tracks how many times
    const [period, setPeriod] = useState(''); // Tracks selected period

    // Handles increment or decrement of times
    const handleTimesChange = (operation) => {
        setTimes(prevTimes => {
            if (operation === "increase") {
                return prevTimes + 1;
            } else if (operation === "decrease" && prevTimes > 0) {
                return prevTimes - 1;
            }
            return prevTimes;
        });
    };

    // Handles period selection change
    const handlePeriodChange = (event) => {
        setPeriod(event.target.value);
    };

    // Styles disabled buttons
    const getButtonStyle = (isDisabled) => {
        return isDisabled ? { filter: 'grayscale(100%)', cursor: 'not-allowed' } : {};
    };

    const options = ['Ден', 'Седмица', 'Месец', 'Година'];

    return (
        <div className="question-bath">
            {/* Display bathtub image */}
            <img className="bathtub" src={require("../images/all/bath.png")} alt="bathtub" />
            
            <div className="input-field-bath">
                <p className="i-use">Ползвам вана</p>
                <div className="plus-minus-menu">
                    {/* Decrease times */}
                    <img
                        className="operational-sign"
                        src={require("../images/all/minus.svg").default}
                        alt="minus"
                        onClick={() => handleTimesChange("decrease")}
                        style={times === 0 ? getButtonStyle(true) : {}} // Disable if times is 0
                    />
                    <p className="times-bath">{times}</p> {/* Display times */}
                    {/* Increase times */}
                    <img
                        className="operational-sign"
                        src={require("../images/all/plus.svg").default}
                        alt="plus"
                        onClick={() => handleTimesChange("increase")}
                    />
                </div>
                <p className="times-for">{times === 1 ? "път" : "пъти"} на</p>
                {/* Styled Dropdown menu for period selection */}
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