import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../utils/theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    background-color: ${(theme) => theme.theme.colors.bg}
  }
`;

export default GlobalStyle;
