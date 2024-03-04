import { ButtonContainer, ButtonVariant } from "./Button.styles";

// Define uma interface ButtonProps para as propriedades do componente Button
interface ButtonProps{

    // A propriedade variant é opcional e deve ser do tipo ButtonVariant
    variant?: ButtonVariant; 
    
}

// Define o componente Button, que renderiza um botão com a variante especificada
export function Button({ variant = 'primary'}: ButtonProps) {

    // Retorna o componente ButtonContainer, passando a variante como propriedade e o texto "Enviar" como conteúdo do botão
    return (
    <ButtonContainer variant={variant} >
        Enviar
    </ButtonContainer> 
    
    )
}