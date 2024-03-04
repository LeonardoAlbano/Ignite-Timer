import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const ButtonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'

};

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;

    background-color: ${props => props.theme.primary};


    /*${props => {
        return `background-color: ${ButtonVariants[props.variant]}`
    }}*/
`; 