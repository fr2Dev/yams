import React, { Fragment } from 'react';
import { ListGoals, ItemGoal, AvailableValue } from './style';

const Goals = ({ goals, setGoalDone, scoreTracking }) => {
  const { score, missingPrime, total } = scoreTracking;
  const hasPrime = score >= 63;
  const totalScore = hasPrime ? total + 35 : total;

  return (
    <ListGoals>
      {goals.map((goal, i) => {
        const { name, value, isDone } = goal;
        const isPositive = value > 0;
        const isTopScoreEnd = i === 5;
        const isGoalEnd = i === 12;

        return (
          <Fragment key={i.toString()}>
            <ItemGoal isDone={isDone}>
              {name}
              <AvailableValue
                isPositive={isPositive}
                isDone={isDone}
                onClick={() => !isDone && setGoalDone(value, i)}
              >
                {value}
              </AvailableValue>
            </ItemGoal>
            {isTopScoreEnd && (
              <Fragment>
                <ItemGoal isDone>
                  Score (63)
                  <AvailableValue isDone>{score}</AvailableValue>
                </ItemGoal>
                <ItemGoal isDone>
                  Prime (35)
                  <AvailableValue isDone>{missingPrime}</AvailableValue>
                </ItemGoal>
              </Fragment>
            )}
            {isGoalEnd && (
              <ItemGoal isDone>
                Total
                <AvailableValue isDone>{totalScore}</AvailableValue>
              </ItemGoal>
            )}
          </Fragment>
        );
      })}
    </ListGoals>
  );
};

export default Goals;
