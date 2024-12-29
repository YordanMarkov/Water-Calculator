import './QuestionPicture.css';

function QuestionPicture({ src, alt, width, margin }) {
  return (
    <div>
      <img 
        className="questionPicture" 
        src={src} 
        alt={alt} 
        style={{
            width: width ? `calc(${width})` : '', 
            marginLeft: margin || '' 
        }} 
      />
    </div>
  );
}

export default QuestionPicture;