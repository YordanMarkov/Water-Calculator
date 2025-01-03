import Sidebar from './Sidebar';
import SidebarGreen from './SidebarGreen';
import SidebarPurple from './SidebarPurple';
import "./SidebarCombined.css";

function SidebarCombined({ currentQuestionIndex, setCurrentQuestionIndex, ref }) {
  return (
    <div className="sidebar-combined" ref={ref}>
      <Sidebar
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
      <SidebarGreen
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
      <SidebarPurple
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
      />
    </div>
  );
}

export default SidebarCombined;
