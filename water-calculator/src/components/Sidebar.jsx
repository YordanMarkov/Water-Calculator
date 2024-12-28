import './Sidebar.css';
import React, { useState } from 'react';

function Sidebar() {
  const [showBathCircles, setShowBathCircles] = useState(false);  
  const [showSinkCircles, setShowSinkCircles] = useState(false);  

  return (
    <div className="sidebar">
      <p className="sidebar-title"> Вътрешна вода </p>
      <div className="items">
        <img className="item" src={require("../images/icons/home.svg").default} alt="home"></img>
        <div onMouseEnter={() => setShowBathCircles(true)} onMouseLeave={() => setShowBathCircles(false)}>
            <img className="item" src={require("../images/icons/bath.svg").default} alt="bath"></img>
            <div className={`circles ${showBathCircles ? 'expanded' : ''}`}>
                <img className="circle" src={require("../images/icons/circle.svg").default} alt="circle"></img>
                <img className="circle" src={require("../images/icons/circle.svg").default} alt="circle"></img>
                <img className="circle" src={require("../images/icons/circle.svg").default} alt="circle"></img>
                <img className="circle" src={require("../images/icons/circle.svg").default} alt="circle"></img>
                <img className="circle" src={require("../images/icons/circle.svg").default} alt="circle"></img>
            </div>
        </div>
        <img className="item" src={require("../images/icons/toilet.svg").default} alt="toilet"></img>
        <div onMouseEnter={() => setShowSinkCircles(true)} onMouseLeave={() => setShowSinkCircles(false)}>
            <img className="item" src={require("../images/icons/sink.svg").default} alt="sink"></img>
            <div className={`circles ${showSinkCircles ? 'expanded' : ''}`}>
                <img className="circle" src={require("../images/icons/circle.svg").default} alt="circle"></img>
                <img className="circle" src={require("../images/icons/circle.svg").default} alt="circle"></img>
            </div>
        </div>
        <img className="item" src={require("../images/icons/dish.svg").default} alt="dish"></img>
        <img className="item" src={require("../images/icons/washingmachine.svg").default} alt="washingmachine"></img>
        <img className="item" src={require("../images/icons/graywater.svg").default} alt="graywater"></img>
      </div>
    </div>
  );
}

export default Sidebar;