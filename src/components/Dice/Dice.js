import React from 'react';
import { Wrapper, Dot, Side } from './style';

const Dice = ({ number, isKept, index, toggleKeep }) => {
  const dots = [...Array(number)];

  return (
    <Wrapper isKept={isKept}>
      <Side number={number} onClick={() => toggleKeep(index)}>
        {dots.map((dot, i) => (
          <Dot key={i.toString()} />
        ))}
      </Side>
    </Wrapper>
  );
};

export default Dice;
