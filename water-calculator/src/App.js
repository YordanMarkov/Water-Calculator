import './App.css';
import Title from './components/Title';
import Question1 from './components/Question1';
import Answer from './components/Answer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <img className="logo" src={require("./images/all/logo.svg").default} alt="logo"/>
      <Sidebar/>
      <Title/>
      <Question1/>
      <Answer/>
    </div>
  );
}

export default App;
