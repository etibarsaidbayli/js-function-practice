
function random(lower = 0, upper = 0) {
  const randomNumber = Math.random() * upper + lower;
  return Math.floor(randomNumber);
}
