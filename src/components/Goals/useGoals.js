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
const getTotalSingleNumber = (goalName, arrayDices) => {
  const number = Number(goalName);
  const total = arrayDices.reduce((prevNumber, nextNumber) => {
    if (nextNumber !== number) return prevNumber;

    return prevNumber + nextNumber;
  }, 0);

  return total;
};

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

const getSameNumbers = (dicesOccurence, minLength) => {
  const { length } = dicesOccurence;
  const lengthRequired = minLength;
  const hasEnoughOccurence = dicesOccurence.some(dice => dice.occurence >= lengthRequired);
  const matchNumber = dicesOccurence.some(dice => {
    const { occurence } = dice;

    return occurence >= lengthRequired;
  });

  if (length > lengthRequired || !hasEnoughOccurence || !matchNumber) return 0;

  const matchedDice = dicesOccurence.find(dice => dice.occurence >= lengthRequired);
  const { number } = matchedDice;
  const total = number * lengthRequired;

  return total;
};

const getTrips = dices => {
  const dicesOccurence = getNumberAndOccurence(dices);
  const total = getSameNumbers(dicesOccurence, 3);

  return total;
};
const getSquare = dices => {
  const dicesOccurence = getNumberAndOccurence(dices);
  const total = getSameNumbers(dicesOccurence, 4);

  return total;
};

const getFull = dices => {
  const dicesOccurence = getNumberAndOccurence(dices);
  const { length } = dicesOccurence;
  if (length !== 2) return 0;

  const isFull = dicesOccurence.some(dice => {
    return dice.occurence === 3;
  });

  if (!isFull) return 0;

  const Total = getTotalDices(dices);
  return Total;
};

const getYams = dices => {
  const dicesOccurence = getNumberAndOccurence(dices);
  const { length } = dicesOccurence;
  if (length !== 1) return 0;

  return 50;
};

const getTotalCombination = (goalName, dices) => {
  switch (goalName) {
    case 'petiteSuite':
      const petiteSuiteLength = getSuiteLength(dices);
      return getPetiteSuite(petiteSuiteLength);

    case 'largeSuite':
      const largeSuiteLength = getSuiteLength(dices);
      return getLargeSuite(largeSuiteLength);

    case 'trips':
      const tripsValue = getTrips(dices);
      return tripsValue;

    case 'square':
      const squareValue = getSquare(dices);
      return squareValue;

    case 'full':
      return getFull(dices);

    case 'luck':
      return getTotalDices(dices);

    case 'yams':
      return getYams(dices);

    default:
      break;
  }
};

const getScoreAvailable = (goals, dices) => {
  const scoreAvailable = goals.map(goal => {
    const { name, value, isOnlyNumber } = goal;
    if (value !== null) return goal;

    const total = isOnlyNumber
      ? getTotalSingleNumber(name, dices)
      : getTotalCombination(name, dices);

    const newGoal = { ...goal, value: total };

    return newGoal;
  });

  return scoreAvailable;
};

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
  getSquare,
  getFull,
  getYams,
  getScoreAvailable
};
export default useGoals;
