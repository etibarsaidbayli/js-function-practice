
function filter(array, callback) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const callbackResult = callback(array[i]);
    if (callbackResult === true) {
      result.push(array[i]);
    }
  }

  return result;
}
