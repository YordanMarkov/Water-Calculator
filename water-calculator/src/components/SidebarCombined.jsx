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
      
      {/* Green-themed Sidebar component */}
      <SidebarGreen
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
      
      {/* Purple-themed Sidebar component */}
      <SidebarPurple
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
    </div>
  );
}

export default SidebarCombined;