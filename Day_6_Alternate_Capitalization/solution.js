function capitalize(s){

  let firstArray = s.split('');
  let secondArray = s.split('');

  for(let i in firstArray){
    if(i % 2 === 0){
      firstArray[i] = firstArray[i].toUpperCase();
    }else{
      secondArray[i] = secondArray[i].toUpperCase();
    }
  }

  firstArray = firstArray.join('');
  secondArray = secondArray.join('');

  return [firstArray,secondArray];
};
