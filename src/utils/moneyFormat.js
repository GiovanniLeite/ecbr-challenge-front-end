export const moneyFormat = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    // style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(Number(value));
};
