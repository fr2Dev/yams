import useDice, { getRandomDice, getDicesLength, getNewDices } from './useDice';

test('Dice should be between 1 and 6', () => {
  expect(getRandomDice()).toBeLessThanOrEqual(6);
  expect(getRandomDice()).toBeGreaterThanOrEqual(1);
});

test('Should get right dices remaining', () => {
  expect(getDicesLength([])).toEqual([undefined, undefined, undefined, undefined, undefined]);
  expect(getDicesLength([1])).toEqual([undefined, undefined, undefined, undefined]);
  expect(getDicesLength([1, 2])).toEqual([undefined, undefined, undefined]);
  expect(getDicesLength([1, 2, 3])).toEqual([undefined, undefined]);
  expect(getDicesLength([1, 2, 3, 4])).toEqual([undefined]);
  expect(getDicesLength([1, 2, 3, 4, 5])).toEqual([]);
});

test('Should get 5 dices', () => {
  for (let i = 1; i < 6; i++) {
    expect(getNewDices([...Array(i)])).toHaveLength(i);
  }
});
