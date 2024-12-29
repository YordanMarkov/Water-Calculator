import './App.css';
import Title from './components/Title';
import QuestionPeople from './components/QuestionPeople';
import QuestionBath from './components/QuestionBath';
import QuestionPicture from './components/QuestionPicture';
import Answer from './components/Answer';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div>
      <img className="logo" src={require("./images/all/logo.svg").default} alt="logo"/>
      {/* Question 1 */}
      {/* <Sidebar/>
      <Title 
        iconPath={require("./images/icons/home.svg").default} 
        titleText="У дома" 
        lineColor={require("./images/lines/blue.svg").default} 
        questionText="С колко души споделяте вашия дом?" 
      />
      <QuestionPeople/>
      <Answer 
        isTherePrev={false} 
        isThereNext={true} 
        buttonTitles={[]} 
      /> */}

      {/* Question 2 */}
      {/* <Sidebar/>
      <Title 
        iconPath={require("./images/icons/bath.svg").default} 
        titleText="Душ" 
        lineColor={require("./images/lines/blue.svg").default} 
        questionText="Колко време ви отнема да си вземете душ?" 
      />
      <QuestionPicture 
        src={require("./images/all/shower.png")} 
        alt="Showering" 
      />
      <Answer 
        isTherePrev={true} 
        isThereNext={false} 
        buttonTitles={['<5 минути', '5-10 минути', '11-15 минути', '>15 минути']} 
      /> */}

      {/* Question 3 */}
      {/* <Sidebar/>
      <Title 
        iconPath={require("./images/icons/bath.svg").default} 
        titleText="Душ" 
        lineColor={require("./images/lines/blue.svg").default} 
        questionText="Имате ли душове с ниска струя?" 
      />
      <QuestionPicture 
        src={require("./images/all/showerhead.png")} 
        alt="Shower" 
      />
      <Answer 
        isTherePrev={true} 
        isThereNext={false} 
        buttonTitles={['Да', 'Не', 'Някои']} 
      /> */}

      {/* Question 4 */}
      <Sidebar/>
      <Title 
        iconPath={require("./images/icons/bath.svg").default} 
        titleText="Вана" 
        lineColor={require("./images/lines/blue.svg").default} 
        questionText="Ползвате ли вана? Ако да, колко често?" 
      />
      <QuestionBath/>
      <Answer 
        isTherePrev={true} 
        isThereNext={true} 
        buttonTitles={[]} 
      />

      {/* Question 5 */}
      {/* <Sidebar/>
      <Title 
        iconPath={require("./images/icons/bath.svg").default} 
        titleText="Кранове в банята" 
        lineColor={require("./images/lines/blue.svg").default} 
        questionText="Колко дълго оставяте крановете в банята да текат (на ден)?" 
      />
      <QuestionPicture 
        src={require("./images/all/runningsink.png")} 
        alt="Running sink" 
      />
      <Answer 
        isTherePrev={true} 
        isThereNext={false} 
        buttonTitles={['<5 минути', '5-10 минути', '11-30 минути', '>30 минути']} 
      /> */}

      {/* Question 6 */}
      {/* <Sidebar/>
      <Title 
        iconPath={require("./images/icons/bath.svg").default} 
        titleText="Кранове в банята" 
        lineColor={require("./images/lines/blue.svg").default} 
        questionText="Крановете в банята с ниска струя ли са?" 
      />
      <QuestionPicture 
        src={require("./images/all/sink.png")} 
        alt="Sink" 
      />
      <Answer 
        isTherePrev={true} 
        isThereNext={false} 
        buttonTitles={['Да', 'Не', 'Някои']} 
      /> */}

      {/* Question 7 */}
      {/* <Sidebar/>
      <Title 
        iconPath={require("./images/icons/toilet.svg").default} 
        titleText="Тоалетна" 
        lineColor={require("./images/lines/blue.svg").default} 
        questionText="Тоалетната ви чиния има ли механизъм с различни степени на измиване?" 
      />
      <QuestionPicture 
        src={require("./images/all/toilet.png")} 
        alt="Toilet" 
        width="var(--scale) * 176" 
        margin="46%"
      />
      <Answer 
        isTherePrev={true} 
        isThereNext={false} 
        buttonTitles={['Да', 'Не', 'Някои']} 
      /> */}

      {/* Question 8 */}
      {/* <Sidebar/>
      <Title 
        iconPath={require("./images/icons/sink.svg").default} 
        titleText="Кухненски кран" 
        lineColor={require("./images/lines/blue.svg").default} 
        questionText="Колко дълго оставяте крановете в кухнята да текат (на ден)?" 
      />
      <QuestionPicture 
        src={require("./images/all/runningkitchensink.png")} 
        alt="Running sink" 
      />
      <Answer 
        isTherePrev={true} 
        isThereNext={false} 
        buttonTitles={['<5 минути', '5-20 минути', '21-45 минути', '>45 минути']} 
      /> */}

      {/* Question 9 */}
      {/* <Sidebar/>
      <Title 
        iconPath={require("./images/icons/sink.svg").default} 
        titleText="Кухненски кран" 
        lineColor={require("./images/lines/blue.svg").default} 
        questionText="Вашата кухненска мивка има ли кран с ниска струя?" 
      />
      <QuestionPicture 
        src={require("./images/all/kitchensink.png")} 
        alt="Sink" 
      />
      <Answer 
        isTherePrev={true} 
        isThereNext={false} 
        buttonTitles={['Да', 'Не']} 
      /> */}

      {/* Question 10 */}

      {/* Question 11 */}
      
      {/* Question 12 */}
      {/* <Sidebar/>
      <Title 
        iconPath={require("./images/icons/graywater.svg").default} 
        titleText="Сиво-водна система" 
        lineColor={require("./images/lines/blue.svg").default} 
        questionText="Имате ли вкъщи инсталирана система за повторна употреба на ползваната от крановете вода?" 
      />
      <QuestionPicture 
        src={require("./images/all/graywater.png")} 
        alt="Sink" 
        width="var(--scale) * 800" 
        margin="27%"
      />
      <Answer 
        isTherePrev={true} 
        isThereNext={false} 
        buttonTitles={['Да', 'Не']} 
      /> */}
    </div>
  );
}

export default App;
