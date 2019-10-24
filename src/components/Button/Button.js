import React from 'react';
import { StyledButton } from './style';

const Button = ({ children, disabled, ...rest }) => {
  return (
    <StyledButton disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
