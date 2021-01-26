import React from 'react';
import style from 'styled-components';

const StyledButton = style.button `
padding: 1rem 1.5rem;
font-size: 1.8rem;
color: ${props => (props.secondary ? 'grey' : 'black')};
outline: none;
`;

const Button = ({ secondary, primary, children }) => {
    return (
        <StyledButton secondary={secondary}> {children} </StyledButton>
    ); 
}; 

export default Button;