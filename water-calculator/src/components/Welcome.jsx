import './Welcome.css';
import { useEffect } from "react";

function Welcome({goNext}) {
  useEffect(() => {
    // Disable scrolling
    const originalStyle = window.getComputedStyle(document.documentElement).overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when component unmounts
      document.documentElement.style.overflow = originalStyle;
    };
  }, []);

  return (
    <div className="welcome-container">
      
      {/* Welcome Background */}
      <img className="welcome-background" src={require("../images/all/homepage/Group 78.svg").default} alt="Background"/>

      {/* Sun Title */}
      <img className="voden-calc" src={require("../images/all/voden-calc.svg").default} alt="Sun Title"/>

      <img className="home-logo" src={require("../images/all/homepage/logo.png")} alt="logo" />

      {/* Button to go to the next section */}
      <button className="welcome-start" onClick={goNext}>Начало</button>
      
      {/* Clouds section */}
      <div className="welcome-clouds">
        {/* Multiple cloud images */}
        <img className="cloud-1" src={require("../images/all/homepage/bath-cloud.svg").default} alt="Cloud" />
        <img className="cloud-2" src={require("../images/all/homepage/sink-cloud.svg").default} alt="Cloud" />
        <img className="cloud-3-welcome" src={require("../images/all/homepage/recycle-cloud.svg").default} alt="Cloud" />
        <img className="cloud-4" src={require("../images/all/homepage/light-cloud.svg").default} alt="Cloud" />
        <img className="cloud-5" src={require("../images/all/homepage/car-cloud.svg").default} alt="Cloud" />
        <img className="cloud-6" src={require("../images/all/homepage/shop-cloud.svg").default} alt="Cloud" />
        <img className="cloud-7" src={require("../images/all/homepage/pet-cloud.svg").default} alt="Cloud" />
      </div>
    </div>
  );
}

export default Welcome;