import { listGoals, getAvailableGoals, getOnlyNumbers, getCombinations } from './useGoals';

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

test('shoulg get right categorie of goals', () => {
  const goals = [
    {
      name: '1',
      isOnlyNumber: true
    },
    {
      name: '2',
      isOnlyNumber: true
    },
    {
      name: '3',
      isOnlyNumber: true
    },
    {
      name: 'trips',
      isOnlyNumber: false
    },
    {
      name: 'square',
      isOnlyNumber: false
    },
    {
      name: 'yams',
      isOnlyNumber: false
    }
  ];

  expect(getOnlyNumbers(goals)).toEqual([
    {
      name: '1',
      isOnlyNumber: true
    },
    {
      name: '2',
      isOnlyNumber: true
    },
    {
      name: '3',
      isOnlyNumber: true
    }
  ]);
  expect(getCombinations(goals)).toEqual([
    {
      name: 'trips',
      isOnlyNumber: false
    },
    {
      name: 'square',
      isOnlyNumber: false
    },
    {
      name: 'yams',
      isOnlyNumber: false
    }
  ]);
});
