import './SidebarGreen.css';
import React, { useState } from 'react';

function SidebarGreen({ currentQuestionIndex, setCurrentQuestionIndex }) {
  const [showSprinklerCircles, setShowSprinklerCircles] = useState(false);
  const [showPoolCircles, setShowPoolCircles] = useState(false);
  const [showCarCircles, setShowCarCircles] = useState(false);

  const handleNavigation = (index) => {
    setCurrentQuestionIndex(index); // Navigate to the specific question
  };

  return (
    <div className="sidebar-green">
      <p className="sidebar-title">
        <span className="bigger">Външна</span> <br />
        <span className="faded">ВиК мрежа</span>
      </p>
      <div className="items">
        {/* Sprinkler Icon with Sub-options */}
        <div
          onMouseEnter={() => setShowSprinklerCircles(true)} // Show circles on hover
          onMouseLeave={() => setShowSprinklerCircles(false)} // Hide circles on hover out
        >
          <img
            className={`item ${[14, 15, 16].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/sprinkler.svg").default}
            alt="sprinkler"
            onClick={() => handleNavigation(14)}
          />
          {/* Sub-circles for sprinkler options */}
          <div className={`circles ${showSprinklerCircles ? 'expanded' : ''}`}>
            {[14, 15, 16].map((index) => (
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

        {/* Barrel Icon */}
        <img
          className={`item ${currentQuestionIndex === 17 ? 'active' : ''}`}
          src={require("../images/icons/barrel.svg").default}
          alt="barrel"
          onClick={() => handleNavigation(17)}
        />

        {/* Pool Icon with Sub-options */}
        <div
          onMouseEnter={() => setShowPoolCircles(true)} // Show circles on hover
          onMouseLeave={() => setShowPoolCircles(false)} // Hide circles on hover out
        >
          <img
            className={`item ${[18, 19].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/pool.svg").default}
            alt="pool"
            onClick={() => handleNavigation(18)}
          />
          {/* Sub-circles for pool options */}
          <div className={`circles ${showPoolCircles ? 'expanded' : ''}`}>
            {[18, 19].map((index) => (
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

        {/* Car Icon with Sub-options */}
        <div
          onMouseEnter={() => setShowCarCircles(true)} // Show circles on hover
          onMouseLeave={() => setShowCarCircles(false)} // Hide circles on hover out
        >
          <img
            className={`item ${[20, 21].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/car.svg").default}
            alt="car"
            onClick={() => handleNavigation(20)}
          />
          {/* Sub-circles for car options */}
          <div className={`circles ${showCarCircles ? 'expanded' : ''}`}>
            {[20, 21].map((index) => (
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