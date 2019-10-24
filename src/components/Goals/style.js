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
  text-transform: capitalize;
  user-select: none;

  &:not(:first-child) {
    border-top: 1px solid #666;
  }
`;

export { ListGoals, ItemGoal };
