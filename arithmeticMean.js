

function arithmeticMean(array = []) {
  const n = array.length;
  if (n === 0) {
    return 0;
  }
  const s = sum(array);
  return s / n;
}
