import { useState } from 'react';

const addGoals = arrayGoals => (name, isOnlyNumber = true) => {
  return [
    ...arrayGoals,
    {
      name,
      isOnlyNumber,
      value: null
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

const getAvailableGoals = goals => goals.filter(goal => goal.value === null);
// TODO: test
const getOnlyNumbers = goalsAvailable => goalsAvailable.filter(goal => goal.isOnlyNumber);
const getCombination = goalsAvailable => goalsAvailable.filter(goal => !goal.isOnlyNumber);

const useGoals = () => {
  const [goals, setGoals] = useState(listGoals);
  return { goals };
};

export { listGoals, getAvailableGoals };
export default useGoals;
