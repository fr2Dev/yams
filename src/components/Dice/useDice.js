import { useState } from 'react';

const getRandomDice = () => Math.ceil(Math.random() * 6);
const getDicesLength = arrayDices => [...Array(5 - arrayDices.length)];
const getNewDices = arrayDices => {
  const newDices = arrayDices.reduce(previousDices => {
    const randomNumber = getRandomDice();

    return [...previousDices, { number: randomNumber, isKept: false }];
  }, []);

  return newDices;
};

const useDice = initialValue => {
  // Hooks
  const [dices, setDices] = useState(initialValue || []);
  const [keepedDices, setKeepedDices] = useState([]);

  const thrownLength = getDicesLength(keepedDices);

  const keepDices = () => {
    const dicesWanted = dices.filter(dice => dice.isKept);
    const restLength = getDicesLength(dicesWanted);
    const newDices = getNewDices(restLength);

    setKeepedDices(dicesWanted);
    setDices([...dicesWanted, ...newDices]);
  };

  const toggleKeep = i => {
    dices[i].isKept = !dices[i].isKept;
    setDices([...dices]);
  };

  const throwDices = () => {
    const newDices = getNewDices(thrownLength);
    setDices(newDices);
  };

  const resetDices = () => {
    const newDices = getNewDices(dices);
    setDices(newDices);
  };

  return {
    dices,
    setDices,
    throwDices,
    toggleKeep,
    keepDices,
    getDicesLength,
    resetDices
  };
};

export { getRandomDice, getDicesLength, getNewDices };
export default useDice;
