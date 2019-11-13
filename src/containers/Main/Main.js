import React, { useState, useEffect } from 'react';
import Dice from '../../components/Dice';
import useDice from '../../components/Dice/useDice';
import useGoals from '../../components/Goals/useGoals';
import Goals from '../../components/Goals';
import Button from '../../components/Button';
import { Title, Container } from './style';

const Main = () => {
  // Hooks
  const { dices, throwDices, keepDices, toggleKeep } = useDice();
  const { goals } = useGoals();
  const [throws, setThrows] = useState(2);
  const [turn, setTurn] = useState(goals.length);

  useEffect(() => {
    throwDices();
  }, []);

  const setNewTurn = () => setTurn(turn - 1);
  const setNewThrows = () => setThrows(2);
  const goNextThrows = func => () => {
    if (throws > 0) {
      func();
      return setThrows(throws - 1);
    }
  };

  const dicesNumber = dices.map(dice => dice.number);
  const uniqueDices = [...new Set(dicesNumber)];
  console.log('uniqueDices: ', uniqueDices);

  const setNewThrow = () => goNextThrows(keepDices);
  const isThrowDisabled = throws === 0;

  return (
    <div>
      <Title>
        {turn} turn remainings - {throws} throws remainings
      </Title>
      <Container>
        <Goals goals={goals} dices={dices} />
        <div>
          {dices.map((dice, i) => (
            <Dice key={i.toString()} toggleKeep={toggleKeep} dice={dice} index={i} />
          ))}
          <Button onClick={setNewThrow()} disabled={isThrowDisabled}>
            throw
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Main;
