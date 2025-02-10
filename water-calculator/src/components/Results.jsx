import './Results.css';

function Results({goBack, answers}) {
  // IMPORTANT: This component is static! Nothing is functional behind and the calculations
  // are completely made up. The purpose of this component is to show how the final results
  // would look like in the app!
  return (
    <div className="results-container">
      {/* Background cloud base */}
      <img className="cloud-base" src={require("../images/all/cloud-base.svg").default} alt="Cloud Base" />
      
      {/* Title for the results */}
      <p className="results-title">Вашият воден отпечатък е</p>
      
      {/* Sun image */}
      <img className="sun" src={require("../images/all/sun.svg").default} alt="Sun" />
      
      {/* Button to go back to the beginning */}
      <button className="again" onClick={goBack}>Отначало</button>
      
      {/* Display the user's result (water footprint) */}
      <p className="your-results">1800 л./ден</p>
      
      {/* Advanced results section */}
      <div className="advanced-results">
        <div className="results-advanced-container">
          {/* Map showing Bulgaria */}
          <img className="results-image-map" src={require("../images/all/blue-map.svg").default} alt="Bulgaria" />
          <p className="results-text">Средно за България: 2200 л./ден</p>
        </div>
        <div className="results-advanced-container">
          {/* Text showing the average for the region */}
          <p className="results-text">Средно за областта: 1600 л./ден</p>
          {/* Image showing Sofia area */}
          <img className="results-image-area" src={require("../images/all/sofia-city.svg").default} alt="Sofia" />
        </div>
        {/* Just testing */}
        {/* <div className="results-advanced-container">
          <pre className="results-text">{JSON.stringify(answers, null, 2)}</pre>
        </div> */}
      </div>

      
      
      {/* Clouds section */}
      <div className="clouds">
        {/* Multiple cloud images */}
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