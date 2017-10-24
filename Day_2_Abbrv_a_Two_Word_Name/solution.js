function abbrevName(name){
  var dotName = name.split(' ');
  return `${dotName[0][0]}.${dotName[1][0]}`.toUpperCase();
}
