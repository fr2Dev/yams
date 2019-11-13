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

//TODO: - apply operation on numbers & combinations
//TODO: - return array with value for each goals

export { listGoals, getAvailableGoals, getOnlyNumbers, getCombinations };
export default useGoals;
