
function map(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const current = callback(array[i]);
    result.push(current);
  }

  return result;
}
