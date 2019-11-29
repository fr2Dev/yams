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
  getSquare
} from './useGoals';

const dicesOne = [1, 3, 5, 3, 5];
const dicesTwo = [1, 4, 4, 4, 5];
const dicesThree = [1, 6, 6, 6, 6];

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
  const occurenceDicesOne = getNumberAndOccurence(dicesOne);
  const occurenceDicesTwo = getNumberAndOccurence(dicesTwo);
  const occurenceDicesThree = getNumberAndOccurence(dicesThree);

  expect(getTrips('1', occurenceDicesOne)).toBe(0);
  expect(getTrips('3', occurenceDicesTwo)).toBe(0);
  expect(getTrips('4', occurenceDicesTwo)).toBe(12);
  expect(getTrips('5', occurenceDicesTwo)).toBe(0);
  expect(getTrips('1', occurenceDicesThree)).toBe(0);
  expect(getTrips('6', occurenceDicesThree)).toBe(18);
});
test('should get a square total value', () => {
  const occurenceDicesOne = getNumberAndOccurence(dicesOne);
  const occurenceDicesTwo = getNumberAndOccurence(dicesTwo);
  const occurenceDicesThree = getNumberAndOccurence(dicesThree);

  expect(getSquare('1', occurenceDicesOne)).toBe(0);
  expect(getSquare('3', occurenceDicesTwo)).toBe(0);
  expect(getSquare('4', occurenceDicesTwo)).toBe(0);
  expect(getSquare('5', occurenceDicesTwo)).toBe(0);
  expect(getSquare('1', occurenceDicesThree)).toBe(0);
  expect(getSquare('6', occurenceDicesThree)).toBe(24);
});
