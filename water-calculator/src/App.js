import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Title from './components/Title';
import QuestionPeople from './components/QuestionPeople';
import QuestionBath from './components/QuestionBath';
import QuestionPicture from './components/QuestionPicture';
import QuestionAdvancedSelection from './components/QuestionAdvancedSelection';
import QuestionGarden from './components/QuestionGarden';
import QuestionPool from './components/QuestionPool';
import QuestionKM from './components/QuestionKM';
import QuestionBG from './components/QuestionBG';
import QuestionEl from './components/QuestionEl';
import QuestionFood from './components/QuestionFood';
import QuestionPet from './components/QuestionPet';
import Answer from './components/Answer';
import AnswerVerticalSection from './components/AnswerVerticalSection';
import Progress from './components/Progress';
import Info from './components/Info';

// These Sidebars were split into separate components 
// but I combined them into one SidebarCombined component

// import Sidebar from './components/Sidebar';
// import SidebarGreen from './components/SidebarGreen';
// import SidebarPurple from './components/SidebarPurple';

import SidebarCombined from './components/SidebarCombined';
import Results from './components/Results';
import Welcome from './components/Welcome';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Go to the next question
  const goToNextQuestion = () => {
    if (
      currentQuestionIndex < questions.length - 1 && // Not the last question
      questions[currentQuestionIndex].answerProps.isThereNext // Can go forward
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to next
    }
  };

  // Go to the previous question
  const goToPrevQuestion = () => {
    if (currentQuestionIndex > 0) { // Not the first question
      setCurrentQuestionIndex(currentQuestionIndex - 1); // Move back
    }
  };

  // On option click, go to the next question
  const handleOptionClick = () => {
    if (currentQuestionIndex < questions.length - 1) { // Not the last question
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to next
    }
  };

  // Go back to the first question
  const goBack = () => {
    setCurrentQuestionIndex(0); // Reset to start
  };

  // Go to the second question
  const goNext = () => {
    setCurrentQuestionIndex(1); //
  };

  // List of all questions in the Water Calculator
  // All of them are components with different props
  const questions = [
    // Welcome
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/welcome.svg").default}
            titleText="Добре дошли"
            lineColor={require("./images/lines/blue.svg").default}
          />
          <Welcome goNext={goNext}/>
        </>
      ),
      answerProps: {
        isTherePrev: false,
        isThereNext: false,
        buttonTitles: [],
      },
    },
    // Where?
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/map.svg").default}
            titleText="Но първо..."
            lineColor={require("./images/lines/blue.svg").default}
            questionText="В коя област живеете?"
          />
          <QuestionBG/>
          <Info
            color="blue"
            text="
              Можете да изберете вашата област като натиснете върху бутона 'Изберете...'. За да отбележите, кликнете върху предложените опции.
              За да смените вашия отговор - повторете.
            "
            video={require("./images/videos/area-tutorial.mp4")}
          />
        </>
      ),
      answerProps: {
        isThereNext: true,
        buttonTitles: [],
      },
    },
    // Question 1
    {
      component: (
        <>
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
        isTherePrev: true,
        isThereNext: true,
        buttonTitles: [],
      },
    },
    // Question 2
    {
      component: (
        <>
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
          <Title
            iconPath={require("./images/icons/bath.svg").default}
            titleText="Вана"
            lineColor={require("./images/lines/blue.svg").default}
            questionText="Колко често използвате вана?"
          />
          <QuestionBath />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ["Не използвам!"],
      },
    },
    // Question 5
    {
      component: (
        <>
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
              "На ръка ",
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
    // Question 16
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/barrel.svg").default}
            titleText="Съд за дъжд"
            lineColor={require("./images/lines/green.svg").default}
            questionText="Имате ли съд за дъждовна вода?"
            isGreen={true}
          />
          <QuestionPicture
            src={require("./images/all/barrel.png")}
            alt="Barrel"
            width="var(--scale) * 700" 
            margin="32%"
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
    // Question 17
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/pool.svg").default}
            titleText="Плувен басейн"
            lineColor={require("./images/lines/green.svg").default}
            questionText="Имате ли плувен басейн?"
            isGreen={true}
          />
          <QuestionPicture
            src={require("./images/all/pool.png")}
            alt="Pool"
            width="var(--scale) * 700" 
            margin="32%"
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
    // Question 18
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/pool.svg").default}
            titleText="Плувен басейн"
            lineColor={require("./images/lines/green.svg").default}
            questionText="Колко месеца той седи покрит?"
            isGreen={true}
          />
          <QuestionPool/>
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: true,
        buttonTitles: [],
        isGreen: true,
      },
    },
    // Question 19
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/car.svg").default}
            titleText="Автопочистване"
            lineColor={require("./images/lines/green.svg").default}
            questionText="Имате ли автомобил?"
            isGreen={true}
          />
          <QuestionPicture
            src={require("./images/all/car.png")}
            alt="Car"
            width="var(--scale) * 550" 
            margin="36%"
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
    // Question 20
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/car.svg").default}
            titleText="Автопочистване"
            lineColor={require("./images/lines/green.svg").default}
            questionText="Как си миете автомобила?"
            isGreen={true}
          />
          <QuestionAdvancedSelection
            options={[
              "С маркуч от вкъщи",
              "Автомивка",
              "Автомивка на самообслужване",
            ]}
            questionCount={4}
            bigImageSrc={require("./images/all/carwash.png")}
            isGreen={true}
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: true,
        buttonTitles: [],
        isGreen: true,
      },
    },
    // Outdoor Water
    // Question 21
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/car-purple.svg").default}
            titleText="Шофиране"
            lineColor={require("./images/lines/purple.svg").default}
            questionText="Колко километра изминавате седмично?"
            isPurple={true}
          />
          <QuestionKM/>
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: true,
        buttonTitles: [],
        isPurple: true,
      },
    },
    // Question 22 - NO LONGER HERE! MOVED TO BEING THE FIRST QUESTION!
    // {
    //   component: (
    //     <>
    //       <Title
    //         iconPath={require("./images/icons/bulb.svg").default}
    //         titleText="Електричество"
    //         lineColor={require("./images/lines/purple.svg").default}
    //         questionText="В коя област живеете?"
    //         isPurple={true}
    //       />
    //       <QuestionBG/>
    //     </>
    //   ),
    //   answerProps: {
    //     isTherePrev: true,
    //     isThereNext: true,
    //     buttonTitles: [],
    //     isPurple: true,
    //   },
    // },
    // Question 23
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/bulb.svg").default}
            titleText="Електричество"
            lineColor={require("./images/lines/purple.svg").default}
            questionText="Откъде идва вашият ток?"
            isPurple={true}
          />
          <QuestionEl/>
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: true,
        buttonTitles: [],
        isPurple: true,
      },
    },
    // Question 24
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/bag.svg").default}
            titleText="Пазаруване"
            lineColor={require("./images/lines/purple.svg").default}
            questionText="Колко пазарувате?"
            isPurple={true}
          />
          <QuestionPicture
            src={require("./images/all/shopping.png")}
            alt="Shopping"
            width="var(--scale) * 311" 
            margin="41%"
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Само нужното', 'Харесвам', 'До припадък!'],
        isPurple: true,
      },
    },
    // Question 25
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/recycle.svg").default}
            titleText="Хартия"
            lineColor={require("./images/lines/purple.svg").default}
            questionText="Рециклирате ли хартия?"
            isPurple={true}
          />
          <QuestionPicture
            src={require("./images/all/paper.png")}
            alt="Paper"
            width="var(--scale) * 311" 
            margin="42%"
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не', 'Понякога'],
        isPurple: true,
      },
    },
    // Question 26
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/recycle.svg").default}
            titleText="Пластмаса"
            lineColor={require("./images/lines/purple.svg").default}
            questionText="Рециклирате ли пластмаса?"
            isPurple={true}
          />
          <QuestionPicture
            src={require("./images/all/plastic.png")}
            alt="Plastic"
            width="var(--scale) * 311" 
            margin="42%"
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не', 'Понякога'],
        isPurple: true,
      },
    },
    // Question 27
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/recycle.svg").default}
            titleText="Бутилки и кенчета"
            lineColor={require("./images/lines/purple.svg").default}
            questionText="Рециклирате ли вашите стъклени бутилки и метални кенчета?"
            isPurple={true}
          />
          <QuestionPicture
            src={require("./images/all/bottles-cans.png")}
            alt="Bottles-cans"
            width="var(--scale) * 611" 
            margin="31%"
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не', 'Понякога'],
        isPurple: true,
      },
    },
    // Question 28
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/recycle.svg").default}
            titleText="Плат"
            lineColor={require("./images/lines/purple.svg").default}
            questionText="Дарявате или преизползвате ли вашите стари дрехи, чаршафи и други?"
            isPurple={true}
          />
          <QuestionPicture
            src={require("./images/all/donate.png")}
            alt="Donate"
            width="var(--scale) * 311" 
            margin="42%"
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не', 'Понякога'],
        isPurple: true,
      },
    },
    // Question 30
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/food.svg").default}
            titleText="Хранене"
            lineColor={require("./images/lines/purple.svg").default}
            questionText="Какво е вашето хранене?"
            isPurple={true}
          />
          <QuestionFood
            foodCounter={4}
            foodEndCounterText="в дома"
            questions={["Веган", "Вегетарианец", "Всеяден"]}
            foodImage={require("./images/all/foodtray.png")}
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: true,
        buttonTitles: [],
        isPurple: true,
      },
    },
    // Question 31
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/food.svg").default}
            titleText="Хранене"
            lineColor={require("./images/lines/purple.svg").default}
            questionText="Колко често ядете месо?"
            isPurple={true}
          />
          <QuestionFood
            foodCounter={2}
            foodEndCounterText="всеядни"
            questions={["Не всеки ден", "Веднъж дневно", "Два пъти дневно", "На всяко хранене"]}
            foodImage={require("./images/all/steak.png")}
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: true,
        buttonTitles: [],
        isPurple: true,
      },
    },
    // Question 31
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/bone.svg").default}
            titleText="Храна за животни"
            lineColor={require("./images/lines/purple.svg").default}
            questionText="Какъв бюджет заделяте, за да закупите храна за вашите домашни любимци?"
            isPurple={true}
          />
          <QuestionPet/>
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: true,
        buttonTitles: [],
        isPurple: true,
      },
    },
    // Question 32
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/chat.svg").default}
            titleText="Още малко..."
            lineColor={require("./images/lines/purple.svg").default}
            questionText="От какво се интересувате най-много?"
            isPurple={true}
          />
          <AnswerVerticalSection 
            questions={['Как да пестя вода', 'Да помогна на природата', 'Пестене на пари', 'Да си разбера водния отпечатък']} 
            goToNext={handleOptionClick}
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: [],
        isPurple: true,
      },
    },
    // Question 33
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/chat.svg").default}
            titleText="Последен въпрос!"
            lineColor={require("./images/lines/purple.svg").default}
            questionText="За какво най-много искате да научите?"
            isPurple={true}
          />
          <AnswerVerticalSection 
            questions={['За вътрешната ВиК система', 'За външната ВиК система', 'За виртуалната ВиК система']} 
            goToNext={handleOptionClick}
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: [],
        isPurple: true,
      },
    },
    // Results
    {
      component: (
        <>
          <Results
            goBack={goBack}
          />
        </>
      ),
      answerProps: {
        isTherePrev: false,
        isThereNext: false,
        buttonTitles: [],
      },
    }
  ];  

  const sidebarRef = useRef(null);

  useEffect(() => {
    // Change background color based on question index
    if (currentQuestionIndex >= 0 && currentQuestionIndex <= 13) {
      document.body.style.backgroundColor = '#E1F1FE';
    } else if (currentQuestionIndex >= 14 && currentQuestionIndex <= 21) {
      document.body.style.backgroundColor = '#E1FEED';
    } else if (currentQuestionIndex >= 22 && currentQuestionIndex <= 33) {
      document.body.style.backgroundColor = '#E1E4FE';
    } else if (currentQuestionIndex === 34) {
      document.body.style.backgroundColor = '#E1F1FE';
    }

    // There is no need for that anymore since the sidebar has changed!
    // if (sidebarRef.current) {
    //   // Adjust sidebar scroll position
    //   if (currentQuestionIndex <= 11) {
    //     sidebarRef.current.scrollTop = 0; // Scroll to top
    //   } else if (currentQuestionIndex >= 12 && currentQuestionIndex <= 19) {
    //     sidebarRef.current.scrollTop = sidebarRef.current.scrollHeight / 3; // Scroll to 1/3
    //   } else if (currentQuestionIndex >= 20) {
    //     sidebarRef.current.scrollTop = sidebarRef.current.scrollHeight; // Scroll to bottom
    //   }
    // }

    return () => {
      document.body.style.backgroundColor = ''; // Reset background color on cleanup
    };
  }, [currentQuestionIndex]); // Run effect when currentQuestionIndex changes


  return (
    <div>
      {/* Logo */}
      <img className="logo" src={require("./images/all/logo.svg").default} alt="logo" />
      
      {/* Show sidebar if not on the last question (which is the result page) */}
      {(currentQuestionIndex !== 34 && currentQuestionIndex !== 0) && (
        <SidebarCombined
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          ref={sidebarRef}
        />
      )}
      
      {/* Render the current question's component */}
      {questions[currentQuestionIndex].component}
      
      {/* Render the answer section */}
      <Answer
        {...questions[currentQuestionIndex].answerProps} // Pass question props
        isTherePrev={questions[currentQuestionIndex].answerProps.isTherePrev} // Show prev button
        isThereNext={questions[currentQuestionIndex].answerProps.isThereNext} // Show next button
        buttonTitles={questions[currentQuestionIndex].answerProps.buttonTitles || []} // Button titles
        goToNext={goToNextQuestion} // Next question handler
        goToPrev={goToPrevQuestion} // Previous question handler
        onOptionClick={handleOptionClick} // Option click handler
      />
      {/* Render the progress bar if not on the last question (which is the result page) */}
      {(currentQuestionIndex !== 34 && currentQuestionIndex !== 0) && (
        <Progress 
          currentQuestionIndex={currentQuestionIndex} 
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
      )}
    </div>
  );  
}

export default App;
