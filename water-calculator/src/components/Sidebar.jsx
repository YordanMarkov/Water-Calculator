import './Sidebar.css';
import React, { useState } from 'react';

function Sidebar({ currentQuestionIndex, setCurrentQuestionIndex }) {
  const [showBathCircles, setShowBathCircles] = useState(false);
  const [showSinkCircles, setShowSinkCircles] = useState(false);

  const handleNavigation = (index) => {
    setCurrentQuestionIndex(index); // Navigate to the specific question
  };

  return (
    <div className="sidebar">
      <p className="sidebar-title">Вътрешна вода</p>
      <div className="items">
        {/* Home Icon */}
        <img
          className={`item ${currentQuestionIndex === 0 ? 'active' : ''}`}
          src={require("../images/icons/home.svg").default}
          alt="home"
          onClick={() => handleNavigation(0)}
        />
        
        {/* Bath Icon with Sub-options */}
        <div
          onMouseEnter={() => setShowBathCircles(true)} // Show circles on hover
          onMouseLeave={() => setShowBathCircles(false)} // Hide circles on hover out
        >
          <img
            className={`item ${[1, 2, 3, 4, 5].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/bath.svg").default}
            alt="bath"
            onClick={() => handleNavigation(1)}
          />
          {/* Sub-circles for bath options */}
          <div className={`circles ${showBathCircles ? 'expanded' : ''}`}>
            {[1, 2, 3, 4, 5].map((index) => (
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

        {/* Toilet Icon */}
        <img
          className={`item ${currentQuestionIndex === 6 ? 'active' : ''}`}
          src={require("../images/icons/toilet.svg").default}
          alt="toilet"
          onClick={() => handleNavigation(6)}
        />
        
        {/* Sink Icon with Sub-options */}
        <div
          onMouseEnter={() => setShowSinkCircles(true)} // Show circles on hover
          onMouseLeave={() => setShowSinkCircles(false)} // Hide circles on hover out
        >
          <img
            className={`item ${[7, 8].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/sink.svg").default}
            alt="sink"
            onClick={() => handleNavigation(7)}
          />
          {/* Sub-circles for sink options */}
          <div className={`circles ${showSinkCircles ? 'expanded' : ''}`}>
            {[7, 8].map((index) => (
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

        {/* Other static icons */}
        <img
          className={`item ${currentQuestionIndex === 9 ? 'active' : ''}`}
          src={require("../images/icons/dish.svg").default}
          alt="dish"
          onClick={() => handleNavigation(9)}
        />
        <img
          className={`item ${currentQuestionIndex === 10 ? 'active' : ''}`}
          src={require("../images/icons/washingmachine.svg").default}
          alt="washingmachine"
          onClick={() => handleNavigation(10)}
        />
        <img
          className={`item ${currentQuestionIndex === 11 ? 'active' : ''}`}
          src={require("../images/icons/graywater.svg").default}
          alt="graywater"
          onClick={() => handleNavigation(11)}
        />
      </div>
    </div>
  );
}

export default Sidebar;