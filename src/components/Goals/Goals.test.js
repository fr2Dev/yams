import {
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
  getYams
} from './useGoals';

const dicesOne = [1, 3, 5, 3, 5];
const dicesTwo = [1, 4, 4, 4, 5];
const dicesThree = [1, 6, 6, 6, 6];
const dicesFour = [1, 6, 6, 1, 6];
const dicesFive = [1, 6, 6, 6, 6];
const dicesSix = [2, 2, 3, 2, 3];
const dicesYams = [2, 2, 2, 2, 2];

const dicesSuiteOne = [5, 2, 1, 6, 4];
const dicesSuiteTwo = [3, 2, 1, 6, 4];
const dicesSuiteThree = [5, 2, 1, 3, 4];

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

test('should get total single number', () => {
  expect(getTotalSingleNumber(1, dicesOne)).toEqual(1);
  expect(getTotalSingleNumber(3, dicesOne)).toEqual(6);
  expect(getTotalSingleNumber(5, dicesOne)).toEqual(10);
  expect(getTotalSingleNumber(1, dicesTwo)).toEqual(1);
  expect(getTotalSingleNumber(4, dicesTwo)).toEqual(12);
  expect(getTotalSingleNumber(5, dicesTwo)).toEqual(5);
  expect(getTotalSingleNumber(1, dicesThree)).toEqual(1);
  expect(getTotalSingleNumber(6, dicesThree)).toEqual(24);
});

test('should get dices total', () => {
  expect(getTotalDices(dicesOne)).toEqual(17);
  expect(getTotalDices(dicesTwo)).toEqual(18);
  expect(getTotalDices(dicesThree)).toEqual(25);
});

test('should get numbers and occurence', () => {
  expect(getNumberAndOccurence(dicesOne)).toEqual([
    {
      number: 1,
      occurence: 1
    },
    {
      number: 3,
      occurence: 2
    },
    {
      number: 5,
      occurence: 2
    }
  ]);
  expect(getNumberAndOccurence(dicesTwo)).toEqual([
    {
      number: 1,
      occurence: 1
    },
    {
      number: 4,
      occurence: 3
    },
    {
      number: 5,
      occurence: 1
    }
  ]);
  expect(getNumberAndOccurence(dicesThree)).toEqual([
    {
      number: 1,
      occurence: 1
    },
    {
      number: 6,
      occurence: 4
    }
  ]);
});

test('should get sorted dices suite length', () => {
  expect(getSuiteLength(dicesSuiteOne)).toBe(null);
  expect(getSuiteLength(dicesSuiteTwo)).toBe(4);
  expect(getSuiteLength(dicesSuiteThree)).toBe(5);
});

test('should get trips total value', () => {
  expect(getTrips('1', dicesOne)).toBe(0);
  expect(getTrips('3', dicesTwo)).toBe(0);
  expect(getTrips('4', dicesTwo)).toBe(12);
  expect(getTrips('5', dicesTwo)).toBe(0);
  expect(getTrips('1', dicesThree)).toBe(0);
  expect(getTrips('6', dicesThree)).toBe(18);
});

test('should get a square total value', () => {
  expect(getSquare('1', dicesOne)).toBe(0);
  expect(getSquare('3', dicesTwo)).toBe(0);
  expect(getSquare('4', dicesTwo)).toBe(0);
  expect(getSquare('5', dicesTwo)).toBe(0);
  expect(getSquare('1', dicesThree)).toBe(0);
  expect(getSquare('6', dicesThree)).toBe(24);
});

test('should get full value', () => {
  expect(getFull(dicesOne)).toBe(0);
  expect(getFull(dicesTwo)).toBe(0);
  expect(getFull(dicesThree)).toBe(0);
  expect(getFull(dicesFour)).toBe(20);
  expect(getFull(dicesFive)).toBe(0);
  expect(getFull(dicesSix)).toBe(12);
});

test('should get Yams', () => {
  expect(getYams(dicesOne)).toBe(0);
  expect(getYams(dicesTwo)).toBe(0);
  expect(getYams(dicesThree)).toBe(0);
  expect(getYams(dicesFour)).toBe(0);
  expect(getYams(dicesFive)).toBe(0);
  expect(getYams(dicesSix)).toBe(0);
  expect(getYams(dicesYams)).toBe(50);
});
