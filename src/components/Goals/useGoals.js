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

const useGoals = () => {
  const [goals, setGoals] = useState(listGoals);

  return { goals };
};
//TODO: Dans goals.js
//TODO: goals.map
//TODO: if value is null then calculate & value is onlyNumber use fn calcNumber else use fn calcCombination | display box value
//TODO: goal.value === null ? calculate && value is onlyNumber ? calcNumber : calcCombination && display box value

//* Calc number => If goal is present in Dices, count how many times and multiply goal.name by occurence to get total
//* Calc number => dices.some(goal => goal.name) && dices.reduce() && total = occurence * goal.value

export { listGoals, getAvailableGoals, getOnlyNumbers, getCombinations };
export default useGoals;
