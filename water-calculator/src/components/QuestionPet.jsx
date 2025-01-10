import React, { useState } from 'react';
import './QuestionPet.css';

function QuestionPet() {
  // State to track the pet value
  const [petValue, setPetValue] = useState(0);

  // Increment the pet value by 5
  const handleIncrement = () => {
    setPetValue((prev) => prev + 5);
  };

  // Decrement the pet value by 5, but ensure it doesn't go below 0
  const handleDecrement = () => {
    if (petValue > 0) {
      setPetValue((prev) => prev - 5);
    }
  };

  return (
    <div className="pet-container">
      {/* Pet image */}
      <img
        className="pet-image"
        src={require("../images/all/pet.png")}  // The image for the pet
        alt="Pet illustration"
      />
      
      <div className="pet-question">
        {/* Minus button: Disable when petValue is 0 */}
        <img
          className={`pet-sign ${petValue === 0 ? 'disabled' : ''}`}  // 'disabled' class applied when petValue is 0
          src={require("../images/all/minus.svg").default}  // Minus icon
          alt="minus"
          onClick={handleDecrement}  // Decrement handler
        />
        
        {/* Display the current pet value */}
        <p className="pet-text">{petValue} лв.</p>
        
        {/* Plus button */}
        <img
          className="pet-sign"
          src={require("../images/all/plus.svg").default}  // Plus icon
          alt="plus"
          onClick={handleIncrement}  // Increment handler
        />
      </div>
    </div>
  );
}

export default QuestionPet;