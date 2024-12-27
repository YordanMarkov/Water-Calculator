import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* home.svg -> 1
      bath.svg -> 5
      toilet.svg -> 1
      sink.svg -> 2
      dish.svg-> 1
      washingmachine.svg -> 1
      graywater.svg -> 1 */}

      <p className="sidebar-title"> Вътрешна вода </p>
      <div className="items">
        <img className="item" src={require("../images/icons/home.svg").default} alt="home"></img>
        <img className="item" src={require("../images/icons/bath.svg").default} alt="bath"></img>
        <img className="item" src={require("../images/icons/toilet.svg").default} alt="toilet"></img>
        <img className="item" src={require("../images/icons/sink.svg").default} alt="sink"></img>
        <img className="item" src={require("../images/icons/dish.svg").default} alt="dish"></img>
        <img className="item" src={require("../images/icons/washingmachine.svg").default} alt="washingmachine"></img>
        <img className="item" src={require("../images/icons/graywater.svg").default} alt="graywater"></img>
      </div>
    </div>
  );
}

export default Sidebar;
