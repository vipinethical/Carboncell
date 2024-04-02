import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2ab42a", // Button background color
      contrastText: "#ffffff", // Button text color
      dark: "#FFA927", // Button background color on hover
    },
    secondary: {
      main: "#ACACAC", // Button background color
      contrastText: "#ffffff", // Button text color
      dark: "#ACACAC", // Button background color on hover
    },
    common: {
      black: "#0b0b0b", // Basic Black
      white: "#ffffff", // Basic White
    },
    grey: {
      50: "#f4f4f4",
      100: "#B4AEAE", // Light Grey
      200: "#D8D8D8", // Light Medium Grey
      400: "#969696", // Medium Grey
      600: "#646464", // Medium Dark Grey
      900: "#323232", // Dark Grey
    },
    yellow: {
      main: "#F6DC41",
      light: "#FFC063", // Warm Yellow
    },
    orange: {
      main: "#FF8B00", // Orange
      light: "#F5970B", // Light Orange
    },
    blue: {
      main: "#1BA2E8", // Cool Blue
      hover: "#1BA2E8", // Blue Hover
      dark: "#2A3259",
    },
    green: {
      main: "#41D33E", // Green
      hover: "#35B233", // Green Hover
    },
    purple: {
      main: "#1BA2E8", // Purple
      hover: "#1BA2E8", // Purple Hover
    },
    red: {
      main: "#F24B4B",
    },
  },

  typography: {
    fontFamily: "Open Sans, sans-serif", // Use Open Sans font
    fontSize: 16, // Default font size
    color: "#ffffff ",
    display: {
      fontSize: "64px",
      lineHeight: "72px",
    },
    h1: {
      fontSize: "56px",
      lineHeight: "64px",
    },
    h2: {
      fontSize: "48px",
      lineHeight: "56px",
    },
    h3: {
      fontSize: "40px",
      lineHeight: "48px",
    },
    h4: {
      fontSize: "32px",
      lineHeight: "40px",
    },
    h5: {
      fontSize: "24px",
      lineHeight: "32px",
    },
    h6: {
      fontSize: "20px",
      lineHeight: "28px",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    subtitle1: {
      fontSize: "14px",
      lineHeight: "22px",
    },
    caption: {
      fontSize: "12px",
      lineHeight: "20px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  spacing: 8, // Default spacing unit, can be overridden with theme.spacing() function
});

export default theme;
