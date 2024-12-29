import './Answer.css';

function Answer({ isTherePrev, isThereNext, buttonTitles }) {
  return (
    <div className="buttons">
      {isTherePrev && (
        <img className="prev" src={require("../images/all/prev.svg").default} alt="prev" />
      )}

      {buttonTitles.map((title, index) => (
        <button key={index} className="button">
          {title}
        </button>
      ))}

      {isThereNext && (
        <button className="next">Напред</button>
      )}
    </div>
  );
}

export default Answer;

