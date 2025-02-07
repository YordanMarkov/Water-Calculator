import './Welcome.css';

function Welcome({goNext}) {
  return (
    <div className="welcome-container">
      
      {/* Welcome Background */}
      <img className="welcome-background" src={require("../images/all/background-welcome.svg").default} alt="Background"/>

      {/* Sun Title */}
      <img className="voden-calc" src={require("../images/all/voden-calc.svg").default} alt="Sun Title"/>

      {/* Button to go to the next section */}
      <button className="welcome-start" onClick={goNext}>Начало</button>
      
      {/* Clouds section */}
      <div className="welcome-clouds">
        {/* Multiple cloud images */}
        <img className="cloud-1" src={require("../images/all/cloud-1.svg").default} alt="Cloud" />
        <img className="cloud-2" src={require("../images/all/cloud-2.svg").default} alt="Cloud" />
        <img className="cloud-3-welcome" src={require("../images/all/cloud-3.svg").default} alt="Cloud" />
        <img className="cloud-4" src={require("../images/all/cloud-1.svg").default} alt="Cloud" />
        <img className="cloud-5" src={require("../images/all/cloud-2.svg").default} alt="Cloud" />
        <img className="cloud-6" src={require("../images/all/cloud-3.svg").default} alt="Cloud" />
        <img className="cloud-7" src={require("../images/all/cloud-1.svg").default} alt="Cloud" />
      </div>
    </div>
  );
}

export default Welcome;