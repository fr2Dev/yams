import useDice, { throwDice, getThrowsNumber } from './useDice';

const {
  dices,
  setDices,
  throwDices,
  toggleKeep,
  keepDices,
  throws,
  goNextThrows,
  setNewThrows,
  turn,
  setNewTurn,
  resetDices
} = useDice;

test('Dice should be greater than or equal to 1', () => {
  expect(throwDice()).toBeGreaterThanOrEqual(1);
});

test('Dice should be less than or equal to 6', () => {
  expect(throwDice()).toBeLessThanOrEqual(6);
});

test('Should get right dices remaining', () => {
  expect(getThrowsNumber([])).toEqual([undefined, undefined, undefined, undefined, undefined]);
  expect(getThrowsNumber([1])).toEqual([undefined, undefined, undefined, undefined]);
  expect(getThrowsNumber([1, 2])).toEqual([undefined, undefined, undefined]);
  expect(getThrowsNumber([1, 2, 3])).toEqual([undefined, undefined]);
  expect(getThrowsNumber([1, 2, 3, 4])).toEqual([undefined]);
  expect(getThrowsNumber([1, 2, 3, 4, 5])).toEqual([]);
});
