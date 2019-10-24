import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: orangered;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-weight: bold;
  padding: 0.3rem 0.6rem;
  text-transform: uppercase;
  cursor: pointer;

  &:focus {
    outline: #ffcc66 auto 1px;
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.3;
    cursor: inherit;
  `};
`;

export { StyledButton };
