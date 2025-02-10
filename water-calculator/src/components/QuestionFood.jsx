import React, { useState, useEffect } from "react";
import "./QuestionFood.css";

function QuestionFood({
  foodCounter: initialCounter = 0,  // Initial food counter
  foodEndCounterText = "в дома",    // Text for the remaining counter
  questions = [],                   // Array of questions to ask
  foodImage,                         // Image of the food
  onChange,                          // The update handler
  canMove,
}) {
  const [foodCounter, setFoodCounter] = useState(initialCounter); // Current food counter state
  const [foodValues, setFoodValues] = useState(
    questions.reduce((acc, question) => ({ ...acc, [question]: 0 }), {}) // Initialize foodValues
  );

  // Sync local foodCounter with prop change
  useEffect(() => {
    setFoodCounter(initialCounter); // Update local state whenever the prop changes
  }, [initialCounter]); // Run when initialCounter changes

  // Call onChange directly when foodValues is updated
  const updateFoodValues = (newFoodValues) => {
    setFoodValues(newFoodValues);
    onChange(newFoodValues);  // Call the updateDiet function passed down as onChange
  };

  // Handle incrementing a specific question type
  const handleIncrement = (type) => {
    if (foodCounter > 0) {
      const newFoodValues = { ...foodValues, [type]: (foodValues[type] || 0) + 1 };
      setFoodCounter(foodCounter - 1); // Decrease the overall counter
      updateFoodValues(newFoodValues); // Update the foodValues and trigger onChange
    }
  };

  // Handle decrementing a specific question type
  const handleDecrement = (type) => {
    if (foodValues[type] > 0) {
      const newFoodValues = { ...foodValues, [type]: foodValues[type] - 1 };
      setFoodCounter(foodCounter + 1); // Increase the overall counter
      updateFoodValues(newFoodValues); // Update the foodValues and trigger onChange
    }
  };

  return (
    <div className="food-container">
      <img
        className="purple-counter"
        src={require("../images/all/purple-counter.png")}
        alt="purple-counter"
      />
      <img
        className="purple-image"
        src={foodImage}
        alt="food"
      />
      <p className="food-title-counter">Остават</p>
      <p className="food-counter">{foodCounter}</p>
      <p className="food-end-counter">{foodEndCounterText}</p>

      {/* Render food questions and their increment/decrement buttons */}
      <div className="food-questions">
        {questions.map((question, index) => (
          <div key={index} className="food-question">
            <p className="food-title">{question}</p>
            <div className="food-questions-operations">
              <img
                className={`food-sign ${foodValues[question] === 0 ? "disabled" : ""}`}
                src={require("../images/all/minus.svg").default}
                alt="minus"
                onClick={() => handleDecrement(question)}
              />
              <p className="food-value">{foodValues[question] || 0}</p>
              <img
                className={`food-sign ${foodCounter === 0 ? "disabled" : ""}`}
                src={require("../images/all/plus.svg").default}
                alt="plus"
                onClick={() => handleIncrement(question)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionFood;