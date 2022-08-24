import { DefaultTheme } from "styled-components";

export const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const theme: DefaultTheme = {
  colors: {
    sign: "#5382eb",
    lightSign: "#6f94e9",
    grey: "#7e7e7e",
    midGrey: "#c6c6c6",
    lightGrey: "#d9e0e9",
    black: "#2b2b2b",
  },
  displayFlex: (align = "center", justify = "center", direction = "row") => {
    return `
    display : flex;
    align-items: ${align};
    justify-content:${justify};
    flex-direction: ${direction};
    `;
  },
  lineEllipsis: (type = "nowrap") => {
    return `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: ${type};
    word-break : break-word;
    `;
  },
  titleEllipsis: (type = "nowrap") => {
    return `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: ${type};
    `;
  },
  devices: {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  },
};
