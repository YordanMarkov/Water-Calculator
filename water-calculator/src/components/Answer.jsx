import './Answer.css';

function Answer({ isTherePrev, isThereNext, buttonTitles, goToNext, goToPrev, onOptionClick }) {
  return (
    <div className="buttons">
      {isTherePrev && (
        <img
          className="prev"
          src={require("../images/all/prev.svg").default}
          alt="prev"
          onClick={goToPrev}
        />
      )}

      {buttonTitles.map((title, index) => (
        <button key={index} className="button" onClick={onOptionClick}>
          {title}
        </button>
      ))}

      {isThereNext && (
        <button className="next" onClick={goToNext}>
          Напред
        </button>
      )}
    </div>
  );
}

export default Answer;
