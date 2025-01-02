import './SidebarPurple.css';
import React, { useState } from 'react';

function SidebarPurple({ currentQuestionIndex, setCurrentQuestionIndex }) {
  const [showBulbCircles, setShowBulbCircles] = useState(false);
  const [showRecycleCircles, setShowRecycleCircles] = useState(false);
  const [showChatCircles, setShowChatCircles] = useState(false);
  const [showFoodCircles, setShowFoodCircles] = useState(false);

  const handleNavigation = (index) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="sidebar-purple">
      <p className="sidebar-title">Виртуална вода</p>
      <div className="items">
        {/* Car (purple) */}
        <img
          className={`item ${currentQuestionIndex === 20 ? 'active' : ''}`}
          src={require("../images/icons/car-purple.svg").default}
          alt="car"
          onClick={() => handleNavigation(20)}
        />

        {/* Bulb (with 2 dots) */}
        <div
          onMouseEnter={() => setShowBulbCircles(true)}
          onMouseLeave={() => setShowBulbCircles(false)}
        >
          <img
            className={`item ${[21, 22].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/bulb.svg").default}
            alt="bulb"
            onClick={() => handleNavigation(21)}
          />
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

        {/* Bag (no dots) */}
        <img
          className={`item ${currentQuestionIndex === 23 ? 'active' : ''}`}
          src={require("../images/icons/bag.svg").default}
          alt="bag"
          onClick={() => handleNavigation(23)}
        />

        {/* Recycle (with 4 dots) */}
        <div
          onMouseEnter={() => setShowRecycleCircles(true)}
          onMouseLeave={() => setShowRecycleCircles(false)}
        >
          <img
            className={`item ${[24, 25, 26, 27].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/recycle.svg").default}
            alt="recycle"
            onClick={() => handleNavigation(24)}
          />
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

        {/* Food (with 2 dots) */}
        <div
          onMouseEnter={() => setShowFoodCircles(true)}
          onMouseLeave={() => setShowFoodCircles(false)}
        >
          <img
            className={`item ${[28, 29].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/food.svg").default}
            alt="food"
            onClick={() => handleNavigation(28)}
          />
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

        {/* Bone (no dots) */}
        <img
          className={`item ${currentQuestionIndex === 30 ? 'active' : ''}`}
          src={require("../images/icons/bone.svg").default}
          alt="bone"
          onClick={() => handleNavigation(30)}
        />

        {/* Chat (with 2 dots) */}
        <div
          onMouseEnter={() => setShowChatCircles(true)}
          onMouseLeave={() => setShowChatCircles(false)}
        >
          <img
            className={`item ${[31, 32].includes(currentQuestionIndex) ? 'active' : ''}`}
            src={require("../images/icons/chat.svg").default}
            alt="chat"
            onClick={() => handleNavigation(31)}
          />
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