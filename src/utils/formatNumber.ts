export const formatNumber = (number: number | string) => {
  const parsedNumber = Number(number);

  return new Intl.NumberFormat().format(parsedNumber);
};
