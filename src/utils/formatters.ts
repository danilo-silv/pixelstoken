export const currencyFormat = (number: number): string => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  });

  return formatter.format(number);
};
