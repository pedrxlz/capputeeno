import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props: { colorMode: string }) => ({
    body: {
      bg: mode("#FFFFFF", "#000000")(props),
      fontFamily: "Inter",
    },
  }),
};

export const shadows = {
  outline: "0 0 0 3px var(--chakra-colors-klever-500)",
};

export const defaultColors = {
  primary: "#AA33B5",
  end: "#814fef",
  warningBg: "#FFFAF0",
  errorBg: "#FFF5F5",
  successBg: "#F0FFF4",
  warningText: "#ED8936",
  errorText: "#9B2C2C",
  successText: "#276749",
};

export const themeDark = {
  bg: "#000000",
  text: "#FFFFFF",
  secondary: "#171818",
  tertiary: "rgba(255, 255, 255, 0.5)",
  mask: "rgba(0, 0, 0, 1)",
  maskEnd: "rgba(0, 0, 0, 0.7)",
  accent: "rgba(235, 240, 240, 0.1)",
  shadow: "transparent",
  border: "rgba(207, 219, 213, 0.15)",
  borderDark: "rgba(207, 219, 213, 0.15)",
  ...defaultColors,
};

export const themeLight = {
  bg: "#FFFFFF",
  text: "#000000",
  secondary: "#f4f7f7",
  tertiary: "#5D5D5B",
  mask: "rgba(255, 255, 255, 1)",
  maskEnd: "rgba(255, 255, 255, 0)",
  accent: "rgba(235, 240, 240, 0.5)",
  shadow: "rgba(153, 155, 168, 0.25)",
  border: "rgba(207, 219, 213, 0.6)",
  borderDark: "transparent",
  ...defaultColors,
};
