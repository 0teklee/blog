const dayJs = (date: string): string => {
  return date.slice(0, 10).replaceAll("-", "/");
};

export default dayJs;
