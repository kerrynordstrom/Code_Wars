function insertDash(num) {
  let oddTest = num.toString();
  let c = 0;
  let result = "";

  while (c < oddTest.length) {

      if (parseInt(oddTest[c]) % 2 !== 0 && parseInt(oddTest[c + 1]) % 2 !== 0 && c !== oddTest.length-1)
    {
       result = `${result}${oddTest[c]}-`;

    } else if (parseInt(oddTest[c]) % 2 !== 0 && parseInt(oddTest[c + 1]) % 2 !== 0 && c === oddTest.length-1)

    {
        result = `${result}${oddTest[c]}`;

    } else

    {
        result = `${result}${oddTest[c]}`;
    }

    c++;

    }

  return result
}
