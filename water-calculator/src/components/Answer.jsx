import './Answer.css';

function Answer({ 
  isTherePrev, 
  isThereNext, 
  buttonTitles, 
  goToNext, 
  goToPrev, 
  onOptionClick, 
  answerIndex, 
  isGreen, 
  isPurple 
}) {
  const buttonStyle = {
    backgroundColor: isPurple ? '#6C4CFF' : isGreen ? '#119A0E' : '',
  };

  return (
    <div className="buttons">
      {/* Previous button */}
      {isTherePrev && (
        <img
          className="prev"
          src={require(isPurple ? "../images/all/prev-purple.svg" : isGreen ? "../images/all/prev-green.svg" : "../images/all/prev.svg").default}
          alt="prev"
          onClick={goToPrev}
        />
      )}

      {/* Render buttons if there are predefined answer choices */}
      {buttonTitles.length > 0 && buttonTitles.map((title, index) => (
        <button
          key={index}
          className="button"
          onClick={() => onOptionClick(answerIndex, title)} // Auto-progress for multiple choice
          style={buttonStyle}
        >
          {title}
        </button>
      ))}

      {/* Next button for manual-progressing questions (e.g., sliders) */}
      {isThereNext && buttonTitles.length === 0 && (
        <button className="next" onClick={goToNext} style={buttonStyle}>
          Напред
        </button>
      )}
    </div>
  );
}

export default Answer;