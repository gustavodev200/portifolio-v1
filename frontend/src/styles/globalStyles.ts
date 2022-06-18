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

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  li{
    list-style: none;
  }
`;

export default GlobalStyle;
