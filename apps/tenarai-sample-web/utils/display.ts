export const dispPrice = (price: number | undefined) => {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY',
  }).format(price || 0);
};
