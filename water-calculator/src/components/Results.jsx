import './Results.css';

function Results({goBack}) {

  return (
    <div className="results-container">
      <img className="cloud-base" src={require("../images/all/cloud-base.svg").default} alt="Cloud Base" />
      <p className="results-title">Вашият воден отпечатък е</p>
      <img className="sun" src={require("../images/all/sun.svg").default} alt="Sun" />
      <button className="again" onClick={goBack}>Отначало</button>
      <p className="your-results">1800 л./ден</p>
      <div className="advanced-results">
        <div className="results-advanced-container">
          <img className="results-image-map" src={require("../images/all/blue-map.svg").default} alt="Bulgaria" />
          <p className="results-text">Средно за България:
          2200 л./ден</p>
        </div>
        <div className="results-advanced-container">
          <p className="results-text">Средно за областта:
          1600 л./ден</p>
          <img className="results-image-area" src={require("../images/all/sofia-city.svg").default} alt="Sofia" />
        </div>
      </div>
      <div className="clouds">
        <img className="cloud-1" src={require("../images/all/cloud-1.svg").default} alt="Cloud" />
        <img className="cloud-2" src={require("../images/all/cloud-2.svg").default} alt="Cloud" />
        <img className="cloud-3" src={require("../images/all/cloud-3.svg").default} alt="Cloud" />
        <img className="cloud-4" src={require("../images/all/cloud-1.svg").default} alt="Cloud" />
        <img className="cloud-5" src={require("../images/all/cloud-2.svg").default} alt="Cloud" />
        <img className="cloud-6" src={require("../images/all/cloud-3.svg").default} alt="Cloud" />
        <img className="cloud-7" src={require("../images/all/cloud-1.svg").default} alt="Cloud" />
      </div>
    </div>
  );
}

export default Results;
