import React, { useState, useEffect } from "react";
import "./QuestionFood.css";

function QuestionFood({ 
  foodCounter: initialCounter = 0,  // Initial food counter
  foodEndCounterText = "в дома",    // Text for the remaining counter
  questions = [],                   // Array of questions to ask
  foodImage                         // Image of the food
}) {
  const [foodCounter, setFoodCounter] = useState(initialCounter); // Current food counter state
  const [foodValues, setFoodValues] = useState({});               // Store food counts for each question

  // Reset counter and values when initialCounter or questions change
  useEffect(() => {
    setFoodCounter(initialCounter);
    setFoodValues(
      Array.isArray(questions)
        ? questions.reduce((acc, question) => ({ ...acc, [question]: 0 }), {}) // Initialize all question counters to 0
        : {}
    );
  }, [initialCounter, questions]);

  // Increment the value for a specific question type
  const handleIncrement = (type) => {
    if (foodCounter > 0) {
      setFoodValues((prev) => ({
        ...prev,
        [type]: prev[type] + 1, // Increase the count for the selected question
      }));
      setFoodCounter((prev) => prev - 1); // Decrease the overall counter
    }
  };

  // Decrement the value for a specific question type
  const handleDecrement = (type) => {
    if (foodValues[type] > 0) {
      setFoodValues((prev) => ({
        ...prev,
        [type]: prev[type] - 1, // Decrease the count for the selected question
      }));
      setFoodCounter((prev) => prev + 1); // Increase the overall counter
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
                className={`food-sign ${
                  foodValues[question] === 0 ? "disabled" : ""
                }`}
                src={require("../images/all/minus.svg").default}
                alt="minus"
                onClick={() => foodValues[question] > 0 && handleDecrement(question)}
              />
              <p className="food-value">{foodValues[question]}</p>
              <img
                className={`food-sign ${
                  foodCounter === 0 ? "disabled" : ""
                }`}
                src={require("../images/all/plus.svg").default}
                alt="plus"
                onClick={() => foodCounter > 0 && handleIncrement(question)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionFood;