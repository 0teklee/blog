export const getYPositionClass = (index: number) => {
  switch (index) {
    case 1:
      return "lg:mt-12";
    case 2:
      return "lg:mt-20";
    case 3:
      return "lg:mt-28";
    case 4:
      return "lg:mt-16";
    case 5:
      return "lg:mt-32";
    default:
      "";
  }
};
