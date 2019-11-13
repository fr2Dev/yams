import styled from 'styled-components';

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
  background-color: #000;
  color: #fff;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    background-color: orangered;
  }
`;

export { ListGoals, ItemGoal, AvailableValue };
