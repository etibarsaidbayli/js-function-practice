

function flat2D(array = []) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const innerArray = array[i];
    for (let j = 0; j < innerArray.length; j++) {
      result.push(innerArray[j]);
    }
  }

  return result;
}
