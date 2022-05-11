

function union(array1 = [], array2 = []) {
  const array = array1.concat(array2);
  return unique(array);
}
