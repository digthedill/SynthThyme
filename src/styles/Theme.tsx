import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    keyColor:
      "radial-gradient(100% 100% at 23.76% 0%, #646464 0%, #3D3D3D 94.71%)",
    keyShadow:
      "-2px -5px 14px -2px rgba(255, 255, 255, 0.58), 1px 3px 14px 1px rgba(0, 0, 0, 0.72)",
    componentBackground:
      "radial-gradient(91.7% 91.7% at -9.96% 3.9%, #303030 0%, #262626 100%, #262626 100%), #1C1B1B",
    componentShadow:
      "-2px -4px 12px rgba(0, 0, 0, 0.45), 2px 4px 12px rgba(254, 254, 254, 0.15)",
    componentRadius: "14px",
  },
  whiteKey: {
    height: "282px",
    width: "69px",
    borderRadius: "100px",
  },
  blackKey: {
    height: "222px",
    width: "54px",
    borderRadius: "100px",
  },
};

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
