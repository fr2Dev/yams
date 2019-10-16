import { useState } from 'react';

const throwDice = () => Math.ceil(Math.random() * 6);
const getThrowsNumber = arrayDices => [...Array(5 - arrayDices.length)];
const getNewDices = arrayDices => {
  return arrayDices.reduce(previousDices => {
    const randomNumber = throwDice();

    return [...previousDices, { number: randomNumber, isKept: false }];
  }, []);
};

const useDice = initialValue => {
  // Hooks
  const [throws, setThrows] = useState(0);
  const [turn, setTurn] = useState(13);
  const [dices, setDices] = useState(initialValue || []);
  const [keepedDices, setKeepedDices] = useState([]);

  const diceThrows = getThrowsNumber(keepedDices);

  const setNewTurn = () => setTurn(turn - 1);

  const goNextThrows = func => () => {
    func();
    setThrows(throws + 1);
  };

  const setNewThrows = () => setThrows(0);

  const keepDices = () => {
    const dicesWanted = dices.filter(dice => dice.isKept);

    const throwsRest = getThrowsNumber(dicesWanted);
    const newDices = getNewDices(throwsRest);

    setKeepedDices(dicesWanted);
    setDices([...dicesWanted, ...newDices]);
  };

  const toggleKeep = i => {
    dices[i].isKept = !dices[i].isKept;
    setDices([...dices]);
  };

  const throwDices = () => {
    const newDices = getNewDices(diceThrows);
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
    throws,
    goNextThrows,
    setNewThrows,
    getThrowsNumber,
    turn,
    setNewTurn,
    resetDices
  };
};

export { throwDice, getThrowsNumber };
export default useDice;
