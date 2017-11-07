function cubeOdd(arr) {
  for (var i in arr){
    if (typeof arr[i] !== 'number')
      return undefined;
  }
  var mapCubed = arr.map((arr) => {
    return Math.pow(arr,3);
  });
  var oddFilter = mapCubed.filter((num) => {
    return num % 2 !== 0;
  });
  var sum = oddFilter.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return sum;
}
