import './QuestionPicture.css';

function QuestionPicture({ src, alt, width, margin }) {
  return (
    <div>
      <img 
        className="questionPicture" 
        src={src} 
        alt={alt} 
        style={{
            width: width ? `calc(${width})` : '',  // Dynamic width (if provided)
            marginLeft: margin || ''  // Dynamic left margin (if provided)
        }} 
      />
    </div>
  );
}

export default QuestionPicture;