import { DefaultTheme } from "styled-components";

// make them as a css variable
const COLORS = {};

export const defaultTheme: DefaultTheme = {
  borderRadius: "4px",
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
};
