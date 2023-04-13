const formatPriceVND = (number: number) => {
  var nf = new Intl.NumberFormat();
  return nf.format(number);
};

export { formatPriceVND };
