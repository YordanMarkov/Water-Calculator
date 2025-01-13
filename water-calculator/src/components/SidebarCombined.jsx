import Sidebar from './Sidebar';
import SidebarGreen from './SidebarGreen';
import SidebarPurple from './SidebarPurple';
import "./SidebarCombined.css";

function SidebarCombined({ currentQuestionIndex, setCurrentQuestionIndex, ref }) {
  return (
    <div className="sidebar-combined" ref={ref}>
      {/* Blue-themed Sidebar component */}
      <Sidebar
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
      <img className="arr" src={require("../images/all/blue-arr.svg").default} alt="blue-arr"/>
      
      {/* Green-themed Sidebar component */}
      <SidebarGreen
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
      <img className="arr" src={require("../images/all/green-arr.svg").default} alt="green-arr"/>
      
      {/* Purple-themed Sidebar component */}
      <SidebarPurple
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
    </div>
  );
}

export default SidebarCombined;