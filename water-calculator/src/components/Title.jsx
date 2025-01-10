import './Title.css';
import React from 'react';

function Title({ iconPath, titleText, lineColor, questionText, isGreen, isPurple }) {
  // Set title color based on props (blue, green, purple)
  const titleStyle = {
    color: isPurple ? '#6C4CFF' : isGreen ? '#119A0E' : '#0E4B9A',
  };

  return (
    <div className="title-line">
        <div className="icon-title">
            {/* Display icon */}
            <img src={iconPath} className="icon" alt="icon" />
            {/* Display title with dynamic color */}
            <p className="title" style={titleStyle}>{titleText}</p>
        </div>
        {/* Display line */}
        <img src={lineColor} className="line" alt="line" />
        {/* Display question */}
        <p className="question">{questionText}</p>
    </div>
  );
}

export default Title;