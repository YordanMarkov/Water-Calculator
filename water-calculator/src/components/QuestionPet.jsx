import React, { useState } from 'react';
import './QuestionPet.css';

function QuestionPet({ updatePetValue }) {
  // State to track the pet value
  const [petValue, setPetValue] = useState(0);

  const handleIncrement = () => {
    setPetValue((prev) => {
      const newValue = prev + 5;
      updatePetValue(newValue); // Update immediately when value changes
      return newValue;
    });
  };
  
  const handleDecrement = () => {
    if (petValue > 0) {
      setPetValue((prev) => {
        const newValue = prev - 5;
        updatePetValue(newValue); // Update immediately when value changes
        return newValue;
      });
    }
  };

  return (
    <div className="pet-container">
      {/* Pet image */}
      <img
        className="pet-image"
        src={require("../images/all/pet.png")}
        alt="Pet illustration"
      />
      
      <div className="pet-question">
        {/* Minus button: Disable when petValue is 0 */}
        <img
          className={`pet-sign ${petValue === 0 ? 'disabled' : ''}`}
          src={require("../images/all/minus.svg").default}
          alt="minus"
          onClick={handleDecrement}
        />
        
        {/* Display the current pet value */}
        <p className="pet-text">{petValue} лв.</p>
        
        {/* Plus button */}
        <img
          className="pet-sign"
          src={require("../images/all/plus.svg").default}
          alt="plus"
          onClick={handleIncrement}
        />
      </div>
    </div>
  );
}

export default QuestionPet;
