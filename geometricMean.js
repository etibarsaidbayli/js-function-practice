

function geometricMean(array = []) {
  const n = array.length;
  if (n === 0) return 0;

  let prod = 1;
  for (let i = 0; i < n; i++) {
    prod *= array[i];
  }

  return Math.pow(prod, 1 / n);
}
