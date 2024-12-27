import './Title.css';

function Title() {
  return (
    <div className="title-line">
        <div className="icon-title">
            <img src={require("../images/icons/home.svg").default} className="icon" alt="home"/>
            <p className="title">У дома</p>
        </div>
        <img src={require("../images/lines/blue.svg").default} className="line"  alt="line"/>
        <p className="question">С колко души споделяте вашия дом?</p>
    </div>
  );
}

export default Title;
