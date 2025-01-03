import './AnswerVerticalSection.css';

function AnswerVerticalSection({ questions, goToNext }) {

  return (
    <div className="vertical-buttons">
      {questions.map((question, index) => (
        <button 
          key={index}
          className="vertical-button"
          onClick={goToNext}
        >
          {question}
        </button>
      ))}
    </div>
  );
}

export default AnswerVerticalSection;
