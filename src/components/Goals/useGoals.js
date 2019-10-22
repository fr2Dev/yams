import { useState } from 'react';

const addGoals = arrayGoals => (name, isOnlyNumber = true) => {
  return [
    ...arrayGoals,
    {
      name,
      isOnlyNumber,
      isDone: false
    }
  ];
};

const setListGoals = () => {
  // Goals labels
  const numberOnlyGoalsLabels = ['1', '2', '3', '4', '5', '6'];
  const combinationsGoalsLabels = [
    'trips',
    'square',
    'full',
    'petiteSuite',
    'largeSuite',
    'yams',
    'luck'
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

const useGoals = () => {
  const [goals, setGoals] = useState(listGoals);
  return { goals };
};

export default useGoals;
