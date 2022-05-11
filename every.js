

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const callbackResult = callback(array[i]);
    if (callbackResult === false) {
      return false;
    }
  }
  return true;
}
