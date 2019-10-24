import React from 'react';
import { ListGoals, ItemGoal } from './style';

const Goals = ({ goals, dices }) => {
  console.log('dices: ', dices);
  return (
    <ListGoals>
      {goals.map((goal, i) => {
        const { name } = goal;
        return <ItemGoal key={i.toString()}>{name}</ItemGoal>;
      })}
    </ListGoals>
  );
};

export default Goals;
