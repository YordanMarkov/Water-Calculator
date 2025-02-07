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
      <p className="sidebar-title">
        <span className="bigger">Сградна</span> <br />
        <span className="faded">ВиК инсталация</span>
      </p>
      <div className="items">
        {/* Map Icon */}
        <img
          className={`item ${currentQuestionIndex === 1 ? 'active' : ''}`}
          src={require("../images/icons/map.svg").default}
          alt="map"
          onClick={() => handleNavigation(1)}
        />

        {/* Home Icon */}
        <img
          className={`item ${currentQuestionIndex === 2 ? 'active' : ''}`}
          src={require("../images/icons/home.svg").default}
          alt="home"
          onClick={() => handleNavigation(2)}
        />
        
        {/* Bath Icon with Sub-options */}
        <div
          onMouseEnter={() => setShowBathCircles(true)} // Show circles on hover
          onMouseLeave={() => setShowBathCircles(false)} // Hide circles on hover out
        >
          <img
            className={`item ${[3, 4, 5, 6, 7].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/bath.svg").default}
            alt="bath"
            onClick={() => handleNavigation(3)}
          />
          {/* Sub-circles for bath options */}
          <div className={`circles ${showBathCircles ? 'expanded' : ''}`}>
            {[3, 4, 5, 6, 7].map((index) => (
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
          className={`item ${currentQuestionIndex === 8 ? 'active' : ''}`}
          src={require("../images/icons/toilet.svg").default}
          alt="toilet"
          onClick={() => handleNavigation(8)}
        />
        
        {/* Sink Icon with Sub-options */}
        <div
          onMouseEnter={() => setShowSinkCircles(true)} // Show circles on hover
          onMouseLeave={() => setShowSinkCircles(false)} // Hide circles on hover out
        >
          <img
            className={`item ${[9, 10].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/sink.svg").default}
            alt="sink"
            onClick={() => handleNavigation(9)}
          />
          {/* Sub-circles for sink options */}
          <div className={`circles ${showSinkCircles ? 'expanded' : ''}`}>
            {[9, 10].map((index) => (
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
          className={`item ${currentQuestionIndex === 11 ? 'active' : ''}`}
          src={require("../images/icons/dish.svg").default}
          alt="dish"
          onClick={() => handleNavigation(11)}
        />
        <img
          className={`item ${currentQuestionIndex === 12 ? 'active' : ''}`}
          src={require("../images/icons/washingmachine.svg").default}
          alt="washingmachine"
          onClick={() => handleNavigation(12)}
        />
        <img
          className={`item ${currentQuestionIndex === 13 ? 'active' : ''}`}
          src={require("../images/icons/graywater.svg").default}
          alt="graywater"
          onClick={() => handleNavigation(13)}
        />
      </div>
    </div>
  );
}

export default Sidebar;