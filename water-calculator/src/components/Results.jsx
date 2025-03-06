import './Results.css';
import { useState, useEffect } from "react";

function scrollDown() {
  window.scrollBy({
    top: 1110,
    behavior: 'smooth'
  });
}

function Results({goBack, answers}) {
  // IMPORTANT: This component is static! Nothing is functional behind and the calculations
  // are completely made up. The purpose of this component is to show how the final results
  // would look like in the app!

  // const [answers, setAnswers] = useState([
  //     { area: "" }, // 0 Sofia
  //     { people: 1 }, // 1 People in household
  //     { answer: null }, // 2 Time for shower
  //     { answer: null }, // 3 Low-flow shower
  //     { times: 0, period: "" }, // 4 Bath (or don't use)
  //     { answer: null }, // 5 Bathroom sink time
  //     { answer: null }, // 6 Low-flow bathroom sink
  //     { answer: null }, // 7 Toilet 
  //     { answer: null }, // 8 Kitchen sink time
  //     { answer: null }, // 9 Kitchen sink low-flow
  //     [ ], // 10 Dish question
  //     [ ],  // 10 + 11 Dish question + washing question
  //     { answer: null }, // 12 Graywater
  //     { answer: null }, // 13 Do you water your garden?
  //     { times: 0, period: "", value: 1 }, // 14 Garden times period area
  //     { answer: null }, // 15 Cactus plants
  //     { answer: null }, // 16 Barrel
  //     { answer: null }, // 17 Pool
  //     { months: 1 }, // 18 Pool months
  //     { answer: null }, // 19 Do you have a car?
  //     [ ], // 20 Carwash
  //     { value: 0 }, // 21 Car km
  //     {home: 50, el: 50}, // 22 Electricty
  //     { answer: null }, // 23 Shopping
  //     { answer: null }, // 24 Paper
  //     { answer: null }, // 25 Plastic
  //     { answer: null }, // 26 Bottles and cans
  //     { answer: null }, // 27 Fabric
  //     [{vegan: 0}, {vegetarian: 0}, {omnivore: 0}], // 28 Diet
  //     [{no: 0}, {once: 0}, {twice: 0}, {every: 0}], // 29 Omni
  //     { lv: 0 }, // 30 Pets
  //     { answer: null }, // 31 For what do you care most?
  //     { answer: null }, // 32 Most learn about
  //   ]);

  const [total, setTotal] = useState(0);
  const [sum, setSum] = useState(0);
  const [virtual, setVirtual] = useState(0);

  const tips = [
    {
      icon: require("../images/all/bath-cloud.svg").default,
      description: "Знаете ли, че една пълна вана може да използва около 400 литра вода, докато 10-минутен душ – само около 100 литра? Използвайте душ, за да спестите вода, пари и да се грижите за околната среда!"
    },
    {
      icon: require("../images/all/dish-cloud.svg").default,
      description: "Дори и да изглежда, че съдомиялната е по-скъпа за покупка, истината е, че миенето на съдовете на ръка често води до по-голяма консумация на вода. Съдомиялната е добро начало – а водоефективната е най-добрата, защото спестява вода и енергия, осигурявайки отлични резултати!"
    },
    {
      icon: require("../images/all/sprinkler-cloud.svg").default,
      description: "Да поливаш градината си чрез пръскачка може да изглежда практично, но ако градината е много голяма, това може да доведе до сериозно разхищение на вода. Помислете за оптимизиране на напояването с капково напояване или автоматизирани системи, които контролират разхода."
    },
    {
      icon: require("../images/all/car-cloud.svg").default,
      description: "Миенето на автомобили може да бъде истинско предизвикателство за някои, но правилният подход може да спести значително количество вода. Използвайте автомивки с рециклирана вода или методи, проектирани да пестят вода, за да осигурите ефективност."
    },
    {
      icon: require("../images/all/recycle-cloud.svg").default,
      description: "Истината в рециклирането е, че то не само намалява отпадъците, но и спестява значителни количества вода. Например, чрез рециклиране на хладилни агенти и други материали се намалява необходимостта от водоемки производствени процеси."
    },
    {
      icon: require("../images/all/swim-cloud.svg").default,
      description: "Поддържането на басейн не е за всеки, но ако басейнът е открит през по-голямата част от годината, значителни количества вода могат да се изгубят поради изпарение и поддръжка. Обмислете по-ефективни решения за покриване и поддръжка."
    },
    {
      icon: require("../images/all/meal-cloud.svg").default,
      description: "Яденето на месо е за мнозина истинско удоволствие, но ограничаването му може да доведе до значително спестяване на вода, тъй като производството на месо е изключително водоемко."
    },
    {
      icon: require("../images/all/wash-cloud.svg").default,
      description: "Да переш на ръка е вече старомодно и водоемко. Модерните перални, дори водоефективните, предлагат по-нисък разход на вода и по-добра ефективност при прането."
    },
    {
      icon: require("../images/all/light-cloud.svg").default,
      description: "Инсталирането на слънчеви панели или други енергоспестяващи технологии може не само да намали разходите за електроенергия, но и да подпомогне съхранението и пестенето на вода."
    },
    {
      icon: require("../images/all/sink-cloud.svg").default,
      description: "Ако използвате стари кранове с висока струя, това може да означава, че домът ви е построен преди 1994 г. Помислете за смяна с модерни, нискоразходни модели, които помагат за намаляване на водния разход."
    },
    {
      icon: require("../images/all/gray-cloud.svg").default,
      description: "Сиво-водната система за преизползване е невероятна! Тя може да рециклира използваната вода от домакинството и да я използва за тоалетни, градина или пералня, намалявайки общата консумация."
    },
    {
      icon: require("../images/all/shop-cloud.svg").default,
      description: "Пазаруването е удоволствие за много, но прекомерното потребление води до значителни разходи на водните ресурси. Избирайте продукти с по-малко опаковки и подкрепяйте устойчиви марки за по-малък отпечатък."
    },
    {
      icon: require("../images/all/pet-cloud.svg").default,
      description: "Домашният любимец е част от семейството, но поддръжката му може да доведе до допълнителни разходи за вода. Оптимизирайте грижите за него чрез ефективни методи и продукти, които спестяват вода."
    }
  ];    

  // Compute the filtered tips based on the user's answers.
  // (Note: You may need to adjust thresholds and exact comparisons based on your answer structure.)
  const filteredTips = [];

  // 1. Bath usage tip – if the user uses the bath.
  if (answers[4].answer !== "Не използвам!") {
    filteredTips.push(tips[0]);
  }

  // 2. Handwash dishes more than 4 times per day.
  if (
    answers[10].some(
      (item) => item.option.trim() === "На ръка" && item.times > 4
    )
  ) {
    filteredTips.push(tips[1]);
  }

  // 3. Garden watering too often and large garden.
  if (
    answers[13].answer === "Да" &&
    (answers[14].times > 4 || answers[14].value >= 4)
  ) {
    filteredTips.push(tips[2]);
  }

  // 4. Car washing by hand too often.
  if (
    answers[20].some(
      (item) => item.option === "С маркуч от вкъщи" && item.times > 2
    )
  ) {
    filteredTips.push(tips[3]);
  }

  // 5. Not recycling (this assumes you have a "recycle" flag in answers)
  if (answers.recycle === false) {
    filteredTips.push(tips[4]);
  }

  // 6. Pool uncovered more than 4 months (assuming answers[18].months is months the pool is covered)
  // For example, if the pool is covered less than 8 months, it is uncovered more than 4 months.
  if (answers[17].answer === "Да" && answers[18].months < 8) {
    filteredTips.push(tips[5]);
  }

  // 7. Presence of omnivores in the household.
  if (
    answers[29].some(
      (item) =>
        (item.no && item.no > 0) ||
        (item.once && item.once > 0) ||
        (item.twice && item.twice > 0) ||
        (item.every && item.every > 0)
    )
  ) {
    filteredTips.push(tips[6]);
  }

  // 8. If people handwash their clothes.
  if (answers[11].some((item) => item.option === "На ръка")) {
    filteredTips.push(tips[7]);
  }

  // 9. If people use 100% of electricity.
  if (answers[22].el === 100) {
    filteredTips.push(tips[8]);
  }

  // 10. If any low-flow sink/shower question is answered negatively.
  if (
    answers[3].answer === "Не" ||
    answers[6].answer === "Не" ||
    answers[9].answer === "Не"
  ) {
    filteredTips.push(tips[9]);
  }

  // 11. If the user said no to graywater (i.e. not using it).
  if (answers[12].answer !== "Да") {
    filteredTips.push(tips[10]);
  }

  // 12. If the user loves to shop ("Харесвам" or "До припадък!").
  if (
    answers[23].answer === "Харесвам" ||
    answers[23].answer === "До припадък!"
  ) {
    filteredTips.push(tips[11]);
  }

  // 13. If the user spent more than 50 lv on their pet.
  if (answers[30].lv > 50) {
    filteredTips.push(tips[12]);
  }

  useEffect(() => {

    let newTotal = 0;
    
    // People are used to SPLIT the result (maybe? idk)
    const people = answers[1].people;

    // Time for shower + low-flow shower answers are looked at together
    // <5 -> 4
    // 5-10 -> 8
    // 11-15 -> 13
    // >15 -> 15
    // low-flow? -> yes -> low-flow = 10
    // some -> 14.5
    // no -> 19
    // total += time for shower * low-flow
    const showerTimeMap = {
      '<5 минути': 4,
      '5-10 минути': 8,
      '11-15 минути': 13,
      '>15 минути': 15
    };
    
    const lowFlowMap = {
      'Да': 10,
      'Някои': 14.5,
      'Не': 19
    };
    
    newTotal += showerTimeMap[answers[2].answer] * lowFlowMap[answers[3].answer] / people;
    console.log("Shower " + newTotal);

    // Bath, if there the user uses
    // periods and their meanings:
    // per day -> 1
    // per wekk -> 1/7
    // per month -> 1/30
    // per year -> 1/365
    // total += 133 * period / people
    const periodMap = {
      'Ден': 1,
      'Седмица': 1/7,
      'Месец': 1/30,
      'Година': 1/365
    }
    if(answers[4].answer !== 'Не използвам!') {
      newTotal += (133 * periodMap[answers[4].period] * answers[4].times) / people;
    }
    console.log("Bath " + newTotal);


    // Time for bathroom sink + low-flow bathroom sinks are looked at together
    // <5 -> 4
    // 5-10 -> 8
    // 11-30 -> 20
    // >30 -> 30
    // low-flow? -> yes -> low-flow = 6
    // some -> 12.5
    // no -> 19
    // total += time for bathroom sink * low-flow
    const bathroomSinkTimeMap = {
      '<5 минути': 4,
      '5-10 минути': 8,
      '11-30 минути': 20,
      '>30 минути': 30
    };

    const lowBathroomSinkFlowMap = {
      'Да': 6,
      'Някои': 12.5,
      'Не': 19
    };

    newTotal += bathroomSinkTimeMap[answers[5].answer] * lowBathroomSinkFlowMap[answers[6].answer] / people;
    console.log("Bathroom sink " + newTotal);

    // Toilet
    // I will be using average 5 flushes per day per person (example)
    // answers and their value:
    // yes -> 4.5
    // some -> 8
    // no -> 10
    // total += 5 * answer
    const toiletMap = {
      'Да': 4.5,
      'Някои': 8,
      'Не': 10
    };

    newTotal += 5 * toiletMap[answers[7].answer] / people;
    console.log("Toilet " + newTotal);

    // Kitchen sink + low-flow kitchen sink are looked at together
    // <5 -> 4
    // 5-20 -> 13
    // 21-45 -> 33
    // >45 -> 45
    // low-flow? -> yes -> 6
    // no -> 19
    // total += time for kitchen sink * low-flow
    const kitchenSinkTimeMap = {
      '<5 минути': 4,
      '5-20 минути': 13,
      '21-45 минути': 33,
      '>45 минути': 45
    };

    const lowKitchenSinkFlowMap = {
      'Да': 6,
      'Не': 19
    };

    newTotal += kitchenSinkTimeMap[answers[8].answer] * lowKitchenSinkFlowMap[answers[9].answer] / people;
    console.log("Kitchen sink " + newTotal);

    // Dish question
    // if answer:
    // normal dishwasher -> 57
    // efficient dishwasher -> 16.3
    // hand -> 103
    // eat out -> 20 * people
    // period selected per answer:
    // per day -> 1
    // per wekk -> 1/7
    // per month -> 1/30
    // per year -> 1/365
    // total += normal dishwasher * period * times + efficient dishwasher * period * times + hand * period * times + eat out * period * times
    const dishMap = {
      'Обикновена съдомиялна': 57,
      'Енерго/Водоефективна съдомиялна': 16.3,
      'На ръка ': 103,
      'Хвърлям ги / Не ям вкъщи': 20 * people
    }
    
    for(let i = 0; i < answers[10].length; i++) {
      newTotal += dishMap[answers[10][i].option] * answers[10][i].times * periodMap[answers[10][i].period]/people;
    }
    console.log("Dish " + newTotal);

    // Washing question
    // I am putting myself an example answer for hand
    // if answer:
    // normal washing -> 41
    // efficient washing -> 75.7
    // hand -> 245 // made up
    // wash out -> 53
    // period selected per answer:
    // per day -> 1
    // per wekk -> 1/7
    // per month -> 1/30
    // per year -> 1/365
    // total += normal washing * period * times + efficient washing * period * times + hand * period * times + wash out * period * times
    const washMap = {
      'Обикновена пералня': 155,
      'Енерго/Водоефективна пералня': 75.7,
      'На ръка': 245,
      'Обществена пералня / Друго': 53
    }

    for(let i = 0; i < answers[11].length; i++) {
      newTotal += (washMap[answers[11][i].option] || 0) * answers[11][i].times * periodMap[answers[11][i].period]/people;
    }
    console.log("Washing " + newTotal);

    // Graywater
    // yes -> 0
    // no -> -1
    // total += graywater*people*90
    newTotal += (answers[12].answer === 'Да' ? -1 : 0) * people * 90;
    console.log("Graywater " + newTotal);

    // if there is a garden to water, we check the answers for how often (and big), cactus plants
    // period selected:
    // per day -> 1
    // per wekk -> 1/7
    // per month -> 1/30
    // per year -> 1/365
    // area selected:
    // 10 -> 65
    // 45 -> 375
    // 95 -> 940
    // 450 -> 3750
    // 1000 -> 9650
    // Cactus plants
    // yes -> 0.25
    // no -> 1
    // total += area*times*period*cactus
    const gardenAreaMap = {
      1: 65,
      2: 375,
      3: 940,
      4: 3750,
      5: 9650
    };

    const cactusMap = {
      'Да': 0.25,
      'Не': 1
    };

    if(answers[13].answer === 'Да') {
      newTotal += gardenAreaMap[answers[14].value] * answers[14].times * periodMap[answers[14].period] * cactusMap[answers[15].answer] / people;
    }
    console.log("Garden " + newTotal);
    
    // Barrel
    // yes -> -1
    // no -> 0
    // total += (15/people)*barrel
    newTotal += (answers[16].answer === 'Да' ? -1 : 0) * (15 / people);
    console.log("Barrel " + newTotal);

    // Pool (if there is) and months are looked at together
    // months uncovered (meaning 12 - selected months from the answer)
    // 1 -> 3.8
    // 2 -> 7.5
    // 3 -> 11.4
    // 4 -> 15.1
    // 5 -> 19
    // 6 -> 22.7
    // 7 -> 26.5
    // 8 -> 30.3
    // 9 -> 34.1
    // 10 -> 37.8
    // 11 -> 41.6
    // 12 -> 45.4
    // 68 is for the initial pool value
    // total += ((68 + months uncovered) * 1000)/ 365 / people
    const poolMonthsMap = {
      1: 3.8,
      2: 7.5,
      3: 11.4,
      4: 15.1,
      5: 19,
      6: 22.7,
      7: 26.5,
      8: 30.3,
      9: 34.1,
      10: 37.8,
      11: 41.6,
      12: 45.4
    };

    if (answers[17].answer === 'Да') {
      newTotal += ((68 + poolMonthsMap[12 - answers[18].months]) * 1000) / 365 / people;
    }
    console.log("Pool " + newTotal);

    // Car (if there is) and carwash
    // if answer:
    // hose -> 350
    // carwash -> 220
    // carwash self -> 60
    // period selected per answer:
    // per day -> 1
    // per wekk -> 1/7
    // per month -> 1/30
    // per year -> 1/365
    // total += hose * times * period + carwash * times * period + carwash self * times * period
    const carwashMap = {
      'С маркуч от вкъщи': 350,
      'Автомивка': 220, // 220 for virtual
      'Автомивка на самообслужване': 60 // 60 for virtual
    };

    for(let i = 0; i < answers[20].length; i++) {
      newTotal += carwashMap[answers[20][i].option] * answers[20][i].times * periodMap[answers[20][i].period] / people;
    }
    console.log("Car " + newTotal);

    let waterRaz = newTotal;
    setTotal((waterRaz).toFixed(0));
    setSum((waterRaz * (30 / 1000) * 3.695).toFixed(2));
    // waterRaz * (30 / 1000) * 3.695

    // Car km
    // total += answer / 0.6 / people / 7 <- to calc the day from a week
    // const ranges = [0, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500];
    newTotal += (answers[21].value + 150) / 0.6 / people / 7;
    console.log("Car km " + newTotal);

    // El
    // I am putting myself an example for water consumption: 113
    // total += el * 113
    newTotal += answers[22].el * 113 / 100;
    console.log("El " + newTotal);

    // Shopping answers:
    // needed -> 151
    // like -> 450
    // a lot -> 800
    // total += shopping answer
    const shoppingMap = {
      'Само нужното': 151,
      'Харесвам': 450,
      'До припадък!': 800
    };

    newTotal += shoppingMap[answers[23].answer];
    console.log("Shopping " + newTotal);

    // Paper answers:
    // yes -> 15
    // no -> 0
    // sometimes -> 5
    // total -= paper answer
    const paperMap = {
      'Да': 15,
      'Не': 0,
      'Понякога': 5
    };

    newTotal -= paperMap[answers[24].answer];
    console.log("Paper " + newTotal);

    // Plastic answers:
    // yes -> 62.5
    // no -> 0
    // sometimes -> 31
    // total -= plastic answer
    const plasticMap = {
      'Да': 62.5,
      'Не': 0,
      'Понякога': 31
    };

    newTotal -= plasticMap[answers[25].answer];
    console.log("Plastic " + newTotal);

    // Bottles and cans answers:
    // yes -> 100
    // no -> 0
    // sometimes -> 50
    // total -= bottles and cans answer
    const bottlesMap = {
      'Да': 100,
      'Не': 0,
      'Понякога': 50
    };

    newTotal -= bottlesMap[answers[26].answer];
    console.log("Bottles " + newTotal);

    // Fabric answers:
    // yes -> 21
    // no -> 0
    // sometimes -> 11.5
    // total -= fabric answer
    const fabricMap = {
      'Да': 21,
      'Не': 0,
      'Понякога': 11.5
    };

    newTotal -= fabricMap[answers[27].answer];
    console.log("Fabric " + newTotal);

    // Diet (if no one selected omnivores)
    // vegan -> 1500
    // vegetarian -> 2100
    // total += selected vegans * vegan + selected vegetarians * vegetarians
    const dietMap = {
      'vegan': 1500,
      'vegetarian': 2100
    };
    
    newTotal += answers[28].reduce((acc, curr) => {
      if (curr.vegan !== undefined) {
        acc += curr.vegan * dietMap['vegan'];
      }
      if (curr.vegetarian !== undefined) {
        acc += curr.vegetarian * dietMap['vegetarian'];
      }
      return acc/people;
    }, 0);
    
    console.log("Diet " + newTotal);    

    // Omnivores
    // not every day -> 2250
    // once a day -> 2900
    // twice a day -> 3550
    // every meal -> 4860
    // total += selected not every day * not every day + selected once a day * once a day
    // + selected twice a day * twice a day + selected every meal * every meal
    const omniMap = {
      'no': 2250,
      'once': 2900,
      'twice': 3550,
      'every': 4860
    };
    
    newTotal += answers[29].reduce((acc, curr) => {
      // Check if the value is greater than 0
      if (curr.no > 0) {
        acc += omniMap['no'] * curr.no;
      }
      if (curr.once > 0) {
        acc += omniMap['once'] * curr.once;
      }
      if (curr.twice > 0) {
        acc += omniMap['twice'] * curr.twice;
      }
      if (curr.every > 0) {
        acc += omniMap['every'] * curr.every;
      }
      return acc/people;
    }, 0);
    
    console.log("Omni " + newTotal);      

    // Pets
    // There is no data, but I will put an example
    // per 1 lv - 350
    // total += ((350*selected money*12)/365)/people
    newTotal += ((350 * answers[30].lv * 12) / 365) / people;
    console.log("Pets " + newTotal);


    // the total should always be rounded at the end
    let newVirtual = newTotal - waterRaz;
    setVirtual((newVirtual).toFixed(0));
  }, [answers]);

  return (
    <div className="results-container">
      {/* Background cloud base */}
      <img className="cloud-base" src={require("../images/all/cloud-base.svg").default} alt="Cloud Base" />
      
      {/* Title for the results */}
      <p className="results-title">Вашето потребление на водни услуги е</p>
      
      {/* Sun image */}
      <img className="sun" src={require("../images/all/sun.svg").default} alt="Sun" />
      
      {/* Button to go back to the beginning */}
      <button className="again" onClick={goBack}>Отначало</button>
      
      {/* Display the user's result (water footprint) */}
      <p className="your-results">{total} л./ден</p>

      {/* Display the user's result's sum (water footprint) */}
      <p className="your-sum">{total*30/1000} кубика, {sum} лв./месец</p>
      
      {/* Advanced results section */}
      <div className="advanced-results">
        <div className="water-footprint">
          <img className="water-footprint-drop" src={require("../images/all/water-drop-otpechatuk.svg").default} alt="Water Drop" />
          <p className="water-footprint-text">Воден <br />отпечатък</p>
          <p className="water-footprint-result">{virtual} л./ден</p>
        </div>
        <div className="results-advanced-container">
          {/* Map showing Bulgaria */}
          <img className="results-image-map" src={require("../images/all/blue-map.svg").default} alt="Bulgaria" />
          <p className="results-text">Средно за България: <br /> 130 л./ден</p>
        </div>
        <div className="results-advanced-container">
          {/* Text showing the average for the region */}
          <p className="results-text">Средно за областта: Няма информация</p>
          {/* Image showing Sofia area */}
          <img className="results-image-area" src={require("../images/all/sofia-city.svg").default} alt="Sofia" />
        </div>
      </div>

      <img className="tips-arrow" src={require("../images/all/tips-arrow.svg").default} alt="Arrow" onClick={scrollDown}/>

      {/* Tips */}
      <div className="tips-title">
        <img
          className="tips-background"
          src={require("../images/all/tips-background.svg").default}
          alt="Tips background"
        />
        <p className="tips-heading">Съвети</p>
      </div>
      {/* Render filtered tips */}
      <div className="all-tips">
        <div className="tips-container">
          {filteredTips.map((tip, index) => (
            <div
              key={index}
              className={`tip ${index % 2 === 0 ? "tip-left" : "tip-right"}`}
            >
              <img className="tip-icon" src={tip.icon} alt="Tip Icon" />
              <div className="tip-description">{tip.description}</div>
            </div>
          ))}
        </div>
      </div>

          
      
      {/* Clouds section */}
      <div className="clouds">
        {/* Multiple cloud images */}
        <img className="cloud-1" src={require("../images/all/cloud-1.svg").default} alt="Cloud" />
        <img className="cloud-2" src={require("../images/all/cloud-2.svg").default} alt="Cloud" />
        <img className="cloud-3" src={require("../images/all/cloud-3.svg").default} alt="Cloud" />
        <img className="cloud-4" src={require("../images/all/cloud-1.svg").default} alt="Cloud" />
        <img className="cloud-5" src={require("../images/all/cloud-2.svg").default} alt="Cloud" />
        <img className="cloud-6" src={require("../images/all/cloud-3.svg").default} alt="Cloud" />
        <img className="cloud-7" src={require("../images/all/cloud-1.svg").default} alt="Cloud" />
      </div>
    </div>
  );
}

export default Results;