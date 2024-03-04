// Importa a função 'styled' do pacote 'styled-components'
import styled from "styled-components";

// Define um tipo ButtonVariant que representa as variantes possíveis de um botão
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

// Define uma interface ButtonContainerProps para as propriedades do componente ButtonContainer
interface ButtonContainerProps {

    // A propriedade variant é do tipo ButtonVariant
    variant: ButtonVariant; 
}

// Define um objeto ButtonVariants que mapeia as variantes de botão para suas cores correspondentes
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

    // Aplica a cor de fundo do tema primário (opcional, dependendo da implementação do tema)
    background-color: ${props => props.theme['green-500']}; 
    color: ${props => props.theme['white']};

    /*
    ${props => {
        return `background-color: ${ButtonVariants[props.variant]}`
    }}
    */
`; 
