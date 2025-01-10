import './AnswerVerticalSection.css';

function AnswerVerticalSection({ questions, goToNext }) {
  return (
    <div className="vertical-buttons">
      {/* Render buttons for each question */}
      {questions.map((question, index) => (
        <button 
          key={index} // Unique key for each button
          className="vertical-button"
          onClick={goToNext} // Go to the next question
        >
          {question} {/* Display question text */}
        </button>
      ))}
    </div>
  );
}

export default AnswerVerticalSection;