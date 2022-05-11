
function intersection(array1, array2) {
  const array = array1.concat(array2);
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (current === array[j]) {
        result.push(current);
      }
    }
  }

  return result;
}
