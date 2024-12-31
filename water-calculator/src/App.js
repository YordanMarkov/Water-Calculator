import React, { useState, useEffect } from 'react';
import './App.css';
import Title from './components/Title';
import QuestionPeople from './components/QuestionPeople';
import QuestionBath from './components/QuestionBath';
import QuestionPicture from './components/QuestionPicture';
import QuestionAdvancedSelection from './components/QuestionAdvancedSelection';
import QuestionGarden from './components/QuestionGarden';
import Answer from './components/Answer';
import Sidebar from './components/Sidebar';
import SidebarGreen from './components/SidebarGreen';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    // Question 1
    {
      component: (
        <>
          <Sidebar
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
          <Title
            iconPath={require("./images/icons/home.svg").default}
            titleText="У дома"
            lineColor={require("./images/lines/blue.svg").default}
            questionText="С колко души споделяте вашия дом?"
          />
          <QuestionPeople />
        </>
      ),
      answerProps: {
        isTherePrev: false,
        isThereNext: true,
        buttonTitles: [],
      },
    },
    // Question 2
    {
      component: (
        <>
          <Sidebar
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
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
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['<5 минути', '5-10 минути', '11-15 минути', '>15 минути'],
      },
    },
    // Question 3
    {
      component: (
        <>
          <Sidebar
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
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
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не', 'Някои'],
      },
    },
    // Question 4
    {
      component: (
        <>
          <Sidebar
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
          <Title
            iconPath={require("./images/icons/bath.svg").default}
            titleText="Вана"
            lineColor={require("./images/lines/blue.svg").default}
            questionText="Ползвате ли вана? Ако да, колко често?"
          />
          <QuestionBath />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: true,
        buttonTitles: [],
      },
    },
    // Question 5
    {
      component: (
        <>
          <Sidebar
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
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
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['<5 минути', '5-10 минути', '11-30 минути', '>30 минути'],
      },
    },
    // Question 6
    {
      component: (
        <>
          <Sidebar
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
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
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не', 'Някои'],
      },
    },
    // Question 7
    {
      component: (
        <>
          <Sidebar
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
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
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не', 'Някои'],
      },
    },
    // Question 8
    {
      component: (
        <>
          <Sidebar
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
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
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['<5 минути', '5-20 минути', '21-45 минути', '>45 минути'],
      },
    },
    // Question 9
    {
      component: (
        <>
          <Sidebar
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
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
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не'],
      },
    },
    // Question 10
    {
      component: (
        <>
          <Sidebar
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
          <Title
            iconPath={require("./images/icons/dish.svg").default}
            titleText="Съдове"
            lineColor={require("./images/lines/blue.svg").default}
            questionText="Как си миете съдовете?"
          />
          <QuestionAdvancedSelection
            options={[
              "Обикновена съдомиялна",
              "Енерго/Водоефективна съдомиялна",
              "На ръка",
              "Хвърлям ги / Не ям вкъщи",
            ]}
            questionCount={4}
            bigImageSrc={require("./images/all/dish.png")}
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: true,
        buttonTitles: [],
      },
    },
    // Question 11
    {
      component: (
        <>
          <Sidebar
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
          <Title
            iconPath={require("./images/icons/washingmachine.svg").default}
            titleText="Пералня"
            lineColor={require("./images/lines/blue.svg").default}
            questionText="Как перете?"
          />
          <QuestionAdvancedSelection
            options={[
              "Обикновена пералня",
              "Енерго/Водоефективна пералня",
              "На ръка",
              "Обществена пералня / Друго",
            ]}
            questionCount={4}
            bigImageSrc={require("./images/all/washingmachine.png")}
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: true,
        buttonTitles: [],
      },
    },
    // Question 12
    {
      component: (
        <>
          <Sidebar
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
          <Title
            iconPath={require("./images/icons/graywater.svg").default}
            titleText="Сиво-водна система"
            lineColor={require("./images/lines/blue.svg").default}
            questionText="Имате ли вкъщи инсталирана система за повторна употреба на ползваната от крановете вода?"
          />
          <QuestionPicture
            src={require("./images/all/graywater.png")}
            alt="Graywater"
            width="var(--scale) * 800" 
            margin="27%"
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не'],
      },
    },
    // Outdoor Water
    // Question 13
    {
      component: (
        <>
          <SidebarGreen
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
          <Title
            iconPath={require("./images/icons/sprinkler.svg").default}
            titleText="Морава и градина"
            lineColor={require("./images/lines/green.svg").default}
            questionText="Поливате ли си вашата морава или градина?"
            isGreen={true}
          />
          <QuestionPicture
            src={require("./images/all/sprinkler.png")}
            alt="Sprinkler"
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не'],
        isGreen: true,
      },
    },

    // Question 14
    {
      component: (
        <>
          <SidebarGreen
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
          <Title
            iconPath={require("./images/icons/sprinkler.svg").default}
            titleText="Морава и градина"
            lineColor={require("./images/lines/green.svg").default}
            questionText="Каква площ поливате?"
            isGreen={true}
          />
          <QuestionGarden/>
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: true,
        buttonTitles: [],
        isGreen: true,
      },
    },
    // Question 15
    {
      component: (
        <>
          <SidebarGreen
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
          />
          <Title
            iconPath={require("./images/icons/sprinkler.svg").default}
            titleText="Морава и градина"
            lineColor={require("./images/lines/green.svg").default}
            questionText="Озеленявате ли с растения, които изискват малко или никаква вода?"
            isGreen={true}
          />
          <QuestionPicture
            src={require("./images/all/cactus.png")}
            alt="Sprinkler"
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не'],
        isGreen: true,
      },
    },
  ];  

  const goToNextQuestion = () => {
    if (
      currentQuestionIndex < questions.length - 1 &&
      questions[currentQuestionIndex].answerProps.isThereNext
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleOptionClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex >= 0 && currentQuestionIndex <= 11) {
      document.body.style.backgroundColor = '#E1F1FE';
    } else if (currentQuestionIndex >= 12 && currentQuestionIndex <= 18) {
      document.body.style.backgroundColor = '#E1FEED';
    }

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [currentQuestionIndex]);

  return (
    <div>
      <img className="logo" src={require("./images/all/logo.svg").default} alt="logo" />
      {questions[currentQuestionIndex].component}
      <Answer
        {...questions[currentQuestionIndex].answerProps}
        isTherePrev={questions[currentQuestionIndex].answerProps.isTherePrev}
        isThereNext={questions[currentQuestionIndex].answerProps.isThereNext}
        buttonTitles={questions[currentQuestionIndex].answerProps.buttonTitles || []}
        goToNext={goToNextQuestion}
        goToPrev={goToPrevQuestion}
        onOptionClick={handleOptionClick}
      />
    </div>
  );
}

export default App;
