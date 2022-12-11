"use strict";

const colors = {
  white: "#fffff",
  black: "#00000",
  green: { 1: "#64FFDA" },
  blue: { 1: "#112240", 2: "#1C2E43" },
  gray: { 1: "#CCD6F6", 2: "#A8B2D1", 3: "#8892b0" },
};
module.exports = {
  content: ["src/**/*.tsx"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      transparent: "transparent",
      "background-1": colors.blue[1],
      secondary: "#2a2b2b",
      white: "#ffffff",
      silver: "#ecebff",
      "text-1": colors.gray[1],
      "text-2": colors.gray[2],
      "text-green": colors.green[1],
      "text-sub": colors.gray[3],
    },
    fontFamily: {
      sans: ["Inter", "Calibre", "San Francisco", "SF Pro Text"],
      mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
    },
  },
  plugins: [],
};
