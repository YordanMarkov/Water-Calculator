import './SidebarPurple.css';
import React, { useState } from 'react';

function SidebarPurple({ currentQuestionIndex, setCurrentQuestionIndex }) {
  const [showBulbCircles, setShowBulbCircles] = useState(false);
  const [showRecycleCircles, setShowRecycleCircles] = useState(false);
  const [showChatCircles, setShowChatCircles] = useState(false);
  const [showFoodCircles, setShowFoodCircles] = useState(false);

  const handleNavigation = (index) => {
    setCurrentQuestionIndex(index); // Navigate to the selected question
  };

  return (
    <div className="sidebar-purple">
      <p className="sidebar-title">Виртуална вода</p>
      <div className="items">
        {/* Car Icon (no sub-options) */}
        <img
          className={`item ${currentQuestionIndex === 20 ? 'active' : ''}`}
          src={require("../images/icons/car-purple.svg").default}
          alt="car"
          onClick={() => handleNavigation(20)}
        />

        {/* Bulb Icon with 2 sub-options */}
        <div
          onMouseEnter={() => setShowBulbCircles(true)} // Show sub-circles on hover
          onMouseLeave={() => setShowBulbCircles(false)} // Hide sub-circles on hover out
        >
          <img
            className={`item ${[21, 22].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/bulb.svg").default}
            alt="bulb"
            onClick={() => handleNavigation(21)}
          />
          {/* Sub-circles for bulb options */}
          <div className={`circles ${showBulbCircles ? 'expanded' : ''}`}>
            {[21, 22].map((index) => (
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

        {/* Bag Icon (no sub-options) */}
        <img
          className={`item ${currentQuestionIndex === 23 ? 'active' : ''}`}
          src={require("../images/icons/bag.svg").default}
          alt="bag"
          onClick={() => handleNavigation(23)}
        />

        {/* Recycle Icon with 4 sub-options */}
        <div
          onMouseEnter={() => setShowRecycleCircles(true)} // Show sub-circles on hover
          onMouseLeave={() => setShowRecycleCircles(false)} // Hide sub-circles on hover out
        >
          <img
            className={`item ${[24, 25, 26, 27].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/recycle.svg").default}
            alt="recycle"
            onClick={() => handleNavigation(24)}
          />
          {/* Sub-circles for recycle options */}
          <div className={`circles ${showRecycleCircles ? 'expanded' : ''}`}>
            {[24, 25, 26, 27].map((index) => (
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
            className={`item ${[28, 29].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/food.svg").default}
            alt="food"
            onClick={() => handleNavigation(28)}
          />
          {/* Sub-circles for food options */}
          <div className={`circles ${showFoodCircles ? 'expanded' : ''}`}>
            {[28, 29].map((index) => (
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
          className={`item ${currentQuestionIndex === 30 ? 'active' : ''}`}
          src={require("../images/icons/bone.svg").default}
          alt="bone"
          onClick={() => handleNavigation(30)}
        />

        {/* Chat Icon with 2 sub-options */}
        <div
          onMouseEnter={() => setShowChatCircles(true)} // Show sub-circles on hover
          onMouseLeave={() => setShowChatCircles(false)} // Hide sub-circles on hover out
        >
          <img
            className={`item ${[31, 32].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/chat.svg").default}
            alt="chat"
            onClick={() => handleNavigation(31)}
          />
          {/* Sub-circles for chat options */}
          <div className={`circles ${showChatCircles ? 'expanded' : ''}`}>
            {[31, 32].map((index) => (
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