import './Results.css';
import { useState, useEffect } from "react";

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
    
    newTotal += showerTimeMap[answers[2].answer] * lowFlowMap[answers[3].answer];
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

    newTotal += bathroomSinkTimeMap[answers[5].answer] * lowBathroomSinkFlowMap[answers[6].answer];
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

    newTotal += 5 * toiletMap[answers[7].answer];
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

    newTotal += kitchenSinkTimeMap[answers[8].answer] * lowKitchenSinkFlowMap[answers[9].answer];
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
      newTotal += dishMap[answers[10][i].option] * answers[10][i].times * periodMap[answers[10][i].period];
    }
    console.log("Dish " + newTotal);

    // Washing question
    // I am putting myself an example answer for hand
    // if answer:
    // normal washing -> 41
    // efficient washing -> 75.7
    // hand -> 10
    // wash out -> 53
    // period selected per answer:
    // per day -> 1
    // per wekk -> 1/7
    // per month -> 1/30
    // per year -> 1/365
    // total += normal washing * period * times + efficient washing * period * times + hand * period * times + wash out * period * times
    const washMap = {
      'Обикновена пералня': 41,
      'Енерго/Водоефективна пералня': 75.7,
      'На ръка': 10,
      'Обществена пералня / Друго': 53
    }

    for(let i = 0; i < answers[11].length; i++) {
      newTotal += (washMap[answers[11][i].option] || 0) * answers[11][i].times * periodMap[answers[11][i].period];
    }
    console.log("Washing " + newTotal);

    // Graywater
    // yes -> 0
    // no -> -1
    // total += graywater*people*90
    newTotal += (answers[12].answer === 'Да' ? 0 : -1) * people * 90;
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
      newTotal += gardenAreaMap[answers[14].value] * answers[14].times * periodMap[answers[14].period] * cactusMap[answers[15].answer];
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
      'Автомивка': 220,
      'Автомивка на самообслужване': 60
    };

    for(let i = 0; i < answers[20].length; i++) {
      newTotal += carwashMap[answers[20][i].option] * answers[20][i].times * periodMap[answers[20][i].period];
    }
    console.log("Car " + newTotal);

    // Car km
    // total += answer / 0.6 / people
    // const ranges = [0, 500, 750, 1000, 1250, 1500, 1750, 2000, 2250, 2500, 2750, 3000, 3250, 3500];
    newTotal += (answers[21].value + 150) / 0.6 / people;
    console.log("Car km " + newTotal);

    // El
    // I am putting myself an example for water consumption: 113
    // total += el * 113
    newTotal += answers[22].el * 113;
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
      return acc;
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
      return acc;
    }, 0);
    
    console.log("Omni " + newTotal);      

    // Pets
    // There is no data, but I will put an example
    // per 1 lv - 350
    // total += ((350*selected money*12)/365)/people
    newTotal += ((350 * answers[30].lv * 12) / 365) / people;
    console.log("Pets " + newTotal);


    // the total should always be rounded at the end
    setTotal((newTotal / 1000).toFixed(1));
  }, [answers]);

  return (
    <div className="results-container">
      {/* Background cloud base */}
      <img className="cloud-base" src={require("../images/all/cloud-base.svg").default} alt="Cloud Base" />
      
      {/* Title for the results */}
      <p className="results-title">Вашият воден отпечатък е</p>
      
      {/* Sun image */}
      <img className="sun" src={require("../images/all/sun.svg").default} alt="Sun" />
      
      {/* Button to go back to the beginning */}
      <button className="again" onClick={goBack}>Отначало</button>
      
      {/* Display the user's result (water footprint) */}
      <p className="your-results">{total} л³./ден</p>
      
      {/* Advanced results section */}
      <div className="advanced-results">
        <div className="results-advanced-container">
          {/* Map showing Bulgaria */}
          <img className="results-image-map" src={require("../images/all/blue-map.svg").default} alt="Bulgaria" />
          <p className="results-text">Средно за България: Няма информация</p>
        </div>
        <div className="results-advanced-container">
          {/* Text showing the average for the region */}
          <p className="results-text">Средно за областта: Няма информация</p>
          {/* Image showing Sofia area */}
          <img className="results-image-area" src={require("../images/all/sofia-city.svg").default} alt="Sofia" />
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