

function euclideanDistance(vector1 = [], vector2 = []) {
  const [x1=0, y1=0] = vector1;
  const [x2=0, y2=0] = vector2;
  const result = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
  return Math.sqrt(result);
}
