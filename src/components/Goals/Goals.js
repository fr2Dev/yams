import React from 'react';
import { ListGoals, ItemGoal, AvailableValue } from './style';

const Goals = ({ goals, dices, setGoalDone }) => {
  console.log('dices: ', dices);
  return (
    <ListGoals>
      {goals.map((goal, i) => {
        const { name, value, isDone } = goal;
        const isPositive = value > 0;

        return (
          <ItemGoal key={i.toString()}>
            {name}
            <AvailableValue
              isPositive={isPositive}
              isDone={isDone}
              onClick={() => !isDone && setGoalDone(value, i)}
            >
              {value}
            </AvailableValue>
          </ItemGoal>
        );
      })}
    </ListGoals>
  );
};

export default Goals;
