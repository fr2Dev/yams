import React, { useState, useEffect } from 'react';
import Dice from '../../components/Dice';
import useDice from '../../components/Dice/useDice';
import useGoals from '../../components/Goals/useGoals';
import useThrow from '../../hooks/useThrow';
import Goals from '../../components/Goals';
import Button from '../../components/Button';
import { Title, Container } from './style';

const Main = () => {
  // Hooks
  const { dices, throwDices, keepDices, toggleKeep, resetDices } = useDice();
  const {
    goals,
    getScoreAvailable,
    setGoalDone,
    getTotalScore,
    getTopScore,
    getMissingPrime
  } = useGoals();
  const { getDicesNumbers, getUniqueDices } = useThrow();
  const [throws, setThrows] = useState(2);
  const [turn, setTurn] = useState(goals.length);
  const [scoreTracking, setScoreTracking] = useState({
    score: 0,
    missingPrime: 0,
    total: 0
  });

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

  const dicesNumber = getDicesNumbers(dices);
  const scoreAvailable = getScoreAvailable(goals, dicesNumber);

  const setNewThrow = () => goNextThrows(keepDices);
  const scoreGoal = (value, i) => {
    setGoalDone(value, i);
    resetDices();
    setNewThrows();
    setNewTurn();
    setScoreTracking({
      score: getTopScore(goals),
      missingPrime: getMissingPrime(goals),
      total: getTotalScore(goals)
    });
  };

  const isThrowDisabled = throws === 0;

  return (
    <div>
      <Title>
        {turn} turn remainings - {throws} throws remainings
      </Title>
      <Container>
        <Goals goals={scoreAvailable} setGoalDone={scoreGoal} scoreTracking={scoreTracking} />
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
