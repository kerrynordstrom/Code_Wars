function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let gooseFree = birds.filter(callBack);

  function callBack(el) {
    return geese.indexOf(el) < 0;
  }
  return gooseFree;
}
