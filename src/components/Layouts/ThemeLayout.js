import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "#191414",
  secondary: "#1DB954",
  gray: '#AEAEAE',
  white: '#fff',
  black: '#000'
};

const ThemeLayout = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeLayout;
