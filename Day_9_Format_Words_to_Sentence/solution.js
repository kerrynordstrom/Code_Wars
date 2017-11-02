function formatWords(words){
  let string = '';
  if(!words){
    return '';
  }

  words = words.filter(word => word.length != "")

  for (let i=0; i < words.length; i++) {
    if (i < words.length - 2){
      string += words[i] + ', ';
    } else if (i === words.length - 2) {
      string += words[i] + ' and ';
    } else {
      string += words[i];
    }
  }
  return string;
}
