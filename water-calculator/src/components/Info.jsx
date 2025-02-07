import { useState, useEffect } from "react";
import "./Info.css";

function Info({ color, text, video, image }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animateOpen, setAnimateOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimateOpen(true), 10);
    } else {
      setAnimateOpen(false);
    }
  }, [isOpen]);

  const getImageSource = () => {
    if (isOpen) return require("../images/icons/x-info.svg").default;
    switch (color) {
      case "blue":
        return require("../images/icons/blue-info.svg").default;
      case "green":
        return require("../images/icons/green-info.svg").default;
      case "purple":
        return require("../images/icons/purple-info.svg").default;
      default:
        return require("../images/icons/x-info.svg").default;
    }
  };

  const getBackgroundColor = () => {
    switch (color) {
      case "blue":
        return "#0081C7";
      case "green":
        return "#00C742";
      case "purple":
        return "#5300C7";
      default:
        return "#0081C7";
    }
  };

  return (
    <div className={`info-container ${isOpen ? "open" : ""}`}>
      <img
        className="drop"
        src={getImageSource()}
        alt="Info drop"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <div
          className={`info-card ${animateOpen ? "animate" : ""}`}
          style={{ backgroundColor: getBackgroundColor() }}
        >
          <p className="info-title">Информационно табло</p>
          <p className="info-text">{text}</p>
          {video && !image && (
            <video className="info-video" autoPlay loop muted playsInline>
              <source src={video} type="video/mp4" />
            </video>
          )}
          {image && !video && (
            <img className="info-video" src={image} alt="Info content" />
          )}
        </div>
      )}
    </div>
  );
}

export default Info;