import React from 'react';
import { ListGoals, ItemGoal, AvailableValue } from './style';

const Goals = ({ goals, dices }) => {
  console.log('dices: ', dices);
  return (
    <ListGoals>
      {goals.map((goal, i) => {
        const { name, value } = goal;
        return (
          <ItemGoal key={i.toString()}>
            {name}
            <AvailableValue>{value}</AvailableValue>
          </ItemGoal>
        );
      })}
    </ListGoals>
  );
};

export default Goals;
