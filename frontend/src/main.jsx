import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme,ColorModeScript } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import "./index.css"; 
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";


const styles = {
  global: (props) => ({
    body: {
      color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      bg: props.colorMode === "dark" ? "#101010" : "gray.100",
    },
  }),
};

// Theme configuration
const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

// Custom colors
const colors = {
  gray: {
    light: "#616161",
    dark: "#1e1e1e",
  },
};

// Extend the Chakra UI theme
const theme = extendTheme({ config, styles, colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      
    <BrowserRouter>
    <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
      </ChakraProvider>
      </BrowserRouter></RecoilRoot>
  </React.StrictMode>
);
