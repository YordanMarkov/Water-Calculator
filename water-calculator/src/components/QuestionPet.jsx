import React, { useState } from 'react';
import './QuestionPet.css';

function QuestionPet() {
  const [petValue, setPetValue] = useState(0);

  const handleIncrement = () => {
    setPetValue((prev) => prev + 5);
  };

  const handleDecrement = () => {
    if (petValue > 0) {
      setPetValue((prev) => prev - 5);
    }
  };

  return (
    <div className="pet-container">
      <img
        className="pet-image"
        src={require("../images/all/pet.png")}
        alt="pet image"
      />
      <div className="pet-question">
        <img
          className={`pet-sign ${petValue === 0 ? 'disabled' : ''}`}
          src={require("../images/all/minus.svg").default}
          alt="minus"
          onClick={handleDecrement}
        />
        <p className="pet-text">{petValue} лв.</p>
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