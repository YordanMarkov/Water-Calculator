import './Title.css';
import React from 'react';

function Title({ iconPath, titleText, lineColor, questionText }) {
  return (
    <div className="title-line">
        <div className="icon-title">
            <img src={iconPath} className="icon" alt="icon" />
            <p className="title">{titleText}</p>
        </div>
        <img src={lineColor} className="line" alt="line" />
        <p className="question">{questionText}</p>
    </div>
  );
}

export default Title;
