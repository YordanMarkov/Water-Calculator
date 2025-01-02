import './Title.css';
import React from 'react';

function Title({ iconPath, titleText, lineColor, questionText, isGreen, isPurple }) {
  const titleStyle = {
    color: isPurple ? '#6C4CFF' : isGreen ? '#119A0E' : '#0E4B9A',
  };

  return (
    <div className="title-line">
        <div className="icon-title">
            <img src={iconPath} className="icon" alt="icon" />
            <p className="title" style={titleStyle}>{titleText}</p>
        </div>
        <img src={lineColor} className="line" alt="line" />
        <p className="question">{questionText}</p>
    </div>
  );
}

export default Title;