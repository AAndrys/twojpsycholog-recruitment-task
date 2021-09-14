export const breakpoints = {
  mobile: 400,
  desktop: 1216,
  desktopLarge: 1440,
};

const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(breakpoints.mobile),
  desktop: customMediaQuery(breakpoints.desktop),
  desktopLarge: customMediaQuery(breakpoints.desktopLarge),
};

export default media;
