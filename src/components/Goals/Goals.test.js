import { listGoals, getAvailableGoals } from './useGoals';

const getGoalsCompleted = number => {
  const goalsCompleted = listGoals.map((goal, i) => {
    if (number > i) return { ...goal, value: 0 };

    return goal;
  });

  return goalsCompleted;
};

const getGoalsRemaining = number => getAvailableGoals(getGoalsCompleted(number));

test('Should get all goals without value', () => {
  const freshGoals = getAvailableGoals(listGoals);
  expect(freshGoals).toEqual(listGoals);
});

test('should get corrert remainingGoals length', () => {
  const { length } = listGoals;

  listGoals.map((item, i) => {
    const numberGoalsAchieved = i + 1;
    const lengthExptected = length - numberGoalsAchieved;
    const goalRemaining = getGoalsRemaining(numberGoalsAchieved);
    expect(goalRemaining).toHaveLength(lengthExptected);
  });
});
