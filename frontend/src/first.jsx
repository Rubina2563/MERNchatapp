import React from "react";
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react";
import customTheme from "./theme";

function TurnOnColorMode({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ThemeProvider>
  );
}

export default TurnOnColorMode;
