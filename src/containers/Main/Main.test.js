import { getDicesNumbers, getUniqueDices } from '../../hooks/useThrow';

// Possibilities
const trips = [6, 3, 6, 4, 6];
const square = [6, 6, 6, 4, 6];
const petiteSuite = [1, 2, 3, 4, 1];
const largeSuite = [1, 2, 3, 4, 5];
const full = [1, 2, 1, 2, 1];
const yams = [6, 6, 6, 6, 6];

const getDicesArray = dices => {
  const dicesArray = dices.map((item, i) => ({
    number: item,
    isKept: false
  }));
  return dicesArray;
};

const numbersTrips = getDicesNumbers(getDicesArray(trips));
const numbersSquare = getDicesNumbers(getDicesArray(square));
const numbersPetiteSuite = getDicesNumbers(getDicesArray(petiteSuite));
const numbersLargeSuite = getDicesNumbers(getDicesArray(largeSuite));
const numbersFull = getDicesNumbers(getDicesArray(full));
const numbersYams = getDicesNumbers(getDicesArray(yams));

test('Should get right numbers', () => {
  const dices = getDicesArray(largeSuite);
  expect(getDicesNumbers(dices)).toEqual(largeSuite);
});

test('Should get right amount of unique dices', () => {
  expect(getUniqueDices(numbersTrips)).toEqual([6, 3, 4]);
  expect(getUniqueDices(numbersSquare)).toEqual([6, 4]);
  expect(getUniqueDices(numbersPetiteSuite)).toEqual([1, 2, 3, 4]);
  expect(getUniqueDices(numbersLargeSuite)).toEqual([1, 2, 3, 4, 5]);
  expect(getUniqueDices(numbersFull)).toEqual([1, 2]);
  expect(getUniqueDices(numbersYams)).toEqual([6]);
});
