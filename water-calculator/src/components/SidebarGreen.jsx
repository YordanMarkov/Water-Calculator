import './SidebarGreen.css';
import React, { useState } from 'react';

function SidebarGreen({ currentQuestionIndex, setCurrentQuestionIndex }) {
  const [showSprinklerCircles, setShowSprinklerCircles] = useState(false);
  const [showPoolCircles, setShowPoolCircles] = useState(false);
  const [showCarCircles, setShowCarCircles] = useState(false);

  const handleNavigation = (index) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="sidebar-green">
      <p className="sidebar-title">Външна вода</p>
      <div className="items">
        {/* Sprinkler */}
        <div
          onMouseEnter={() => setShowSprinklerCircles(true)}
          onMouseLeave={() => setShowSprinklerCircles(false)}
        >
          <img
            className={`item ${[12, 13, 14].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/sprinkler.svg").default}
            alt="sprinkler"
            onClick={() => handleNavigation(1)}
          />
          <div className={`circles ${showSprinklerCircles ? 'expanded' : ''}`}>
            {[12, 13, 14].map((index) => (
              <img
                key={index}
                className={`circle ${currentQuestionIndex === index ? 'active' : ''}`}
                src={require("../images/icons/circle.svg").default}
                alt={`circle ${index}`}
                onClick={() => handleNavigation(index)}
              />
            ))}
          </div>
        </div>
        {/* Other Elements */}
        <img
          className={`item ${currentQuestionIndex === 15 ? 'active' : ''}`}
          src={require("../images/icons/barrel.svg").default}
          alt="barrel"
          onClick={() => handleNavigation(15)}
        />
        <div
          onMouseEnter={() => setShowPoolCircles(true)}
          onMouseLeave={() => setShowPoolCircles(false)}
        >
          <img
            className={`item ${[16, 17].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/pool.svg").default}
            alt="pool"
            onClick={() => handleNavigation(7)}
          />
          <div className={`circles ${showPoolCircles ? 'expanded' : ''}`}>
            {[15, 16].map((index) => (
              <img
                key={index}
                className={`circle ${currentQuestionIndex === index ? 'active' : ''}`}
                src={require("../images/icons/circle.svg").default}
                alt={`circle ${index}`}
                onClick={() => handleNavigation(index)}
              />
            ))}
          </div>
        </div>

        <div
          onMouseEnter={() => setShowCarCircles(true)}
          onMouseLeave={() => setShowCarCircles(false)}
        >
          <img
            className={`item ${[18, 19].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/car.svg").default}
            alt="car"
            onClick={() => handleNavigation(7)}
          />
          <div className={`circles ${showCarCircles ? 'expanded' : ''}`}>
            {[17, 18].map((index) => (
              <img
                key={index}
                className={`circle ${currentQuestionIndex === index ? 'active' : ''}`}
                src={require("../images/icons/circle.svg").default}
                alt={`circle ${index}`}
                onClick={() => handleNavigation(index)}
              />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default SidebarGreen;
