import './QuestionAdvancedSelection.css';
import { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl } from "@mui/material";

function QuestionAdvancedSelection({ options = [], questionCount = 3, bigImageSrc, selectedOptions, onDishUsageChange, isGreen = false }) {
    const [localSelectedOptions, setLocalSelectedOptions] = useState(() => selectedOptions || []);

    useEffect(() => {
        if (onDishUsageChange && typeof onDishUsageChange === "function") {
            onDishUsageChange(localSelectedOptions);
        }
    }, [localSelectedOptions]);

    const periods = ["Ден", "Седмица", "Месец", "Година"];

    const handleSelect = (option) => {
        if (!localSelectedOptions.some(item => item.option === option)) {
            setLocalSelectedOptions([...localSelectedOptions, { option, times: 0, period: '' }]);
        }
    };

    const handleTimesChange = (option, operation) => {
        setLocalSelectedOptions(localSelectedOptions.map(item => {
            if (item.option === option) {
                const newTimes = operation === "increase" ? item.times + 1 : Math.max(item.times - 1, 0);
                return { ...item, times: newTimes };
            }
            return item;
        }));
    };

    const handlePeriodChange = (option, event) => {
        const newPeriod = event.target.value;
        setLocalSelectedOptions(localSelectedOptions.map(item => {
            if (item.option === option) {
                return { ...item, period: newPeriod };
            }
            return item;
        }));
    };

    const handleRemove = (option) => {
        setLocalSelectedOptions(localSelectedOptions.filter(item => item.option !== option));
    };

    const displayedOptions = options.slice(0, Math.min(questionCount, options.length));

    return (
        <div className="picture-selectable-questions">
            <img className="big-img" src={bigImageSrc || require("../images/all/dish.png")} alt="Big illustration" />
            <div className="selectable-questions">
                {displayedOptions.map((option) => {
                    const selectedItem = localSelectedOptions.find(item => item.option === option);
                    const isSelected = !!selectedItem;

                    return (
                        <div className="question-row" key={option}>
                            {isSelected && (
                                <img
                                    className="operational-sign remove red"
                                    src={require("../images/all/x.svg").default}
                                    alt="remove"
                                    onClick={() => handleRemove(option)}
                                />
                            )}
                            <button
                                className={`selection ${isSelected ? "selected" : ""}`}
                                onClick={() => handleSelect(option)}
                                style={
                                    !isSelected && isGreen
                                        ? { backgroundColor: '#119A0E', color: '#FFFFFF' }
                                        : {}
                                }
                            >
                                {option}
                            </button>
                            {isSelected && (
                                <div className="control-details">
                                    <img
                                        className={`operational-sign ${selectedItem.times === 0 ? "disabled" : ""}`}
                                        src={require("../images/all/minus.svg").default}
                                        alt="minus"
                                        onClick={() => handleTimesChange(option, "decrease")}
                                    />
                                    <span className="count">{selectedItem.times}</span>
                                    <img
                                        className="operational-sign"
                                        src={require("../images/all/plus.svg").default}
                                        alt="plus"
                                        onClick={() => handleTimesChange(option, "increase")}
                                    />
                                    <span className="period-label">{selectedItem.times === 1 ? "път" : "пъти"} на</span>

                                    <FormControl
                                        sx={{
                                            width: 'calc(var(--scale) * 224)',
                                            minWidth: 'calc(var(--scale) * 180)', // Emergency minimum width
                                            flexShrink: 0,                        // Do NOT let flex containers shrink this
                                            marginTop: `calc(var(--scale) * 8)`,
                                        }}
                                    >
                                        <Select
                                            displayEmpty
                                            value={selectedItem.period || ""}
                                            onChange={(e) => handlePeriodChange(option, e)}
                                            sx={{
                                                backgroundColor: isGreen ? '#1D4C1C' : '#1C274C',
                                                height: 'calc(var(--scale) * 60)',
                                                borderRadius: 'calc(var(--scale) * 30)',
                                                color: 'white',
                                                fontSize: 'calc(var(--scale) * 25)',
                                                fontFamily: 'Comfortaa, sans-serif',
                                                textAlign: 'center',
                                                width: '100%',                       // Important — match FormControl
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
                                                    whiteSpace: 'nowrap',         // Ensure it doesn't break into multiple lines
                                                    overflow: 'hidden',            // But clip if too long
                                                    textOverflow: 'ellipsis',     // Add "..." if overflow happens
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

                                            {periods.map((period, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={period}
                                                    sx={{
                                                        fontSize: 'calc(var(--scale) * 25)',
                                                        fontFamily: 'Comfortaa, sans-serif',
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {period}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default QuestionAdvancedSelection;
