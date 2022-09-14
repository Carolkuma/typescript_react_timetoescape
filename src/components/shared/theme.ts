import { DefaultTheme } from "styled-components";

// make them as a css variable
const COLORS = {};

export const defaultTheme: DefaultTheme = {
  mainColor: "#f6ad55",
  mainColorVar: "var(--main-color)",
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
    },
    primary: {
      main: "#726a95",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },
  colors: {
    powderWhite: "#FFFDF9",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
  },
};
