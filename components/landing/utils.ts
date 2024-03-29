export const getYPositionClass = (index: number) => {
  switch (index) {
    case 0:
      return "lg:mt-6";
    case 1:
      return "lg:mt-20";
    case 2:
      return "lg:mb-12";
    case 3:
      return "lg:mt-16";
    case 4:
      return "lg:mt-32";
    case 5:
      return "lg:mt-32";
    default:
      "";
  }
};
