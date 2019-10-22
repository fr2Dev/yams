import React, { useState, useEffect } from 'react';
import Dice from '../../components/Dice';
import useDice from '../../components/Dice/useDice';
import useGoals from '../../components/Goals/useGoals';

const Main = () => {
  // Hooks
  const { dices, throwDices, keepDices, toggleKeep } = useDice();
  const { goals } = useGoals();
  const [throws, setThrows] = useState(0);
  const [turn, setTurn] = useState(goals.length);
  console.log('goals: ', goals);

  useEffect(() => {
    throwDices();
  }, []);

  const setNewTurn = () => setTurn(turn - 1);
  const setNewThrows = () => setThrows(0);
  const goNextThrows = func => () => {
    func();
    setThrows(throws + 1);
  };

  return (
    <div>
      <h1>{turn} turn remanings</h1>
      {dices.map((dice, i) => (
        <Dice key={i.toString()} toggleKeep={toggleKeep} dice={dice} index={i} />
      ))}
      <button onClick={() => keepDices()}>throw</button>
    </div>
  );
};

export default Main;
