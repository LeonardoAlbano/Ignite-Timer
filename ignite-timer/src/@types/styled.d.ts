import "styled-components";
import { defaltTheme } from "../styles/themes/default";

// Define um tipo ThemeTypes com base no tipo do defaultTheme
type ThemeTypes = typeof defaltTheme;

// Declara um módulo para estender as definições de tipo do 'styled-components'
declare module 'styled-components'{
    
    // Exporta uma interface DefaultTheme estendendo o ThemeType
    export interface DefaltTheme extends ThemeType {}
}