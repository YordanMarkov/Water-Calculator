import './SidebarPurple.css';
import React, { useState } from 'react';

function SidebarPurple({ currentQuestionIndex, setCurrentQuestionIndex }) {
  const [showRecycleCircles, setShowRecycleCircles] = useState(false);
  const [showChatCircles, setShowChatCircles] = useState(false);
  const [showFoodCircles, setShowFoodCircles] = useState(false);

  const handleNavigation = (index) => {
    setCurrentQuestionIndex(index); // Navigate to the selected question
  };

  return (
    <div className="sidebar-purple">
      <p className="sidebar-title">
        <span className="bigger">Виртуална</span> <br />
        <span className="faded">вода</span>
      </p>
      <div className="items">
        {/* Car Icon (no sub-options) */}
        <img
          className={`item ${currentQuestionIndex === 22 ? 'active' : ''}`}
          src={require("../images/icons/car-purple.svg").default}
          alt="car"
          onClick={() => handleNavigation(22)}
        />

        {/* Bulb Icon (no sub-options) */}
        <img
          className={`item ${currentQuestionIndex === 23 ? 'active' : ''}`}
          src={require("../images/icons/bulb.svg").default}
          alt="car"
          onClick={() => handleNavigation(23)}
        />

        {/* Bag Icon (no sub-options) */}
        <img
          className={`item ${currentQuestionIndex === 24 ? 'active' : ''}`}
          src={require("../images/icons/bag.svg").default}
          alt="bag"
          onClick={() => handleNavigation(24)}
        />

        {/* Recycle Icon with 4 sub-options */}
        <div
          onMouseEnter={() => setShowRecycleCircles(true)} // Show sub-circles on hover
          onMouseLeave={() => setShowRecycleCircles(false)} // Hide sub-circles on hover out
        >
          <img
            className={`item ${[25, 26, 27, 28].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/recycle.svg").default}
            alt="recycle"
            onClick={() => handleNavigation(25)}
          />
          {/* Sub-circles for recycle options */}
          <div className={`circles ${showRecycleCircles ? 'expanded' : ''}`}>
            {[25, 26, 27, 28].map((index) => (
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

        {/* Food Icon with 2 sub-options */}
        <div
          onMouseEnter={() => setShowFoodCircles(true)} // Show sub-circles on hover
          onMouseLeave={() => setShowFoodCircles(false)} // Hide sub-circles on hover out
        >
          <img
            className={`item ${[29, 30].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/food.svg").default}
            alt="food"
            onClick={() => handleNavigation(29)}
          />
          {/* Sub-circles for food options */}
          <div className={`circles ${showFoodCircles ? 'expanded' : ''}`}>
            {[29, 30].map((index) => (
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

        {/* Bone Icon (no sub-options) */}
        <img
          className={`item ${currentQuestionIndex === 31 ? 'active' : ''}`}
          src={require("../images/icons/bone.svg").default}
          alt="bone"
          onClick={() => handleNavigation(31)}
        />

        {/* Chat Icon with 2 sub-options */}
        <div
          onMouseEnter={() => setShowChatCircles(true)} // Show sub-circles on hover
          onMouseLeave={() => setShowChatCircles(false)} // Hide sub-circles on hover out
        >
          <img
            className={`item ${[32, 33].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/chat.svg").default}
            alt="chat"
            onClick={() => handleNavigation(32)}
          />
          {/* Sub-circles for chat options */}
          <div className={`circles ${showChatCircles ? 'expanded' : ''}`}>
            {[32, 33].map((index) => (
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

export default SidebarPurple;