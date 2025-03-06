import './QuestionBath.css';
import { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

function QuestionBath({ selectedTimes, selectedPeriod, onBathUsageChange, forceNext }) {
    const [times, setTimes] = useState(selectedTimes || 0);
    const [period, setPeriod] = useState(selectedPeriod || "");

    // Sync state with parent on revisit
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
        handleNoUsage();
        forceNext();  // <--- Use the new prop here!
    };  
    
    const handleNoUsage = () => {
        setTimes(0);
        setPeriod("");
        onBathUsageChange(0, "");
    };

    const options = ['Ден', 'Седмица', 'Месец', 'Година'];

    return (
        <div className="question-bath">
            <div className="bath-button">
                <img className="bathtub" src={require("../images/all/bath.png")} alt="bathtub" />

                {/* This button is always shown if times and period are not both set */}
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
                            '.MuiSelect-icon': { color: 'white' },
                            '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
                            '&:hover': { opacity: 0.8, transition: '0.3s opacity' },
                            '& .MuiSelect-select': { paddingLeft: 0, paddingRight: 0 },
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
