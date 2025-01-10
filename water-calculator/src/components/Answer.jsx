import './Answer.css';

function Answer({ 
  isTherePrev, 
  isThereNext, 
  buttonTitles, 
  goToNext, 
  goToPrev, 
  onOptionClick, 
  isGreen, 
  isPurple,
}) {
  // Set button background color based on props (sections - blue, green, purple)
  const buttonStyle = {
    backgroundColor: isPurple ? '#6C4CFF' : isGreen ? '#119A0E' : '',
  };

  const nextButtonStyle = {
    backgroundColor: isPurple ? '#6C4CFF' : isGreen ? '#119A0E' : '',
  };

  return (
    <div className="buttons">
      {/* Previous button if allowed */}
      {isTherePrev && (
        <img
          className="prev"
          src={require(
            isPurple 
              ? "../images/all/prev-purple.svg" // Purple style
              : isGreen 
              ? "../images/all/prev-green.svg" // Green style
              : "../images/all/prev.svg" // Default style
          ).default}
          alt="prev"
          onClick={goToPrev} // Go to previous question
        />
      )}

      {/* Render buttons with titles */}
      {buttonTitles.map((title, index) => (
        <button
          key={index}
          className="button"
          onClick={onOptionClick} // Handle option click
          style={buttonStyle}
        >
          {title}
        </button>
      ))}

      {/* Next button if allowed */}
      {isThereNext && (
        <button
          className="next"
          onClick={goToNext} // Go to next question
          style={nextButtonStyle}
        >
          Напред
        </button>
      )}
    </div>
  );
}

export default Answer;