// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  colors: {
    brandBlue: {
      50: "#EAEFFD",
      100: "#BDCEFA",
      200: "#9DB6F7",
      300: "#7195F4",
      400: "#5581F1",
      500: "#2B61EE",
      600: "#2758D9",
      700: "#1F45A9",
      800: "#183583",
      900: "#122964",
    },

    gradientColor: {
      50: " linear-gradient(90deg, #d53369 0%, #daae51 100%)",
      100: "linear-gradient(90deg, #2B61EE 0%, #5c721f 100%)",
    },

    Accent1: {
      50: "#F9FAFB",
    },

    Accent2: {
      50: "#f9fdfe",
      100: "#06B6D4",
    },

    DarkText: {
      50: "#111827",
    },

    primaryColor: {
      50: "#fffff8",
      100: "#fffeeb",
      200: "#fffde1",
      300: "#fefcd3",
      400: "#fefcca",
      500: "#fefbbd",
      600: "#e7e4ac",
      700: "#b4b286",
      800: "#8c8a68",
      900: "#6b694f",
    },

    lemonColor: {
      50: "#f3f6ea",
      100: "#d8e2bd",
      200: "#c6d49d",
      300: "#abc071",
      400: "#9bb455",
      600: "#82a12b",
      700: "#5c721f",
      800: "#485918",
      900: "#374412",
    },

    specialColor: {
      400: "#F3FFD3",
    },

    bgCustom: {
      600: "#132935",
      900: "#0a171eff",
      500: "#F5F1DC",
      400: "#f7f5e9",
    },

    bgCustomA: {
      600: "#f1f4f8",
    },
  },
  fonts: {
    Heading: "Plus-Jakarta-Sans, open-sans",
    body: "inter, sans-serif",
  },
});

export default Theme;

// // For Chakra UI v2.x:
// import { createSystem, defaultConfig } from "@chakra-ui/react";

// // Create a custom system
// const Theme = createSystem(defaultConfig, {
//   theme: {
//     tokens: {
//       colors: {
//         blue: {
//           50: { value: "#eff6ff" },
//           100: { value: "#dbeafe" },
//           200: { value: "#bfdbfe" },
//           // ... add your colors
//         },
//       },
//       fonts: {
//         heading: { value: "Inter, sans-serif" },
//         body: { value: "Inter, sans-serif" },
//       },
//     },
//     semanticTokens: {
//       colors: {
//         "bg.card": { value: "{colors.white}" },
//       },
//     },
//   },
// });

// export default Theme;
