export const getYPositionClass = (index) => {
  const positions = {
    0: "lg:mb-12",
    2: "lg:mb-20",
    3: "lg:mt-28",
    4: "lg:mt-16",
    5: "lg:mt-32",
  };
  return positions[index] || ""; // Return the class or an empty string if not found
};
