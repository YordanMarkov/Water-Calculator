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

  // Warn the user that the changes may not be saved
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Required for Chrome, but ignored by most modern browsers
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);  
  

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
  const handleOptionClick = (answerIndex, answer) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[answerIndex] = { answer }; // Save answer to correct index
      console.log(answers);
      return updatedAnswers;
    });
  
    // Move to the next question automatically
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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

  const [answers, setAnswers] = useState([
    { area: "" },
    { people: null },
    { answer: null },
    { answer: null },
    { times: 0, period: "" }, // Store both values for Question 4
    { answer: null },
    { answer: null },
    { answer: null },
    { answer: null },
    { answer: null },
    [ ],
    [ ],  
    { answer: null },
  ]);

  const updateDishUsage = (newSelection) => {
    setAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[10] = newSelection; // Ensure index 10 gets updated properly
      return updatedAnswers;
    });
  };
  
  const updateWashingUsage = (newSelection) => {
    setAnswers(prevAnswers => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[11] = newSelection; // Ensure index 11 gets updated properly
      return updatedAnswers;
    });
  };  

  // Function to update bath usage answer
  const updateBathUsage = (times, period) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[4] = { times, period }; // Save both values
      console.log(answers[4]);
      return updatedAnswers;
    });
  };
  

  // Function to update people selection
  const updatePeople = (newPeople) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers]; // Copy array
      updatedAnswers[1].people = newPeople; // Modify value
      console.log(answers[1]);
      return updatedAnswers;
    });
  };

  // Function to update area selection
  const updateArea = (newArea) => {
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers]; // Copy array
      updatedAnswers[0].area = newArea; // Modify value
      console.log(answers[0]);
      return updatedAnswers;
    });
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
    // Where? (Question 0)
    {
      component: (
        <>
          <Title
            iconPath={require("./images/icons/map.svg").default}
            titleText="Но първо..."
            lineColor={require("./images/lines/blue.svg").default}
            questionText="В коя област живеете?"
          />
          <QuestionBG selectedArea={answers[0].area} onAreaChange={updateArea} />
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
        isThereNext: answers[0].area !== "", // Hide "Next" if no selection
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
          <QuestionPeople selectedPeople={answers[1].people} onPeopleChange={updatePeople} />
          <Info
            color="blue"
            text="
              За да изберете количеството хора във вашия дом, използвайте плъзгача от ляво на дясно. 
              Можете да изберете между 1 и 20.
            "
            video={require("./images/videos/people-tutorial.mp4")}
          />
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
        answerIndex: 2, // Save to answers[2]
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
          <Info
            color="blue"
            text="
              Душ с ниска струя е устройство, което намалява разхода на вода, като същевременно осигурява добра и комфортна струя. 
              Такива душове са проектирани да използват по-малко вода без да жертват ефективността на потока. 
              Те се различават от стандартните душове по това, че използват специална технология, която оптимизира потока, 
              като намалява обема на водата, която преминава през душа. Възможно е водният поток да изглежда по-слаб в сравнение със 
              старите душове, но те осигуряват същото усещане за комфорт. Душовете с ниска струя са често срещани в съвременните домове, 
              особено в тези, построени или ремонтирани след 1994 година, когато са въведени регулации за енергийна и водна ефективност. 
              Ако в дома ви има душ с воден поток от около 9-10 литра на минута, най-вероятно става въпрос за модел с ниска струя.
            "
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не', 'Някои'],
        answerIndex: 3, // Save to answers[3]
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
          <QuestionBath
            selectedTimes={answers[4].times} // Pass stored value
            selectedPeriod={answers[4].period} // Pass stored value
            onBathUsageChange={updateBathUsage} // Handle changes
          />
          <Info
            color="blue"
            text="
              За да изберете колко често използвате вана, използвайте знаците + (плюс) и
              - (минус), за да регулирате честотата. За да изберете период, използвайте
              менюто и предложените опции. Ако сте си променили решението, можете
              винаги да го смените, като повторите процеса. Ако не използвате вана, 
              можете да натиснете директно бутона 'Не използвам!'.
            "
            video={require("./images/videos/bath-tutorial.mp4")}
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: answers[4].times > 0 && answers[4].period !== "", // Show "Next" only if BOTH conditions are met
        buttonTitles: (answers[4].times === 0 || answers[4].period === "") ? ["Не използвам!"] : [], // Show "Не използвам!" only if one of them is missing
        answerIndex: 4, // Save to answers[4]
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
        answerIndex: 5, // Save to answers[5]
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
          <Info
            color="blue"
            text="
              Крановете с ниска струя в банята са проектирани да намаляват разхода на вода, като същевременно осигуряват 
              ефективен и комфортен поток. Те използват технологии, които ограничават количеството вода, което преминава 
              през крана, без да се компрометира функционалността. Разликата между тези кранове и стандартните е в 
              по-малкия поток, който все пак осигурява същото усещане за нормален и удобен режим на работа. 
              Крановете с ниска струя са често срещани в съвременните домове, особено в тези, 
              построени или ремонтирани след 1994 година, когато са въведени регулации за водна и енергийна ефективност. 
              Ако в дома ви имате кран с по-малък воден поток, най-вероятно това е модел с ниска струя.
            "
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не', 'Някои'],
        answerIndex: 6, // Save to answers[6]
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
        answerIndex: 7, // Save to answers[7]
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
        answerIndex: 8, // Save to answers[8]
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
          <Info
            color="blue"
            text="
              Кухненските кранове с ниска струя са проектирани да намаляват разхода на вода, като осигуряват ефективен поток, 
              подходящ за ежедневни нужди. Тези кранове използват технологии, които ограничават количеството вода, преминаващо 
              през тях, без да се нарушава комфортът на използването им. Разликата спрямо стандартните кранове е в по-малкия воден поток, 
              който също така позволява на домакинствата да пестят вода и енергия. Крановете с ниска струя са често срещани в съвременните 
              домове, особено в тези, построени или ремонтирани след 1994 година, когато са въведени регулации за водна ефективност. 
              Ако в кухнята ви има кран с по-малък поток, това вероятно е модел с ниска струя.
            "
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не'],
        answerIndex: 9, // Save to answers[9]
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
            selectedOptions={answers[10]} // Pass stored selections
            onDishUsageChange={updateDishUsage} // Function to update answers
          />
          <Info
            color="blue"
            text="
              Можете да изберете всички отговори, които отговарят във вашия случай.
              За да изберете колко често си миете съдовете по избраните от вас начини, 
              използвайте знаците + (плюс) и - (минус), за да регулирате честотата.
              Ако сте си променили решението, можете винаги да го смените.
            "
            video={require("./images/videos/dish-tutorial.mp4")}
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: answers[10].some(option => option.times > 0 && option.period !== ""), // Show "Next" only if valid answers exist
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
            selectedOptions={answers[11]}
            onDishUsageChange={updateWashingUsage} 
          />
          <Info
            color="blue"
            text="
              Можете да изберете всички отговори, които отговарят във вашия случай.
              За да изберете колко често си перете по избраните от вас начини, 
              използвайте знаците + (плюс) и - (минус), за да регулирате честотата.
              За да изберете период, използвайте менюто и предложените опции.
              Ако сте си променили решението, можете винаги да го смените.
            "
            video={require("./images/videos/wash-tutorial.mp4")}
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: answers[11]?.some(option => option.times > 0 && option.period !== ""),
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
          <Info
            color="blue"
            text="
              Сиво-водната система позволява повторното използване на вода от мивки, душове и перални машини за 
              напояване на двора. Тази система намалява разхода на питейна вода, като пренасочва използваната, 
              но не силно замърсена вода към градината. Разликата спрямо стандартните канализационни системи е, 
              че вместо водата да бъде изцяло изхвърлена, тя се филтрира и използва повторно. Сиво-водните системи 
              са все по-популярни в модерните домове, тъй като могат значително да намалят водната консумация и да 
              допринесат за устойчивото управление на ресурсите.
            "
          />
        </>
      ),
      answerProps: {
        isTherePrev: true,
        isThereNext: false,
        buttonTitles: ['Да', 'Не'],
        answerIndex: 12, // Save to answers[12]
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
        answerIndex: 13, // Save to answers[13]
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
          <Info
            color="green"
            text="
              За да изберете приблизителната площ, която поливате, можете
              да използвате плъзгача от ляво на дясно или директно да кликнете
              върху желаната стойност отбелязана под него.
            "
            video={require("./images/videos/garden-tutorial.mp4")}
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
          <Info
            color="green"
            text="
              Съдът за дъждовна вода позволява събиране на дъждовната вода, която може да се използва за 
              напояване на градината и други външни нужди. Това намалява нуждата от питейна вода и помага 
              за ефективно управление на ресурсите, особено през летните месеци. Един съд може да спести значително 
              количество вода, което да бъде използвано по време на горещите месеци, когато потреблението на вода е най-високо.
            "
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
          <Info
            color="green"
            text="
              За да изберете колко месеца вашият плувен басейн седи покрит,
              използвайте плъзгача от ляво на дясно.
            "
            video={require("./images/videos/pool-tutorial.mp4")}
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
          <Info
            color="green"
            text="
              Можете да изберете всички отговори, които отговарят във вашия случай.
              За да изберете колко често си миете автомобила по избраните от вас начини, 
              използвайте знаците + (плюс) и - (минус), за да регулирате честотата. За да изберете период, използвайте
              менюто и предложените опции. Ако сте си променили решението, можете
              винаги да го смените, като повторите процеса. За да се откажете от
              даден отговор, винаги можете да го затворите с червения бутон вляво.
            "
            video={require("./images/videos/car-tutorial.mp4")}
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
          <Info
            color="purple"
            text="
              За да изберете приблизително изминатите километри, които изминавате седмично, можете
              да използвате плъзгача от ляво на дясно или директно да кликнете
              върху част от него.
            "
            video={require("./images/videos/km-tutorial.mp4")}
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
          <Info
            color="purple"
            text="
              Ток от дома използва соларни панели и възобновяеми източници, намалявайки зависимостта от мрежите и осигурявайки 
              устойчиво захранване. Ток от ел. централа идва от въглища, ядрени реактори или хидроелектрически станции, което 
              може да увеличи замърсяването и зависимостта от неустойчиви източници.
              Използвайте плъзгача, за да изберете процента ток от дома и ел. централа, като можете да настроите стойността 
              по желаното разпределение. Можете да отбележите 100% за един от изборите.
            "
            video={require("./images/videos/el-tutorial.mp4")}
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
          <Info
            color="purple"
            text="
              За да отбележите диетата на хората от дома, трябва да ги разпределите. 
              За да го направите, трябва чрез знаците + (плюс) и - (минус) да отбележите
              количеството хора, които отговарят на дадената диета. Не можете да сложите
              по-голяма сума от броя души във вашия дом! Индикаторът в дясната част на екрана
              показва колко души ви остават за разпределяне. Винаги можете да извадите от един
              отговор, за да прибавите към друг.
            "
            video={require("./images/videos/diet-tutorial.mp4")}
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
          <Info
            color="purple"
            text="
              За да отбележите честотата на хранене с месо на хората от дома, които са всеядни (отбелязани
              от предишния въпрос), трябва да ги разпределите. 
              За да го направите, трябва чрез знаците + (плюс) и - (минус) да отбележите
              количеството хора, които отговарят на дадената честота. Не можете да сложите
              по-голяма сума от броя души във вашия дом! Индикаторът в дясната част на екрана
              показва колко души ви остават за разпределяне. Винаги можете да извадите от един
              отговор, за да прибавите към друг.
            "
            video={require("./images/videos/meat-tutorial.mp4")}
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
          <Info
            color="purple"
            text=" 
              За да формулирате отговор на въпроса, трябва чрез знаците + (плюс) и - (минус) да 
              поясните месечната сума левове, които заделяте за вашите домашни любимци.
              Стъпката за прибавяне и изваждане е 5 лв. Отбележете възможно най-близката
              сума. Винаги можете да отбележите 0 лв., ако нямате домашни любимци или 
              не заделяте бюджет за тях.
            "
            video={require("./images/videos/pet-tutorial.mp4")}
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
