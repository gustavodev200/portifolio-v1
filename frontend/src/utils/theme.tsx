import { ThemeProvider } from "styled-components";

const fontSizes: any = [10, 12, 14, 16, 20, 96];
fontSizes.body = fontSizes[0];
fontSizes.bodyExtraLarge = fontSizes[4];
fontSizes.displayExtraLarge = fontSizes[5];

const bg = "#141519";
const primary = "#ffff";
const blue = "3888FF";

const theme = {
  fontSizes,
  colors: {
    bg,
    primary,
    blue,
  },
};

export type ThemeType = typeof theme;

export const Theme: React.FC<ThemesProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

interface ThemesProps {
  children?: React.ReactNode;
}
