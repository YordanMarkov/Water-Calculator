import './AnswerVerticalSection.css';

function AnswerVerticalSection({ questions, goToNext }) {
  return (
    <div className="vertical-buttons">
      {/* Render buttons for each question */}
      {questions.map((question, index) => (
        <button 
          key={index} // Unique key for each button
          className="vertical-button"
          onClick={() => goToNext(index, question)} // Pass button text as answerText
        >
          {question} {/* Display question text */}
        </button>
      ))}
    </div>
  );
}

export default AnswerVerticalSection;
