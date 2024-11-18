const theme = {
  config: {
    initialColorMode: "light", // Default color mode
    useSystemColorMode: false, // Disable system preference
  },
  colors: {
    light: {
      background: "#ffffff",
      text: "#000000",
      primary: "#3182ce", // Example primary color for light mode
      secondary: "#2c5282",
    },
    dark: {
      background: "#1a202c",
      text: "#f7fafc",
      primary: "#63b3ed", // Example primary color for dark mode
      secondary: "#2a4365",
    },
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Poppins, serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: "normal",
    none: "1",
    shorter: "1.25",
    short: "1.375",
    base: "1.5",
    tall: "1.625",
    taller: "2",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  styles: {
    global: (props) => ({
      body: {
        bg:
          props.colorMode === "dark"
            ? theme.colors.dark.background
            : theme.colors.light.background,
        color:
          props.colorMode === "dark"
            ? theme.colors.dark.text
            : theme.colors.light.text,
      },
    }),
  },
};

export default theme;
