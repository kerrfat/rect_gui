// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      50: "#e6e3ff", // Lighter shade of primary color, adjust as needed
      100: "#b3b1ff", // Adjust as needed
      200: "#807eff", // Adjust as needed
      300: "#4d4bff", // Adjust as needed
      400: "#1a19ff", // Adjust as needed
      500: "#140f4b", // Your primary color
      600: "#100c3b", // Darker shade, adjust as needed
      700: "#0c082c", // Adjust as needed
      800: "#08051c", // Adjust as needed
      900: "#04020d", // Adjust as needed
    },
    // Add other color overrides or extend other parts of the theme as needed
  },
  components: {
    Button: {
      baseStyle: {
        _hover: { bg: "primary.600" }, // Example hover state using primary color
      },
    },
    // Override other component styles or add new ones as needed
  },
});

export default theme;
