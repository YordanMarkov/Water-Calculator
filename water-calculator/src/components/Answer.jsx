import './Answer.css';

function Answer({ 
  isTherePrev, 
  isThereNext, 
  buttonTitles, 
  goToNext, 
  goToPrev, 
  onOptionClick, 
  isGreen, 
  isPurple 
}) {

  const buttonStyle = {
    backgroundColor: isPurple ? '#6C4CFF' : isGreen ? '#119A0E' : '',
  };

  const nextButtonStyle = {
    backgroundColor: isPurple ? '#6C4CFF' : isGreen ? '#119A0E' : '',
  };

  return (
    <div className="buttons">
      {isTherePrev && (
        <img
          className="prev"
          src={require(
            isPurple 
              ? "../images/all/prev-purple.svg" 
              : isGreen 
              ? "../images/all/prev-green.svg" 
              : "../images/all/prev.svg"
          ).default}
          alt="prev"
          onClick={goToPrev}
        />
      )}

      {buttonTitles.map((title, index) => (
        <button
          key={index}
          className="button"
          onClick={onOptionClick}
          style={buttonStyle}
        >
          {title}
        </button>
      ))}

      {isThereNext && (
        <button
          className="next"
          onClick={goToNext}
          style={nextButtonStyle} 
        >
          Напред
        </button>
      )}
    </div>
  );
}

export default Answer;
