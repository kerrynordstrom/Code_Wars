function find_average(array) {
  let sum = array.reduce((a, b) => {return a + b});
  return sum / array.length;
}
