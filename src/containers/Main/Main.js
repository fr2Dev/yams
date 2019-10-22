import React, { useState, useEffect } from 'react';
import Dice from '../../components/Dice';
import useDice from '../../components/Dice/useDice';

const Main = () => {
  // Hooks
  const [throws, setThrows] = useState(0);
  const [turn, setTurn] = useState(13);
  const { dices, throwDices, toggleKeep } = useDice();

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
      {dices.map((dice, i) => (
        <Dice key={i.toString()} toggleKeep={toggleKeep} dice={dice} index={i} />
      ))}
      <button onClick={() => throwDices()}>throw</button>
    </div>
  );
};

export default Main;
