import styled from 'styled-components';
import { darken } from 'polished';

const getValueBackgroundColor = (isPositive, isDone) =>
  isDone ? '#ffcc66' : isPositive ? 'green' : '#333';

const ListGoals = styled.ul`
  background-color: #ffcc66;
  border-radius: 4px;
  border: 1px solid #333;
  list-style: none;
  min-width: 16rem;
  padding: 1rem;
`;

const ItemGoal = styled.li`
  padding: 0.25rem 0.5rem;
  position: relative;
  text-transform: capitalize;
  user-select: none;

  &:not(:first-child) {
    border-top: 1px solid #666;
  }
`;

const AvailableValue = styled.span`
  background-color: ${({ isPositive, isDone }) => getValueBackgroundColor(isPositive, isDone)};
  color: ${({ isDone }) => (!isDone ? '#fff' : '#333')};
  cursor: ${({ isDone }) => !isDone && 'pointer'};
  padding: 0.25rem 0.5rem;
  position: absolute;
  right: 0;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  width: 2rem;

  &:hover {
    background-color: ${({ isPositive, isDone }) =>
      !isDone && darken(0.08, getValueBackgroundColor(isPositive, isDone))};
  }
`;

export { ListGoals, ItemGoal, AvailableValue };
