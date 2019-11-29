import { useState } from 'react';

const initialValue = null;

// InitListGoals
const addGoals = arrayGoals => (name, isOnlyNumber = true) => {
  return [
    ...arrayGoals,
    {
      name,
      isOnlyNumber,
      value: initialValue
    }
  ];
};
const setListGoals = () => {
  // Goals labels
  const numberOnlyGoalsLabels = ['1', '2', '3', '4', '5', '6'];
  const combinationsGoalsLabels = [
    'trips',
    'square',
    'petiteSuite',
    'largeSuite',
    'full',
    'luck',
    'yams'
  ];

  const numberOnlyGoals = numberOnlyGoalsLabels.reduce(
    (previousGoal, nextGoal) => addGoals(previousGoal)(nextGoal),
    []
  );
  const combinationsGoals = combinationsGoalsLabels.reduce(
    (previousGoal, nextGoal) => addGoals(previousGoal)(nextGoal, false),
    []
  );

  const totalGoals = [...numberOnlyGoals, ...combinationsGoals];
  return totalGoals;
};
const listGoals = setListGoals();
// End InitListGoals

const getAvailableGoals = goals => goals.filter(goal => goal.value === initialValue);
const getOnlyNumbers = goalsAvailable => goalsAvailable.filter(goal => goal.isOnlyNumber);
const getCombinations = goalsAvailable => goalsAvailable.filter(goal => !goal.isOnlyNumber);
const getTotalSingleNumber = (number, arrayDices) =>
  arrayDices.reduce((prevNumber, nextNumber) => {
    if (nextNumber !== number) return prevNumber;

    return prevNumber + nextNumber;
  }, 0);
const getTotalDices = dices => dices.reduce((prevDice, nextDice) => prevDice + nextDice, 0);

const getNumberAndOccurence = dices =>
  dices.reduce((prevNumbers, nextNumber) => {
    const hasPrevNumbers = prevNumbers.length > 0;

    if (hasPrevNumbers) {
      const isAlreadyPresent = prevNumbers.some(prevNumber => {
        return prevNumber.number === nextNumber;
      });
      if (isAlreadyPresent) {
        const updatedPrevNumbers = prevNumbers.map(prevNumber => {
          const { number, occurence } = prevNumber;
          if (number === nextNumber)
            return {
              number,
              occurence: occurence + 1
            };

          return prevNumber;
        });

        return updatedPrevNumbers;
      }
    }

    return [
      ...prevNumbers,
      {
        number: nextNumber,
        occurence: 1
      }
    ];
  }, []);

const getSuiteLength = dices => {
  const sortedDices = dices.sort();
  const getInitialValue = () => sortedDices[0] - 1;
  const initialValue = getInitialValue();
  const minimumLength = 4;
  let totalLength = 0;

  sortedDices.reduce((prev, next) => {
    const isSuite = next === prev + 1;
    isSuite ? (totalLength += 1) : totalLength < minimumLength && (totalLength = 1);
    return next;
  }, initialValue);

  if (totalLength < minimumLength) return null;
  return totalLength;
};

const getPetiteSuite = length => (length >= 4 ? 30 : 0);
const getLargeSuite = length => (length === 5 ? 50 : 0);

const getSameNumbers = (name, dicesOccurence, minLength) => {
  const { length } = dicesOccurence;
  const numberSearched = Number(name);
  const lengthRequired = minLength;
  const hasEnoughOccurence = dicesOccurence.some(dice => dice.occurence >= lengthRequired);
  const matchNumber = dicesOccurence.some(dice => {
    const { number, occurence } = dice;

    return number === numberSearched && occurence >= lengthRequired;
  });

  if (length > lengthRequired || !hasEnoughOccurence || !matchNumber) return 0;
  const tripsNumber = dicesOccurence.find(dice => dice.occurence >= lengthRequired);
  const { number } = tripsNumber;
  const total = number * lengthRequired;

  return total;
};

const getTrips = (name, dicesOccurence) => getSameNumbers(name, dicesOccurence, 3);
const getSquare = (name, dicesOccurence) => getSameNumbers(name, dicesOccurence, 4);

// const getTotalCombination = (goal, dices) => {
//   const { name } = goal;

//   switch (name) {
//*     case 'petiteSuite':
//*       const suiteLength = getSuiteLength(dices);
//*       return getPetiteSuite(suiteLength);
//*       break;

//*     case 'largeSuite':
//*       const suiteLength = getSuiteLength(dices);
//*       return getLargeSuite(suiteLength);
//*       break;

//*     case 'trips':
//*       const numberAndOccurence = getNumberAndOccurence(dices);
//*       return getTrips(name, numberAndOccurence);
//*       break;

//*     case 'square':
//*       const numberAndOccurence = getNumberAndOccurence(dices);
//*       return getSquare(name, numberAndOccurence);
//*       break;

//     case 'full':
//       return getFull();
//       break;

//     case 'yams':
//       return getYams();
//       break;

//     default:
//       break;
//   }
// };

const useGoals = () => {
  const [goals, setGoals] = useState(listGoals);

  return { goals };
};
//TODO: Dans goals.js
//TODO: goals.map
//TODO: if value is null then calculate & value is onlyNumber use fn calcNumber else use fn calcCombination | display box value
//TODO: goal.value === null ? calculate && value is onlyNumber ? calcNumber : calcCombination && display box value

//* Calc number => dices.some(goal => goal.name) && dices.reduce() && total = occurence * goal.value

export {
  listGoals,
  getAvailableGoals,
  getOnlyNumbers,
  getCombinations,
  getTotalSingleNumber,
  getTotalDices,
  getNumberAndOccurence,
  getSuiteLength,
  getTrips,
  getSquare
};
export default useGoals;
