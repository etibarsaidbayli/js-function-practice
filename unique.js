
function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    const restOfArray = array.slice(i + 1);

    if (includes(restOfArray, current) === false) {
      result.push(current);
    }
  }

  return result;
}
